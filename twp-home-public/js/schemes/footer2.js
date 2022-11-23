// 페이지 푸터 요소
const footer2 = {
    wrap:  {
        kind: 'box',
        className: 'footer-wrap',
        children: [
            {
                kind: 'a',
                className: 'ci',
                href: 'index.html',
                children: [
                    {
                        kind: 'img',
                        src: config.ci,
                    }
                ]
            },
        ]
    },
    information: {
        kind : 'box',
        style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    resource : {
        kind: 'box',
        style: {
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '140%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    infoText: {
        kind: 'box',
        children: [
            {
                kind: 'span',
                className: 'material-symbols-outlined',
                style: {
                    height: 20,
                    marginRight: 5,
                    verticalAlign: 'middle',
                    fontSize: 18,
                    fontWeight: 100,
                    lineHeight: '120%',
                    color: config.keyColor
                }
            },
            {
                kind: 'span',
                style: {
                    fontSize: 14,
                    height: 20,
                    verticalAlign: 'middle',
                    fontWeight: 300,
                    lineHeight: '160%',
                    
                }
            }
        ]
    },
    link: {
        kind: 'a',
        className: 'link',
    },
    copyright: {
        kind:'box',
        text: config.copyright,
        style: {
            width: '90%',
            margin: 'auto',
            fontSize: 12,
            color: 'dimgray',
            display: 'block'
        }
    }
};