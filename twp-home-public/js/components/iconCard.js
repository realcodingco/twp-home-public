const compData = {
    bx : iconCard,
    category: '',
    user: 'zzin',
    desc: `아이콘 카드 컴포넌트<br>
▼ scheme 데이터 key :<br>
headTitle, tags`,
    basicCode: `BX.components.IconCard.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    headTitle: '섹션 제목',
    tags : [
        {
            icon: '이미지 경로',
            title : '카드 제목',
            text: '내용'
        }
    ]
};
const bx = BX.components.IconCard.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('IconCard', compData);

/**
 * 아이콘 카드로 구성된 컴포넌트 
 * @param {object} scheme 
 * @returns 카드 섹션 box
 */
function iconCard(scheme) {
    const b = box().color('#f7f7f7').paddingBottom(50);
    BX.component(card.cardHead).appendTo(b).text(scheme.headTitle);
    const wrap = BX.component(card.cardWrap).appendTo(b);
    const navbg = box().appendTo(b).size('100%', 'auto').align('center').marginTop('-50px').addClass('nav-button');
    
    scheme.tags.forEach((o, i) => {
        const cardBox = BX.component(card.cardBox).appendTo(wrap);
        cardBox.find('img')[0].src = o.icon;
        cardBox.find('h4')[0].innerHTML = o.title;
        cardBox.find('p')[0].innerHTML = o.text;

        // 내비게이션 점 붙이기
        const dot = BX.component(slideBanner.moveBtn).appendTo(navbg); // 하단 이동점 붙이기
        if(i == 0) dot.addClass('active');

        dot.click(e => {
            console.log('click')
            const idx = $(e.target).index() + 1;
            $('.nav-button :not(:nth-child('+idx+'))').removeClass('active');
            $(e.target).addClass('active');
            // 선택한 카드가 중앙으로 오도록
            const target = $('.cardWrap').children()[idx-1];
            target.scrollIntoView({inline: 'center', behavior: "smooth", block: 'nearest'})
            $('.cardWrap :not(:nth-child('+idx+'))').removeClass('on');
            $(target).addClass('on');
        });
    });
    
    const rightBtn = BX.component(slideBanner.rightBtn).appendTo(b);
    const leftBtn = BX.component(slideBanner.leftBtn).appendTo(b);
    rightBtn.click(scrollRight);
    leftBtn.click(scrollLeft);

    return b;
}

/**
 * 오른쪽 화살표 내비게이션 버튼 클릭 이벤트 함수
 */
 function scrollRight(e) {
    const cardBox = $('.cardWrap')[0];
    cardBox.scrollTo(cardBox.scrollLeft + Math.round(cardBox.scrollWidth / $('.cardWrap').children().length), 500);

    setTimeout(() => {
        if(cardBox.scrollLeft + 1 >= cardBox.scrollWidth - $('.cardWrap')[0].offsetWidth)
            $(this)[0].style.visibility = 'hidden';

        if(cardBox.scrollLeft > 0 )
            $(this).next()[0].style.visibility = 'visible';
    }, 510);
}

/**
 * 왼쪽 화살표 내비게이션 버튼 클릭 이벤트 함수
 */
function scrollLeft(e) {
    const cardBox = $('.cardWrap')[0];
    cardBox.scrollTo(cardBox.scrollLeft - Math.round(cardBox.scrollWidth / $('.cardWrap').children().length), 500);
    
    setTimeout(() => {
        if(cardBox.scrollLeft == 0) 
            $(this)[0].style.visibility = 'hidden';
    
        if(cardBox.scrollLeft <= (cardBox.scrollWidth / 2))
            $(this).prev()[0].style.visibility = 'visible';
    }, 510);   
}