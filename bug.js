```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
```

This code will cause an error in Next.js 15 if you have not configured the `next.config.js` correctly, especially with experimental features like the new App Router enabled.  The error may be cryptic and related to missing files or incorrect paths.