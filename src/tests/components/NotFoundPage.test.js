import React from "react";
import { shallow } from "enzyme";

import NonFoundPage from "../../components/NotFoundPage";

test("should render NotFoundPage Component correctly", () => {
  const wrapper = shallow(<NonFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
