// news 페이지 구성
let homepage, ciHeight;
initDatabase();
readConfig((error, data) => {
    if(error) {
        console.log('설정을 읽어오지 못했습니다.', error);
    }
    else {
        homepage = data;
        document.title = homepage.pages.news ? homepage.pages.news.title : homepage.cname;
        document.querySelector("link[rel='shortcut icon']").href = homepage.pages.news.favicon || homepage.favicon;
        document.documentElement.style.setProperty("--main", homepage.keyColor);

        BX.components.Header.bx(homepage.header).appendTo(topBox);
        BX.components.News.bx(homepage.newsContent).appendTo(topBox);
        BX.components.Connect.bx(homepage.connect).appendTo(topBox);
        BX.components.Footer.bx().appendTo(topBox);
    }
});