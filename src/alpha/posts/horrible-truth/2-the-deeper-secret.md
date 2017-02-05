---
title: The Horrible Truth, Part 2
date: 2016-12-22
publish: draft
---
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

Maecenas diam arcu, fringilla sit amet ullamcorper in, varius et tortor. Sed eu mauris eget neque lobortis congue ac in ligula. Integer sed nunc volutpat, pretium quam eu, porttitor nisi. Morbi augue mauris, varius vel nisl eu, consectetur auctor quam. Vivamus elementum, nulla eu tincidunt sollicitudin, nunc arcu commodo lectus, vitae bibendum risus lorem eu tellus. Integer massa urna, lobortis id dictum et, feugiat a ante. Nunc facilisis justo et hendrerit pellentesque. Phasellus viverra magna orci, ut eleifend massa sagittis a. Sed interdum enim nec tempor pellentesque. Etiam congue malesuada tortor, vitae eleifend leo porttitor et. Cras auctor libero id odio scelerisque, at imperdiet quam mollis. Sed eget tincidunt augue. Duis aliquam, libero at tempor consequat, magna tellus gravida metus, at venenatis elit dolor ac turpis. Donec ac feugiat neque. Curabitur ac purus ut mi feugiat scelerisque et id dui. Nunc diam dolor, cursus vitae tincidunt eget, tempus laoreet dui.

Nam scelerisque felis mi. Ut pharetra enim in augue placerat, vel congue sapien convallis. Integer convallis placerat libero, non lacinia lorem tempor viverra. Praesent sed nulla ut arcu condimentum fringilla convallis in justo. Fusce eleifend, nibh id vestibulum sollicitudin, odio massa pretium ex, id aliquet arcu arcu eu ex. Nulla diam risus, fringilla at nulla ac, lacinia lacinia eros. Vestibulum tincidunt turpis nec elit sagittis, sed feugiat felis gravida. Nulla imperdiet a ante vel auctor. Maecenas elementum luctus risus, in ornare turpis mattis quis. Duis mollis urna vitae facilisis tincidunt. Curabitur eu commodo libero. Donec vel porta urna. Sed sed turpis ex. Nam vitae tortor id urna egestas blandit.

Nulla eros tellus, elementum eu sapien eget, lobortis elementum velit. Integer rutrum ut velit in venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna magna, euismod vitae purus eget, lacinia feugiat velit. Ut viverra efficitur odio, ut mattis leo ultricies sed. Suspendisse a elementum urna, nec efficitur elit. Curabitur hendrerit turpis euismod neque suscipit, at pretium mi tincidunt. Phasellus congue nulla lacus, at consectetur enim venenatis a. Proin mollis volutpat mi, et fringilla ipsum egestas et. Ut vitae nunc eu turpis vestibulum tincidunt.

Praesent viverra enim ac placerat tincidunt. Mauris elit ante, maximus a placerat id, malesuada ut nunc. Vestibulum ligula nisl, viverra nec rhoncus non, vehicula et lectus. Pellentesque vel urna eget est bibendum pulvinar nec fringilla libero. Maecenas faucibus enim ac aliquam ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam non dolor lacus. Aenean est odio, vulputate eu auctor non, scelerisque eu metus. Aenean tincidunt porttitor elementum. Curabitur varius blandit magna sit amet vehicula. Sed imperdiet nisl vel nulla accumsan mollis. Integer sodales nisi sit amet bibendum malesuada. Curabitur ut augue at lacus pharetra pellentesque vitae quis erat. Aenean sit amet risus eleifend, scelerisque lectus at, malesuada turpis. Aenean rutrum quam vitae sodales ultrices.

In rhoncus venenatis viverra. Proin viverra finibus viverra. Ut orci elit, iaculis et nulla in, maximus maximus augue. Quisque eget efficitur lorem. Sed vel ornare mi. Donec sit amet varius arcu, molestie ullamcorper dui. Ut id nunc semper, dignissim elit id, laoreet lacus.
