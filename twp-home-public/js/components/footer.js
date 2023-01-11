const compData = {
    bx : footer,
    category: 'footer',
    user: 'zzin',
    desc: `3영역 분할 푸터 컴포넌트<br>
▼ scheme 데이터 key :<br>
policy, patents, tearm of use 등`,
    basicCode: `BX.components.Footer.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    'legal info name' : '페이지 링크'
};
const bx = BX.components.Footer.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Footer', compData);

/**
 * 3영역 분할 하단 푸터 컴포넌트
 * @param {object} scheme 
 * @returns 푸터 box
 */
function footer(scheme) {
    const b = box().paddingBottom(80);
    const bg = BX.component(footer.wrap).appendTo(b);
    bg.find('img')[0].src = homepage.ci;
    const info = BX.component(footer.information).appendTo(bg).padding(20);

    const appendInfos = [
        {
            key: 'address', 
            icon: 'location_city'
        },
        {
            key: 'phone',
            icon: 'phone_iphone'
         },
         {
            key: 'email',
            icon : 'mail'
         } 
    ];
    box().appendTo(info).text('CONTACT').textColor(homepage.keyColor).marginBottom(10).fontWeight('bold');
    for(var i=0; i<appendInfos.length; i++) {
        const line = BX.component(footer.infoText).appendTo(info);
        line.children()[0].innerText = appendInfos[i].icon;
        line.children()[0].style.color = homepage.keyColor;
        line.children()[1].innerText = homepage[appendInfos[i].key];
    }

    const etc = BX.component(footer.resource).appendTo(bg).padding(20);
    box().appendTo(etc).text('QUICK LINKS').textColor(homepage.keyColor).marginBottom(10).fontWeight('bold');
    const quicklinks = homepage.footers;
    for(var j=0; j<quicklinks.length; j++) {
        const el = BX.component(footer.link).appendTo(etc).text(quicklinks[j].title);
        let paths = location.pathname.split('/');
        paths.pop();
        paths.push(quicklinks[j].link);
        const url = paths.join('/');
        el[0].href = url;
    }

    BX.component(footer.copyright).appendTo(b).text(homepage.copyright);

    return b;
}