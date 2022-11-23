const legal = {
    menuBar : {
        kind: 'box',
        style : {
            width: 260,
            height: '100%',
            background : '#f7f7f7',
            padding: 20,
            lineHeight: '180%',
            display: 'table-cell',            
        }
    },
    document : {
        kind: 'box',
        style : {
            width: '100%',
            height: '100%', 
            minHeight: 900,
        }
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
        style: {
            padding : '20px 80px',
            fontWeight : 300,
            textAlign : 'justify',
            wordBreak : 'keep-all'
        }
    },
    frame : {
        kind : 'box',
        style: {
            paddingBottom: 50,
            overflow: 'auto'
        },
        children: [
            {
                kind: 'iframe',
                name: 'theIframe',
                scrolling : 'no',
                style : {
                    width: '100%',
                    height: 7149,
                    marignBottom: 100
                }
            }
        ]
        
    }
}