import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    border-bottom: 2px solid #dbdbdb;
    width: 100%;
    height: 70px;
    background-color: red;
`;

export const headerBody = css`
    display: flex;
    justify-content: space-between; // 주축으로 space-between
    align-items: center;            // 교차축 가운데 정렬 
    width: 100%;
    height: 100%;
    background-color: aqua;
`;

export const menuToggleButton = css`
    display: flex;
    justify-content: center;        // 가운데 정렬
    align-items: center;            // 가운데 정렬
    border: 1px solid #dbdbdb;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;