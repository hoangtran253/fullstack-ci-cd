const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Backend! 🐳 CI/CD works!' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});