// callback is a function as a parameter for fetchData. Ones data is ready this function will be 
// executed. As can see there is Done! passed as parameter for the callback function
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

// Returns a promise with result data
const fetchDataPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done Promise!');
        }, 1500);
    });
    return promise;
}

// Demonstrate the callback fetchData function
setTimeout(() => {
    console.log('1 - Timer is done!');
    fetchData(text => {
        console.log('1- ', text);
    })
}, 2000);

// Demonstrate the promise fetchDataPromise
setTimeout(() => {
    console.log('2 - Time is done for promise!');
    fetchDataPromise().then(text => {
        console.log('2 -', text);
        return fetchDataPromise().then(text2 => {
            console.log('2 -', text2);
        })
    })
}, 2000);


console.log('Hello');
console.log('Hi');