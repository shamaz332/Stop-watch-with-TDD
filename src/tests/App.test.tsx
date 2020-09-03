import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Main from "../components/main"

describe('App', () => {

  let container : any
  beforeEach(() => (container = shallow(<App />)))

  // 1st test  

  it("should render a <div/>",()=>{
    expect(container.find("div").length).toEqual(1)
  })

it("should render the Main Component", () => {
    expect(container.containsMatchingElement(<Main />)).toEqual(true)
  })

});
