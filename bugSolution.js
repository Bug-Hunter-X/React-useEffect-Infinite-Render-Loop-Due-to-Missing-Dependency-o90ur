```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array - including 'count'
    fetch('/api/data').then(response => response.json()).then(data => {
      setCount(data.count);
    });
  }, [count]);

  return <div>Count: {count}</div>;
}
```