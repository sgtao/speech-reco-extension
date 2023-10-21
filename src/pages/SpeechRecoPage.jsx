// SpeechRecoPage.jsx
import { useState } from 'react';
import PageMain from '../components/PageMain';

const SpeechRecoPage = () => {
    const [infoState, setInfoState] = useState('initializing...');
    return (
        <div className="container">
            <header>
                <h3>Speech Recognizer Extension</h3>
                <div>
                    マイクアイコンをクリックして話し始めてください
                </div>
            </header>
            <main>
                <PageMain setInfoState={setInfoState}/>
            </main>
            <footer>
                <p>このページはOpenAIのChatGPTを利用しながらコーディングしました。</p>
                <p>info : {infoState}</p>
            </footer>
        </div>
    )
}

export default SpeechRecoPage;