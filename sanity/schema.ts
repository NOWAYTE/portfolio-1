import { type SchemaTypeDefinition } from 'sanity'
import pageInfo from './schemaTypes/pageInfo'
import project from './schemaTypes/project'
import skill from './schemaTypes/skill'
import social from './schemaTypes/social'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, project, skill, social],
}
