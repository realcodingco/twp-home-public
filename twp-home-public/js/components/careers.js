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
    const title = BX.component(career.topTitle).appendTo(b); //배너
    title[0].style.background = 'url("' + scheme.headImage + '")';
    const pageHead = BX.component(career.head).appendTo(b).align('center').text(scheme.pageTitle);
    pageHead.find('p')[0].innerText = scheme.subTitle;

    const bg = BX.component(career.listWrap).appendTo(b).text(scheme.listTitle);
    bg.find('p')[0].innerText = scheme.subText;

    const pageBody = BX.component(career.jobOpening).appendTo(b);
    const opening = scheme.jobs;
    const listBg = pageBody.find('.jobList')[0];

    if(opening.length == 0 ) {
        listBg.innerHTML = '<font style="font-weight:300" size=2 color=hotpink>no current opening..</font>';
    } else {
        for(var i=0; i<opening.length; i++) {
            const jobBg = BX.component(career.jobBox).appendTo(listBg);
            const jobTitle = BX.component(career.jobTitle).appendTo(jobBg);
            $(jobTitle.children()[0]).text(opening[i].title);
            const deadline = new Date(opening[i].deadline).toLocaleDateString('en-En', {
                year: '2-digit', 
                month: 'short',
                day: 'numeric',
            });
            jobTitle.find('span')[0].innerText = 'Deadline : ' + deadline;
            
            const board = BX.component(career.jobBoard).appendTo(jobBg);
            board[0].innerHTML = '<font color=black size=4><b>Job title : ' + opening[i].title + '</b></font><br><font size=2>Deadline : '+deadline+'</font><br><br>' + opening[i].desc;
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