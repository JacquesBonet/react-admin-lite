import USERS from "../constants/users";
import {create,read,update, del} from "./docs"


export const createUser = (user) => (create(USERS, user));
export const readUsers = () => (read(USERS));
export const updateUser = (user) => (update(USERS, user));
export const deleteUser = (user) => (del(USERS, user));
