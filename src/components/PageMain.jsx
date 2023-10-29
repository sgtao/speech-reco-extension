import { useState, useEffect } from 'react';
import './PageMain.css';
import SpeechRecognizer from '../libs/SpeechRecognizer';

// eslint-disable-next-line react/prop-types
const MicrophoneIcon = ({ strokeColor = 'currentColor' }) => {
    // マイクアイコン
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none"
            stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="14" rx="3" ry="3"></rect>
            <line x1="12" y1="18" x2="12" y2="20"></line>
            <line x1="5" y1="20" x2="19" y2="20"></line>
        </svg>
    )
}

// eslint-disable-next-line react/prop-types
const PageMain = ({ setInfoState, selectLang = 'ja-JP' }) => {
    const [voiceRecognizing, setVoiceRecognizing] = useState(false);
    const [transcript, setTranscript] = useState('Lorem ipsum dolor sit amet,');
    const [iconColor, setIconColor] = useState('currentColor');
    const [pollIntervalId, setIntervalId] = useState();
    const [recoLang, setRecoLang] = useState('ja-JP');

    useEffect(() => {
        let resultSetup = SpeechRecognizer.setupRecognize();
        setInfoState(resultSetup);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (recoLang !== selectLang) {
            stopRecognize();
            setInfoState(`認識言語が変更されました（${recoLang} to ${selectLang}）`);
            setRecoLang(selectLang);
        }
    }, [selectLang, recoLang]); // eslint-disable-line react-hooks/exhaustive-deps

    // 音声認識開始
    const startRecognize = () => {
        SpeechRecognizer.startRecognize(recoLang);
        setIconColor('red');
        let intervalId = window.setInterval(() => {
            console.log('polling transcript.');
            setVoiceRecognizing(SpeechRecognizer.isVoiceRecognizing());
            setTranscript(SpeechRecognizer.pullTranscript());
        }, 200); // 0.2s毎に表示
        setIntervalId(intervalId);
        setInfoState('音声認識中');
    }
    // 音声認識停止（音声認識中の処理）
    const stopRecognize = () => {
        if (pollIntervalId !== undefined) {
            window.clearInterval(pollIntervalId);
            setVoiceRecognizing(false);
        }
        setTranscript(SpeechRecognizer.pullTranscript());
        SpeechRecognizer.stopRecognize();
        setIconColor('gray');
        setInfoState('音声認識停止');
    }

    const handleToggleRecognize = () => {
        console.log(`clieck Start Button`);
        if (SpeechRecognizer.isRecognizing()) {
            stopRecognize();
        } else {
            startRecognize();
        }
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(transcript)
            .then(() => {
                setInfoState('テキストがクリップボードにコピーされました');
            })
            .catch((err) => {
                console.error('クリップボードへのコピーに失敗しました:', err);
                setInfoState('ERROR：クリップボードへのコピーに失敗しました');
            });
    }

    return (
        <>
            <div className="div-start">
                <button onClick={handleToggleRecognize}
                    className={`start-button ${voiceRecognizing ? 'voice-recognizing' : ''}`}>
                    <MicrophoneIcon strokeColor={iconColor} />
                </button>
            </div>
            <div className="results">
                <span className="interim-span">
                    {transcript}
                </span>
            </div>
            <div className="copy-results">
                <button type="button" className="copy-button" onClick={handleCopyClick}>
                    テキストをコピー
                </button>
            </div>
        </>
    )
}

export default PageMain;
