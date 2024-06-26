import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

function RouteStudySubPage1(props) {
    return (
        <div>
            <h1>:D</h1>
            <ul>
                <Link to={"/routestudy/page1/name"} ><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"} ><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"} ><li>주소</li></Link>
            </ul>
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