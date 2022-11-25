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
    const b = box().paddingBottom(100);
    BX.component(intro.head).appendTo(b).text('Capabilities');
    
    const gradImg = BX.component(capability.gradImgBox).appendTo(b)
    gradImg[0].style.background = "url('https://cdn.pixabay.com/photo/2016/07/14/02/01/fibre-1515964_1280.jpg')";

    const itemBg = BX.component(capability.itemBg).appendTo(b);

    const items = scheme.items;
    Object.keys(items).forEach(function(o, i) {
        const item = BX.component(capability.itemBox).appendTo(itemBg);
        item.children()[0].innerText = i + 1;
        item.find('h4')[0].innerText = o;
        item.find('span')[0].innerText = items[o].text;
    });

    return b;
}