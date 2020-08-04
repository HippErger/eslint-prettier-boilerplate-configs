# Setup Boilerplate

1. npm i
2. npm i dotenv
3. create .env
4. npx install-peerdeps --dev eslint-config-airbnb

This repo is setup to begin working immediately with AirBNB code style rules, using ESLint for warnings and errors, Prettier as a formatter and configured for VS Code.

## IF you're cloning this repo and building off of it you'll need to:

1. Fork & Clone
2. `cd eslint-boilerplate-configs`
3. `npm i` to install dependencies
4. `npx install-peerdeps --dev eslint-config-airbnb` to install peer dependencies and `npm i dotenv` and create .env file

5. Install Prettier and Eslint Extensions for VS Code

   1. Go to VSC Settings (CMD + , || CTRL + ,)
   1. Search Save => Format on Save
   1. Search ESLint => Always show status
   1. Search Default Formatter => choose esbenp.prettier.vs-code
   1. Search Prettier => add path: `.prettierrc`
   1. Search Prettier semi => semi-colons - check
   1. Search Prettier single => single quotes - check
   1. Search Prettier arrow parens => parens - check

## ELSE if you're just using these config files a starting point follow these instructions:

1. create a new repo
2. clone new repo
3. cd into the new repo
4. Initialize as an NPM Package and create a package.json file by running the command: `npm init -y` || `npm init` and answer each of the questions

- name> => [REPO_NAME],
- description? => ENTER || "A description.....",
- version "1.0.0" => ENTER || YES
- main? => ENTER || index.js
- test? => ENTER || `mocha —no-timeouts`
- repository? => ENTER || "https://github.com/ashleygwilliams/my_package.git"
- keywords? => ENTER || ["a", "few", "words", "that", "describe", "it"],
- author? => ENTER || [YOU]
- license ISC? => ENTER || YES

5. `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node`

6. Install Prettier and Eslint Extensions for VS Code

   1. Go to VSC Settings (CMD + , || CTRL + ,)
   1. Search Save => Format on Save
   1. Search ESLint => Always show status
   1. Search Default Formatter => choose esbenp.prettier.vs-code
   1. Search Prettier => add path: `.prettierrc`
   1. Search Prettier semi => semi-colons - check
   1. Search Prettier single => single quotes - check
   1. Search Prettier arrow parens => parens - check

7. Install Peer Dependencies: `npx install-peerdeps --dev eslint-config-airbnb`

- Docs on [eslint-config-airbnb - npm](https://www.npmjs.com/package/eslint-config-airbnb)
  - Docs on [Airbnb Style Guide](https://github.com/airbnb/javascript)

8. Create a Prettier Configuration file: `touch .prettierrc`

- Add rules using [Prettier Options](https://prettier.io/docs/en/options.html)
- Copy/Paste the example rules below:

  ```json
  {
    "singleQuotes": true,
    "arrowParens": "always",
    "semi": false
  }
  ```

9. Install ESLint globally: `npm i -g eslint` || `sudo npm i -g eslint`
10. Create the ESLint configuration file by running the `eslint --init` && Walk through the steps in your console

```console
  eslint --init
  ~? How would you like to configure ESLint? > Use a popular style guide
  ~? Which style guide do you want to follow? > Airbnb
  ~? Do you use React? > Yes
  ~? What format do you want your config file to be in? > JSON
  Checking peerDependencies of eslint-config-airbnb@latest
  ~? The style guide "airbnb" requires eslint@^5.16.0 || ^6.8.0 || ^7.2.0. You are currently using eslint@4.19.1.
  Do you want to upgrade? > Yes
  Installing eslint-config-airbnb@latest....etc.....
```

11. In the `.eslintrc.json` file that was created copy/paste this JSON Object to replace what is automatically create there.

```json
{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    "func-names": "off",
    "object-shorthand": "warn",
    "class-methods-use-this": "warn"
  }
}
```

12. Learn more about [ESLint Rules](https://eslint.org/docs/rules/) and use more of them.
