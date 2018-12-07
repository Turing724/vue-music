'use strict';
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8083;

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

const apiRoutes = express.Router();
// console.log(apiRoutes);

apiRoutes.get('/getDiscList', (req, res) => {
  // console.log('req', req);
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';
  axios
    .get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(e => {
      console.log(e);
    });
});
app.use('/api', apiRoutes);

module.exports = app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http:localhost:' + port + '\n');
});
