import React from "react";
import "./Package.css";
import PackageSingle from "../Package/Package";

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
      "http://localhost/admin/api/collections/get/package?token=22f8709abba293936facc262597237"
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
        <h1 className="HomePackTitle">
            Pakage Tours
            </h1>
            <small className="ExDetails">*All trips include free refreshments, fruit or snacks and snorkeling equipment on board. Also we provide water sports such as banana boat , tube boat , etc.</small>

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
