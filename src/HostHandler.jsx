import { useEffect, useState } from "react";
import HostCard from "./HostCard";

function HostHandler() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchHosts = async () => {
            try {
                const response = await fetch('http://krk-vnap-461-146-5.cisco.com:8080/hosts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUserData(data);
            }
            catch (error) {
                console.error("Error fetching hosts:", error);
            }   
        }
        fetchHosts();
    }, []);

    return (
        <div>
            {userData && Array.isArray(userData) ? (
                userData.map((host) => (
                    <HostCard
                        key={host.id}
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
    );
}

export default HostHandler;