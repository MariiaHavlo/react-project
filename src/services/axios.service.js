import axios from "axios";
import baseURL from "../constans/urls";

export const axiosService = axios.create({
    baseURL,
headers:{
        Authorization:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzg2YjhkYjkxNTE3ODgyYjZlYmYyZWI2OWMyMTUyZSIsInN1YiI6IjYxZmVjNDI0ODk2YjhmMDA2NzZiMmE3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-EpsPudWunEN1L4xw1ooX1pfWeKL9SeFyVXL3rjV58'
}
});
