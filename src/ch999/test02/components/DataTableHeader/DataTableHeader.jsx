import "./style.css"

function DataTableHeader() {
    return (  
        <header className="table-header">
            <div className="input-group">
                <input type="text" placeholder="상품명" />
                <input type="text" placeholder="사이즈" />
                <input type="text" placeholder="색상" />
                <input type="text" placeholder="가격" />
            </div>
            <div>
                <div className="button-group">
                    <button onClick={}>추가</button>
                    <button onClick={}>수정</button>
                    <button onClick={}>삭제</button>
                </div>
                <div className="button-group">
                    <button onClick={}>확인</button>
                    <button onClick={}>취소</button>
                </div>
            </div>
        </header>
    );
}

export default DataTableHeader;