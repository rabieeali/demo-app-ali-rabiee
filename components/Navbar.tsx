import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="d-flex align-items-center justify-content-between bg-gradient p-4 text-white bg-dark">
        <div className="fw-bolder fs-4 text-warning">
          <Link className="nav-link mx-2" href="/">
            Next App
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <Link className="nav-link mx-2" href="/weather">
            Weather App
          </Link>
          <Link className="nav-link mx-2" href="/products">
            Products App
          </Link>
          <Link className="nav-link mx-2" href="/posts">
            Debouncing Search
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
