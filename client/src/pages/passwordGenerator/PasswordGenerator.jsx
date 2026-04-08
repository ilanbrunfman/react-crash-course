import { useState, useMemo } from 'react';

import SearchInput from '@/pages/home/SearchInput/SearchInput';

import './PasswordGenerator.scss'

const PasswordGenerator = () => {

    const [search, setSearch] = useState('');

    

    const filteredUsers = useMemo(() => {
        const USERS = [
            { name : 'ilan' },
            { name : 'gilad' },
            { name : 'chen' },
        ]
        
        const searchValue = search.toLowerCase();

        return USERS.filter(user =>
            user.name.toLowerCase().includes(searchValue)
        );
    }, [search])
    
    return(
        <div className="password-generator">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-2 mb-2">
                            <div className="container-main d-flex align-items-center justify-between">
                                
                                <h1 className='mb-2'>Password Generator</h1>

                                <SearchInput
                                    value={search}
                                    onChange={setSearch}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-2 mb-2">
                            <div className="container-main">
                                
                                { filteredUsers.map(item =>  (
                                    <div className="" key={item.name}>
                                        <h2>{item.name}</h2>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PasswordGenerator;