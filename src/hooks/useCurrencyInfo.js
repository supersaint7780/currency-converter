// we keep file this name as a js extension
// because it is generally a good practice since hook in most cases return js
// jsx is preferred is you are returnig a lot jsx value

// hooks name genrally start with use to have considtency with
// other react hooks

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((currencyObject) => setData(currencyObject[currency]));
    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;