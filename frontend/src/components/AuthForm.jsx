import InputBox from "./InputBox"
import {useState} from 'react'
import {User, Mail, KeyRound, EyeOff, Eye} from 'lucide-react'
import MainButton from "./MainButton"
import google from '../image/google.png' 
import {Link} from 'react-router-dom'

function AuthForm({ type }){
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visablePassword, setVisablePassword] = useState(false)

    function toggleVisable(){
        setVisablePassword((currentVal) => !currentVal)
    }

    function handelFormSubmit(e){
        e.preventDefault()
        console.log('form submitted');
        const data = {
            fullName,
            email,
            password
        }
        console.log(data);
        
    }

    function handelBtnClick(){
        console.log('btn click');
    }

    return(
        <>
            <div 
                className=" w-96 min-w-56"
            >
                <div 
                    className=""
                >
                    <div className=" my-10">
                        <h1 className=" text-center text-4xl font-mono font-bold">{ type }</h1>
                    </div>
                    <form 
                        onSubmit={handelFormSubmit}
                    >
                        {
                            type == "Sign Up" ? <div className="my-3 flex justify-center items-center gap-x-3 border border-zinc-600 pl-1">
                            <User size={20} />
                            <InputBox 
                                type="text"
                                placeholder="Full Name..."
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className=" px-2 py-1 w-full"
                            />
                        </div> : ""
                        }
                        <div className="my-3 flex justify-center items-center gap-x-3 border border-zinc-600 pl-1">
                            <Mail size={20} />
                            <InputBox 
                                type="email"
                                placeholder="user@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" px-2 py-1 w-full"
                            />
                        </div>
                        <div className="my-3 flex justify-center items-center gap-x-3 border border-zinc-600 pl-1">
                            <KeyRound size={20} />
                            <InputBox 
                                type={visablePassword ? "text" : "password"}
                                placeholder="xxxxxxx"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="py-1 px-2 w-full"
                            />
                            {visablePassword ? <Eye size={20} onClick={toggleVisable} className="pr-1 cursor-pointer" /> : <EyeOff size={20} onClick={toggleVisable} className=" pr-1 cursor-pointer" />}
                        </div>
                        <div className="flex justify-center items-center my-4">
                            <MainButton
                                onClick={handelBtnClick}
                                className=" rounded-md"
                            >
                                {type}
                            </MainButton>
                        </div>
                        <div className="flex justify-center items-center gap-x-2 my-3">
                            <hr className=" w-1/2 border border-zinc-300"/>
                            <span className="text-zinc-600">or</span>
                            <hr className=" w-1/2 border border-zinc-300"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <MainButton
                                onClick={handelBtnClick}
                                className=" flex justify-center items-center gap-x-2 rounded-md"
                            >
                                <img src={google} className="h-4" />
                                Continue with google
                            </MainButton>
                        </div>
                    </form>
                    <div className="flex justify-center items-center my-6">
                        {type == "Login User" ? 
                            <p>
                                if you don't have account to click on <Link
                                to="/signup" className=" underline text-zinc-400"> Sign Up  </Link>
                            </p>
                        :
                            <p>
                                if you have an account to click <Link
                                to="/login" className="underline text-zinc-400"> Log In  </Link>
                            </p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthForm