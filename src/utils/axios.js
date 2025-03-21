const { default: axios } = require("axios");

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_BASEURL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_KEY}`,
  },
});


