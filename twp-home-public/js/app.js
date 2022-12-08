// 메인(홈) 페이지 구성
let homepage, ciHeight;
initDatabase();
readConfig((error, data) => {
    if(error) {
        console.log('설정을 읽어오지 못했습니다.', error);
    }
    else {
        homepage = data;
        document.title = homepage.cname;
        document.querySelector("link[rel='shortcut icon']").href = homepage.favicon;
        document.documentElement.style.setProperty("--main", homepage.keyColor);

        BX.components.Header.bx(homepage.header).appendTo(topBox);
        BX.components.SlideBanner.bx(homepage.banner).appendTo(topBox);
        const tie = box().appendTo(topBox).align('center').maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
        BX.components.About.bx(homepage.about).appendTo(tie);
        BX.components.IconCard.bx(homepage.application).appendTo(tie);
        BX.components.NewsCard.bx(homepage.newsContent).appendTo(tie);
        
        BX.components.Connect.bx(homepage.connect).appendTo(topBox);
        BX.components.Footer.bx().appendTo(topBox);
    }
});




