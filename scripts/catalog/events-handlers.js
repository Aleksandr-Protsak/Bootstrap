const cardElements = document.getElementsByClassName(cardElClass);
const showProductDetailEventName = 'showProductDetail';

for(const cardElement of cardElements) {
    cardElement.addEventListener('click', (event) => {
        const targetElement = event.target;
        const parentNode = targetElement.closest('[data-app-product-id]');
        const productId = Number(parentNode.dataset.appProductId);

        if(!productId) throw Error('Product id is undefined');

        const targetProductData = products.find(p => p.id === productId);

        if(!targetProductData) throw Error('Product data is not found');

        const showProductDetailEvent = new CustomEvent(showProductDetailEventName, { detail: targetProductData });
        document.dispatchEvent(showProductDetailEvent);
    });
}