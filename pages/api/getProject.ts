import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { Project } from './typings';

const query = groq`
*[_type == "project"]{
  _id,
  title,
  "heroImage": heroImage.asset->url,
  summary,
  technologies[]->{
    _id,
    title,
    "Image": image.asset->url
  },
  linkToBuild
}
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const projects: Project[] = await client.fetch(query);
    console.log('Fetched projects:', projects); 
    res.status(200).json({ projects });
  } catch (lstatus) {
    console.error('Error fetching projects:', lstatus );
    res.status(500).json({ projects: [] });
  }
}
