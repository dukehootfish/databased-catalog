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
const PERSONAL_ACCESS_TOKEN = 'patFPhQ2NCGDqLUJR.14c2310f47d18237673940cc7428eeec8d471ffbb4510d81d099aeec97c48fae';
const airtableBaseId = 'appHQzwgShaDAx9Aw';

async function fetchProducts() {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/Products`, {
      headers: {
        Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();
    return data.records;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

async function displayProducts() {
  const products = await fetchProducts();

  const productContainer = document.getElementById('product-list');

  products.forEach(product => {
    const { Name, Description, ImageUrl } = product.fields;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = ImageUrl;
    image.alt = Name;

    const name = document.createElement('h2');
    name.textContent = Name;

    const description = document.createElement('p');
    description.textContent = Description;
      
    productCard.appendChild(name);
    productCard.appendChild(image);
    productCard.appendChild(description);

    productContainer.appendChild(productCard);
  });
}

displayProducts();
