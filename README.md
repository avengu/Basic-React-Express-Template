# The purpose of this template

The purpose of this project is to build a quick template for a full stack application. Technologies used is React.js, Express.js, and SQLite. Instead of using the "create-react-app" command, this template uses a bare bones React build. It is structured as to allow the expansion of the front, allowing the user to add dependancies as needed. Whereas CRA often comes with many dependancies that would not be used. Express is used here to keep language between the front and the back common. SQLite has been selected for it's lightweight function. Great for websites that do not encounter high volumes of traffic on a regular basis.

# what is this for?

This is designed to be a basic template for rapid prototyping web applications. Structured to be as lightweight as possible. Allowing the users to expand out upon the base, only using what is absolutely needed.

The intent here is to cut down on start up time and allow the dev to quickly get up and running with mocking up a website.

# Usage

Clone this repo and run 'npm install'
Once all dependancies have installed. Run 'npm run serve' in order to launch the front end dev server.

# Things left to do:

Develop the node/express backend and set up nodemon for running the node server.

Integrate "Concurrently" to run the dev back and front off one command.

set up express to reach out to a sql databse. (Considering SQLite at this time)
