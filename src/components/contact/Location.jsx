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
          <p>1140 6th Avenue ,fl 9th New York NY 10036</p>
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
          <p>1140 6th Avenue ,fl 9th New York NY 10036</p>
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
          <p>1140 6th Avenue ,fl 9th New York NY 10036</p>
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
          <p>1140 6th Avenue ,fl 9th New York NY 10036</p>
        </div>
        {/* Card 5 */}
        <div className="card">
          <div className="card-image">
            <Image src={USAYoming} alt="USA Map" width={50} height={50} />
          </div>
          <h3>USA Wyoming</h3>
          <p>1140 6th Avenue ,fl 9th New York NY 10036</p>
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
          <p>1140 6th Avenue ,fl 9th New York NY 10036</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
