const { BrowserWindow, Menu } = require('electron')
// 自定义菜单
const template = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建窗口',
        click(){
          new BrowserWindow({
            width: 650,
            height: 650
          })
        }
      }
    ]
  },
  {
    label: '关于'
  },
]
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);