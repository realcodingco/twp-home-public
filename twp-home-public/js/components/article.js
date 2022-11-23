const compData = {
    bx : article,
    category: 'article',
    user: 'zzin',
    desc: `뉴스 페이지 컴포넌트<br>
▼ scheme 데이터 :<br>
배열 - image, title, desc, time 객체 항목`,
    basicCode: `BX.components.Article.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = [
    {
        image: '이미지',
        title: '제목',
        desc: '내용',
        time: '날짜 타임스탬프'
    }
];
const bx = BX.components.Article.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Article', compData);

/**
 * 뉴스 페이지 리스트 컴포넌트
 * @param {object} scheme 
 * @returns 뉴스 리스트 box
 */
function article(scheme) {
    const b = box().align('center').paddingBottom(100).color('rgb(181, 207, 246, 0.2)');

    const articleData = config.newContent.data.filter(i => i.aid == scheme.aid)[0];
    const title = BX.component(article.head).text(articleData.title).appendTo(b);
    
    $(title[0]).find('p')[0].innerText = new Date(articleData.time).toLocaleDateString('en-En', {
        year: 'numeric', 
        month: 'long',
        day: 'numeric',
    });

    if(articleData.image) {
        const img = BX.component(article.image).appendTo(b);
        img[0].src = articleData.image;
    }

    BX.component(article.text).text(articleData.desc).appendTo(b)

    return b;
} 