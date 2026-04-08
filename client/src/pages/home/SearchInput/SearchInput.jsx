import { useState, useEffect } from "react";
import Icon from '@/components/icons/Icon';

import './SearchInput.scss'

const SearchInput = ({
    value,
    onChange,
    placeholder = "Search...",
    debounce = 0,
}) => {
    const [internalValue, setInternalValue] = useState(value || "");

    // Sync external value
    useEffect(() => {
        setInternalValue(value || "");
    }, [value]);

    // Debounce logic
    useEffect(() => {
        if (!debounce) return;

        const timeout = setTimeout(() => {
            onChange(internalValue);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [internalValue, debounce, onChange]);

    const handleChange = (e) => {
        const val = e.target.value;
        setInternalValue(val);

        if (!debounce) {
            onChange(val);
        }
    };

    const handleClear = () => {
        setInternalValue("");
        onChange("");
    };

    return (
        <div className="search">
            <span className="search-icon">
                <Icon name="IconMagnifyingGlass" size={16} />
            </span>

            <input
                type="text"
                placeholder={placeholder}
                value={internalValue}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Escape") handleClear();
                }}
                className="search-input"
            />

            {internalValue && (
                <button
                    className="search-clear"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleClear}
                    aria-label="Clear search"
                >
                    <Icon name="IconX" size={16} />
                </button>
            )}
        </div>
    );
};

export default SearchInput;


{/* <SearchInput
    value={search}
    onChange={(val) => setSearch(val)}
    debounce={300}
/> */}