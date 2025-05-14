# myFirst_gh-pages

### notes: replacing old "create react app" with "vite":

* uninstall "react-scripts"

        npm uninstall react-scripts

* install vite

        npm install vite @vitejs/plugin-react --save-dev

* change our package.json script part

        "start": "vite",
        "build": "vite build",

* now our audit schould be clean:

        npm audit fix

* but i have a warning for a older node version
  * get version

         nvm ls

  * install newest

         nvm install v22.14.0

  * also check packages for updates

        npm update