import { shallowMount , localVue} from "@vue/test-utils";
import Personality from "@/views/Personality.vue";
import Vuex from 'vuex';



describe.only("Personality", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getQuestions: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  const wrapper = shallowMount(Personality, {localVue})


  it("has data", () => {
    expect(typeof Personality.data).toBe("function");
  });

  it('increase button should add one to index', () => {
      expect(wrapper.vm.index).toBe(0)
      const increaseButton = wrapper.find('button')
      increaseButton.trigger('click')
      expect(wrapper.vm.index).toBe(1)
  })
});
