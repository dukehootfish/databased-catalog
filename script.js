/*const PERSONAL_ACCESS_TOKEN = 'patFPhQ2NCGDqLUJR.14c2310f47d18237673940cc7428eeec8d471ffbb4510d81d099aeec97c48fae';
const BASE_ID = 'appHQzwgShaDAx9Aw';

const bookList = document.getElementById('bookList');

async function fetchBooks() {
    try {
        const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Books`, {
            headers: {
                Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
            },
        });
        const data = await response.json();

        data.records.forEach((record) => {
            const book = record.fields;
            const li = document.createElement('li');
            li.innerHTML = `<strong>${book.Title}</strong> by ${book.Author} (${book.Genre})`;
            bookList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchBooks();// JavaScript source code */
const BASE_ID = 'appHQzwgShaDAx9Aw';
const TABLE_NAME = 'Books';
const API_KEY = 'patFPhQ2NCGDqLUJR.14c2310f47d18237673940cc7428eeec8d471ffbb4510d81d099aeec97c48fae';

const app = document.getElementById('app');

async function fetchBooks() {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?view=Grid%20view`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();

    renderBooks(data.records);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderBooks(records) {
  const booksContainer = document.createElement('div');
  booksContainer.classList.add('books-container');

  records.forEach((record) => {
    const book = record.fields;
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <img src="${book.Image[0].url}" alt="${book.Title}" class="book-image">
      <h2>${book.Title}</h2>
      <p>${book.Author}</p>
    `;
    booksContainer.appendChild(bookCard);
  });

  app.appendChild(booksContainer);
}

fetchBooks();
