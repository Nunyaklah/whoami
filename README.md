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



https://github.com/Nunyaklah/whoami/assets/20068694/1b7b8517-55cb-47de-8255-c256e322f6ec

<img width="1133" alt="Screenshot 2023-05-20 at 3 41 15 PM" src="https://github.com/Nunyaklah/whoami/assets/20068694/eefba13e-ab28-474b-8c18-dbdacf82f617">


## Component Testing

Cypress has a feture for testing individual components in an application, making it close to unit testing. You test components making sure they behave as expected. I wrote tests for the login and sign up components. Tests to check validity of input data, valid emails, valid passwords etc. 
Below are the results:
![Screenshot 2023-05-20 at 5 08 42 PM](https://github.com/Nunyaklah/whoami/assets/20068694/d12d70aa-34c7-425a-a08d-439c0519c483)
![Screenshot 2023-05-20 at 5 09 01 PM](https://github.com/Nunyaklah/whoami/assets/20068694/3bf95053-7cd9-43bb-b823-2801f916cc17)
![Screenshot 2023-05-20 at 5 09 12 PM](https://github.com/Nunyaklah/whoami/assets/20068694/128fa3d0-299f-4cbf-b648-58a3ad43e21f)


https://github.com/Nunyaklah/whoami/assets/20068694/d4d73ab3-401a-4a82-96d8-281b8dd0781f



https://github.com/Nunyaklah/whoami/assets/20068694/80410c8c-da2f-4145-87af-9326ec5c075f




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
