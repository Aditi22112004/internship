import express from 'express';

const app = express();

//app.get()
//app.put()
//app.post()
//app.delete()
app.get ('/api/user', (req, res) => {
    res.json({message: 'Hello from the backend!'});
    });
    const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);})
    












// import http from 'http';

//  http
//  .createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');

// }).listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

