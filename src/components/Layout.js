import { Element } from "./Elements/Elements.js";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Element type="anchor" link="https://www.youtube.com" name="Youtube" />
          </li>
          <li>
            <Element type="anchor" link="/help" name="help" />
          </li>
          <li>
            <Element type="anchor" link="/logout" name="logout" />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export { Layout };
