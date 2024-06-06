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
      asset: {
        _id: string;
        url: string;
      };
    };
    name: string;
    phoneNumber: string;
    profilePic: {
      asset: {
        _id: string;
        url: string;
      };
    };
  }
  
  
  export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }
  
  export interface Skill extends SanityBody {
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
  