import axios, { Axios } from "axios";

 const Base_url = "http://localhost:5000/api";
 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGUxNDNiOTg0YjljNTk4MWRjMTM1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTI1MjczNywiZXhwIjoxNzA1NDI1NTM3fQ.unfh_g0F1H6jHHDsI0hsvPFhLtemvdQt5Hmy6nfL7Ow"

 export const userRequest = axios.create({
    baseURL:Base_url,
    headers:{token:`Bearer ${token}`}
 })