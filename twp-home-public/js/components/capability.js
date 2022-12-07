const compData = {
    bx : capability,
    category: '',
    user: 'zzin',
    desc: `capability 소개 페이지 컴포넌트<br>
▼ scheme 데이터 key :<br>
title`,
    basicCode: `BX.components.Capability.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    title: '제목',
};
const bx = BX.components.Capability.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Capability', compData);

/**
 * 회사 소개 페이지 컴포넌트
 * @param {*} scheme 
 * @returns company overview, teams box
 */
function capability(scheme) {
    const b = box().paddingBottom(100).maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
    BX.component(intro.head).appendTo(b).text('Capabilities');
    
    const items = scheme.items;

    for(var i=0; i<items.length;i++) {
        const item = BX.component(capability.spreadBox).appendTo(b);
        item.find('img')[0].src = items[i].image;
        item.find('p')[0].innerText = items[i].title;
        item.find('p')[1].innerText = items[i].text;
        item.find('.detailBox')[0].innerText = items[i].desc;
    }

    return b;
}