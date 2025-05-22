const cart = { userId: 1, products: [{ id: 1 }] };
fetch('https://fakestoreapi.com/carts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cart)
})
  .then(response => response.json())
  .then(data => console.log(data));

[
  {
    "id": 0,
    "userId": 0,
    "products": [
      {
        "id": 0,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
      }
    ]
  }
]