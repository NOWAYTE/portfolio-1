import { NextApiRequest, NextApiResponse } from 'next';
import { SanityClient, groq } from 'next-sanity';
import { Social } from './typings';

const query = groq`
  *[_type == "Social"]
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await SanityClient.fetch(query);

  res.status(200).json({ socials });
}
