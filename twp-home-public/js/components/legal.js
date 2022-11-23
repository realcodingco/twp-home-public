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

/**
 * 법적 정보를 보여주는 페이지 컴포넌트
 * @param {object} scheme 
 * @returns 페이지 box
 */
function legal(scheme) {
    const target = document.location.hash.slice(1);
    const b = box()
    BX.component(intro.head).appendTo(b).text('Legal Information');

    const wrap = box().appendTo(b).size('100%').css('display', 'table').borderTop('1px solid #eeeeee');
    const docList = BX.component(legal.menuBar).appendTo(wrap);
    const docs = {
        'policy' : {
            title : 'privacy & cookie policy',
            compName : 'Policy',
            href: 'legal.html#policy'
        },
        'termsofuse' : {
            title : 'terms of use',
            compName : 'Termsofuse',
            href: 'legal.html#termsofuse'
        },
        'patents' : {
            title : 'patents',
            compName : 'Patents',
            href: 'legal.html#patents'
        }
    }
    Object.keys(docs).forEach(function(o) {
        const li = BX.component(legal.docTitle).appendTo(docList);
        li.find('a')[0].innerText = docs[o].title;
        li.find('a')[0].href = docs[o].href;

        if(o == target) { //해시 문서 보여주기
            li.addClass('clicked')
        }
    });

    const docBg = BX.component(legal.document).appendTo(wrap);
    const componentName = docs[target].compName;
    BX.components[componentName].bx(scheme[target]).appendTo(docBg);
    

    return b;
}

BX.regist('Policy', {bx: policy});
function policy() {
    const b = box();
    // box().appendTo(b).text('Privacy & Cookie Policy').fontSize(35).padding(20);
    
    const frame = BX.component(legal.frame).appendTo(b);
    frame.find('iframe')[0].src = 'https://www.privacypolicies.com/live/d660c899-5381-4786-8eae-bd0b6d54ae66';

    return b;
}

BX.regist('Termsofuse', {bx: termsofuse});
function termsofuse(scheme) {
    const b  = box().paddingBottom(100);
    box().appendTo(b).text('Terms of use').fontSize(35).padding(30);
    const txt = loadFile(scheme.file);

    const txtBg = BX.component(legal.txtBox).appendTo(b);
    txtBg[0].innerText = txt;
    return b;
}

// 해시변경으로 페이지 전환
window.addEventListener('hashchange', function() {
    history.go(0);
});

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
