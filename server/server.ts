import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";
import connectDB from "./configs/db.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import AuthRouter from "./routes/AuthRoutes.js";
import ThumbnailRouter from "./routes/ThumbnailRoutes.js";
import UserRouter from "./routes/UserRoutes.js";

declare module 'express-session' {
    interface SessionData {
        isLoggedIn: boolean;
        userId: string;
    }
}

await connectDB();

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));


app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 7 },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName: 'sessions'
    })
}));

app.use(express.json());

// 1. BASE ROUTE
app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

// 2. DIRECT INJECTION TEST
app.get('/api/direct-test', (req: Request, res: Response) => {
    res.json({ message: "Direct injection successful! The server is reading this file!" });
});

// 3. YOUR ROUTERS
app.use('/api/auth', AuthRouter);

app.use('/api/thumbnail', ThumbnailRouter);
app.use('/api/user', UserRouter);

// port manually to 5000
const port = 5000; 

app.listen(port, () => {
    console.log(`\n🚨 THE REAL SERVER IS RUNNING ON PORT ${port} 🚨\n`);
});