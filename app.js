const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

app.get('/sarahtasnim99_gmail_com', (req, res) => {

    let x = Number(req.query.x);
    let y = Number(req.query.y);
    
    if(!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return res.type('text').send('NaN');
    } 
    
    const lcm = x / gcd(x, y) * y;
    res.type('text').send(String(lcm));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});