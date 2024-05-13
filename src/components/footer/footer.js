import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?lat=55,7522&lon=37,6156 $units=metric&lang=ru&appid=752d17e5b0e2f7fb7038e8dbe4d992e7').then((res) => res.json()).then(({name, main, weather}) => {
			setCity(name);
			setTemperature(Math.round(main.temp).toString());
			setWeather(weather[0].description)
		});
	}, []);

	return (
		<footer className={className}>
			<div>
				<div>Блог Геллы Грачёвой</div>
				<div>Gella@mail.ru</div>
			</div>
			<div>
				<div>{city}, {new Date().toLocaleString('ru', {day: "numeric", month: "long" })}</div>
				<div>{temperature} градусов, {weather}</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #ffffff;
	box-shadow: 0 2px 17px #000000;
	font-weight: bold;
`;
