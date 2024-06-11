import type { PluginMessageEvent } from './model';

penpot.ui.open('Vue example plugin', `?theme=${penpot.getTheme()}`);

penpot.on('themechange', (theme) => {
  sendMessage({ type: 'theme', content: theme });
});

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}
