const compData = {
    bx : header,
    category: 'header',
    user: 'zzin',
    desc: `헤더 컴포넌트<br>
▼ scheme 데이터 key :<br>
menuData`,
    basicCode: `BX.components.header.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    home: '홈 링크',
    menuData: [
        {
            title : '메뉴명',
        }
    ]
};
const bx = BX.components.header.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Header', compData);

/**
 * 헤더 컴포넌트 
 * @param {object} scheme 
 * @returns 헤더 box
 */
function header(scheme) {
    const b = BX.component(header.header);
    const ci = BX.component(header.ciBox).appendTo(b);
    $(ci[0]).find('img')[0].src = homepage.ci;

    ci[0].href = scheme.home;
    const menuBox = BX.component(header.menuBox).appendTo(b);
    // BX.component(header.menuIcon).appendTo(b);
    BX.component(header.hambugerIcon).appendTo(b);

    scheme.menuData.forEach(function(o) {
        if(o.state == 'close') return;
        
        const menu = BX.component(header.menu);
        menu[0].innerHTML = '<a href="'+ o.link +'">'+ o.title + '</a>';
        menuBox[0].appendChild(menu[0]);
    });

    return b;
}

/**
 * 모바일에서 햄버거 메뉴 아이콘 클릭 이벤트 : 메뉴 상자 열림
 */
function menuOpen() {
    if($('.menuTrigger')[0].className == 'box menuTrigger') {
        $('.menuTrigger').addClass('active');
    } else {
        $('.menuTrigger').removeClass('active');
    }
    openMenu();
}
/**
 * 모바일에서 메뉴 아이콘 클릭 이벤트 : 메뉴 상자 열림
 */
function openMenu() {
    if($('.menuBox')[0].className == 'menuBox') {
        $('.menuBox').addClass('clicked');
    } else {
        $('.menuBox').removeClass('clicked');
    }
}
//이미지 onload 함수 - ci이미지 높이 체크
function checkHeight(e) {
    ciHeight = $('.header')[0].offsetHeight;
    if($('.header').next()[0]) {
        $('.header').next()[0].style.marginTop = ciHeight + 'px';
    }
}   

$(window).bind({
    resize : function(){
        window.clearTimeout(window.resizeTimer);
        window.resizeTimer = window.setTimeout(function() {
            $(window).trigger('resizeend');
        }, 100);
    }, resizeend : function(){
        if($('.menuBox')[0] && window.innerWidth > 880 && $('.menuBox')[0].className == 'menuBox clicked') { // 모바일 메뉴 상자가 열린 경우
            $('.menuBox').removeClass('clicked');
        } 
    }
});

window.addEventListener('scroll', function(){
    if(window.scrollY > 0) {
        $('.header').addClass('down');
    } else {
        $('.header').removeClass('down');
    }
    // 헤더 높이와 메뉴 박스 형태 조정
    // if(window.scrollY > 30) {
    //     if(isMobile && menuBox.style.display == 'block') menuIcon.click();
    //     $('.cibox').height(50);
    //     header.padding(0);
    //     if(!isMobile) menuBox.style.padding = '0px';
    //     menuBox.style.top = isMobile? '50px' : '0px';
    // } else {
    //     $('.cibox').height(70);
    //     header.padding(10);        
    //     menuBox.style.padding = '25px 0px';
    //     menuBox.style.top = isMobile ? '90px' : '0px';
    // }
    // main.paddingTop(header.height());
});
    