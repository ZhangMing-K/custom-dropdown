import React, { useEffect, useReducer, useRef, useState } from 'react';
import './index.css';

const SearchableDropdown = ({ options, onSelect }) => {
	const [showOption, setShowOption] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOptions, setFilteredOptions] = useState(options);

	const dropdownRef = useRef(null);

	useEffect(() => {
		// Close dropdown when user clicks outside of it
		const handleOutsideClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setFilteredOptions(options);
				setSearchTerm('');
				setShowOption(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [options]);

	const handleSearch = (event) => {
		const value = event.target.value;
		setSearchTerm(value);

		const filtered = options.filter((option) =>
			option.toLowerCase().includes(value.toLowerCase())
		);
		setShowOption(true);
		setFilteredOptions(filtered);
	};

	const handleSelect = (option) => {
		setSearchTerm('');
		onSelect(option);
		setShowOption(false);
	};

	const handleCancel = () => {
		setSearchTerm('');
		setShowOption(false);
	};

	return (
		<div className='searchable-dropdown' ref={dropdownRef}>
			<div class='inputWithButton'>
				<input
					type='text'
					placeholder='Search...'
					value={searchTerm}
					onChange={handleSearch}
					onFocus={handleSearch}
				/>
				{showOption && (
					<button
						className='btn-cancel'
						onClick={handleCancel}
						variant='outline-secondary'
					>
						❌
					</button>
				)}
			</div>
			{showOption && (
				<ul>
					{filteredOptions.length === 0 && (
						<li className='option-unavailable'> No option available</li>
					)}
					{filteredOptions.map((option, index) => (
						<li key={index} onClick={() => handleSelect(option)}>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchableDropdown;
