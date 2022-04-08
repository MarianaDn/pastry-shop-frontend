import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductItem } from "./ProductItem";
import Cake from "src/assets/images/cake.jpg";

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
  category: "cake",
};
