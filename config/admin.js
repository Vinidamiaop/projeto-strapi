module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ad21e675a6f52d929e7b2cecc1ae7ab'),
  },
});
