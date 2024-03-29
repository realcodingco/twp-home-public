//about 페이지 요소
const intro = {
    head : {
        kind: 'h2',
        className: 'introTitle',
    },
    image : {
        kind: 'img'
    },
    contentWrap: {
        kind: 'box',
        className : 'contentWrap',
        children: [
            {
                kind: 'box',
                html: `TransWave Photonics provides the best solutions to customers with experience and technical know-how and always strives to be an excellent partner.`,
                style: {
                    width: '90%',
                    minWidth: '300px',
                    margin: '20px auto',
                    textAlign: 'left',
                    lineHeight: '180%',
                    wordBreak: 'keep-all',
                }
            }
        ]
    },
    teamWrap : {
        kind: 'box',
        className: 'teamWrap',
        children: [
            {
                kind: 'p',
                text: 'Our Team',
            }
        ]
    },
    member: {
        kind: 'box',
        className: 'memberImage',
        children: [
            {
                kind: 'box',
                className: 'imgItem front',
                children: [
                    {
                        kind: 'img'
                    }
                ]
            },
            {
                kind: 'box',
                className: 'imgItem back',
                children: [
                    {
                        kind: 'span'
                    }
                ]
            }
            
        ]
    },
    line: { // 한줄 구분 점선
        kind: 'hr',
    },
    linkBanner: {
        kind: 'div',
        className: 'aboutBanner',
        children:[
            {
                kind: 'a',
                children : [
                    {
                        kind: 'img'
                    },
                    {
                        kind: 'div',
                        children: [
                            {
                                kind : 'p'
                            },
                            {
                                kind : 'p'
                            },
                            {
                                kind : 'span',
                                className: 'material-symbols-outlined',
                                text: 'trending_flat'
                            }
                        ]
                    }
                ]
            }
        ]
    }
};