import Home from "./Home.vue";
import { setActivePinia, createPinia } from "pinia";

beforeEach(() => {
  // creates a fresh pinia and make it active so it's automatically picked
  // up by any useStore() call without having to pass it to it:
  // useStore(pinia)
  setActivePinia(createPinia());
});

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(Home);
  });

  it("checks welcome text", () => {
    cy.mount(Home);
    cy.get("p:first").should("have.text","- Get to know yourself")
  });

  it("checks welcome description", () => {
    cy.mount(Home);
    cy.get("[id=welcomeDesc").should("have.text"," We all have a personality trait, use this application to find out where you fit. This can help you in your relationships, career and your entire life. ")
  });


  it("checks how it works modal", () => {
    cy.mount(Home);
    cy.get('[id=modalbtn]').click()
  });
});
