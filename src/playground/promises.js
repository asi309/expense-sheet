const promise = new Promise((resolve, rejecct) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(1, data);
});

promise.then((data) => {
    console.log(2, data);
});

console.log('after');