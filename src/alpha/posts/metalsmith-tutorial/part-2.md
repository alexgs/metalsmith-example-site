---
title: Metalsmith Tutorial, Part 2
date: 2016-12-25
publish: 2016-12-25
---
# Metalsmith Tutorial, Part 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Step 2: Create Directory Structure

You probably want to create a new directory to house all of the files for your website or blog. This makes them easy to manage, plus you can make the directory into a [Git repository][2] for version control. I'll refer to this as the "project root" directory throughout the rest of this tutorial.

[2]: https://git-scm.org/

Inside of the project root directory, create one directory for the raw "source" files for your site and another for the "compiled" output files that will constitute the production website.

Metalsmith is not particular about what you call these folders. You could make one `bonzo` and the other `goofy` for all anyone cares. The convention seems to be for the source folder to be `src` and the output folder to be `build`. Personally, I prefer `src` and `public`, respectively, so that's what I'll use in my examples. But you're free to use whatever floats your boat.
