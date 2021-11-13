/*
 * @Descripttion: taro
 * @Date: 2021-11-02 08:53:57
 */
const { spawn } = require("./../src/utils");

//安装taro
async function createTaro(projectName) {
  //生成开发示例
  const project = await spawn("taro", ["init", projectName]);
  if (!project) {
    console.log("准备安装@tarojs/cli");
    //安装（更新） taro 命令行工具。
    const cli = await spawn("npm", ["install", "@tarojs/cli", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("taro", ["init", projectName]);
    }
  }
}

module.exports = createTaro;
