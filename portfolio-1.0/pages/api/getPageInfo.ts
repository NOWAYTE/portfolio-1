import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { PageInfo } from './typings.d';

const query = groq`
*[_type == "pageInfo"][0] {
  _id,
  heroImage,
  profilePic,
  name,
  role,
  email,
  phoneNumber,
  backgroundInformation,
  address
}
`;

type Data = {
  pageInfo: PageInfo | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const pageInfo: PageInfo = await client.fetch(query);
    console.log('Fetched pageInfo:', pageInfo); // Add logging
    res.status(200).json({ pageInfo });
  } catch (error) {
    console.error('Error fetching pageInfo:', error);
    res.status(500).json({ pageInfo: null });
  }
}
