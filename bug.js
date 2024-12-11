```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Only updates count if the previous value was 0
    if (count === 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```