import "./navbar.css";
import LogoutButton from "@/components/logoutButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <nav>
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="rgba(47, 153, 42, 1)"
            >
              <path d="M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 001 1h8a1 1 0 001-1v-5h4v5a1 1 0 001 1h2a1 1 0 001-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 8V4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 11H6v-3h4v3z"></path>
            </svg>
            <span>Logo</span>
          </div>
          <div className="right_section">
            <ul className="list_items">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={"/products"}>
                <li>Products</li>
              </Link>
              <Link href={"/login"}>
                <li>Login</li>
              </Link>
              <LogoutButton />
            </ul>
            <div className="cart_container">
              <div className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ msFilter: "" }}
                  fill="rgba(255, 255, 255, 1)"
                >
                  <path d="M21.822 7.431A1 1 0 0021 7H7.333L6.179 4.23A1.994 1.994 0 004.333 3H2v2h2.333l4.744 11.385A1 1 0 0010 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 00-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
