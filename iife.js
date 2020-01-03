(function(root,factory) {
    //AMD
    if(typeof define === "function" && define.amd) {
        define(["jquery"], factory);
        //CommonJS
    } else if(typeof exports === "object") {
        module.exports = factory(require("jquery"));
        //Browser context
    } else {
        root.myFetch = factory(root.jquery);
    }
}(this, function($) {
    //vore egen del af modulet
    function init(options) {
        this.APIAddress = options.address;
        this.APIKey = options.Key;
        return this;
    };

    async function get(resource) {
        try {
            if (typeof fetch === "function") {

                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    }
                });
                return await response.json();
            }
            else {
                let xhttp = new XMLHttpRequest();

                xhttp.open("GET", this.APIAddress + resource, true);
                xhttp.send();
                return await new Promise(function(resolve, reject) {

                    xhttp.onreadystatechange = async function() {
                        if (this.readyState == 4 && this.status == 200) {
                          resolve(JSON.parse(xhttp.responseText));
                        }
                    };
    
                })
               
               
            }
            

         } catch (error) {
             throw error;
         }
    };

    async function post(resource, data) {
          try {
            if (typeof fetch === "function") {
             let response = await fetch(this.APIAddress + resource, {
                  headers: {
                      "Authorization": this.APIKey,
                      "Content-Type": "application/json"
                 },

                method: "POST",
                  body: JSON.stringify(data)
              });
              
            return await response.json();
            }
            else{
                let xhttp = new XMLHttpRequest();

                xhttp.open("POST", this.APIAddress + resource, true);
                xhttp.setRequestHeader("Content-Type", "application/json")
                xhttp.setRequestHeader("authorization", this.APIKey);
                xhttp.send(JSON.stringify(data));
                return await new Promise(function(resolve, reject) {

                    xhttp.onreadystatechange = async function() {
                        console.log(this)
                        if (this.readyState == 4 && this.status == 201) {
                          resolve(JSON.parse(xhttp.responseText));
                        }
                    };
    
                })
                }
              
        
        
        } catch (error) {
            
        }
    }

   


    async function del(resource) {
        try {
            if (typeof fetch === "function") {

                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    },
                    method:"DELETE"
                });
                return new Promise(function(resolve, reject) {
                    resolve(response.status);
                })
            }
            else {
                let xhttp = new XMLHttpRequest();

                xhttp.open("DELETE", this.APIAddress + resource, true);
                xhttp.send();
                return await new Promise(function(resolve, reject) {

                    xhttp.onreadystatechange = function() {
                        resolve(xhttp.status);
                    };
    
                })
               
               
            }
            

         } catch (error) {
             throw error;
         }
    };

    async function put(resource, data) {
        try {
          if (typeof fetch === "function") {
           let response = await fetch(this.APIAddress + resource, {
                headers: {
                    "Authorization": this.APIKey,
                    "Content-Type": "application/json"
               },

              method: "PUT",
                body: JSON.stringify(data)
            });
            
          return await response.json();
          } else if(typeof fetch === "function"){
              
              let xhttp = new XMLHttpRequest();

              xhttp.open("PUT", this.APIAddress + resource, true);
              xhttp.setRequestHeader("Content-Type", "application/json")
              xhttp.setRequestHeader("authorization", this.APIKey);
              xhttp.send(JSON.stringify(data));
              return await new Promise(function(resolve, reject) {

                  xhttp.onreadystatechange = async function() {
                      console.log(this)
                      if (this.readyState == 4 && this.status == 200) {
                        resolve(JSON.parse(xhttp.responseText));
                      }
                  };
  
              })
              }
              else{

                  const nodeFetch = require('node-fetch')
                  let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                   },
    
                  method: "PUT",
                    body: JSON.stringify(data)
                });
                
              return await response.json();


              }
            
      
      
      } catch (error) {
          
      }
  }




  
  
  
    

    

    return{
        init,
        get,
        post,
        del,
        put,
        get_data
    }
}));