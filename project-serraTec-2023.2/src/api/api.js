import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://deploy-db-json-vercel-react-serra-tec2023-3.vercel.app'
})