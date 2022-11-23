const compData = {
    bx : submitBtn,
    category: '',
    user: 'zzin',
    desc: `제출 버튼 컴포넌트<br>
▼ scheme 데이터 key :<br>
resource`,
    basicCode: `BX.components.SubmitBtn.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    headTitle: '',
    desc : [
        {
            head: '',
            image : '이미지경로',
            text: '이미지별 문구'
        }
    ]
};
const bx = BX.components.SubmitBtn.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('SubmitBtn', compData);

/**
 * 제출 버튼 컴포넌트
 * @param {object} scheme 
 * @returns 섹션 box
 */
function submitBtn(scheme) {
    const b = BX.component(submitSchemes.button);

    return b;
}

let submitContent = {};
/**
 * sumbit 버튼의 클릭 이벤트 전송 애니메이션 함수
 * @param {*} e 
 * @returns 
 */
function onSubmit(e) {
    const validate = function(){
        setTimeout(function() {
            $( "#submitBtn" ).removeClass( "onclic" );
            $( "#submitBtn" ).addClass( "validate", 450, callback );
        }, 1250 );
    };

    const callback = function() {
        //모든 입력상자 내용 지우기
        let el = document.getElementsByTagName('input');
        for(var i=0; i<el.length; i++){
            el[i].value = '';
        }
        const textareaEl = document.getElementsByTagName('textarea');
        textareaEl[0].value = '';

        // 이메일 전송 api 필요
        console.log(submitContent);
        const btnPos = $('#submitBtn')[0].getBoundingClientRect();
        const msg = BX.component(submitSchemes.alert).text(config.submitSuccessMsg).textColor('green').left(0).top(window.pageYOffset + btnPos.top - 50).appendTo($('.contactFormWrap')[0]);
        setTimeout(() => msg.remove(), 2500);

        setTimeout(function() {
            $( "#submitBtn" ).removeClass( "validate" );
            $( "#submitBtn" )[0].innerText = 'SUBMIT';
        }, 1250 );
        
    };

    e.preventDefault();
    const btnPos = e.target.getBoundingClientRect();
    console.log()
    if(checkInputs() != 0) {
        if($('.alertMsg')[0] == undefined) {
            const msg = BX.component(submitSchemes.alert).text(config.checkRequiredMsg).left(0).top(window.pageYOffset + btnPos.top - 50).appendTo($('.contactFormWrap')[0]);
            setTimeout(() => msg.remove(), 2500);   
        }
        return;
    }
    
    $( "#submitBtn" )[0].innerText = '';
    $( "#submitBtn" ).addClass( "onclic", 250, validate);
}

/**
 * 필수 입력 항목 입력여부 체크 및 입력 내용 전달 함수
 * @returns number - 빈 항목수
 */
function checkInputs() {
    let el = document.getElementsByTagName('input');
    let blankCount = 0;
    for(var i=0; i<el.length; i++){
        const key = $(el[i]).parent()[0].innerText;
        if(key.includes('*') && el[i].value == '') {
            blankCount++;
        }

        if(key.includes('*')) {
            submitContent[key.slice(0, -1)] = el[i].value;
        }
        else {
            submitContent[key] = el[i].value;
        }
    }
    const textareaEl = document.getElementsByTagName('textarea');
    if(textareaEl[0].value == '') blankCount++;
    submitContent['desc'] = textareaEl[0].value;

    return blankCount;
}