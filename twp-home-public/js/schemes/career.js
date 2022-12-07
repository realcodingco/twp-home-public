const career = {
    topTitle : {
        kind: 'box',
        className: 'careerBanner',
    }, 
    head : {
        kind: 'box',
        style: {
            height: 200,
            marginTop: '-200px',
            bottom : 0,
            backgroundColor: 'rgba(255,255,255,0.7)',
            fontSize: 40,
            padding: 30,
            fontWeight: 'bold',
            // color: homepage.keyColor,
            zIndex: 2
        },
        children: [
            {
                kind: 'p',
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
            fontSize: 28,
            fontWeight: 'bold',
            marginTop: 50,
            color: '#444'
        },
        children: [
            {
                kind: 'p',
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
                className: 'jobList' 
            },
            {
                kind:'box',
                className: 'applyBox',
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
        className: 'job-title-box',
        children: [
            {
                kind: 'box',
                onClick: 'showJobBoard',
                style: {
                    fontSize: 20,
                    marginBottom: 10,
                    padding: 20,
                    background: 'white',
                    borderRadius: 10,
                    paddingRight: 60,
                    wordBreak: 'keep-all'
                },
                children: [
                    {
                        kind: 'span', // deadline text
                        onClick: e => {
                            e.stopPropagation();
                            $(e.target).parent().click();
                        },
                        style: {
                            fontSize: 10,
                            color: 'lightgray',
                            marginLeft: 10,
                            fontWeight :300,
                        }
                    },
                    {
                        kind: 'span',
                        onClick: e => {
                            e.stopPropagation();
                            $(e.target).parent().click();
                        },
                        className: 'material-symbols-outlined',
                        text : 'arrow_right',
                        style: {
                            position: 'absolute',
                            top : 15,
                            right: 15,
                            fontSize: 40
                        }
                    }
                ]
            },
        ]
    },
    jobBox: {
        kind: 'box',
        className: 'job-box'
    },
    jobBoard: {
        kind: 'box',
        className: 'jobposting'
    }
}