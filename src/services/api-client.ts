import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "59bad233fe134a93bb16b97e39934914"
    },
})