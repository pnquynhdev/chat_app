# What is z-index?

- In CSS, the z-index property determines the stacking order of positioned elements (elements with position set to something other than static).
- Elements with a higher z-index will be rendered on top of elements with a lower z-index, even if they appear later in the HTML code.
- This is crucial for creating overlapping elements and layering effects in your web pages.
# How to use z-index in Tailwind CSS:

- Tailwind CSS provides utility classes for setting z-index values.
- The z-10 class specifically sets the z-index property of an element to 10.
- You can apply this class to any element in your HTML that you want to position above other elements.
Example:

```HTML
<div class="bg-red-500 p-4 rounded-md z-10">
  This content will be displayed on top.
</div>

<div class="bg-blue-500 p-4 rounded-md">
  This content will be displayed below.
</div>
```
- In this example, the first `div` with the z-10 class will be rendered above the second `div`, even though it comes after it in the HTML.

# Customizing z-index values in Tailwind CSS:

- By default, Tailwind CSS offers a set of pre-defined z-index values (including z-10).
- You can customize these values in your Tailwind configuration file (tailwind.config.js).
## Here's how to adjust the z-index scale:

```JavaScript
module.exports = {
  theme: {
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10', // Adjust the value for z-10 here if needed
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
  },
  // ... other Tailwind configuration
};
```
## Negative z-index values:

- Tailwind CSS also supports negative z-index values.
- Elements with negative z-index will be positioned behind elements with positive or zero z-index values.
## Key points:

- Use z-10 or other z-index classes to control the layering of elements in your Tailwind CSS projects.
- Consider customizing the z-index scale in your Tailwind configuration for more control.
- Remember that a higher z-index value brings an element to the front.