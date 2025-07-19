import { useState,useEffect,useCallback, use } from "react";

function useCurrencyInfo(currency){
    const [currencyInfo, setCurrencyInfo] = useState(null);
    useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        setCurrencyInfo(data);
    });
    } ,[currency]);
    return currencyInfo;
}

export default useCurrencyInfo;



