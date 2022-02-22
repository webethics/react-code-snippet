
export const setUser = (data) => {
    localStorage.removeItem('user');
    localStorage.setItem("user", JSON.stringify(data));
}


export const getToken = () => {
    return localStorage.getItem('token') || null;
}


export const SessionLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}




