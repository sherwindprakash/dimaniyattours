import React from "react";
import "../Package/Package.css";
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
      "http://localhost/admin/api/collections/get/package?token=22f8709abba293936facc262597237&filter[Short_Trip]=Yes"
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
        <h1>Short Trips</h1>
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
