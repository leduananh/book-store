import React from 'react';
import Header from "./layout/Header";
import {BrowserRouter} from "react-router-dom"
import AppRoute from "./routes/App.route";
import NavbarTailwind from "./components/shared/NavbarTailwind";

function App() {

    return (
        <>
            <BrowserRouter>
                {/*<Header/>*/}
                <NavbarTailwind></NavbarTailwind>
                <AppRoute/>
            </BrowserRouter>
        </>

    );
}

export default App;
