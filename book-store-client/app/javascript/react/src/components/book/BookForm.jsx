import * as React from 'react'
import FormInput from "../shared/FormInput";
import {useState} from "react";

const BookForm = (props) => {
    const {inputs, submit, initState } = props
    const {submitBtn, onSubmit, method} = submit

    const [values, setValues] = useState(initState)

    const onFormInputChange = ({target : {name: inputName, value: inputVal, files: inputFiles} }) => {

        setValues(prevVal => {
            return {
                ...prevVal,
                [inputName]: inputFiles ? inputFiles[0] : inputVal
            }
        })
    }
    return (
        <>
            <form className="mt-8 space-y-6" method={method} onSubmit={(event)=>onSubmit(event,values)}>
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
                        {submitBtn}
                    </button>
                </div>
            </form>
        </>
    )
}

export default BookForm