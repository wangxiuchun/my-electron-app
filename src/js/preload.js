/** 摘要：
 * 预加载脚本包含在浏览器窗口加载网页之前运行的代码。
 * 其可访问 DOM 接口和 Node.js 环境，并且经常在其中使用 contextBridge 接口将特权接口暴露给渲染器。
 * */ 

const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('versions', {  // 版本信息
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron
//   // 除函数之外，我们也可以暴露变量
// })

contextBridge.exposeInMainWorld(
  'electron',
  {
    addWindow: () => ipcRenderer.send('add-window'),  // 在渲染进程触发新建一个窗口
    hahaMessage: () => ipcRenderer.invoke('send-Haha') // 在主进程发送消息给渲染进程，invoke（Returns Promise<any> - Resolves 主进程返回值）
  }
)