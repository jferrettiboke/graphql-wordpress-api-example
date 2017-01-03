const connectors = require('./connectors');

const resolvers = {
  Query: {
    WP_page(root, args) {
      return connectors.page(args)
        .then(page => page)
        .catch((err) => {
          throw new Error(err);
        });
    },
    WP_pages(root, args) {
      return connectors.pages(args)
        .then(pages => pages)
        .catch((err) => {
          throw new Error(err);
        });
    },
    WP_users(root, args) {
      return connectors.users(args)
        .then(users => users)
        .catch((err) => {
          throw new Error(err);
        });
    }
  },
  WP_Page: {
    id(page) { return page.id; },
    slug(page) { return page.slug; },
    title(page) { return page.title.rendered; },
    content(page) { return page.content.rendered; },
    author(page) {
      return connectors.user({ id: page.author })
        .then(user => user)
        .catch((err) => {
          throw new Error(err);
        });
    }
  },
  WP_User: {
    id(user) { return user.id; },
    name(user) { return user.name; },
    avatar(user, args) {
      const sizes = { 'SMALL': 24, 'MEDIUM': 48, 'LARGE': 96 };
      const avatarSize = sizes[args.size];
      return user.avatar_urls[avatarSize];
    }
  }
};

module.exports = resolvers;
