# Methods:

## `base` __Configuration__ in `vite.config.js`:

- This approach sets a global `base` URL for all asset requests served by Vite during development.
- Add the following to your `vite.config.js` file:
```JavaScript
import { defineConfig } from 'vite';

export default defineConfig({
  `base`: '/your-`base`-url/', // Replace with your desired `base` URL
});
```
### Example usage in a component (assuming the `base` URL is /my-app/):
```JavaScript
import logo from './logo.png'; // Relative path to the logo image

function MyComponent() {
  return (
    <img src={logo} alt="Logo" />
  );
}
```
- Vite will automatically prepend the `base` URL (/my-app/) to the relative asset path (./logo.png), resulting in the correct request URL: /my-app/logo.png.
# Environment Variables:

- Define a `base URL` environment variable and access it within your React components.
- Create a .env file (not version-controlled) in your project root and add:
- REACT_APP_base_URL=/your-base-url/
### Access the environment variable in your components:
```JavaScript
import React from 'react';

function MyComponent() {
  const `base`Url = process.env.REACT_APP_`base`_URL;

  return (
    <img src={`${`base`Url}logo.png`} alt="Logo" />
  );
}
```
# Comparison:

|Feature	|`base` Configuration|	Environment Variables|
|:---|:---|:---|
|Scope|	Global for all assets|	Component-specific|
|Flexibility|	Less flexible|	More flexible|
|Environment Specificity|	Not environment-specific|	Environment-specific|
|Configuration|	`vite.config.js`	|.env file, component code|

# Choosing the Right Method:

- If you have a consistent `base` URL for most or all assets, use the `base` configuration for simplicity.
- If you need to dynamically adjust the `base` URL `base`d on environment or specific components, environment variables offer more flexibility.

# Choice 1 (baseUrl):

- Use this if: Your frontend and backend are served from the same domain but on different ports.
- Explanation: Setting the baseUrl tells Vite to prepend this base URL to any relative URLs found in your frontend code. This ensures they resolve correctly during development when the frontend is served on a different port than the backend.
- Example: Imagine your frontend is at http://localhost:3000 and your backend API at http://localhost:8000. With baseUrl, a frontend request to /api/data would be sent to http://localhost:8000/api/data (base url prepended).
```JavaScript
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    baseUrl:"http://localhost:8000",
  }
})
```
# Choice 2 (proxy):

- Use this if: Your frontend and backend are on completely different domains or if you want more control over proxied requests.
- Explanation: Setting up a proxy creates an intermediary server within Vite. Requests to the specified path (/api in this case) are intercepted by the proxy and forwarded to the target URL (http://localhost:8000). This allows seamless development without needing to modify your frontend code for different environments.
- Benefits: Proxying offers more control over request headers, rewriting paths, or error handling compared to simply setting the base URL.
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
      },
    },
  },
});
```

# Here's a table summarizing the key differences:

|Feature	|baseUrl	|proxy|
|---|---|---|
|Use Case|	Frontend & Backend on same domain (diff ports)	|Frontend & Backend on different domains/More control|
|Functionality|	Prepends base URL to relative URLs	|Intercepts & forwards requests to target URL|
|Code| Modification	May require backend URL adjustments|	No modification needed (transparent)|