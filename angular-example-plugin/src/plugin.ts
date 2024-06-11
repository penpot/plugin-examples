import { PluginMessageEvent } from './model';

penpot.ui.open('Angular example plugin', `?theme=${penpot.getTheme()}`);

penpot.on('themechange', (theme) => {
  sendMessage({ type: 'theme', content: theme });
});

function sendMessage(message: PluginMessageEvent) {
  penpot.ui.sendMessage(message);
}
