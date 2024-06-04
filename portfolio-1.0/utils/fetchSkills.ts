import { skill } from '../pages/api/typings';

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_PUBLIC_BASE_URL}/api/getSkills`);


    const data = await res.json();
    const skills: skill[] = data.skills;

    return skills;
    
};