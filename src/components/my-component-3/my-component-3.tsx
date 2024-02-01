import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-3',
  shadow: true,
})
export class MyComponent3 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
