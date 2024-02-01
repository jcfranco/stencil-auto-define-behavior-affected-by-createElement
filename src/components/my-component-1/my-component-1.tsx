import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-1',
  shadow: true,
})
export class MyComponent1 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
