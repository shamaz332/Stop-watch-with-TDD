import React from 'react';
import { shallow } from 'enzyme';
import Main from '../components/main';


describe('App', () => {

    let container: any
    beforeEach(() => (container = shallow(<Main />)))

    // 1st test  

    it("should render a <div/> of Main", () => {
        expect(container.find("div").length).toEqual(1)
    })

    it("should render a <div />", () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
    it("should render a <div />", () => {
        expect(container.find(".root").length).toBeGreaterThanOrEqual(1)
    })

});
