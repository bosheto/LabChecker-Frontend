import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import HostForm from "./HostForm";

function Host () {
    const [hostData, setHostsData] = useState(null);
    const [queryParameters] = useSearchParams()
    const hostId = queryParameters.get("id")

    useEffect(() => {
        const fetchHost = async () => {
            try { 
                const url = 'http://krk-vnap-461-146-5.cisco.com:8080/hosts/' + hostId
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
        <div>
            {hostData ? (
                <div>
                    {/* <h1>Host page</h1>
                    <p>{hostData.ip}</p> */}
                    <HostForm data = {hostData} />
                </div>
            ) : (
                <p>Loading Host data...</p>
            )}
        </div>
    )
}

export default Host