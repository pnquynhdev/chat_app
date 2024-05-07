# Customize a React icon:

## 1. Using Inline Styles or CSS Classes:

### Inline Styles: 
Add a `style attribute` to the icon component and define styles like color, fill, stroke, or transform.

```jsx
<FaGithub style={{ color: 'purple', transform: 'scale(2)' }} />
```

### CSS Classes:
```js
<FaGithub className="custom-icon" />

/* styles.css */
.custom-icon {
  color: purple;
  transform: scale(2);
}
```
## 2. Styled Components:
1. Installation:
```bash
npm install styled-components
```
2. Importing styled-components and the Icon:
```js
import styled from 'styled-components';
import { FaGithub } from '@fortawesome/react-fontawesome';
```
3. Creating a Styled Component for the Icon:
```js
const StyledGithub = styled(FaGithub)`
  /* Your customizations here */
  color: purple;
  transform: scale(2);
`;
```
4. Usage:
```js
<StyledGithub />
```
### Benefits of Styled Components approach:

#### Maintainability: Styles are encapsulated within the component, making it easier to manage and avoid conflicts with global styles.
#### Reusability: You can create different styled components for various icon variations and reuse them throughout your application.
#### Theming: If you're using a theming library with styled-components, you can dynamically change the icon styles based on your application theme.

### Things to Consider:

- While styled-components offer flexibility, keep your styles specific to avoid unintended side effects on other components.
- Consider using utility-first CSS frameworks like Tailwind CSS alongside styled-components for simpler styling needs.