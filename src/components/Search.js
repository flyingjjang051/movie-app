import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div id="search" className="search">
      <input
        type="text"
        placeholder="search movie"
        onChange={function (e) {
          //console.log(this);
          setSearch(e.target.value);
        }}
      />
      <Link className="btnSearch" to={`/search?movie=${search}`}>
        search
      </Link>
    </div>
  );
}
