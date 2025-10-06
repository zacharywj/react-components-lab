import './WeatherForecast.css';

export default function WeatherForecast ({ day, img, imgAlt, conditions, time, }) {
    return (
    <>
    <h2>{day}</h2>
    <img src={img} alt={imgAlt} />
    <p><span>conditions: </span>{conditions}</p>
    <p><span>time: </span>{time}</p>
    </>    
    );
};


