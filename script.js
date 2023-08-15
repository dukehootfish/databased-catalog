const PERSONAL_ACCESS_TOKEN = 'patFPhQ2NCGDqLUJR.14c2310f47d18237673940cc7428eeec8d471ffbb4510d81d099aeec97c48fae';
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

fetchBooks();// JavaScript source code
