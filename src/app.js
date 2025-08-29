require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const express = require('express');
const cors = require('cors');
const bfhlRoutes = require('./routes/bfhl.routes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.use('/bfhl', bfhlRoutes);
app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'vit-bfhl-api', routes: ['POST /bfhl'] });
});


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`BFHL API running on http://localhost:${PORT}`);
  });
}
module.exports = app;
