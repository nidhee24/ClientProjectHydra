import react,{createContext} from 'react';

const AuthContext = createContext({isLoggedIn: false});

export default AuthContext;