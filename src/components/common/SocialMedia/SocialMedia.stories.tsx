import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SocialMedia } from "./SocialMedia";

export default {
  title: "components/SocialMedia",
  component: SocialMedia,
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMedia> = () => <SocialMedia />;

export const socialMedia = Template.bind({});
