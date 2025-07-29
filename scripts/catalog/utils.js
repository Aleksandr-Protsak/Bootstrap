const updateQueryParam = (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);

    const relativeUrl = url.pathname + url.search + url.hash;

    window.history.pushState(null, '', relativeUrl);
}

const deleteQueryParam = (key) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);

    const relativeUrl = url.pathname + url.search + url.hash;

    window.history.replaceState(null, '', relativeUrl);
}

const getQueryParam = () => {
    const searchString = window.location.search;
    const urlParams = new URLSearchParams(searchString);
    const params = {}

    for(const [key, value] of urlParams.entries()){
        params[key] = value;
    }

    return params;
}
