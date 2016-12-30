const typeDefs = [/* GraphQL */`
  type WP_Page {
    id: Int!
    slug: String
    title: String
    content: String
  }

  type Query {
    WP_page(id: Int): WP_Page
    WP_pages(slug: String, search: String): [WP_Page]
  }

  schema {
    query: Query
  }
`];

module.exports = typeDefs;
