from node 
workdir /src
copy . .
run npm install express 
expose 4000
cmd node server.js
