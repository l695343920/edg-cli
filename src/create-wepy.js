/*
 * @Descripttion: wepy
 * @Date: 2021-11-02 08:50:43
 */
const { spawn } = require("./../src/utils");

//安装wepy
async function createWepy(projectName) {
  //生成开发示例
  const project = await spawn("wepy", ["init", "standard", projectName]);
  if (!project) {
    console.log("准备安装@wepy/cli");
    //安装（更新） wepy 命令行工具。
    const cli = await spawn("npm", ["install", "@wepy/cli", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("wepy", ["init", "standard", projectName]);
    }
  }
}

module.exports = createWepy;
