# grunt-chauffeur

> Configurable delivery tool for grunt build files and backend servers

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-chauffeur --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-chauffeur');
```

## Usage

In your project's Gruntfile, add a section named `chauffeur` to the data object passed into `grunt.initConfig()`. The task will quit when Grunt exits. You'll need to use a watch task to make the process long running.

    grunt.initConfig({
        chauffeur: {
            dev: {
                port: 8000,
                staticFiles: ['public'],
                testable: { route: '/test.html' },
                routes: 'config/routes.js',
                proxy: [
                    { path: '/api', host: 'localhost', port: 3000 }
                ]
            }
        }
    });

All the target configurations are passed on to [node-chauffeur](https://github.com/joeytrapp/node-chauffeur). See [node-chauffeur](https://github.com/joeytrapp/node-chauffeur) for information about the configuration options.
