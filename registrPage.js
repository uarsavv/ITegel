const express = require('express')
const app = express()
module.exports = app;
const sql = require("mssql/msnodesqlv8");
const {connect} = require("mssql/lib/global-connection");
var request = new sql.Request();
var config = {
    server : "LAPTOP-58QGU3Q7\\SQLEXPRESS",
    database:"usersDB",
    driver: "msnodesqlv8",
    options:{
        trustedConnection: true
    }
}
sql.connect(config,function (err) {
    if (err) {
        console.log(err);
    }
    var request1 = new sql.Request();
    var request=new sql.Request();

    request1.query('INSERT INTO users_info (userName, usersPassword) VALUES (\'Baaska\', \'87654\')', function (err, records) {
        if (err) {
            console.log(err);
        } else {
            console.log(records);
        }
    });
});
app.use(express.static('templates'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen(PORT,()=>{
    console.log('Сервер запущен: http://localhost:${port}')
})
