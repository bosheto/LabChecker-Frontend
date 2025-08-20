import { useEffect, useState } from "react";
import HostCard from "./HostCard";
import { NavLink } from "react-router-dom";

function HostHandler() {
    const [hostsData, setHostsData] = useState(null);

    useEffect(() => {
        const fetchHosts = async () => {
            try {
                const response = await fetch('http://krk-vnap-461-146-5.cisco.com:8080/api/v1/hosts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                // --- MODIFICATION START ---
                // The API returns an object where keys are IDs and values are host objects.
                // We need to convert this object into an array of its values.
                const hostsArray = Object.values(data);
                setHostsData(hostsArray);
                // --- MODIFICATION END ---
            }
            catch (error) {
                console.error("Error fetching hosts:", error);
            }   
        }
        fetchHosts();
    }, []); // The empty dependency array ensures this effect runs only once after the initial render.

    return (
        <>
            <div className="host-container">
                {/* Check if hostsData is not null/loading and is an array with items */}
                {hostsData && Array.isArray(hostsData) && hostsData.length > 0 ? (
                    hostsData.map((host) => (
                        <HostCard
                            key={host.id} // Use host.id as the unique key
                            id={host.id}
                            name={host.name}
                            ip={host.ip}
                            version={host.version}
                            status={host.staus} // Note: API returns 'staus' (typo), not 'status'
                        />
                    ))
                ) : (
                    // Display a loading message or a message if no hosts are found
                    <p>
                        {hostsData === null ? "Loading hosts..." : "No hosts found."}
                    </p>
                )}
            </div>
            <div id="btn-section">
                <NavLink to="/new-host" id="new-host-btn">
                    Add new host
                </NavLink>
            </div>
        </>
    );
}

export default HostHandler;