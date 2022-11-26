import * as React from 'react'
import HomePage from "../pages/Home.page";
import AddBookPage from "../pages/book/AddBook.page";
import NotFoundPage from "../pages/NotFound.page";
import TestPage from "../pages/Test.page";
import ROUTES from "./Routes.path"

const pagesData = [
    {
        path: ROUTES.PAGE.HOME,
        element: < HomePage/>,
        title: "home"
    },
    {
        path: ROUTES.PAGE.ADD_BOOK,
        element: < AddBookPage/>,
        title: "addBook"
    },
    {
        path: ROUTES.PAGE.TEST,
        element: < TestPage/>,
        title: "testPage"
    },
]

const errorsPageData = [
    {
        path: "*",
        element: <NotFoundPage/>,
        title: "pageNotFound"
    }
]

export default [...pagesData, ...errorsPageData]
