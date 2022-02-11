import { render, screen } from "@testing-library/react";
import { Icon, IconType } from "./Icon";

describe("<Icon />", () => {
  it("should render component Icon", () => {
    render(<Icon icon={IconType.Facebook} />);

    const section = screen.getByTestId("icon");

    expect(section).toHaveClass("MuiSvgIcon-root");
  });
});
