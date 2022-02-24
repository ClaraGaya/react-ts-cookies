var axios = require("axios").default;
const API = process.env.REACT_APP_API;
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;


export const logIn = (user: any) => {
  return fetch(`${API}/logIn`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((response: { json: () => any; }) => response.json())
      .then((response: any) => {
        console.log("Success:", JSON.stringify(response))
        return response
      })
      .catch((error: any) => {
        console.error("Error:", error)
        return error
      });
}

export const logOut = () => {
  return ''
}

export const getToken = async () => {
  var options = {
    method: 'POST',
    url: `https://${AUTH0_DOMAIN}/oauth/token`,
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: {
      grant_type: 'authorization_code',
      client_id: AUTH0_CLIENT_ID,
      client_secret: 'YOUR_CLIENT_SECRET',
      code: 'YOUR_AUTHORIZATION_CODE',
      redirect_uri: 'https://YOUR_APP/callback'
    }
  };

  try {
    const token = await axios.request(options)
    console.log(token)
    // respose should look like this
    // {
    //   "access_token": "eyJz93a...k4laUWw",
    //   "refresh_token": "GEbRxBN...edjnXbL",
    //   "token_type": "Bearer"
    // }
    return token
  } catch (err) {
    console.log(err);
  }
};
