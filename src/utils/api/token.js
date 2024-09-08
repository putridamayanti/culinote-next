export const setAuthToken = token => {
    localStorage.setItem("x-token", token);
};

export const getAuthToken = () => {
    return localStorage.getItem("x-token");
};

export const removeAuthToken = () => {
    return localStorage.removeItem("x-token");
};