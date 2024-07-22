import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    loader: { '.js': 'jsx' },
    entryPoints: ['app.js'],
    plugins: [react()],
})
