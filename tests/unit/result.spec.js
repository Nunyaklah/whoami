import Result from "@/views/Result.vue";
import { mount } from "@vue/test-utils";

describe("Result", () => {
  // Inspect the raw component options
  it("has data", () => {
    expect(typeof Result.data).toBe("function");
  });
});
