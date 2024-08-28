function MainButton({children, onClick, className}){
    return(
        <>
            <button
                onClick={onClick}
                className={` px-2 py-2 bg-black text-white ${className}`}
            >
                {children}
            </button>
        </>
    )
}

export default MainButton