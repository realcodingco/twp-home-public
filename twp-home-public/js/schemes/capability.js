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
    }
};