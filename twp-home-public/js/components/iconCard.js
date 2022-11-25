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
    
    scheme.tags.forEach(o => {
        const cardBox = BX.component(card.cardBox).appendTo(wrap);
        cardBox.find('img')[0].src = o.icon;
        cardBox.find('h4')[0].innerHTML = o.title;
        cardBox.find('p')[0].innerHTML = o.text;
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
    cardBox.scrollTo(cardBox.scrollLeft + 430, 500);

    setTimeout(() => {
        if(cardBox.scrollLeft >= cardBox.scrollWidth - $('.cardWrap')[0].offsetWidth)
            $(this)[0].style.visibility = 'hidden';

        if(cardBox.scrollLeft > 0 )
            $(this).next()[0].style.visibility = 'visible';
    }, 500);
}

/**
 * 왼쪽 화살표 내비게이션 버튼 클릭 이벤트 함수
 */
function scrollLeft(e) {
    const cardBox = $('.cardWrap')[0];
    cardBox.scrollTo(cardBox.scrollLeft - 430, 500);
    
    setTimeout(() => {
        if(cardBox.scrollLeft == 0) 
            $(this)[0].style.visibility = 'hidden';
    
        if(cardBox.scrollLeft <= (cardBox.scrollWidth / 2))
            $(this).prev()[0].style.visibility = 'visible';
    }, 500);   
}