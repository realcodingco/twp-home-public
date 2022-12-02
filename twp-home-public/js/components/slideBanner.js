const compData = {
    bx : slideBanner,
    category: 'banner',
    user: 'zzin',
    desc: `슬라이드 이미지 배너 컴포넌트<br>
▼ scheme 데이터 key :<br>
resource`,
    basicCode: `BX.components.SlideBanner.bx().appendTo(topBox);`,
    extendCode: `<font color=gray>// scheme 데이터 사용</font>
const scheme = {
    resource: [
        {
            image : '이미지 경로',
            text: '이미지별 배너 텍스트'
        }
    ]
};
const bx = BX.components.SlideBanner.bx(scheme);
bx.appendTo(topBox);`
};
BX.regist('SlideBanner', compData);
let slider = undefined;

/**
 * 이미지 슬라이드 배너 생성 함수
 * @param {*} scheme : 배너 목록(이미지, 텍스트)
 * @returns 슬라이더 box
 */
function slideBanner(scheme) {
    const b = box().size('100%', 400).appendTo(topBox);
    const banner = BX.component(slideBanner.banner).appendTo(b);
    const btn = BX.component(slideBanner.slideBtn).appendTo(b);
    BX(btn.children()[0]).click(moveNext);
    BX(btn.children()[1]).click(movePrev);

    if(scheme) {
        for(var i=0; i<scheme.resource.length; i++){
            const pack = box().appendTo(banner); 
            const img = BX.component(slideBanner.bannImage).appendTo(pack);
            img[0].src = scheme.resource[i].image;
            const txt = BX.component(slideBanner.bannText).appendTo(pack);
            txt[0].innerHTML = scheme.resource[i].text;
            if(!banner.children()[i]) {
                const child = document.createElement('div');
                banner[0].appendChild(child);
            }
            const dot = BX.component(slideBanner.moveBtn).appendTo(btn.children()[2]); // 하단 이동점 붙이기
            if(i == 0) dot.addClass('active');

            dot.click(e => {
                const idx = $(e.target).index() + 1;
                $('.move-button :not(:nth-child('+idx+'))').removeClass('active');
                $(e.target).addClass('active');
                slider.move(idx);
            });
        }
    }
    
    slider = new Slider("#slider1", "H");

    return b;
}

/**
 * 배너 오른쪽 화살표 내비게이션 버튼 클릭 이벤트 함수
 */
function moveNext() {
    slider.next();
}

/**
 * 배너 왼쪽 화살표 내비게이션 버튼 클릭 이벤트 함수
 */
function movePrev() {
    slider.prev();
}

/**
 * 슬라이드 배너 동작 함수
 * @param {*} target id 쿼리 선택자
 * @param {*} type "V" or "H"
 * @returns 
 */
function Slider(target, type){  //
    // 상태
    let index = 1;
    let isMoved = true;
    const speed = 2000; // ms

    // 방향
    const transform = "transform " + speed / 1000 + "s";
    let translate = (i) => "translateX(-" + 100 * i + "%)";
    if (type === "V") {
        translate = (i) => "translateY(-" + 100 * i + "%)";
    }

    // 슬라이더
    const slider = document.querySelector(target); 
    const sliderRects = slider.getClientRects()[0];
    slider.style["overflow"] = "hidden";

    // 슬라이더 화면 컨테이너
    const container = document.createElement("div");
    container.style["display"] = "flex";
    container.style["flex-direction"] = type === "V" ? "column" : "row";
    container.style["width"] = '100%'; //sliderRects.width + "px";
    container.style["height"] = '100%'; //sliderRects.height + "px";
    container.style["transform"] = translate(index);
    
    // 슬라이더 화면 목록
    let boxes = [].slice.call(slider.children); 
    boxes = [].concat(boxes[boxes.length - 1], boxes, boxes[0]);
    
    // 슬라이더 화면 스타일
    const size = boxes.length;
    const col = ['red', 'green', 'blue', 'white', 'pink']
    for (let i = 0; i < size; i++) {
        const box = boxes[i]; 
        box.style["flex"] = "none";
        box.style["flex-wrap"] = "wrap";
        box.style["height"] = "100%";
        box.style["width"] = "100%";
        // box.style["background"] = col[i];
        container.appendChild(box.cloneNode(true));
    }

    // 처음/마지막 화면 눈속임 이벤트
    container.addEventListener("transitionstart", function () {
        isMoved = false;
        setTimeout(() => {
            isMoved = true;
        }, speed);
    });
    container.addEventListener("transitionend", function () {
        // 처음으로 순간이동
        if (index === size - 1) {
            index = 1;
            container.style["transition"] = "none";
            container.style["transform"] = translate(index);
        }
        // 끝으로 순간이동
        if (index === 0) {
            index = size - 2;
            container.style["transition"] = "none";
            container.style["transform"] = translate(index);
        }
    });

    // 슬라이더 붙이기
    slider.innerHTML = "";
    slider.appendChild(container);

    return {
        move: function (i) {
            if (isMoved === true) {
                index = i;
                container.style["transition"] = 'initial' //transform;
                container.style["transform"] = translate(index);
            }
        },
        next: function () {
            if (isMoved === true) {
                index = (index + 1) % size;
                container.style["transition"] = transform;
                container.style["transform"] = translate(index);
            }
        },
        prev: function () {
            if (isMoved === true) {
                index = index === 0 ? index + size : index;
                index = (index - 1) % size;
                container.style["transition"] = transform;
                container.style["transform"] = translate(index);
            }
        }
    };
}

