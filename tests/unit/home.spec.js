import Home from "@/views/Home.vue";
import { mount } from "@vue/test-utils";

describe("Home", () => {
  // Inspect the raw component options
  it("has data", () => {
    expect(typeof Home.data).toBe("function");
  });
});
