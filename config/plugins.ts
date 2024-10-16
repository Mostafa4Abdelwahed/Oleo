// config/plugins.js
module.exports = ({env}) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-brevo',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultSenderEmail: 'mm.mostafafa456@gmail.com',
        defaultSenderName: 'Sender Name',
        defaultReplyTo: 'mm.mostafafa456@gmail.com',
      },
    },
  }
});