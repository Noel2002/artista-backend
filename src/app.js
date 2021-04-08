import express from 'express';
import http from 'http';
import routes from './routes';
import cors from 'cors';
import 'dotenv/config';
import db from './database/models';


const app= express();
const server= http.createServer(app);
const port= process.env.PORT || 8000;

// routes
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v1/', routes);

// db connection check
const { sequelize } = db;
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log(`Error: ${err}`));


server.listen(port, ()=>{
    console.log(`CORS-enabled web server listening on port ${port}  ...`);

}).on('error', err=>{
    if (err.errno === 'EADDRINUSE') {
        console.log(`----- Port ${port} is busy, trying with port ${port + 1} -----`);
        server.listen(port + 1);
      } else {
        console.log(err);
      }
})