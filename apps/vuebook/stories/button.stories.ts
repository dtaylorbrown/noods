import { Button } from "@noods/vue";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    console.log(args);
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Vue",
  onClick: () => {
    console.log("Boop");
  },
};
