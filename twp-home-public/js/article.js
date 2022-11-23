// 개별 뉴스 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);

const aid = location.hash.slice(1);
BX.components.Article.bx({aid: aid}).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);
