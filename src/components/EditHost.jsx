
import HostForm from "./HostForm"
import classes from "./css/EditHost.module.css"


function EditHost ({hostData}) {

    const onSubmit = (data) => {

        const newData = {
            id: hostData.id,
            name: data.name,
            ip: data.ip.trim(),
            version: data.version
        }
        

        const updateHost = async () => {
            try{
                let url = 'http://krk-vnap-461-146-5.cisco.com:8080/api/v1/hosts/' + newData.id
                const response = await fetch(url , {
                    method: "PUT",
                    body: JSON.stringify(newData), 
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                window.location.replace("/")
            }catch (error) {
                console.error("Error updating hosts:", error);
            }
        }

        updateHost()
        
    }

    const onDelete = async () => {
        try{
            let url = 'http://krk-vnap-461-146-5.cisco.com:8080/api/v1/hosts/' + hostData.id
            const response = await fetch (url, {method:"DELETE"})
            if(!response.ok){
                console.error("Error updating hosts:", error);
            }
            window.location.replace("/")    
        }catch (error) {
                console.error("Error updating hosts:", error);
        }
    }

    const class_name = `${classes.editHost}`


    return(
            <div className={class_name}>
                <p>Use the bellow form to edit the host details</p>
                    <HostForm hostData={hostData} onSubmit={onSubmit}/>                
                <button onClick={onDelete}>delete</button>
            </div>
    )

}

export default EditHost