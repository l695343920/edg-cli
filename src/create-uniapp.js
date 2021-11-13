/*
 * @Descripttion: uniapp
 * @Date: 2021-11-02 08:53:57
 */
const { spawn } = require("./../src/utils");

//安装uniapp
async function createUniapp(projectName) {
  //生成开发示例
  const project = await spawn("vue", [
    "create",
    "-p",
    "dcloudio/uni-preset-vue",
    projectName,
  ]);
  if (!project) {
    console.log("准备安装@vue/cli");
    //安装（更新） uniapp 命令行工具。
    const cli = await spawn("npm", ["install", "@vue/cli", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("vue", ["create", "-p", "dcloudio/uni-preset-vue", projectName]);
    }
  }
}

module.exports = createUniapp;
