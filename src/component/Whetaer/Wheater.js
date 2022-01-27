import {React,useState,useEffect} from 'react'

function Wheater() {
    const iconURL = "http://openweathermap.org/img/w/";
    const [wheatering, setWheater] = useState([]);
    useEffect(() => {
        const getWheater = async() => {
            let wheaters = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Baku&appid=94c75c30519d5f894f8a99aae09b5d54&units=metric`).then(a=>a.json())
            setWheater(wheaters);
        }
        getWheater();
    },[])
    return (
        <div>
        </div>
    )
}

export default Wheater
