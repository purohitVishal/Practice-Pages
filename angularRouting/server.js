var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var mysql = require('mysql');

app.use(express.static(__dirname+"/public"));



/*-------sending email using nodeJS----START------*/


/*var transporter = nodeMailer.createTransport({
	service:'gmail',
	host:"smtp.gmail.com",
	auth:{
		user: 'wayword.vp@gmail.com',

		pass:'rock@on@1'
	}
});

var mailOptions = {
	
	to:'vishalpurohit.vp@gmail.com',
	subject:'trail email from node',
	text:'hello there'
};

transporter.sendMail(mailOptions,function(error,info){
	if(error){
		console.log(error);
	}else{
		console.log('email sent: '+info.response);
	}
});*/

/*-------sending email using nodeJS------END----*/

/*----mysql---*/
var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"password"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected!!!");


/*con.query("SELECT * from employees.	employee_name",function(err, result, fields){
	if(err){
		throw err;
	}
	else{
		console.log(result);
	}
});

con.query("insert into employees.employee_name (fname,lname) values ('rocky','smith'),('jhony','rhodes')",function(err,result,fields){
	if(err){
		throw err;
	}
	else
		console.log(result);
});

con.query("SELECT * from employees.employee_name",function(err,result,fields){
	if(err){
		throw err;
	}
	else{
		console.log(result);
	}
});
*/
/*con.query("CREATE DATABASE students",function(err,reult){
	if(err){
		throw err;
	}
	else{
		console.log("database created");
	}
});*/

/*con.query("create table	students.record (id INT(11) AUTO_INCREMENT, fname VARCHAR(255), lname VARCHAR(255), primary key(id))",function(err,result){

if(err){
	throw err;
}
else{
	console.log("result");
}
});*/
/*con.query("insert into students.record(fname,lname) values('ron','smith'),('jhon','cina'),('sam','ronney')",function(err,result,fields){
	if(err){
		throw err;
	}
	else{
		console.log(result);
	}
});*/

con.query("SELECT * from students.record",function(err,result,fields){
	if(err){
		throw err;
	}
	else{
		console.log(result);
	}
})
});


app.listen(3000);
console.log("running on port 3000");