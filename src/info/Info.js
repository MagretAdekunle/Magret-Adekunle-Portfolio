import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(46,75,54)"];

export let singlePage = false;

export const info = {
    fullName: "Magret Adekunle",
    firstName: "Magret",
    lastName: "Adekunle",
    initials: "MOA",
    position: "a Full Stack Developer",
    getToKnowMe: "Hey! It's Magret Adekunle and I'm focused on Software and AI Engineering, Full-Stack Development, Frontend Engineering,  Web Engineering, and  located in Austin. I am Passionate Computer Scientist whose end goal is personally serve and positively impact society through developing applications and software, to  give back to those who have been marginalized, those who don’t have the resources needed to attain an adequate education, and to enhance our everyday life. Check out some of my work in the Projects section.",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(145deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🧋',
            text: 'Fueled by Boba  & Sour Candy'
        },
        {
            emoji: '🌎',
            text: 'Based in the U.S.'
        },
        {
            emoji: "💼",
            text: "Graduate Student of The University of Texas at Austin 🤘🏿"
        },
        {
            emoji: "📧",
            text: "magretadekunle@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/MagretAdekunle",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/magret-adekunle",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "ReactPortfolioTemplate/src/components/Magret Adekunle - Resume.pdf",
        //     icon: "fa fa-file",
        //     label: 'resume/cv'
        // }
    ],

    bio: "Hello! I'm Magret Adekunle. I'm a Graduate Student of The University of Texas at Austin. I studied Computer Science, Mathatics, and African & African Diaspora Studies at The Univerity of Texas at Austin. I enjoy taking photo on my films cameras and eating out, and I believe artificial intelligence will inevitably rule us all one day.",
    bio2:"My aim is to give back to those who have been marginalized, those who lack the resources needed to attain an adequate education, and to enhance our everyday life. Check out some of my work in the Portfolio section. You should hire me!",
    myresearch1: "Correspondingly, my Senior Seminar course helped me to explore the intersectionality of technology and health sciences within the context of the health and well-being of Black communities. In my research, I discovered that AI-based tools assessing crime are twice as likely to misclassify Black individuals as being at a higher risk of engaging in criminal activity compared to their White counterparts.",
    myresearch2: "These issues arise from algorithms not understanding the historical and political factors that cause such disadvantage and disparity for marginalized populations who are subjected to these tools.",
    myresearch3: "I firmly believe that addressing these negative aspects of AI is crucial, not to discredit the advancements made by AI, but rather to identify and improve any adverse effects. As scientists, we can work towards finding effective solutions and ensuring that AI continues to contribute positively to our society.",

    researchInterests: [
        {
            label: 'Ethics and Bias in AI',
            emoji: '🌶'
        },
        {
            label: 'AI and Creativity',
            emoji: '🎨'
        },
        {
            label: 'AI for Sustainability',
            emoji: '🌍'
        },
        {
            label: 'Machine Learning',
            emoji: '⚙️'
        },
        {
            label: 'AI Fairness',
            emoji: '💻'
        }
    ],

    skills:
        {
            proficientWith: ['Python', 'Javascript', 'React', 'Bootstrap', 'Html5', 'CSS3', 'Figma','Git', 'Github', ],
            exposedTo: ['Nodejs', '', 'Adobe Illustrator']
        }
    ,
    mySkills:
    {
        programmingLanguages: ['Python', 'Java', 'PHP', 'R', 'Swift', 'Processing'],
        webTechnologies: ['HTML5 ', 'CSS', 'Figma'],
        frameworksAndLibraries: ['React.js', 'Node.js', 'Flask', 'ASP.NET', 'Bootstrap', 'jQuery'],
        databasesAndData: ['SQL', 'PostgreSQL', 'LINQ Pad & Query', 'JSON', 'Data Bricks', 'DBT', 'Spark SQL', 'Pyspark'],
        cloudPlatforms: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)'],
        other: ['Git', 'GitLab']

    },
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'A Good Adventure',
            emoji: '🏔️'
        },
        {
            label: 'Eating Out',
            emoji: '🍽️'
        },
        {
            label: 'Taking Film Photos',
            emoji: '🎞️'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        }
    ],

    portfolio: [ 
        {
            title: "Magret Adekunle's Portfolio",
            live: "", 
            source: "https://github.com/MagretAdekunle/Magret-Adekunle-Portfolio",
            description: "Hello, I am Magret Adekunle. I have created this web portfolio to showcase my skills and abilities!",
            image: mock1
        },
        {
            title: "Music Recommendation",
            live: "https://github.com/MagretAdekunle",
            source: "https://github.com/MagretAdekunle/Music-Recommendations",
            description: "MusicRecommendations is a dynamic website platform that seamlessly combines the best features and interactivity of Spotify!",
            image: mock2
        },
        {
            title: "The Adventures of Blob Man",
            live: "https://github.com/MagretAdekunle/Processing-Projects",
            source: "https://github.com/MagretAdekunle/Processing-Projects/tree/main/The%20Adventures%20of%20Blob%20Man%20-%20Final%20Version",
            description: "This project explores the integration of graphical and interactive elements to create a video game using Processing.",
            image: mock3
        },
        // {
        //     title: "iOS Reservation Mockup",
        //     live: "https://github.com/MagretAdekunle",
        //     source: "https://github.com/MagretAdekunle/iOS-Reservation-Mockup",
        //     description: "Developed a Reservation-Mockup iOS application using XCode and Swift, simulating the reservation process for a service.",
        //     image: mock4
        // },
        // {
        //     title: "iOS Ordering Conformation",
        //     live: "https://www.figma.com/file/BcOpUNa1jGyNunQufQIKvX/Prototype?type=design&node-id=402-311&mode=design&t=EuoKgkebNs8W6ub6-0",
        //     source: "https://github.com/Magret7/Figma-and-Canva-Designs",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.",
        //     image: mock3
        // },
        // {
        //     title: "iOS Reservation Table",
        //     live: "https://www.figma.com/proto/RduZYTNm9pYI9tE48DuIo4/Booking-Table-for-The-Little-Lemon-Prototype-(2)?node-id=1-36&t=t9II4ItOd5HHmCOn-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A36",
        //     source: "https://github.com/MagretAdekunle/Figma-and-Canva-Designs",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.",
        //     image: mock4
        // },
        {
            title: "Music Website Landing Page UI ",
            live: "https://www.figma.com/proto/wXkxJPoJwDGAL6xMtZhu4p/Music-UI-Landing-Page?node-id=2-2&t=SKvDtpS5dQR8UFtH-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2",
            source: "https://github.com/MagretAdekunle/Figma-and-Canva-Designs",
            description: "An engaging and user-friendly landing page for a music website with a thoughtful design, intuitive navigation, and compelling content.",
            image: mock5
        }
    ]
}