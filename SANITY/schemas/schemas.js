import createSchema from 'part:@sanity/base/schema-creator'


import { projects } from './projects';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([projects
    ]),
  })