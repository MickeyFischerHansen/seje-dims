let myFetch = require("./iife");
myFetch.init({
    address:"https://reqres.in/api/users/",
    key:"1234"
})

myFetch.put("1",{
    name: "mickey"
}).then(data => console.log(data))