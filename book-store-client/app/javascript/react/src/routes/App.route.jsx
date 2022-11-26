import * as React from 'react'
import {Route, Routes} from "react-router-dom"
import pagesData from "./page.data"

const AppRoute = () => {

    const pageRoutes = pagesData.map(({path, title, element}) => {
        return <Route key={title} path={`/${path}`} element={element}/>;
    });

    return <Routes>{pageRoutes}</Routes>;
}

export default AppRoute