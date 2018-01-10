# Express on Node.js



The **express** is the famous framework running on the node.js. The **ejs** is one of the templates based on express. The git repository provides you with basic instructions to quickly run a web app on them.



# Quick Start



* Git clone from github.com [https://github.com/jiankaiwang/ExpressOnNodeJs.git](https://github.com/jiankaiwang/ExpressOnNodeJs.git).

```shell
$ git clone https://github.com/jiankaiwang/ExpressOnNodeJs.git
```

* Set the repository and fill the information.

```shell
$ npm init
```

* Install the packages.

```shell
$ npm install
```

* [Optional] Change the **package.json** and add **stop** script.

```shell
  "scripts": {
    "start": "node app.js",
    "stop": "(put your script based on running os)",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

* Start the service.

```shell
# run by the original command
$ sudo node app.js

# run by the project setting
$ sudo npm start
```

* Stop the service.

```shell
# notice that you have set the stop script
$ sudo npm stop

# keyboardinterrupt
Ctrl-C
```

