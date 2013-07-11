# [sublime-markdown-extended](https://github.com/jonschlinkert/sublime-markdown-extended)

> Extends Soda's Monokai and the default markdown styles with additional syntax highlighting for
> [YAML Front Matter](http://assemble.io/docs/YAML-front-matter.html), GitHub Flavored Markdown
> (GFM) and language-specific syntax highlighting inside [GFM "fenced" code blocks](https://help.github.com/articles/github-flavored-markdown#syntax-highlighting)

Although substantial changes have been made, thank you [@aziz](https://github.com/aziz) and other contributors to [Knockdown](https://github.com/aziz/knockdown), for the code for the fenced code blocks.


## Installation

### Sublime Text 2

The easiest way to install this plugin is to go to `Preferences -> Browse Packages`, and then:

``` bash
git clone https://github.com/jonschlinkert/sublime-markdown-extended.git "sublime-markdown-extended"
```

**After installing this package**, open a markdown file and switch the language to `Markdown Extended`, using one
of the following methods:

* Select from the list of supported languages in your status bar at the bottom right corner of your editor
* `ctrl + shift + p` and search for "Markdown Extended"


## Usage

A few things to keep in mind:

### Significant whitespace

#### Before

You will need to keep a space above and below fenced code blocks for predictable results with syntax highlighting. For example, this is what it looks like when there is no space before a fenced code block:

![image](https://f.cloud.github.com/assets/383994/782115/470ca012-ea35-11e2-940c-5919386f26bf.png)

This is what it looks like with proper spacing:

![image](https://f.cloud.github.com/assets/383994/782119/5b27105a-ea35-11e2-9ea8-7a195f381d7c.png)

#### After

Also add a new line after code blocks, but make sure that there is no trailing whitespace next to the bottom fence.

**With a trailing whitespace**

![image](https://f.cloud.github.com/assets/383994/782152/0217cb20-ea36-11e2-8cfd-2ea47136fb0c.png)

**Without a trailing whitespace**

![image](https://f.cloud.github.com/assets/383994/782145/f534f1da-ea35-11e2-8689-d606494f7830.png)


## Features:

* Support for [YAML Front Matter](http://assemble.io/docs/YAML-front-matter.html)
* Support for [GFM "fenced" code blocks](https://help.github.com/articles/github-flavored-markdown#syntax-highlighting)
* Language-specific syntax highlighting support inside [GFM "fenced" code blocks](https://help.github.com/articles/github-flavored-markdown#syntax-highlighting) for most popular languages (see below for the list of supported languages)
* Syntax highlighting for URLs in text which is auto-linked by GFM
* Proper syntax highlighting for bullets and numbers in ordered/unordered lists
* Proper syntax highlighting for bold and italics by ignoring multiple underscores in words


## Markdown Enhancements
The following examples use the [Monokai Extended](https://github.com/jonschlinkert/sublime-monokai-extended) theme.


### YAML Front Matter
#### Turn this:
![image](https://f.cloud.github.com/assets/383994/726861/2f03fb2a-e13c-11e2-9df0-cb9514b301fe.png)

#### Into this:
![image](https://f.cloud.github.com/assets/383994/726865/aa2cdb6e-e13c-11e2-89b0-c06923447ec9.png)


## GFM Fenced Code Blocks

### Supported languages

The following languages are highlighted inside fenced code blocks:

_Note that in order for a language to be highlighted properly, you must have the language installed._


* `coffee`
* `css`
* `diff`
* `hbs|handlebars`: requires the Sublime Text [Handlebars](https://github.com/daaain/Handlebars) package
* `html|html5`
* `json`
* `js|javascript`
* `less`
* `md|markdown`
* `ruby`
* `sass|scss`
* `xml`
* `yaml`


### Turn this:
![image](https://f.cloud.github.com/assets/383994/726869/5f066f14-e13d-11e2-9cdd-118f56a39da5.png)

### Into this:
![image](https://f.cloud.github.com/assets/383994/726871/893061c8-e13d-11e2-9bf5-189d850ccc66.png)


## Author

**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)


## Copyright and license
Copyright 2013 Jon Schlinkert

[MIT License](LICENSE-MIT)

