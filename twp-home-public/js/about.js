// about 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);
BX.components.Intro.bx(config.intro).appendTo(topBox).marginTop($('.header')[0].offsetHeight);

BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);