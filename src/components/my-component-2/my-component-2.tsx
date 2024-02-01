import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-2',
  shadow: true,
})
export class MyComponent2 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
