// contact 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);
BX.components.Contact.bx(config.contact).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.Footer2.bx().appendTo(topBox);

