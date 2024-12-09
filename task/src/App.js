import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
	const [count, setCount] = useState(0);
	const todayYear = new Date().getFullYear();

	const handleClick = () => {
		setCount(count + 1);
	};

	return createElement(
		"div",
		{}, // общий div
		createElement(
			"div",
			{}, // dvi для лого
			createElement(
				"a",
				{ href: "https://vite.dev", target: "_blank" },
				createElement("img", {
					src: viteLogo,
					className: "logo",
					alt: "Vite logo",
				})
			),
			createElement(
				"a",
				{ href: "https://react.dev", target: "_blank" },
				createElement("img", {
					src: reactLogo,
					className: "logo react",
					alt: "React logo",
				})
			)
		),
		createElement("h1", {}, "Vite + React"),
		createElement(
			"div",
			{ className: "card" },
			createElement(
				"button",
				{ onClick: handleClick },
				"count is ",
				createElement("span", {}, count)
			)
		),
		createElement(
			"div",
			{ className: "card" },
			createElement("p", {}, "today year: ", todayYear)
		)
	);
}
