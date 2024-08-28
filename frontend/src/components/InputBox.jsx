function InputBox({type, placeholder, value, onChange, className }){
    return(
        <>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={` outline-none  px-2 py-2 ${className}`}
            />
        </>
    )
}

export default InputBox