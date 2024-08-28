import AuthForm from "../components/AuthForm"

function Login(){
    return(
        <>
            <div
                className=" flex justify-center items-center"
            >
                <AuthForm 
                    type="Login User"
                />
            </div>
        </>
    )
}

export default Login