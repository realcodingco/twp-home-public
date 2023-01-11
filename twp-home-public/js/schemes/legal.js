const legal = {
    menuBar : {
        kind: 'box',
        className: 'legalNav',
    },
    document : {
        kind: 'box',
        className: 'documentBg'
    },
    docTitle : {
        kind: 'li',
        className: 'legalList',
        children : [
            {
                kind: 'span',
                className: 'material-symbols-outlined',
                text: 'description',
                style: {
                    fontSize: 20,
                    marginRight: 5,
                    verticalAlign: 'middle',
                    color: 'gray'
                }
            },
            {
                kind: 'a',
                target: '_top'
            }
        ]
    },
    txtBox :{
        kind : 'box',
        className: 'fileDocs',
    },
    frame : {
        kind : 'box',
        className: 'iframebox',
        style: {
            // paddingBottom: 50,
            overflow: 'hidden',
            height: 'auto'
        },
        children: [
            {
                kind: 'iframe',
                id: 'theIframe',
                name: 'theIframe',
                allowTransparency : true,
                // scrolling : 'no',
                frameborder: 0,
            }
        ]
        
    }
}