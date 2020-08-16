// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'haxjlvkbfd'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-j3ybwq7v.us.auth0.com',            // Auth0 domain
  clientId: '5zPpiMIpl36UI1ZYxwvFrzyuTqS6H6N7',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
