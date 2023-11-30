const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./router/userRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user/', userRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
