# Snowfront

After looking at [Twine](https://twinery.org), I found a lot to
love. After looking at the
[Snowman](https://github.com/klembot/snowman) story format, I found
even more that made me really happy. But once you go so far into HTML,
CSS and general programming, there's not a lot of reason to use a GUI
for the layout.

Instead, I adapted the Snowman story format's JavaScript libraries
into a simple runtime that can be separately used rather than
requiring the Twine story format.

## Installing

After cloning the repository, run "npm install" to get the dependencies.

To create the prod distribution, run "npm run build". The generated
script can be used from the browser to make your game.

## Development

## License

This code is released under the terms of the MIT license. See LICENSE
for details.

## TODO

Additional packaging: https://webpack.js.org/guides/production/
NPM package?: https://webpack.js.org/guides/author-libraries/
