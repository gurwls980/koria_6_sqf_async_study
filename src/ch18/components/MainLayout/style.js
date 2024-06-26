import { css } from "@emotion/react";

export const layout = css`
    position: relative;     // 포지션 최상위로 
    box-sizing: border-box;
    margin: 100px auto;
    border: 1px solid #dbdbdb;
    width: 600px;
    height: 700px;
    background-color: white;
    overflow: hidden;       // 외부로 벗어나는 것들은 숨겨주기
`;