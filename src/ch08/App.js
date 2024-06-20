import { useRef } from "react";

function App() {
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }
    // const aRef = useRef();      // use로 시작하는 애들은 절대 함수안에 들어갈 수 없음.
    // const bRef = useRef();      // 해당 function의 최상단에 모아둠
    // const cRef = useRef();      // querySelector 대신 쓴다고 보면 된다.

    // console.log(aRef);
    // console.log(bRef);
    // console.log(cRef);

    const handleKeyDown = (e) => {
        
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus()
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a"onKeyDown={handleKeyDown} ref={inputRef.a}/>
        <input name="b"onKeyDown={handleKeyDown} ref={inputRef.b}/>
        <input name="c"onKeyDown={handleKeyDown} ref={inputRef.c}/>
    </>
}

export default App;