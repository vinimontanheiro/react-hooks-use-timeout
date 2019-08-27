
## React Hooks timeout alternative to start inside another hook and avoid browser memory leak 

## Dependencies:

- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)

### How to use
```
import React, { useState, useCallback } from 'react';
import useTimeout from './useTimeout';

const styles = {
  padding: `10px`,
};

const YourComponent = () => {
  const [color, setColor] = useState('blue');

  const changeColor = useCallback(
    (c) => {
      setColor(c);
    },
    [color],
  );

  const timeoutHook = useTimeout(() => {
    changeColor('red');
  }, 3000);

  useEffect(() => {
    timeoutHook.run(); 
  }, []);

  return (
    <div style={{ ...styles }}> 
      <h2 style={{ color }}>{color}</h2>
    </div>
  );
};

export default YourComponent;
```


