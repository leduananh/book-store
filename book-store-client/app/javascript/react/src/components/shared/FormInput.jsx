import * as React from 'react'

const FormInput = (props) => {
    const {
        id,
        name,
        type,
        label,
        placeholder,
        autocomplete,
        onChange,
        // value,
        register,
        errorsMsg
    } = props

    return (
        <>
            <div className="mb-3">
                <label htmlFor={id} className="sr-only">{label}</label>
                <input
                    // onChange={onChange}
                       autoComplete={autocomplete ? 1 : 0}
                       // name={name}
                       type={type}
                       className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                       id={id}
                       // value={value}
                       aria-describedby={label}
                       placeholder={placeholder}
                       {...register}
                />
                {
                    errorsMsg ? (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                             role="alert">
                            <span className="block sm:inline">{errorsMsg}</span>
                        </div>
                    ) : ""
                }

            </div>
        </>
    )
}

export default FormInput