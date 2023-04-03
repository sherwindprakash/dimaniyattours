import React, { useState } from "react";
import "./Form.css";

// Create an instance of Notyf
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte
const notyf = new Notyf();

const HomeSignUp = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Nationality, setNationality] = useState("");
  const [DayPhone, setDayPhone] = useState("");

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // DATA
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: {
        user: Email,
        password: Password,
        email: Email,
        group: "author",
        Full_Name: FullName,
        Nationality: Nationality,
        DayPhone: DayPhone,
        active: true,
        api_key: true,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/admin/api/cockpit/saveUser?token=22f8709abba293936facc262597237",
      requestOptions
    )
      //
      .then(function (response) {
        if (response.status === 412) {
          notyf.error("Username is already used!");
        } else {
          notyf.success(
            "Thank you for Register. Please login to access Dashboard"
          );
          setTimeout(() => window.location.reload(), 2000);
        }
      });

    //
  };

  return (
    <>
      <form id="SignUPFrom" className="SignUPForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="FullName">Full Name:</label>
          <input
            className="form-input"
            type="text"
            id="FullName"
            name="FullName"
            value={FullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            placeholder="Full Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="FullName">Email:</label>
          <input
            className="form-input"
            type="email"
            id="Email"
            name="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="Password">Password:</label>
          <input
            className="form-input"
            type="password"
            id="Password"
            name="Password"
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="Nationality">Country Code:</label>

          <select
            id="Nationality"
            className="form-input"
            onChange={(event) => setNationality(event.target.value)}
            name="Nationality"
          >
            <option code="OM" value="968">
              Oman (+968)
            </option>
            <option code="DZ" value="213">
              Algeria (+213)
            </option>
            <option code="AD" value="376">
              Andorra (+376)
            </option>
            <option code="AO" value="244">
              Angola (+244)
            </option>
            <option code="AI" value="1264">
              Anguilla (+1264)
            </option>
            <option code="AG" value="1268">
              Antigua &amp; Barbuda (+1268)
            </option>
            <option code="AR" value="54">
              Argentina (+54)
            </option>
            <option code="AM" value="374">
              Armenia (+374)
            </option>
            <option code="AW" value="297">
              Aruba (+297)
            </option>
            <option code="AU" value="61">
              Australia (+61)
            </option>
            <option code="AT" value="43">
              Austria (+43)
            </option>
            <option code="AZ" value="994">
              Azerbaijan (+994)
            </option>
            <option code="BS" value="1242">
              Bahamas (+1242)
            </option>
            <option code="BH" value="973">
              Bahrain (+973)
            </option>
            <option code="BD" value="880">
              Bangladesh (+880)
            </option>
            <option code="BB" value="1246">
              Barbados (+1246)
            </option>
            <option code="BY" value="375">
              Belarus (+375)
            </option>
            <option code="BE" value="32">
              Belgium (+32)
            </option>
            <option code="BZ" value="501">
              Belize (+501)
            </option>
            <option code="BJ" value="229">
              Benin (+229)
            </option>
            <option code="BM" value="1441">
              Bermuda (+1441)
            </option>
            <option code="BT" value="975">
              Bhutan (+975)
            </option>
            <option code="BO" value="591">
              Bolivia (+591)
            </option>
            <option code="BA" value="387">
              Bosnia Herzegovina (+387)
            </option>
            <option code="BW" value="267">
              Botswana (+267)
            </option>
            <option code="BR" value="55">
              Brazil (+55)
            </option>
            <option code="BN" value="673">
              Brunei (+673)
            </option>
            <option code="BG" value="359">
              Bulgaria (+359)
            </option>
            <option code="BF" value="226">
              Burkina Faso (+226)
            </option>
            <option code="BI" value="257">
              Burundi (+257)
            </option>
            <option code="KH" value="855">
              Cambodia (+855)
            </option>
            <option code="CM" value="237">
              Cameroon (+237)
            </option>
            <option code="CA" value="1">
              Canada (+1)
            </option>
            <option code="CV" value="238">
              Cape Verde Islands (+238)
            </option>
            <option code="KY" value="1345">
              Cayman Islands (+1345)
            </option>
            <option code="CF" value="236">
              Central African Republic (+236)
            </option>
            <option code="CL" value="56">
              Chile (+56)
            </option>
            <option code="CN" value="86">
              China (+86)
            </option>
            <option code="CO" value="57">
              Colombia (+57)
            </option>
            <option code="KM" value="269">
              Comoros (+269)
            </option>
            <option code="CG" value="242">
              Congo (+242)
            </option>
            <option code="CK" value="682">
              Cook Islands (+682)
            </option>
            <option code="CR" value="506">
              Costa Rica (+506)
            </option>
            <option code="HR" value="385">
              Croatia (+385)
            </option>
            <option code="CU" value="53">
              Cuba (+53)
            </option>
            <option code="CY" value="90392">
              Cyprus North (+90392)
            </option>
            <option code="CY" value="357">
              Cyprus South (+357)
            </option>
            <option code="CZ" value="42">
              Czech Republic (+42)
            </option>
            <option code="DK" value="45">
              Denmark (+45)
            </option>
            <option code="DJ" value="253">
              Djibouti (+253)
            </option>
            <option code="DM" value="1809">
              Dominica (+1809)
            </option>
            <option code="DO" value="1809">
              Dominican Republic (+1809)
            </option>
            <option code="EC" value="593">
              Ecuador (+593)
            </option>
            <option code="EG" value="20">
              Egypt (+20)
            </option>
            <option code="SV" value="503">
              El Salvador (+503)
            </option>
            <option code="GQ" value="240">
              Equatorial Guinea (+240)
            </option>
            <option code="ER" value="291">
              Eritrea (+291)
            </option>
            <option code="EE" value="372">
              Estonia (+372)
            </option>
            <option code="ET" value="251">
              Ethiopia (+251)
            </option>
            <option code="FK" value="500">
              Falkland Islands (+500)
            </option>
            <option code="FO" value="298">
              Faroe Islands (+298)
            </option>
            <option code="FJ" value="679">
              Fiji (+679)
            </option>
            <option code="FI" value="358">
              Finland (+358)
            </option>
            <option code="FR" value="33">
              France (+33)
            </option>
            <option code="GF" value="594">
              French Guiana (+594)
            </option>
            <option code="PF" value="689">
              French Polynesia (+689)
            </option>
            <option code="GA" value="241">
              Gabon (+241)
            </option>
            <option code="GM" value="220">
              Gambia (+220)
            </option>
            <option code="GE" value="7880">
              Georgia (+7880)
            </option>
            <option code="DE" value="49">
              Germany (+49)
            </option>
            <option code="GH" value="233">
              Ghana (+233)
            </option>
            <option code="GI" value="350">
              Gibraltar (+350)
            </option>
            <option code="GR" value="30">
              Greece (+30)
            </option>
            <option code="GL" value="299">
              Greenland (+299)
            </option>
            <option code="GD" value="1473">
              Grenada (+1473)
            </option>
            <option code="GP" value="590">
              Guadeloupe (+590)
            </option>
            <option code="GU" value="671">
              Guam (+671)
            </option>
            <option code="GT" value="502">
              Guatemala (+502)
            </option>
            <option code="GN" value="224">
              Guinea (+224)
            </option>
            <option code="GW" value="245">
              Guinea - Bissau (+245)
            </option>
            <option code="GY" value="592">
              Guyana (+592)
            </option>
            <option code="HT" value="509">
              Haiti (+509)
            </option>
            <option code="HN" value="504">
              Honduras (+504)
            </option>
            <option code="HK" value="852">
              Hong Kong (+852)
            </option>
            <option code="HU" value="36">
              Hungary (+36)
            </option>
            <option code="IS" value="354">
              Iceland (+354)
            </option>
            <option code="IN" value="91">
              India (+91)
            </option>
            <option code="ID" value="62">
              Indonesia (+62)
            </option>
            <option code="IR" value="98">
              Iran (+98)
            </option>
            <option code="IQ" value="964">
              Iraq (+964)
            </option>
            <option code="IE" value="353">
              Ireland (+353)
            </option>
            <option code="IL" value="972">
              Israel (+972)
            </option>
            <option code="IT" value="39">
              Italy (+39)
            </option>
            <option code="JM" value="1876">
              Jamaica (+1876)
            </option>
            <option code="JP" value="81">
              Japan (+81)
            </option>
            <option code="JO" value="962">
              Jordan (+962)
            </option>
            <option code="KZ" value="7">
              Kazakhstan (+7)
            </option>
            <option code="KE" value="254">
              Kenya (+254)
            </option>
            <option code="KI" value="686">
              Kiribati (+686)
            </option>
            <option code="KP" value="850">
              Korea North (+850)
            </option>
            <option code="KR" value="82">
              Korea South (+82)
            </option>
            <option code="KW" value="965">
              Kuwait (+965)
            </option>
            <option code="KG" value="996">
              Kyrgyzstan (+996)
            </option>
            <option code="LA" value="856">
              Laos (+856)
            </option>
            <option code="LV" value="371">
              Latvia (+371)
            </option>
            <option code="LB" value="961">
              Lebanon (+961)
            </option>
            <option code="LS" value="266">
              Lesotho (+266)
            </option>
            <option code="LR" value="231">
              Liberia (+231)
            </option>
            <option code="LY" value="218">
              Libya (+218)
            </option>
            <option code="LI" value="417">
              Liechtenstein (+417)
            </option>
            <option code="LT" value="370">
              Lithuania (+370)
            </option>
            <option code="LU" value="352">
              Luxembourg (+352)
            </option>
            <option code="MO" value="853">
              Macao (+853)
            </option>
            <option code="MK" value="389">
              Macedonia (+389)
            </option>
            <option code="MG" value="261">
              Madagascar (+261)
            </option>
            <option code="MW" value="265">
              Malawi (+265)
            </option>
            <option code="MY" value="60">
              Malaysia (+60)
            </option>
            <option code="MV" value="960">
              Maldives (+960)
            </option>
            <option code="ML" value="223">
              Mali (+223)
            </option>
            <option code="MT" value="356">
              Malta (+356)
            </option>
            <option code="MH" value="692">
              Marshall Islands (+692)
            </option>
            <option code="MQ" value="596">
              Martinique (+596)
            </option>
            <option code="MR" value="222">
              Mauritania (+222)
            </option>
            <option code="YT" value="269">
              Mayotte (+269)
            </option>
            <option code="MX" value="52">
              Mexico (+52)
            </option>
            <option code="FM" value="691">
              Micronesia (+691)
            </option>
            <option code="MD" value="373">
              Moldova (+373)
            </option>
            <option code="MC" value="377">
              Monaco (+377)
            </option>
            <option code="MN" value="976">
              Mongolia (+976)
            </option>
            <option code="MS" value="1664">
              Montserrat (+1664)
            </option>
            <option code="MA" value="212">
              Morocco (+212)
            </option>
            <option code="MZ" value="258">
              Mozambique (+258)
            </option>
            <option code="MN" value="95">
              Myanmar (+95)
            </option>
            <option code="NA" value="264">
              Namibia (+264)
            </option>
            <option code="NR" value="674">
              Nauru (+674)
            </option>
            <option code="NP" value="977">
              Nepal (+977)
            </option>
            <option code="NL" value="31">
              Netherlands (+31)
            </option>
            <option code="NC" value="687">
              New Caledonia (+687)
            </option>
            <option code="NZ" value="64">
              New Zealand (+64)
            </option>
            <option code="NI" value="505">
              Nicaragua (+505)
            </option>
            <option code="NE" value="227">
              Niger (+227)
            </option>
            <option code="NG" value="234">
              Nigeria (+234)
            </option>
            <option code="NU" value="683">
              Niue (+683)
            </option>
            <option code="NF" value="672">
              Norfolk Islands (+672)
            </option>
            <option code="NP" value="670">
              Northern Marianas (+670)
            </option>
            <option code="NO" value="47">
              Norway (+47)
            </option>
            <option code="PW" value="680">
              Palau (+680)
            </option>
            <option code="PA" value="507">
              Panama (+507)
            </option>
            <option code="PG" value="675">
              Papua New Guinea (+675)
            </option>
            <option code="PY" value="595">
              Paraguay (+595)
            </option>
            <option code="PE" value="51">
              Peru (+51)
            </option>
            <option code="PH" value="63">
              Philippines (+63)
            </option>
            <option code="PL" value="48">
              Poland (+48)
            </option>
            <option code="PT" value="351">
              Portugal (+351)
            </option>
            <option code="PR" value="1787">
              Puerto Rico (+1787)
            </option>
            <option code="QA" value="974">
              Qatar (+974)
            </option>
            <option code="RE" value="262">
              Reunion (+262)
            </option>
            <option code="RO" value="40">
              Romania (+40)
            </option>
            <option code="RU" value="7">
              Russia (+7)
            </option>
            <option code="RW" value="250">
              Rwanda (+250)
            </option>
            <option code="SM" value="378">
              San Marino (+378)
            </option>
            <option code="ST" value="239">
              Sao Tome &amp; Principe (+239)
            </option>
            <option code="SA" value="966">
              Saudi Arabia (+966)
            </option>
            <option code="SN" value="221">
              Senegal (+221)
            </option>
            <option code="CS" value="381">
              Serbia (+381)
            </option>
            <option code="SC" value="248">
              Seychelles (+248)
            </option>
            <option code="SL" value="232">
              Sierra Leone (+232)
            </option>
            <option code="SG" value="65">
              Singapore (+65)
            </option>
            <option code="SK" value="421">
              Slovak Republic (+421)
            </option>
            <option code="SI" value="386">
              Slovenia (+386)
            </option>
            <option code="SB" value="677">
              Solomon Islands (+677)
            </option>
            <option code="SO" value="252">
              Somalia (+252)
            </option>
            <option code="ZA" value="27">
              South Africa (+27)
            </option>
            <option code="ES" value="34">
              Spain (+34)
            </option>
            <option code="LK" value="94">
              Sri Lanka (+94)
            </option>
            <option code="SH" value="290">
              St. Helena (+290)
            </option>
            <option code="KN" value="1869">
              St. Kitts (+1869)
            </option>
            <option code="SC" value="1758">
              St. Lucia (+1758)
            </option>
            <option code="SD" value="249">
              Sudan (+249)
            </option>
            <option code="SR" value="597">
              Suriname (+597)
            </option>
            <option code="SZ" value="268">
              Swaziland (+268)
            </option>
            <option code="SE" value="46">
              Sweden (+46)
            </option>
            <option code="CH" value="41">
              Switzerland (+41)
            </option>
            <option code="SI" value="963">
              Syria (+963)
            </option>
            <option code="TW" value="886">
              Taiwan (+886)
            </option>
            <option code="TJ" value="7">
              Tajikstan (+7)
            </option>
            <option code="TH" value="66">
              Thailand (+66)
            </option>
            <option code="TG" value="228">
              Togo (+228)
            </option>
            <option code="TO" value="676">
              Tonga (+676)
            </option>
            <option code="TT" value="1868">
              Trinidad &amp; Tobago (+1868)
            </option>
            <option code="TN" value="216">
              Tunisia (+216)
            </option>
            <option code="TR" value="90">
              Turkey (+90)
            </option>
            <option code="TM" value="7">
              Turkmenistan (+7)
            </option>
            <option code="TM" value="993">
              Turkmenistan (+993)
            </option>
            <option code="TC" value="1649">
              Turks &amp; Caicos Islands (+1649)
            </option>
            <option code="TV" value="688">
              Tuvalu (+688)
            </option>
            <option code="UG" value="256">
              Uganda (+256)
            </option>
            <option code="GB" value="44">
              UK (+44)
            </option>
            <option code="UA" value="380">
              Ukraine (+380)
            </option>
            <option code="AE" value="971">
              United Arab Emirates (+971)
            </option>
            <option code="UY" value="598">
              Uruguay (+598)
            </option>
            <option code="US" value="1">
              USA (+1)
            </option>
            <option code="UZ" value="7">
              Uzbekistan (+7)
            </option>
            <option code="VU" value="678">
              Vanuatu (+678)
            </option>
            <option code="VA" value="379">
              Vatican City (+379)
            </option>
            <option code="VE" value="58">
              Venezuela (+58)
            </option>
            <option code="VN" value="84">
              Vietnam (+84)
            </option>
            <option code="VG" value="84">
              Virgin Islands - British (+1284)
            </option>
            <option code="VI" value="84">
              Virgin Islands - US (+1340)
            </option>
            <option code="WF" value="681">
              Wallis &amp; Futuna (+681)
            </option>
            <option code="YE" value="969">
              Yemen (North)(+969)
            </option>
            <option code="YE" value="967">
              Yemen (South)(+967)
            </option>
            <option code="ZM" value="260">
              Zambia (+260)
            </option>
            <option code="ZW" value="263">
              Zimbabwe (+263)
            </option>
          </select>
        </div>

        <div className="inputGroup">
          <label htmlFor="FullName">Phone:</label>
          <input
            className="form-input"
            type="number"
            id="Phone"
            name="Phone"
            value={DayPhone}
            onChange={(event) => setDayPhone(event.target.value)}
            required
            placeholder="Phone"
          />
        </div>

        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default HomeSignUp;
