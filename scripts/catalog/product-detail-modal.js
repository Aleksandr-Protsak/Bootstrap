const getModalHTML = (product, modalId) =>    
    `<div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">${product.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex flex-column flex-md-row">
            <div class="col-md-5 text-center mb-3 mb-md-0">
                <img src="${product.img}" class="img-fluid rounded shadow-sm" alt="Product Image">
            </div>
            <div class="col-md-7 ps-md-4">
                <p class="mb-3"><strong>Description:</strong> ${product.description}</p>
                <p class="mb-2"><strong>Price:</strong> <span class="text-success">$${product.price}</span></p>
                <p class="mb-0"><strong>Seller:</strong> ${product.seller}</p>
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
    `
const openProductDetailModal = (productId) => {
    const modalId = `productModal_${productId}`;
    const targetProductData = products.find(p => p.id === productId);

    if(!targetProductData) throw Error('Product data is not found');

    const modalHTML = getModalHTML(targetProductData, modalId);
    const modalWrapper = document.getElementById('modalsGeneralWrapper');

    modalWrapper.innerHTML = modalHTML;

    const productDetailModal = new bootstrap.Modal(document.getElementById(modalId));
    productDetailModal.show();
}

document.addEventListener(showProductDetailEventName, (event) => {
    const product = event.detail;

    openProductDetailModal(product.id);
    updateQueryParam('activeProductId', product.id);
});

document.addEventListener('hidden.bs.modal', (event) => {
    if(event.target.id.includes('productModal_')) {
        deleteQueryParam('activeProductId');
    }
});

const initialQueryParams = getQueryParam();

if(initialQueryParams.activeProductId) {
    openProductDetailModal(Number(initialQueryParams.activeProductId))
}
