import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PackageSingle({ ID }) {
  const [post, setPost] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost/admin/api/collections/entry/package/" +
          ID +
          "?token=22f8709abba293936facc262597237",
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
        }
      );
      await response
        .json()

        .then(function (response) {
          //console.log("Package Single", response);
          setPost(response);
        });
    };
    fetchData();
  }, [ID]);

  if (!post) return null;

  return (
    <Link title="Destination" to={`/en/packages/` + post.title_slug}>
      <div className="PackageHolder">
        <div className="Title">
          <h2>{post.title}</h2>
        </div>
        <img
          className="PackageHolderImage"
          fetchpriority="low"
          height="700"
          width="480"
          alt={post.title}
          title={post.title}
          src={`http://localhost/admin/storage/uploads/` + post.image.path}
        />
      </div>
    </Link>
  );
}
export default PackageSingle;
