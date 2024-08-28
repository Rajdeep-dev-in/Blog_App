import AuthForm from "../components/AuthForm"

function Signup(){
    return(
        <>
            <div
                className="flex justify-center items-center"
            >
                <AuthForm 
                    type="Sign Up"
                />
            </div>
        </>
    )
}

export default Signup