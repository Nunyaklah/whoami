# Personality Test

This is an application that tells you your personality after you have annswered a few questions. Personality is either an Introvert or an Extrovert. There are just five questions for now just to represent a POC, a future addition is an admin dashboard that enables users to signup/login and add questions and mappings to define a personality. Current functionality includes, sign up, login, a landing page, personality test page with questions, results page and logout functionality. 

The application is tested end to end with Cypress

## Languages

- VueJs 3
- Pinia
- Vue Router
- Tailwind CSS
- Axios
- Cypress

## E2E Testing

This test basically runs from sign up, login to taking a personaly test. Below is are the test results.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
