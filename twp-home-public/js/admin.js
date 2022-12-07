// 홈페이지 관리를 위한 admin 페이지 구성
let homepage, totalData, body, ciHeight;
let access = false;

const pages = { // 페이지 목록 선택상자 데이터, 페이지별 컴포넌트 목록
    index : {
        title : 'main page',
        page : './js/app.js', //페이지 구성 파일경로
        comp: [ // 컴포넌트별 데이터 수정 할 수 있도록
            {
                name : 'Header',
                data : 'header' // 데이터 키
            },{
                name : 'SlideBanner',
                data : 'banner'
            },{
                name : 'About', 
                data : 'about'
            },{
                name : 'IconCard', 
                data : 'application'
            },{
                name : 'NewsCard', 
                data : 'newsContent'
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data: ''
            }
        ],
    },
    about : {
        title: 'About menu page',
        page : './js/about.js',
        comp : [
            {
                name : 'Header',
                data : 'header' // 데이터 키
            },{
                name: 'Intro',
                data: 'intro'
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data: ''
            }
        ]
    },
    news : {
        title : 'News menu page',
        page : './js/news.js',
        comp : [
            {
                name : 'Header',
                data : 'header' 
            },{
                name : 'News',
                data : 'newsContent' 
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data: ''
            }
        ]
    },
    article : {
        title: 'news article page',
        page : './js/article.js',
        comp : [
            {
                name : 'Header',
                data : 'header' // 데이터 키
            },{
                name : 'Article',
                data : '' 
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data: ''
            }
        ]
    },
    capabilities : {
        title : 'Capabilities menu page',
        page : './js/capabilities.js',
        comp : [
            {
                name : 'Header',
                data : 'header' 
            },{
                name : 'Capability',
                data : 'capability' 
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data: ''
            }
        ]
    },
    careers : {
        title : 'Careers menu page',
        page : './js/careers.js',
        comp : [
            {
                name : 'Header',
                data : 'header' 
            },{
                name : 'Careers',
                data : 'career' 
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data: ''
            }
        ]
    }, 
    contact : {
        title : 'Contact menu page',
        page : './js/contact.js',
        comp : [
            {
                name : 'Header',
                data : 'header' 
            },{
                name : 'Contact',
                data : 'contact', 
            },{
                name : 'Footer',
                data: ''
            }
        ]
    }, 
    legal : {
        title : 'legal infomation page',
        page : './js/legal.js',
        comp : [
            {
                name : 'Header',
                data : 'header' 
            },{
                name : 'Legal',
                data : 'legal' 
            },{
                name : 'Connect', 
                data : 'connect'
            },{
                name : 'Footer',
                data : ''
            }
        ]
    },
    technology : {
        title: 'Technology menu page',
        page: './js/technology.js',
        comp : [
            {
                name : 'Header',
                data : 'header'
            }, {
                name : 'Technology',
                data : 'technology'
            }, {
                name : 'Connect',
                data : 'connect'
            }, {
                name : 'Footer',
                data : ''
            }
        ]
    }
};

const adminMenus = { // 관리자페이지 메뉴항목 및 가이드
    basic : {
        text: 'Basic information management',
        icon: 'person',
        open : basicItems,
        guide : `Manage the basic information data of the homepage.<br>
        Enter the items to be edited and save them to be reflected.`
    },
    menu : {
        text: 'menu management', 
        icon: 'list',
        open : menuItems,
        guide : `Manage the menu data of the homepage<br><br>
        - To change the order, drag the arrow to change the position of the line<br>
        - You can edit the menu name<br>
        - You can decide whether to use the menu or delete it<br><br>
        After editing is complete, save it and it will be reflected.`
    },
    footer: {
        text: 'Footer item management',
        icon: 'barefoot',
        open : footerItems,
        guide : `You can edit the Quick Link item at the bottom of the homepage.<br>
        Edit quick link titles and delete unnecessary links.<br>
        <font color=gold>Pages documents cannot be edited.`
    },
    banner: {
        text : '[main] banner',
        icon : 'edit_document',
        open : 'banner',  //데이터를 불러오는 key, location hash로 사용
        guide: `Edit the content of the main banner.`
    },
    about: {
        text : '[main] article',
        icon : 'edit_document',
        open : 'about',  
        guide: `Edit the body area just below the main banner.`
    },
    application: {
        text : '[Main] applications',
        icon : 'edit_document',
        open : 'application',  
        guide: `Edit horizontally scrolling card box area.`
    },
    intro: {
        text : '[About] page',
        icon : 'edit_document',
        open : 'intro',  
        guide: `Edit the contents of the about menu page.<br>
        You can edit the content of the link banner and team data.`
    },
    technology: {
        text : '[Technology] page',
        icon : 'edit_document',
        open : 'technology',  
        guide: `Edit the contents of the technology menu page.`
    },
    newsContent: {
        text : '[News] article',
        icon : 'edit_document',
        open : 'newsContent',  
        guide: `Edit the list of news articles to be featured on the news page.`
    },
    capability: {
        text : '[capabilities] page',
        icon : 'edit_document',
        open : 'capability',  
        guide: `Edit the contents of the capabilities menu page`
    },
    career: {
        text : '[Careers] page',
        icon : 'edit_document',
        open : 'career',  
        guide: `Edit the job information data to be provided in the careers menu.`
    },
    legal: {
        text : '[Legal] page',
        icon : 'edit_document',
        open : 'legal',  
        guide: `Edit legal information page.`
    },
    connect: {
        text : 'contact banner',
        icon : 'edit_document',
        open : 'connect',  
        guide: `Edit the contact banner exposed at the bottom of the page.`
    },
    access : {
        text : 'authorization',
        icon: 'lock',
        open : adminAccess,
        guide : `.`

    }
};

initApp();

/**
 * 관리자 페이지 초기화 함수
 */
function initApp() {
    initDatabase();
    readConfig((error, data) => {
        let result;
        if(error) {
            console.log('설정을 읽어오지 못했습니다.', error);
        }
        else {
            result = JSON.stringify(data);
        }

        if(!result) result = JSON.stringify(config);
        homepage = JSON.parse(result);
        document.title = 'Admin | ' + homepage.cname;
        document.querySelector("link[rel='shortcut icon']").href = homepage.favicon;
        document.documentElement.style.setProperty("--main", homepage.keyColor);
        totalData = JSON.parse(JSON.stringify(homepage)); // 수정용 데이터 복사

        if(!access) {
            const accessBox = BX.component(admin.lock).appendTo(topBox).textColor(homepage.keyColor);
            accessBox.find('input').focus();
            accessBox.find('button')[0].onclick = e => {
                if($(e.target).prev()[0].value == atob(totalData.adminAccess)) {
                    $(accessBox).remove();
                    enterAdmin();
                    access = true;
                } else {
                    alert('Password is incorrect. \nCheck the admin access password.');
                    $(e.target).prev()[0].value = '';
                }
            }
        } else {
            enterAdmin();
        }
        
    });
}

/**
 * 관리자 페이지 메뉴 선택에 따른 페이지 리셋
 */
function enterAdmin() {
    const b = box().appendTo(topBox).maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)').overflow('hidden');
    BX.component(admin.header).appendTo(b);
    const bg = box().appendTo(b).size('100%', 'calc(100vh - 56px)').display('flex');
    const menu = BX.component(admin.menu).appendTo(bg);
    
    BX.component(admin.mobileMenuCover).appendTo(bg);
    Object.keys(adminMenus).forEach(function(o) {
        const item = BX.component(admin.menuItem).appendTo(menu);
        item[0].href = '#' + o;
        item.find('span')[0].innerText = adminMenus[o].icon;
        item.find('span')[1].innerText  = adminMenus[o].text;
        
        if( o == location.hash.substring(1) || location.hash == '' && o == 'basic') {
            item.addClass('clicked');
        } 
        else {
            item.removeClass('clicked');
        }
    });

    body = BX.component(admin.body).appendTo(bg);
    const hashTxt = location.hash.substring(1);
    const bodyTitle = box().appendTo(body).text(adminMenus[location.hash == '' ? 'basic' : hashTxt].text).padding('15px 25px');

    // 관리자 메뉴별 가이드..
    appendGuide(body, adminMenus[location.hash == ''? 'basic' : hashTxt].guide).position('absolute').left(0).top(10);
    

    // 메뉴별 바디 붙이기
    if(location.hash == '') {
        basicItems().appendTo(body);
    } else if(typeof adminMenus[hashTxt].open == 'string') {
        const b = box().height('calc(100% - 54px)').align('center').appendTo(body);
        b[0].className = 'pageBg';
        openCompEdit(null, adminMenus[hashTxt].open);
    } else {    
        const appendComponent = adminMenus[hashTxt].open;
        appendComponent().appendTo(body);
    }
}
function appendGuide(target, text) {
    const guideIcon = BX.component(admin.guideText).appendTo(target);
    guideIcon.children()[0].innerHTML = text;

    return guideIcon;
}

/**
 * 기본 정보 관리를 위한 페이지 생성
 * @returns 기본정보 관리 페이지 box
 */
function basicItems() {
    const b = box().size('100%', 'auto');
    const data = {
        'cname' : {
            title : 'Home Title',
            guide: 'window title'
        },
        'favicon' : {
            title: 'Favicon',
            guide: 'Homepage representative icon image<br>displayed in the address bar<br> ( size : 32 * 32px )'
        },
        'ci': {
            title : 'CI Image',
            guide : 'Your Homepage Logo or CI image<br>( width : 200px )'
        }, 
        'address': {
            title : 'Address'
        }, 
        'email': {
            title : 'Email'
        }, 
        'phone': {
            title : 'Phone Number'
        },
        'copyright' : {
            title : 'Copyright',
            guide: 'Copyright text in the footer area'
        },
        'keyColor' : {
            title: 'Key Color',
            guide: 'Main colors used on the homepage<br> ( hex code or color name )'
        }
    };

    const inputBg = box().appendTo(b).size('100%', 'auto').textColor('black');
    Object.keys(data).forEach(function(o) {
        const el = BX.component(admin.inputItem).appendTo(inputBg);
        el.children()[0].innerText = data[o].title;
        if(data[o].guide) {
            const guideIcon = BX.component(admin.guideText).appendTo(el.children()[0]);
            guideIcon.children()[0].innerHTML = data[o].guide;
        }
    
        el.children()[1].value = totalData[o];
        el.children()[1].name = o;
        if(o == 'keyColor') {
            el.children()[1].style.background = totalData[o];
            el.children()[1].style.color = 'white';
            $(el.children()[1]).focusout((e) => {
                e.target.style.background = e.target.value;
            });
        } else if( o == 'favicon') {
            const pv = BX.component(admin.faviPreview).appendTo(el.children()[0]);
            pv[0].style.background = 'url("'+ totalData[o] +'") center/cover';
            $(el.children()[1]).focusout((e) => {
                pv[0].style.background = 'url("'+ e.target.value +'") center/cover';
            });
        }
    });
    const buttonContainer = BX.component(admin.buttonContainer).appendTo(b);
    BX.component(admin.saveBtn).appendTo(buttonContainer);

    return b; 
}

/**
 * 메뉴 관리를 위한 페이지 생성
 * @returns 메뉴 관리 페이지 box
 */
function menuItems() {
    const b = box();
    const menuData = totalData.header.menuData;
    let edited = [];

    const captions = ['order', 'menu name', 'page document', 'use or no', 'delete'];
    const captionBg = BX.component(admin.menuCaption).appendTo(b);
    for(var c=0; c<captions.length; c++) {
        box().appendTo(captionBg).text(captions[c]).align('center');
    }

    const ul = BX.component(admin.menuUl).appendTo(b); 
    ul.sortable({
        handle: '.handle',
        revert: true,
        update: function(e, ui) { // 메뉴 순서 변경
            const changed = ui.item[0]; // 변경된 요소
            edited.splice(0); // 배열 비우기
            const childNodes = e.target.childNodes;
            for(var i=0; i<childNodes.length; i++) {
                const elements = childNodes[i].getElementsByTagName('input');
                const data = {
                    title : elements[0].value, //title
                    link : elements[1].value, //link
                    state : elements[2].className.includes('active') // state
                };
                edited.push(data);
            }
        }
    });

    for(var i=0; i<menuData.length; i++) {
        appendMenuLine(ul, menuData[i]);
    }

    const buttonContainer = BX.component(admin.buttonContainer).appendTo(b);
    // BX.component(admin.addBtn).appendTo(buttonContainer);
    BX.component(admin.saveBtn).appendTo(buttonContainer);

    return b; 
}

/**
 * 푸터 항목 관리를 위한 페이지 생성
 * @returns 푸터 항목 관리 페이지 box
 */
function footerItems() {
    const b = box();
    const footerData = totalData.footers;

    const captions = ['', 'item title', 'page document', 'delete'];
    const captionBg = BX.component(admin.menuCaption).appendTo(b);
    for(var c=0; c<captions.length; c++) {
        box().appendTo(captionBg).text(captions[c]).align('center');
    }
   
    const ul = BX.component(admin.menuUl).appendTo(b); 
    for(var i=0; i<footerData.length; i++) {
        appendFooterLine(ul, footerData[i].title, footerData[i].link);
    }

    const buttonContainer = BX.component(admin.buttonContainer).appendTo(b);
    // BX.component(admin.addBtn).appendTo(buttonContainer);
    BX.component(admin.saveBtn).appendTo(buttonContainer);        

    return b; 
}

/**
 * 페이지 관리를 위한 페이지 생성
 * @returns 페이지 관리 페이지 box
 */
function pageItems() {
    const b = box().height('calc(100% - 54px)').align('center');
    b[0].className = 'pageBg';
    
    const comboLine = BX.component(admin.comboBar).appendTo(box().appendTo(b).display('flex')).marginBottom(10);
    const wrap1 = box().appendTo(comboLine).size('50%','auto').color('#f7f7f7').borderRadius(8).padding(5).margin(5);
    const select1 = BX.component(admin.pageSelect).appendTo(wrap1).textColor(totalData.keyColor);
    Object.keys(pages).forEach(function(o) {
        const option = BX.component(admin.option).appendTo(select1).padding(2);
        option[0].innerText = pages[o].title;
        option[0].value = o; // 페이지 html 문서
    });
    const wrap2 = box().appendTo(comboLine).size('50%','auto').color('#f7f7f7').borderRadius(8).padding(5).margin(5);
    BX.component(admin.compSelect).appendTo(wrap2).textColor(totalData.keyColor);

    return b; 
}
/**
 * 페이지 관리 메뉴 : 페이지 선택상자 선택 이벤트
 * @param {*} e 
 */
function pageSelect(e) {
    $('.sidebar').remove();
    // 페이지별 컴포넌트 목록 생성하기
    var target = document.getElementById("compSelect");
    target.options.length = 1;
    var d = pages[e.value].comp; //{name, data}
    for(var i=0; i<d.length; i++) {
        var opt = BX.component(admin.option).appendTo(target).padding(2);
        opt[0].value = d[i].data;
        opt[0].innerText = d[i].name;
    }	

    //  2,3번째 요소 삭제 : 기존 선택된 페이지 내용이 있다면 리셋
    const nodes = $('.pageBg')[0].childNodes;
    if(nodes.length > 1) {
        $('.pageBg')[0].removeChild( nodes[1] ); 
        $('.pageBg')[0].removeChild( nodes[1] );   
    }
    // page 데이터 : title, favicon / 미리보기 버튼 / 컴포넌트 구성
    const inputBg = BX.component(admin.pageForm).appendTo($('.pageBg'));
    BX.component(admin.saveBtn).appendTo(inputBg).margin(5);
    if(totalData.pages[e.value]) {
        inputBg.children()[0].value = totalData.pages[e.value].title;
        inputBg.children()[1].value = totalData.pages[e.value].favicon;
    }

    BX.component(admin.preview).appendTo($('.pageBg')); // 미리보기 창 : 탭, iframe, componentBox 포함
    if(totalData.pages[e.value]) {
        $('.previewTab').children()[0].src = totalData.pages[e.value].favicon;
        $('.previewTab').children()[1].innerText = totalData.pages[e.value].title;
    }
}

/**
 * 페이지 관리 - 컴포넌트 선택상자 선택 이벤트
 * @param {*} e 
 */
function compSelect(e) {
    $('#previewWindow')[0].style.display = 'none';
    $('#componentBox')[0].style.display = 'block';
    // 해당 컴포넌트 미리보기 창으로 열어주기.
    $('#componentBox').empty();
    const componentName = $('#compSelect option:selected')[0].innerText;
    
    let componentData;
    if(componentName == 'Article') {
        componentData = undefined;
        BX.components[componentName].bx({aid : totalData.newsContent.data[0].aid}).appendTo($('#componentBox'));
    } 
    else if(!e.value) {
        componentData = undefined;
        BX.components[componentName].bx().appendTo($('#componentBox'));
    } 
    else { 
        componentData = totalData[e.value];
        BX.components[componentName].bx(componentData).appendTo($('#componentBox'));
    } 

    // 컴포넌트에 fixed인 요소는 componentBox 안으로 편입시키기 
    $('.fixed').each(function(index, item){
        item.style.position = 'absolute';
    });
    
    // 편집 제외 대상 컴포넌트
    const exceptComp = ['Header', 'Contact', 'Footer'];
    if(componentData != undefined && !exceptComp.includes(componentName)) {
        // 컴포넌트 편집 버튼 노출
        $('.comp-edit-button')[0].style.display = 'block';
    }
}

/**
 * component 데이터 관련 메뉴 선택시
 * component edit 버튼 클릭 이벤트
 */
function openCompEdit(e, key) {
    // 컴포넌트 데이터를 수정할 수 있도록 팝업창 만들기 - 저장버튼
    const side = BX.component(admin.sideBar).appendTo($('.pageBg')[0]).top(40).zIndex(10).color('rgba(0,0,0,0.8)').height('calc(100% - 40px)');   //vh - 100px)');
    let type = 'component'; // 수정모드
    
    if(!key) {
        key = $('#compSelect')[0].value;
    } else {
        side.children()[0].style.display = 'none';
        type = 'data';
    }
    totalData[key] = JSON.parse(JSON.stringify(homepage[key])); // 메뉴전환시마다 데이터 복원
    let componentData = totalData[key];
    
    // 사용자 ui 버전
    if(Array.isArray(componentData)) { // 배열이면
        appendArr('', componentData, side.children()[1]);
        
    } 
    else {
        appendObj('', componentData, side.children()[1]);
    }

    //textarea 높이 조절
    function fixedHeight(item){
        if(item.offsetHeight < item.scrollHeight) {
            item.style.height = (item.scrollHeight + 10) + 'px';
        }
    }

    //저장버튼 붙이기
    const saveBtn = BX.component(admin.CompSaveBtn).appendTo(side.children()[1]).color(totalData.keyColor);
    if(type == 'data') {
        saveBtn[0].onclick = saveData;
    } else {
        saveBtn[0].onclick = saveComponentData;
    }

    function appendArr(upper, arr, target) { // [{},{}..]
        for(var i=0; i<arr.length; i++) {
            const one = box().appendTo(target).size('95%', 'auto').border('1px solid aqua').padding(10).margin('20px auto').borderRadius(5);
            one[0].name = 'array';
            Object.keys(arr[i]).forEach(function(k) {
                const d = BX.component(admin.dataForm).appendTo(one);
                d.children()[0].innerText = k;
                if(k == 'time' || k == 'deadline') {
                    d.children()[1].value = convertDateString(arr[i][k]);
                } else {
                    d.children()[1].value = arr[i][k];
                }
                
                d.children()[1].style.color = totalData.keyColor;
                d.children()[1].name = upper != '' ? upper + '[' + i + '].' + k : k;

                //가이드 붙이기
                const splitKeys = upper.split('.');
                let guideData;
                if(!upper) {
                    guideData = adminGuide[key][0][k];
                }
                else if(splitKeys.length > 1) {
                    let data = adminGuide[key];
                    let searched = data;
                    for(var o=0; o<splitKeys.length; o++) {
                        searched = searched[splitKeys[o]];
                    }
                    guideData = searched[0][k];
                } 
                else {
                    guideData = adminGuide[key][upper][0][k];
                }

                if(guideData == 'readonly') {
                    d.children()[1].readOnly = true;
                } else {
                    appendGuide(d.children()[0], guideData).margin(0);
                }
            
                //textarea 높이조절
                fixedHeight(d.children()[1]);
            });
            // 삭제 버튼 텍스트는 목록 순서 숫자, 호버시 마이너스 노출
            const btn = BX.component(admin.minusdata).appendTo(one).text(i+1);
            btn[0].addEventListener('mouseover', function() {
                this.innerText = '-';
            });

            btn[0].addEventListener('mouseout', function() {
                this.innerText = $(this).parent().index();
            });
        }
        //마지막 플러스 버튼..
        BX.component(admin.plusdata).appendTo(target); 
    }

    function appendObj(upper, obj, target) { // {k : v(string)}
        const one = box().appendTo(target).size('95%', 'auto').border('1px solid gray').padding(10).margin(5).borderRadius(5);
        one[0].name = 'object';

        Object.keys(obj).forEach(function(o, i) {
            const d = BX.component(admin.dataForm).appendTo(one);
            d.children()[0].innerText = o;
            if(typeof obj[o] == 'string'){
                d.children()[1].style.color = totalData.keyColor;
                d.children()[1].value = obj[o];
                d.children()[1].name = upper != '' ? upper + '.' + o : o;

                //가이드 붙이기
                const splitKeys = upper.split('.');
                let guideData;
                if(!upper) {
                    guideData = adminGuide[key][o];
                }
                else if(splitKeys.length > 1) {
                    let data = adminGuide[key];
                    let searched = data;
                    for(var i=0; i<splitKeys.length; i++) {
                        searched = searched[splitKeys[i]];
                    }
                    guideData = searched[o];
                } 
                else {
                    guideData = adminGuide[key][upper][o];
                }

                if(guideData == 'readonly') {
                    d.children()[1].readOnly = true;
                    d.children()[1].style.background = 'lightgray';
                } else {
                    appendGuide(d.children()[0], guideData).margin(0);
                }

                fixedHeight(d.children()[1]);
            }
            else if(Array.isArray(obj[o])) {
                d.children()[0].style.width = '100%';
                d.children()[1].remove();
                appendArr(upper != '' ? upper + '.' + o : o, obj[o], d);
            } 
            else {
                d.children()[0].style.width = '100%';
                d.children()[1].remove();
                appendObj(upper != '' ? upper + '.' + o : o, obj[o], d);
            }
        });
    }
}

/**
 * 
 * @param {*} e 
 */
function closeCompEdit(e) {
    $('.sidebar').remove();
    //데이터 원상복구
    let key = $('#compSelect')[0].value; 
    totalData[key] = homepage[key];
}
/**
 * 컴포넌트 데이터 편집에서 배열 데이터의 추가를 위한 버튼 클릭 이벤트
 * @param {*} e 
 */
function appendData(e) { 
    e.preventDefault();
    let key = location.hash.slice(1); //$('#compSelect')[0].value; 
    
    // 복사해서 붙여주기
    const clone = $(e.target).prev().clone(true);
    clone[0].style.border = '2px solid red';
    clone[0].id = 'clone';
    $(e.target).before(clone);
    console.log($(e.target).offset().top)
    clone[0].scrollIntoView({ behavior: 'smooth'})
    // $('form')[0].scrollTop({ top : $('form').scrollTop() + 100, behavior: 'smooth' });

    // 순서 버튼 텍스트 변경, 호버 이벤트 
    const btn = clone.find('button')[0];
    btn.innerText = $(btn).parent().index();
    btn.addEventListener('mouseover', function() {
        this.innerText = '-';
    });

    btn.addEventListener('mouseout', function() {
        this.innerText = $(this).parent().index();
    });

    clone.find('textarea').each((idx, el) => {
        let t = el.name.split('[');
        let plusIdx = $(e.target).parent().children().length - 3; //p, button 요소 제외
        el.name =  t[0] + '[' + plusIdx + t[1].slice(1);
        el.value = '';

        //데이터 처리
        let rawData = JSON.parse(JSON.stringify(homepage[key][t[0]][0]));
        totalData[key][t[0]][plusIdx] = rawData;
        // eval('totalData.' + key + '.' + el.name + '=' + '""');
    });    
}

/**
 * 컴포넌트 데이터 편집에서 배열 데이터의 삭제를 위한 버튼 클릭 이벤트
 * @param {*} e 
 */
function removeData(e) {
    e.preventDefault();
    let key = location.hash.slice(1); //$('#compSelect')[0].value; 
    const deletedEl = $(e.target).parent();
    // 배열의 길이를 줄여.. 
    const firstel = deletedEl.find('textarea')[0];
    let t = firstel.name.split('[');
    totalData[key][t[0]].splice(totalData[key][t[0]].length-1, 1);
    
    // name 값 재할당 후, 삭제
    let count = 0;
    deletedEl.parent().children().each((i, el) => {
        if(el.tagName == 'DIV' && el != deletedEl[0]) {
            $(el).find('button')[0].innerText = count + 1;
            $(el).find('textarea').each((idx, child) => {
                let t = child.name.split('[');
                child.name =  t[0] + '[' + count + t[1].slice(1);
                // 데이터 처리
                // eval('totalData.' + key + '.' + child.name + '=' + '"' + child.value + '"');
            });
            count++;
        }
    });
    deletedEl.slideUp(function(){
        deletedEl.remove();
    });    
}

/**
 * page preview 버튼 클릭 이벤트
 */
function showIframe(){
    $('#previewWindow')[0].style.display = 'block';
    $('#componentBox')[0].style.display = 'none';
    // 미리보기
    const page = $('#pageSelect')[0].value;
    if(page == 'article') {
        var aid = totalData.newsContent.data[0].aid;
        $('#previewWindow')[0].src = page + '.html' + '#' + aid;
    } else
    $('#previewWindow')[0].src = page + '.html';
}

/**
 * 컴포넌트 데이터 저장 버튼 클릭 이벤트 : 콤보박스 UI를 통한 데이터 편집모드
 * @param {*} e 
 */
function saveComponentData(e) {
    e.preventDefault();
    let key = $('#compSelect')[0].value;   
    let blankCount = 0;
    $('.sidebar textarea').each(function(index,item){
        // 저장할 데이터
        let editData = item.value;
        if(!editData) blankCount++;
        if(item.name.includes('time') || item.name.includes('deadline')) {
            editData = convertDateString(editData, true);
        }
        if(typeof editData == 'string')
        editData = editData.replace(/\n/g, "");
        eval('totalData.' + key + '.' + item.name + '=' + '"' + editData + '"');
    });    
    // 미입력 항목 체크
    if(blankCount > 0) { 
        alert('Please fill in blank fields and try again.');
        return;
    }
    // 변경 데이터 체크
    if(JSON.stringify(totalData[key]) == JSON.stringify(homepage[key])) { 
        alert('Nothing has changed.');
        return;
    }

    if(confirm('Do you want to save?') == true) {
        writeData(totalData, function(result) {
            alert('Saved.');
            //편집창을 닫고, 데이터가 변경된 컴포넌트 미리보기 창 새로고침
            homepage = JSON.parse(JSON.stringify(totalData));
            $('.sidebar').remove();
            compSelect($('#compSelect')[0])
        });
    } 
}

/**
 * 메뉴를 통한 데이터 편집 저장 버튼 클릭 이벤트
 * @param {*} e 
 */
function saveData(e) {
    e.preventDefault();
    let key = location.hash.slice(1);
    let blankCount = 0;
    $('.sidebar textarea').each(function(index,item){
        // 저장할 데이터
        let editData = item.value;
        if(!editData) blankCount++;
        if(item.name.includes('time') || item.name.includes('deadline')) {
            editData = convertDateString(editData, true);
        }
        if(typeof editData == 'string')
        editData = editData.replace(/\n/g, "");
        eval('totalData.' + key + '.' + item.name + '=' + '"' + editData + '"');
    });    
    // 미입력 항목 체크
    if(blankCount > 0) { 
        alert('Please fill in blank fields and try again.');
        return;
    }
    // 변경 데이터 체크
    if(JSON.stringify(totalData[key]) == JSON.stringify(homepage[key])) { 
        alert('Nothing has changed.');
        return;
    }

    if(confirm('Do you want to save?') == true) {
        writeData(totalData, function(result) {
            alert('Saved.');
            //편집창을 닫고, 데이터가 변경된 컴포넌트 미리보기 창 새로고침
            homepage = JSON.parse(JSON.stringify(totalData));
        });
    } else {
        totalData[key] = homepage[key];
    }
}

/**
 * 메뉴 사용여부 토글버튼 클릭 이벤트
 * @param {*} e 
 * @returns 
 */
function onClick(e) {
    if(e.target.tagName == 'SPAN') { //상위 요소 클릭해주기
        $(e.target).parent().click();
        return;
    }
    const targetId = e.target.getAttribute('for');
    $('#' + targetId)[0].classList.toggle('active');
    
    if($('#' + targetId).hasClass('active')) {
        $(e.target).parent().text('Yes').textColor('#444');
    } else {
        $(e.target).parent().text('No').textColor('red');
    }
}

/**
 * 저장 버튼 클릭 이벤트
 * @returns 
 */
function onSave() {
    const target = $('.adminBody > div').html().split('<')[0]; //메뉴별 페이지 상단 제목 한글 텍스트 가져오기

    if(target == 'menu management') {
        let edited = []; // totalData.header.menuData
        const childNodes = $('ul')[0].childNodes;
        for(var i=0; i<childNodes.length; i++) {
            const elements = childNodes[i].getElementsByTagName('input');
            const data = {
                title : elements[0].value, 
                link : elements[1].value,
                state : elements[2].className.includes('active') ? 'open' : 'close' 
            };
            if(data.title == '' || data.link == '') {
                alert('Fill in the missing fields and try again.');
                return;
            } else
            edited.push(data);
        }
        totalData.header.menuData = edited;
        // console.log(edited);
    } 
    else if(target == 'Basic information management') {
        const inputs = $('input');
        let data = {}; // 데이터 확인용
        for(var i=0; i<inputs.length; i++) {
            totalData[inputs[i].name] = inputs[i].value;
            data[inputs[i].name] = inputs[i].value;
        }
        // console.log(data);
    } 
    else if(target == 'Footer item management') {
        let data = []; 
        const childNodes = $('ul')[0].childNodes;
        for(var i=0; i<childNodes.length; i++) {
            let one = {};
            const elements = childNodes[i].getElementsByTagName('input');
            one.title = elements[0].value;
            one.link = elements[1].value;
            data.push(one);
            if(elements[0].value == '' || elements[1].value == '') {
                alert('Fill in the missing fields and try again.');
                return;
            }
        }
        //변경된 사항이 없으면.. 
        totalData.footers = data;
        // console.log(data);
    } 
    else if(target == 'page management') {
        // pages title, favicon 수정
        const pageName = document.getElementById("pageSelect").value;
        const inputs = $('input');
        if(!totalData.pages) totalData.pages = {};
        if(!totalData.pages[pageName]) totalData.pages[pageName] = {};
        totalData.pages[pageName].title = inputs[0].value;
        totalData.pages[pageName].favicon = inputs[1].value;
    }
    
    if(confirm('Do you want to save?') == true) {
        writeData(totalData, function(result) {
            alert('Saved.');
            homepage = JSON.parse(JSON.stringify(totalData));
            topBox.empty();
            enterAdmin();
        });
    }
}

/**
 * 푸터항목 관리 페이지에서 데이터 라인 생성하기
 * @param {*} target 라인을 붙여줄 대상
 * @param {*} title 퀵링크 제목
 * @param {*} doc 퀵링크 연결 문서
 */
function appendFooterLine(target, title, doc) {
    const line = BX.component(admin.menuInputItem).appendTo(target);
    line.children()[1].value = title;
    line.children()[2].value = doc;
    line.children()[2].readOnly = true;
    line.children()[2].style.background = 'lightgray';
    line.children()[0].innerText = '';

    BX.component(admin.deleteBtn).appendTo(line);
}

/**
 * 메뉴 관리 페이지에서 메뉴항목 생성하기
 * @param {*} target 붙일 대상
 * @param {*} data 메뉴 데이터
 */
function appendMenuLine(target, data) {
    const line = BX.component(admin.menuInputItem).appendTo(target);
    if(Object.keys(data).length != 0) {
        line.children()[1].value = data.title;
        line.children()[2].value = data.link;
        line.children()[2].readOnly = true;
        line.children()[2].style.background = 'lightgray';
    }

    const toggleBtn = BX.component(admin.toggleBtn).appendTo(line);
    const id = 'toggle' + data.title;
    const targetToggle = toggleBtn.children()[0];
    targetToggle.id = id;
    toggleBtn.children()[1].setAttribute('for', id);
    
    if(data.state == 'open') { // 메뉴 사용여부 토글 처리
        toggleBtn.text('Yes').textColor('#444');
        $(targetToggle).addClass('active');
    } 
    else {
        toggleBtn.text('No').textColor('red');
        $(targetToggle).removeClass('active');
    }
    BX.component(admin.deleteBtn).appendTo(line);
}

/**
 * 메뉴, 푸터항목 관리 페이지에서 사용하는 ADD 버튼 클릭 이벤트
 * @param {*} e 
 */
function addMenu(e) {
    const target = $('.adminBody').children()[0].innerText;
    if(target == 'menu management') appendMenuLine($('ul')[0], {});
    else if(target == 'Footer item management') appendFooterLine($('ul')[0], '', '');
}

/**
 * 메뉴, 푸터항목 관리 페이지에서 사용하는 휴지통 아이콘 클릭 이벤트
 * @param {*} e 
 */
function deleteMenu(e) {
    const target = $(e.target).parents('li');
    target[0].style.background = 'rgba(0,0,0,0.3)';

    const deleted = () => {
        if(confirm('Are you sure you want to delete that item?') == true) {
            target.slideUp(function(){
                target.remove();
            });  
        } 
        else {
            target[0].style.background = '';
        }
    }
    setTimeout(deleted, 100);
    
}

/**
 * 관리자 접근 설정 페이지 생성
 * @returns 관리자 접근 설정 페이지 box
 */
function adminAccess(){
    const b = box();
    BX.component(admin.changepw).appendTo(b);

    return b;
}

/**
 * 관리자 비밀번호 변경 save 버튼 클릭이벤트
 */
function saveAccess(){
    const dataEl = $('input');
    let checkCurrent = atob(totalData.adminAccess) == dataEl[0].value;
    let matchPassword = dataEl[1].value == dataEl[2].value;

    if(!checkCurrent) {
        alert('Current password is incorrect.\nPlease enter again.');
        return;
    }
    if(!matchPassword) {
        alert('New password does not match.\nPlease enter again.');
        return;
    } 

    if(confirm('Would you like to change the admin password?') == true) {
        totalData.adminAccess = btoa(dataEl[1].value);
        writeData(totalData, function(result) {
            alert('password has been changed.');
            location.reload();
        });
    }
}

/**
 * 시간 문자열을 타입스탬프 또는 포맷된 date string으로 변환해 주는 함수
 * @param {string} dateText 타임스탬프 값 또는 "MM/DD/YYYY" 문자열
 * @param {boolean} type 
 * @returns 타임스탬프 문자열 또는 "MM/DD/YYYY" 문자열
 */
function convertDateString(dateText, type){
    if(type) { 
        let date = dateText.split("/");
        let changeDate = date[2]+ "," + date[0] + "," + date[1];
        let timestamp = new Date(changeDate).getTime();

        return timestamp;
    } else {
        let dateString = new Intl.DateTimeFormat("en-US").format(dateText);
        
        return dateString;
    }
}

/**
 * 데이터베이스에 데이터를 저장
 * @param {*} json 
 * @param {*} callback 
 */
function writeData(json, callback) {
    try {
        writeConfig(json, () => {
            callback && callback();
        });
    }
    catch(e) {
        console.log('설정 업로드 실패', e);
    }
}

// 해시변경으로 페이지 전환
window.addEventListener('hashchange', function() {
    const doc = location.pathname.split('/').pop();
    if(doc.split('.html')[0] == 'admin') {
        topBox.empty();
        enterAdmin();
    }
});