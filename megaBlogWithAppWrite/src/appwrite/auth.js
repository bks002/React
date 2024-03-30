import Conf from "../Conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(Conf.appwriteUrl)
            .setEndpoint(Conf.appwriteProjectId);
        this.account=new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                
                //run another method
                this.login({email,password});
            }else{
                return userAccount;
            }

        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSessions(email,password);
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{

           return await this.account.get();

        }catch (error){
            throw error;
        }
        return null;
    }

    async logOut(){
        try{

        }catch(error){
            console.log("Appwrite servive :: logout :: error", error);
        }
    }
}

const aurhService = new AuthService();
export default AuthService;