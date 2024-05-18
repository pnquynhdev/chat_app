# Group hover
- Group hover is a technique for applying styles to child elements only when their parent container is hovered over.
- This enables you to create dynamic and interactive design elements that respond to user interaction.
# How it works:
> `group` DON'T WORK IN APPLY `@apply`
## Group Class: 
Add the `group` class to the parent element you want to trigger the hover effect. This element acts as the container.
## group-hover Prefix: 
Apply the `group-hover`: prefix to utility classes on the child elements you want to style when the parent is hovered.
## Example:

```HTML
<div class="group rounded-lg overflow-hidden">
  <img src="image.jpg" alt="Image" class="w-full h-full object-cover">
  <div class="group-hover:bg-gray-800 group-hover:text-white p-4 hidden flex-col justify-center items-center">
    <h3 class="text-lg font-medium">Hover Me!</h3>
    <p class="text-gray-500">This text will appear on hover.</p>
  </div>
</div>
```
## Explanation:

- The `div` with `group rounded-lg overflow-hidden` is the parent container.
- The `img` element displays the image.
- The inner `div` has the `group-hover`:`bg-gray-800 group-hover:text-white` classes. These styles (background color and text color) will only be applied when the parent container (`group`) is hovered over.
- The `hidden` class initially hides the inner `div`, and `flex-col justify-center items-center` positions its content when shown.
# Supported Utilities:

By default, group hover works with several core Tailwind CSS utilities:

- `backgroundColor`
- `backgroundOpacity`
- `borderColor`
- `borderOpacity`
- `boxShadow`
- `opacity`
- `textColor`
- `textDecoration`
# Additional Notes:

- You can combine group hover with other hover states and utilities for more complex interactions.
- For more advanced scenarios, consider using JavaScript or CSS custom properties for greater control.

In essence, group hover in Tailwind CSS is a powerful tool for creating dynamic and responsive hover effects, enhancing the interactivity and user experience of your web applications.