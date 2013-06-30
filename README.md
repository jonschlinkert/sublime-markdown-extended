# [sublime-markdown-extended](https://github.com/jonschlinkert/sublime-markdown-extended)

> Extends Soda's Monokai and the default markdown styles with additional syntax highlighting for 
> [YAML Front Matter](http://assemble.io/docs/YAML-front-matter.html), GitHub Flavored Markdown 
> (GFM) and language-specific syntax highlighting inside [GFM "fenced" code blocks](https://help.github.com/articles/github-flavored-markdown#syntax-highlighting)


## Installation

The easiest way to install this plugin is to go to `Preferences -> Browse Packages`, then:

``` bash
git clone https://github.com/jonschlinkert/sublime-markdown-extended.git "sublime-markdown-extended"
```

Then inside Sublime Text, go to `Preferences -> Color Scheme -> Markdown Extended` and select `Monokai Extended`.

**After installing this package**, open a markdown file and switch the language to `Markdown Extended`, using one
of the following methods:

* Select fFrom the list of supported languages in your status bar at the bottom right corner of your editor. 
* `ctrl + shift + p` and find "Markdown Extended"


## Examples

### YAML Front Matter

#### Turn this:

![image](https://f.cloud.github.com/assets/383994/726861/2f03fb2a-e13c-11e2-9df0-cb9514b301fe.png)


#### Into this:

![image](https://f.cloud.github.com/assets/383994/726865/aa2cdb6e-e13c-11e2-89b0-c06923447ec9.png)


### GFM Fenced Code Blocks 

#### Supported languages

The following languages are highlighted inside fenced code blocks:

* `c++`
* `c`
* `coffee`
* `CSS`
* `diff`
* `Handlebars`: requires the Sublime Text [Handlebars](https://github.com/daaain/Handlebars) package
* `HTML`/`HTML5`
* `java`
* `js`/`javascript`
* `json`
* `LESS`
* `objective-c`
* `perl`
* `php`
* `python`
* `ruby`
* `sass`/`scss`
* `scala`
* `shell`
* `sql`
* `xml`
* `yaml`

#### Turn this:

![image](https://f.cloud.github.com/assets/383994/726869/5f066f14-e13d-11e2-9cdd-118f56a39da5.png)

#### Into this:

![image](https://f.cloud.github.com/assets/383994/726871/893061c8-e13d-11e2-9bf5-189d850ccc66.png)


## Credit

Although substantial changes have been made, thank you [@aziz](https://github.com/aziz) and other contributors to [Knockdown](https://github.com/aziz/knockdown), from which most of the code for the syntax highlighting inside fenced code blocks was taken. 


## Author

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)


## Copyright and license
Copyright 2013 Jon Schlinkert

[MIT License](LICENSE-MIT)


### Features:
* Support for fenced code blocks
* Syntax highlighting support for most popular languages (see below for the list of supported languages)
* Syntax highlighting for URLs in text which is auto-linked by GFM
* Proper syntax highlighting for bullets and numbers in ordered/unordered lists
* Proper syntax highlighting for bold and italics by ignoring multiple underscores in words


