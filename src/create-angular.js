/*
 * @Descripttion: angular
 * @Date: 2021-11-02 08:53:57
 */
const { spawn } = require("./../src/utils");

//安装angular
async function createAngular(projectName) {
  //生成开发示例
  const project = await spawn("ng", ["new", projectName]);
  if (!project) {
    console.log("准备安装@angular/cli");
    //安装（更新） angular 命令行工具。
    const cli = await spawn("npm", ["install", "@angular/cli", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("ng", ["new", projectName]);
    }
  }
}

module.exports = createAngular;
