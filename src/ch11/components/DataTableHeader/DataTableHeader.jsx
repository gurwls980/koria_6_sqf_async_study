import { useRef, useState } from "react";
import "./style.css"
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, setProducts, setDeleting }) {
    
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [ inputData, setInputData ] = useState({...emptyProduct});

    const handleInputChange = (e) => {
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value     // input의 값을 바꿔주는 것. 익숙해 져야한다.
        }));
    };

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if (e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if (e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if (e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if (e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    };

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    };

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = 
                    productIds.length === 0 
                    ? 0 
                    : Math.max.apply(null, productIds);
                return [ ...products, {...inputData, id: maxId + 1}]
            });
        }
        
        Swal.fire({
            title: "상품 정보 저장 완료",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 500
        });
        resetMode();

        if(mode === 2) {
            alert("상품 수정")  
        };
        if(mode === 3) {
            //alert("상품 삭제")      // 선택된 애들만 필터에서 제외되어야 한다 body가 가지고 있는 체크된 애들을 어떻게 가져올 것인가?
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소",
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true);
                }
            })
        };
        
    }

    const handleCancleClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct })
    }

    return ( 
        <header className="table-header">
            <div className="input-group" >
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="productName"
                    value={inputData.productName}       // inputData가 바뀌면 렌더링 된다.
                    placeholder="상품명" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.productName}
                    autoFocus
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    value={inputData.size}
                    name="size"
                    placeholder="사이즈" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="color"
                    value={inputData.color}
                    placeholder="색상" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price"
                    value={inputData.price}
                    placeholder="가격" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button  onClick={handleChangeModeClick} value={1} >추가</button>
                            <button  onClick={handleChangeModeClick} value={2} >수정</button>
                            <button  onClick={handleChangeModeClick} value={3} >삭제</button>
                        </div>
                    )
                }           
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick} >확인</button>
                            <button onClick={handleCancleClick} >취소</button>
                        </div>
                    )                                    
                }
            </div>
        </header>
     );
}


export default DataTableHeader;
