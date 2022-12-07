const legalCompData = {
    bx : legal,
    category: 'banner',
    user: 'zzin',
    desc: `legal 통합 페이지 컴포넌트<br>
▼ scheme 데이터 key :<br>
path`,
    basicCode: `BX.components.Legal.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    path: 'contact 페이지 링크 문서명'
};
const bx = BX.components.Legal.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Legal', legalCompData);
BX.regist('Policy', {bx: policy});
BX.regist('Termsofuse', {bx: termsofuse});
/**
 * 법적 정보를 보여주는 페이지 컴포넌트
 * @param {object} scheme 
 * @returns 페이지 box
 */
function legal(scheme) {
    const isAdmin = document.location.hash == '' || document.location.hash == '#page';
    const target = isAdmin ? 'patents' : document.location.hash.slice(1); // admin 페이지면 patents 페이지로 열어주기
    const b = box();
    BX.component(intro.head).appendTo(b).text(scheme.title);

    const wrap = box().appendTo(b).size('100%').css('display', 'table').borderTop('1px solid #eeeeee');
    wrap[0].className = 'legalBody';
    const docs = scheme.docs;
    const docBg = BX.component(legal.document).appendTo(wrap);
    const componentName = docs[target].compName;
    // 타겟문서 컴포넌트 붙여주기
    if(docs[target].state == 'open') BX.components[componentName].bx(scheme.docs[target]).appendTo(docBg); 

    const docList = BX.component(legal.menuBar).appendTo(wrap);
    Object.keys(docs).forEach(function(o) {
        if(docs[o].state == 'close') return;
        const li = BX.component(legal.docTitle).appendTo(docList);
        li.find('a')[0].innerText = docs[o].title;
        li.find('a')[0].href = 'legal.html#' + o;
        if(isAdmin) {
            li.find('a')[0].target = 'Iframe_preview';
        }
        if(o == target) { //해시 문서 보여주기
            li.addClass('clicked')
        }
    });

    return b;
}
/**
 * 
 * @param {*} scheme 
 * @returns 
 */
function policy(scheme) {
    const b = box();
    if(scheme.type == 'link') {
        const frame = BX.component(legal.frame).appendTo(b);
        frame.find('iframe')[0].src = scheme.src;
    } 
    else if(scheme.type == 'file') {
        b.overflow('auto').height('100vh');
        const capitalizeTitle = scheme.title.replace(/\b[a-z]/, letter => letter.toUpperCase());
        box().appendTo(b).text(capitalizeTitle).fontSize(35).padding(30);
        const txt = loadFile(scheme.src);
        const txtBg = BX.component(legal.txtBox).appendTo(b);
        txtBg[0].innerText = txt;
    } 

    return b;
}
/**
 * txt 파일을 읽어 붙여주는 문서 컴포넌트
 * @param {*} scheme 
 * @returns 문서 box
 */
function termsofuse(scheme) {
    const b  = box();
    if(scheme.type == 'link') {
        const frame = BX.component(legal.frame).appendTo(b);
        frame.find('iframe')[0].src = scheme.src;
    } 
    else if(scheme.type == 'file') {
        b.overflow('auto').height('100vh');
        const capitalizeTitle = scheme.title.replace(/\b[a-z]/, letter => letter.toUpperCase());
        box().appendTo(b).text(capitalizeTitle).fontSize(35).padding(30);
        const txt = loadFile(scheme.src);

        const txtBg = BX.component(legal.txtBox).appendTo(b);
        txtBg[0].innerText = txt;
    }

    return b;
}

// 해시변경으로 페이지 전환
window.addEventListener('hashchange', function() {
    const doc = location.pathname.split('/').pop();
    if(doc.split('.html')[0] == 'legal') {
        location.reload();
        this.window.scrollTo(0);
    }
    
});

/**
 * txt 파일을 읽어오는 함수
 * @param {*} filePath 
 * @returns text 반환
 */
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }

    return result;
}
