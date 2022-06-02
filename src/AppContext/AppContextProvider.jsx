import React, { useState } from "react";
export const AppContext= React.createContext();
//own custom component for context provider

function AppContextProvider({children}){
    const [state,setState]=useState("light")
    const toggleTheme=(theme)=>{
    state==="light"? setState("dark"):setState("light");
    }
    // we have to define something on top level-> we can also  keep it inside index.js 
    // console.log(children);
    return (
        <AppContext.Provider value={[state,toggleTheme]}>{children}
            <div>
                <h1>Context</h1>
            </div>
        </AppContext.Provider>
    )
}
export default AppContextProvider;

// 1.Provider
// 2.Wrapped the Provider on the main application
// 3. This way any value given in provider, is accessible to any 
// 4. Created a button component-> where you consumed the theme
// 5. Consumed the context value using useContext in another component
// 6. This time you were updating/ toggling the state.