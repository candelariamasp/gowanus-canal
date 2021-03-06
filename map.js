/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');
// Create new div element - NEW
var wrapper = document.createElement('div');
// Set attribute id with value "wrapper" to this element - NEW
wrapper.setAttribute("id", "wrapper");
// Make wrapper div a child of header - NEW
header.appendChild(wrapper);

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    wrapper.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    wrapper.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    wrapper.appendChild(bylineText);
}
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    wrapper.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerHTML = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Image credit: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the credit for the vignette
    if (record.source) {
        var source = document.createElement('p');
        source.classList.add('source');
        source.innerHTML = 'Source: ' + record.source;
        chapter.appendChild(source);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Creates the quote for the image
    if (record.quote) {
        var story = document.createElement('p');
        story.innerHTML = record.quote;
        chapter.appendChild(story);
    }
    // Creates the audio 
    if (record.audio) {
        var story = document.createElement('p');
        story.innerHTML = record.audio;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }
    // Add the first new layer
    map.addLayer({
        'id': 'superfundSites',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/superfund_sites.geojson'
        },
        'paint': {
            'circle-color': '#ff7f50'
        }
    }, firstSymbolId);

    // Add the labels layer
    map.addLayer({
        'id': 'superfundsitestext',
        'type': 'symbol',
        'source': {
            'type': 'geojson',
            'data': 'data/superfund_sites.geojson'
        },
        'layout': {
            'text-field': ['get', 'site_name'],
            'text-allow-overlap': true,
            'text-offset': [0, 0.8],
            'text-anchor': 'top',
            'text-size': 10
        },
        'paint': {
            'text-color': "#ff7f50"
        }
    }, firstSymbolId);
    //Add the waterbodies fill
    map.addLayer({
        'id': 'waterbodies',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/waterbodies_fill.geojson'
        },
        'paint': {
          'fill-color': '#138b95',
          'fill-opacity': 0
      }
    }, 'superfundSites');
    // Add the Pop Density layer 
    map.addLayer({
        'id': 'popDensity',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/nyc_pop_density.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'B03002_TotPop'],
                '#ffffff',
                800, '#feedde',
                1100, '#fdbe85',
                1400, '#fd8d3c',
                1800, '#e6550d',
                9300, '#a63603'],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');
    // Add the NYC Current Residential
    map.addLayer({
        'id': 'nycResidential',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/nyc_zoning.geojson'
        },
        'paint': {
            'fill-color':'#D4844A',
            'fill-opacity': 0
        }
    }, 'waterway-shadow');
    // Add the NC Manufacturing
    map.addLayer({
        'id': 'ncRezoning',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/newtown_rezoning.geojson'
        },
        'paint': {
            'fill-color':'#989898',
            'fill-opacity': 0
        }
    }, 'waterway-shadow');
    // Add the GC Rezoning Layer
    map.addLayer({
        'id': 'gcRezoning',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/gowanus_rezoning.geojson'
        },
        'paint': {
          'fill-color': '#99532E',
          'fill-opacity': 0,
      }
    }, 'waterway-shadow');
    // Add CSO points
    // Add the Flooding Layer
    map.addLayer({
        'id': 'flooding',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/gowanus_flooding.geojson'
        },
        'paint': {
            'fill-color': '#98d6d2',
            'fill-opacity': 0
        }
    }, firstSymbolId);
    map.addLayer({
        'id': 'cso',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/cso.geojson'
        },
        'paint': {
          'circle-color': '#4A1109',
          'circle-opacity': 0
        }
    }, firstSymbolId);

    // Setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);