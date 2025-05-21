import React from "react";
import "./index.css"; // Need to add this to inject css in host app
import store from "./Store/Store";
import { Provider } from "react-redux";
import NotesContainer from "./Components/NotesContainer";

const App = ({ isUserAuthenticated }) => {
    return (
        <Provider store={store}>
            <NotesContainer isUserAuthenticated={isUserAuthenticated} />
        </Provider>
    );
};

export default App;

