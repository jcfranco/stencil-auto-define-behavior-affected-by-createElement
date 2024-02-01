import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-4',
  shadow: true,
})
export class MyComponent4 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
