let twp = null;
const databaseMode = {
    current: 'stage',   // 개발 완료 후 production으로 변경
    stage: 'stage',
    production: 'production'
};

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
 * 데이터베이스에 설정을 기록한다.
 * @param {object} json 
 * @param {Function} callback function(error) {}
 */
function writeConfig(json, callback) {
    const path = `homepage/${databaseMode.current}`;
    const doc = twp.firestore().doc(path);
    doc.set(json).then(callback).catch(callback);
}

/**
 * 데이터베이스에서 설정을 획득한다.
 * @param {Function} callback function(error, data) {}
 */
function readConfig(callback) {
    const path = `homepage/${databaseMode.current}`;
    twp.firestore().doc(path).get()
        .then(snapshot => callback(null, snapshot.data()))
        .catch(callback);
}