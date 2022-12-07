const compData = {
    bx : technology,
    category: 'page',
    user: 'zzin',
    desc: `technology 페이지 컴포넌트<br>
▼ scheme 데이터 key :<br>
path`,
    basicCode: `BX.components.Technology.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    
};
const bx = BX.components.Technology.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Technology', compData);

/**
 * technology 페이지 컴포넌트
 * @param {object} scheme 
 * @returns page box
 */
function technology(scheme) {
    const b = box().align('center').paddingBottom(100).color('rgb(181, 207, 246, 0.2)').maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
    BX.component(intro.head).appendTo(b).text('Technoloby');

    const techData = scheme;
    for(var i=0; i<techData.length; i++) {
        const img = BX.component(article.image).appendTo(b);
        img[0].src = techData[i].image;

        const txt = BX.component(article.text).appendTo(b);
        txt[0].innerHTML = techData[i].text;
    }
    
    return b;
}