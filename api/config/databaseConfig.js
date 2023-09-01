const mongoose= require('mongoose');


// mongoose.connect(process.env.MONGO_BLOG||"mongodb://localhost:27017/mera-db", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// }).then ((conn)=>
// console.log(`connected to DB:${conn.connection.host}`
// )).catch( (err)=>
// console.log(err)
// )


// const databaseConnect = async() =>{
//     mongoose
//     .connect(process.env.MONGO_DB|| "mongodb://localhost:27017/mera-db")
//     .then ((connection)=>
//      console.log(`connected to DB:${connection.host}`
//     ))
//     .catch((err)=>{
//     console.log('error:-',err.message)
//     process.exit(1)}
//     );

// }

mongoose.set('strictQuery',false);

const databaseConnect = async()=>{
try {
    const {connection}= await mongoose.connect(
        process.env.MONGO_URL 
 );
 
 if(connection){
     console.log(`connected successfully to db : ${connection.host}`)
}
} catch (error) {
 console.log(error);
 process.exit(1);   
}
};

module.exports= databaseConnect;