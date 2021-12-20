import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button className="layoutBF">
                <Link to="/frontpage">Frontpage</Link>
            </button>
          </li>
          <li>
            <button className="layoutBC">
                <Link to="/chat">Chat</Link>
            </button>
          </li>
          <li>
            <button className="layoutBP">
                <Link to="/profile">Profile</Link>
            </button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;