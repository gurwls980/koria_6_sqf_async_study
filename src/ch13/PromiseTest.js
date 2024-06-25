function PromiseTest() {
    /*
        Promise : 비동기 객체  
           Promis의 3가지 상태
           1. 대기 : 이행되지도 거부되지도 않은 상태
           2. 이행 : 연산이 성공했을 때의 상태,  resolve - 비동기 처리 : then, then 안에서는 return이 resolve
           3. 거부 : 연산을 실패했을 때의 상태  reject : catch

           promise에만 then, catch를 쓸 수 있다. 또한 async(promise로 만들어), await(이행할 때 까지 기다려) 는 return이 promise므로 promise 생성자이다.
           await은 async 안에서만 사용할 수 있고, promise 객체 에만 사용할 수 있다.
     */

    function p1(name) {
        return new Promise((resolve, reject) => {
            // 대기(동기 처리) 상태
            console.log(name + " 프로미스의 생성")
            if (!name) {
                reject("오류!!");
            }
            resolve(name);
        });
    }

    async function p2() {       // then에서 쓰는 문법 그대로 쓰면 된다.
        let a = null;
        try {
            a = await p4();
            await p5();
            a = "p5";           // 오류가 났을 때 p5로 바꾸고 싶은 경우 예외처리를 해줘야 한다.
        } catch(error) {
            console.log(error)  // try, catch로 동기처리를 할 수 있다. 비동기 처리를 동기처리로.
            a = "p5";
        }
        // a = await p4();         // await을 달게 되면 p4의 return값을 받아오면서 동기처리로 바뀌게 된다. await은 이행할 때 까지 기다려라 라는 뜻
        // p4().then(r => a = r);  // p4가 호출되지만 then이 비동기 처리이므로 a에 r을 넣어주는 것 자체가 비동기처리. return은 동기처리라서 아직 a에 값을 넣지 않은 상태가 됨. 그래서 null을 받아온 것
        // await setTimeout(() => {}, 2000)     setTimeout은 promise를 받지 않기 때문에 await을 앞에 붙여도 ...(오류)이 밑에 붙어버린다.
        // 만약 2초 뒤에 라는 setTimeout을 동작하게 하고 싶다면 최상위 실행에서 사용해야 한다.
        return a;
    }
    
    function p3() {
        return new Promise((resolve, reject) => {
            return "p3";    // 콜백 함수의 return   p3를 출력하고 싶다면 return자리에 resolve("p3")를 호출해줘야 한다.
        })
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!!!!!! 으아아ㅏㅏ")            // throw는 error에만 적용하는 문법??
    }

    // const p1 = new Promise((resolve, reject) => {   // promise는 정의할 수 없다. 만약 정의하고 싶다면 함수를 만들어서 리턴에 넣어줘야 한다.
    //     console.log("프로미스의 생성")
    // });

    const handleClick = () => {     // promise를 생성하고 호출하는 것은 동기처리. 
        p1("p1")
        .then(result => {   // then은 자체로 promise인 대기상태이므로 자기 자신뒤에 또 then을 달 수 있다. 
            console.log("이행")     // resolve가 호출이 되고 then이 실행이 되어질 때, 이행단계로 넘어감. 
            console.log(result);  
            if (true) {
                throw new Error("거부");    // 거부(reject)
            }  
            return "두번째 then";   // return을 해주면 then의 then에서의 이행이다. 이행(resolve)
                                    //순서는 p1호출 > 첫 번째 then > 두 번째 then의 순서로. 비동기 안에서의 동기. 하지만 전체(promise 자체)는 비동기 이다.
        })
        .then(result => {         // 이 줄의 result는 두번째 then의 result
            console.log(result);

        }).catch(error => {
            // console.log(error)      // resolve를 만족하지 못하고 reject 상태가 되면 아무리 then이 많더라도 reject로 넘어간다. 
        });
        console.log("출력1")
        p1("p2");
        console.log("출력2")
        p1("p3");
        console.log("출력3")
    }

    const handleClick2 = () => {
        setTimeout(() => {       // 만약 2초 뒤에 라는 setTimeout을 동작하게 하고 싶다면 최상위 실행에서 사용해야 한다.
            p2()
            .then(r => {
                console.log(r);
                // return "p2."
            })
        })
        // .then(r => {
        //     console.log(r)
        // });
        // p3().then(r => console.log(r));
    }


    return ( 
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
     );
}

export default PromiseTest;