import { PageInfo } from '../pages/api/typings';

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_PUBLIC_BASE_URL}/api/getpageInfo`);


    const data = await res.json();
    const skills: PageInfo = data.PageInfo;

    return skills;
    
};