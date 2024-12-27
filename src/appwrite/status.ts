import { Client, Databases } from 'appwrite'

export class Status{
    client = new Client()
    databases: Databases;

    constructor(){
        this.client
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL || '')
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
        this.databases = new Databases(this.client)
    }

    async saveDocument({id, title, time, tool, workTool}: {id:string, title:string, time:string, tool:string, workTool:string}){
        try {
            return await this.databases.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '', process.env.NEXT_PUBLIC_APPWRITE_STATUS_COLLECTION_ID || '', process.env.NEXT_PUBLIC_APPWRITE_STATUS_DOCUMENT_ID || '', {id, title, time, tool, workTool})
        } catch (error) {
            if(error instanceof Error){
                console.log(error);
                
            }
        }
    }
    async getDoc(){
        try {
            return await this.databases.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '', process.env.NEXT_PUBLIC_APPWRITE_STATUS_COLLECTION_ID || '', process.env.NEXT_PUBLIC_APPWRITE_STATUS_DOCUMENT_ID || '')
        } catch (error) {
            if(error instanceof Error){
                console.log(error);
                
            }
        }
    }

    getRealtimeStatusDoc(callback: (data: any) => void) {
        try {
            const channel = `databases.${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}.collections.${process.env.NEXT_PUBLIC_APPWRITE_STATUS_COLLECTION_ID}.documents.${process.env.NEXT_PUBLIC_APPWRITE_STATUS_DOCUMENT_ID}`;
            
            // Subscribe to real-time updates
            const unsubscribe = this.client.subscribe(channel, (response) => {
                callback(response);
            });
    
            // Return the unsubscribe function for cleanup
            return unsubscribe;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
            }
        }
    }
}

const status = new Status()
export default status