## It's easy peasy

### Without HTML imports

```html
<!-- Custom Elements v1 polyfill (2.9KB) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (5.8KB + 1.1KB gzipped) -->
<script src="https://unpkg.com/shaf-toggle@0.0.21"></script>
<link href="https://unpkg.com/shaf-toggle@0.0.21/styles.css" rel="stylesheet">
```

### With HTML imports
```html
<!-- HTML Imports & Custom Elements v1 polyfills (6.6KB + 2.9KB) -->
<script src="https://unpkg.com/webcomponents.js@0.7.23/HTMLImports.min.js"></script>
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<link rel="import" href="https://unpkg.com/shaf-toggle@0.0.21/imports.html">
```

### Basic usage

```html
<shaf-toggle>
  <input type="checkbox" name="smooooth" value="yes" checked />
</shaf-toggle>
```

Check out the [demo](https://aaronshaf.github.io/shaf-toggle/).


### Benefits

Because this wraps an existing `<input type="checkbox" />`:

* It is form-friendly.
* It doesn't mess with your event handlers.
* Your checkbox still works if JavaScript is turned off or fails to load.

## Contributors

* [aaronshaf](https://github.com/aaronshaf)
* [ahstro](https://github.com/ahstro)
* This project inherits work from [react-toggle](https://github.com/aaronshaf/react-toggle).
