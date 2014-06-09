================================================================================================
### A Custom Angular directive utilizing Showdownjs 
================================================================================================
 
 
A Showdown front-end can send back text in Markdown, HTML or both, so you can trade bandwidth for server load to reduce your cost of operation. If your app requires JavaScript, you won't need to do any Markdown processing on the server at all. (For most uses, you'll still need to sanitize the HTML before showing it to other users -- but you'd need to do that anyway if you're allowing raw HTML in your Markdown.)

More on (https://github.com/coreyti/showdown). 


This is a utility/helper im working on for my site blog.

Change logs:

June 6, 2014 - App structured using RequireJS AMD

June 7, 2014 - ng-showdown directive added. Started configuring [Karma](karma-runner.github.io) test runner.

June 9, 2014 - Fixed Karma-PhantomJS-RequireJS configuration but via [Gulp](http://gulpjs.com)
