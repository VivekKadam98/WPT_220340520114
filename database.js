let database={
	
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'test_db',
    port:3306


};
const mysql=require('mysql2');
const connection = mysql.createConnection(database);


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());




app.use(express.static("sf"));


app.get("/getBook",(req,resp)=>{
let input = req.query.x;
console.log(input);
let output ={bookidnotfoundstatus:false, book:{bookid:1,bookname:'Emma',price:500} };

con.query('select * from book where bookid=?',[input],(error,rows)=>{

if(rows.length > 0)
{
    output.bookidnotfoundstatus=true;
    output.book=rows[0];

}
resp.send(output);


}
);




});

app.get("/addbook",(req,resp)=>{
let input={bookid:req.query.x,bookname:req.query.y,price:req.query.z};
console.log(input);
let output=true;

con.query('insert into item(bookid,bookname,price) values (2, Dracula, 600)',
[input.bookid,input.bookname,input.price],
(error,whathappenedtoinsert)=>{
    if(error)
    {
            
    }

    else if(whathappenedtoinsert.affectedRows>0)
    {
            output=true;

    }

    resp.send(output);
       
}
);
});

app.get("/addbook",(req,resp)=>{
let input={bookid:req.query.x,bookname:req.query.y,price:req.query.z};
console.log(input);
let output=true;

con.query('insert into item(bookid,bookname,price) values (3, Kim, 700)',
[input.bookid,input.bookname,input.price],
(error,whathappenedtoinsert)=>{
        if(error)
        {
                
        }

        else if(whathappenedtoinsert.affectedRows>0)
        {
                output=true;

        }

        resp.send(output);
           
}
);



});