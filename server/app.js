import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use((err, req, res, next)=> {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.all('*', (req, res) => {
  res.status(404).send(`Resource ${req.originalUrl}  not found`);
});

export default app;