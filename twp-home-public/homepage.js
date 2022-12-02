const config = {
    keyColor: '#2C5592', // 주요 컬러
    cname : 'TransWave Photonics', // 회사명
    ci : './style/images/ci1.png',//'https://transwavephotonics.files.wordpress.com/2018/11/logo-new-black.png',
    email : 'info@transwavephotonics.com',
    phone : '000-0000',
    favicon: './style/images/favicon.png',
    copyright : '© Copyright TransWave Photonics',
    address :  '8711 Burnet Rd. Ste. E55, Austin, TX 78757',
    submitSuccessMsg : 'Thanks for getting in touch with us', // contact 페이지 전송 성공 메시지
    checkRequiredMsg : 'required fields not entered', // contact 페이지 필수항목 미입력 메시지
    header : { // 헤더 구성 - 메뉴
        home: 'index.html', //홈 링크
        menuData: [ // 메뉴 항목 : 사용 여부는 state - open, close
            {
                title: 'About', 
                link: 'about.html', 
                state: 'open'
            },
            {
                title: 'Technology', 
                link: 'technology.html', 
                state: 'open'
            },
            {
                title: 'Capabilities', 
                link: 'capabilities.html',
                state: 'open'
            },
            {
                title: 'Contact', 
                link: 'contact.html',
                state: 'open'
            },
            {
                title: 'News', 
                link: 'news.html',
                state: 'open'
            },
            {
                title: 'Careers', 
                link: 'careers.html',
                state: 'open'
            },
        ]
    },
    banner : { // 메인 배너 구성
        resource : [ // 배너 이미지, 텍스트
            {
                image: 'style/prod1.png',
                text: 'Monolithic PICs'
            },
            {
                image: 'style/prod4.png',
                text: 'High power lasers'
            },
            {
                image: 'style/prod3.png',
                text: 'Infrared LEDs'
            }
        ]
    },
    about : { // 메인 페이지 카드 섹션 구성
        headTitle: { 
           keyword: 'innovative integration technology',
           text: 'TransWave Photonics, located in Austin, TX, develops mid-infrared photonic integrated circuits and systems using our innovative integration technology.',
        },
        desc: [ 
            {
                head: 'mid-infrared systems',
                image: 'https://transwavephotonics.files.wordpress.com/2018/11/simulation.png?w=592&h=252',
                text: 'Conventional mid-infrared systems are built based on an assembly of discrete components such as light sources, detectors, free space optics, moving mirrors, etc. As a result, such systems are invariably bulky, expensive, and inefficient. Our mission is to deliver miniaturized mid-infrared systems where all active and passive photonic components are monolithically integrated for unmatched size, weight, efficiency, reliability, and functionality.'
            },
            {
                head: 'Photonic systems',
                image: 'https://transwavephotonics.files.wordpress.com/2018/11/taper.png?w=316&h=324',
                text: 'Photonic systems that we develop, customize, or prototype find various applications including communications, integrated sensing, biomedicine, environmental monitoring, and defense and homeland security.<br><br>\
    TransWave Photonics recently received a STTR Phase 2 award for development of monolithic mid-infrared beam steering systems, sponsored by Army Research Office.'
            },
            {
                head: 'Another systems',
                image: 'https://picsum.photos/500',
                text: '...Photonic systems that we develop, customize, or prototype find various applications including communications, integrated sensing, biomedicine, environmental monitoring, and defense and homeland security.<br><br>\
    TransWave Photonics recently received a STTR Phase 2 award for development of monolithic mid-infrared beam steering systems, sponsored by Army Research Office.'
            }
        ]
    },
    technology : [  // technology 페이지 내용
        {
            head: 'mid-infrared systems',
            image: 'https://transwavephotonics.files.wordpress.com/2018/11/simulation.png?w=592&h=252',
            text: 'Conventional mid-infrared systems are built based on an assembly of discrete components such as light sources, detectors, free space optics, moving mirrors, etc. As a result, such systems are invariably bulky, expensive, and inefficient. Our mission is to deliver miniaturized mid-infrared systems where all active and passive photonic components are monolithically integrated for unmatched size, weight, efficiency, reliability, and functionality.'
        },
        {
            head: 'Photonic systems',
            image: 'https://transwavephotonics.files.wordpress.com/2018/11/taper.png?w=316&h=324',
            text: 'Photonic systems that we develop, customize, or prototype find various applications including communications, integrated sensing, biomedicine, environmental monitoring, and defense and homeland security.<br><br>\
TransWave Photonics recently received a STTR Phase 2 award for development of monolithic mid-infrared beam steering systems, sponsored by Army Research Office.'
        }
    ],
    application : { // 메인 페이지 applications 섹션 구성
        headTitle: 'Applications',
        tags: [ // 가로 스크롤 항목
            {
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/BAE_Hot_Brick.jpg/440px-BAE_Hot_Brick.jpg',
                title: 'IRCMs',
                text: 'Infrared Countermeasures(IRCM) are a class of Aircraft Survivability Equipment (ASE) designed to protect rotary- and fixed-wing aircraft from infrared (IR) guided (heat seeking) missiles.'
            },
            {
                icon: 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_1280.jpg',
                title: 'Communications',
                text: 'Transwave is committed to providing a full-service approach to the design and engineering of communication systems that satisfy the unique requirements of today’s users.'
            },
            {
                icon: 'https://cdn.shopify.com/s/files/1/0019/5952/files/gas_sensor-technology.jpg',
                title: 'Gas sensing',
                text: 'Gas sensor converts the components and concentrations of various gases into standard electrical signals by using specific physical and chemical effects. It has been widely used in the detection of noxious and harmful gases and natural gas leakage.'
            },
            {
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Xraymachine.JPG/440px-Xraymachine.JPG',
                title: 'Medical diagnostics',
                text: "the process of determining which disease or condition explains a person's symptoms and signs."
            }
        ]
    },
    intro : { // about 메뉴 페이지 구성 - 회사, 팀 소개
        title : 'About TransWave Photonics', // 페이지 제목
        cPhoto: 'style/roadview.png', // 회사 전경 이미지
        links : { // 링크 배너 소스
            'Technology' : {
                image: 'https://cdn.pixabay.com/photo/2021/01/21/10/26/circuit-board-5936930_1280.jpg',
                href: 'technology.html',
                text: 'Mid-infrared photonic integrated circuits and systems'
            }, 
            'Capabilities' : {
                image: 'https://cdn.pixabay.com/photo/2022/04/17/03/09/skills-7137254_1280.jpg',
                href: 'capabilities.html',
                text: 'Check out our capabilities'
            }, 
            'Career' : {
                image: 'https://i.picsum.photos/id/5/430/240.jpg?hmac=BJvPKsEId7pBdAepjGTAnre5hg6BDWlILFDJXkZ3A2A',
                href: 'careers.html',
                text: 'Join us our company'
            }
        },
        team : [ // about 페이지 팀소개
            {
                name: 'Jung, s.',
                position: 'CEO',
                image: 'style/face2.png'
            },{
                name: 'Alice, E.',
                position: 'TECHICAL DIRECTOR',
                image: 'style/face1.png'
            },{
                name: 'Kennedy, S.',
                position: 'SALES DIRECTOR',
                image: 'style/face5.png'
            },{
                name: 'Daniel, O.',
                position: 'FINANCE DIRECTOR',
                image: 'style/face3.png'
            },{
                name: 'Vincent, J.',
                position: 'MANAGER',
                image: 'style/face4.png'
            }
        ],
    },
    capability: { // capability 페이지
        items : [
            {
                title : 'Technology based',
                text : 'We are active in ',
                image : 'https://picsum.photos/300' ,
                desc : 'a high-tech sector and are investing more than ten percent of our turnover in development.'
            },
            {
                title : 'Applicable',
                text : 'Our capability is ',
                image : 'https://picsum.photos/300' ,
                desc : 'extended and improved continually according to market needs.'
            },
            {
                title : 'Reliably produce',
                text : 'We has the technologies, and ',
                image : 'https://picsum.photos/300' ,
                desc : 'production processes that make it possible to reliably produce and guarantee the required specifications and quantities.'
            },
            {
                title : 'Certified Quality',
                text : 'We constantly ',
                image : 'https://picsum.photos/300' ,
                desc : 'research and challenge for our technology certification.'
            }
        ]
    },
    newsContent : { // news 메뉴 페이지 구성 - article list
        msg: 'The latest news, events and updates from Transwave Photonics.',
        data : [
            {
                aid: 'news1', // 페이지 해시로 사용
                image: 'https://picsum.photos/id/242/300/200',
                title: 'title1 : How the CHIPS Act Will Impact Engineers',
                desc: 'The $52 billion spending plan outlined in the CHIPS and Science Act that has been signed into law has significant implications for the semiconductor ecosystem—from chip manufacturers to engineers and production teams.\n\n\
                EE Times asked two design engineers to weigh in on the implications of the Act for engineers in the U.S., in the short and long term. Will it simply help return the design engineering process to status quo pre-2020? Or are there greater changes afoot that will drive a significant shakeup of the semiconductor design and manufacturing process? The answer lies somewhere in between.',
                time: 1668479675609
            },
            {
                aid: 'news2',
                image: 'https://picsum.photos/seed/928/300/200',
                title: 'title2 : How the CHIPS Act Will Impact Engineers',
                desc: 'The $52 billion spending plan outlined in the CHIPS and Science Act that has been signed into law has significant implications for the semiconductor ecosystem—from chip manufacturers to engineers and production teams.\n\n\
                EE Times asked two design engineers to weigh in on the implications of the Act for engineers in the U.S., in the short and long term. Will it simply help return the design engineering process to status quo pre-2020? Or are there greater changes afoot that will drive a significant shakeup of the semiconductor design and manufacturing process? The answer lies somewhere in between.',
                time: 1668479675609
            },{
                aid: 'news3',
                image: 'https://picsum.photos/seed/725/300/200',
                title: 'title3 : How the CHIPS Act Will Impact Engineers',
                desc: 'The $52 billion spending plan outlined in the CHIPS and Science Act that has been signed into law has significant implications for the semiconductor ecosystem—from chip manufacturers to engineers and production teams.\n\n\
                EE Times asked two design engineers to weigh in on the implications of the Act for engineers in the U.S., in the short and long term. Will it simply help return the design engineering process to status quo pre-2020? Or are there greater changes afoot that will drive a significant shakeup of the semiconductor design and manufacturing process? The answer lies somewhere in between.',
                time: 1668479675609
            },
            {
                aid: 'news4',
                image: 'https://picsum.photos/seed/928/300/200',
                title: 'title4 : How the CHIPS Act Will Impact Engineers',
                desc: 'The $52 billion spending plan outlined in the CHIPS and Science Act that has been signed into law has significant implications for the semiconductor ecosystem—from chip manufacturers to engineers and production teams.\n\n\
                EE Times asked two design engineers to weigh in on the implications of the Act for engineers in the U.S., in the short and long term. Will it simply help return the design engineering process to status quo pre-2020? Or are there greater changes afoot that will drive a significant shakeup of the semiconductor design and manufacturing process? The answer lies somewhere in between.',
                time: 1668479675609
            },{
                aid: 'news5',
                image: 'https://picsum.photos/seed/725/300/200',
                title: 'title5 : How the CHIPS Act Will Impact Engineers',
                desc: 'The $52 billion spending plan outlined in the CHIPS and Science Act that has been signed into law has significant implications for the semiconductor ecosystem—from chip manufacturers to engineers and production teams.\n\n\
                EE Times asked two design engineers to weigh in on the implications of the Act for engineers in the U.S., in the short and long term. Will it simply help return the design engineering process to status quo pre-2020? Or are there greater changes afoot that will drive a significant shakeup of the semiconductor design and manufacturing process? The answer lies somewhere in between.',
                time: 1668479675609
            }
        ]
    },
    contact : { // contact 메뉴 페이지 구성
        inputs : [ // 입력항목 default
            {
                text : 'First Name'
            },
            {
                text : 'Last Name'
            },
            {
                text : 'Company'
            },
            {
                text : 'Email'
            },
        ]
    },
    legal : {
        patents : [ // patent 관련 문서 링크 목록
            {
                url: 'https://patents.google.com/patent/US11211773B2/',
                title : 'Quantum cascade laser with monolithically integrated passive waveguide'
            },
            {
                url : 'https://patents.google.com/patent/US20220209498A1/',
                title : 'Quantum cascade laser devices with improved heat extraction'
            }
        ],
        termsofuse : {
            file : 'terms.txt' // txt 파일로 정리된 문서
        },
        policy : {
            link : 'https://www.privacypolicies.com/live/d660c899-5381-4786-8eae-bd0b6d54ae66' // legal 서비스에서 발행하는 링크주소
        }
    },
    career : { // careers 페이지 
        pageTitle: 'CAREERS',
        subTitle : 'JOIN THE TRANSWAVE PHOTONICS TEAM!',
        headImage: 'https://cdn.pixabay.com/photo/2018/12/27/09/07/businessman-3897246_1280.jpg',
        listTitle: 'Open opportunities',
        subText: 'See if there\'s a position for you',
        jobs: [
            {
                title : 'Senior Product Designer',
                deadline: 1669964329060,
                desc: `As a Senior Product Designer, you’ll be driving design excellence, creativity, and critical thinking at TWP. Our audience is comprised of people seeking to make substantial changes in their habits and life. As such, this opportunity will challenge you to think deeply about their needs, mindset, and motivations in order to imagine original solutions that are clear, concise, empathetic, supportive, and non-judgmental. You’ll be at the forefront of defining new ways to track progress, help people stay motivated, and continuously engage people in a lengthy journey of confidence-building and taking on step-wise challenges. You’ll have the unique opportunity to imagine, lead, and help bring to market a broad range of products and deliverables across hardware, multiple mobile and Web applications for a variety of audiences including consumers, behavioral coaches, content creators, and more. \
                Flexibility to work remotely, in the office, or hybrid. \
                We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.`
            },
            {
                title : 'job position',
                deadline: 1668479675609,
                desc: "As a Senior Product Designer, you’ll be driving design excellence, creativity, and critical thinking at TWP. Our audience is comprised of people seeking to make substantial changes in their habits and life. As such, this opportunity will challenge you to think deeply about their needs, mindset, and motivations in order to imagine original solutions that are clear, concise, empathetic, supportive, and non-judgmental. You’ll be at the forefront of defining new ways to track progress, help people stay motivated, and continuously engage people in a lengthy journey of confidence-building and taking on step-wise challenges. You’ll have the unique opportunity to imagine, lead, and help bring to market a broad range of products and deliverables across hardware, multiple mobile and Web applications for a variety of audiences including consumers, behavioral coaches, content creators, and more. \
                Flexibility to work remotely, in the office, or hybrid. \
                We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. "
            }
        ],
        applyMsg: 'if you interest in our team contact us.'
    },
    footers : { // 푸터 구성 - legal 정보
        'Privacy & Cookie Policy' : 'legal.html#policy',
        'Terms of Use' : 'legal.html#termsofuse',
        'Patents' : 'legal.html#patents',
        'Journal Articles' : 'news.html'
    },
    connect : { //
        title: 'Ready to get started?', 
        msg : 'Contact our team.', 
        bg : './style/patt1.png', 
        path: 'contact.html', 
        btnTxt: 'Let\'s talk'
    },
    pages : {
        about: {
            title: 'About | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        article: {
            title: 'News | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        capabilities: {
            title: 'Capabilities | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        careers: {
            title: 'Career | TransWave Photonics ', 
            favicon: './style/images/favicon.png'
        },
        contact: {
            title: 'Contact | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        index: {
            title: 'TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        legal: {
            title: 'Legal | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        news: {
            title: 'News | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        },
        technology: {
            title: 'Technology | TransWave Photonics', 
            favicon: './style/images/favicon.png'
        }
    }
};

let homepage, ciHeight;
readData(function(result) {
    homepage = JSON.parse(result);
});

function readData(callback) {
    const json = localStorage.getItem('homepage') || JSON.stringify(config);
    callback && callback(json);
}

