/**
 * This file contains the typescript interfaces for the plugin events.
 */

export interface ThemePluginEvent {
  type: string;
  content: string;
}

export type PluginMessageEvent = ThemePluginEvent;
