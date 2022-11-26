import * as React from 'react'
import BookForm from "../../components/book/BookForm";



const AddBookPage = () => {
    return (
        <>

            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Add book page
                        </h2>

                    </div>
                    <BookForm/>
                </div>
            </div>
        </>
    )
}

export default AddBookPage