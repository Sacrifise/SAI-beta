import React from "react";
import { useEffect, useState } from "react";

const ContainerWeather = () => {
    const [pogoda, setPogoda] = useState(false);
    useEffect(() => {
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=barnaul';
        const options = {
            method: 'GET',
            headers: {
                    'x-rapidapi-key': '1683d62ab0msh32b82388bbf2e0ap1e8162jsn839af447016e',
                    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        fetch(url, options).then(response => response.json()).then(json => setPogoda(json.current.dewpoint_c));

    }, []);

    return(
        <div className = 'container-item'>
            Barnaul
            <img className='imgweather op' src='https://yastatic.net/weather/i/icons/funky/dark/ovc_-sn.svg'></img>
            {pogoda}
        </div>
    )
}

export default ContainerWeather;