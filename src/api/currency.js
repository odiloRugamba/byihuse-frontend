import api from "./index";

export default {
    async getcurrency() {
        const res = await api().get(`/api/currency/getCurrency`)
        return res
    },
}