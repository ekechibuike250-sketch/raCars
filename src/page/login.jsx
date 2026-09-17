import LoginForm from "../forms/loginForm"
import { CircleCheck } from "lucide-react"
const LoginPage = () => {
    return (
        <div className="min-h-screen flex justify-center py-16 loginHero " style={{ background: "url('src/assets/loginHero2.webp'),linear-gradient(90deg,rgba(11, 13, 15, 1) 0%, rgba(21, 24, 28, 1) 79%, rgba(245, 245, 242, 1) 100%)", backgroundPosition: 'center', backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
            <div className=" w-[90%] md:w-[80%] mx-auto ">
                <div className="bg-surface w-[90%] md:w-[50%] mx-auto rounded-2xl h-auto p-5">
                    <div className="flex items-center justify-between mb-10 ">
                        <h1 className="text-paper font-heading text-card font-semibold tracking-tight  p-0">RavenCars </h1>
                        <div>
                            <CircleCheck className="text-muted pt-0" />
                        </div>
                    </div>

                    <div className="header-text  flex flex-col gap-5 justify-center text-center items-center">

                        <h2 className="text-paper font-heading text-card font-semibold ">Welcome Back </h2>
                        <p className="text-muted font-body">Dont't have an account <span className="underline ">signup</span></p>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 md:w-5 md:h-5  rounded-full bg-gold"></div>
                            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gold"></div>
                            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gold"></div>
                        </div>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
export default LoginPage