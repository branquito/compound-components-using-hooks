import React from "react";

import { Tabs } from "./Tabs";

import "./styles.css";

export default function App() {
  return (
    <div className="App p-4">
      <Tabs>
        <Tabs.Tab label="a">I am some tab (A).</Tabs.Tab>
        <Tabs.Tab label="b">I am some tab (B).</Tabs.Tab>
        <Tabs.Panel label="a">this is a content for a tab A</Tabs.Panel>
        <Tabs.Panel label="b">this is a content for a tab B</Tabs.Panel>
      </Tabs>
    </div>
  );
}
