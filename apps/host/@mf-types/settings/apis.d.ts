
    export type RemoteKeys = 'settings/App';
    type PackageType<T> = T extends 'settings/App' ? typeof import('settings/App') :any;