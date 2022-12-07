// technology 페이지 구성
let homepage, ciHeight;
initDatabase();
readConfig((error, data) => {
    if(error) {
        console.log('설정을 읽어오지 못했습니다.', error);
    }
    else {
        homepage = data;
        document.title = homepage.pages.technology ? homepage.pages.technology.title : homepage.cname;
        document.querySelector("link[rel='shortcut icon']").href = homepage.pages.technology ? homepage.pages.technology.favicon : homepage.favicon;
        document.documentElement.style.setProperty("--main", homepage.keyColor);

        const header = BX.components.Header2.bx(homepage.header).appendTo(topBox);
        BX.components.Technology.bx(homepage.technology).appendTo(topBox);
        BX.components.Connect.bx(homepage.connect).appendTo(topBox);
        BX.components.Footer2.bx().appendTo(topBox);
    }
});