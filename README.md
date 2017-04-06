# @Si1kIfY's Website Starter

[![CircleCI](https://circleci.com/gh/Si1kIfY/website-starter.svg?style=shield)](https://circleci.com/gh/Si1kIfY/website-starter) [![scrutinizer](https://img.shields.io/scrutinizer/g/Si1kIfY/website-starter.svg)](https://scrutinizer-ci.com/g/Si1kIfY/website-starter/) [![Known Vulnerabilities](https://snyk.io/test/github/si1kify/website-starter/badge.svg)](https://snyk.io/test/github/si1kify/website-starter) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Si1kIfY/website-starter/master/LICENSE)  [![Twitter](https://img.shields.io/twitter/url/https/github.com/Si1kIfY/website-starter.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

*ES6 / SCSS / Live Reload / CI Based / S3 Deployment Web Starter*

I got tired of running the same setup process over and over again so I thought I would put it in a repo and open source it.

This is meant as a starter for me, this is how I like to code my static sites feel free to fork and change things 👍

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn package manager](https://yarnpkg.com) or [Node package manager](https://www.npmjs.com/)
	* You can use them interchangeably

## Install

1. `git clone https://github.com/Si1kIfY/website-starter <your.domain.name>`
2. `yarn install` to install dependencies

## Build

1. `yarn build` builds all files from source to the `./build` dir

## Dev

I like to separate all my build steps into different terminal windows, here's a handy table of what they are and what they do:

|Step|Description|
|---|---|
|`lint-js`|runs eslint as per `.eslintrc`|
|`lint-html`|runs htmlhint|
|`test`|runs js and html linter above|
|`serve`|runs a auto reloading local web server on port `8008`|
|`watch-static`|watch & build changes to html / image files|
|`build-static`|build html / image files|
|`watch-css`|watch & build (scss -> css) changes to sass css files|
|`build-css`|build (scss -> css) files|
|`watch-js`|watch & build (incl. es6 -> es5 transpile) changes to js files|
|`build-js`|build (incl. es6 -> es5 transpile) js files|
|`start`|If you are running MacOS + Iterm2 this will auto spawn all above windows in new tabs|

## Deploy

First we'll create a S3 bucket and `s3-website` config by running:

```
./node_modules/.bin/s3-website create -i index.html -u build <your.domain.here>
```

I'd then suggest setting up the CloudFront disto for the bucket and enable the HTTPS cert.

Now every time you commit+push circleCI will deploy the changes to the bucket for you

Check out [s3-website](https://github.com/klaemo/s3-website) for more CLI options (like reigon for eg.)

If you use CloudFront you will need to remember to manually invalidate the cache on deploy.

*Note: I might look at simplifying this in future, just don't have the time at the moment*

### Deploy manually

You can run `yarn deploy` whenver you like or just copy paste files from the `./build` dir to your s3 bucket.