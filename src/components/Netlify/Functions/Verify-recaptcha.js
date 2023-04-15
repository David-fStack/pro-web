const axios = require("axios");

exports.handler = async (event, context) => {
  const { response } = JSON.parse(event.body);
  const secretKey = "6Lfrn40lAAAAAMnqy3UBgTjjdKjeVdgWBog9iXCd";

  try {
    const result = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      {},
      {
        params: {
          secret: secretKey,
          response,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
