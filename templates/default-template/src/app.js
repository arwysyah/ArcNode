import { ArcComponent, html } from "arc-nodes";
import './css/app.css'
import Child from "./child";
export default class App extends ArcComponent {
  constructor(props) {
    super(props);
    this.mutableState = {
      count: 0,
      message: "Welcome to ArcNodes!",
      data: { test: "1" },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.applyChanges((prev) => ({
      count: prev.count + 1,
      message: `You've clicked ${prev.count + 1} time(s)!`,
    }));
    this.applyChanges((prev) => {
      return {
        ...prev,
        data: { ...prev.data, ...{ test2: "2" } },
      };
    });
  }

  initialize() {
    console.log("Initialize equal to didmount");
  }

  render() {
    return html`

      <div class="app-container">
        <div style="font-size : 40px; font-weight:bold">ArcNodes</div>
        <h1 class="hero-title">${this.mutableState.message}</h1>
        <p class="hero-description">
          "ArcNodes is a straightforward library designed to help you build web
          applications. While it is still in early development, it offers a
          foundation for creating simple and functional user interfaces. The
          framework aims to provide an easy-to-use approach for developing
          interactive components and layouts. As development progresses,
          additional features and improvements will be added to enhance its
          capabilities."
        </p>
        <button class="cta-button" data-action="handleClick">Click Me</button>
        <p class="counter">
          You've clicked ${this.mutableState.count} time(s)!
        </p>
        <Child componentKey="Child" counter=${this.mutableState.count}></Child>

        <div class="footer">
          Made with ❤️ by the ArcNodes Team. Join us on GitHub to contribute and
          collaborate!
        </div>
      </div>
    `;
  }
}

App.registerComponent("app");
