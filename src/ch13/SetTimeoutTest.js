function SetTimeoutTest() {
    /*
        비동기

     */

        setTimeout(() => {
            print();       // 2초 뒤에 print가 실행이 되는데, 
        }, 2000);
    
        function print(fx) {
            console.log(4);
            fx();
        }
    
        count();
    
        function count() {
            console.log(1);
            console.log(2);
            console.log(3);  
        }
        
    
        /*
            콜백함수
             - 매개변수를 받아서 필요한 시점에 가져다 쓰겠다.
         */
        function test(fx) {
            console.log("test 함수 호출")
            fx();       // add 호출
        }
        
        function add() {
            console.log("add 함수 호출");
        }
    
        test(add);      // add함수의 결과가 아니라, add함수 주소 자체를 넣어준 것.

    return ( 
        <>
        
        </>
     );
}

export default etTimeoutTest;