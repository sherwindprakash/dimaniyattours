import "./Form.css";

export default function Form() {
  return (
    <form className="homeForm">
      <label htmlFor="FullName">Full Name:</label>
      <input type="text" id="FullName" />
      <label htmlFor="Email">Email:</label>
      <input type="text" id="Email" />
      <label htmlFor="MobileNumber">Mobile Number:</label>
      <input type="tel" id="MobileNumber" />
      <label htmlFor="Message">Message:</label>
      <textarea id="Message" rows="4" cols="50"></textarea>

      <input className="Submit" type="submit" />
    </form>
  );
}
