// Need access to the filesystem
var fs = require('fs')
// Lodash for templating. This could be swapped out by something else
var _ = require('lodash')
// Used to turn the filesize into a human readable format
var filesize = require('filesize')
var cssstats = require('cssstats')

var module = require('./package.json')
// Add a path to the local css you want to run cssstats on
var moduleCss = fs.readFileSync('./css/test.css', 'utf8')
var moduleObj = cssstats(moduleCss)
var moduleSize = filesize(moduleObj.size)
var moduleGzipSize = filesize(moduleObj.gzipSize)

var statsoutput = JSON.stringify(moduleObj, null, '\t')

// These are templates for nav partials you can add site wide nav to.
// Would be easy to extend this to document things in a modular fashion.
var siteFooter = fs.readFileSync('./templates/footer.html', 'utf8')
var siteNav = fs.readFileSync('./templates/nav.html', 'utf8')

// Where the base lodash template lives
var template = fs.readFileSync('./templates/index.html', 'utf8')
var tpl = _.template(template)
var html = tpl({
  moduleSize: moduleSize,
  moduleGzipSize: moduleGzipSize,
  moduleObj: moduleObj,
  siteFooter: siteFooter,
  siteNav: siteNav
})

// File to write too, this is configurable
fs.writeFileSync('./index.html', html)
