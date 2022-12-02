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
    const b = BX.component(contact.wrap).align('center');
    BX.component(contact.head).text('Contact us').appendTo(b);

    // 지도 삽입
    const mapTag = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.3732363710724!2d-97.72727828526334!3d30.368757810134618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb95ff2529df%3A0x8230eb8a58ab3d18!2zODcxMSBCdXJuZXQgUmQgZTU1LCBBdXN0aW4sIFRYIDc4NzU3IOuvuOq1rQ!5e0!3m2!1sko!2skr!4v1669802326784!5m2!1sko!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
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