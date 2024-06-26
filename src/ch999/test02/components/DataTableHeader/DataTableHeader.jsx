import "./style.css";

function DataTableHeader() {
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    

    return ( 
        <header className="table-header">
            <div className="input-group">
                <input type="text" name="productName" placeholder="상품명"/>
                <input type="text" name="size" placeholder="사이즈"/>
                <input type="text" name="color" placeholder="색상"/>
                <input type="text" name="price" placeholder="가격"/>
            </div>
            <div>

            </div>
        </header>
     );
}

export default DataTableHeader;