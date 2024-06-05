import { SanityClient } from 'next-sanity';
import { PageInfo } from '../pages/api/typings';

export const fetchPageInfo = async (): Promise<PageInfo> => {
    const res = await fetch(`${process.env.SANITY_STUDIO_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.PageInfo;
    return pageInfo;
};
