import * as React from 'react'
import {generatePath, useNavigate} from "react-router-dom";
import ROUTES from "../routes/Routes.path";

const TestPage = () => {
    const navigate = useNavigate();


    return <button type="submit" onClick={() => {
        let book = {
            "id": "11",
            "title": "i made it bruh 111",
            "image": "https://res.cloudinary.com/dpifjrjmw/image/upload/v1/rails_uploads/706940464e288ebae8f7db96f2bd1764.jpg",
            "__typename": "Book"
        }

        navigate(
            generatePath(ROUTES.PAGE.BOOK_DETAIL, {id: book["id"]}),
            {state: {book}}
        )

    }
    }>di</button>;
}

export default TestPage