# Seed Template for MongoDB with Mongoose and Node.js with Express, and Body-parser

## What's in the Box?

1. Boostrap
2. Jquery
3. Underscore.js (client)
4. Node.js
5. Express
6. Underscore.js (server)
7. Body-parser
8. MongoDB
9. Mongoose



## Getting Started 

1. Clone or fork this repo
	```
	$ git clone git@github.com:henryfreel/node-seed.git
	```

2. `cd` into the new directory
	```
	$ cd node-seed
	```

### Install Node and Setup Server

3. If you haven't already, Install Node & NPM
 	* Standalone installer: [https://nodejs.org/download/](https://nodejs.org/download/)
 	* Homebrew: [http://blog.teamtreehouse.com/install-node-js-npm-mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
 	
    1. Install Homebrew:

        ```
        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        ```

    2. Install node

        ```
        brew install node
        ```

4. Install all the necessary modules
	```
	$ npm install
	```

5. Run either `node server.js`, `npm start`, or `nodemon` (<a href="http://nodemon.io" target="_blank">docs</a>). All three commands do the same thing, which is start your server :)

### Install Mongo and Create Database

Install MongoDB, a popular noSQL database.

1 First we'll need to run brew update to update our brew packages.

  ```bash
  brew update
  ```
2 Next we'll need to run `brew install` for **MongoDB**

  ```bash
  brew install mongodb
  ```

3 Then we'll need a directory for **MongoDB** to save data.

  ```bash
  sudo mkdir -p /data/db
  ```

4 Finally we'll want to make sure we have permission to read and write to this directory.

  ```bash
  sudo chown -R $USER /data/db
  ```

5. At this point, if you haven't already created the database you're using, do so in the terminal. You'll need to start up MongoDB by running:

  ```
  $ mongod
  ```

  **Note:** If you already have an instance of MongoDB running, you'll get an error at this step. If that's the case, you can move on to the next step, since MongoDB is already running!

6. In a separate terminal tab, create and connect to your database. In the example, our new database is called `catchphrasely`.

  ```
  $ mongo
  $ use [new-datebase-name]
  ```
  **Note:** In the the server.js you will need to change '/mongo-seed', in the line below, to whatever you name your database

  ```
  mongoose.connect("mongodb://localhost/mongo-seed");
  ```

7. That's it! You're ready to go :)

## File structure

```
|node-seed
- README.md
- index.js
- package.json
|public
	|scripts
		- scripts.js
	|styles
		- styles.css
	|views
		- index.html

```