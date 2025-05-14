# myFirst_gh-pages

### notes: Using gh-pages for deploy:

* install gh-pages

        npm install gh-pages --save-dev

* add depoy step

        "deploy": "gh-pages -d build"

* test

  Change test in index.html

    npm run build
    npm run deploy

* remove our old deploy stubs:
  * from package.json "postbuild"
  * the "myPostbuild.sh" file
  * the "gh-pages" folder

        git worktree remove gh-pages

  * "gh-pages" from gitignore --force