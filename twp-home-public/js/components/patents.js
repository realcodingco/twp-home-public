const compData = {
    bx : patents,
    category: 'banner',
    user: 'zzin',
    desc: `patents 목록 컴포넌트<br>
▼ scheme 데이터 key :<br>
path`,
    basicCode: `BX.components.Patents.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    path: 'contact 페이지 링크 문서명'
};
const bx = BX.components.Patents.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Patents', compData);

/**
 * patents 목록 컴포넌트
 * @param {object} scheme 
 * @returns 페이지 box
 */
function patents(scheme) {
    const b = box();
    box().appendTo(b).text('Patents').fontSize(35).padding(20);
    const listBg = BX.component(schemes.list).appendTo(b);
    for(var i=0; i<scheme.length; i++) {
        const li = document.createElement('li');
        listBg[0].appendChild(li);
        const a = document.createElement('a');
        li.appendChild(a);
        console.log(li[0])
        a.innerText = scheme[i].title;
        a.href = scheme[i].url;
        a.target = '_blank';
        a.style.textDecoration = 'none';
        a.style.color = 'black';
    }

    return b;
}