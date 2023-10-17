// If you modify this array, also update default language / dialect below.
var langs = [['日本語', ['ja-JP']]];
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var recognizing = false;
var start_timestamp = 0;

const start_button = document.querySelector('#start_button');
const info = document.querySelector('#info_message');
const showText = document.querySelector('#interim_span');

function showInfo(s) {
    if (s) {
        info.textContent = s;
    } else {
        info.textContent = '';
    }
}

function startButton(event) {
    if (recognizing) {
        recognition.stop();
        recognizing = false;
        showInfo('Stop recognition');
        start_button.style.color = 'gray';
        return;
    }
    final_transcript = '';
    recognition.lang = langs[0][1];
    recognition.start();
    recognizing = true;
    ignore_onend = false;
    final_span.innerHTML = '';
    interim_span.innerHTML = '';
    start_timestamp = event.timeStamp;
    start_button.style.color = 'red';
    showInfo('Ready to receive talk.');
    console.info(`Ready to receive talk by Language ${recognition.lang}`);
}


// ページロード後に実行される処理
document.addEventListener('DOMContentLoaded', function() {
    // 音声認識がサポートされているかチェック
    if ('webkitSpeechRecognition' in window) {
        recognition = new SpeechRecognition();

        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript;
            showText.textContent = transcript;
            console.log('Confidence: ' + event.results[0][0].confidence);
        }


        recognition.onerror = function (event) {
            console.error('Error occurred in recognition: ' + event.error);
        }

        // マイクアイコンのクリックイベント定義
        start_button.addEventListener('click', startButton);

    } else {
        // Web Speech APIがサポートされていない場合の処理
        showInfo('音声認識に未対応です。');
    }
});