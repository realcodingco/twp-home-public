// careers 페이지 구성
const header = BX.components.Header2.bx(config.header).appendTo(topBox);
const page = box().appendTo(topBox).marginTop($('.header')[0].offsetHeight);
const title = BX.component(career.topTitle).appendTo(page);
title[0].style.background = 'url("' + config.career.headImage + '")';
BX.component(career.head).appendTo(page);

BX.component(career.listWrap).appendTo(page).text('Open opportunities');
const jobList = BX.component(career.jobOpening).appendTo(page);
const opening = config.career.jobs;
const listBg = jobList.children()[0];
if(opening.length == 0 ) {
    listBg.innerHTML = '<font style="font-weight:300" size=2 color=hotpink>no current opening..</font>'
} else {
    for(var i=0; i<opening.length; i++) {
        const jobTitle = BX.component(career.jobTitle).appendTo(listBg);
        $(jobTitle.children()[0]).text(opening[i].title);
        jobTitle.children()[1].innerText = opening[i].desc;
        console.log(listBg)
    }
}



BX.components.Connect.bx({path: 'contact.html'}).appendTo(topBox);
BX.components.Footer2.bx().appendTo(topBox);