import {SystemReq} from './sysReq'
import {MinSystemReq} from './sysReq'


export interface Game {
    id:number;
    category:string
    price:number;
    fullName:String;
    genre:String;
    developer:String;
    year:number;
    publisher:String;
    name:String;
    description: String;
    releaseDate: String;
    rating:number;
    img_path:String;
    video_path:string;
    minSysReq: MinSystemReq;
    sysReq:SystemReq;
}