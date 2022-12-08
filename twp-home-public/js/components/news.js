const compData = {
    bx : news,
    category: 'article',
    user: 'zzin',
    desc: `뉴스 리스트 컴포넌트<br>
▼ scheme 데이터 :<br>
배열 - image, title, desc, time 객체 항목`,
    basicCode: `BX.components.News.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = [
    {
        image: '이미지',
        title: '제목',
        desc: '내용',
        time: '날짜 타임스탬프'
    }
];
const bx = BX.components.News.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('News', compData);

/**
 * 뉴스 페이지 리스트 컴포넌트
 * @param {object} scheme 
 * @returns 뉴스 리스트 box
 */
function news(scheme) { //
    const b = box();
    BX.component(schemes.pageHead).appendTo(b).text('News').textColor(homepage.keyColor);
    const aligndiv = box().appendTo(b).maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
    const wrap = BX.component(news.wrap).appendTo(aligndiv);

    let sortedCurrent = scheme.data.sort((x, y) => Number(y.time) - Number(x.time)); // 최신순으로 정렬하기
    sortedCurrent.forEach(element => {
        const newsBox = BX.component(card.newsBox).appendTo(wrap);
        newsBox[0].href = 'article.html#' + element.aid;
        newsBox.find('.image')[0].style.backgroundImage = 'url(' + element.image + ')';
        newsBox.find('h4')[0].innerHTML = element.title;
        newsBox.find('time')[0].innerHTML = new Date(Number(element.time)).toLocaleDateString('en-En', {
            year: 'numeric', 
            month: 'long',
            day: 'numeric',
        });
    });

    return b;
}


