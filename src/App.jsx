import "./App.css";
import "./assets/css/res_styles.css";
import Header from "./components/layouts/Header";
import Wrapper from "./components/layouts/Wrapper";
import Footer from "./components/layouts/Footer";

function App() {
	return (
		<>
			<main className="main" id="top">
				<Header />
				<Wrapper />
				<Footer />
			</main>
		</>
	);
}

export default App;
