const compData = {
    bx : submitBtn,
    category: '',
    user: 'zzin',
    desc: `contact 제출 버튼 컴포넌트<br>
메일 발송 기능 포함<br>`,
    basicCode: `BX.components.SubmitBtn.bx().appendTo(topBox);`,
    extendCode: ''
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

let twp = null;
let submitContent = {}; // FirstName, LastName, Company, Email, desc
/**
 * Database 초기화
 * 의존 스크립트: firebase-app.js, firebase-firestore.js
 */
function initDatabase() {
    if(!twp) {
        twp = firebase.initializeApp({
            apiKey: "AIzaSyCMnqZdFF-EznSRPmYqIS1EZOJ6_2hZJR0",
            authDomain: "rc-twp-home.firebaseapp.com",
            projectId: "rc-twp-home",
            storageBucket: "rc-twp-home.appspot.com",
            messagingSenderId: "613984032633",
            appId: "1:613984032633:web:91f56e0af29e93dfca01a8"
        });
    }
}

/**
 * 이메일 템플릿 내용 기반으로 메일 발송한다.
 */
function sendEmail() {
    const name = submitContent.FirstName + ' ' + submitContent.LastName;

    // 메일 받는사람
    const to = homepage.email;
    // 제목
    const subject = `[Homepage/Inbound] Message from ${name}`;
    // 내용
    const html = `<div>
        <p>
            <b>NAME</b>: ${name}<br>
            <b>EMAIL</b>: ${submitContent.Email}<br>
            <b>COMPANY</b>: ${submitContent.Company}<br>
            <b>QUESTION</b><br>
            ${submitContent.desc}
        </p>
    </div>`

    initDatabase();
    twp.firestore().collection('email').add({
        message: {
            subject, html
        },
        to
    });
}

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
        sendEmail(); // 이메일 전송 api 
        const btnPos = $('#submitBtn')[0].getBoundingClientRect();
        const msg = BX.component(submitSchemes.alert).text(homepage.submitSuccessMsg).textColor('green').left(0).top(window.pageYOffset + btnPos.top - 50).appendTo($('.contactFormWrap')[0]);
        setTimeout(() => msg.remove(), 2500);

        //모든 입력상자 내용 지우기
        let el = document.getElementsByTagName('input');
        for(var i=0; i<el.length; i++){
            el[i].value = '';
        }
        const textareaEl = document.getElementsByTagName('textarea');
        textareaEl[0].value = '';

        setTimeout(function() {
            $( "#submitBtn" ).removeClass( "validate" );
            $( "#submitBtn" )[0].innerText = 'SUBMIT';
        }, 1250 );
        
    };

    e.preventDefault();
    const btnPos = e.target.getBoundingClientRect();

    if(checkInputs() != 0) {
        if($('.alertMsg')[0] == undefined) {
            const msg = BX.component(submitSchemes.alert).text(homepage.checkRequiredMsg).left(0).top(window.pageYOffset + btnPos.top - 50).appendTo($('.contactFormWrap')[0]);
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
            submitContent[key.slice(0, -1).replace(/(\s*)/g, "")] = el[i].value;
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