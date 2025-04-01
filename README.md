# myFirst_gh-pages

### notes:

- create empty GH-Project
- clone to working directory
- create minimal html file index.html
- create "gh-pages" orphan branch (source: )

        git worktree add --detach gh-pages
        (in later git versions seem to support --orphan, but no luk on my wsl)

- cd into it
- checkout orphan (might not be necessary when --orphan was possible)
        git checkout --orphan gh-pages
- delete eventual changes

    I had the "README.md" added when creating the folder, but it is not part of the orphan branch.
    (Might use gits reset?)

- cd back to working dir
- add gh-pages to .gitignore
            /gh-pages
- simulate "build" by copying html to gh-pages:

        cp index.html gh-pages/index.html

- commit an publish gh-pages
- check on github if "settings/pages" is set correctly. (gh-pages schould be active and used by default)
- visit your page!

        https://<UserName>.github.io/<ProjectName>/


VS-Code markdown preview: [Ctrl][Shift][V]