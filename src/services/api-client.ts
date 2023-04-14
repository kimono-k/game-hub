import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "0159edf0b2ff41e9b33b892946c82936"
    }
})