// contact 페이지 구성
let homepage, ciHeight;
initDatabase();
readConfig((error, data) => {
    if(error) {
        console.log('설정을 읽어오지 못했습니다.', error);
    }
    else {
        homepage = data;
        document.title = homepage.pages.contact ? homepage.pages.contact.title : homepage.cname;
        document.querySelector("link[rel='shortcut icon']").href = homepage.pages.contact.favicon || homepage.favicon;
        document.documentElement.style.setProperty("--main", homepage.keyColor);

        BX.components.Header2.bx(homepage.header).appendTo(topBox);
        BX.components.Contact.bx(homepage.contact).appendTo(topBox);
        BX.components.Footer2.bx().appendTo(topBox);
    }
});
