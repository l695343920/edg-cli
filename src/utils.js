/*
 * @Descripttion: 工具类
 * @Date: 2021-11-02 14:28:31
 */
const inquirer = require("inquirer");
const ora = require("ora");
const child_process = require("child_process");

//cmd 表单
function prompt(options) {
  return inquirer.prompt(options);
}

//cmd 命令
function spawn(command, args = []) {
  const spinner = ora(
    "开始执行命令:" + command + " " + args.join(" ") + "\n"
  ).start();
  if (process.platform === "win32") {
    command += ".cmd";
  }
  return new Promise(async (resolve, reject) => {
    try {
      const res = await child_process.spawnSync(command, args, {
        shell: true,
        cwd: process.cwd(),
        stdio: "inherit",
      });
      if (res.status != 0) {
        resolve(false);
      }
      spinner.succeed("执行完毕");
      resolve(true);
    } catch (err) {
      console.log(err);
      spinner.stop();
      resolve(false);
    }
  });
}

module.exports = {
  prompt,
  spawn,
};
