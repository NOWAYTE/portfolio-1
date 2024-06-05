import { PageInfo } from '../pages/api/typings';

export const fetchPageInfo = async (): Promise<PageInfo | null> => {
  try {
    const res = await fetch('/api/getPageInfo');
    if (!res.ok) {
      throw new Error('Failed to fetch page info');
    }
    const data = await res.json();
    return data.pageInfo;
  } catch (error) {
    console.error('Error fetching page info:', error);
    return null;
  }
};
