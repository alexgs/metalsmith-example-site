---
title: Metalsmith Tutorial, Part 1
date: 2016-12-21
publish: 2016-12-21
---
# Metalsmith Tutorial, Part 1

The first requirement is to have [NodeJS][1] installed on the system where you will be running Metalsmith.io. Personally, I run it on Ubuntu-powered virtual machine, but that's beyond on the scope of this article. So, you got NodeJS installed? Great!

[1]: https://nodejs.org/

Oh, you should probably run `npm update -g npm` if you just installed NodeJS. This command will update NPM ("Node Package Manager") to the latest version--the recommended LTS releases of NodeJS tend to be behind in the version of NPM that they ship with.

## Step 1: Install Metalsmith

Install Metalsmith with the following command:

```bash
npm install -g metalsmith
```

You can now type `metalsmith` at the prompt, and you should see some error messages from Metalsmith itself (rather than just some "command not found" error).
