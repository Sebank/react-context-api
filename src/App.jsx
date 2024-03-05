import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetsContext = createContext();
const ThemeContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <TweetsContext.Provider value={{tweets: tweets, setTweets: setTweets, user: user}} >
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <div className="container">
            <Header />
            <Tweets theme={theme}  />
            <RightSide theme={theme} />
        </div>
        </ThemeContext.Provider>
        </TweetsContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, TweetsContext, ThemeContext };
