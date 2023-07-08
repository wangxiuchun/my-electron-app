const newWindow = document.querySelector('.new-window');

// 点击，发布事件
newWindow.addEventListener('click', (e) => {
  electron.addWindow();
  e.defaultPrevented();
})

// 接收主进程发送过来的消息
const fn = async () => {
  const response = await electron.hahaMessage()
  console.log('fn---', response);
}
fn()

