import { screen } from "@testing-library/react";
import { renderWithTheme } from "src/utils/test-utils";
import { IntroSection } from "./IntroSection";

describe("<Footer />", () => {
  let section: HTMLElement;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    renderWithTheme(<IntroSection />);
    section = screen.getByTestId("introSection");
  });

  it("should render footer snapshot", () => {
    expect(section).toMatchSnapshot();
  });

  it("should render footer section", () => {
    expect(section).toBeInTheDocument();
  });
});
