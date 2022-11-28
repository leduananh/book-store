import * as React from 'react'
import BookForm from "../../components/book/BookForm";

import {useForm} from "react-hook-form";

import {gql, useMutation} from '@apollo/client';

import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from "yup";
import {useNavigate} from "react-router-dom";
// Define mutation
const CREATE_BOOK = gql`
    mutation CreateBook($book_title: String!,$book_descriptions: String!, $book_image: Upload! ) {
        createBook(input: {title: $book_title, descriptions: $book_descriptions, image: $book_image}) {
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
        id: "book_title",
        name: "book[title]",
        type: "text",
        label: "Book title",
        placeholder: "Insert title",
        defaultValue: "",
        autocomplete: false,
        rule: yup.string().required("do not empty"),
    },
    {
        id: "book_descriptions",
        name: "book[descriptions]",
        type: "text",
        label: "Book description",
        placeholder: "Insert description",
        defaultValue: "",
        autocomplete: false,
        rule: yup.string().required("do not empty"),
    },
    {
        id: "book_image",
        name: "book[image]",
        type: "file",
        label: "Book title",
        placeholder: "Insert new title",
        defaultValue: "",
        autocomplete: false,
        rule: yup.mixed()
            .transform((value, originalValue) => value[0])
            .test("required", "do not empty", (value) => {
                return value != undefined || value != null;
            })
            .test("fileSize", "The file is too large", (value) => {
                console.log(value, value && value[0]?.size <= 5000000000)
                window.dmn = value
                return value && value.size <= 5000000000;
            })
            .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {

                return value && (
                    value.type === "image/jpeg" ||
                    value.type === "image/bmp" ||
                    value.type === "image/png"
                );
            })
    },
]

const schema = yup.object(
    inputs.reduce((rulesObj, currentValue) => (rulesObj[currentValue["id"]] = currentValue["rule"], rulesObj), {})
).required();

const AddBookPage = () => {

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    inputs.forEach(input => {
            input["register"] = register(input["id"])
            input["errorsMsg"] = errors[input["id"]]?.message
        }
    )

    const [createBook, {data, loading, error}] = useMutation(CREATE_BOOK);


    const onSubmit = handleSubmit(
        (data) => {
            // event.preventDefault()
            // console.log(inputValues)
            //
            // console.log(data)
            // console.log({variables: data})
            createBook({
                variables: data
            })

        }
    )

    if (data) {
        const {createBook: book} = data
        navigate("/", book)
    }

        return (
            <>
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                        <div>

                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Add book page xx
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