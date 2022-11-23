const compData = {
    bx : product,
    category: '',
    user: 'zzin',
    desc: `제품 소개 컴포넌트<br>
▼ scheme 데이터 key :<br>
`,
    basicCode: `BX.components.Product.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
};
const bx = BX.components.Product.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Product', compData);

/**
 * 제품 소개 컴포넌트 
 * @param {object} scheme 
 * @returns 헤더 box
 */
function product(scheme) {
    const b = box();

    BX.component(product.head).appendTo(b).text('Our Products');
    BX.component(product.wrap).appendTo(b)

    return b;
}