import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

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
        if (e.keyCode === 13 ) {
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
    };

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    };
    
    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            inputValue: userList[index][key],        // 객체는 키 값을 통해서 value를 참조할 수 있음
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인",
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => {
                    if(i === index) {
                        return {
                            ...user,                // user의 정보들을 그대로 가져온 후에
                        [key]: result.value         // key 값에 입력한 값으로 바꾸겠다.
                        }
                    }
                    return user;                    // 조건이 참이 아니라면 그대로 user를 가져오겠다.
                }) ]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제 하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소",
            cancelButtonColor: "aqua"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))])
            }
        });
        // if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
        //     setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value))])
        // }

    }

    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동. 마지막 입력 시 첫 번째로 이동.
            2. name 필드에서 엔터를 입력하면 배열에 user 객체 추가 그리고 input value를 초기화.     
        */}

        <input name="username" placeholder="사용자" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.username} 
            ref={inputRef.username}
        />
        <input name="password" placeholder="비밀번호" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.password} 
            ref={inputRef.password}
        />
        <input name="name" placeholder="이름" 
            onKeyDown={handleInputKeyDown} 
            onChange={handleInputChange}
            value={inputData.name} 
            ref={inputRef.name}
        />
            
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
                    <th>edit</th>                    
                    <th>delete</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td onClick={() => handleEditClick("username", index)}>{username}</td>
                                <td onClick={() => handleEditClick("password", index)}>{password}</td>
                                <td onClick={() => handleEditClick("name", index)}>{name}</td>
                                <td>
                                    <button value={index}>edit</button>
                                </td>
                                <td>
                                    <button onClick={handleDeleteClick} value={index}>delete</button>                                        
                                </td>
                            </tr>
                        )
                    })
                }               
            </tbody>
        </table>
    </>
}

export default App;