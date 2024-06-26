/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStydyPage/RouteStudyPage";

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/routestudy/*" element={<RouteStudyPage />}/>
                <Route path="/routeStudySubPage1" />
            </Routes>
        </div>
    );
}

export default MainBody;