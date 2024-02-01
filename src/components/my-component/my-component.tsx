import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() type: "one" | "two" = "one";

  private internalElNotAutoDefined: HTMLElement;
  private internalElAutoDefined: HTMLElement;

  componentWillLoad(): void {
    this.internalElNotAutoDefined = document.createElement(this.type === "one" ? "my-component-1" : "my-component-2");
    this.internalElAutoDefined = this.type === "one" ? document.createElement("my-component-3") : document.createElement("my-component-4");

    console.log(this.internalElNotAutoDefined, this.internalElAutoDefined);
  }

  render() {
    return <div>👋</div>;
  }
}
