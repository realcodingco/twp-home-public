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
function legal(scheme) {//
    const b = box().maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
    const target = document.location.hash.slice(1);
    BX.component(intro.head).appendTo(b).text(scheme.docs[target].title);

    if(target == 'policy') {
        BX.components.Policy.bx(scheme.docs[target]).appendTo(b);
    }
    else if(target == 'termsofuse')  {
        BX.components.Termsofuse.bx(scheme.docs[target]).appendTo(b);
    } 
    else if(target == 'patents') {
        BX.components.Patents.bx(scheme.docs[target]).appendTo(b);
    }

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
        b.height('auto');
        // const capitalizeTitle = scheme.title.replace(/\b[a-z]/, letter => letter.toUpperCase());
        // box().appendTo(b).text(capitalizeTitle).fontSize(35).padding(30);
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
        b.height('auto');
        // const capitalizeTitle = scheme.title.replace(/\b[a-z]/, letter => letter.toUpperCase());
        // box().appendTo(b).text(capitalizeTitle).fontSize(35).padding(30);
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