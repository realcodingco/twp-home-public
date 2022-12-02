// 메인 페이지 about 섹션 요소
const about = {
    headTitle:  {
        kind: 'box',
        style: {
            width: '100%',
            fontSize: 15,
            textAlign: 'center',
            paddingTop: 40,
            color: '#2C5592',
            marginTop: 30,
        },
        children: [
            {
                kind: 'p',
                style: {
                    width: '80%',
                    color: 'black',
                    fontWeight: 300,
                    fontSize: 22,
                    margin: '20px auto',
                    wordBreak: 'keep-all'
                }
            }
        ]
    }, 
    contentBox: {
        kind: 'box',
        className: 'contentBox',
        children: [
            {
                kind: 'box',
                style: {
                    display: 'flex',
                    width: '100%',
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '40px 0px',
                },
                children: [
                ]
            },
            {
                kind: 'box',
                className: 'cont_detail',
                children: [
                    {
                        kind: 'img',
                    },
                    {
                        kind: 'span',
                    }
                ]
            }
        ]
    },
    contentTitle: {
        kind: 'box',
        className: 'contTitle',
        onClick: 'showDesc',
    }
};