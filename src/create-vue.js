/*
 * @Descripttion:vue
 * @Date: 2021-11-02 08:50:13
 */
const { spawn } = require("./../src/utils");

//安装vue
async function createVue(projectName) {
  //生成开发示例
  const project = await spawn("vue", ["create", projectName]);
  if (!project) {
    console.log("准备安装@vue/cli");
    //安装（更新） vue 命令行工具。
    const cli = await spawn("npm", [
      "install",
      "-g",
      "@vue/cli",
      "@vue/cli-service-global",
    ]);
    if (cli) {
      console.log("安装完成，准备创建项目...");
      await spawn("vue", ["create", projectName]);
    }
  }
}

module.exports = createVue;
