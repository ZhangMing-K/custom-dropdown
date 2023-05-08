import React, { useEffect, useReducer, useRef, useState } from 'react';
import './index.css';

const SearchableDropdown = ({ multiple = false, options, onSelect }) => {
	const [showOption, setShowOption] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOptions, setFilteredOptions] = useState(options);

	const [selectedItems, setSelectedItems] = useState([]);

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
		let filtered = options.filter((option) =>
			option.toLowerCase().includes(value.toLowerCase())
		);

		if (multiple) {
			filtered = filtered.filter((option) => !selectedItems.includes(option));
		}
		console.log('handle search: ', value, filtered);
		setSearchTerm(value);
		setShowOption(true);
		setFilteredOptions(filtered);
	};

	const handleSelect = (option) => {
		setSearchTerm('');

		if (multiple) {
			const updatedSelectedItems = [...selectedItems, option];
			setSelectedItems(updatedSelectedItems);
			const excludedOptions = filteredOptions.filter(
				(item) => item !== option && !selectedItems.includes(item)
			);
			onSelect(updatedSelectedItems);
			setFilteredOptions(excludedOptions);
		} else {
			setFilteredOptions(options);
			onSelect(option);
		}

		setShowOption(false);
	};

	const handleCancel = () => {
		setSearchTerm('');
		setShowOption(false);
	};

	const handleCancelAdded = (option) => {
		if (multiple) {
			const excludedOptions = selectedItems.filter((item) => item !== option);
			setSelectedItems(excludedOptions);
			setFilteredOptions([...filteredOptions, option]);
			onSelect(excludedOptions);
		}
	};

	return (
		<div className='searchable-dropdown' ref={dropdownRef}>
			<div className='inputWithButton'>
				{selectedItems.length > 0 && (
					<div className='added-items'>
						{selectedItems.map((selectedItem) => (
							<div className='added-item-container'>
								<button
									key={selectedItem}
									className='btn-added-item'
									onClick={() => handleCancelAdded(selectedItem)}
									variant='outline-secondary'
								>
									{selectedItem}
								</button>
								<button
									className='added-btn-cancel'
									onClick={() => handleCancelAdded(selectedItem)}
									variant='outline-secondary'
								>
									❌
								</button>
							</div>
						))}
					</div>
				)}
				<div className='input-wrapper'>
					<input
						type='text'
						placeholder='Search...'
						value={searchTerm}
						onChange={handleSearch}
						onFocus={handleSearch}
					/>

					{showOption && (
						<div className='close-container'>
							<button
								className='btn-cancel'
								onClick={handleCancel}
								variant='outline-secondary'
							>
								❌
							</button>
						</div>
					)}
				</div>
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
