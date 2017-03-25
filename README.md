## It's easy peasy

<img src="https://camo.githubusercontent.com/7b82df5ece8794631d7b004a6fd1d9fe32a336b6/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f334132783052335a3245337130523069304531692f53637265656e2532305265636f7264696e67253230323031362d31312d3234253230617425323031312e3433253230414d2e6769663f582d436c6f75644170702d56697369746f722d49643d643661386464343439306336316166646261386130613230383232373361613126763d3631613139333333" height="32px" />

Check out the [demo](https://aaronshaf.github.io/shaf-toggle/). Works in IE11, Edge, Chrome, Firefox, and Safari.

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (6.5KB gzipped) -->
<script src="https://unpkg.com/shaf-toggle@1.0.9"></script>
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

## See also

* [shaf-button](https://github.com/aaronshaf/shaf-button)
* [shaf-chart](https://github.com/aaronshaf/shaf-chart)
* [shaf-star-rating](https://github.com/aaronshaf/shaf-star-rating)
* [shaf-unified-diff](https://github.com/aaronshaf/shaf-unified-diff)
* [shaf-timeago](https://github.com/aaronshaf/shaf-timeago)
