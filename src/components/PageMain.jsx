import "./PageMain.css";

const MicrophoneIcon = ({ strokeColor = 'currentColor' }) => {
    // マイクアイコン
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none"
            stroke={strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="2" width="6" height="14" rx="3" ry="3"></rect>
            <line x1="12" y1="18" x2="12" y2="20"></line>
            <line x1="5" y1="20" x2="19" y2="20"></line>
        </svg>
    )
}

const PageMain = ({ setInfoState }) => {
    const showInfo = (s) => {
        if (s) {
            setInfoState(s);
        } else {
            setInfoState('');
        }
    }
    const handleCopyClick = () => {
        showInfo('テキストがクリップボードにコピーされました');
    }
    return (
        <>
            <div className="div-start">
                <button className="start-button">
                    <MicrophoneIcon strokeColor="red" />
                </button>
            </div>
            <div className="results">
                <span className="final-span"></span>
                <span className="interim-span">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...
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
