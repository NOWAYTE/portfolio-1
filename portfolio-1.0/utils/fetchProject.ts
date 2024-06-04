import { Project } from '../pages/api/typings';

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_PUBLIC_BASE_URL}/api/getProjects`);


    const data = await res.json();
    const projects: Project[] = data.projects;

    return projects;
    
};