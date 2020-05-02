var config = {    
    accessToken: 'pk.eyJ1IjoiY2FuZGVsYXJpYW1hc3AiLCJhIjoiY2s4OHRpenVuMGNmeDNqbzF1ZmNnN2FwciJ9.e6kBICzbQ_RPjMFy5SgBtw',
    style: 'mapbox://styles/candelariamasp/ck8ad6zxn0y6y1ipfb4g33chl',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Points Unknown 2020 | Mapbox Storytelling',
    title: 'Gowanus on Repeat: XXX',
    byline: 'By Anays Mical González, Sharvari Raje, and Candelaria Mas Pohmajevic',
    description: 'On a cold winter morning at the Gowanus Canal, the sun is bright making the water glisten and the short waterfront promenade is full of early morning strollers. A man walks with his young daughter and a lady jogs past with her dog in tow. While this image paints the picture of an ideal weekend morning in Brooklyn, it hides the realities of this toxic and rapidly gentrifying neighborhood. Declared a superfund site in 2010 by the U.S. Environmental Protection Agency (EPA), the Gowanus Canal is and has been a highly polluted water body since the beginning of the 20th century. While the EPA is slated to begin clean up in September of this year, the city has parallel development plans for high density housing to be built along its edges. There is a lack of logical articulation in what these two things might mean when done simultaneously.',
    footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',
    chapters: [
        {//2 NPL Superfund Sites in NYC 
            id: 'superfundSites',
            title: 'Superfund Sites in NYC',
            description: 'The Gowanus Canal is one of the many Superfund sites in the New York City metro area. The Canal together with Newtown Creek, located slightly north of it, are part of the National Priority List (NPL) of Superfund sites since their designation in 2010. An initial investigation of both sites revealed the presence of a wide range of hazardous substances in the groundwater, soil, and canal sediments. The EPA “Superfund" program came into being in the late 1970s as a response to mitigate the major human health and environmental impacts caused by toxic waste that manufacturing facilities, processing plants, landfills, and mining sites left behind. The Superfund clean-up program is a long multi-phase process that takes an average of 20 to 30 years to be completed. According to the EPA, some of the Superfund program goals include making responsible parties pay for cleanup work and involving the community in the process. The final phase of the process is called Site Reuse / Redevelopment plan with the purpose of returning the site to productive use after it is declared safe for human use.',
            location: {
                center: [-74.044520, 40.725247],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'waterbodies',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//3
            id: 'twoContaminatedWaters',
            title: 'Two Conaminated Waterbodies',
            image: 'images/section_2_gc_nc-01.png',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Replace with text here',
            location: {
                center: [-74.015643, 40.705344],
                zoom: 12.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'waterbodies',
                    opacity: 1
                },
                {
                    layer: 'superfundsitestext', 
                    opacity: 1,
                },
                {
                    layer: 'superfundSites', 
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'superfundsitestext', 
                    opacity: 1,
                },
                {
                    layer: 'superfundSites', 
                    opacity: 1,
                }
            ]
        },
        /*{//4
            id: 'picture2',
            title: '<span class="lighter">The Gowanus Canal 1</span>',
            description: "<span class='lighter'>For this waterway, the Superfund clean-up hasn't really advanced but the plans for upzoning and development have already started.</span>",
            quote: "<span class='below'>“It’s getting more expensive for people that have lived here for generations”</span>",
            onChapterEnter: [],
            onChapterExit: []
        },
        {//5
            id: 'picture3',
            title: '<span class="lighter">The Gowanus Canal 2</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects but the toxicity of the water, together with neighbors' safety, fail to be addressed.</span>",
            quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",
            onChapterEnter: [],
            onChapterExit: []
        },*/
        {//6
            id: 'picture4',
            title: '<span class="lighter">Newtown Creek 1</span>',
            description: "<span class='lighter'>Some facts about newtown creek.</span>",
            /*quote: "<span class='below'>“It’s getting more expensive for people that have lived here for generations”</span>",*/
            onChapterEnter: [],
            onChapterExit: []
        },
        {//7
            id: 'picture5',
            title: '<span class="lighter">Newtown Creek 2</span>',
            description: "<span class='lighter'>Newtown Creek fact 2.</span>",
            /*quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",*/
            onChapterEnter: [],
            onChapterExit: []
        },
        {//8 zoom 1 - NCLocation
            id: 'NewtownCreekLocation',
            title: 'Newtown Creek',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'The Newtown Creek is a 3.8 mile long channelized water body that borders both the north of Brooklyn and the south of Queens. As a strategic waterway and port, it became heavily industrialized starting from the mid-nineteenth century up until today, resulting in an accumulation of pollution throughout the years. The contaminants generated from changing industries such as oil refineries, fertilizer and glue factories, sawmills, and commercial ships were not the only ones that contributed to the degradation of the Newtown Creek. Regrettably, the City also contributed to this pollution by dumping raw sewage into the water as early as 1856.',
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'superfundsitestext', 
                    opacity: 0,
                },
                {
                    layer: 'superfundSites', 
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'superfundsitestext', 
                    opacity: 0,
                },
                {
                    layer: 'superfundSites', 
                    opacity: 0,
                }
            ]
        },
        {//9 zoom 1 - NCpopDensity
            id: 'NCpopDensity',
            title: 'Newton Creek Predominantly Low Density',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'As of today, the neighborhood surrounding Newtown Creek has remained predominantly an industrial one characterized by the lack of proximity of residential units to the Creek, as it is highlighted in the map. If that’s so, then how many people live in an industrial zone that is beyond polluted?',
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
                },
                {
                    layer: 'superfundsitestext', 
                    opacity: 0,
                },
                {
                    layer: 'superfundSites', 
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'popDensity',
                    opacity: 0
                }
            ]
        },
        {//10 zoom 1 - NCresidential
            id: 'NCresidential',
            title: 'Newton Creek Predominantly Residential',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'The low population density in the next map further reveals the residential aspect as being secondary in this area and how many people are actually living near a toxic water body. In 1990, New York State declared that the water of Newtown Creek was not in compliance with the Clean Water Act standards. Additionally, the EPA Human Health Risk Assessment advised against eating contaminated fish. As part of the City’s cleaning efforts, the Newtown Creek Wastewater Treatment plant was upgraded in 2012, whose origins date back to the 1970s right after the Greenpoint oil spill.',
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
        {//11 zoom 1 - NCnewDevelopment 
            id: 'NCnewDevelopment',
            title: 'Newtown Creek Future Manufacturing Area',
            image: 'images/section_2_newton_creek.jpg',
            imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: 'Although other city and community cleanup efforts have taken place before, the Superfund process for the Newtown Creek began in 2009 and it is still in progress. After its designation in 2010, the EPA identified six potentially responsible parties (PRPs) for the cleanup including BP America, Inc., The Brooklyn Union Gas Company, and the City of New York.  and the City of New York. The PRPs were required to start the investigation process to help determine the levels of contamination. An updated list of the PRPs include Consolidated Edison Company of New York, National Railroad Passenger Corporation (AMTRAK). The cleanup process is currently at the third stage, Remedial Investigation / Feasibility Study, with some final reports due in 2020. The next step would be for the EPA to select a remedy and come up with a cleanup plan. Notwithstanding that there is no final cleanup plan, the City is already planning ahead for the future development of the Newtown Creek. The City’s plans are primarily focused on expanding manufacturing alongside  Creek.',
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'rezoning',
                    opacity: 1
                },
                {
                    layer: 'waterbodies',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'rezoning',
                    opacity: 0
                }
            ]
        },
        {//12
            id: 'picture6',
            title: '<span class="lighter">Gowanus Picture 3</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects but the toxicity of the water, together with neighbors' safety, fail to be addressed.</span>",
            quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",
            onChapterEnter: [
                {
                    layer: 'waterbodies',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//13
            id: 'picture7',
            title: '<span class="lighter">Gowanus Picture 4</span>',
            description: "<span class='lighter'>For this waterway, the Superfund clean-up hasn't really advanced but the plans for upzoning and development have already started.</span>",
            quote: "<span class='below'>“It’s getting more expensive for people that have lived here for generations”</span>",
            onChapterEnter: [],
            onChapterExit: []
        },
        {//14
            id: 'picture8',
            title: '<span class="lighter">Gowanus Picture 5</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects but the toxicity of the water, together with neighbors' safety, fail to be addressed.</span>",
            quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",
            onChapterEnter: [
                {
                    layer: 'waterbodies',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//15 zoom 2 - GCmpopDensity
            id: 'GCpopDensity',
            title: 'Gowanus Canal High Population Density',
            image: 'images/Chapter_4_Image.jpg', //add NYCHA pic to the side
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
                },
                {
                    layer: 'waterbodies',
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
        {//16 zoom 2 - GCresidential
            id: 'GCresidential',
            title: 'Gowanus Canal Predominantly Residential',
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
        {//17 zoom 2 - GCnewDevelopment
            id: 'GCnewDevelopment',
            title: 'Gowanus Canal Future Residential Increment',
            image: 'images/Chapter_4_Image.jpg', //Add pictures of the plan
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
                    layer: 'rezoning',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'rezoning',
                    opacity: 0
                }
            ]
        },
        {//18
            id: 'picture9',
            title: '<span class="lighter">Gowanus Conclusion</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects but the toxicity of the water, together with neighbors' safety, fail to be addressed.</span>",
            quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};