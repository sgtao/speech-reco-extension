import { useState, useEffect } from 'react';
import './PageMain.css';

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

const PageMain = ({ setInfoState }) => {
    const [ transcript, setTranscript ] = useState('Lorem ipsum dolor sit amet,');
    const [ iconColor, setIconColor ] = useState('currentColor');
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

    useEffect(() => {

    }, []);

    return (
        <>
            <div className="div-start">
                <button className="start-button">
                    <MicrophoneIcon strokeColor={iconColor} />
                </button>
            </div>
            <div className="results">
                <span className="final-span"></span>
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
