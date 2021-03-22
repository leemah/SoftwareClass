const http = require("http") // Declaring Http

const port = 2200  // Declaring the port

// storing http module into a variable

const server = http.createServer((req, res) =>{
   // console.log(req); // See what is inside request
   
   //To deconstruct(Bring out )
   const {headers, url, method} = req;
   console.log("headers: ");
     console.log(headers);
    console.log("url: ");
   console.log(url);
   console.log("method: ");
   console.log(method);
    res.end();
})

server.listen(port, ()=>{
    console.log(`Server is now ready to listen to Port: ${port}`);
}) 


