const products = [
    {
      "id": 1,
      "img": "./images/headphones.webp",
      "title": "Wireless Bluetooth Headphones",
      "description": "High-quality noise-cancelling over-ear headphones.webp with 30-hour battery life.",
      "price": 79.99,
      "seller": "AudioMax"
    },
    {
      "id": 2,
      "img": "./images/bottle.webp",
      "title": "Stainless Steel Water Bottle",
      "description": "Insulated bottle keeps drinks cold for 24 hours or hot for 12 hours.",
      "price": 18.5,
      "seller": "HydroPlus"
    },
    {
      "id": 3,
      "img": "./images/powerbank.webp",
      "title": "Portable Phone Charger 10000mAh",
      "description": "Slim power bank with dual USB ports and fast charging.",
      "price": 25.0,
      "seller": "PowerCore"
    },
    {
      "id": 4,
      "img": "./images/bulb.webp",
      "title": "Smart LED Light Bulb",
      "description": "Wi-Fi controlled color changing bulb compatible with Alexa and Google Home.",
      "price": 12.99,
      "seller": "BrightHome"
    },
    {
      "id": 5,
      "img": "./images/chair.webp",
      "title": "Ergonomic Office Chair",
      "description": "Adjustable lumbar support and breathable mesh back for all-day comfort.",
      "price": 149.0,
      "seller": "ErgoComfy"
    },
    {
      "id": 6,
      "img": "./images/mug.webp",
      "title": "Ceramic Coffee Mug",
      "description": "12oz microwave-safe mug with a fun design and sturdy handle.",
      "price": 9.75,
      "seller": "MugWorld"
    },
    {
      "id": 7,
      "img": "./images/headphones.webp",
      "title": "USB-C to HDMI Adapter",
      "description": "Stream 4K video from your laptop to TV or monitor with ease.",
      "price": 16.99,
      "seller": "TechGear"
    },
    {
      "id": 8,
      "img": "./images/headphones.webp",
      "title": "Adjustable Dumbbells Set",
      "description": "Pair of adjustable weights ranging from 5 to 25 lbs each.",
      "price": 89.95,
      "seller": "FitStrong"
    },
    {
      "id": 9,
      "img": "./images/headphones.webp",
      "title": "Cotton Bed Sheet Set",
      "description": "Soft and breathable 4-piece set for queen-sized beds.",
      "price": 34.99,
      "seller": "CozyNest"
    },
    {
      "id": 10,
      "img": "./images/headphones.webp",
      "title": "Pet Grooming Brush",
      "description": "Easy-clean brush for dogs and cats, removes loose fur efficiently.",
      "price": 13.45,
      "seller": "PawPal"
    },
    {
      "id": 11,
      "img": "./images/headphones.webp",
      "title": "Digital Alarm Clock",
      "description": "LED display with dimmer, USB charger, and backup battery.",
      "price": 21.0,
      "seller": "WakeRight"
    },
    {
      "id": 12,
      "img": "./images/headphones.webp",
      "title": "Laptop Stand Adjustable",
      "description": "Foldable aluminum stand with cooling design and height settings.",
      "price": 29.99,
      "seller": "DeskEssentials"
    },
    {
      "id": 13,
      "img": "./images/headphones.webp",
      "title": "Non-Stick Frying Pan 10-inch",
      "description": "Durable aluminum pan with ergonomic handle and even heat distribution.",
      "price": 24.95,
      "seller": "CookSmart"
    },
    {
      "id": 14,
      "img": "./images/headphones.webp",
      "title": "Wireless Gaming Mouse",
      "description": "RGB lighting, adjustable DPI, and ergonomic design for gamers.",
      "price": 39.49,
      "seller": "ClickZone"
    },
    {
      "id": 15,
      "img": "./images/headphones.webp",
      "title": "Yoga Mat with Carry Strap",
      "description": "Extra thick and non-slip mat ideal for all fitness levels.",
      "price": 22.89,
      "seller": "ZenGear"
    },
    {
      "id": 16,
      "img": "./images/headphones.webp",
      "title": "Magnetic Car Phone Mount",
      "description": "360-degree rotation and strong magnetic hold for smartphones.",
      "price": 11.99,
      "seller": "AutoSnap"
    },
    {
      "id": 17,
      "img": "./images/headphones.webp",
      "title": "Kitchen Knife Set 6-Piece",
      "description": "Includes chef's knife, paring knife, and more with wooden block.",
      "price": 58.25,
      "seller": "SharpEdge"
    },
    {
      "id": 18,
      "img": "./images/headphones.webp",
      "title": "LED Desk Lamp",
      "description": "Touch control with 3 brightness levels and USB charging port.",
      "price": 27.3,
      "seller": "LiteZone"
    },
    {
      "id": 19,
      "img": "./images/headphones.webp",
      "title": "Bluetooth Shower Speaker",
      "description": "Waterproof speaker with suction cup and built-in microphone.",
      "price": 19.99,
      "seller": "SoundSplash"
    },
    {
      "id": 20,
      "img": "./images/headphones.webp",
      "title": "Mini Projector for Home Theater",
      "description": "1080p supported portable projector with HDMI and USB input.",
      "price": 99.99,
      "seller": "VisionBeam"
    }
  ];

  const catalogState = {
    itemsPerPage: 9,
    pageProducts: products,
    productsList: products,
  }

  const cardElClass = 'card';
  const showProductDetailEventName = 'showProductDetail';

  const renderProductsList = (productsList) => {
    const html = [];
    const limitProducts = productsList.slice(0, catalogState.itemsPerPage);
    catalogState.pageProducts = limitProducts;
    
    for(const product of limitProducts) {
        html.push(`
        <div class="col">
            <div class="${cardElClass} shadow-sm h-100" data-app-product-id="${product.id}">
                <div class="card-img-block">
                    <img src="${product.img}" class="card-img-top" />
                </div>
    
                <div class="card-body d-flex flex-column justify-content-between gap-3">
                    <div>
                        <h3 class="card-title fs-18">${product.title}</h3>
                        <p class="card-text fs-16">${product.description}</p>
                    </div>
    
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small class="text-muted">${product.seller}</small>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
    
    const catalogProductsElement = document.getElementById('catalogProducts');
    catalogProductsElement.innerHTML = html.join('');
  }

  document.addEventListener('productsListChanged', (event) => {
    const productsList = event.detail.products;
    renderProductsList(productsList);
    updateCardListeners();

    if(event.detail.origin === 'filters') {
      catalogState.productsList = productsList;

      const rerenderPaginateEvent = new CustomEvent('rerenderPaginate');
      document.dispatchEvent(rerenderPaginateEvent);
    }
  });
