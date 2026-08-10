import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <hr />
      {children}
    </div>
  );
}

export default Layout;