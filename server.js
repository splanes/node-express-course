const express = require('express');
const app = express();

const mockUserData = [
  {
    name: 'Mark'
  },
  {
    name: 'Jill'
  }
]
app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

app.get('/users/:id', (request, response) => {
  const id = request.params.id;
  response.json({
    success: true,
		message: 'got one user',
		user: id
  })
})

app.listen(8000, function () {
  console.log("server is running")
})
