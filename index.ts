import express from 'express'
import dotenv from 'dotenv'
import { handleRedirectUrl } from './controllers/url.controllers';
import urlRouter from './routes/url.routes'
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();
app.use(express.urlencoded({extended: false}));

app.get('/:id', handleRedirectUrl);

app.use('/api/urls', urlRouter);


app.listen(() => {
    console.log("Server started and running at Port: ", port);
})
