const {Pool}=require("pg");
const pool=new Pool(
    {
        user:"postgres",
        password:"swaroop@23",
        host:"localhost",
        port:5432,
        database:"Indu"
    }
)
module.exports=Pool;