/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { JSXElements } from '@stencil/core';




export namespace Components {

  interface CmpC {}
  interface CmpCAttributes extends JSXElements.HTMLAttributes {}
}

interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
  forceUpdate(): void;
}

declare global {
  interface StencilElementInterfaces {
    'CmpC': Components.CmpC;
  }

  interface StencilIntrinsicElements {
    'cmp-c': Components.CmpCAttributes;
  }


  interface HTMLCmpCElement extends Components.CmpC, HTMLStencilElement {}
  var HTMLCmpCElement: {
    prototype: HTMLCmpCElement;
    new (): HTMLCmpCElement;
  };

  interface HTMLElementTagNameMap {
    'cmp-c': HTMLCmpCElement
  }

  interface ElementTagNameMap {
    'cmp-c': HTMLCmpCElement;
  }

}
