var config = {    
    accessToken: 'pk.eyJ1IjoiY2FuZGVsYXJpYW1hc3AiLCJhIjoiY2s4OHRpenVuMGNmeDNqbzF1ZmNnN2FwciJ9.e6kBICzbQ_RPjMFy5SgBtw',
    style: 'mapbox://styles/candelariamasp/ck8ad6zxn0y6y1ipfb4g33chl',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Points Unknown: Cartographic Narratives | Columbia GSAPP | Spring 2020',
    title: 'Gowanus on Repeat: Toxicity and Development',
    byline: 'By Anays Mical González, Sharvari Raje, and Candelaria Mas Pohmajevic',
    description: "On a cold winter morning at the Gowanus Canal, the sun is bright making the water glisten and the short waterfront promenade is full of early morning strollers. A man walks with his young daughter and a lady jogs past with her dog in tow. While this image paints the picture of an ideal weekend morning in Brooklyn, it hides the realities of this toxic and rapidly gentrifying neighborhood. Declared a superfund site in 2010 by the U.S. Environmental Protection Agency (EPA), the Gowanus Canal is and has been a highly polluted water body since the beginning of the nineteenth century. While the EPA is slated to begin the cleanup in September of this year, the city has parallel development plans for high-density housing to be built along its edges. There is a lack of clarity in what these two things might mean when done simultaneously, making Gowanus Canal a unique kind of superfund site. The Gowanus Canal is one of the seven Superfund sites near the New York City metro area.",
    footer: 'This story is based on data by the <a href="https://data.census.gov/cedsci/">United States Census Bureu</a>, Flood Maps from <a href="https://msc.fema.gov/portal/home">FEMA</a>, <a href="https://data.ny.gov/Energy-Environment/Combined-Sewer-Overflows-CSOs-Map/i8hd-rmbi">CSO by NYS Open Data</a> and reporting by <a href="https://www.nytimes.com/2018/01/11/realestate/brooklyn-real-estate-prices-climb-higher.html">the New York Times</a> and  <a href="https://www.brownstoner.com/neighborhood/gowanus/gowanus-canal-brooklyn-development-superfund-cso-tanks-gowanus-station-234-butler-street/">The Brownstoner</a>, <a href="https://ny.curbed.com/2019/3/28/18285233/dcp-gowanus-brooklyn-rezoning-create-8200-apartments"> Curbed</a>',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a> | <a href="https://www.arch.columbia.edu/">Columbia GSAPP</a>',
    chapters: [
        {//2 There are at Least 8 Superfund sites in NYC 
            id: 'superfundSites',
            title: '<span> There are at least 8 Superfund Sites in NYC Metropolitan area',
            description: "<span class='notes'> The EPA 'Superfund' program came into being in the late 1970s as a response to mitigate the major human health and environmental impacts caused by toxic waste that manufacturing facilities, processing plants, landfills, and mining sites left behind. The Superfund cleanup program is a long multi-phase process that takes an average of 20 to 30 years to be completed. The aims of the  Superfund program include making responsible parties pay for cleanup work and involving the community in the process. The final phase of the process is called Site Reuse / Redevelopment Plan,  the purpose of which is to return the site to productive use after it is declared safe for human use.<span class='credit'> Image Credit: <a href='https://www.epa.gov/superfund/what-superfund'>EPA What is a Superfund site?</a></span></span></span>",
            location: {
                center: [-74.015643, 40.705344],
                zoom: 12.3,
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
        {//3 The Tale of two polluted Water bodies
            id: 'twoPollutedWaters',
            title: "A Tale of Two Polluted Water Bodies",
            description: "The Gowanus Canal together with Newtown Creek have been part of the National Priority List (NPL) of Superfund sites since 2010. Since then, communities around them have advocated firmly for their cleanup but the pollution issue persists. An initial investigation of both sites revealed the presence of a wide range of hazardous substances in the groundwater, soil, and canal sediments. The fact that they are dangerously polluted has not stopped the city from devising development plans for both the neighborhoods that house these waterways.",
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
            onChapterExit: []
        },
        {//4 The gowanus industrial past
            id: 'picture2',
            title: "<span class='lighter'>The Industrial Past of the Gowanus</span>",
            description: "<span class='lighter'>The Gowanus Canal is a 1.8-mile-long canal located in the south of Brooklyn that ends in the New York Harbor. Along with its neighborhood, the canal has undergone a lot of changes since it was built in the 1860s. The area has preserved its original industrial character although industrial activity has ceased. While this image does justice to the industrial past of the canal, it does not illustrate the pollution that was slowly building up due to all the diesel-powered freight containers and toxic material spewing industries such as manufactured gas plants (MGP), paper mills, tanneries, and chemical plants, that continued to discharge waste into the canal for almost a century. Additionally, untreated sewage and surface water were allowed to flow directly into the canal, adding to its toxicity. The lack of regulations in the past and continued ignorance ever since have wrecked the Gowanus and converted it into one of the nation’s most contaminated water bodies.<span class='credit'>Image credit: <a href='https://www.brownstoner.com/wp-content/uploads/2016/04/gowanus-brooklyn-neighborhood.jpg'>The Brownstoner</a></span></span>",
            quote: "<span class='below'>'“I heard it’s the most toxic waterway in all of United States”, highlighted a neighbor.</span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//5 Today, Gowanus is Changing
            id: 'picture3',
            title: '<span class="lighter">Today, Gowanus is Changing</span>',
            description: "<span class='lighter'>In response to the dire need for affordable housing in NYC, the city is in the process of rezoning the neighborhood to be a mix of residential and commercial. Additionally, the Gowanus is located between Park Slope and Red Hook, both of which are relatively upscale neighborhoods. The combination of this has attracted a lot of developers that are looking to benefit from the industrial vibe of the neighborhood along with the desirability of the location. The city is now working with architects, planners, and developers to create high-density housing complexes along the waterfront. Gentrification aside, this abrupt change in the use of the land is expected to bring 8000 more housing units to the area, increasing the number of people coming in contact with not just the toxic water but also the allied health problems it brings along. However, the value of the neighborhood as a real estate asset precedes its toxicity. Click below to listen to why the neighborhood is an attractive investment to developers.<span class='credit'>Image credit: <a href='https://www.brownstoner.com/neighborhood/gowanus/gowanus-canal-brooklyn-development-superfund-cso-tanks-gowanus-station-234-butler-street/'>The Brownstoner</a></span></span></span>",
            audio: "<audio controls preload='none'><source src='audio/intervew_lee_ind.mp3'></audio>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//6 But Little Has Been Done To Recover Its Resilience
            id: 'picture4',
            title: '<span class="lighter">But Little Has Been Done To Recover Its Resilience</span>',
            description: "<span class='lighter'>The EPA has been continually delaying the cleanup of the canal, in spite of multiple efforts on the part of various community organizations. While the toxicity of the water and safety of the residents has not been addressed, people continue to use the canal for recreation, such as canoeing and diving, even when most of the contaminants found in the water are carcinogens. This could allude to the absence of adequate signboards alerting citizens of the same. Found contaminants include polycyclic aromatic hydrocarbons (PAHs), volatile organic compounds (VOCs), polychlorinated biphenyls (PCBs), pesticides, and metals. Additionally, the area undergoes frequent flooding from the combined sewage overflow points. This flooding will be aggravated by the rezoning of the Gowanus-  there is a projected increase of 1 billion gallons of sewage outfall per year, according to a study conducted by <span><a href='https://www.scapestudio.com/projects/the-gowanus-lowlands/'>SCAPE</a></span>. Furthermore, the EPA has established that the cleanup will not restore the water to its original state, but will only serve the purpose of mitigating the accumulated pollution. SCAPE is the Landscape Architecture firm that has worked with the <span><a href='https://gowanuscanalconservancy.org/'>Gowanus Canal Conservancy</a></span> to develop the 'Gowanus Lowlands' framework. <span class='credit'>Source: <a href='https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/gowanus/gowanus-framework-full.pdf '>Gowanus Lowlands PDF</a></span></span></span>",
            audio: "<audio controls preload='none'><source src='audio/interview_sewage_dvlp_problem_1.mp3'></audio>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//7 Newtown Creek is Not Like the Gowanus
            id: 'picture5',
            title: '<span class="lighter">Newtown Creek is Not Like the Gowanus</span>',
            description: "<span class='lighter'> While new residential developments are cropping up in Gowanus, the city’s plans for the Newtown Creek are primarily focused on expanding manufacturing to convert it into an industrial hub. The neighborhood is already mainly industrial and has kept residential development at a safe distance making it less densely populated along its edges. Therefore, fewer people come in contact with its toxicity as compared to Gowanus.<span class='credit'>Image Credit: <a href='https://www.hazenandsawyer.com/work/projects/nycdep-newtown-creek-wastewater-treatment-plant-secondary-treatment-upgrade/'>Hazen & Sawyer</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//8 zoom 1 - NCLocation
            id: 'NewtownCreekLocation',
            title: 'The Newtown Creek',
            description: 'The Newtown Creek is a 3.8-mile long channelized water body between Brooklyn and Queens, much longer than the Gowanus.',
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
            onChapterExit: []
        },
        {//9 The Newtown Creek Industrial Past
            id: 'picture6',
            title: '<span class="lighter">The Newtown Creek Industrial Past</span>',
            description: "<span class='lighter'> Due to its location, it was a strategic waterway and port that became heavily industrialized starting from the mid-nineteenth century until today, resulting in an accumulation of pollution throughout the years. Newtown Creek was crowded with commercial vessels and with more than 50 refineries in its surroundings. The contaminants generated from changing industries such as oil refineries, fertilizer and glue factories, sawmills, and commercial ships were not the only ones that contributed to the degradation of the Newtown Creek. Regrettably, the city also contributed to this pollution by dumping raw sewage into the water as early as 1856.<span class='credit'>Image Credit: <a href='https://qns.com/story/2018/03/31/dirty-yet-important-history-newtown-creek-neighborhood-way/'>qns</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//10 Today, Newtown Creek Expands its Industry
            id: 'picture7',
            title: '<span class="lighter">Today, Newtown Creek Expands its Industry</span>',
            description: "<span class='lighter'> Newtown Creek has evolved to become a major industrial hub in New York City, designated the third largest industrial hub in the city by employment. While the site is currently on pause, as it undergoes the Superfund cleanup process, development plans are looking towards the expansion of existing manufacturing along the Creek. The new developments promise new jobs for the residents and a more vibrant neighborhood. The rezoning for this waterbody won't have a direct impact on people, as it does not attempt to bring more residential developments closer to a toxic industrial area like in the Gowanus. <span class='credit'>Image Credit: <a href='https://brooklyneagle.com/articles/2019/12/04/to-get-raw-sewage-out-of-newtown-creek-epa-takes-the-cheap-route/'>Brooklyn Daily Eagle</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
         {//11 The Water Is Still Polluted
            id: 'picture8',
            title: '<span class="lighter">The Water Is Still Toxic</span>',
            description: "<span class='lighter'> In the 1990s, New York State declared that the water of Newtown Creek was not in compliance with the Clean Water Act standards. When this happened, it was already old news because for many years the water had been accumulating pollutants such as volatile organic compounds, semi-volatile organic compounds, metals (total and dissolved), polychlorinated biphenyl (PCB) aroclors and congeners, dioxins/furans and pesticides. Additionally, the EPA Human Health Risk Assessment advised against eating contaminated fish from the Creek. Similar to the Gowanus, the Superfund cleanup will only mitigate damage instead of restoring quality to the water. <span class='credit'>Image Credit: <a href='https://brooklyneagle.com/articles/2019/05/20/there-are-3-active-oil-spills-on-newtown-creek/'>Brooklyn Daily Eagle</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//12 zoom 1 - NCpopDensity
            id: 'NCpopDensity',
            title: 'Newtown Creek: Predominantly Low Density',
            image: 'images/population_density.png',
            description: 'As of today, not many people live in close proximity to the creek. This map shows the increasing population density detached from the creek.',
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
        {//13 zoom 1 - NCresidential
            id: 'NCresidential',
            title: 'Newtown Creek: Residential Area Disconnected from Water Body',
            image: 'images/Newtown_Rezoning.png',
            description: "The reason for the low population density close to the creek is that it is zoned to be industrial; and only after a certain buffer does the residential begin. The neighborhood continues to be predominantly industrial. Unlike Gowanus’ residential rezoning, the city’s plan for developing Newtown Creek maintains this buffer from the water body.",
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycResidential',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'nycResidential',
                    opacity: 0
                }
            ]
        },
        {//14 zoom 1 - NCnewDevelopment 
            id: 'NCnewDevelopment',
            title: 'Newtown Creek: Only Manufacturing Rezoning',
            image: 'images/Newtown_Rezoning.png',
            /*imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',*/
            description: '<span class="notes">Once the rezoning takes effect, Newtown Creek will be expanded and developed for industrial use. As part of the city’s cleaning efforts, the Newtown Creek Wastewater Treatment Plant was upgraded in 2012, originally built in the 1970s after the Greenpoint oil spill. The EPA Superfund process which began in 2009 is still in progress. After its designation in 2010, the EPA identified different potentially responsible parties (PRPs) for the cleanup including ExxonMobil Oil Corporation, Texaco, Inc. (now part of Chevron Corporation), Consolidated Edison Company of New York, Shell Oil Company, National Railroad Passenger Corporation (AMTRAK), and the City of New York. The PRPs were required to start the investigation process to help determine the levels of contamination. The cleanup process is currently at the third stage, Remedial Investigation / Feasibility Study, with final reports due in 2020. The next step is for the EPA to select a remedy and come up with a cleanup plan. Simultaneously, the city is planning for the future development of Newtown Creek. The city’s plans are primarily focused on expanding manufacturing alongside Newtown Creek to convert it into a core industrial hub for the city.<span class="credit">Source: <a href="https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/north-brooklyn-vision-plan/north-brooklyn-full-high.pdf">NYC North Brooklyn Industrial Innovation Plan</a></span></span></span>', 
            location: {
                center: [-73.961541, 40.727570],
                zoom: 13.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycResidential',
                    opacity: 1
                },
                {
                    layer: 'ncRezoning',
                    opacity: 1
                },
                {
                    layer: 'waterbodies',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'ncRezoning',
                    opacity: 0
                }
            ]
        },
        {//15 The Gowanus is a unique neighborhood
            id: 'picture9',
            title: '<span class="lighter">Unlike Newtown Creek, Gowanus Canal is a unique neighborhood</span>',
            description: "<span class='lighter'>The rezoning of the area around the Gowanus Canal, tending towards being a high-density, mixed-use neighborhood in spite of the toxicity, makes it a curious affair. While the neighborhood currently has a lot of space, there is a worry that once new developments come in, there will be pressure on not only the public infrastructure, such as open spaces but also on service infrastructures such as sewage, drainage, etc. This is also the reason that community organizations are protesting against rezoning development. In the voice note below, a resident's opinion on future development.</span>",
            audio: "<audio controls preload='none'><source src='audio/interview_gentrification_infrast_burdened_2.mp3'></audio>",
            location: {},
            onChapterEnter: [
                {
                    layer: 'waterbodies',
                    opacity: 0
                },
                {
                    layer: 'nycResidential',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//16 zoom 2 - GCpopDensity
            id: 'GCpopDensity',
            title: 'Gowanus Canal: Dense Area Next to a Toxic Water Body',
            image: 'images/population_density.png',
            description: "<span class='notes'>Unlike Newtown Creek, Gowanus Canal has a high population density in very close proximity to the water. The population density here is much higher when compared to any other Superfund sites, which leads us to question - why is the city proposing more density without addressing the challenge of toxicity first?<span class='credit'>Source: <a href='https://semspub.epa.gov/work/02/550165.pdf'>Gowanus Canal Superfund Site - Community Envolvement Plan</a></span></span></span>",
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
                },
                {
                    layer: 'flooding',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'popDensity',
                    opacity: 0
                }
            ]
        },
        {//17 zoom 2 - GCresidential
            id: 'GCresidential',
            title: 'Gowanus Canal: The Center of a Residential Area',
            image: 'images/Gowanus_Rezoning.png',
            description: 'A majority of the neighborhood around the Gowanus Canal is already zoned to be residential. The zoning leaves a much smaller buffer than the one at Newtown Creek, establishing that the EPA has not been diligent in providing information about the toxicity of not only the water in the Canal but also the soil surrounding it.',
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycResidential',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'nycResidential',
                    opacity: 0
                },
                {
                    layer: 'gcRezoning',
                    opacity: 0
                },
            ]
        },
        {//18 zoom 2 - GCnewDensification
            id: 'GCnewDevelopment',
            title: 'Gowanus Canal is Densifying',
            image: 'images/Gowanus_Rezoning.png',
            description: "<span class='notes'>The city’s rezoning plans are looking to convert the buffered edge of the water into mixed-use developments that house commercial and residential programs. While it is good to think about future development, the lack of coordination between the city and the EPA is astonishing. Some ongoing city cleanup efforts include the reconstruction of the Gowanus Wastewater Pump Station which began in 2010 and the Superfund cleanup which began in 2009. The Gowanus Canal is currently in the fifth phase of the Superfund process, which is the Remedial Design/Remedial Action. In 2019, the EPA developed the cleanup plans for the Canal and are now in the process of being implemented. In January 2020, the EPA issued an administrative order requiring PRPs to start the cleanup process, including Consolidated Edison Company of New York, Honeywell International Inc, and the City of New York.<span class='credit'>Source: <a href='https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/gowanus/gowanus-framework-full.pdf'>Gowanus: A Framework for a Sustainable, Inclusive, Mixed-use Neighborhood Plan</a></span></span></span>",
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycResidential',
                    opacity: 1
                },
                {
                    layer: 'gcRezoning',
                    opacity: 1
                },
                {
                    layer: 'flooding',
                    opacity: 0
                },
                {
                    layer: 'cso',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'gcRezoning',
                    opacity: 0
                },
            ]
        },
        {//19 Gowanus Canal Development Not resilient
            id: 'picture10',
            title: "<span class='lighter'>But does this development consider resilience?</span>",
            description: "<span class='lighter'>Current development patterns in the neighborhood display insensitivity towards the waters edge. The Waterfront Access Program (WAP), which addresses development at the edge, does very little in contemplating future resilience in regards to climate events such as floods, storms, etc.</span>",
            /*https://www1.nyc.gov/site/planning/plans/vision-2020-cwp/vision-2020-cwp.page*/
            location: {},
            onChapterEnter: [
                {
                    layer: 'flooding',
                    opacity: 0
                },
                {
                    layer: 'gcRezoning',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'gcRezoning',
                    opacity: 1
                },
            ]
        },
        {//20 zoom 2 - GCflooding
            id: 'GCflooding',
            title: 'Gowanus Canal will Further Flood',
            description: "The planned development for the Gowanus Canal is located within the coastal floodplain, putting at risk the lives of new potential residents.",
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'nycResidential',
                    opacity: 1
                },
                {
                    layer: 'gcRezoning',
                    opacity: 1
                },
                {
                    layer: 'flooding',
                    opacity: 0.7
                },
                {
                    layer: 'cso',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//21 zoom 2 - GCcso
            id: 'GCcso',
            title: 'Gowanus Canal: CSO Increment',
            image: 'images/CSO.png', 
            description: "<span class='notes'>The densification of the area will produce more Combined Sewage Overflow (CSO), exacerbating health and environmental risks along the Gowanus Canal. The EPA has rejected NYC DEP proposal of a tank that would have captured more gallons of untreated water alleging that such a solution relied on possible future flood control, resiliency, and infrastructure benefits that are outside of EPA's Superfund clean-up program.<span class='credit'>Source: <a href='https://semspub.epa.gov/work/02/581273.pdf'> EPA Rejection Letter to DEP</a></span></span></span>",
            location: {
                center: [-74.004426, 40.675859],
                zoom: 14.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'cso',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {//22 A Resilient Future for the Gowanus?
            id: 'picture11',
            title: '<span class="lighter">A Resilient Future for the Gowanus?</span>',
            description: "<span class='lighter'>There is a lot happening at the Gowanus today. Between the EPA clean-up, the rezoning development, the creeping gentrification, and the rallies against the development, this is a neighborhood that is at a crucial juncture. A senior designer at SCAPE speaks of the way to build a resilient Gowanus as being through collaborative development with real estate developers, architects, the city and the EPA. SCAPE is working with NYCDOP to design a booklet that dictates the design for the edge of the water, adding to the WAP document and hoping to create an ecologically sensitive framework for future development. Among all this, key challenges of increased pressure on infrastructure are not being taken seriously. While the development will aid the cleanup process of the canal, the city also needs to invest in upgrading essential services such as sewage and water drainage. With simultaneous timelines for the EPA clean-up and the rezoning and development of a mixed-use neighborhood on the banks of the canal, the question here is - what is the likelihood of such a collaboration?</span>",
            audio: "<audio controls preload='none'><source src='audio/intervew_lee_developers.mp3'></audio>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};