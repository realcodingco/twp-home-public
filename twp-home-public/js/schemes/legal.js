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
        className: 'teamsTxt',
    },
    frame : {
        kind : 'box',
        style: {
            // paddingBottom: 50,
            overflow: 'auto',
            height: '100%'
        },
        children: [
            {
                kind: 'iframe',
                id: 'theIframe',
                name: 'theIframe',
                // scrolling : 'no',
                style : {
                    width: '100%',
                    height: '100vh',//7149
                    // marignBottom: 100
                }
            }
        ]
        
    }
}