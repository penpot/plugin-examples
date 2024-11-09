import { createSignal, onCleanup, onMount } from "solid-js";
import "./App.css";
import { ThemePluginEvent } from "./model";

function App() {
  const url = new URL(window.location.href);
  const initialTheme = url.searchParams.get("theme");

  const [theme, setTheme] = createSignal(initialTheme || null);

  function themeSetter(event: MessageEvent<ThemePluginEvent>) {
    if (event.data && event.data?.type === "theme") {
      setTheme(event.data?.content);
    }
  }

  onMount(() => {
    window.addEventListener("message", themeSetter);
  });

  onCleanup(() => {
    window.removeEventListener("message", themeSetter);
  });

  return <div data-theme={theme}>Welcome to your plugin!</div>;
}

export default App;
