const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.get("/getContact/:ticker", (req, res, next) => {
    console.log(req.params.ticker)
    const mapping = { "AAPL" : "A","MSFT" : "B","BAC" : "B","MS" : "M","JPM" : "J" }

    
    const filteredContact = Object.keys(mapping)
    .filter((key) => key === (req.params.ticker))
            .reduce((obj, key) => {
                obj[key] = mapping[key];
                return obj;
        }, {});

        res.json(filteredContact);
   });

app.get('/posts', (req, res) => {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' }
    ];
    res.json(posts);
  });

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
