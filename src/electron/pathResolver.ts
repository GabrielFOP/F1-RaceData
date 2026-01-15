import path from 'path';

export function getPreloadPath() { 
    return path.join(
        __dirname, 'preload.cjs'
    ); 
}