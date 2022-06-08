function returnOwnProp(obj) {
    /* for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}:${value}`);
    } */
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(`${key}:${obj[key]}`);
        }
    }
}

// const obj1 = {
//     a:1,
//     b:"str",
// };
//
// const obj2 = Object.create(obj1);
// obj2.c = "123"
// obj2.d = 12
//
// returnOwnProp(obj2);

