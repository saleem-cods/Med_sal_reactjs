import OurServicesTitle from "../../utilities/OurServicesTitle";
import { Outlet } from "react-router-dom";
import SideServices from "../../user/Services/SideServices";
import Container from "../../utilities/Container";
import { useState } from "react";
export default function TitleAndSideServices() {
  return (
    <Container className={"overflow-hidden "}>

      <div className="flex lg:justify-normal justify-center  ">
        <SideServices />
        <div className="w-[75%]">
          <OurServicesTitle />

          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
}
