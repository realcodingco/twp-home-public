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
function news(scheme) {
    const b = BX.component(news.wrap);

    for(let i=0; i<scheme.length; i++) {
        const article = BX.component(news.article).appendTo(b);
        article.children()[0].children[0].innerHTML = scheme[i].title;
        article.children()[0].children[1].children[0].innerHTML = scheme[i].desc;
        article.children()[0].children[2].innerHTML = new Date(scheme[i].time).toLocaleDateString('en-US',{year: 'numeric', month: 'short', day: '2-digit'});
        article.children()[1].src = scheme[i].image;

        $(article).addClass(scheme[i].aid); //아티클 id 클래스명으로 추가
    }
    return b;
}

/**
 * 뉴스목록에서 뉴스 클릭 이벤트
 */
function openArticle(e) {
    const className = $(e.target).closest('.newslist')[0].className
    const articleId = className.substring(9); // 'newslist '제외한 문자열    
    const anchor = $($(e.target).closest('.newslist')[0]).find('a')[0];
    anchor.href = 'article.html#' + articleId;
    anchor.click();
}


