import { defineConfig } from 'vite'
import {resolve} from 'path';
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/



export default defineConfig({
  plugins: [
    uni(),
  ],
  transpileDependencies: ['uview-ui'],
  resolve:{
    //设置路径别名
    alias: {
      // '@': resolve(__dirname, './src'),
      // '@': '/src/',
      '@': `$${__dirname}/src`,
      '*': resolve('')
      },
  }
})
