// SpeechRecognizer.js
const SpeechRecognizer = (() => {
    // If you modify this array, also update default language / dialect below.
    let langs = [['日本語', ['ja-JP']]];

    /* eslint-disable no-undef */
    let SpeechRecognition = webkitSpeechRecognition;
    // let SpeechGrammarList = window.webkitSpeechGrammarList;
    // let SpeechRecognitionEvent = webkitSpeechRecognitionEvent;
    /* eslint-enable no-undef */

    let recognition = null;
    let recognizing = false;
    let lastTranscript = '';
    const setupRecognize = () => {
        // 音声認識がサポートされているかチェック
        if ('webkitSpeechRecognition' in window) {
            recognition = new SpeechRecognition();

            recognition.onresult = function (event) {
                lastTranscript = event.results[0][0].transcript;
                console.log('Confidence: ' + event.results[0][0].confidence);
                // console.log('Transcript: ' + lastTranscript);
            }

            recognition.onerror = function (event) {
                console.error('Error occurred in recognition: ' + event.error);
            }

            return '音声認識の設定をしました';
        } else {
            // Web Speech APIがサポートされていない場合の処理
            return '音声認識に未対応です。';
        }
    }

    const toggleRecognize = () => {
        console.log(`toggleRecognize at recognizing ${recognizing}`);
        if (recognizing) {
            recognition.stop();
            recognizing = false;
            return;
        }
        recognition.lang = langs[0][1]; // 日本語を設定
        recognition.start();
        recognizing = true;
        lastTranscript = '<認識中>';
        console.info(`Ready to receive talk by Language ${recognition.lang}`);
    }

    const isRecognizing = () => {
        return recognizing;
    }
    const pullTranscript = () => {
        return lastTranscript;
    }

    return {
        setupRecognize,
        toggleRecognize,
        isRecognizing,
        pullTranscript,
    }

})();

export default SpeechRecognizer;