// <> --> JSX fragment
import React, {useState} from 'react'
import Counter from './Counter'
import CounterHooks  from './CounterHooks';
export const ThemeContext = React.createContext()   // provider, consumer
// Provider: here you can pass a value 
// Consumer: consume that value


function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('white')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
    
      Counter
      <Counter initialCount={0} />
      CounterHooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
