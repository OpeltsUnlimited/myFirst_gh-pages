# myFirst_gh-pages

### notes: Move to using React:

* Prerequest: node.js
* Create react app

    usualy would use:


        npx create-react-app <app name>

    but since i want my current project, i create a subfolder using it, and then coppy relevant files.

        npx create-react-app my_first_gh_page
        cp -r my_first_gh_page/. .
        rm -r my_first_gh_page/

* test start:

        npm run start

    If kept running further changes will be directly reflectet in the browser.

* moving page into the App.JS
    * copy the &lt;body&gt; of the html into &lt;div className="App"&gt; inside App.js
    * Move the content of &lt;script&gt; outside of "function App()"
      Remove &lt;script&gt; block
    * remove "import logo from './logo.svg';"
    * add "loadTodoList()" betwen  "function App()" ans the scripts
    * &lt;input   &gt; now needs to be closing: &lt;input   /&gt;
    * some "var" are missing in the scripts
    * add "onLoad={loadTodoList}" to &lt;div className="App"&gt;
      &lt;div className="App" onLoad={loadTodoList()}&gt;
    * replace "class" with "className"
    * replace "onclick="createTask()" with "onClick={createTask}"

* edit "public/index.html" 
    * add bootstrap
    * change title

* edit gitignore:
    we build to "gh-pages" instead of "build"
    
* in "package.json" change "build" to

      "build": "BUILD_PATH='./gh-pages' react-scripts build",

* run "npm run build"
* push gh-pages to github.
        