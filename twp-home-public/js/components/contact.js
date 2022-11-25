//컨텍 페이지
const compData = {
    bx : contact,
    category: '',
    user: 'zzin',
    desc: `contact 페이지 컴포넌트<br>
▼ scheme 데이터 key :<br>
inputs`,
    basicCode: `BX.components.Contact.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    inputs: ['입력항목']
};
const bx = BX.components.Contact.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('Contact', compData);

/**
 * contact 페이지 - 입력폼
 * @param {object} scheme 
 * @returns contact form box
 */
function contact(scheme) {
    const b = BX.component(contact.wrap);
    BX.component(contact.head).text('Contact us').appendTo(b);
    const form = BX.component(contact.form).appendTo(b);
    for(let i=0; i<scheme.inputs.length; i++) {
        const input = BX.component(contact.inputField).text(scheme.inputs[i].text).appendTo(form);
        if(scheme.inputs[i].text != 'Company'){
            input.children()[0].children[0].innerHTML = '*'
        }
    }
    
    BX.component(contact.textareaField).text('Question').appendTo(form);
    BX.components.SubmitBtn.bx().appendTo(form);

    return b;
}