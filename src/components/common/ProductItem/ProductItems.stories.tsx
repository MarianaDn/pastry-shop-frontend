import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductItem } from "./ProductItem";
import Cake from "src/assets/images/cake.jpg";
import { ROUTES } from "src/constants/routes";

export default {
  title: "components/ProductItems",
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

export const productItem = Template.bind({});

productItem.args = {
  image: Cake,
  link: ROUTES.DESSERTS,
};
