let cardElementsListener = [];

updateCardListeners = () => {
    const cardElements = document.getElementsByClassName(cardElClass);

    if(cardElementsListener.length) {
        cardElementsListener.forEach(element => {
            element.removeEventListener('click', element);
        });
        cardElementsListener = [];
    }

    for(const cardElement of cardElements) {
        cardElementsListener.push(cardElement);

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
}
