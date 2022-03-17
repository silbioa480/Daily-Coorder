import axios, {AxiosResponse} from "axios";
import IUser from "../interfaces/IUser";

const USER_API_BASE_URL =
    // "https://daily-coorder-backend.herokuapp.com/api/users";
    "http://localhost:8080/api/users";

class UserService {
    getUsers() {
        return axios.get<IUser[]>(USER_API_BASE_URL);
    }

    createUser(user: IUser) {
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(user_id: IUser["user_id"]): Promise<AxiosResponse<IUser>> {
        return axios.get(USER_API_BASE_URL + "/" + user_id);
    }

    updateUser(
        user: IUser,
        user_id: IUser["user_id"]
    ): Promise<AxiosResponse<IUser>> {
        return axios.put(USER_API_BASE_URL + "/" + user_id, user);
    }

    deleteUser(user_id: IUser["user_id"]) {
        return axios.delete(USER_API_BASE_URL + "/" + user_id);
    }
}

export default new UserService();
