import { UserContext } from './UserContext';

const user = {
    id: 134,
    name: 'Sergio Ferrer',
    email: 'sergio@gmail.com',
};

export const UserProvider = ({ children }) => {
    return <UserContext.Provider value={{ hola: 'mundo', user: user }}>{children}</UserContext.Provider>;
};
