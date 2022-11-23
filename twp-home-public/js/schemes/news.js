// news 페이지 요소
const news = {
    wrap: {
        kind: 'box',
        style: {
            listStyle: 'none',
            paddingBottom: 100
        }
    },
    article: {
        kind: 'li',
        className: 'newslist',
        onClick: 'openArticle',
        children: [
            {
                kind: 'box',
                style: {textAlign: 'left'},
                children: [
                    {
                        kind: 'a',
                        className: 'articleTitle',
                    },
                    {
                        kind: 'box',
                        children:[
                            {
                                kind: 'p',
                                className: 'articleCont'
                            }
                        ]
                    },
                    {
                        kind: 'time',
                        style: {
                            fontWeight: 100,
                            fontSize: 12
                        }
                    }
                ]
            },
            {
                kind: 'img'
            },
            
        ]
    }
};