const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');

    return res.json({ users: data });
  } catch (error) {
    return res.json({ error });
  }
});

app.listen(4567);
