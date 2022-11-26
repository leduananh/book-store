import * as React from 'react'
import FormInput from "../shared/FormInput";
import {useState} from "react";


const inputs = [
    {
        id: "book_title_id",
        name: "book[title]",
        type: "text",
        label: "Book title",
        placeholder: "Insert title",
        autocomplete: false
    },
    {
        id: "book_description_id",
        name: "book[descriptions]",
        type: "text",
        label: "Book description",
        placeholder: "Insert description",
        autocomplete: false
    },
    {
        id: "book_image_id",
        name: "book[image]",
        type: "file",
        label: "Book title",
        placeholder: "Insert new title",
        autocomplete: false
    },
]

const BookForm = () => {
    const [values, setValues] = useState({
        "book[title]": "",
        "book[descriptions]": "",
        "book[image]": null
    })

    const onFormInputChange = event => {
        const {name: inputName, value: inputVal} = event.target

        setValues(prevVal => {
            return {
                ...prevVal,
                [inputName]: inputVal
            }
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(values)
        debugger

    }
    return (
        <>
            <form action={"/addBook"} method={"POST"} onSubmit={onSubmit}>
                {
                    inputs.map(input => (
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onFormInputChange}/>
                    ))
                }
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default BookForm