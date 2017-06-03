#Express Basics Demo Site

This repo features an express app to serve as demo in the Express Basics course on Treehouse.

![express](https://cloud.githubusercontent.com/assets/25851867/26749906/75819a80-47db-11e7-943d-ef06c95b5270.png)

## How to use this repo
To follow along with the Treehouse course, checkout the branch with the associated video.  The video for a given stage will indicate which branch to checkout.

## Set Up
```
# clone the repo
git clone <this-repo>
cd <this-repo>

# install node dependencies
npm install

# view the app
# Note: to develop, see instructions below
node src
```

## Developing
```
# make sure you have some popular node tools installed
npm install -g nodemon
npm install -g node-inspector

# have nodemon run the app in one terminal tab
# nodemon will watch for file changes in the express app
# and restart the server
nodemon --debug src

# run the debugger in another terminal
# node-inspector will break the application when a break point
# or `debugger` statement is reached in the JavaScript
node-inspector
```
