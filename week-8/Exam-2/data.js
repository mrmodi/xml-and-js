const fs = require("fs");
let fname = `data.json`;


        fs.readFile(fname, null, (err, data) => {
          if (err) {
            throw err;
          }
   
          const arr = JSON.parse(data)

          //1. Function to get array of active accounts only
          const newArray = Array.from(arr).filter(function(item){
              return item.isActive
          });
          console.log("Active Accounts :- ",newArray);

          //2. Function to get the highest balance. Function should return balance string value
          balance=Array.from(arr).map(function(item)
          {
            return parseFloat(item.balance.replace(/\$|,/g, ''));
          });
    
          var maxarray = Math.max.apply(Math, balance);
          console.log("Highest Balance :- ",maxarray);


          //4. Function to get string of account holders names. 
          //Function should return a single string with comma separated names
          names=Array.from(arr).map(function(item)
            {
                return item.name
            });
            console.log("Account Holders Name :- ",names);
        });
     