import React, { useEffect } from "react";
import "./Package.css";
import PackageSingle from "../../components/Package/Package";

class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost/dimaniyattours_api/admin/admin/api/collections/get/package?token=22f8709abba293936facc262597237"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.entries,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <div className="loading loading-lg"></div>
        </div>
      );
    return (
      <>
        <h1>Pakages</h1>
        <div className="Package">
          {items &&
            items.map((item) => (
              <div className="PackSingle">
                <PackageSingle ID={item._id} key={item._id} />
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default Package;
