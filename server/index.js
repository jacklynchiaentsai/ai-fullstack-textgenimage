import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

// pulling environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}))

