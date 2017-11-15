var bookNew = {
"id": 1,
"title": "the new title"
"author": "Semore Words"
"price": "100 billion dollars"
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
