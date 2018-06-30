// @flow
export class Hello {
  name: string

  constructor(name: string) {
    this.name = name;
    this.say();
  }

  say(): void {
    console.log(`Hello, ${this.name} World!`);
  }
}
export default new Hello('Akane-chan');
