const typeDefs = [/* GraphQL */`
  # WP user avatar sizes.
  enum WP_AvatarSize {
    SMALL
    MEDIUM
    LARGE
  }

  # WP Page Type.
  type WP_Page {
    id: Int!
    slug: String
    title: String
    content: String
  }

  # WP User Type.
  type WP_User {
    id: Int!
    name: String
    avatar(size: WP_AvatarSize = MEDIUM): String
  }

  type Query {
    # Fetch a page.
    WP_page(id: Int): WP_Page

    # Fetch a page list.
    WP_pages(slug: String, search: String): [WP_Page]

    # Fetch a user list.
    WP_users: [WP_User]
  }

  schema {
    query: Query
  }
`];

module.exports = typeDefs;
