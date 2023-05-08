import logo from './logo.svg';
import './App.css';
import SelectableDropdown from './components/dropdown';
import { useState } from 'react';
import SingleDropdown from './pages/singleDropdown';
import MultipleDropdown from './pages/multipleDropdown';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='App-header-separator'>
					<div>Single dropdown test multiple = false</div>
					<SingleDropdown />
				</div>
				<div className='App-header-separator'>
					<div>Multiple dropdown test multiple = true</div>
					<MultipleDropdown />
				</div>
			</header>
		</div>
	);
}

export default App;
