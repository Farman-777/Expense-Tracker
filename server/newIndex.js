const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');


app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
const port = 4500;

// Set up MySQL connection
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb1',
});
 
// Define API endpoints
app.get('/', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM expense');
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

  app.post('/addExpense', async function (req, res) {

    const {title,amount,date }= req.body;
    
    
  
    console.log('Received request body:', req.body);
  

    try {
      const [result] = await connection.query(
        'INSERT INTO expense ( title, amount, date) VALUES ( ?, ?, ?)',
        [title, amount, date]
      );
      res.send(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
  
// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
