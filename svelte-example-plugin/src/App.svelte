<script lang="ts">
  let theme = $state("");
  // Initial theme from the URL
  const url = new URL(window.location.href);
  const initialTheme = url.searchParams.get('theme');
  if (initialTheme) theme = initialTheme;
  // Watch for theme changes
  const handleMessage = (event: MessageEvent) => {
    if (event.data.type === 'theme') {
      theme = event.data.content;
    }
  }
  // Emit a message to add a text
  const handleCreateText = () => {
    const message = {
      type: 'create-text',
      content: 'Hello from the plugin!',
    };
    parent.postMessage(message, "*");
  }
</script>

<svelte:window onmessage={handleMessage} />
<main data-theme={theme}>
  <div>Welcome to your plugin!</div>
<div>Current theme:{theme}</div>
<button onclick={handleCreateText}>Add a text</button>
</main>

