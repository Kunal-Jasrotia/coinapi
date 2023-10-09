import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose';
import cors from 'cors';
import { router as getDataRouter } from './routes/getData'

const app = express();
const corsOptions = {
    origin: process.env.CLIENT,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/fetchData', getDataRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
})

mongoose.connect(process.env.MONGO_URI as string)
    .then(data => console.log(`MongoDB Connected`))
    .catch(e => console.log(`Error`));