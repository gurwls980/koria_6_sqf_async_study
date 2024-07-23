import React from 'react';

function PromisePage(props) {

    const loop = (name) => {
        // random 0 < 1, 0.xxxxxxx
        const random = Math.floor(Math.random() * 100) + 1 ;
        for(let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`)
        }

    }

 // const testPromise1 =  () => {
 //     return new Promise((resolve, reject) => {
 //         loop("test1");
 //         resolve("test1 반복 완료")
 //     });
 // }

    const testPromise1 = async () => {
        const response = {
            status: 200,
            data: "",
        }
        loop("test1");
        if(response.status === 400) {       // throw new Error(); 으로 에러를 날리면 reject의 부분
            throw new Error();
        }

        return "test1 반복 완료";        
    }

    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("test2");
            resolve("test2 반복 완료")
        });
    }
    
    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("test3");
            resolve("test3 반복 완료")
        });
    }

    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if(num == 0) {
                reject("test4 오류!!");      // 예외도 우선순위가 있어서 먼저 나타나는 오류와 나중에 나타나는 오류가 있음(..?)
                return;                     // reject는 발생하면 return으로 끊어줘야 함
            }
            resolve("test4 성공:D");
        }); 
    }

    const testPromise5 = async (num) => {
        console.log("test5");
        if(num == 0) {
            throw new Error("test5 오류!!");      // Error는 발생하면 return이 필요없음
    }
    return "test5 성공:D";
}
        
    // const handleClick1 = () => {
    //     testPromise1().then(r => console.log(r));   // testPromise 실행 후 then이 실행되는것이 아닌 
    //     testPromise2().then(r => console.log(r));   // 나머지 promise를 실행한 다음 then 이 실행되고 있음
    //     testPromise3().then(r => console.log(r));   // 비동기 동작. 우선순위에 따라서 먼저 행동하는 것이 있음
    //     console.log("--");
    // }

    const handleClick1 = () => {        // 순서대로 동작하기 위해서는  
        testPromise1().then(r => {      // then 안에서 다시한번 반복이 돌아줘야 된다.
            console.log(r);
            testPromise2().then(r => {
                console.log(r);
                testPromise3().then(r => {
                    console.log(r);
                });
            });
        });

     // return new Promise();
    }

    const handleClick2 = async () => {      // async 를 사용하는 순간 handleClick2도 promise가 된다
        const r1 = await testPromise1();    // await 은 위 코드처럼 타고들어가지 않게, 가독성이 좋게 해줌
        console.log(r1);                    // 대신 async 안에서만 await 을 쓸 수 있고, 리턴타입은 promise로 바뀜
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }

    const handleClick3 = () => {
        testPromise4(0)
        .then(r => {
            console.log(r);
                testPromise5(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.error(e);
            });
        })
        .catch(e => {
            console.error(e);
                testPromise5(0)
            .then(r => {
                console.log(r);
            })
            .catch(e => {
                console.error(e);
            });
        });
    }

    const handleClick4 = async () => {
        try {
            const r = await testPromise4(0);
            console.log(r);
        } catch (e) {
            console.error(e);
        }
        try {
            const r = await testPromise5(0);
            console.log(r);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>
            <button onClick={handleClick2}>버튼2</button>
            <button onClick={handleClick3}>버튼3</button>
            <button onClick={handleClick4}>버튼4</button>
        </div>
    );
}

export default PromisePage;
