import express from "express";
import data from './data.js';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js"
import productRouter from "./routes/productRoutes.js"
import userRouter from "./routes/userRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

process.env.MONGODB_URI='mongodb+srv://mern-amazona:mern-amazona123456@cluster0.e4yvkmk.mongodb.net/?retryWrites=true&w=majority'
process.env.PAYPAL_CLIENT_ID='AXzgn3SeYoZqQb5oojr4zfAy28oktW7BCdj7JALFKyV7wz9Z3xfJMc3hj9ptq0UZJWo24wz0ObUuFxVm'
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log('connect to db')
}).catch(err =>{
  console.log(err.message);
});

const app = express();
// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//password convert to json

app.get('/api/keys/paypal',(req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb') //paypal
})

app.use('/api/seed',seedRouter);

app.use("/api/products",productRouter)
app.use("/api/users",userRouter)
app.use("/api/orders",orderRouter)

//const __dirname = path.resolve();//HR

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
