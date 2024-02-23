import { connectDB } from '../../DB/connection.js';
import authRouter from './auth/auth.router.js';
import blogRouter from './blog/blog.router.js';
import userRouter from './user/user.router.js';
import cors from 'cors';



export const initApp = (app,express) => {
    connectDB();
    app.use(cors());
    app.get('/', (req, res) => {
        return res.json({massege:"welcome"});
    })
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('/blog',blogRouter);
    app.use('/user',userRouter);
    app.use('*',(req,res)=>{
        return res.json({massege:"page not found"})
    }) 
};

