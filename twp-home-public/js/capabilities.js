// capabilities 페이지 구성
document.title = homepage.pages.capabilities.title || 'Transwave photonics';
document.querySelector("link[rel='shortcut icon']").href = homepage.pages.capabilities.favicon || homepage.favicon;

const header = BX.components.Header2.bx(homepage.header).appendTo(topBox);
BX.components.Capability.bx(homepage.capability).appendTo(topBox).marginTop($('.header')[0].offsetHeight);
BX.components.Connect.bx(homepage.connect).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);