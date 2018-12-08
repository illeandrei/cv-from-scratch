# Guide to create CV project from scratch

### Follow this steps:
- create folder with name of project (cv-from-scratch)

- create index.html (in the folder created previously)
- create script.js (to run all js logic)
- create style.css (for styling)
- create .gitignore file

##### Git:
- open https://github.com
- create new repo with same name as project on disk (cv-from-scratch)
    - or if you want to open as live page, name repo like this: 'illeandrei.github.io'
- create ssh-key to skip using account/password
    - open Git Bash
    - generate ssh-key (make sure to replace with your email address): 
    ```
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```
    - copy ssh-key to clipboard: 
    ```
    cat ~/.ssh/id_rsa.pub
    ```
    - paste at: 
    ```
    https://github.com/settings/keys
    ``` 

- follow github instructions to make initial commit. example:
    ```
    git init
    git add .
    git commit -m "first commit"
    git remote add origin git@github.com:illeandrei/cv-from-scratch.git
    git push -u origin master
    ```

##### html and css
- reproduce the following [cv model](https://nmatei.github.io/)


##### javascript
- add jQuery to index.html
- hide all div's with class: 'page-block'
- show only skills-page on index load
- load dynamic content to skills page - through initSkillsPage function
- add event listeners for navigation menu 'a' tags - through initMenu function

### Resources:
- [flex-box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [jQuery CDN](https://code.jquery.com/)
- [ssh-key for git](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)