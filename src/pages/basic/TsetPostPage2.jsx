import React, { useEffect, useState } from 'react';
import { COLOR_OPTION, SIZE_OPTION } from '../../constants/productOption';
import axios from 'axios';

function TestPostPage2(props) {

    const [ product, setProduct ] = useState({
        productName: "",
        price: "",
        sizeId: "",
        colorId: "",
    })

    const [ sizeOptions, setSizeOptions ] = useState([]);
    const [ colorOptions, setColoroptions ] = useState([]);

    useEffect(() => {
        const getSizes = () => {
            axios.get("http://localhose:8080/api/v1/sizes");
        }
    })

    const handleInputChange = (e) => {
        setProduct(product => {
            return {
                ...product,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/basic/product", product);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST2)</h1>
            </header>
            <main>
                <h3>상품등록</h3>
                 <p>
                    <label htmlFor="">상품명 : </label>
                    <input type="text" 
                        name="productName"
                        onChange={handleInputChange} />
                 </p>
                 <p>
                    <label htmlFor="">가격 : </label>
                    <input type="text" 
                        name="price"
                        onChange={handleInputChange} />
                 </p>
                 <p>
                    <label htmlFor="">사이즈 : </label>
                    <select name="sizeId" >
                        {
                            SIZE_OPTION.map(size => 
                            <option key={size.id} value={size.id}>{size.name}</option>)
                        }
                    </select> 
                 </p>
                 <p>
                    <label htmlFor="">색상 : </label>
                    <select name="colorId">
                        {
                            COLOR_OPTION.map(color => 
                            <option key={color.id} value={color.id}>{color.name}</option>)
                        }
                    </select>
                 </p>
                 <p>
                    <button onClick={handleSubmitClick}>등록하기</button>
                 </p>
            </main>
        </>
    );
}

export default TestPostPage2;