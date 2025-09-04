const http =require('http')
const settings =require('./config/settings')
const os =require('os')


const PORT =settings.port ||10500
const app =http.createServer((requestAnimationFrame,res)=>{
    res.end("Hello World")

})

console.log(os.platform)
console.log(os.homedir) 







const path =require('path')
const fs= require('fs')

fs.writeFileSync('temp.txt','this is first line')




app.listen(PORT,()=>{
    console.log("server started")
    console.log(`http://localhost:5000`)
})