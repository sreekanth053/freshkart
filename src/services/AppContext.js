// AppContext.js
import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [state, setState] = useState({
    cart: [], // Fix typo here
    products: []
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext }; // Export AppContext as well
