function CustomInput({ ph, disabled, value }) {       // component만 props라는 객체를 들고올 것이다. 비구조 할당으로 정의해 둔다면 component에서 ctrl space를 하면 자동완성이 뜬다.
                // props 의 자료형은 객체. 
    return <input type="text" placeholder={ph} disabled={disabled} value={value}/>
}

CustomInput.defaultProps = {
    ph: "test",
    disabled: "false",
    value: "빈값"
}

export default CustomInput;