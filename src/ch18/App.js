import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';    // 전역 세팅
import { reset } from './styles/global';    // 가장 상위 요소에 적용
                                            // < /> 한줄짜리는 children을 쓰지 않겠다는 의미
function App(props) {
    const [ isMainSidebarShow, setMainSidebarShow ] = useState(false);
    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader setMainSidebarShow={ setMainSidebarShow }/>

                <MainSidebar 
                    isMainSidebarShow={ isMainSidebarShow }
                    setMainSidebarShow={ setMainSidebarShow }
                />
            </MainLayout>
        </>
    );
}

export default App;