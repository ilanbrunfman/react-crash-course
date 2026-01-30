import { useMemo } from 'react';


// Filter user search
export const useUserFilter = (users, search) => {
    return useMemo(() => {
        if (!search) return users;

        const term = search.toLowerCase();

        return users.filter(user =>
            user.firstName?.toLowerCase().includes(term) ||
            user.lastName?.toLowerCase().includes(term) ||
            user.email?.toLowerCase().includes(term) ||
            user.type?.toLowerCase().includes(term)
        );
    }, [users, search]);
};


// sort users by fullname abc
export const useUserSort = (users) => {
    return useMemo(() => {
        return [...users].sort((a, b) => {
            const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
            const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }, [users]);
};
