import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    // const values = searchParams.values();
    // console.log(values().next());     // map에서의 get. getAll은 모두 가져오지만 get은 여러개가 있을 때 맨 앞의 하나만 가져옴
    console.log(searchParams.get("a"));
    console.log(searchParams.get("b"));
    // setSearchParams({...searchParams, c: 30})

    const handleClick = () => {
        const keys = searchParams.keys();
        let newParams = {};
        
        for (let i = 0; i < searchParams.size; i++) {
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({...newParams, c: 30});
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;