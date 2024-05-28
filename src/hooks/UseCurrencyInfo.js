import { useEffect, useState } from "react";

 function UseCurrencyInfo(currency='usd') {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(
            ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        ).then((res) => res.json()).then((res) =>
            setData(res[currency])
        )
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default UseCurrencyInfo;
