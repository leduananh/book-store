import * as React from 'react'
import FormInput from "../shared/FormInput";
import {useState} from "react";
import {LockClosedIcon} from "@heroicons/react/20/solid";

import {gql, useMutation} from '@apollo/client';

// Define mutation
// const CREATE_BOOK = gql`
//     mutation CreateBook($title: String!,$description: String!, $image: Upload! ) {
//         createBook(input: {title: $title, description: $description, image: $image}) {
//             book {
//                 id
//                 title
//                 image
//             }
//         }
//     }
// `;

const CREATE_BOOK = gql`
    mutation CreateBook($image: Upload! ) {
        createBook(input: {image: $image}) {
            book {
                id
                title
                image
            }
        }
    }
`;
const inputs = [
    // {
    //     id: "book_title_id",
    //     name: "book[title]",
    //     type: "text",
    //     label: "Book title",
    //     placeholder: "Insert title",
    //     autocomplete: false
    // },
    // {
    //     id: "book_description_id",
    //     name: "book[descriptions]",
    //     type: "text",
    //     label: "Book description",
    //     placeholder: "Insert description",
    //     autocomplete: false
    // },
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
    const [createBook, {data, loading, error}] = useMutation(CREATE_BOOK);

    const [values, setValues] = useState({
        // "book[title]": "",
        // "book[descriptions]": "",
        "book[image]": null
    })

    const onFormInputChange = ({target : {name: inputName, value: inputVal, files: inputFiles} }) => {
        // if (inputFiles) {
        //     const file = new Blob([inputFiles[0]], {type: "text/plain"});
        //     file.name = inputVal;
        //     inputVal = file
        // }


        setValues(prevVal => {
            return {
                ...prevVal,
                [inputName]: inputFiles ? inputFiles[0] : inputVal
            }
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(values)
        // debugger
        console.log(values["book[image]"])
        createBook({
            variables: {
                // title: values["book[title]"],
                // description: values["book[descriptions]"],
                image: values["book[image]"]
            }
        }).then(r => console.log(r));

    }

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error : {error.message}</p>;

    return (
        <>
            <form className="mt-8 space-y-6" action={"/addBook"} method={"POST"} onSubmit={onSubmit}>
                <input type="hidden" name="remember" defaultValue="true"/>
                {
                    inputs.map(input => (
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onFormInputChange}/>
                    ))
                }

                <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default BookForm