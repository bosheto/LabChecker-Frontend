import { useForm } from "react-hook-form"
import styles from "./css/HostForm.module.css"


function HostForm ({hostData, onSubmit}){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const cardClassName = `${styles.host_form}`
    const inputsClassName = `${styles.host_form_inputs}`
    const submitClassName = `${styles.host_form_submit_btn}`
    
    return(
        // <div className={cardClassName}>
        <form className={cardClassName} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Hostname</label>
                        <input defaultValue={hostData ? hostData.name : ""} {...register("name", {required: true})} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    
                    <div>
                        <label>IP</label>
                        <input defaultValue={hostData ? hostData.ip: ""} {...register("ip", {required: true})} />
                        {errors.ip && <span>This field is required</span>}
                    </div>

                    <div>
                        <label>Version</label>
                        <input defaultValue={hostData ? hostData.version: ""} {...register("version", {required: true})}/>
                        {errors.version && <span>This field is required</span>}
                    </div>
                    <input className={submitClassName} type="submit" defaultValue="Save changes"></input>
        </form>
        // </div>
    )
}

export default HostForm