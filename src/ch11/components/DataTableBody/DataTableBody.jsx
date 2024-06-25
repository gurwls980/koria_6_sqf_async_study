import { useEffect, useRef, useState } from "react";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";
import "./style.css"

function DataTableBody( { mode,setMode, products, isDeleting, setDeleting, setProducts, setEditProductId } ) {
    const [ viewProducts, setViewProducts ] = useState([]);

    const [ checkedAll, setCheckedAll ] = useState(false);
    
    useEffect(() => {
        if(mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    }, [ products, mode ])      // product의 값이 바뀌거나, mode의 값이 바뀌면 동작을 할 것이다. 배열안의 값이 바뀐다면~
    
    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
            if(checkStates.includes(false)) {
                setCheckedAll(false);
            } else {
                setCheckedAll(true);
            }
    }, [viewProducts])      // viewProducts의 값이 하나라도 바뀌면 동작해라.

    useEffect(() => {
        if(isDeleting) {
            setProducts([ ...viewProducts
                .filter(viewproduct => viewproduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct;
                    return product;
                })
            ])
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting]);

    useEffect(() => {
        if (mode === 2) {       // 수정은 체크가 무조건 하나
            const [ selectedProduct ] = viewProducts.filter(product => product.isChecked)
    
            setEditProductId(!selectedProduct ? 0 : selectedProduct.id)

        }
    }, [viewProducts]);
    
    const resetViewProducts = () => {
        setViewProducts([ ...products.map(product => ({ ...product, isChecked: false })) ])      
    }                    // 전부 반복돌려서 체크를 풀어주는 과정

    const handleCheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([ ...products.map(product => ({ ...product, isChecked: true })) ]);
            } else {
                resetViewProducts();
            }
            return !checked;
        });
    }

    const handleCheckedChange = (e) => {
        if(mode === 2) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked       // 체크되어있는 경우에 다시 눌렀을 때 풀어주고, 체크가 안되어 있는경우에 체크를 할 때
                        }                                       // f -> t / t -> f 즉, 체크를 수정하는 경우
                    }
                    return {
                        ...product,
                        isChecked: false
                    }
                })]
            })
        }
        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked       // ??
                        }
                    }
                    return product;
                })]
            })
        }
    }
        
    
    return ( 
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
                                disabled={mode !== 3} 
                                onChange={handleCheckedAllChange} 
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>싱픔명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (       // 함수 뒤의 소괄호 = 값
                            <tr key={product.id}>
                                <th>
                                    <input 
                                        type="checkbox" 
                                        disabled={mode === 0 || mode === 1} 
                                        checked={product.isChecked}
                                        onChange={handleCheckedChange}
                                        value={product.id} 
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                             </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
     );
}

export default DataTableBody;