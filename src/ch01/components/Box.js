function Box( { name, isShow, children} ) {
    // jsx 에서는 true, false, null의 값 자체를 표기하지 않는다.
    const result = true && 10;       
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        { 1 + 1 }
        {isShow && <h3>안녕하세요</h3> }
        {!isShow ? <h3>안녕하세요</h3> : <h4>hello</h4> }
    </div>
}

export default Box;