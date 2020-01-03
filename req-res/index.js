var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/3", true);
xhr.onload = function(){
    console.log(xhr.responseText);
};
xhr.send();
console.log(xhr)