import React from 'react';

function TestPromisePage(props) {

    const loop = () => {
        const random = Math.floor(Math.random() * 10) + 1;
        for(let i = 0; i < random; i++) {
            console.log(`${name} : ${i}`)
        }
    }

    const testPromise1 = async () => {
        const response = {
            status: 200,
            data: "",
        }
        loop("test1");
        if(response.status === 400) {
            throw new Error();
        }

        return "test1 반복 완료"
    }

    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            loop("test2");
            resolve("test2 반복 완료")
        });
    }

    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if(num == 0) {
                reject("test4 오류!!");
                return;
            }
            resolve("test4 성공 :D");
        });
    }

    const testPromise4 = { }

    const testPromise5 = async () => {
        console.log("test5");
        if(num == 0) {
            throw new Error("test5 오류!");
        }
        return "test5 성공 :D";
    }

    const handleClick1 = () => {
        testPromise1().then(r => {
            console.log(r);
            testPromise2().then(r => {
                console.log(r);
                testPromise3().then(r => {
                    console.log(r);
                });
            });
        });

        return new Promise();
    }

    const handleClick2 = async () => {
        const r1 = await testPromise1();
        console.log(r1);
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }

    const handleClick3 = () => {
        testPromise4(0)
        .then(r => {
            console.log(r);

        })
    }

    const handleClick4 = async () => {
        try {
            const r = await testPromise4(0);
            console.log(r)
        } catch (error) {
            console.error(e);
        }
        try {
            const r = await testPromise5(0);
            console.log(r);
        } catch (error) {
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

export default TestPromisePage;