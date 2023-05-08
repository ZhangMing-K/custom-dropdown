import SelectableDropdown from '../../components/dropdown';
import { useState } from 'react';

function SingleDropdown() {
	const options = ['option1', 'option2', 'option3', 'test1', 'test2', 'test3'];

	const [selectedOption, setSelectedOption] = useState(null);
	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	return (
		<div>
			<SelectableDropdown
				options={options}
				label={'Select an option'}
				onSelect={handleOptionClick}
			/>
			<div>
				Selected option is : &nbsp;
				{selectedOption ? selectedOption: 'No option '}
			</div>
		</div>
	);
}

export default SingleDropdown;
