

function ShowHostData ({hostData}) {

    return (
        <div>
            <h2>Name: {hostData.name}</h2>
            <p>Status: {hostData.staus}</p>
            <p>IP: {hostData.ip}</p>
            <p>Version: {hostData.version}</p>
            <p>Last online: {hostData.last_up}</p>
        </div>
    )
}

export default ShowHostData