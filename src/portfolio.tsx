import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'CHAE BIN LIM',
	title: 'Cloud Back End Developer',
	subTitle: [
        "🧗🏼 임 채 빈",
        "🐯 고려대학교 전기전자컴퓨터공학과(석사)",
        "🏄🏽‍♂️ STCLab Wave Autoscale",
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
        {fontAwesome: "fab fa-java", text: "Java", proficiency: 80},
        {fontAwesome: "fab fa-envira", text: "Spring", proficiency: 80},
        {fontAwesome: "fab fa-python", text: "Python", proficiency: 10},

        {fontAwesome: "fab fa-react", text: "React", proficiency: 30},
        {fontAwesome: "fab fa-vuejs", text: "Vue.js", proficiency: 60},
        {fontAwesome: "fab fa-angular", text: "Angular", proficiency: 30},

        {fontAwesome: "fab fa-github-alt", text: "Github", proficiency: 70},
        {fontAwesome: "fab fa-bitbucket", text: "Bitbucket", proficiency: 70},
        {fontAwesome: "fab fa-jenkins", text: "Jenkins", proficiency: 40},

        {fontAwesome: "fab fa-docker", text: "Docker", proficiency: 80},
	],
	cloudSkill: "✔ Server Skills",
	cloudLists: [
        {fontAwesome: "fab fa-linux", text: "LINUX", proficiency: 80},
        {fontAwesome: "fab fa-centos", text: "CentOS", proficiency: 80},
        {fontAwesome: "fab fa-ubuntu", text: "Ubuntu", proficiency: 80},
        {fontAwesome: "fab fa-aws", text: "AWS", proficiency: 75},
    ],
    communicationSkill: "✔ Communication Skills",
	communicationLists: [
        {fontAwesome: "fab fa-confluence", text: "Confluence", proficiency: 70},
        {fontAwesome: "fab fa-jira", text: "JIRA", proficiency: 50},
        {fontAwesome: "fab fa-slack", text: "Slack", proficiency: 100},
    ],
    languageSkill: "✔ Language Skills",
    languageLists: [
        {fontAwesome: "fab fa-canadian-maple-leaf", text: "ENGLISH", proficiency: 70},
        {fontAwesome: "fab fa fa-circle", text: "JAPANESE", proficiency: 70},
    ],
	view: true
};

const golangSkills = skills.mainLists.filter(skill => skill.fontAwesome.includes('golang'));

export const experience = {
	title: "Projects",
	lists: [
        {
            role: "Wave Autoscale Develop With Go",
            company: "STCLab",
            date: "2024.07 ~ present"
        },
		{
            role: "CONTRABASS Develop With Openstack",
            company: "OKESTRO",
            date: "2023.05 ~ 2024.07"
        },
		{
            role: "CONTRABASS 보안기능확인서 획득",
            company: "OKESTRO",
            date: "2022.12 ~ 2023.04"
        },
		{
            role: "CONTRABASS Develop With Openstack4j",
            company: "OKESTRO",
            date: "2022.06 ~ 2022.11"
        },
		{
            role: "API-GW With Spring Gateway For Openstack",
            company: "OKESTRO",
            date: "2022.02 ~ 2022.05"
        },
		{
			role: "Common Module Develop In DataCatalog PlatForm For Hyundai",
			company: "NHN CROSSENT",
			date: "2021.04 ~ 2022.02"
		},
		{
            role: "Common Module Develop In PaaS PlatForm For Hyundai",
            company: "NHN CROSSENT",
            date: "2020.12 ~ 2021.03"
        },
        {
            role: "Hubpop PaaS PlatForm For Kepco",
            company: "NHN CROSSENT",
            date: "2020.08 ~ 2020.11"
        },
        {
            role: "U2L Project For ABL",
            company: "NHN CROSSENT",
            date: "2020.06 ~ 2020.07"
        },
        {
            role: "IT TEAM MANAGING In Vietnam Factory",
            company: "BISCOO",
            date: "2020.02 ~ 2020.05"
        },
	],
	view: true
}

export const achievements = {
    title: emoji("Experience"),
	subTitle: "Other Experience",
	lists: [
          {
            img: require("./assets/korea.png"),
            alt: "Korea",
            title: "부산 IT 교육센터",
            desc: "(2019.06 ~ 2020.01)"
        },
	    {
            img: require("./assets/canada.png"),
            alt: "Canada",
            title: "Working Holiday",
            desc: "(2017.05 ~ 2019.02)"
        },
        {
            img: require("./assets/canada.png"),
        	alt: "Canada",
            title: "OHC Calgary",
            desc: "(2017.05 ~ 2017.07)"
        },
        {
            img: require("./assets/japan.png"),
            alt: "Japan",
            title: "Working Holiday",
            desc: "(2015.07 ~ 2017.05)"
        },
        {
            img: require("./assets/japan.png"),
            alt: "Japan",
            title: "Shurin Japanese School",
            desc: "(2015.01 ~ 2015.02)"
        },
	],
	view: true
};

export const blogs = {
	title: emoji("My Blog's News"),
	subTitle: "recently posts",
	lists: [
        {
            title: "Unit Test (AAA)",
            desc: "Unit Test AAA 적용",
            url: "https://java-bin.github.io/posts/unit-test-aaa/"
        },

        {
            title: "Go Structure",
            desc: "Go 표준 프로젝트 레이아웃",
            url: "https://java-bin.github.io/posts/go-structure/"
        },

		{
			title: "Go with gin",
			desc: "Go gin Framework",
			url: "https://java-bin.github.io/posts/gin/"
		},
        {
            title: "Go",
            desc: "Go Language",
            url: "https://java-bin.github.io/posts/go/"
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
        			title: "🏆 정보처리기사 ",
                    desc: "(2019.11)"
        		},
        		{
        			title: "🏆 SKI LEVEL 2 🇨🇦",
        			desc: "(2018.12)"
        		},

        		{
        			title: "🏆 SKI TEACHING 1 🇰🇷",
        			desc: "(2017.03)"
        		},
                {
                    title: "🏆 무역관리사",
                    desc: "(2014.09)"
                },
                {
                    title: "🏆 전산회계 1급",
                    desc: "(2014.04)"
                },
            	{
                    title: "🏆 MOS MASTER",
                    desc: "(2013.03)"
                },
                {
                    title: "🏆 SNOW BOARD LEVEL 1 🇰🇷",
                    desc: "(2013.02)"
                },
                {
                    title: "🏆 SKI LEVEL 1 🇰🇷",
                    desc: "(2013.02)"
                },
        		{

        			title: "🏆 운전면허 1종보통",
                   desc: "(2010.07)"
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

