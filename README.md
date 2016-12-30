# GraphQL API example wrapping the WordPress API

## Description

A GraphQL API example wrapping the WordPress API using Node.js, Express.js and Apollo Server.

> IMPORTANT NOTE
>
> This is a basic example that shows how you can wrap the WordPress API with GraphQL to fetch data easily.

## Run the server

### Install the dependencies

Execute `npm install` to install all the dependencies.

### Configuration

First, you have to configure the WordPress endpoint to connect with your WordPress REST API.

To do so, open the `config.js` file and change the endpoint.

```js
wordpress: {
  endpoint: 'http://localhost/projects/wordpress/wp-json'
}
```

### Development

Execute `npm start` to start the server in development mode with `nodemon`.

### Production

> IMPORTANT NOTE
>
> The server app is not production-ready.

## Contributing

Do you know how to improve it? Feel free to contribute to this project.

## License

MIT.
