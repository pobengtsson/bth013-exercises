import express from 'express'
const app = express();
const port = 3000;

app.use(express.static('client/dist'));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
