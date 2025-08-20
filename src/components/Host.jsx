import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import EditHost from "./EditHost";
import ShowHostData from "./ShowHostData"

function Host () {
    const [hostData, setHostsData] = useState(null)
    const [queryParameters] = useSearchParams()
    const hostId = queryParameters.get("id")
    // const [isEditing, setIsEditing] = useState(false)
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
    }


    useEffect(() => {
        const fetchHost = async () => {
            try { 
                const url = 'http://krk-vnap-461-146-5.cisco.com:8080/api/v1/hosts/' + hostId
                console.log(url)
                const response = await fetch(url)
                if (!response.ok){
                    throw new Error(`HTTP error ! status: ${response.status}`)
                }

                const data = await response.json()
                setHostsData(data)
            }
            catch (error) {
                console.error("Error fetching host:", error)
            }
        }
        fetchHost()
    }, [])

    return (
        <div className="host-view-container">
            <label>
                <input 
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                
            />
            Edit
            </label>
            {hostData ? (    
                <div>
                    {checked ? (
                        <EditHost hostData = {hostData} />
                    ) : (
                        <ShowHostData hostData={hostData} />
                    )}
                </div>
            ) : (
                <p>Loading Host data...</p>
            )}
        </div>
    )
}

export default Host