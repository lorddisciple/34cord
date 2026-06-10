export interface PluginDetail {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'performance' | 'privacy' | 'utility' | 'theme';
}

export type ThemePreset = 'cyberpunk' | 'nord' | 'monochrome' | 'darkcord';

export interface CreatorProfile {
  name: string;
  handle: string;
  role: string;
  bio: string;
  avatarSeed: string;
}
