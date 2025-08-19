import { useForm } from "react-hook-form"


function HostForm ({hostData, onSubmit}){

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Hostname</label>
            <input defaultValue={hostData ? hostData.name : ""} {...register("name", {required: true})} />
            {errors.name && <span>This field is required</span>}
            
            <label>IP</label>
            <input defaultValue={hostData ? hostData.ip: ""} {...register("ip", {required: true})} />
            {errors.ip && <span>This field is required</span>}
            
            <label>Version</label>
            <input defaultValue={hostData ? hostData.version: ""} {...register("version", {required: true})}/>
            {errors.version && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    )
}

export default HostForm