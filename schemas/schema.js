import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './page.js'
import blogPost from './blogPost'
import richText from './richText'
import figure from './figure.js'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([page, blogPost, richText, figure])
})
