document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  const taskContainer = document.getElementById("task-container");
  const startBtn = document.getElementById("start-btn");

// 异步任务数组
const tasks = [
  { name: "攀爬陡峭山峰", duration: 2000 },
  { name: "穿越炽热沙漠", duration: 2000 },
  { name: "探索古老遗迹", duration: 2000 },
  { name: "勇渡湍急河流", duration: 2000 },
  { name: "战胜凶猛野兽", duration: 1000 },
  { name: "寻找神秘魔法石", duration: 1500 },
  { name: "解开魔法封印", duration: 1500 },
  { name: "逃离黑暗洞穴", duration: 1000 },
];

// 执行异步任务
async function startAdventure() {
  startBtn.style.display = "none"; // 隐藏开始按钮
  let completedTasks = 0;

  for (let task of tasks) {
    // 更新任务状态
    await performTask(task);
    completedTasks++;
    updateProgress((completedTasks / tasks.length) * 100); // 更新进度条
  }

  // 冒险完成
  taskContainer.innerHTML = `<h2>通关成功！！！</h2>`;
  taskContainer.classList.add("complete");
}

// 执行单个任务
function performTask(task) {
  return new Promise((resolve) => {
    // 动态显示任务
    const taskElement = document.createElement("div");
    taskElement.textContent = `任务进行中：${task.name}...`;
    taskContainer.appendChild(taskElement);

    setTimeout(() => {
      taskElement.textContent = `任务完成：${task.name}`;
      taskElement.classList.add("complete");
      resolve(); // 完成任务
    }, task.duration);
  });
}

// 更新进度条
function updateProgress(percent) {
  progress.style.width = `${percent}%`;
}

// 绑定开始按钮点击事件
startBtn.addEventListener("click", startAdventure);
} );
