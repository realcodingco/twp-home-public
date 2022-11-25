const career = {
    topTitle : {
        kind: 'box',
        className: 'careerBanner',
    }, 
    head : {
        kind: 'box',
        text: "CAREERS",
        style: {
            height: 200,
            marginTop: '-200px',
            bottom : 0,
            backgroundColor: 'rgba(255,255,255,0.7)',
            fontSize: 40,
            padding: 30,
            fontWeight: 'bold',
            color: config.keyColor,
            zIndex: 2
        },
        children: [
            {
                kind: 'p',
                text: config.career.subTitle,
                style: {
                    fontSize: 20,
                    color: 'black'
                }
            }
        ]
    },
    listWrap: {
        kind: 'box',
        style: {
            width: '100%',
            textAlign: 'center',
            fontSize: 35,
            fontWeight: 'bold',
            marginTop: 50,
            color: '#444'
        },
        children: [
            {
                kind: 'p',
                text: "See if there's a position for you",
                style: {
                    fontSize: 14,
                    fontWeight: 300,
                }
            }
        ]
    },
    jobOpening: {
        kind: 'box',
        style: {
            width: '100%',
            minHeight: '500px',
            textAlign: 'center',
            paddingBottom: 100,
            marginTop: 20
        },
        children: [
            {
                kind:'box', // list 보여주기
                className: 'jobList',
                style: {
                    width: '80%',
                    minHeight: '200px',
                    margin: '0px auto',
                    padding: 30,
                    background: '#f7f7f7',
                    borderRadius: 10,
                },
            },
            {
                kind:'box',
                html: 'if you interest in our team contact us.' + '<br><a href="mailto:' + config.email + '?subject=Apply for job opening">' + config.email + '</a>',
                style: {
                    width: '80%',
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: 300,
                    marginTop: 30,
                    color: 'gray',
                }
            }
        ]
    },
    jobTitle: {
        kind: 'box',
        style: {
            textAlign: 'left',
            marginTop: 10
        },
        children: [
            {
                kind: 'box',
                style: {
                    fontSize: 20,
                    marginBottom: 10,
                    padding: 10,
                    background: 'white',
                    borderRadius: 10,
                },
                children: [
                    {
                        kind: 'span',
                        className: 'material-symbols-outlined',
                        text : 'arrow_drop_down',
                        style: {
                            position: 'absolute',
                            top : 5,
                            right: 15,
                            fontSize: 40
                        }
                    }
                ]
            },
            {
                kind: 'box',
                style: {
                    textAlign: 'justify',
                    wordBreak: 'keep-all',
                    fontWeight: 300,
                    padding: 20
                },
            }
        ]
    }
}