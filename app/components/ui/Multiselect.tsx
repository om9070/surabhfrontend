import React from 'react';
import Select from 'react-select';

interface MultiSelectProps {
    options: { label: string; value: string }[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    width?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
    options,
    selectedValues,
    onChange,
    placeholder = "Please select",
    width = "w-full"
}) => {
    const handleChange = (selectedOptions: any) => {
        // Extract values from the selected options and update the state
        const values = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
        onChange(values);
    };

    // Map selected values to the format required by react-select
    const selectedOptions = options.filter(option => selectedValues.includes(option.value));

    return (
        <div className={width}>
            <Select
                value={selectedOptions}
                onChange={handleChange}
                options={options}
                isMulti
                placeholder={placeholder}
                classNamePrefix="react-select"
            />
        </div>
    );
};
