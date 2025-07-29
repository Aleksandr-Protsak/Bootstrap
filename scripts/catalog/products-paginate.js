const getPages = () => {
    const totalPages = Math.ceil(catalogState.productsList.length / catalogState.itemsPerPage);
    return [...Array(totalPages).keys()].map(k => k + 1);
}

const catalogPaginateNavEl = document.getElementById('catalogPaginateNav');

const renderPaginationNavElements = (currPage) => {
    catalogPaginateNavEl.innerHTML = '';
    const pages = getPages(); 
    const totalPages = pages.length;

    const prevBtn = document.createElement('li');
    prevBtn.className = `page-item ${currPage === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = `<a class="page-link"><span>&laquo;<span></a>`;
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(currPage > 1) {
            updateQueryParam('page', currPage - 1);
            render(currPage - 1, true);
        }
    });

    catalogPaginateNavEl.appendChild(prevBtn);

    for(const pageNumber of pages) {
        const pageBtn = document.createElement('li');
        pageBtn.className = `page-item ${pageNumber === currPage ? 'active' : '' }`;
        pageBtn.innerHTML = `<a class="page-link"><span>${pageNumber}<span></a>`;
        pageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateQueryParam('page', pageNumber);
            render(pageNumber, true);
        });

        catalogPaginateNavEl.appendChild(pageBtn);  
    }

    const nextBtn = document.createElement('li');
    nextBtn.className = `page-item ${currPage === totalPages ? 'disabled' : ''}`;
    nextBtn.innerHTML = `<a class="page-link"><span>&raquo;<span></a>`;
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(currPage < totalPages) {
            updateQueryParam('page', currPage + 1);
            render(currPage + 1, true);
        }
    });

    catalogPaginateNavEl.appendChild(nextBtn);
};

const getCurrentPage = () => {
    const queryParams = getQueryParam();
    const page = queryParams.page ?? 1;
    
    return Number(page)
}

const render = (page, dispatchEvent) => { 
    const start = (page - 1) * catalogState.itemsPerPage;
    const end = start + catalogState.itemsPerPage;
    const pageProducts = catalogState.productsList.slice(start, end);

    renderPaginationNavElements(page);

    if(dispatchEvent) {
        const productsListChanged = new CustomEvent('productsListChanged', { detail: { products: pageProducts } });
        document.dispatchEvent(productsListChanged);
    }
};

render(getCurrentPage(), true);

document.addEventListener('rerenderPaginate', () => {
    render(1, false);
})

