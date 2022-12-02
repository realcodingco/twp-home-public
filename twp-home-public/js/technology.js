// technology 페이지 구성
document.title = homepage.pages.technology ? homepage.pages.technology.title : 'Transwave photonics';
document.querySelector("link[rel='shortcut icon']").href = homepage.pages.technology ? homepage.pages.technology.favicon : homepage.favicon;

const header = BX.components.Header2.bx(homepage.header).appendTo(topBox);
BX.components.Technology.bx(homepage.technology).appendTo(topBox);
BX.components.Connect.bx(homepage.connect).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);