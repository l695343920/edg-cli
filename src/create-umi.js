/*
 * @Descripttion: umi
 * @Date: 2021-11-07 23:00:30
 */
const { spawn } = require("./../src/utils");

//安装umi
async function createUmi(projectName) {
  //生成开发示例
  const project = await spawn("vue", [
    "create",
    "-p",
    "dcloudio/uni-preset-vue",
    projectName,
  ]);
}

module.exports = createUmi;
