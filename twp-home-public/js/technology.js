// technology 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);

const b = box().align('center').paddingBottom(100).color('rgb(181, 207, 246, 0.2)').appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.component(intro.head).appendTo(b).text('Technoloby');

const tech = config.technology;
for(var i=0; i<tech.length; i++) {
    const img = BX.component(article.image).appendTo(b);
    img[0].src = tech[i].image;

    const txt = BX.component(article.text).appendTo(b);
    txt[0].innerHTML = tech[i].text;
}

BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);