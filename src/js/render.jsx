// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './heading';

export class Render {
  constructor(targetId: string) {
    const target = document.getElementById(targetId);
    console.log(target);
    if (target != null) {
      this.render(target);
    }
  }

  render(target: HTMLElement) {
    ReactDOM.render(<Heading name="Wakaru" />, target);
  }
}

export default new Render('seyana');
