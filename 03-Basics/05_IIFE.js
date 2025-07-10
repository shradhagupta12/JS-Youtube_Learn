// Immediate Invoke Function Expression (IIFE)

/*
    IIFE means that we have written some function and want to execute 
    it immediately we will use IIFE

    For example we have file in which we have some database 
    connection and want that whenever the excution starts the connection should be establish. 

    And there are will come some cases where a global can pollute the function
    variable and to avoid such kind of polluction we can use IIFE.

*/

// Normal Function
function DBconnect(){
    console.log('DB CONNECT');
}
DBconnect();

// IIFE Function

(function DBconnectIIFE(){
    console.log('DB CONNECT IIFE');
})();

( () => {
    console.log('DB CONNECT IIFE Two');
})();