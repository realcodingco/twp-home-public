// news 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);
BX.component(schemes.pageHead).appendTo(topBox).text('News').marginTop($('.header')[0].offsetHeight);

BX.components.News.bx(config.newContent.data).appendTo(topBox);

BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);