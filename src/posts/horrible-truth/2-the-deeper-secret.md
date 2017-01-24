---
title: The Horrible Truth, Part 2
date: 2016-12-22
publish: draft
---
# Lorem Ipsum

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Step 3: Configure metalsmith

When Metalsmith runs from the command line, it looks for a configuration file `metalmsith.json` in the project root to tell it what to do. (Sorry but this is what you have to call the file--some things just aren't flexible.) Right now, Metalsmith is unhappy because it doesn't have a configuration file to boss it around.

It's a minion, and it needs a master to serve!

Fire up your preferred text editor and create `metalsmith.json` with the following content:

```json
{
    "source": "src",
    "destination": "public"
}
```

Remember, you can use whatever you like for the source and output directories; these are just my preferred names. Paths here are relative to the project root. In this example, `src` and `public` are subdirectories of my project root directory.
