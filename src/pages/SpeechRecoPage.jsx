// SpeechRecoPage.jsx
import { useState } from 'react';
import { PageMain, SelectLangMenu } from '../components/index';

const SpeechRecoPage = () => {
    const [infoState, setInfoState] = useState('initializing...');
    const [selectLang, setSelectLang] = useState('ja-JP');
    return (
        <div className="container">
            <header>
                <h3>Speech Recognizer Extension</h3>
                <span>
                    認識言語：
                    <SelectLangMenu selectLang={selectLang} setSelectLang={setSelectLang} />
                </span>
                <div>
                    マイクアイコンをクリックして話し始めてください
                </div>
            </header>
            <main>
                <PageMain setInfoState={setInfoState} selectLang={selectLang} />
            </main>
            <footer>
                <p>info. : {infoState}</p>
                <p>本ページを作成する際、ChatGPTを利用しました。</p>
            </footer>
        </div>
    )
}

export default SpeechRecoPage;
