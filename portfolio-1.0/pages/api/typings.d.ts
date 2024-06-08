import { Image } from "sanity";

export interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }
  
  export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: {
      asset: Image;
    };
    name: string;
    phoneNumber: string;
    profilePic: {
      asset: Image;
    };
  }

  interface Image {
    url: string;
  }
  
  export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Skill extends SanityBody {
    imageUrl: string | undefined;
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[]; 
  }
  
  export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
  }
  