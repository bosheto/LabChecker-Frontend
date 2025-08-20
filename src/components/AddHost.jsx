import HostForm from "./HostForm"


function AddHost (){

    const onSubmit = (data) => {
        
        const newHostData = {
            ip: data.ip,
            name: data.name,
            version: data.version,
            status: "Down"
        } 

        const postHost = async () => {
            try {
                const response = await fetch('http://krk-vnap-461-146-5.cisco.com:8080/api/v1/hosts', {
                    method: "POST",
                    body: JSON.stringify(newHostData),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                
                window.location.replace("/")
            } catch (error) {
                console.error("Error creating hosts:", error);
            }
        }

        postHost()
    }

    return (
        <div>
            <HostForm onSubmit={onSubmit}/>
        </div>
    )
}

export default AddHost