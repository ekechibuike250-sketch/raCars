import { Mail, Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
const LoginSchema = z.object({
    email: z.string().email('email is required'),
    password: z.string().min(1, 'password is required')

})

const LoginForm = () => {
    const [showPassWord, setShowPassWord] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema),
    })
    const submit = (data) => {
        console.log(data)

    }
    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit(submit)}>
                <fieldset className="fieldset flex bg-ink rounded-md px-2.5 items-center mb-1">
                    <div >
                        <Mail className="text-muted text-[14px]" />
                    </div>
                    <input type="text" id="email" className="input bg-ink rounded-md placeholder:text-muted placeholder:font-body text-paper font-body " placeholder="Email address" {...register('email')} />
                </fieldset>
                <p className="h-4 text-red-500 text-small font-body mb-4">{errors.email?.message}</p>
                <fieldset className="fieldset flex bg-ink rounded-md px-2.5 items-center justify-between mb-1 ">
                    <input type={`${showPassWord ? 'text' : 'password'}`} id="email" className="input bg-ink rounded-md pl-0 placeholder:text-muted placeholder:font-body text-paper font-body py-1 " placeholder="Password" {...register('password')} />
                    <div onClick={() => setShowPassWord(prev => !prev)} className="h-6 w-6 flex py-2 md:py-0">
                        {showPassWord ? <EyeClosed className="text-muted md:text-[12px] text-[5px] h-4  w-4 md:h-5 md:w-5" style={{ fontSize: '4px' }} /> : <Eye className="text-muted text-[14px] md:h-5 md:w-5 h-4 w-4" />}

                    </div>
                </fieldset>
                <p className="h-4 text-red-500 text-small font-body mb-4 ">{errors.password?.message}</p>
                <div className="mt-4 mb-5">
                    <button className="btn bg-glacial-dark border-0 rounded-md cursor-pointer w-full font-body text-button transition-all duration-150 ease-in hover:bg-gold" type="submit">Login </button>
                </div>
                <div className="mb-6">
                    <p className="text-muted font-body"><span className="font-bold">Forgotten</span> <span className="underline">Password </span> </p>
                </div>
                <div className="flex items-center  justify-between gap-2 mb-5">
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gold"></div>
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-paper"></div>
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gold"></div>
                </div>

            </form>
        </div>
    )
}
export default LoginForm