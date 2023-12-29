import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'CHAE BIN LIM',
	title: 'Cloud Back End Developer',
	subTitle: [
        emoji("‍임 채 빈"),
        emoji("92.03.14"),
        emoji("‍고려대학교 전기전자컴퓨터공학과(석사)"),
    ],
	role: "Thank you for your interest",
	resumeLink: "https://jasper-calculator-706.notion.site/Software-Engineer-c2658b7ccc784a1e94028b82706ad9ae?pvs=4",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/java-bin',
	linkedin: 'https://www.linkedin.com/in/chaebinlim/',
	email: '',
	facebook: '',
	twitter: '',
	instagram: "https://www.instagram.com/bin._.d/",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("Skills"),
	mainSkill: "✔ Back End Developer Main Skills",
	mainLists: [
        {fontAwesome: "fab fa-java", text: "JAVA 8~17", proficiency: 80},
        {fontAwesome: "fab fa-envira", text: "SPRING BOOTS", proficiency: 80},
        {fontAwesome: "fab fa-bitbucket", text: "BITBUCKET", proficiency: 70},
        {fontAwesome: "fab fa-github", text: "GITHUB", proficiency: 70},
        {fontAwesome: "fab fa-docker", text: "DOCKER", proficiency: 80},
	],
	serverSkill: "✔ Server Skills",
	serverLists: [
        {fontAwesome: "fab fa-linux", text: "LINUX", proficiency: 80}
    	],
    communicationSkill: "✔ Communication Skills",
	communicationLists: [
        {fontAwesome: "fab fa-confluence", text: "CONFLUENCE", proficiency: 60},
        {fontAwesome: "fab fa-jira", text: "JIRA", proficiency: 60},
    	],
    languageSkill: "✔ Language Skills",
    languageLists: [
        {fontAwesome: "fab fa-canadian-maple-leaf", text: "ENGLISH", proficiency: 60},
        {fontAwesome: "fab fa fa-circle", text: "JAPANESE", proficiency: 50},
    ],
	view: true
};

export const experience = {
	title: "Projects",
	lists: [
		{
			role: "IT TEAM MANAGING In Vietnam Factory",
			company: "IT TEAM MANAGER [BISCOO]",
			date: "2020.02 ~ 2020.05"
		},
		{
			role: "U2L Project For ABL",
			company: "Full-Stack Developer [NHN CROSSENT]",
			date: "2020.06 ~ 2020.07"
		},
		{
			role: "Hubpop PaaS PlatForm For Kepco",
			company: "Full-Stack Developer [NHN CROSSENT]",
			date: "2020.08 ~ 2020.11"
		},
		{
			role: "Common Module In PaaS PlatForm For Hyundai",
			company: "Full-Stack Developer [NHN CROSSENT]",
			date: "2020.12 ~ 2021.03"
		},
		{
			role: "Common Module In DataCatalog PlatForm For Hyundai",
			company: "Full-Stack Developer [NHN CROSSENT]",
			date: "2021.04 ~ 2022.02"
		},
		{
			role: "API-GW With Spring Gateway",
			company: "Back-End Developer [OKESTRO]",
			date: "2022.02 ~ 2022.05"
		},
		{
			role: "Private Cloud With Openstack4j",
			company: "Back-End Developer [OKESTRO]",
			date: "2022.06 ~ 2022.11"
		},
        {
            role: "IaaS Product 보안기능확인서 획득",
            company: "Back-End Developer [OKESTRO]",
            date: "2022.12 ~ 2023.04"
        },
        {
            role: "IaaS Product With Openstack",
            company: "Back-End Developer [OKESTRO]",
            date: "2023.05 ~ present"
        },
	],
	view: true
}

export const achievements = {
    title: emoji("Experience"),
	subTitle: "Other Experience",
	lists: [
	    {
	        img: require("./assets/japan.png"),
	    	alt: "Japan",
            title: "Shurin Japanese School",
            desc: "(2015.01 ~ 2015.02)"
        },
        {
            img: require("./assets/japan.png"),
        	alt: "Japan",
            title: "Working Holiday",
            desc: "(2015.07 ~ 2017.05)"
        },
        {
            img: require("./assets/canada.png"),
        	alt: "Canada",
            title: "OHC Calgary",
            desc: "(2017.05 ~ 2017.07)"
        },
        {
            img: require("./assets/canada.png"),
            alt: "Canada",
            title: "Working Holiday",
            desc: "(2017.05 ~ 2019.02)"
        },
        {
            img: require("./assets/korea.png"),
        	alt: "Korea",
            title: "부산 IT 교육센터",
            desc: "(2019.06 ~ 2020.01)"
        },
	],
	view: true
};

export const blogs = {
	title: emoji("My Blog's News"),
	subTitle: "recently posts",
	lists: [
		{
			title: "Linux Command 정리",
			desc: "생각날 때 마다 추가하는 Linux 명령어",
			url: "https://java-bin.github.io/posts/linux-cmd/"
		},
		{
			title: "Terraform 사용해서 Openstack Vm 생성해보기",
			desc: "Terraform for Openstack Vm Create",
			url: "https://java-bin.github.io/posts/terraform/"
		},
		{
            title: "Docker를 이용해 Nginx 실행 후 화면 수정해보기",
            desc: "Nginx In Docker",
            url: "https://java-bin.github.io/posts/docker-nginx-test/"
        },
	],
	view: true
}

export const certification = {
	title: emoji("Certification"),
	lists: [
		{
        			title: "🏆 운전면허 1종보통",
        			desc: "(2010.07)"
        		},
        		{
        			title: "🏆 SKI LEVEL 1 🇰🇷",
        			desc: "(2013.02)"
        		},
        		{
        			title: "🏆 SNOW BOARD LEVEL 1 🇰🇷",
        			desc: "(2013.02)"
        		},
        		{
        			title: "🏆 MOS MASTER",
        			desc: "(2013.03)"
        		},
        		{
        			title: "🏆 전산회계 1급",
        			desc: "(2014.04)"
        		},
        		{
        			title: "🏆 무역관리사",
        			desc: "(2014.09)"
        		},
        		{
        			title: "🏆 SKI TEACHING 1 🇰🇷",
        			desc: "(2017.03)"
        		},
        		{
        			title: "🏆 SKI LEVEL 2 🇨🇦",
        			desc: "(2018.12)"
        		},
        		{
        			title: "🏆 정보처리기사",
        			desc: "(2019.11)"
        		}
	],
	view: true
}

export const contactInfo = {
	title: "Contact Information 🤙",
	subTitle: "best regards",
	email: emoji("chea__@naver.com"),
    phone: emoji("010 8301 9820"),
	view: true
}