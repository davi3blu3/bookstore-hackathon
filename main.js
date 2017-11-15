var book1 = {
  "id": 1,
  "title": "Girl with the Dragon Tattoo",
  "author": "Stieg Larsonn",
  "picture_url": "https://images.gr-assets.com/books/1327868566l/2429135.jpg",
  "price": 8.60,
  "description": "This is a great book about a girl with a tattoo of a dragon."
};

var book2 = {
  "id": 2,
  "title": "The life we bury",
  "author": "Allen Eskens",
  "picture_url": "https://images-na.ssl-images-amazon.com/images/I/51A4KkO7qzL._SX330_BO1,204,203,200_.jpg",
  "price": 12.39,
  "description": "College student Joe Talbert has the modest goal of completing a writing assignment for an English class. His task is to interview a stranger and write a brief biography of the person. With deadlines looming, Joe heads to a nearby nursing home to find a willing subject."
};

var bookNew = {
"id": 3,
"title": "the new title",
"author": "Semore Words",
"picture_url": "https://example.com",
"price": 100000000000,
"description": "Lots of stuff"
};

var insertText = `<div class="col-sm-6 book" id="book` + bookNew.id + `">
    <h1 class="title">` + bookNew.title + `</h1>
    <h2 class="author">` + bookNew.author + `</h2>
    <ul>
      <li class="price">` + bookNew.price + `</li>
      <li class="description">` + bookNew.description + `</li>
    </ul>
  </div>`;

 $("#bookAdd").append(insertText);



