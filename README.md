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

<img width="1133" alt="Screenshot 2023-05-20 at 3 41 15 PM" src="https://github.com/Nunyaklah/whoami/assets/20068694/92751c62-2f2f-4039-8600-1229d1087f54">

https://github.com/Nunyaklah/whoami/assets/20068694/691df6a5-07c9-4fd8-a25e-2980cb716227

## Component Testing

Cypress has a feture for testing individual components in an application, making it close to unit testing. You test components making sure they behave as expected. I wrote tests for the login and sign up components. Tests to check validity of input data, valid emails, valid passwords etc. 
Below are the results:

![Screenshot 2023-05-20 at 5 09 01 PM](https://github.com/Nunyaklah/whoami/assets/20068694/f219db63-ea89-4b7f-a447-1b89902f808c)
![Screenshot 2023-05-20 at 5 08 42 PM](https://github.com/Nunyaklah/whoami/assets/20068694/43c8f9bd-68f0-436e-9c5d-5d1757bd92be)
![Screenshot 2023-05-20 at 5 09 12 PM](https://github.com/Nunyaklah/whoami/assets/20068694/9d80279c-2ef0-46b8-be04-c9b61ffbdc23)


https://github.com/Nunyaklah/whoami/assets/20068694/bda275a2-20d3-4e90-aed3-905b50318d90

https://github.com/Nunyaklah/whoami/assets/20068694/ff398f6d-18ae-4173-ae43-949eef8b9912


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
