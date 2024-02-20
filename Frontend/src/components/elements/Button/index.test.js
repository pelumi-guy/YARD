import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Button from "./index";

test("should not allowed click button if isDisabled is present", async () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test('should render loading/spinner', async () => {
  const {container, getByText} = render(<Button isLoading></Button>)

  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector("span")).toBeInTheDocument()
})

test('should render <a></a> tag', async () => {
  const {container} = render(<Button type="link" isExternal></Button>)

  expect(container.querySelector("a")).toBeInTheDocument()
})

test('should render <Link> component', async () => {
  const {container} = render(<Router>
    <Button href="" type="link"></Button>
  </Router>)

  expect(container.querySelector("a")).toBeInTheDocument()
})
