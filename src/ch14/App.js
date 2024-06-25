import { useState } from "react";

function App() {        // 이미지 불러오기 
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file")
        fileElement.setAttribute("multiple", true);      // 파일을 여러개 가져올 수 있게 하는 것. 기본값은 false
        fileElement.click();

        
        fileElement.onchange = (e) => {     // 카멜표기법을 왜 안쓰는지?
            const file = e.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }

            fileReader.readAsDataURL(file)
        }
    }

    return ( 
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={false} />
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
     );
}

export default App;
<>
</>