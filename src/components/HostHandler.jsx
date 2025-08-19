import { useEffect, useState } from "react";
import HostCard from "./HostCard";

function HostHandler() {
    const [hostsData, setHostsData] = useState(null);

    useEffect(() => {
        const fetchHosts = async () => {
            try {
                const response = await fetch('http://krk-vnap-461-146-5.cisco.com:8080/hosts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setHostsData(data);
            }
            catch (error) {
                console.error("Error fetching hosts:", error);
            }   
        }
        fetchHosts();
    }, []);
    console.log(hostsData)
    return (
        <>
            <div className="host-container">
                {hostsData && Array.isArray(hostsData) ? (
                    hostsData.map((host) => (
                        <HostCard
                        key={host.id}
                        id={host.id}
                        name={host.name}
                        ip={host.ip}
                        version={host.version}
                        status={host.staus}
                        
                        />
                    ))
                ) : (
                    <p>Loading hosts...</p>
                )}
            </div>
           
        </>
    );
}

export default HostHandler;