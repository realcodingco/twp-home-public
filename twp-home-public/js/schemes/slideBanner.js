// 슬라이드 메인 배너 요소
const slideBanner = {
    bannText: { // 배너 안의 텍스트 요소
        kind: 'box',
        className: 'bannText',
    },
    bannImage : { // 배너 안의 이미지 요소
        kind: 'img',
        className: 'bannImage',
    },
    rightBtn: {
        kind: 'button',
        html: '<i class="fa-solid fa-chevron-right"></i>',
        style: {
            color: '#2C5592',
            width: 30,
            height: 60,
            border: 0,
            background: 'transparent',
            shadow: 0,
            fontSize:50,
            position:'absolute',
            right: 40,
            top: '50%',
            transform: 'translate(0, -50%)'
        }
    },
    leftBtn : {
        kind: 'button',
        html: '<i class="fa-solid fa-chevron-left"></i>',
        style: {
            color: '#2C5592',
            width: 30,
            height: 60,
            border: 0,
            background: 'transparent',
            shadow: 0,
            fontSize:50,
            position:'absolute',
            left: 40,
            top: '50%',
            transform: 'translate(0, -50%)',
            visibility: 'hidden'
        }
    },
    slideBtn: {
        kind: 'box',
        className: 'slideButton',
        children:[
            {
                kind: 'button',
                html: '<i class="fa-solid fa-chevron-right"></i>',
            },
            {
                kind: 'button',
                html: '<i class="fa-solid fa-chevron-left"></i>',
                
            },
            {
                kind: 'box',
                className: 'move-button', // 이동 점 버튼 children
            }
        ]
    },
    moveBtn: {
        kind: 'span',
        className: "move-button-item"
    },
    banner: { // 배너 wrap
        kind: 'section',
        id: 'slider1',
        style: {
            width: '100%',
            height: 400,
            background: '#f7f7f7',
            overflow: 'hidden',
            padding: 20,
        },
        children: [] //배너 수에 따라.. 
    }
};