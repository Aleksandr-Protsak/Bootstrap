const headerSearchInput = document.getElementById('header-search-input');
const headerSearchButton = document.getElementById('header-search-btn');

const searchProducts = () => {
    const searchValue = headerSearchInput.value;
    let results = [...products];

    if(searchValue?.length) {
        results = results.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    const productsListChanged = new CustomEvent('productsListChanged', { detail: { products: results } });
    document.dispatchEvent(productsListChanged);
}

headerSearchButton.addEventListener('click', () => {
    searchProducts();
});

headerSearchInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault();
        searchProducts();
    }
})
