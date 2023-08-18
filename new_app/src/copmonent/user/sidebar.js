export default function sidebar() {
    return (

        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/profile">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Home</span>
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="donations-received" >
                        <i className="icon-layout menu-icon"></i>
                        <span className="menu-title"> Donations Received
                        </span>

                    </a>

                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="/payment-table">
                        <i className="icon-columns menu-icon"></i>
                        <span className="menu-title">Payments</span>
                    </a>


                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/add-donation" >
                        <i className="icon-grid-2 menu-icon"></i>
                        <span className="menu-title">Add Donation</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/settings" >
                        <i className="icon-bar-graph menu-icon"></i>
                        <span className="menu-title">Settings</span>

                    </a>

                </li>


            </ul>
        </nav>

    )
}