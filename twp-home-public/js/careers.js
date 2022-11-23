// careers 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);
// .marginTop($('.header')[0].offsetHeight);

const titleImg = 'https://cdn.pixabay.com/photo/2018/12/27/09/07/businessman-3897246_1280.jpg';
const page = box().appendTo(topBox).marginTop($('.header')[0].offsetHeight);
const title = BX.component(career.topTitle).appendTo(page).height(350);
title.find('img')[0].src = titleImg;
// box().appendTo(page).size('100%', 180).backgroundImage('url("'+titleImg+'")');


BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);