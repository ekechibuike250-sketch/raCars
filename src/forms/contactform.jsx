import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const contactSchema = z.object({
    name: z.string().min(2, "must be atleast two"),
    email: z.string().email('a valid email is required'),
    message: z.string().min(10, 'message is too short')
})
const ContactFormc = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(contactSchema)
    });
    const onSubmitData = (data) => {
        console.log(data)

    }
    return (
        <div className="bg-surface-light rounded-2xl p-5 w-full ">
            <form onSubmit={handleSubmit(onSubmitData)} className="">
                <fieldset className="fieldset mb-4">
                    <label className="label text-gold text-small font-body font-bold" htmlFor="name">Name</label>
                    <input type="text" id="name" className="input w-full text-paper placeholder:text-muted bg-ink rounded-md focus:border focus:border-gold" placeholder="Name" {...register('name')} />
                    <p className="h-4 text-red-500 text-sm ">{errors.name?.message}</p>
                </fieldset>
                <fieldset className="fieldset mb-4">
                    <label className="label text-gold text-small font-body font-bold " htmlFor="name">Email</label>
                    <input type="text" id="email  " className="input w-full text-paper placeholder:text-muted bg-ink rounded-md font-body focus:border focus:border-gold" placeholder="Email  " {...register('email')} />
                    <p className="h-4 text-red-500 text-sm ">{errors.email?.message}</p>
                </fieldset>
                <fieldset className="fieldset mb-8">
                    <legend className="fieldset-legend text-small text-gold font-body ">Message</legend>
                    <textarea className="textarea h-24 bg-ink w-full rounded-md placeholder:text-muted  resize-none text-paper font-body focus:border focus:border-gold " placeholder="Message..." {...register('message')}></textarea>
                    <p className="h-4 text-red-500 text-small">{errors.message?.message}</p>
                </fieldset>
                <div className="mb-5">
                    <button className="btn w-full font-body text-button text-ink bg-gold border-0 rounded-md" type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}
export default ContactFormc