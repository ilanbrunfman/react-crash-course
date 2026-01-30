import { useMemo } from 'react';

export const useUserSort = (users) => {
    return useMemo(() => {
        return [...users].sort((a, b) => {
            const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
            const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }, [users]);
};
