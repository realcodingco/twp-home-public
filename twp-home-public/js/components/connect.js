const compData = {
    bx : connect,
    category: 'banner',
    user: 'zzin',
    desc: `contact 배너 컴포넌트<br>
▼ scheme 데이터 key :<br>
path`,
    basicCode: `BX.components.Connect.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    path: 'contact 페이지 링크 문서명'
};
const bx = BX.components.Connect.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Connect', compData);

/**
 * contact 페이지로 연결되는 contact 배너 컴포넌트
 * @param {object} scheme 
 * @returns 배너 box
 */
function connect(scheme) {
    const b = BX.component(connect.wrap);
    const button = $(b).find('a')[0]; 
    button.href = scheme.path;

    return b;
}

