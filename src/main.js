import { mount } from 'svelte';
import App from "./App.svelte";
import "./index.stylus";

const app = mount(App, {
  target: document.body,
  intro: true,
});

export default app;
