# cooperate-engagement-battler
Level up and battle others by engaging with your companies social media!

## Installation and setup

* Confirm that NodeJS version >= 16 is installed
* Confirm yarn is installed (Install with `npm i -g yarn`)
* Install Google Chrome
* Fork and/or clone the repository
* Server setup
    * Install dependencies with `yarn`
    * Build the server with `yarn build` or `yarn build:watch`
* Extension setup
    * Install dependencies with `yarn`
    * Inside the folder `chrome-extension/src/pages/content/components` create a file named `constants.ts`
    * Inside this file, export an object that implements the `ExtensionConstants` type
        * The href property can be filled out by inspecting the html of your companies LinkedIn page and finding an anchor element for a post that links back to your companies profile.
    * Build with `yarn dev`
    * Open the Google Chrome Browser, enable "Developer mode" for extensions and load the `dist` folder with the `Load unpacked` button.
* With the server running and the extension loaded into Chrome, navigate to [LinkedIn](https://linkedin.com)
* Make sure the extension is running on the site, then find one of your companies posts and click the like button
* Confirm in the developer tools and the server logs that a post ID was sent to the back-end

## Extension
This will be a Google Chrome extension that will detect how many posts you have liked or performed the equivelant action for the platform. That quantity is totalled and then will be sent to the back-end server to be tallied for the user. Also included here will need to be some sort of authentication system.

## Server
This will be a Typescript NodeJS REST API server with ExpressJS that will store user post engagement in a PostreSQL database.


## Brainstorm (Ideas and plans)
* You get a point for liking a post
* You can use your point(s) to open loot from the post
    * With the loot, you can attack other users on the leaderboard to raise your spot
    * Perhaps you can steal their points, or lose your points to them
* Discord bot as an alternate way to interact with the RPG/Battle system? No matter what the extension would be the only way to acrue points though
