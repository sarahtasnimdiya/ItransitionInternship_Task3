const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

app.get('/sarahtasnim99_gmail_com', (req, res) => {

    const{ x, y } = req.query;
    
    if(!/^\d+$/.test(x) || !/^\d+$/.test(y)) {
        return res.type('text').send('NaN');
    }
    const a = BigInt(x);
    const b = BigInt(y);

    if (a === 0n || b === 0n) {
        return res.type('text').send('NaN');
    }
    const lcm = a / gcd(a, b) * b;
    res.type('text').send(lcm);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});