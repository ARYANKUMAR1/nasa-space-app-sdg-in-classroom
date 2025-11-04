import React from "react";
import SDGCard from "../components/SDGCard";
import "../styles/SDGsPage.css";

const sdgs = [

    {
        title: "SDG 1: No Poverty",
        image: "https://as2.ftcdn.net/v2/jpg/01/86/02/95/1000_F_186029577_LjdN0k9a05R6P0Ad1akuXIpiSvnwFUuQ.jpg",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
          shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },

    {
        title: "SDG 2: Zero Hunger",
        image: "https://www.posterfortomorrow.org/images/thumbs/entries/1000x1400/23262/23262_58dbd35776c7f2c497b567c5cb8128a1.jpg" ,
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture to ensure everyone has access to nuritious food.",
        moreInfo: "<p> <h3>Key Targets</h3>\n" +
            "<ul type = “disc”>\n" +
            "<li> End hunger & ensure year-round access to safe, nutritious food. </li> \n" +
            "<li> End all forms of malnutrition, focusing on vulnerable groups. </li> \n" +
            "<li> Double agricultural productivity & incomes of small-scale producers. </li> \n" +
            "<li> Promote sustainable & resilient food production systems. </li>  </ul>\n" +
            "<br> <h3>Importance</h3> \n" +
            "<ul type =”disc”> <li>Improves global health & nutrition. </li>  <li> Supports economic growth & poverty reduction. </li>  <li> Promotes environmental sustainability & biodiversity. </li> </ul> \n" +
            "<br><h3>Challenges</h3>\n" +
            "<ul type=”disc”> <li> Climate change impacts on food production. </li> <li> Conflicts & political instability disrupting supply chains. </li> <li>Economic inequality limiting access to resources for small-scale farmers.</li> </ul>\n" +
            "<br><h3>Future Outlook</h3>\n" +
            "<ul type=”disc”> <li> Growth in sustainable agriculture & farming innovations. </li>  <li>Strengthened international partnerships for food security. </li><li> Accelerated actions needed in vulnerable regions by 2030.</li></ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
            
    },

    {
        title: "SDG 3: Good Health and Well-being" ,
        image: "https://www.sanitascare.health/images/hw.jpg",
        description:"Ensure healthy lives and promote well-being for all at all ages through access to quality healthcare and healthy living conditions",
        moreInfo: "<h3>Key Targets</h3>\n" 
            + "<ul type = “disc”>\n" +
            "<li>Reduce maternal mortality to <70 per 100,000 live births by 2030. </li> \n" +
            "<li>End epidemics of AIDS, tuberculosis, malaria, & neglected tropical diseases. </li> \n" +
            "<li>End preventable deaths of newborns & children under 5. </li> \n" +
            "<li>Reduce premature mortality from non-communicable diseases by one-third.</li>  </ul>\n" +
            "<li> Achieve universal health coverage & access to essential health services.</li> \n" +
            "<br> <h3>Importance</h3> \n" +
            "<ul type =”disc”> <li>Strengthens health systems & improves health outcomes.</li><li> Provides financial protection against health-related expenses.</li> <li> Promotes health equity & access for vulnerable populations.</li> </ul> \n" +
            "<br><h3>Challenges</h3>\n" +
            "<ul type=”disc”> <li> Insufficient health financing & resources, especially in low-income countries. </li> <li>Disparities in access to healthcare services. </li> <li>Increased burden from non-communicable diseases & emerging health threats. </li> </ul>\n" +
            "<br><h3>Future Outlook</h3>\n" +
            "<ul type=”disc”> <li>Need for increased health financing & investment in health systems. </li> <li> Strengthening the health workforce in developing countries.</li><li>Support for research & development of essential medicines & vaccines. </li></ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"

    },
    {
        title: "SDG 4: Quality Education",
        image: "https://static.vecteezy.com/system/resources/previews/041/169/590/non_2x/enneagram-peacemaker-type-illustration-flat-illustration-vector.jpg" ,
        description: "Ensure inclusive and exquitable quality education and promote lifelong opportunnities for all",
        moreInfo: "<h3>Key Targets</h3>\n" +
            "<ul type = “disc”>\n" +
            "<li> End hunger & ensure year-round access to safe, nutritious food. </li> \n" +
            "<li> End all forms of malnutrition, focusing on vulnerable groups. </li> \n" +
            "<li> Double agricultural productivity & incomes of small-scale producers. </li> \n" +
            "<li> Promote sustainable & resilient food production systems. </li>  </ul>\n" +
            "<br> <h3>Importance</h3> \n" +
            "<ul type =”disc”> <li>Improves global health & nutrition. </li>  <li> Supports economic growth & poverty reduction. </li>  <li> Promotes environmental sustainability & biodiversity. </li> </ul> \n" +
            "<br><h3>Challenges</h3>\n" +
            "<ul type=”disc”> <li> Climate change impacts on food production. </li> <li> Conflicts & political instability disrupting supply chains. </li> <li>Economic inequality limiting access to resources for small-scale farmers.</li> </ul>\n" +
            "<br><h3>Future Outlook</h3>\n" +
            "<ul type=”disc”> <li> Growth in sustainable agriculture & farming innovations. </li>  <li>Strengthened international partnerships for food security. </li><li> Accelerated actions needed in vulnerable regions by 2030.</li></ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 5: Gender Equality",
        image: "https://static.vecteezy.com/system/resources/previews/044/793/305/non_2x/gender-equality-men-and-women-have-equal-rights-feminism-vector.jpg" ,
        description: "Achieve gender equality",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
      
        title: "SDG 6: Clean Water and Sanitation",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxxWcH2kRQ_e-1j9CNZ4yxFihUNrEz86wtQ&s",
        description: "End poverty in all its forms everywhere.",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 7: Affordable and Clean Energy",
        image: "https://whatcanyoudo.earth/wp-content/uploads/2022/03/SDG-7-%E2%80%93-Affordable-and-Clean-Energy-An-Update.jpg" ,
        description: "Ensure access to affordable, reliabe, sustainable and modern energy for all.",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 8: Decent Work and Economic Growth",
        image: "https://t3.ftcdn.net/jpg/04/47/21/02/360_F_447210212_XJFKPIYPVDXSEdoS3qpGYmjXtUQg1csd.jpg",
        description: "Promote sustained, inclusive, and sustainable economic growth, full and productiveemployment, and decent work for all.",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
        title: "SDG 9: Industry, Innovation, and Infrastructure",
        image: " https://s31955.pcdn.co/wp-content/uploads/2020/07/iStock-1164502175.jpg" ,
        description: "Develop resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
        title: "SDG 10: Reduced Inequality",
        image: "https://lh5.googleusercontent.com/aSUx5JZOV3J1_ci4WukWWz_O-GIQJqZx2mpRiZJXr7XtbwZP6FvUKGKiD8oCkLdv_M0fDoXCsG049dqvTYzwEEs3qF5RgR-T5kBY3LovYtxmN44HZ3ZXqhkHfzblmocylZrUDfAC" ,
        description: "Reduce inequality within and among countries by promoting economic inclusion and social protection",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
        title: "SDG 11: Sustainable Cities and Communities",
        image: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2016/11/HiRes.jpg?fit=5556%2C5556&ssl=1",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
        title: "SDG 12: Responsible Consumption and Production",
        image: "https://www.blog-qhse.com/hs-fs/hubfs/rse%20fond.jpg?width=735&height=490&name=rse%20fond.jpg" ,
        description: "Ensure sustainable consumption and production patterns to reduce waste and promote sustainable lifestyles",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
        title: "SDG 13: Climate Action" ,
        image: "https://content.unops.org/photos/News-and-Stories/News/_image1920x900/header_2795x1310_dark.png" ,
        description: "Take urgent action to combat climate change and its impacts by reducing greenhouse gas emissions and promoting sustainable practices",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 14: Life Below Water",
          image: "https://static1.squarespace.com/static/5a4f9fc8bff200ea5935551f/t/61658e0c0276a61009ba1ad7/1634045452798/14_SDG_life_below_water.png?format=1500w " ,
        description: "Conserve and sustainably use the wrold's oceans, seas, and marine resources for sustainable development.",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 15: Life On Land",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUVNVwcEESDlaCUyMtUofY5hPWW4Anr9vIg&s" ,
        description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, forests, and biodiversity",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 16: Peace, Justice, and Strong Institutions",
          image: " https://img.freepik.com/free-vector/symbol-peace-justice_1308-168050.jpg" ,
        descsription: "Promote peaceful and inclusive societies, access to justice, and effective instituitions",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Significantly Reduce All Forms of Violence</li>\n" +
            "    <li>End Abuse, Exploitation, Trafficking, and All Forms of Violence Against Children</li>\n" +
            "    <li>Promote the Rule of Law and Ensure Equal Access to Justice</li>\n" +
            "    <li>Substantially Reduce Corruption and Bribery</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Foundation for Development</li>\n" +
            "<li>Promotion of Human Rights</li>\n" +
            "<li>Conflict Prevention</li>\n" +
            "<li>Social Cohesion</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Widespread Violence and Conflict</li>\n" +
            "<li>Corruption and Lack of Accountability</li>\n" +
            "<li>Inequality and Discrimination</li>\n" +
            "<li>Weak Governance and Institutions</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
            shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },
    {
          title: "SDG 17: Partnerships to Achieve the Goal",
          image: " https://static.vecteezy.com/system/resources/previews/007/381/721/non_2x/team-achievement-teamwork-collaborate-work-together-to-achieve-business-goal-winning-award-or-success-partnership-or-cooperate-concept-business-team-people-celebrate-help-carry-big-winner-trophy-vector.jpg " ,
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Strengthen the Means of Implementation.</li>\n" +
            "    <li>Promote Development Cooperation.</li>\n" +
            "    <li>Mobilize Additional Financial Resources.</li>\n" +
            "    <li>Capacity-Building.</li>\n" +
            "</ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Unequal Access to Resources.</li>\n" +
            "<li>Lack of Trust and Collaboration.</li>\n" +
            "<ul>\n" +
            "<h4>Why is it important?</h4>\n" +
            "<ul>\n" +
            "<li>Holistic Approach to Sustainable Development.</li>\n" +
            "<li>Resource Mobilization.</li>\n" +
            "<li>Shared Responsibility.</li>\n" +
            "<li>Innovation and Technology Transfer.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Strengthened Global Partnerships.</li>\n" +
            "<li>Increased Funding for Sustainable Development.</li>\n" +
            "</ul>\n",
            shortDescription: "Strengthen global partnerships and cooperation to achieve the Sustainable Development Goals."
    
    }

    // Add other SDGs here
];

const SDGsPage = () => {
    return (
        <div className="sdgs-page">
            <h2>Explore the Sustainable Development Goals (SDGs)</h2>
            <div className="sdgs-container">
                {sdgs.map((sdg, index) => (
                    <SDGCard
                        key={index}
                        title={sdg.title}
                        description={sdg.description}
                        image={sdg.image}
                        moreInfo={sdg.moreInfo}
                        shortDescription={sdg.shortDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default SDGsPage;