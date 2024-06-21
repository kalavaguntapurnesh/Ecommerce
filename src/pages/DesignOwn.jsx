import React from "react";
import DesignNavbar from "./../components/DesignNavbar";
import RemainingBody from "../components/RemainingBody";
import { Tab, Tabs } from "../components/tabs";

const DesignOwn = () => {
  return (
    <div>
      <DesignNavbar />
      <RemainingBody />
      <Tabs>
        <Tab component="content of tab 1">Tab 1</Tab>
        <Tab component="content of tab 2" active>
          Tab 2
        </Tab>
        <Tab component="content of tab 3">Tab 3</Tab>
        <Tab component="content of tab 4">Tab 4</Tab>
      
      </Tabs>
    </div>
  );
};

export default DesignOwn;
