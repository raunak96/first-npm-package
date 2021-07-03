# first-npm-package

### Steps:
- Initialise npm 
```bash 
npm init
```
- add relevant code to JS file.
- For Testing:
   - In the root folder for package do the following:
     ```bash
     npm link
     ```
   - Go to a seperate Test folder and do the following:
     ```bash
     npm link <package-name>
     ```
   - Then normally required the package and test it out.

- Then simply do in root folder (make sure you have npm account which is verified):   
  ```bash
     npm publish
  ```
- IF package name is scoped like say @<name>/package-name like in babel for example and if we dont want paid private package which these scoped packages default to, do the following:
   ```bash
      npm publish --access=public
   ```

- To update package version:
  ```bash
    npm version <update_type>
    npm publish
  ```
 where upate_type = <patch|minor|major>


