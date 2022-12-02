// 메인(홈) 페이지 구성
document.title = homepage.cname; // 'Admin | Transwave photonics';
document.querySelector("link[rel='shortcut icon']").href = homepage.favicon;

const header = BX.components.Header2.bx(homepage.header).appendTo(topBox);
BX.components.SlideBanner.bx(homepage.banner).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.About.bx(homepage.about).appendTo(topBox);
BX.components.IconCard.bx(homepage.application).appendTo(topBox);
BX.components.NewsCard.bx(homepage.newsContent).appendTo(topBox);
BX.components.Connect.bx(homepage.connect).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);
