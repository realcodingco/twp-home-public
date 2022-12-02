const capability = {
    circleWrap: { // 사용 x
        kind: 'box',
        className: 'circleWrap',
    },
    contentBox : {
        kind: 'box',
        children: [
            {
                kind: 'box',
                text: 'item1',
                style: {
                    width: 300,
                    height: 300,
                    borderRadius: 10,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 30,
                    background: 'url("https://picsum.photos/300/300")',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 1,
                }
            }
        ]
    },
    gradImgBox: {
        kind: 'box', 
        className: 'capaBanner',
        children: [
            {
                kind: 'box' ,
                className: 'gradImg', 
            }
        ]
    },
    itemBg : {
        kind: 'box',
        className: 'capabilityItemBg',
    },
    itemBox: {
        kind: 'box',
        className: 'capabilityItem',
        children: [
            {
                kind: 'box'
            },
            {
                kind: 'box',
                children: [
                    {
                        kind: 'h4',
                        text: 'item title'
                    },
                    {
                        kind: 'span',
                        text: 'item explain'
                    }
                ]
            }
        ]
    },
    spreadBox: {
        kind: 'box',
        style: {
            textAlign: 'center'
        },
        children: [
            {
                kind: 'box',
                className: 'spreadBox',
                onClick: e => {
                    const mom = $(e.target).parents('.spreadBox');
                    $(mom).find('.detailBox').slideToggle();
                    $(mom).find('span')[0].innerText = $(mom).find('span')[0].innerText == 'expand_less' ? 'expand_more' : 'expand_less';
                },
                children: [
                    {
                        kind: 'img'
                    },
                    {
                        kind: 'box',
                        children: [
                            {
                                kind: 'p'
                            },
                            {
                                kind: 'p'
                            },
                            {
                                kind : 'span',
                                className: 'material-symbols-outlined',
                                text: 'expand_more'
                            },
                        ]
                    },
                    { // 세부 내용
                        kind: 'box',
                        className: 'detailBox'
                    },
                    
                ]
            },
            
        ]
    }
};