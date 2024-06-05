import { Social } from '../pages/api/typings';

export const fetchSocials = async (): Promise<Social[]> => {
    const res = await fetch(`${process.env.SANITY_STUDIO_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials;
};
