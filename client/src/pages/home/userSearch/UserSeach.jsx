import './UserSearch.scss';
import Button from '@/components/button/Button';

const UserSearch = ({ search, onSearch }) => {
    const handleClear = () => onSearch('');

    return (
        <div className="user-search-wrapper">
            <h4 className="mb-1">User search:</h4>
            <div className="search-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by name…"
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
                {search && (
                    <Button 
                        className="btn-clear-search"
                        onClick={handleClear}
                        icon={{ name: "IconX", size: 16 }}
                    />
                )}
            </div>
        </div>
    );
};

export default UserSearch;
