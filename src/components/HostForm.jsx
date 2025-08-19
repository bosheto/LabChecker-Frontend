
function HostForm ({data}) {

    return(
        <form action="">
            <label>Hostname:</label>
            <input type="text" placeholder={data.name}></input>
            <label>IP:</label>
            <input type="text" placeholder={data.ip}></input>
        </form>
    )

}

export default HostForm