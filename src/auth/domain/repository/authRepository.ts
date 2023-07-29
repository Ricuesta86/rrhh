import { Auth } from "../entity/auth";

export interface AuthRepository {
    login:(authUser:Auth)=>Promise<Auth | null>;
    register:(authUser:Auth)=>Promise<Auth>;
}