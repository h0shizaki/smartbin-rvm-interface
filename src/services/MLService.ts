import axios from 'axios'

const apiClient = axios.create({
    baseURL:
        localStorage.getItem('ML_SERVICE_URL') || process.env.ML_SERVICE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    },
})

const predict = (body: any) => {
    return apiClient.post('/predict', body)
}

export default { predict }
