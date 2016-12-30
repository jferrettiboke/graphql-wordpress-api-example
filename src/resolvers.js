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
    }
  },
  WP_Page: {
    id(page) { return page.id; },
    slug(page) { return page.slug; },
    title(page) { return page.title.rendered; },
    content(page) { return page.content.rendered; }
  }
};

module.exports = resolvers;
