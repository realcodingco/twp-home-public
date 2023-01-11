const compData = {
    bx : careers,
    category: 'page',
    user: 'zzin',
    desc: `career 페이지 컴포넌트<br>
▼ scheme 데이터 :<br>
`,
    basicCode: `BX.components.Careers.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = [
    {
        image: '이미지',
        title: '제목',
        desc: '내용',
        time: '날짜 타임스탬프'
    }
];
const bx = BX.components.Careers.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Careers', compData);

/**
 * 채용 페이지 리스트 컴포넌트
 * @param {object} scheme 
 * @returns 현재 채용 정보 box
 */
function careers(scheme) {
    const b = box();
    const pageHead = BX.component(career.head).appendTo(b).align('center').text(scheme.pageTitle).textColor(homepage.keyColor);

    const bg = BX.component(career.listWrap).appendTo(b).text(scheme.listTitle);
    bg.find('p')[0].innerText = scheme.subText;

    const tie = box().appendTo(b).color('#f7f7f7');
    const pageBody = BX.component(career.jobOpening).appendTo(tie).maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
    const opening = scheme.jobs;
    const listBg = pageBody.find('.jobList')[0];

    if(opening.length == 0 ) {
        listBg.innerHTML = '<font style="font-weight:300" size=2 color=hotpink>no current opening..</font>';
    } else {
        for(var i=0; i<opening.length; i++) {
            const item = BX.component(capability.spreadBox).appendTo(listBg);
            item.find('img').hide();
            item.find('.spreadBox').children()[1].style.width = '100%'
            item.find('p')[0].innerText = opening[i].title;
            const deadline = new Date(Number(opening[i].deadline)).toLocaleDateString('en-En', {
                year: '2-digit', 
                month: 'short',
                day: 'numeric',
            });
            item.find('p')[1].innerText = 'Deadline : ' + deadline;
            item.find('.detailBox')[0].innerHTML = opening[i].desc;
        }
    }

    pageBody.children()[1].innerHTML = scheme.applyMsg + '<br><a href="mailto:' + homepage.email + '?subject=Apply for job opening">' + homepage.email + '</a>';

    return b;
}

function showJobBoard(e) {
    const target = $(e.target).parent().next();
    $('.job-box').removeClass('on');
    $(e.target).parent().parent().addClass('on');
    target[0].scrollIntoView({behavior: 'smooth', block: window.innerWidth < 720? 'start' : 'center', inline: 'center'});

}