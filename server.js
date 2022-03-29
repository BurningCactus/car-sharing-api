const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 3001;
const cors = require('cors');
const { ObjectID } = require('bson');
const connString = 'mongodb+srv://admin:admin@cluster0.j7jcz.mongodb.net/carSharingDb?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(connString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('carSharingDb');
    const accountCollection = db.collection('accounts');
    
    app.post('/reg', (req, res) => {
        const accountDetails = req.body.data;
        console.log(accountDetails);
    });
    
    app.get('/validateEmail', (req, res) => {
        const emailToValidate = req.query;
        console.log(emailToValidate);
        res.send(true);
    });

  })
  .catch(error => console.error(error));

app.listen(port, () => {
    console.log(port);
})