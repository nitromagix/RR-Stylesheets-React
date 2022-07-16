//

import { useSearchParams } from "react-router-dom";

function NmxSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchHandler = (event) => {
    let search;
    if (event.target.value) {
      search = {
        x: searchParams.get("x"),
        q: event.target.value,
      };
    } else {
      search = {
        x: searchParams.get("x"),
      };
    }

    setSearchParams(search, { replace: false });
  };

  // console.log(searchParams.get("x"));
  return (
    <div style={{ display: "inline-block", paddingTop: 3 }}>
      <input
        value={searchParams.keyword}
        onChange={searchHandler}
        placeholder="Search..."
        style={{ width: 300 }}
      />
    </div>
  );
}

export default NmxSearch;
