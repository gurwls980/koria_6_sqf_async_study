import { useEffect, useState } from "react";       // 중요한 개념 ! 동작의 순서 잘 보기

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

   

    useEffect(() => {
        // 마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    }, [number, number2]);        // use 로 시작하는 것들은 hook 함수라고 한다. useEffect 는 1. 함수 2. [] 디펜던시(어떤 상태가 변하면~)를 받는다.
                   // useEffect 는 첫 호출 때 무조건 한번 실행이 된다. 페이지가 실행되자마자.
                   // 만약 배열이 비어있다면, 다른상태가 아무리 변해도 동작 할 이유가 없다. 즉, 페이지를 열었을 때 최초의 한번만 실행되면 되는 것을 표현할 때 사용.     
    const handleButtonClick = (e) => {
        setNumber(a => a + 1);        // 상태가 변하면~ 그때 실행을 해라 하는게 있음.
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return ( 
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
     );
}

export default App;