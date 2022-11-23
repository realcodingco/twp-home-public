// legal 통합 페이지 구성
/**
 * 좌우 배치. legal 메뉴 : privacy & cookie policy, terms of use, patents
 */


const header = BX.components.Header2.bx(config.header).appendTo(topBox);
BX.components.Legal.bx(config.legal).appendTo(topBox).marginTop($('.header')[0].offsetHeight);

BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);