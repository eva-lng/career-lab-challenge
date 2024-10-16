import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { ImageDetailsPage } from './ImageDetailsPage';
import './App.css';

export function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<ImageDetailsPage />} path="/artwork/:id" />
				</Routes>
			</Router>
		</div>
	);
}
