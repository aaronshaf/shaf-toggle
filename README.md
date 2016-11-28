## It's easy peasy

<img src="https://d3vv6lp55qjaqc.cloudfront.net/items/3A2x0R3Z2E3q0R0i0E1i/Screen%20Recording%202016-11-24%20at%2011.43%20AM.gif?X-CloudApp-Visitor-Id=d6a8dd4490c61afdba8a0a2082273aa1&v=61a19333" height="32px" />

Check out the [demo](https://aaronshaf.github.io/shaf-toggle/). Works in IE11, Edge, Chrome, Firefox, and Safari.

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (6.5KB gzipped) -->
<script src="https://unpkg.com/shaf-toggle@1.0.8"></script>
```

### Usage

```html
<shaf-toggle>
  <input type="checkbox" name="smooooth" value="yes" checked />
</shaf-toggle>
```


### Benefits

Because this wraps an existing `<input type="checkbox" />`:

* It is form-friendly.
* It doesn't mess with your event handlers.
* Your checkbox still works if JavaScript is turned off or fails to load.

## Contributors

* [aaronshaf](https://github.com/aaronshaf)
* [ahstro](https://github.com/ahstro)
* This project inherits work from [react-toggle](https://github.com/aaronshaf/react-toggle).
