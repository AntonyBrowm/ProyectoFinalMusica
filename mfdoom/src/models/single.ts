import {Singer} from "./singer"

export interface Single {
    id: string,
    name: string,
    genre: string,
    singers: Singer,
    duration: string,
    completeFile: string,
    previewFile: string,
    price: number,
    recordLabel: string,
    image: string,
    releaseDate:string,
  }