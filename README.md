#ASD
***

Village Health Web Application acts as a access point for care provider with various roles such as TeleHealth, Field Nurse, Admin, etc.

### Build

It is a complete project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* powered by [Grunt.js](http://gruntjs.com/)

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/)
* Install Grunt-CLI and bower as global npm modules:

    ```
    npm install -g grunt-cli bower
    ```

(Note that you may need to uninstall grunt 0.3 globally before installing grunt-cli)

### Get the Code

Clone this repository from GitHub

```
git clone https://github.com/dva-mcoe/VHPE-Web.git
cd VHPE-Web
```

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Grunt.js](gruntjs.com). Grunt relies upon some 3rd party libraries that we need to install as local dependencies using npm.

* Install local dependencies (from the project root folder):

    ```
    npm install
    ```

  (This will install the dependencies declared in the client/package.json file)

### Build the client app
The app made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  We use the Grunt build tool to do this.
* Build client application:

    ```
    grunt build
    ```
* Running Client application
	```
    grunt serve
    ```

## Development

### Folders structure
At the top level, the repository is split into a multiple folder. 
Within the application folder you have the following structure:
* `node_modules` contains build tasks for Grunt along with other, user-installed, Node packages
* `dist` contains build results
* `app` contains application's sources
* `doc` contains documentation for the coding

/
|- bower.json
|- Gruntfile.js
|- README.md
|- package.json
'- app/
    |- app.js
    |- config.js
    |- index.html
    |- router.js
    |- components/
    |    |- directives/
    |    |     |- app-directive.js
    |    |     '- ...
    |    |- filters/
    |    |     |- app-filter.js
    |    |     '- ...
    |    |- localize/
    |    |     |- app-translator.js
    |    |     |- lang_en.json
    |    |     '- ...
    |    '-service/
    |          |- app-service.js
    |          '- ...
    |- images/
    |    |-SignOut.png
    |    '- ...
    '- styles
         |- common.css
         |- main.css
         '- themes/
              |- theme1.css
              '- ...


