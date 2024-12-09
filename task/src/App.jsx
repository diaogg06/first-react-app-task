import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
	const [count, setCount] = useState(0); // декларативный стиль
	const todayYear = new Date().getFullYear(); // императивный стиль

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
					{/* императивный стиль  */}
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						/* императивный стиль  */
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					{/* декларативный стиль строчка сверху */}
					count is {count}
				</button>
			</div>
			<p className="read-the-docs">today year: {todayYear}</p>
			{/* императивный стиль строчка сверху*/}
		</>
	);
}
