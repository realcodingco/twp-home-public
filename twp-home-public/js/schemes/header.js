// 페이지 헤더 요소
const header = {
    header: {
        kind: 'box',
        className: 'header fixed',
    },
    ciBox: {
        kind: 'a', 
        children: [
            {
                kind: 'img',
                className: 'logoImage',
                onLoad: 'checkHeight()',
                style: {
                    float: 'left',
                    width: 200,
                    height: 'auto', //106.15,
                    padding: 10,
                }
            },
        ]
    },
    menuBox: {
        kind: 'ul',
        className: 'menuBox',
    },
    menu: {
        kind: 'li',
        className: 'menuTitle',
    },
    menuIcon: {
        kind: 'box',
        className: 'menuIcon',
        onClick: 'openMenu',
        children: [
            {
                kind: 'span'
            },
            {
                kind: 'span'
            },
            {
                kind: 'span'
            }
        ]
    },
    hambugerIcon:  {
        kind: 'box',
        className: 'menuTrigger',
        onClick: 'menuOpen',
        children: [
            {
                kind: 'span'
            },
            {
                kind: 'span'
            },
            {
                kind: 'span'
            }
        ]
    }
};