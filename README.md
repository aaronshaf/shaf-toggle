## It's easy peasy

```html
<!-- Custom Elements v1 polyfill (2.9KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (18.7KB gzipped) -->
<script src="https://unpkg.com/shaf-toggle@1.0.4"></script>
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
