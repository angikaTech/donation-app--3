export default function sidebar() {
    return (

        <nav className="sidebar sidebar-offcanvas" id="sidebar1">
            <ul className="nav">
                {/* <li className="nav-item">
                    <a className="nav-link" href="super_admin">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Home</span>
                    </a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="/super-admin">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Home</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/list-admin">
                        <i className="icon-columns menu-icon"></i>
                        <span className="menu-title"> User list</span>
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="add-donation" >
                        <i className="icon-grid-2 menu-icon"></i>
                        <span className="menu-title">Add Donation</span>
                    </a>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="sdfsfd" >
                        <i className="icon-bar-graph menu-icon"></i>
                        <span className="menu-title">Settings</span>

                    </a>

                </li> */}


            </ul>
        </nav>

    )
}