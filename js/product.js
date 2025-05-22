const product = { title: 'New Product', price: 29.99 };
fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
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