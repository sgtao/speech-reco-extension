// SpeechRecognizer.js
const SpeechRecognizer = (() => {
    /* eslint-disable no-undef */
    let SpeechRecognition = webkitSpeechRecognition;
    // let SpeechGrammarList = window.webkitSpeechGrammarList;
    // let SpeechRecognitionEvent = webkitSpeechRecognitionEvent;
    /* eslint-enable no-undef */

    let recognition = null;
    let recognizing = false; // 
    let voiceRecognizing = false;
    let lastTranscript = '';
    let interimTranscript = '';
    const setupRecognize = () => {
        // 音声認識がサポートされているかチェック
        if ('webkitSpeechRecognition' in window) {
            recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;

            recognition.onresult = function (event) {
                // temporary transcript
                interimTranscript = '';
                voiceRecognizing = true;
                // console.log('event results:');
                // console.dir(event.results);
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        lastTranscript += event.results[i][0].transcript;
                        interimTranscript = ' '; // clear with blank for next transcript
                        voiceRecognizing = false;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                console.log('Confidence: ' + event.results[(event.results.length - 1)][0].confidence);
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

    const startRecognize = (recoLang = 'ja-JP') => {
        // recoLang は `SelectLangMenu`で設定
        recognition.lang = recoLang; // 選択言語を設定
        recognition.start();
        recognizing = true;
        voiceRecognizing = false;
        lastTranscript = '';
        interimTranscript = '<認識中>';
        console.info(`Ready to receive talk by Language ${recognition.lang}`);
    }
    const stopRecognize = () => {
        recognition.stop();
        recognizing = false;
        voiceRecognizing = false;
    }

    const isRecognizing = () => {
        return recognizing;
    }
    const isVoiceRecognizing = () => {
        return voiceRecognizing;
    }
    const pullTranscript = () => {
        return lastTranscript + interimTranscript;
    }

    return {
        setupRecognize,
        startRecognize,
        stopRecognize,
        isRecognizing,
        isVoiceRecognizing,
        pullTranscript,
    }

})();

export default SpeechRecognizer;