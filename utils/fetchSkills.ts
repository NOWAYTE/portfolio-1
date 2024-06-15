import { Skill } from '../pages/api/typings';

export const fetchSkills = async (): Promise<Skill[]> => {
    const res = await fetch(`api/getSkills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;
    return skills;
};
