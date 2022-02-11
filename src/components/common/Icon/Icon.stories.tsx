import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon, IconType } from "./Icon";

export default {
  title: "components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const icon = Template.bind({});

icon.args = {
  icon: IconType.Basket,
  color: "white",
  viewBox: "0 0 80 80",
};
