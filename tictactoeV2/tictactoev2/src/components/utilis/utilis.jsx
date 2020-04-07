// verander naar js ipv jsx
const TOKEN_KEY = 'jwt';

export const login = (param) => {
    localStorage.setItem('TestLogin', param);
}

export const logout = () => {
    localStorage.removeItem('TestLogin');
}

export const isLogin = () => {
    if (localStorage.getItem('TestLogin')) {
        return true;
    }

    return false;
}