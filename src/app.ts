//imports express and the request/repsone types used to annotate the route handler
import express from 'express';
import storiesRouter from './stories/stories.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

//creating an instance of the express app to set up the server and handle requests
const app = express();
//defining a port for for managing connections
const port = process.env.PORT;

// endable all CORS request
app.use(cors());
//parse JSON bodies
app.use(express.json());
//parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));

// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

//MySQLConnector.initializeMySqlConnector();

if(process.env.NODE_ENV == 'development'){
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

//application routes
//root route
// app.get('/', (req: Request, res: Response) =>{
//     res.send('<h1>Welcome to the Music API<h1/>');
// });

//adding router middleware
app.use('/', [storiesRouter]);

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});