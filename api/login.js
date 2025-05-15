const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // set this in Vercel dashboard
const client = new MongoClient(uri);
const dbName = 'loginApp';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end('Only POST allowed');
    return;
  }

  const { username, password } = req.body;

  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection('users');

    const user = await users.findOne({ username, password });
    if (user) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
