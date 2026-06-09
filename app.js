const express = require('express');
const app = express();
const port = 3000;

app.get('/sarahtasnim99_gmail_com', (req, res) => {

    let x = Number(req.query.x);
    let y = Number(req.query.y);
    
    if(!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return res.type(text).send('NaN');
    } 
    
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = (x * y) / gcd(x, y);
    res.type('text').send(String(lcm));
});

app.listen(3000, () => console.log('Server running'));