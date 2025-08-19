
import HostForm from "./HostForm"

function EditHost ({hostData}) {

    const onSubmit = (data) => {

        const newData = {
            id: hostData.id,
            name: data.name,
            ip: data.ip,
            version: data.version
        }
        

        const updateHost = async () => {
            try{
                const response = await fetch('http://krk-vnap-461-146-5.cisco.com:8080/hosts', {
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

    
    return(
        <>  
            <div>
                <h1>Edit Host</h1>
                <p>Use the bellow form to edit the host details</p>
            </div>
            <HostForm hostData={hostData} onSubmit={onSubmit}/>
        </>
    )

}

export default EditHost