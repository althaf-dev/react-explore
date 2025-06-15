import { axiosInstance } from "../utils/axiosInstance";

export const api = ()=> axiosInstance.get("/posts");
export const getPost = (id:number)=>{
    return ()=>axiosInstance.get(`/posts/${id}`);
}