const fetchData = () =>{
    let p = new Promise((resolve,reject) => {
        console.log('Resolve');
        reject(0);
        // setTimeout(()=>{
        //     resolve('Success');
        // } , 5000)
    })
    return p;
}

fetchData().catch( () => {
        console.log("Yaar Error")
    }
)

const fetchData2 = () => {
    let p = new Promise((resolve, reject) => {
        console.log('Resolve');
        setTimeout(() => {
            resolve('Success');
        }, 5000);
    });
    return p;
}

fetchData2()
    .then((result) => {
        console.log(result);
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {
        console.log('Success1');
    })
    .then(() => {
        console.log('Success2');
    })
    .catch(() => {
        console.log("Yaar Error");
    });