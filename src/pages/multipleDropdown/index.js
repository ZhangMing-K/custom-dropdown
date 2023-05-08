import SelectableDropdown from '../../components/dropdown';
import { useState } from 'react';

function MultipleDropdown() {
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
				multiple
			/>
			<div>
				Selected options : &nbsp;
				{selectedOption ? selectedOption.join(',') : 'No option '}
			</div>
		</div>
	);
}

export default MultipleDropdown;
