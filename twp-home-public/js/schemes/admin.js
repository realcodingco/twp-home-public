const admin = {
    header: {
        kind: 'box',
        className: 'adminHeader',
        style: {
            width: '100%',
            height : 56,
            borderBottom: '2px solid gray',
            display: 'flex',
        },
        children: [
            {
                kind: 'box',
                children: [
                    {
                        kind: 'span',
                        className: 'material-symbols-outlined',
                        text: 'menu',
                        onClick: e => {
                                $('.adminMenu')[0].style.display = 'flex';
                                $('.menuCover')[0].style.display = 'block';
                        }
                    }
                ]
            },
            {
                kind: 'a',
                text: 'Homepage admin',
                href : 'admin.html',
                style: {
                    margin: 16,
                    textDecoration: 'none',
                    color: 'black'
                }
            }
        ]
    },
    mobileMenuCover: {
        kind: 'box',
        className: 'menuCover',
        onClick: e => {
            $('.adminMenu')[0].style.display = 'none';
            e.target.style.display ='none'
        }
    },
    menu : {
        kind: 'box',
        className: 'adminMenu'
    },
    body: {
        kind: 'box',
        className : 'adminBody'
    },
    menuItem : {
        kind: 'a',
        className: 'adminMenuItem',
        children: [
            {
                kind: 'span',
                className: 'material-symbols-outlined',
                text:'person',
                style: {
                    fontSize: 20
                }
            },
            {
                kind: 'span'
            }
        ]
    },
    inputItem : {
        kind: 'box',
        className: 'editInput',
        style: {
            display: 'flex',
            borderBottom: '1px solid #f5f5f5',
            padding: '10px 20px',
            fontSize: 13
        },
        children: [
            {
                kind: 'box',
                style: {
                    paddingTop: 8,
                    color: 'black'
                }
            },
            {
                kind: 'input',
                spellcheck: false
            }
        ]
    }, 
    menuUl : {
        kind: 'ul',
        className: 'sortable',
        style: {
            listStyle: 'none',
            paddingLeft: 0
        }
    },
    menuCaption : {
        kind: 'box',
        style: {
            display: 'grid',
            gridTemplateColumns: '0.2fr 1fr 1fr 0.5fr 0.2fr',
            columnGap: 10,
            borderBottom: '1px solid #f5f5f5',
            padding: '10px 20px',
            fontSize: 13,
        }
    },
    menuInputItem : {
        kind: 'li',
        className: 'editInput',
        style: {
            display: 'grid',
            gridTemplateColumns: '0.2fr 1fr 1fr 0.5fr 0.2fr',
            columnGap: 10,
            borderBottom: '1px solid #f5f5f5',
            padding: '10px 20px',
            fontSize: 13,
            justifyItems: 'center'
        },
        children: [
            {
                kind: 'span',
                className: 'handle material-symbols-outlined',
                text: 'height',
                style: {
                    fontSize: 16,
                    marginTop: 9,
                    cursor: 'move'
                }
            },
            {
                kind: 'input',
                spellcheck: false,
                placeholder: 'title'
            },
            {
                kind: 'input',
                spellcheck: false,
                placeholder: 'html file'
            }
        ]
    },
    toggleBtn : {
        kind: 'box',
        text :'',
        style : {
            width: 'auto',
            justifySelf: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: '6px'
        },
        children: [
            {
                kind: 'input',
                type: 'checkbox',
                className: 'toggle',
                hidden: true
            },
            {
                kind: 'label',
                className: 'toggleSwitch',
                onClick: 'onClick',
                children: [
                    {
                        kind : 'span',
                        className: 'toggleButton',
                        onClick : e => e.preventDefault()
                    }
                ]
            }
        ]
    },
    deleteBtn : {
        kind: 'span' ,
        className: 'material-symbols-outlined',
        text:'delete',
        onClick: 'deleteMenu',
        style: {
            fontSize: 24,
            color: 'lightgray',
            justifySelf: 'center',
            alignSelf: 'center',
            cursor: 'pointer'
        }
    }, 
    addBtn : { // 메뉴관리 메뉴 추가 버튼
        kind: 'button',
        text: 'ADD',
        onClick: 'addMenu',
        style: {
            alignSelf: 'start',
            margin: 20,
            marginRight: 'auto',
            width: 60,
            height: 30,
            borderRadius: 10,
            border: '1px solid',
            background: 'transparent',
            boxShadow: 0,
            fontSize: 12
        }
    },
    saveBtn : {
        kind : 'button',
        text : 'SAVE',
        onClick: 'onSave',
        style: {
            alignSelf: 'end',
            margin: 20,
            marginLeft: 'auto',
            width: 60,
            height: 30,
            borderRadius: 10,
            border: '1px solid',
            background: 'transparent',
            boxShadow: 0,
            fontSize: 12
        }
    },
    CompSaveBtn : {
        kind : 'input',
        type:'submit',
        text : 'SAVE',
        style: {
            position: 'absolute',
            right: 35,
            top: -50,
            zIndex: 12,
            alignSelf: 'end',
            margin: 20,
            marginLeft: 'auto',
            width: 60,
            height: 30,
            borderRadius: '10px 10px 0px 0px',
            border: 0,
            color: 'white',
            // background: homepage.keyColor,
            boxShadow: 0,
            fontSize: 12
        }
    },
    buttonContainer : {
        kind: 'box',
        className: 'buttonContainer',
        style: {
            display: 'flex',
            flexDirection: 'row',
        },
    },
    guideText: {
        kind: 'span',
        className: 'tip material-symbols-outlined',
        text: 'live_help',
        children: [
            {
                kind: 'span',
                className: 'tip-text'
            }
        ]
    },
    pageSelect : {
        kind: 'select',
        id: 'pageSelect',
        onchange: 'pageSelect(this)',
        style: {
            width: '100%',
            paddingLeft: 10,
            // color: homepage.keyColor,
            fontSize: 14
        },
        children: [
            {
                kind:'option',
                html : '▾ (1) Choose a page'
            }
        ]
    },
    comboBar : {
        kind: 'box',
        style: {
            width: '95%', 
            height : 'auto',
            border: '1px solid lightgray',
            borderRadius : 10,
            padding: 'auto 5px',
            margin: '0px auto',
            display: 'flex',
            flexDirection:'row'
        }
    },
    compSelect : {
        kind: 'select',
        id : 'compSelect',
        onchange: 'compSelect(this)',
        style: {
            width: '100%',
            paddingLeft: 10 ,
            // color: homepage.keyColor,
            fontSize: 14
        },
        children: [
            {
                kind:'option',
                html : '▾ (2) Choose a component'
            }
        ]
    },
    option : {
        kind: 'option',
    },
    preview : {
        kind: 'box',
        style: {
            width: '95%',
            margin: 'auto',
            height: 'calc(100% - 132px)',
            marginTop: 10,
            paddingTop: 8,
            background: '#444',
            border: '1px solid #444',
            overflow: 'hidden'
        },
        children: [
            {
                kind: 'box', //탭
                className: 'previewTab',
                style: {
                    width: 180,
                    height: 33, 
                    borderRadius: '10px 10px 0px 0px',
                    marginLeft: 10,
                    padding: '2px 8px',
                    boxShadow: '0 0 0 -0.5em rgb(0 0 0 / 50%)',
                    background: 'white',
                    float: 'left'
                },
                children: [
                    {
                        kind: 'img', //파비콘
                        style: {
                            width: 18,
                            height: 18,
                            borderRadius: 2,
                            background: 'lightgray'
                        }
                    },
                    {
                        kind: 'box', //title
                        text :'',
                        style: {
                            width:'calc(100% - 18px)',
                            paddingLeft: 8,
                            fontSize: 12,
                            textOverflow: 'clip',
                            overflow: 'hidden',
                            whiteSpace:'nowrap',
                            marginTop: 4
                        }
                    }
                ]
            },
            { // 컴포넌트 데이터 편집 버튼
                kind : 'button',
                text : 'Component Edit',
                className: 'comp-edit-button',
                onClick: 'openCompEdit',
                style: {
                    display: 'none',
                    marginRight:8,
                    width: 'auto',
                    height: 25,
                    borderRadius: 8,
                    border: '1px solid white',
                    color: 'white',
                    background: 'transparent',
                    boxShadow: 0,
                    fontSize: 10,
                    float: 'right'
                }
            },
            { // 페이지 미리보기 버튼
                kind : 'button',
                text : 'Page Preview',
                onClick: 'showIframe',
                style: {
                    marginRight : 8,
                    width: 'auto',
                    height: 25,
                    borderRadius: 8,
                    border: '1px solid white',
                    color: 'white',
                    background: 'transparent',
                    boxShadow: 0,
                    fontSize: 10,
                    float: 'right'
                }
            },
            {
                kind: 'iframe',
                id: 'previewWindow',
                name : 'Iframe_preview',
                style: {
                    width: '100%',
                    height: 'calc(100% - 30px)',
                    display: 'none'
                    // border: '1px solid gray',
                    // borderRadius: 20
                }
            },
            {
                kind: 'box',
                id: 'componentBox',
                style: {
                    width: '100%',
                    height: 'calc(100% - 30px)',
                    background: 'white',
                    overflow: 'auto',
                    textAlign: 'left'
                }
            }
        ]
    },
    pageForm : {
        kind: 'box',
        className: 'pageForm',
        style: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            fontSize: 13,
            justifyItems: 'center',
        },
        children: [
            {
                kind: 'input',
                onChange: e => {
                    $('.previewTab').children()[1].innerText = e.target.value;
                },
                spellcheck: false,
                placeholder: 'window title'
            },
            {
                kind: 'input',
                onChange: e => {
                    $('.previewTab').children()[0].src = e.target.value;
                },
                spellcheck: false,
                placeholder: 'favicon'
            }
        ]
    },
    sideBar : {
        kind: 'box',
        className: 'sidebar',
        children: [
            {
                kind : 'box', // 닫기 버튼
                text : 'X',
                onClick: 'closeCompEdit',
                style: {
                    width: 'auto',
                    fontSize: 16,
                    padding: '5px 12px 1px 12px',
                    position: 'absolute',
                    top: -30,
                    right: 15,
                    cursor: 'pointer',
                    borderRadius: '10px 10px 0px 0px',
                    border: 0,
                    background: '#444',
                    color: 'white',
                }
            }, 
            {
                kind: 'form',
                style: {
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                    padding: 10
                }
            }
        ]
    },
    dataForm : {
        kind: 'box',
        style: {
            width: '100%',
            color: 'white',
            fontSize: 14,
            margin: '5px auto'
        },
        children: [
            {
                kind: 'p',
                style: {
                    width: 120,
                    textAlign: 'left',
                    margin: 0,
                    marginTop: 10,
                    float: 'left'
                }
            },
            {
                kind: 'textarea',
                spellcheck: false,
                keyup: function(e) {
                    //keyup시 높이 자동조절..
                    // $(e.target).css('height', 'auto');
                    // $(e.target).height(e.target.scrollHeight);
                },
                style: {
                    width: 'calc(100% - 120px)',
                    height: 'auto',
                    overflow: 'auto',
                    textDecoration: 'none',
                    outline: 0,
                    border: 0,
                    borderRadius: 5,
                    padding: 5,
                    fontWeight: 300,
                    float: 'right',
                    background: '#f7f7f7',
                    margin: 0
                }
            }
        ]
    },
    plusdata :  { // 컴포넌트 데이터 중 배열 데이터 추가 버튼
        kind: 'button',
        text: '+',
        style: {
            width: 100,
            height: 30,
            borderRadius: 10,
            border: 0,
            background: 'aqua',
            fontSize: 20
        },
        onClick: 'appendData'
    },
    minusdata : {
        kind: 'button',
        text: '-',
        style: {
            width: 30,
            height: 30,
            borderRadius: 100,
            border: 0,
            position: 'absolute',
            background: 'aqua',
            color: '',
            fontSize: 17,
            left: -15,
            top: -10
        },
        onClick: 'removeData'
    },
    lock: { // 초기 관리자 비밀번호 입력 창
        kind: 'box',
        style: {
            position : 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        },
        children: [
            {
                kind: 'span',
                className: 'material-symbols-outlined',
                text : 'lock',
                style: {
                    fontSize: 150,
                    margin: '10px auto'
                }
            },
            {
                kind: 'box',
                style: {
                    width: '100%',
                    fontSize: 13,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: [
                    {
                        kind: 'input',
                        type: 'password',
                        placeholder: 'enter a password',
                        keyup: e => {
                            if(e.key == 'Enter') {
                                $(e.target).next().click();
                            }
                        },
                        style: {
                            fontSize: 15,
                            width: 200,
                            textAlign: 'center',
                            textDecoration: 'none',
                            padding: 5,
                            outline: 0
                        }
                    },
                    {
                        kind: 'button',
                        text: 'Enter',
                        style: {
                            border: 0,
                            margin: 10,
                            padding: '5px 20px',
                            borderRadius: 8
                        }
                    }
                ]
            }
            
        ]
    },
    changepw : {
        kind: 'box',
        className: 'access-inputs',
        style: {
            display: 'flex',
            flexDirection: 'column',
            width: 200,
            margin: '20px auto'
        },
        children: [
            {
                kind: 'input',
                placeholder: 'current password',
                type: 'password'
            },
            {
                kind: 'input',
                placeholder : 'new password',
                type: 'password'
            },
            {
                kind: 'input',
                placeholder: 'new password confirm',
                type: 'password'
            },
            {
                kind: 'button',
                onClick: 'saveAccess',
                text: 'SAVE'
            }
        ]
    },
    faviPreview : {
        kind: 'box',
        style: {
            width : 18,
            height: 18,
            borderRadius :5,
            border: '1px solid #f7f7f7',
            backgroundSize : 'cover',
            margin : 'auto 10px',
            float :'right'
        }
    }
}
