import React from "react";
import "./index.css"; // Need to add this to inject css in host app
import store from "./Store/Store";
import { Provider } from "react-redux";
import NotesContainer from "./Components/NotesContainer";
import { Theme } from "@radix-ui/themes";

const App = ({ isUserAuthenticated, theme = 'dark' }) => {
  return (
        <Provider store={store}>
            <Theme appearance={theme}>
                <NotesContainer isUserAuthenticated={isUserAuthenticated} />
            </Theme>
        </Provider>
    );
};

export default App;
