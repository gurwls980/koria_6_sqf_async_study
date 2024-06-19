import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0);
    let num2 = 0

//     let       [ a, b ]    =   [ 10, 20 ];
//     const       [ c, d ]    =   [ 10, 20 ];
// //  상태를 바꿀 수 있는 구역        상태구역
//     a = 100;

    const handleClick = (e) => {
        const value = parseInt(e.target.value);
        setNum((n) => n + value);
        num2 += value;
        console.log(num2)
        
    
    }
    
    const handleResetClick = () => {
        setNum(0)
    }
    console.log(num);
    console.log(num2);
    
    return <>
        <h1>번호 : {num} </h1>
        <h2>번호2 : {num2}</h2>
        <button onClick={handleClick} value={-10}>-10</button>
        <button onClick={handleClick} value={+10}>+10</button>
        <button onClick={handleClick} value={-100}>-100</button>
        <button onClick={handleClick} value={+100}>+100</button>
        <button onClick={handleResetClick} >reset</button>
    </>
}

export default App;