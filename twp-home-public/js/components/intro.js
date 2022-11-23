const compData = {
    bx : intro,
    category: '',
    user: 'zzin',
    desc: `회사 소개 페이지 컴포넌트<br>
▼ scheme 데이터 key :<br>
title`,
    basicCode: `BX.components.Intro.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    title: '제목',
};
const bx = BX.components.Intro.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Intro', compData);

/**
 * 회사 소개 페이지 컴포넌트
 * @param {*} scheme 
 * @returns company overview, teams box
 */
function intro(scheme) {
    const b = box();
    BX.component(intro.head).appendTo(b).text(scheme.title);
    const image = BX.component(intro.image).appendTo(b);
    image[0].src = scheme.cPhoto; 
    const wrap = BX.component(intro.contentWrap).appendTo(b);

    const links = scheme.links;
    
    Object.keys(links).forEach(function(o) {
        const banner = BX.component(intro.linkBanner).appendTo(wrap);
        if(o != 'Career') $(banner).find('a')[0].href = links[o].href;
        $(banner).find('img')[0].src = links[o].image;
        $(banner).find('div').children()[0].innerHTML = o;
        $(banner).find('div').children()[1].innerHTML = links[o].text;
    });

    BX.component(intro.line).appendTo(wrap);

    // 멤버 소개
    const teamBg = BX.component(intro.teamWrap).appendTo(wrap);
    for(var i=0; i<scheme.team.length; i++) {
        const member = BX.component(intro.member).appendTo(teamBg);
        $(member).find('img')[0].src = scheme.team[i].image;
        $(member).children()[1].style.background = 'url("'+ scheme.team[i].image +'")';
        $(member).find('span')[0].innerHTML = '<b>' + scheme.team[i].name + '</b><br><font size=2>' + scheme.team[i].position + '</font>';
    }
    
    return b;
}