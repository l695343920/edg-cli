/*
 * @Descripttion: react
 * @Date: 2021-11-02 08:50:25
 */
const { spawn } = require("./../src/utils");

//安装react
async function createReact(projectName) {
  //生成开发示例
  const project = await spawn("create-react-app", [projectName]);
  if (!project) {
    console.log("准备安装create-react-app");
    //安装（更新） react 命令行工具。
    const cli = await spawn("npm", ["install", "create-react-app", "-g"]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("create-react-app", [projectName]);
    }
  }
}

module.exports = createReact;
