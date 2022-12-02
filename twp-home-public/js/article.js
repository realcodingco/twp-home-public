// 개별 뉴스 페이지 구성
document.title = homepage.pages.news.title || 'Transwave photonics';
document.querySelector("link[rel='shortcut icon']").href = homepage.pages.news.favicon || homepage.favicon;

const header = BX.components.Header2.bx(homepage.header).appendTo(topBox);

const aid = location.hash.slice(1);
BX.components.Article.bx({aid: aid}).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.Connect.bx(homepage.connect).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);
