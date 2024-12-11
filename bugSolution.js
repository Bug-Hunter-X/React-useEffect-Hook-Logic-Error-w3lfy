```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return <div>Count: {count}</div>;
}
```