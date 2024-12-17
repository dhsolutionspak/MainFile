import React from "react";
import Image from "next/image"; // Import Next.js Image component

// Images (replace with your actual image paths)
import KuwaitImage from "/public/assets/imgs/location/kuwait.png";
import pakistanImage from "/public/assets/imgs/location/map.png";
import saudiImage from "/public/assets/imgs/location/saudi-arabia.png";
import USACalifornia from "/public/assets/imgs/location/statue-of-liberty.png";
import USAYoming from "/public/assets/imgs/location/usa.png";
import UnitedKingdom from "/public/assets/imgs/location/united-kingdom.png";

const Location = () => {
  return (
    <section className="location-section">
      <h1>Our Locations</h1>
      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <div className="card-image">
            <Image
              src={pakistanImage}
              alt="Map of Pakistan"
              width={50}
              height={50}
            />
          </div>
          <h3>Pakistan</h3>
          <p>Park Road , Near Chak Shahzad Islamabad Pakistan</p>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="card-image">
            <Image
              src={KuwaitImage}
              alt="Kuwait Location"
              width={50}
              height={50}
            />
          </div>
          <h3>Kuwait</h3>
          <p>Street: P O Box: 6648 Salmiya, 22077</p>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="card-image">
            <Image
              src={USACalifornia}
              alt="Statue of Liberty"
              width={50}
              height={50}
            />
          </div>
          <h3>USA California</h3>
          <p>339 South Blue Spring Avenue Oxnard, CA 93030</p>
        </div>
        {/* Card 4 */}
        <div className="card">
          <div className="card-image">
            <Image
              src={saudiImage}
              alt="Saudi Arabia Location"
              width={50}
              height={50}
            />
          </div>
          <h3>Saudi Arab</h3>
          <p>Street King Abdulaziz Rd, As Safra</p>
        </div>
        {/* Card 5 */}
        <div className="card">
          <div className="card-image">
            <Image src={USAYoming} alt="USA Map" width={50} height={50} />
          </div>
          <h3>USA Wyoming</h3>
          <p>1309 Coffeen Avenue STE 13600 Sheridan Wyoming 82801</p>
        </div>
        {/* Card 6 */}
        <div className="card">
          <div className="card-image">
            <Image
              src={UnitedKingdom}
              alt="United Kingdom Location"
              width={50}
              height={50}
            />
          </div>
          <h3>United Kingdom</h3>
          <p>Vogue House, 1 Hanover Square Mayfair</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
