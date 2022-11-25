// 페이지 헤더 요소
const header2 = {
    header: {
        kind: 'box',
        className: 'header',
        style: {
            width: '100%',
            height: 'auto',
            padding: '5px 20px',
            position: 'fixed',
            left: 0,
            top: 0,
            background: 'rgba(255,255,255,0.8)',
            zIndex: 10
        }
    },
    ciBox: {
        kind: 'a', 
        children: [
            {
                kind: 'img',
                style: {
                    float: 'left',
                    width: 200,
                    height: 'auto',
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
