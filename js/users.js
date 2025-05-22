const user = { username: 'john_doe', email: 'john@example.com', password: 'pass123' };
fetch('https://fakestoreapi.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(user)
})
  .then(response => response.json())
  .then(data => console.log(data));

  
[
  
    {
  "id": 0,
  "username": "string",
  "email": "string",
  "password": "string"
 }
]