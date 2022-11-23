// 메인(홈) 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);
BX.components.SlideBanner.bx(config.banner).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.About.bx(config.about).appendTo(topBox);
BX.components.IconCard.bx(config.application).appendTo(topBox);
BX.components.NewsCard.bx(config.newContent).appendTo(topBox);
BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);
