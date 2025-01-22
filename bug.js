```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array - missing 'count'
    fetch('/api/data').then(response => response.json()).then(data => {
      setCount(data.count);
    });
  }, []);

  return <div>Count: {count}</div>;
}
```