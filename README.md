# React useEffect Hook Logic Error

This repository demonstrates a common error in React's `useEffect` hook where the conditional logic prevents the effect from running correctly after the initial render.  The provided `bug.js` file shows the erroneous code, and `bugSolution.js` offers the corrected version. 

The issue stems from checking the `count` variable inside the useEffect dependency array. This causes unexpected behavior, because the effect only runs initially when `count` is 0 and never again.