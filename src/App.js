import logo from './logo.svg';
import './App.css';
import SelectableDropdown from './components/dropdown';
import { useState } from 'react';
import SingleDropdown from './pages/singleDropdown';
import MultipleDropdown from './pages/multipleDropdown';

function App() {
	const options = ['option1', 'option2', 'option3', 'test1', 'test2', 'test3'];

	const [selectedOption, setSelectedOption] = useState(null);
	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				{/* <SelectableDropdown
					options={options}
					label={'Select an option'}
					onSelect={handleOptionClick}
					multiple
				/>
				<div>
					Selected options  : &nbsp;
					{selectedOption ? selectedOption.join(',') : 'No option '}
				</div> */}
				<SingleDropdown />
				<MultipleDropdown />
			</header>
		</div>
	);
}

export default App;
