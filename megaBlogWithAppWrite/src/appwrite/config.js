import Conf from "../Conf";
import { Client, Account, ID ,Databases, Storage, Query} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(Conf.appwriteUrl)
            .setEndpoint(Conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket - new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,content, featuredImage, status,userId,
                }
            )

        }catch(error){
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatepost(slug, {title,  content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,content, featuredImage, status,
                }
            )

        }catch(error){
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

        async deletePost(slug){
            try{
                return await this.databases.deleteDocument(
                    Conf.appwriteDatabaseId,
                    Conf.appwriteCollectionId,
                    slug
                )
                return true;
    
            }catch(error){
                console.log("Appwrite service :: createPost :: error", error);
                return false;
            }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )

        }catch(error){
            console.log("Appwrite service :: getPost :: error",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.lidtDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                queries,
            )
        }
        catch(error){
            console.log("Appwrite service :: getPosts :: error",error);
        }
    }

    //file upload services

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                Conf.appwriteBucketId,
                ID.unique()
            )

        }catch(error){
            console.log("Appwrite service :: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                Conf.appwriteBucketId,
                fileId
            )
            return true;

        }catch(error){
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(Conf.appwriteBucketId,fileId);
    }
}


const service = new Service()
export default service