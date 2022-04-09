const express = require('express');
const app = express();
app.get('/',(req, res)=>{
  res.send('A Simple Web App .....')
})

app.listen(8080,()=>{
  console.log('danado runnig on port 8080')
})
