import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css"
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";
import Swal from "sweetalert2";

function DataTable() {
    const [ isLoad, setLoad ] = useState(false);
    const [ mode, setMode ] = useState(0); // 0 = 조회, 1 = 추가, 2 = 수정, 3 = 삭제
    const [ products, setProducts ] = useState( [ ...SAMPLE_PRODUCTS ] );
    const [ isDeleting, setDeleting ] = useState(false);
    const [ editProductId, setEditProductId ] = useState(0);    // id는 1부터 시작하도록 만들자. 0이면 없는 것.

    useEffect(() => {       // 상태가 변했을때를 감지하는 useEffect ! 잘 이해하고 있어야 한다. 많이 쓰임
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
        setLoad(true);
    }, []);     // 페이지가 최초 1번 열렸을 때 

    useEffect( () => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [products]);

    return ( 
        <div className="table-name-container">
            <DataTableHeader 
                mode={ mode } 
                setMode={ setMode } 
                products={ products }
                setProducts={setProducts} 
                setDeleting={setDeleting} 
                editProductId={ editProductId }
            />
            <DataTableBody 
                mode={ mode } 
                setMode={ setMode } 
                products={ products } 
                setProducts={setProducts} 
                isDeleting={isDeleting} 
                setDeleting={setDeleting}
                setEditProductId={ setEditProductId } 
            />
        </div>

     );
}

export default DataTable;