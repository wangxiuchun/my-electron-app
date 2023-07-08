const { addWindow, switchTheme, showAbout } = electron;
const newWindow = document.querySelector('.new-window');
const switch_theme = document.querySelector('.switch-theme');
const about = document.querySelector('.about');

// 点击，发布事件
newWindow.addEventListener('click', (e) => {
  addWindow();
})

// 接收主进程发送过来的消息
const fn = async () => {
  const response = await electron.hahaMessage()
  console.log('fn---', response);
}
fn()

// 切换主题
switch_theme.addEventListener('click', () => {
  switchTheme('dark');
})

// 【关于】对话框
about.addEventListener('click', () => {
  showAbout({
    type: 'info',
    title: '关于',
    message: '一位立志把代码写得优雅的靓仔！',
    noLink: true,
    icon: '../public/icons/icon.png',
    // icon: path.join(__dirname, 'apple.png'),
    customStyles: {
      backgroundColor: '#2e2c29',
      color: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px #000'
    }
  });
})

