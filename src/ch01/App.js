/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수 ! 컴포넌트만 대문자로 만들어야 한다.
  JSX
    1. 태그를 열었으면 닫아야 한다. <a></a> , <a />
    2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.  <></> , <li></li>
    3. JSX안에 값, 또는 변수를 사용하려면 {} 표현식을 사용해야한다.

*/

// console.log();     => JSX영역 안에서는 {/* */} 의 형태로 주석처리를 해줘야 한다

import Hello from "./components/Hello";
import "./App.css";
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";

function App() {
  const name = "황인수";
  const fontColorPruple = {
    color: "purple"
  };

  const age = <h2>{29}</h2>
  return <>
        <div>        
        <Hello></Hello>
        </div>
        {/*<div>
        <Hello />
        </div>*/}    
        <h1 style={fontColorPruple} className={"fs-20 italic"} >{name}</h1>
        <CustomInput ph={"이름"} disabled={true} value={"황인수"}/>
        <CustomInput ph={"나이"} disabled={false}/>
        <CustomInput ph={"연락처"} disabled={true}/>
        <Box name={"황인수"} isShow={true} >
          <h2>{29}</h2>  
          <h2>{29}</h2>  
          <h2>{29}</h2>  
        </Box>
</>
}

export default App;
