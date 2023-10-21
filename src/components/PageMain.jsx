import "./PageMain.css";

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
                    マイク
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
