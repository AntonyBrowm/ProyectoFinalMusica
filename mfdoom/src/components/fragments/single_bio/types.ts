import {Singer} from "./singer"

export interface SingleBioFragmentProps {
    id: string
    name: string;
    genre: string;
    singers: Singer;
    duration: string;
    completeFile: string;
    previewFile: string;
    price: number;
    recordLabel: string;
    image: string;
    releaseDate:string;
  }