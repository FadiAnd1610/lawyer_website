import React from "react";
import Details from "./Deatails";
import Informatiom from "./Information";
import Help from "./Help";
import Team from "./Team";
import Work from "./Work";
import Footer from "./footer";

function Home() {
  return (
    <div>
      <Details />
      <Informatiom />
      <Help />
      <Team />
      <Footer />
    </div>
  );
}
export default Home;
