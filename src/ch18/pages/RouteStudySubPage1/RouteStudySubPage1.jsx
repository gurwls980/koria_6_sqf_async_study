import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function RouteStudySubPage1(props) {

    const navigate = useNavigate();
    const location = useLocation();

    // location.pathname : pathname은 URL주소 전체를 들고올 수 있다.
    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {  
        navigate("/routestudy/page1/age", {replace: true});      // navigte는 함수로서 주소를 바로 받아올 수도 있다.
        // window.location.href = "https://naver.com" => replace: false인 상태.
        // window.location.replace("https://naver.com") => replace: true인 상태. 뒤로가기 했을 때 history를 남기지 않는다.
    }


    return (
        <div>
            <h1>:D</h1>
            <ul>
                <Link to={"/routestudy/page1/name"} ><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"} ><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"} ><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick} >나이</button>
            <div>
                <Routes>
                    <Route path="/name" element={<h1>인수</h1>}/>
                    <Route path="/age" element={<h1>29</h1>}/>
                    <Route path="/address" element={<h1>당리동</h1>}/>
                </Routes>
            </div>
            <h1>n_n</h1>
        </div>
    );
}

export default RouteStudySubPage1;