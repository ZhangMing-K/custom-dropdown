import logo from './logo.svg';
import './App.css';
import SelectableDropdown from './components/dropdown';
import { useState } from 'react';

function App() {
	const options = ['option1', 'option2', 'option3', 'test1', 'test2', 'test3'];

	const [selectedOption, setSelectedOption] = useState(null);
	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<div>My custom dropdown component</div>
				<SelectableDropdown
					options={options}
					label={'Select an option'}
					onSelect={handleOptionClick}
				/>
				<div>
					Selected option is : &nbsp;
					{selectedOption ? selectedOption : 'No option '}
				</div>
			</header>
		</div>
	);
}

export default App;
