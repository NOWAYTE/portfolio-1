import { Social } from '../pages/api/typings';

export const fetchSocials = async (): Promise<Social[]> => {
    const res = await fetch(`/api/getSocials`);
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials;
};
