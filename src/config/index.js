export const env = "local";
export const apiKey = "80ac2e02-7bfc-4e56-bcfc-0d94a6b4f6eb";

export const apiHost = () => {
  if (env == 'local') {
    return `http://localhost:3000/`;
  } else if (env == 'development') {
    return `https://dev.api.htdh.com/`;
  } else if (env == 'staging') {
    return `https://staging.api.htdh.com/`;
  } else if (env == 'production') {
    return `https://api.htdh.com/`;
  }
}