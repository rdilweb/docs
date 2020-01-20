# Ruby Library `picklecore`

PickleCore is a Jekyll theme developed by [Reece Dunham](https://github.com/RDIL) ([for his site](https://rdil.rocks)) and [Param Thakkar](https://github.com/paramt).

## Installation

First, download it by adding it to your `Gemfile`:

```ruby
gem "picklecore"
```

run [Bundler](https://bundler.io):

```shell
$ bundle install
```

and apply it in your `_config.yml`:

```yaml
theme: picklecore
```

and it should apply.

## Deploying

### GitHub Pages

Unfortunately, PickleCore is not whitelisted as a GitHub pages theme, so you can't use it by simply applying the theme. You will need to set up some kind of pipeline that bulids the site into raw HTML/CSS/JS and deploy that off the `gh-pages` branch.

### Netlify

Netlify is perfect for deploying PickleCore sites. The setup is quite easy - just set the command as `gem install bundler && bundle exec jekyll build` and set the deploy folder to `_site`!

## Customization

PickleCore is (most likely) the most customizable-out-of-the-box theme out in the Jekyllverse. Here is a list of keys you can put in your `_config.yml` and what they do:

* `name` - the name of the site (main title)
* `github` - Your GitHub username
* `devto` - your [DEV](https://dev.to/) username (if you want it on the sidebar)
* `no_extra_css` - prevent custom stylesheets (see below) from being loaded (defaults to `false`)
* `no_extra_head` - prevent custom metadata (see below) from being loaded (defaults to `false`)

### SEO

PickleCore uses the Jekyll SEO Tag plugin in v0.15.0 and up. Please see [this page](https://jekyll.github.io/jekyll-seo-tag/) for info on how to set it up.

### Colors

To change the base color, which defaults to `#303f9f`, you can add a file called `_includes/styling/theme-color.css`,
and put the hex color on the first line. **Do not** add a newline at the end of the file, it will break the CSS!

### Custom CSS

To apply custom CSS, add a file called `_includes/styling/extra.css` and put styles in that file.

Note: this will not work if you specify the `no_extra_css` key in your config as `true`.

## Applying Theme Components

The PickleCore theme allows you to apply some nice looking components that match with the theme via `includes`.

### Cards

[![A card](https://raw.githubusercontent.com/RDIL/debugging-playground/master/card-example.png)](https://github.com/RDIL/PickleCore)

A card (shown above) can be applied by adding the following to any page **with [Front Matter](https://jekyllrb.com/docs/front-matter/) on it**:

```html
<!--
    Note: you can put as many cards as you want in each card container,
    but all cards NEED to be in a container (with the class 'cards').
-->
<div class="cards">
    <!-- In this container, render a card -->
    {% include components/card.html cardtitle="My Card" cardbody="The text of the card!" %}
</div>
```

### Sidebar

The easiest way to apply the sidebar to your website is to use the `default-with-sidebar` layout via Jekyll:

```yaml
---
layout: default-with-sidebar
---
```

Avoid using the `sidebar.html` component without the anchor - this will most likely break a lot of stuff.

> *Help! My sidebar is blank when I open it - what do I do?*
> 
> Certain site config fields will populate the sidebar, so see the customization section above.

### Solid Blocks

Sometimes you need to group data, or show something off, and a card just doesn't work.
That's alright, you can just use the solid block element.
Solid blocks are simply elements with white borders, and a bit of padding.
Oh, and did I mention they fit together quite nicely?

Example:

```html
<div class="block-solid">
    <h2>I am in a block!</h2>
</div>
```

## Custom Metadata in `<head>`

To apply custom HTML in `<head>`, add a file called `_includes/metadata/extra.html` and put any HTML in that file.

Note: this will not work if you specify the `no_extra_head` key in your config as `true`.

## Source

You can find the source [on GitHub](https://github.com/rdilweb/PickleCore).
