import * as React from 'react'
import BookForm from "../../components/book/BookForm";

import { useForm } from "react-hook-form";

import {gql, useMutation} from '@apollo/client';

// Define mutation
const CREATE_BOOK = gql`
    mutation CreateBook($title: String!,$descriptions: String!, $image: Upload! ) {
        createBook(input: {title: $title, descriptions: $description, image: $image}) {
            book {
                id
                title
                image
            }
        }
    }
`;

const inputs = [
    {
        id: "book_title_id",
        name: "book[title]",
        type: "text",
        label: "Book title",
        placeholder: "Insert title",
        defaultValue: "",
        autocomplete: false
    },
    {
        id: "book_description_id",
        name: "book[descriptions]",
        type: "text",
        label: "Book description",
        placeholder: "Insert description",
        defaultValue: "",
        autocomplete: false
    },
    {
        id: "book_image_id",
        name: "book[image]",
        type: "file",
        label: "Book title",
        placeholder: "Insert new title",
        defaultValue: "",
        autocomplete: false
    },
]

const AddBookPage = () => {
    const { register, handleSubmit } = useForm();
    console.log({...register("test")})

    const [createBook, {data, loading, error}] = useMutation(CREATE_BOOK);

    const onSubmit = (event, inputValues) => {
        event.preventDefault()
        console.log(inputValues)
        // debugger

        createBook({
            variables: {
                title: values["book[title]"],
                description: values["book[descriptions]"],
                image: inputValues["book[image]"]
            }
        }).then(r => console.log(r));
    }

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Add book page
                        </h2>

                    </div>
                    {loading ? (<p>Loading...</p>) : error ? (<p>Error : {error.message}</p>) : <BookForm
                        inputs={inputs}
                        submit={
                            {
                                submitBtn: "create book".toUpperCase(),
                                method: "POST",
                                onSubmit
                            }
                        }
                        initState={
                            inputs.reduce((initStateObj, input) => initStateObj[input["name"]] = input["defaultValue"], {})
                        }
                    />}
                </div>
            </div>
        </>
    )
}

export default AddBookPage