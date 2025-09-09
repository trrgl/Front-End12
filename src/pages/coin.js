import { useEffect, useState } from "react";
import Chall1 from "./7secondstoglory";


export default function Coin() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchCoins() {
            let data = await fetch(`https://api.coinpaprika.com/v1/tickers`);
            let jsonData = await data.json();
            setData(jsonData);
        }
        fetchCoins();
    }, [])

    console.log(data);

    return (
        <div className="text-white min-h-screen">
            <div className="w-full h-full p-6">
                <div className="flex items-center w-full h-16 border-b border-gray-400 text-gray-200 font-medium text-lg px-2">
                    <div className="w-1/3">Name</div>
                    <div className="w-1/12 text-center">Price ($)</div>
                    <div className="w-1/12 text-center">1h</div>
                    <div className="w-1/12 text-center">24h</div>
                    <div className="w-1/12 text-center">7d</div>
                    <div className="w-1/6 text-center">Volume (24h)</div>
                    <div className="w-1/6 text-center">Market Cap</div>
                </div>
                {data.map((coin) => (
                    <div key={coin.rank} className="flex items-center w-full h-16 border-b border-gray-400 text-gray-200 font-medium text-md px-2">
                        <div className="w-1/3 flex items-end space-x-4">
                            <h1 className="text-xl text-blue-500 font-semibold hover:text-blue-300 cursor-pointer hover:underline">{coin.name}</h1>
                            <h1>{coin.symbol}</h1>
                        </div>
                        <div className="w-1/12 text-center">${coin.quotes.USD.price.toFixed(3)}</div>
                        {parseFloat(coin.quotes.USD.percent_change_1h) >= 0 ? <div className="w-1/12 text-center text-green-500">{coin.quotes.USD.percent_change_1h}%</div> : <div className="w-1/12 text-center text-red-500">{coin.quotes.USD.percent_change_1h}%</div>}
                        {parseFloat(coin.quotes.USD.percent_change_24h) >= 0 ? <div className="w-1/12 text-center text-green-500">{coin.quotes.USD.percent_change_24h}%</div> : <div className="w-1/12 text-center text-red-500">{coin.quotes.USD.percent_change_24h}%</div>}
                        {parseFloat(coin.quotes.USD.percent_change_7d) >= 0 ? <div className="w-1/12 text-center text-green-500">{coin.quotes.USD.percent_change_7d}%</div> : <div className="w-1/12 text-center text-red-500">{coin.quotes.USD.percent_change_7d}%</div>}
                        <div className="w-1/6 text-center">${coin.quotes.USD.volume_24h.toFixed(3)}</div>
                        <div className="w-1/6 text-center">${coin.quotes.USD.market_cap.toFixed(3)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}