#! /usr/bin/env node

const { prompt } = require("./../src/utils");
const createVue = require("./../src/create-vue");
const createReact = require("./../src/create-react");
const createAngular = require("./../src/create-angular");
const createUmi = require("./../src/create-umi");
const createReactNative = require("./../src/create-react-native");
const createWepy = require("./../src/create-wepy");
const createTaro = require("./../src/create-taro");
const createUniapp = require("./../src/create-uniapp");
const createMpvue = require("./../src/create-mpvue");

async function init() {
  console.log(`
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
◇◇◆◆◆◆◆◇◇◇◇◆◆◆◆◇◇◇◇◇◇◇◆◆◆◆◆◆◆◆◆◇◇◇◇◇
◇◇◇◇◆◆◆◆◇◇◇◇◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◆◆◆◆◆◇◇◇◇
◇◇◇◇◇◆◆◆◆◇◇◇◇◆◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◆◆◆◇◇◇◇
◇◇◇◇◇◆◆◆◆◆◇◇◇◆◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◆◆◆◇◇◇◇
◇◇◇◇◇◆◇◆◆◆◆◇◇◆◇◇◇◇◇◇◇◇◇◇◆◆◇◇◆◆◆◆◇◇◇◇
◇◇◇◇◇◆◇◇◆◆◆◆◇◆◇◇◇◇◇◇◇◇◇◇◆◆◆◆◆◆◆◇◇◇◇◇
◇◇◇◇◇◆◇◇◆◆◆◆◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◆◆◆◆◆◇◇◇◇
◇◇◇◇◇◆◇◇◇◆◆◆◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◆◆◆◇◇◇◇
◇◇◇◇◇◆◇◇◇◇◆◆◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◆◆◆◇◇◇◇
◇◇◇◇◇◆◇◇◇◇◇◆◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◆◆◆◇◇◇◇
◇◇◇◆◆◆◆◇◇◇◇◇◆◆◇◇◇◇◇◇◇◇◇◆◆◆◇◆◆◆◆◆◇◇◇◇
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◆◆◆◆◆◆◆◆◆◇◇◇◇◇
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇
  `);

  const frame = await prompt([
    {
      type: "list",
      message: "请选择你要创建的项目:",
      name: "name",
      choices: [
        "vue",
        "react",
        "angular",
        "react-native",
        // "weex",
        "umi",
        "wepy",
        // "mpvue",
        "uniapp",
        "taro",
      ],
      filter: function (val) {
        // 使用filter将回答变为小写
        return val.toLowerCase();
      },
    },
  ]);
  const info = await prompt([
    {
      type: "input",
      message: "请输入项目文件夹名称:",
      name: "project",
    },
  ]);
  const projectName = info.project;
  switch (frame.name) {
    case "vue":
      createVue(projectName);
      break;
    case "react":
      createReact(projectName);
      break;
    case "angular":
      createAngular(projectName);
      break;
    case "react-native":
      createReactNative(projectName);
      break;
    case "umi":
      createUmi(projectName);
      break;
    case "wepy":
      createWepy(projectName);
      break;
    // case "mpvue":
    //   createMpvue(projectName);
    //   break;
    case "taro":
      createTaro(projectName);
      break;
    case "uniapp":
      createUniapp(projectName);
      break;
    default:
      break;
  }
}

init();
