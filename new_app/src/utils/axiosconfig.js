

let token1
if (typeof window !== 'undefined') {
    const getTokenFromLocalStorage = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "";
    token1 = getTokenFromLocalStorage.token;
}
// let id;
// if (typeof window !== 'undefined') {
//     id = JSON.parse(localStorage.getItem("id"));

// }
export const config = {
    headers: {
        Authorization: `Bearer ${token1}`,
        Accept: "application/json",
        credentials: true,
    },
};
