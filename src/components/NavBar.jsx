import { Link, NavLink } from "react-router-dom"
import styles from "./css/NavBar.module.css"

function NavBar () {
    const navbarClassName = `${styles.navbar}`

    return (

    <>
         <nav className={navbarClassName}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Admin
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default NavBar