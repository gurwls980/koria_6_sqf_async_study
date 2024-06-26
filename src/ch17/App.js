/** @jsxImportSource @emotion/react */
import * as s from "./style";       // style에 있는 모든것(*)들을 가지고 오며 s로 참조할 수 있게 만들었다

function App() {
    return (
        <div css={s.container(300)}>
            <div css={s.mainBox}>
                <div css={s.box}>
                    <button css={s.boxButton}>:D</button>
                </div>
            </div>
        </div>
    );
}

export default App;