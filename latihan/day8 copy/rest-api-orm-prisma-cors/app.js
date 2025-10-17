const express = require('express');
const router = require('./src/routes/main');
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})