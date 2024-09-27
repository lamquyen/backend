import express from 'express';
import authRouter from './src/routers/authRoute.js';
import connect from './src/config/db/index.js';
import userRouter from './src/routers/userRouter.js';



//connect to DB
connect();


const app = express();

app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter)




app.listen(8080, () => {
    console.log('Server is running!');
});

