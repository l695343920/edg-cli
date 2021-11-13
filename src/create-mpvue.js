/*
 * @Descripttion: mpvue
 * @Date: 2021-11-02 08:50:43
 */
const { spawn } = require("./../src/utils");

//安装mpvue
async function createMpvue(projectName) {
  //生成开发示例
  const project = await spawn("vue", [
    "init",
    "mpvue/mpvue-quickstart",
    projectName,
  ]);
  if (!project) {
    console.log("准备安装vue/cli");
    //安装（更新） vue 命令行工具。
    const cli = await spawn("npm", ["install", "vue-cli", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("mpvue", ["init", "mpvue/mpvue-quickstart", projectName]);
    }
  }
}

module.exports = createMpvue;
