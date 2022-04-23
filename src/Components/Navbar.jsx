import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ height:"40px", textAlign:"center", background:"skyblue", paddingTop:"10px" }}>
      <Link style={{ margin: "2%", marginTop:"10px" }} to={"/"}>
        Home
      </Link>
      <Link style={{ margin: "2%", marginTop:"10px" }} to={"/listing/create"}>
        Create Entity
      </Link>
    </div>
  );
};
