// contact 페이지 구성
document.title = homepage.pages.contact.title || 'Transwave photonics';
document.querySelector("link[rel='shortcut icon']").href = homepage.pages.contact.favicon || homepage.favicon;

const header = BX.components.Header2.bx(homepage.header).appendTo(topBox);
BX.components.Contact.bx(homepage.contact).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.Footer2.bx().appendTo(topBox);

