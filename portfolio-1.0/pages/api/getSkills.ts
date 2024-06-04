import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { skill } from './typings';
import { client } from '../../sanity/lib/client';


const query = groq`
  *[_type == "skill"]
`;

type Data = {
  skills: skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: skill[] = await client.fetch(query);

  res.status(200).json({ skills });
}