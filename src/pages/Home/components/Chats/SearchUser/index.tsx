import React, { useEffect, useState } from 'react';
import useDebounce from '../../../../../hooks/useDebounce';

interface SearchUserProps {
    onSearch: (value: string) => void
}

const SearchUser: React.FC<SearchUserProps> = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState<string>('')
    const debounced = useDebounce(searchValue)

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    useEffect(() => {
        onSearch(debounced);
    }, [debounced])
    

    return ( 
        <input 
            className='search-input'
            type="text" 
            placeholder='Search...'
            value={searchValue} 
            onChange={changeHandler} 
        />
    );
}
 
export default SearchUser;
