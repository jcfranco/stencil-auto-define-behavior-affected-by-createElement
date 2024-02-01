# stencil-not-auto-defining-supporting-components-if-create-element-tag-is-dynamic

This shows an issue with Stencil not auto-defining supporting components if the tag name is dynamic when calling `document.createElement` in the `components` output target.

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `npm run build`

Note that the main component file only auto-defines the components that were created where both `createElement` and the tag name are static (e.g., `document.createElement('my-component') ` vs `document.createElement(dynamicallyAssignedTag)`).

```
// note `my-component-1` and `my-component-2` are missing
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './my-component-32.js';
import { d as defineCustomElement$2 } from './my-component-42.js';
```
