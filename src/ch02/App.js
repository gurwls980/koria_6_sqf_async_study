import { useState } from "react";

function App() {
    const [ number, setNumber ] = useState(100);
    const [ name, setName ] = useState(null);

    const [ test, testPrint ] = 
    [100, function() {console.log("test 함수 호출")} ]

    testPrint();

    console.log(number);
    if(number === 100) {
        setTimeout(() => setNumber(200), 2000);
        // setNumber(200);     // setNumber : 상태변화 > 상태 변화 때 함수 재호출(재렌더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다 !
    }

    if(number === 200) {        // number에 직접 300을 넣어라가 아닌
        setNumber(300);         // 비동기처리는 number에다가 300을 넣고 와~ useState의 setter는 비동기 !!
        console.log(number)     // setNumber의 속도보다 console.log의 속도가 더 빨라서
    }
    
    
    if(name === null) {
        setName("황인수")
        }
    console.log(name);

    return <>
    <h1>number상태 확인</h1>
    <h2>{number}</h2>
    </>
}

export default App;