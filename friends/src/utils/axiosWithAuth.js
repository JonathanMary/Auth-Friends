import axios from "axios";


export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log("axiosWA token: ", token)

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: "http://localhost:5000",
    });
}