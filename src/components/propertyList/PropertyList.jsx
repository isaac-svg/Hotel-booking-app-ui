import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  let { data, loading, error } = useFetch("/api/hotels/countByType");
// console.log(data, "data")
  const images = [
    "https://images.unsplash.com/photo-1560703649-e3055f28bcf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1447180306/photo/woman-enjoys-magnificent-view-from-hotel-window.webp?b=1&s=170667a&w=0&k=20&c=xlVEMpQzq6pO48dZnCVHEEZdLB-Z60_JGuKUCcoCSx0=",
    "https://images.unsplash.com/photo-1675870191236-9f1770235165?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1694267900696-0d8b1cff6728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1689605542182-b8381201b969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images?.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
