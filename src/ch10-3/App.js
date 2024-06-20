import { useRef, useState } from "react";
import "./App.css";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    };

    const [ userList, setUserList ] = useState([]);

    const [ inputData, setInputData ] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    };

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            // const { username, password, name } = inputRef;
            switch (e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name":
                    inputRef.username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    // const handleInputChange = (e) => {
    //     setInputData(inputData => {
    //         return {
    //             ...inputData,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

   


    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동. 마지막 입력 시 첫 번째로 이동.
            2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value를 초기화.     
        */}
        <button>삭제</button>
        <input name="username" placeholder="사용자명" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.username}
            ref={inputRef.username}  />
        <input name="password" placeholder="비밀번호" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.password}
            ref={inputRef.password}  />
        <input name="name" placeholder="이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.name}
            ref={inputRef.name} />

        {/* 
            3. tbody -> tr@@ (묶음)을 userList에서 map을 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
            한줄 씩 추가되도록.
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{password}</td>
                                <td>{name}</td>                
                            </tr>
                        );
                    }) 
                }            
            </tbody>
        </table>
    </>
}

export default App;