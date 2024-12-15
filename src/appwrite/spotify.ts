import { Client, Databases } from 'appwrite'

export class SpotifyPlay{
    client = new Client()
    databases: Databases;

    constructor(){
        this.client
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL || '')
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
        this.databases = new Databases(this.client)
    }

    async saveSpotifyDocument({track, artists, trackDate, trackType, trackUrl, album, trackCover, shouldSpotifyPlay}: {track:string, artists:string, trackDate:string, trackType:string, trackUrl:string, album:string, trackCover:string, shouldSpotifyPlay?: boolean}){
        try {
            return await this.databases.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '', process.env.NEXT_PUBLIC_APPWRITE_SPOTIFY_COLLECTION_ID || '', process.env.NEXT_PUBLIC_APPWRITE_SPOTIFY_DOCUMENT_ID || '', {track, artists, trackDate, trackType, trackUrl, album, trackCover, shouldSpotifyPlay})
        } catch (error) {
            if(error instanceof Error){
                console.log(error);
                
            }
        }
    }
    async getSpotifyDoc(){
        try {
            return await this.databases.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '', process.env.NEXT_PUBLIC_APPWRITE_SPOTIFY_COLLECTION_ID || '', process.env.NEXT_PUBLIC_APPWRITE_SPOTIFY_DOCUMENT_ID || '')
        } catch (error) {
            if(error instanceof Error){
                console.log(error);
                
            }
        }
    }
}

const spotifyPlay = new SpotifyPlay()
export default spotifyPlay