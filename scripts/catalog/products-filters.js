const categoryFilters = [
    { "id": 1, "name": "Gadgets", "filtersAttributesId": 1 },
    { "id": 2, "name": "Outdoor Gear", "filtersAttributesId": 1 },
    { "id": 3, "name": "Furniture", "filtersAttributesId": 1 },
    { "id": 4, "name": "Stationery", "filtersAttributesId": 1 },
    { "id": 5, "name": "Musical Instruments", "filtersAttributesId": 1 },
    { "id": 6, "name": "Craft Supplies", "filtersAttributesId": 1 },
    { "id": 7, "name": "Footwear", "filtersAttributesId": 1 },
    { "id": 8, "name": "Health & Wellness", "filtersAttributesId": 1 },
    { "id": 9, "name": "Gaming", "filtersAttributesId": 1 },
    { "id": 10, "name": "Travel Accessories", "filtersAttributesId": 1 },
  
    { "id": 1, "name": "Zenith", "filtersAttributesId": 2 },
    { "id": 2, "name": "Nimbus", "filtersAttributesId": 2 },
    { "id": 3, "name": "Aurora", "filtersAttributesId": 2 },
    { "id": 4, "name": "Vertex", "filtersAttributesId": 2 },
    { "id": 5, "name": "Orion", "filtersAttributesId": 2 },
    { "id": 6, "name": "Cascade", "filtersAttributesId": 2 },
    { "id": 7, "name": "Solstice", "filtersAttributesId": 2 },
  
    { "id": 1, "name": "Alpha Traders", "filtersAttributesId": 3 },
    { "id": 2, "name": "BrightMart", "filtersAttributesId": 3 },
    { "id": 3, "name": "QuickSupply Co.", "filtersAttributesId": 3 },
    { "id": 4, "name": "UrbanDeals", "filtersAttributesId": 3 },
    { "id": 5, "name": "BlueSky Sellers", "filtersAttributesId": 3 },
    { "id": 6, "name": "MegaHub", "filtersAttributesId": 3 },
    { "id": 7, "name": "BestChoice", "filtersAttributesId": 3 },
    { "id": 8, "name": "ValuePoint", "filtersAttributesId": 3 },
    { "id": 9, "name": "SupplyStream", "filtersAttributesId": 3 },
    { "id": 10, "name": "TopLine Market", "filtersAttributesId": 3 },
    { "id": 11, "name": "DirectDepot", "filtersAttributesId": 3 },
    { "id": 12, "name": "AllGoods", "filtersAttributesId": 3 },
    { "id": 13, "name": "QuickBuyers" },
    { "id": 14, "name": "DealCrafters", "filtersAttributesId": 3 },
    { "id": 15, "name": "ShopSphere", "filtersAttributesId": 3 },
    { "id": 16, "name": "Prime Sellers", "filtersAttributesId": 3 },
    { "id": 17, "name": "MarketNova", "filtersAttributesId": 3 },
    { "id": 18, "name": "TradeWise", "filtersAttributesId": 3 },
    { "id": 19, "name": "BuyMore", "filtersAttributesId": 3 },
    { "id": 20, "name": "ShopSavvy", "filtersAttributesId": 3 }
  ];
  
  const filtersAttributes = [
    { id: 1, name: 'Category', slug: 'category' },
    { id: 2, name: 'Brand', slug: 'brand' },
    { id: 3, name: 'Seller', slug: 'seller' }
  ];

  const filtersFormEl = document.getElementById('filtersForm');

  const getCheckboxFilterHTML = (filterItems) => {
    const html = [];

    for(const filterItem of filterItems) {
        html.push(`
            <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">${filterItem.name}</label>
            </div>
        `)
    }

    return html.join('');
  }

  const filtersHTML = [];

for(const filter of filtersAttributes) {
    const checkboxesGroup = categoryFilters.filter(cf => cf.filtersAttributesId === filter.id);

    filtersHTML.push(`
        <fieldset class="mb-4">
            <h6>${filter.name}</h6>
            ${getCheckboxFilterHTML(checkboxesGroup)}
        </fieldset>
    `);
}

filtersFormEl.insertAdjacentHTML('afterbegin', filtersHTML.join(''));
