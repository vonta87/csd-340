const books = ["Bible","Flat Stanley","Dairy Of a Wimpy Kid","Narnia Chronicles","Doom",
"The Giver","Outlier","Can't Hurt","The Power of Discipline","The Winning Attitude"];



 function displayBooks(order) {
      const bookList = document.getElementById('list');
      bookList.innerHTML = '';

      const sortedBooks = order === 'asc' ? [...books].sort() : [...books].sort().reverse();
      
      sortedBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
      });
    }