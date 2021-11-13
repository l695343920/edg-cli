/*
 * @Descripttion: react-native
 * @Date: 2021-11-02 08:53:57
 */
const { spawn } = require("./../src/utils");

//安装react-native
async function createReactNative(projectName) {
  //生成开发示例
  const project = await spawn("react-native", ["init", projectName]);
  if (!project) {
    console.log("准备安装react-native-cli");
    //安装（更新） react-native 命令行工具。
    const cli = await spawn("npm", ["install", "react-native-cli", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("react-native", ["init", projectName]);
    }
  }
}

module.exports = createReactNative;
