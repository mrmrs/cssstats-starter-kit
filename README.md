# CSSSTATS STARTER KIT

## About

A really easy way to visualize some thing about your site styles using the cssstats module.
You can run this against a local css file and customize your own living style guide.
If you want additional data to access, the postcss module offers a host of things to
visualize from their obj.

Examples of how to reference the cssstats obj have been provided in the templates/index.html file.

To install dependencies run
```
npm install
```

Add your css file to the css/ dir, and configure the filepath in index.js on line 11.
```
11: var moduleCss = fs.readFileSync('./css/test.css', 'utf8')
```

To generate your page from the template run
```
npm start
```

or

```
node index.js
```

To view the rendered file in your default browser run
```
open index.html
```



## License

The MIT License (MIT)


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
