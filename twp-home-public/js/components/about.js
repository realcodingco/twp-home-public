const compData = {
    bx : about,
    category: '',
    user: 'zzin',
    desc: `소개 섹션 컴포넌트<br>
▼ scheme 데이터 key :<br>
resource`,
    basicCode: `BX.components.About.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    headTitle: '',
    desc : [
        {
            head: '',
            image : '이미지경로',
            text: '이미지별 문구'
        }
    ]
};
const bx = BX.components.About.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('About', compData);
let data, timer = undefined;

/**
 * 버튼식 내용 전환되는 소개 섹션 컴포넌트
 * @param {object} scheme 
 * @returns 섹션 box
 */
function about(scheme) {
    data = scheme;
    const b = box();

    const head = BX.component(about.headTitle).appendTo(b).text(scheme.headTitle.keyword);
    head.children()[0].innerHTML = scheme.headTitle.text;

    const contBox = BX.component(about.contentBox).appendTo(b);
    scheme.desc.forEach((element, i) => {
        const btn = BX.component(about.contentTitle);
        btn[0].innerHTML = element.head;
        contBox.children()[0].appendChild(btn[0]); 
        if(i == 0) {
            $(btn[0]).addClass('on');
            $(contBox.children()[1]).find('img')[0].src = element.image;
            $(contBox.children()[1]).find('span')[0].innerHTML = element.text;
        }
    });

    let contCount = 0; 
    timer = setTimeout(function() {
        contCount++;
        if(contCount >= $('.contTitle').length)  contCount = 0;
        $('.contTitle')[contCount].click();
    }, 1500);

    return b;
}

/**
 * contentTitle 제목 버튼 클릭 이벤트
 * @param {*} e 
 */
function showDesc(e) {
    $('.contTitle').removeClass('on')
    $(e.target).addClass('on');
    
    $('.contentBox')[0].style.opacity = 0;
    $('.contentBox').animate({'opacity': '1'}, 700);
    const idx = $(e.target).index();
    $('.contentBox img')[0].src = data.desc[idx].image;
    $('.contentBox span')[0].innerHTML = data.desc[idx].text;
}