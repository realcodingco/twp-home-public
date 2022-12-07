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
    const b = BX.component(contact.wrap).align('center').maxWidth(1200).left('50%').css('transform', 'translate(-50%, 0)');
    BX.component(contact.head).text('Contact us').appendTo(b).textColor(homepage.keyColor);

    // 지도 삽입
    const mapTag = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.3733986715038!2d-97.72508959999999!3d30.368753199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb95ff2529df%3A0x8230eb8a58ab3d18!2s8711%20Burnet%20Rd%20e55%2C%20Austin%2C%20TX%2078757%2C%20USA!5e0!3m2!1sen!2skr!4v1670372343672!5m2!1sen!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    box().appendTo(b).size('90%', 450).html(mapTag).marginBottom(40).border('1px solid white');
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