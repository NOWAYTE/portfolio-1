import { client } from '../../sanity/lib/client';
import { PageInfo } from './typings.d';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';


const query = groq`
  *[_type == "pageInfo"]
`;

type Data = {
  PageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const PageInfo: PageInfo = await client.fetch(query);

  res.status(200).json({ PageInfo });
}
