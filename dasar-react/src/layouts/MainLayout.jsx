import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="box">
      {/* CONTENT */}
      <div>
        {/* TOPBAR */}
        <div>
          <Link to="/">Home</Link> | <Link to="/page1">Page 1</Link> |{" "}
          <Link to="/page2">Page 2</Link> |{" "}
          <Link to="/page3/123/nama">Page 3</Link> |{" "}
          <Link to="/page4?name=asd&role=admin">Page 4</Link>
        </div>

        {/* PAGE CONTENT */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
