import { Dropdown } from "./components/Dropdown/Dropdown.js";
import { Element } from "./components/Elements/Elements.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.js"
import React from "react";

const element_one = {
  name: 'Youtube',
  link: 'https://www.youtube.com'
}
const element_two = {
  name: 'Help',
  link: '/help'
}
const element_three = {
  name: 'Logout',
  link: '/logout'
}

const dropdown_details = {
  heading: 'Tanmay Jain',
  options: [element_one, element_two, element_three]
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <>
                <Dropdown {...dropdown_details}/>
                <Layout />
              </>
            } />
            <Route path="youtube" element={
              <Element type="anchor" link={element_one.link} name={element_one.name} />
            } />
            <Route path="help" element={
              <Element type="anchor" link={element_two.link} name={element_two.name} />
            } />
            <Route path="logout" element={
              <Element type="anchor" link={element_three.link} name={element_three.name} />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
