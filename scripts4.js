
const PERSONAL_ACCESS_TOKEN = 'patFPhQ2NCGDqLUJR.14c2310f47d18237673940cc7428eeec8d471ffbb4510d81d099aeec97c48fae';
const airtableBaseId = 'appHQzwgShaDAx9Aw';

async function fetchProducts() {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/Comps`, {
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

// ... (previous code)

async function displayProducts() {
  const products = await fetchProducts();

  const productContainer = document.getElementById('product-list');

  products.forEach(product => {
    const { Name, ImageUrl, Link } = product.fields;

    const productCard = document.createElement('div');
    productCard.classList.add('col-md-6', 'col-lg-4');
    productCard.id = 'cat-box';

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card', 'border-0');
    cardWrapper.style.background = 'rgba(255, 255, 255, 0)';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'cat-card-body');

    const productNameLink = document.createElement('a');
    productNameLink.id = 'cat-name';
    productNameLink.innerHTML = `<strong>${Name}</strong>`;
    cardBody.appendChild(productNameLink);

    cardWrapper.appendChild(cardBody);

    const productImage = document.createElement('img');
    productImage.classList.add('imageicon');
    productImage.src = ImageUrl;

    const linkButton = document.createElement('a');
    linkButton.classList.add('btn', 'btn-primary', 'btn-sm');
    linkButton.role = 'button';
    linkButton.id = 'link_button';
    linkButton.href = Link;
    linkButton.textContent = 'לרשימת הספקים >';

    productCard.appendChild(cardWrapper);
    productCard.appendChild(productImage);
    productCard.appendChild(linkButton);

    productContainer.appendChild(productCard);
  });
}

displayProducts();
