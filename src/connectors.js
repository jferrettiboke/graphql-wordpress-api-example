const WPAPI = require('wpapi');
const { wordpress } = require('./config');

const wp = new WPAPI({ endpoint: wordpress.endpoint });

const connectors = {
  page(args) {
    const resource = wp.pages();
    if (args.id && args.id !== '') { resource.id(args.id); }
    return resource;
  },
  pages(args) {
    const resource = wp.pages();
    if (args.slug && args.slug !== '') { resource.slug(args.slug); }
    if (args.search && args.search !== '') { resource.search(args.search); }
    return resource;
  },
  users(args) {
    return wp.users();
  }
};

module.exports = connectors;
