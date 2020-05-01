var config = {    
    accessToken: 'pk.eyJ1IjoiY2FuZGVsYXJpYW1hc3AiLCJhIjoiY2s4OHRpenVuMGNmeDNqbzF1ZmNnN2FwciJ9.e6kBICzbQ_RPjMFy5SgBtw',
    style: 'mapbox://styles/candelariamasp/ck8ad6zxn0y6y1ipfb4g33chl',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Points Unknown 2020 | Final Project | Mapbox Storytelling',
    title: 'Gowanus on Repeat: XXX',
    byline: 'By Anays González, Sharvari Raje, and Candelaria Mas Pohmajevic',
    description: 'On a cold winter morning at the Gowanus Canal, the sun is bright making the water glisten and the short waterfront promenade is full of early morning strollers. A man walks with his young daughter and a thirty-something lady jogs past with her dog in tow. While this image paints the picture of an ideal weekend morning in Brooklyn, it hides the realities of this toxic and rapidly gentrifying neighborhood. Declared a Superfund Site in 2010, the Gowanus is and has been a highly polluted water body since the beginning of the 20th century. While the EPA is slated to begin clean up in September of this year, the city has parallel development plans for high density housing to be built along its edges. There is a lack of logical articulation in what these two things mean when done simultaneously.',
    footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',
    chapters: [
        {//2 NPL Superfund Sites in NYC + add the pop up labels
            id: 'superfundSites',
            title: 'Superfund Sites in NYC',
            description: 'The Gowanus Canal is one of the many Superfund sites in the NYC metro area, and together with Newton Creek, located slightly north of the Gowanus, they are part of the National Priority List (NPL). An initial investigation of both sites revealed the presence of a wide range of hazardous substances in the groundwater, soil, and canal sediments. The “Superfund" program came into being in the late 1970s, as a response to mitigate the major human health and environmental impacts caused by toxic waste that manufacturing facilities, processing plants, landfills and mining sites left behind. The usual Superfund clean-up program is a long multi-phase process that concludes with a Site Reuse/Redevelopment plan, after the site is declared safe for human use.',
            location: {
                center: [-74, 40.725],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {//3
            id: 'picture2',
            title: '<span class="lighter">Gowanus Development Now</span>',
            description: "<span class='lighter'>For this waterway, the Superfund clean-up hasn't really advanced but the plans for upzoning and development have already started.</span>",
            quote: "<span class='below'>“It’s getting more expensive for people that have lived here for generations”</span>",
            onChapterEnter: [],
            onChapterExit: []
        },
        {//4
            id: 'picture3',
            title: '<span class="lighter">Gowanus Water Now</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects but the toxicity of the water, together with neighbors' safety, fail to be addressed.</span>",
            quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",
            onChapterEnter: [],
            onChapterExit: []
        },
        {//5
            id: 'incomeUnderlay',
            title: 'Why is the Gowanus so special?',
            image: 'images/section_2_gc_nc-01.png',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Replace with text here',
            location: {
                center: [-74, 40.725],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'medianIncome',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'medianIncome',
                    opacity: 0
                }
            ]
        },
        {//6 zoom 1 - NCmedianIncome
            id: 'NCmedianIncome',
            title: 'Newton Creek Superfund Site',
            image: 'images/section_2_newton_creek.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Replace with text here',
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'medianIncome',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'medianIncome',
                    opacity: 0
                }
            ]
        },
        {//7 zoom 1 - NCpopDensity
            id: 'NCpopDensity',
            title: 'Population Density around Newton Creek',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Replace with text here',
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'popDensity',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'popDensity',
                    opacity: 0
                }
            ]
        },
        {//8 zoom 1 - NCresidential
            id: 'NCresidential',
            title: 'Residential Use around Newton Creek',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Replace with text here',
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycZoning',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'nycZoning',
                    opacity: 0
                }
            ]
        },
        {//9 zoom 2 - GCmedianIncome
            id: 'GCmedianIncome',
            title: 'The South Bronx, as Always',
            image: 'images/Chapter_4_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "Replace with text here",
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'medianIncome',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'medianIncome',
                    opacity: 0
                }
            ]
        },
        {//10 zoom 2 - GCmpopDensity
            id: 'GCpopDensity',
            title: 'The South Bronx, as Always',
            image: 'images/Chapter_4_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "Replace with text here.",
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'popDensity',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'popDensity',
                    opacity: 0
                }
            ]
        },
        {//11 zoom 2 - GCresidential
            id: 'GCresidential',
            title: 'Residential Use around Gowanus Canal',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Replace with text here',
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycZoning',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'nycZoning',
                    opacity: 0
                }
            ]
        },
    ]
};