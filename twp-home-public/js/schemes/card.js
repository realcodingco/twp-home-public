// 카드 형태 요소 : 뉴스 카드, applications 카드
const card = {
    newsBoxWrap: {
        kind: 'box',
        className: 'newsBoxWrap',
    },
    newsBoxHead: {
        kind: 'box',
        style: {
            color: config.keyColor
        },
        children: [
            {
                kind:'h2',
                style: {
                    width: '80%',
                    margin: '40px auto 0px',
                    textAlign: 'left',
                    paddingTop: 20,
                    fontWeight: 'bold'
                }
            },
            {
                kind: 'div',
                children:[
                    {
                        kind: 'p',
                        style: {
                            width: '80%',
                            margin: '10px auto 40px',
                            textAlign: 'left',
                            fontWeight: 300,
                            color: 'gray',
                            fontSize: 17,
                        },
                    }
                ]
            }
        ]
    },
    newsBox: {
        kind: 'a',
        className: 'news',
        children:[
            {
                kind: 'box',
                style: {
                    width: '100%',
                    height: '50%',
                    overflow: 'hidden'
                },
                children:[
                    {
                        kind: 'box',
                        className: 'image',
                    }
                ]
            },
            {
                kind: 'box',
                className: 'content',
                style: {
                    padding: 20,
                },
                children:[
                    {
                        kind: 'h4'
                    },
                    {
                        kind: 'time',
                        style: {
                            marginTop: 40,
                            fontWeight: 100
                        }
                    }      
                ]
            }
        ]
    },
    cardWrap: {
        kind: 'box',
        className: 'cardWrap no-scroll'
    },
    cardHead: {
        kind: 'h2',
        style: {
            width: '80%',
            margin: '40px auto',
            textAlign: 'left',
            fontWeight: 'bold',
            color: config.keyColor
        }
    },
    cardBox: {
        kind: 'a',
        className: 'cardBox',
        children: [
            {
                kind: 'box',
                className: 'cardTop',
                children: [
                    {
                        kind: 'img'
                    }
                ]
            },
            {
                kind: 'box',
                className: 'cardBottom',
                children: [
                    {
                        kind: 'h4',
                    },
                    {
                        kind: 'box',
                        style: {
                            width: '80%'
                        },
                        children: [
                            {
                                kind: 'p'
                            }
                        ]
                    }
                ]
            } 
        ]
    }
};