import { useState } from "react";       // hook 함수는 앞에 무조건 'use'가 붙는다

export function useInput(defaultValue, length ) {
    const [ value, setValue ] = useState(defaultValue);

    const onChange = (e) => {
        if (e.target.value.length < length + 1) {
            setValue(e.target.value);
        }
    }

    return {
        value,      // "value: value" 같은 코드. key값과 value값이 같으면 이렇게 써도 된다.
        setValue,    // "setValue: setValue"    
        "onChange": onChange
    }
}