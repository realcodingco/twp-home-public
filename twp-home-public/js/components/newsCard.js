const compData = {
    bx : newsCard,
    category: '',
    user: 'zzin',
    desc: `뉴스 카드 컴포넌트<br>
▼ scheme 데이터 key :<br>
msg, data`,
    basicCode: `BX.components.NewsCard.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    msg: '뉴스 섹션 안내 문구',
    data : [
        {
            image: '뉴스 이미지 경로',
            title : '뉴스 제목',
            time: '타임스탬프(숫자)'
        }
    ]
};
const bx = BX.components.NewsCard.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('NewsCard', compData);

/**
 * 뉴스 카드 섹션 컴포넌트
 * @param {object} scheme 
 * @returns 
 */
function newsCard(scheme) {
    const b = box();
    const head = BX.component(card.newsBoxHead).appendTo(b).textColor(homepage.keyColor);
    head.find('h2')[0].innerHTML = 'News';
    head.find('p')[0].innerHTML = scheme.msg;

    let sortedCurrent = scheme.data.sort((x, y) => y.time - x.time); // 최신순으로 정렬하기
    const wrap = BX.component(card.newsBoxWrap).appendTo(b);
    for(var i=0; i<3; i++) { // 3개만 보여주기
        const element = sortedCurrent[i];
        const newsBox = BX.component(card.newsBox).appendTo(wrap);
        newsBox[0].href = 'article.html#' + element.aid;
        newsBox.find('.image')[0].style.backgroundImage = 'url(' + element.image + ')';
        newsBox.find('h4')[0].innerHTML = element.title;
        newsBox.find('time')[0].innerHTML = new Date(Number(element.time)).toLocaleDateString('en-En', {
            year: 'numeric', 
            month: 'long',
            day: 'numeric',
        });
    }

    return b;
}