const express = require('express'); //modül
const qrcode = require('qrcode'); //modül

const app = express();

app.get('/qrcode', async (req, res) => { //kısa yol
  const data = req.query.data || 'Merhaba, Dünya!'; 

  try {
  
    const qrCodeDataUri = await qrcode.toDataURL(data);
    res.json({ qr: qrCodeDataUri });
  } catch (error) {
    res.status(500).json({ error: 'Başaramadık be abi..' });
  }
});

const port = 3000; //port
app.listen(port, () => {
  console.log(`https://localhost:${port} açık!`);
});
