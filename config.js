var config = {    
    accessToken: 'pk.eyJ1IjoiY2FuZGVsYXJpYW1hc3AiLCJhIjoiY2s4OHRpenVuMGNmeDNqbzF1ZmNnN2FwciJ9.e6kBICzbQ_RPjMFy5SgBtw',
    style: 'mapbox://styles/candelariamasp/ck8ad6zxn0y6y1ipfb4g33chl',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Points Unknown: Cartographic Narratives | Columbia GSAPP | Spring 2020',
    title: 'Gowanus on Repeat: Toxicity and Development',
    byline: 'By Anays Mical González, Sharvari Raje, and Candelaria Mas Pohmajevic',
    description: "On a cold winter morning at the Gowanus Canal, the sun is bright making the water glisten and the short waterfront promenade is full of early morning strollers. A man walks with his young daughter and a lady jogs past with her dog in tow. While this image paints the picture of an ideal weekend morning in Brooklyn, it hides the realities of this toxic and rapidly gentrifying neighborhood. Declared a superfund site in 2010 by the U.S. Environmental Protection Agency (EPA), the Gowanus Canal is and has been a highly polluted water body since the beginning of the nineteenth century. While the EPA is slated to begin the cleanup in September of this year, the city has parallel development plans for high density housing to be built along its edges. There is a lack of logical articulation in what these two things might mean when done simultaneously, making Gowanus Canal a unique kind of superfund site. The Gowanus Canal is one of the seven Superfund sites near the New York City metro area.",
    footer: 'This story is based on data by the <a href="https://data.census.gov/cedsci/">United States Census Bureu</a>, Flood Maps from <a href="https://msc.fema.gov/portal/home">FEMA</a>, <a href="https://data.ny.gov/Energy-Environment/Combined-Sewer-Overflows-CSOs-Map/i8hd-rmbi">CSO by NYS Open Data</a> and reporting by <a href="https://www.nytimes.com/2018/01/11/realestate/brooklyn-real-estate-prices-climb-higher.html">the New York Times</a> and  <a href="https://www.brownstoner.com/neighborhood/gowanus/gowanus-canal-brooklyn-development-superfund-cso-tanks-gowanus-station-234-butler-street/">The Brownstoner</a>, <a href="https://ny.curbed.com/2019/3/28/18285233/dcp-gowanus-brooklyn-rezoning-create-8200-apartments"> Curbed</a>',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a> | <a href="https://www.arch.columbia.edu/">Columbia GSAPP</a>',
    chapters: [
        {//2 There are at Least 8 Superfund sites in NYC 
            id: 'superfundSites',
            title: '<span> There are at least 8 Superfund Sites in NYC Metropolitan area',
            description: "<span class='notes'> The EPA 'Superfund' program came into being in the late 1970s as a response to mitigate the major human health and environmental impacts caused by toxic waste that manufacturing facilities, processing plants, landfills, and mining sites left behind. The Superfund cleanup program is a long multi-phase process that takes an average of 20 to 30 years to be completed. Some of the Superfund program goals include making responsible parties pay for cleanup work and involving the community in the process. The final phase of the process is called Site Reuse / Redevelopment Plan with the purpose of returning the site to productive use after it is declared safe for human use. <span class='credit'> Image Credit: <a href='https://www.epa.gov/superfund/what-superfund'>EPA What is a Superfund site?</a></span></span></span>",
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
            title: 'The Tale of Two Polluted Water Bodies',
            description: 'The Gowanus Canal together with Newtown Creek, located slightly north of it, are part of the National Priority List (NPL) of Superfund sites since their designation in 2010. These two water bodies have been part of numerous community and city cleanup efforts that haven’t been able to fully address the problem. An initial investigation of both sites revealed the presence of a wide range of hazardous substances in the groundwater, soil, and canal sediments. The fact that they are dangerously polluted has not stopped the city from moving forward with development plans for both waterways no matter if they are cleaned or not.',
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
            title: "<span class='lighter'>The Gowanus Industrial Past</span>",
            description: "<span class='lighter'>The Gowanus Canal is a 1.8-mile long canal located in the south of Brooklyn that ends in the New York Harbor. Along with its surroundings, it has undergone lots of changes since it was built in the 1860s, but its industrial character has prevailed through the years even though most industrial activity has decreased today. What these historic images cannot show is the pollution that was slowly building up in the canal due to all the ships traveling through the canal and the surrounding companies, such as manufactured gas plants (MGP), paper mills, tanneries and chemical plants, discharging waste into the canal. Let’s add raw sewage and surface water to that contamination mix. The lack of regulations in the past and ignorance in the present have depleted the Gowanus and converted it into one of the nation’s most contaminated water bodies.<span class='credit'>Image credit: <a href='https://www.brownstoner.com/wp-content/uploads/2016/04/gowanus-brooklyn-neighborhood.jpg'>The Brownstoner</a></span></span>",
            quote: "<span class='below'>'“I heard it’s the most toxic waterway in all of United States”, highlighted a neighbor.</span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//5 Today, It is a Rapidly Transforming Site
            id: 'picture3',
            title: '<span class="lighter">Today, It is a Rapidly Transforming Site</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects that want to benefit from the industrial character of the area. The Gowanus is located between Park Slope and Red Hook, both relatively upscale neighborhoods, which makes this area even more desirable. The city has taken advantage of this by developing a plan that will densify the area near the Gowanus Canal and rezone it into residential area. Could this be an attempt to solve the need of affordable housing in New York City? We don’t really know, but the city’s plans seem to be going full steam in spite of the current condition of the Gowanus Canal. Its value as a neighborhood canvas with industrial character seems to go above cleaning efforts. Click below to listen to why the industrial character is so valued today.<span class='credit'>Image credit: <a href='https://www.brownstoner.com/neighborhood/gowanus/gowanus-canal-brooklyn-development-superfund-cso-tanks-gowanus-station-234-butler-street/'>The Brownstoner</a></span></span></span>",
            audio: "<audio controls preload='none'><source src='audio/intervew_lee_ind.mp3'></audio>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//6 But the EPA has Done Little To Recover Its Resilience
            id: 'picture4',
            title: '<span class="lighter">But the EPA has Done Little To Recover Its Resilience</span>',
            description: "<span class='lighter'>The toxicity of the water together with the neighbors' safety fail to be addressed. Residents continue to use the canal for recreation, such as canoeing and diving, even when most of the contaminants found in the water are carcinogens. Found contaminants include polycyclic aromatic hydrocarbons (PAHs), volatile organic compounds (VOCs), polychlorinated biphenyls (PCBs), pesticides, and metals. Also, the area suffers from sewage outfall floods which will be aggravated by the Gowanus densification. There is a projected increase of 1 billion gallons of sewage outfall per year, according to <span><a href='https://www.scapestudio.com/projects/the-gowanus-lowlands/'>SCAPE</a></span>. Water quality is poor, and water access limited. Furthermore, the EPA has established that the cleanup will not restore the water to its original state, but will serve the purpose of mitigating the accumulated pollution. SCAPE is the Landscape Architecture firm that has worked with the <span><a href='https://gowanuscanalconservancy.org/'>Gowanus Canal Conservancy</a></span> to develop the 'Gowanus Lowlands' framework. <span class='credit'>Source: <a href='https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/gowanus/gowanus-framework-full.pdf '>Gowanus Lowlands PDF</a></span></span></span>",
            audio: "<audio controls preload='none'><source src='audio/interview_sewage_dvlp_problem_1.mp3'></audio>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//7 Newtown Creek is Not Like the Gowanus
            id: 'picture5',
            title: '<span class="lighter">Newtown Creek is Not Like the Gowanus</span>',
            description: "<span class='lighter'> While new residential developments are cropping into Gowanus, the city’s plans for the Newtown Creek are primarily focused on expanding manufacturing to convert it into the core industrial hub. The zone is already mainly industrial instead of residential, making it less densely populated along its edges. In a way, less people come into contact with its toxicity when compared to Gowanus.<span class='credit'>Image Credit: <a href='https://www.hazenandsawyer.com/work/projects/nycdep-newtown-creek-wastewater-treatment-plant-secondary-treatment-upgrade/'>Hazen & Sawyer</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//8 zoom 1 - NCLocation
            id: 'NewtownCreekLocation',
            title: 'Newtown Creek',
            description: 'The Newtown Creek is a 3.8-mile long channelized water body between Brooklyn and Queens, making it much longer than the Gowanus.',
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
            description: "<span class='lighter'> Located in the center, Newtown Creek has evolved to become a major industry area in New York City being the third largest industrial hub in the city by employment. Developers are also attracted to its industrial past and future city plans will certainly draw on that. Even though the site is currently under the Superfund cleanup process, development plans are looking towards the expansion of existing manufacturing along the Creek. New development promises new jobs for neighbors and a more vibrant neighborhood, but fails to address the toxicity that characterizes it and continues to affect their lives. <span class='credit'>Image Credit: <a href='https://brooklyneagle.com/articles/2019/12/04/to-get-raw-sewage-out-of-newtown-creek-epa-takes-the-cheap-route/'>Brooklyn Daily Eagle</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
         {//11 And Its Water Is Still Polluted
            id: 'picture8',
            title: '<span class="lighter">And Its Water Is Still Polluted</span>',
            description: "<span class='lighter'> In the 1990s, New York State declared that the water of Newtown Creek was not in compliance with the Clean Water Act standards. When this happened, it was already old news because for many years this water has been accumulating pollutants such as volatile organic compounds, semi-volatile organic compounds, metals (total and dissolved), polychlorinated biphenyl (PCB) aroclors and congeners, dioxins/furans and pesticides, according to the EPA. Additionally, the EPA Human Health Risk Assessment advised against eating contaminated fish from the Creek. Similar to Gowanus, the superfund cleanup will only mitigate damage instead of restoring quality to the water. How many people are living in an industrial zone that is beyond polluted? <span class='credit'>Image Credit: <a href='https://brooklyneagle.com/articles/2019/05/20/there-are-3-active-oil-spills-on-newtown-creek/'>Brooklyn Daily Eagle</a></span></span></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//12 zoom 1 - NCpopDensity
            id: 'NCpopDensity',
            title: 'Newton Creek is a Low Density Area',
            image: 'images/population_density.png',
            description: 'As of today, not many people are living near Newtown Creek. This map showing low population density around the Creek gives us a sense of how many people live near a toxic environment. As you go farther away from the Creek, population density increases.',
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
            title: 'Newton Creek Residential Area is Disconnected From Water Body',
            image: 'images/Newtown_Rezoning.png',
            description: "Part of the reason why Newtown Creek's vicinity is not so populated, is because it is not mainly residential. As of today, the neighborhood has remained predominantly an industrial one characterized by the lack of proximity of residential units to the Creek, as it is highlighted in the map. Unlike Gowanus residential rezoning, the city’s plan for developing the Newtown Creek aims to maintain this disconnection from the water body.",
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
            title: 'Newtown Creek Rezoning: Manufacturing Only',
            image: 'images/Newtown_Rezoning.png',
            /*imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',*/
            description: '<span class="notes">In the future, the Newtown Creek will be further expanded for industrial uses despite its present degraded condition. As part of the City’s cleaning efforts, the Newtown Creek Wastewater Treatment plant was upgraded in 2012, originally built in the 1970s after the Greenpoint oil spill. The EPA Superfund process which began in 2009 is still in progress. After its designation in 2010, the EPA identified different potentially responsible parties (PRPs) for the cleanup including ExxonMobil Oil Corporation, Texaco, Inc. (now part of Chevron Corporation), Consolidated Edison Company of New York, Shell Oil Company, National Railroad Passenger Corporation (AMTRAK), and the City of New York. The PRPs were required to start the investigation process to help determine the levels of contamination. The cleanup process is currently at the third stage, Remedial Investigation / Feasibility Study, with some final reports due in 2020. The next step is for the EPA to select a remedy and come up with a cleanup plan. Notwithstanding, the City is already planning ahead for the future development of the Newtown Creek. The City’s plans are primarily focused on expanding manufacturing alongside Newtown Creek to convert it into the City’s core industrial hub. The residential area will serve as the buffer between existing and new development.<span class="credit">Source: <a href="https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/north-brooklyn-vision-plan/north-brooklyn-full-high.pdf">NYC North Brooklyn Industrial Innovation Plan</a></span></span></span>', 
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
        {//15 Unlike Newtown Creek, Gowanus Canal is unique neighborhood
            id: 'picture9',
            title: '<span class="lighter">Unlike Newtown Creek, Gowanus Canal is unique neighborhood</span>',
            description: "<span class='lighter'>In spite of its water toxicity, the Gowanus Canal appears to be densifying closer to the water into a mixed-use neighborhood. Similar to Newtown Creek, development seems to be increasing and giving birth to a new kind of neighborhood with a quiet industrial feel. It offers low-rise, wide comfortable spaces which are appreciated by the neighbors. The difference between them is that Gowanus’ future development is mainly residential and people will live near a toxic environment.</span>",
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
            description: "<span class='notes'>Unlike the Newtown Creek, Gowanus Canal has a higher population density. The population density close to the Gowanus is much higher when compared to other Superfund sites revealing how many people are living near a toxic water body.<span class='credit'>Source: <a href='https://semspub.epa.gov/work/02/550165.pdf'>Gowanus Canal Superfund Site - Community Envolvement Plan</a></span></span></span>",
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
            description: 'The reason behind a higher number in population density is because the Gownus is at the center of a residential area. The Gowanus Canal is surrounded by six different residential neighborhoods: Gowanus, Cobble Hill, Carroll Gardens, Park Slope, and Red Hook. Unlike Newtown Creek where residential units are relatively far from the Creek, the Gowanus neighborhood is rapidly transforming, bringing in residential fabric to what was before a primarily industrial zone. In the map we can see the proximity of residential units to the Canal.',
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
            ]
        },
        {//18 zoom 2 - GCnewDensification
            id: 'GCnewDevelopment',
            title: 'Gowanus Canal will further Densify',
            image: 'images/Gowanus_Rezoning.png',
            description: "<span class='notes'>Even though the Gowanus Canal is already dense, they’re planning to densify it even more, ignoring the fact that the water is toxic and the cleanup is not yet done. Some ongoing city cleanup efforts include the reconstruction of the Gowanus Wastewater Pump Station which began in 2010 and the Superfund cleanup which began in 2009. The Gowanus Canal is currently in the fifth phase of the Superfund process, which is the Remedial Design/Remedial Action. In 2019, the EPA developed the cleanup plans for the Canal and are now in the process of being implemented. In January 2020, the EPA issued an administrative order requiring PRPs to start the cleanup process, including Consolidated Edison Company of New York, Honeywell International Inc, and the City of New York. Meanwhile, the city, which is one of the PRPs, continues pushing forward its development plans calling for a “thriving, inclusive and more resilient Gowanus.” The Gowanus Canal will further densify after the rezoning plans for residential use are adopted. <span class='credit'>Source: <a href='https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/gowanus/gowanus-framework-full.pdf'>Gowanus: A Framework for a Sustainable, Inclusive, Mixed-use Neighborhood Plan</a></span></span></span>",
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
            onChapterExit: []
        },
        {//19 Gowanus Canal Development
            id: 'picture10',
            title: "<span class='lighter'>The Gowanus Canal New Development doesn't consider a resilient approach</span>",
            description: "<span class='lighter'>The City of New York is planning to increase housing density around the Gowanus Canal calling out for affordable housing as the impending Superfund clean up approaches. Building high density residential blocks in an area that is not only threatened by toxicity, but also increasing flood risk displays irresponsibility on the city’s end. They use the word “resilience” in their marketing of a new vibrant community, but will real estate developers collaborate with the city to create a resilient neighborhood? According to Lee, member of SCAPE, the way forward is integrating ecology restoration with development and the Superfund cleanup.</span>",
            audio: "<audio controls preload='none'><source src='audio/intervew_lee_developers.mp3'></audio>",
            location: {},
            onChapterEnter: [
                {
                    layer: 'flooding',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//20 zoom 2 - GCflooding
            id: 'GCflooding',
            title: 'Gowanus Canal will Further Flood',
            description: "The new development for the Gowanus Canal will be located within the coastal floodplain. This means that, if the city doesn't enforce an improved Waterfront Access Plan (WAP), the buildings will flood. Members from the Gowanus community have been active during the cleanup process advocating for new development that can flood and adapt to climate change. The developers should soften the canal's edges, creating wetlands and habitat restoration that would mitigate the rising sea level effect on the neighborhood, and eventually, provide safe waterfront access.",
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
                    layer: 'flooding',
                    opacity: 0.7
                },
                {
                    layer: 'gcRezoning',
                    opacity: 1
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
            title: 'Gowanus Canal Combined Sewage Overflow Increment',
            image: 'images/CSO.png', 
            description: "<span class='notes'>The redensification of the area will produce more Combined Sewage Overflow (CSO) exacerbating health and environmental risks along the Gowanus Canal. The EPA has rejected NYC DEP proposal of a tank that would have captured more gallons of untreated water alleging that the such solution relied on possible future flood control, resiliency, and infrastructure benefits that are outside of EPA's Superfund clean-up program.<span class='credit'>Source: <a href='https://semspub.epa.gov/work/02/581273.pdf'> EPA Rejection Letter to DEP</a></span></span></span>",
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
                },
                {
                    layer: 'gcRezoning',
                    opacity: 1
                },
                {
                    layer: 'flooding',
                    opacity: 0.7
                }
            ],
            onChapterExit: [
            ]
        },
        {//22
            id: 'picture9',
            title: '<span class="lighter">Gowanus Conclusion</span>',
            description: "<span class='lighter'>The zone has gotten the attraction of billionaire development projects but the toxicity of the water, together with neighbors' safety, fail to be addressed.</span>",
            /*quote: "<span class='below'>“There are moments when the sewage just flows backwards into peoples homes” by a Gowanus neighbor</span>",*/
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};