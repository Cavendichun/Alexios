(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"YLL/":function(e,a,l){"use strict";l.r(a);var n=l("FR5j"),t=l("ZZRV"),r=l.n(t),c=(l("u0Wm"),l("+cgr"),l("4gvG")),i=l.n(c);l("0S3p");a["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u9009\u9879"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u9009\u9879"},r.a.createElement("span",{className:"icon icon-link"})),"\u9009\u9879"),r.a.createElement("p",null,"\u5728\u9879\u76ee\u6839\u8def\u5f84\u4e0b\u65b0\u5efa ",r.a.createElement("code",null,".alexiosrc.js"),"\uff0c\u9009\u62e9\u6027\u5730\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee5\u4e0b\u914d\u7f6e\u9879\u6309\u9996\u5b57\u6bcd\u6392\u5217\u3002"),r.a.createElement("h2",{id:"define"},r.a.createElement("a",{"aria-hidden":"true",href:"#define"},r.a.createElement("span",{className:"icon icon-link"})),"define"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"{"," [key: string]: any ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"{}"))),r.a.createElement("p",null,"\u81ea\u5b9a\u4e49\u5168\u5c40\u53d8\u91cf\uff0c\u6240\u6709\u7684\u53d8\u91cf\u90fd\u4f1a\u7ecf\u8fc7 ",r.a.createElement("code",null,"stringify"),"\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  define: {\n    myname: "alexios",\n  },\n};\n\nconsole.log(myname); // alexios\n',lang:"js"}),r.a.createElement("h2",{id:"devtool"},r.a.createElement("a",{"aria-hidden":"true",href:"#devtool"},r.a.createElement("span",{className:"icon icon-link"})),"devtool"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"eval-source-map"))),r.a.createElement("p",null,"\u63a7\u5236 source-map \u7684\u751f\u6210\u65b9\u5f0f\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8fdb\u884c\u8c03\u6574\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  devtool: "cheap-eval-source-map",\n};\n',lang:"js"}),r.a.createElement("h2",{id:"disablecssextract"},r.a.createElement("a",{"aria-hidden":"true",href:"#disablecssextract"},r.a.createElement("span",{className:"icon icon-link"})),"disableCssExtract"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"boolean")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a\u5f00\u53d1\u73af\u5883\u6c38\u8fdc\u4e3a ",r.a.createElement("code",null,"true"),"\uff0c\u751f\u4ea7\u73af\u5883\u9ed8\u8ba4 ",r.a.createElement("code",null,"false"))),r.a.createElement("p",null,"\u662f\u5426\u7981\u7528\u63d0\u53d6\u5355\u72ec\u7684 css \u6587\u4ef6\u3002"),r.a.createElement(i.a,{code:"module.exports = {\n  disableCssExtract: true, // \u5f00\u53d1\u73af\u5883\u65e0\u6548\uff0c\u751f\u4ea7\u73af\u5883css\u4f1a\u6253\u5305\u8fdbjs\u4e2d\n};\n",lang:"js"}),r.a.createElement("h2",{id:"disablehash"},r.a.createElement("a",{"aria-hidden":"true",href:"#disablehash"},r.a.createElement("span",{className:"icon icon-link"})),"disableHash"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"boolean")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"false"))),r.a.createElement("p",null,"\u662f\u5426\u53d6\u6d88\u6784\u5efa\u4ea7\u7269\u7684 hash\u3002"),r.a.createElement(i.a,{code:"module.exports = {\n  disableHash: true,\n};\n",lang:"js"}),r.a.createElement("h2",{id:"entry"},r.a.createElement("a",{"aria-hidden":"true",href:"#entry"},r.a.createElement("span",{className:"icon icon-link"})),"entry"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string | ","{"," [key: string]: string ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"<\u6839\u8def\u5f84>/src/index"))),r.a.createElement("p",null,"\u9879\u76ee\u5165\u53e3\u8bbe\u7f6e\uff0c\u652f\u6301\u5355\u5165\u53e3\u548c\u591a\u5165\u53e3\u3002"),r.a.createElement("p",null,"\u5355\u5165\u53e3:"),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  entry: path.resolve("src/main.js"),\n};\n',lang:"js"}),r.a.createElement("p",null,"\u591a\u5165\u53e3\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u591a\u5165\u53e3\u6253\u5305\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u591a\u4e2a html \u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u4e3a\u914d\u7f6e\u4e2d\u7684 ",r.a.createElement("code",null,"key"),"\u3002"),r.a.createElement("li",null,"\u5206\u522b\u5b9a\u4e49\u6a21\u677f\uff0c\u89c1 ",r.a.createElement(n["a"],{to:"/zh-CN/config/configuration#htmltemplate"},"htmlTemplate")),r.a.createElement("li",null,"\u5206\u522b\u5b9a\u4e49 title\uff0c\u89c1 ",r.a.createElement(n["a"],{to:"/zh-CN/config/configuration#title"},"title")),r.a.createElement("li",null,"\u5206\u522b\u5b9a\u4e49 favicon\uff0c\u89c1 ",r.a.createElement(n["a"],{to:"/zh-CN/config/configuration#favicon"},"favicon"))),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  entry: {\n    index: path.resolve("src/index"), // \u4f7f\u7528 <host>/index.html\u8bbf\u95ee\n    login: path.resolve("src/login"), // \u4f7f\u7528 <host>/login.html\u8bbf\u95ee\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"externals"},r.a.createElement("a",{"aria-hidden":"true",href:"#externals"},r.a.createElement("span",{className:"icon icon-link"})),"externals"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"{"," [key: string]: string ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"{}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u6253\u5305\u65f6\u5ffd\u7565\u7684\u6a21\u5757\uff0c\u9700\u8981\u914d\u5408 ",r.a.createElement(n["a"],{to:"/zh-CN/config/configuration#scripts"},"scripts"),"\uff0c\u6216\u4f7f\u7528\u81ea\u5b9a\u4e49 html \u6a21\u677f\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  externals: {\n    jquery: "jQuery",\n  },\n};\n\nimport $ from "jquery";\n',lang:"js"}),r.a.createElement("h2",{id:"extraalias"},r.a.createElement("a",{"aria-hidden":"true",href:"#extraalias"},r.a.createElement("span",{className:"icon icon-link"})),"extraAlias"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"{"," [key: string]: string ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"{}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u7684\u8def\u5f84\u522b\u540d\uff0c\u9ed8\u8ba4\u652f\u6301 ",r.a.createElement("code",null,"@: <\u6839\u8def\u5f84>/src"),"\u3002"),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  extraAlias: {\n    "@components": path.resolve("src/components"),\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extrababelincludes"},r.a.createElement("a",{"aria-hidden":"true",href:"#extrababelincludes"},r.a.createElement("span",{className:"icon icon-link"})),"extraBabelIncludes"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u9700\u8981\u7f16\u8bd1\u7684\u8def\u5f84\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e\uff0c\u51fa\u73b0\u4ee5\u4e0b\u60c5\u51b5\u7684\uff0c\u53ef\u4ee5\u624b\u52a8\u8fdb\u884c\u8bbe\u7f6e\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u81ea\u52a8\u7f16\u8bd1\u7b2c\u4e09\u65b9\u76ee\u5f55\u65f6\u6709\u88ab\u9057\u6f0f\u7684\u3002"),r.a.createElement("li",null,"\u6709\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6\u653e\u5728 src \u8def\u5f84\u4e4b\u5916\u7684\u3002")),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  extraBabelIncludes: [path.resolve("/a.js")],\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extrababelplugins"},r.a.createElement("a",{"aria-hidden":"true",href:"#extrababelplugins"},r.a.createElement("span",{className:"icon icon-link"})),"extraBabelPlugins"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"any[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u7684 babel \u63d2\u4ef6\uff0c\u5982\u8bbe\u7f6e \u81ea\u5b9a\u4e49 babel \u63d2\u4ef6\u548c antd \u7684\u6309\u9700\u52a0\u8f7d\u63d2\u4ef6\uff1a"),r.a.createElement(i.a,{code:'module.exports = {\n  extraBabelPlugins: [\n    "bable-plugin-custom",\n    ["import", { libraryName: "antd", style: true }],\n  ],\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extrababelpresets"},r.a.createElement("a",{"aria-hidden":"true",href:"#extrababelpresets"},r.a.createElement("span",{className:"icon icon-link"})),"extraBabelPresets"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"any[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u7684 bable \u9884\u8bbe\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  extraBabelPresets: ["bable-preset-custom"],\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extracompilerules"},r.a.createElement("a",{"aria-hidden":"true",href:"#extracompilerules"},r.a.createElement("span",{className:"icon icon-link"})),"extraCompileRules"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"any[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u7684\u89e3\u6790\u89c4\u5219\uff0c\u5982\u9700\u8981\u7528\u81ea\u5b9a\u4e49 loader \u89e3\u6790\u7279\u5b9a\u6587\u4ef6\u3002"),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  extraCompileRules: [\n    {\n      test: /my-custom-file.js$/,\n      loader: path.resolve("my-custom-loader"),\n    },\n  ],\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extraomittedextensions"},r.a.createElement("a",{"aria-hidden":"true",href:"#extraomittedextensions"},r.a.createElement("span",{className:"icon icon-link"})),"extraOmittedExtensions"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u53ef\u5ffd\u7565\u7684\u62d3\u5c55\u540d\uff0c\u9ed8\u8ba4\u652f\u6301 ",r.a.createElement("code",null,".js\u3001.ts\u3001.jsx\u3001.tsx"),"\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  extraOmittedExtensions: [".json"],\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extrastaticfileextensions"},r.a.createElement("a",{"aria-hidden":"true",href:"#extrastaticfileextensions"},r.a.createElement("span",{className:"icon icon-link"})),"extraStaticFileExtensions"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u628a\u54ea\u4e9b\u6587\u4ef6\u5f53\u4f5c\u9759\u6001\u6587\u4ef6\u5904\u7406\uff0c\u9ed8\u8ba4\u652f\u6301 ",r.a.createElement("code",null,".webp\u3001.bmp\u3001.jpg\u3001.jpeg\u3001.gif\u3001.svg\u3001.png\u3001.ico\u3001.ttf\u3001.woff"),"\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  extraStaticFileExtensions: [".json"],\n};\n',lang:"js"}),r.a.createElement("h2",{id:"extrawebpackplugins"},r.a.createElement("a",{"aria-hidden":"true",href:"#extrawebpackplugins"},r.a.createElement("span",{className:"icon icon-link"})),"extraWebpackPlugins"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"any[] | ","{",' [key: "development" | "production"]: any[] ',"}")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u989d\u5916\u7684 webpack \u63d2\u4ef6\uff0c\u53ef\u4ee5\u7edf\u4e00\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5206\u73af\u5883\u8bbe\u7f6e\u3002"),r.a.createElement("p",null,"\u7edf\u4e00\u8bbe\u7f6e\uff1a"),r.a.createElement(i.a,{code:"module.exports = {\n  extraWebpackPlugins: [new MyPlugin()],\n};\n",lang:"js"}),r.a.createElement("p",null,"\u5206\u73af\u5883\u8bbe\u7f6e\uff1a"),r.a.createElement(i.a,{code:"module.exports = {\n  extraWebpackPlugins: {\n    development: [new MyPlugin()],\n    production: [new MyPlugin1()],\n  },\n};\n",lang:"js"}),r.a.createElement("h2",{id:"favicon"},r.a.createElement("a",{"aria-hidden":"true",href:"#favicon"},r.a.createElement("span",{className:"icon icon-link"})),"favicon"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string | ","{"," [key: string]: string ","}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u7f51\u7ad9\u56fe\u8868\uff0c\u652f\u6301\u5355\u9875\u548c\u591a\u9875\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",r.a.createElement("code",null,"<\u6839\u8def\u5f84>/public/favicon.ico"),"\u3002"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8bbe\u7f6e\u6210\u5b57\u7b26\u4e32\u6a21\u5f0f\uff0c\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u6240\u6709\u7684\u5165\u53e3\u90fd\u4f1a\u4f7f\u7528\u8be5\u56fe\u6807\u3002"),r.a.createElement("li",null,"\u8bbe\u7f6e\u6210\u5bf9\u8c61\u6a21\u5f0f\uff0c\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u672a\u8bbe\u7f6e\u7684\u5165\u53e3\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u8def\u5f84\u3002")),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  favicon: path.resolve("favicon.ico"),\n};\n',lang:"js"}),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  favicon: {\n    index: path.resolve("index.ico"),\n    login: path.resolve("login.ico"),\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"hashlength"},r.a.createElement("a",{"aria-hidden":"true",href:"#hashlength"},r.a.createElement("span",{className:"icon icon-link"})),"hashLength"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"number")),r.a.createElement("li",null,"\u9ed8\u8ba4\u503c\uff1a",r.a.createElement("code",null,"8"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u6253\u5305\u4ea7\u7269\u7684 hash \u957f\u5ea6\uff0c\u9ed8\u8ba4 ",r.a.createElement("code",null,"8"),"\u3002"),r.a.createElement("h2",{id:"htmltemplate"},r.a.createElement("a",{"aria-hidden":"true",href:"#htmltemplate"},r.a.createElement("span",{className:"icon icon-link"})),"htmlTemplate"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string | ","{"," [key: string]: string ","}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u7f51\u7ad9 html \u6a21\u677f\uff0c\u652f\u6301\u5355\u9875\u548c\u591a\u9875\uff0c\u9ed8\u8ba4\u4f7f\u7528 alexios \u7684\u6a21\u677f\u3002"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8bbe\u7f6e\u6210\u5b57\u7b26\u4e32\u6a21\u5f0f\uff0c\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u6240\u6709\u7684\u5165\u53e3\u90fd\u4f1a\u4f7f\u7528\u8be5\u6a21\u677f\u3002"),r.a.createElement("li",null,"\u8bbe\u7f6e\u6210\u5bf9\u8c61\u6a21\u5f0f\uff0c\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u672a\u8bbe\u7f6e\u7684\u5165\u53e3\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u6a21\u677f\u3002")),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  htmlTemplate: path.resolve("index.html"),\n};\n',lang:"js"}),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  favicon: {\n    index: path.resolve("index.html"),\n    login: path.resolve("login.html"),\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"ie"},r.a.createElement("a",{"aria-hidden":"true",href:"#ie"},r.a.createElement("span",{className:"icon icon-link"})),"ie"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"9 | 11"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u6700\u4f4e\u517c\u5bb9\u7684 ie \u7248\u672c\uff0c\u81ea\u52a8\u5728\u6240\u6709\u5165\u53e3\u5904\u5f15\u5165\u6240\u9700\u7684 polyfill\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570 ",r.a.createElement("code",null,"--ie")," \u6765\u8bbe\u7f6e\uff0c\u547d\u4ee4\u884c\u53c2\u6570\u4f18\u5148\u7ea7\u9ad8\u4e8e config \u53c2\u6570\u3002"),r.a.createElement(i.a,{code:"module.exports = {\n  ie: 9,\n};\n",lang:"js"}),r.a.createElement("h2",{id:"ignoremomentlocale"},r.a.createElement("a",{"aria-hidden":"true",href:"#ignoremomentlocale"},r.a.createElement("span",{className:"icon icon-link"})),"ignoreMomentLocale"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"boolean")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"true"))),r.a.createElement("p",null,"\u5ffd\u7565 ",r.a.createElement("code",null,"momentjs")," \u7684\u591a\u8bed\u8a00\u6587\u4ef6\uff0c\u9ed8\u8ba4\u5f00\u542f\u3002"),r.a.createElement("h2",{id:"lessvars"},r.a.createElement("a",{"aria-hidden":"true",href:"#lessvars"},r.a.createElement("span",{className:"icon icon-link"})),"lessVars"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"{"," [key: string]: string ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"{}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u5168\u5c40\u7684 less \u53d8\u91cf\uff0c \u53d8\u91cf\u540d\u524d\u4e0d\u9700\u8981\u52a0 ",r.a.createElement("code",null,"@"),"\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  lessVars: {\n    bgColor: "red",\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"outputpath"},r.a.createElement("a",{"aria-hidden":"true",href:"#outputpath"},r.a.createElement("span",{className:"icon icon-link"})),"outputPath"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"<\u6839\u8def\u5f84>/dist"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u6253\u5305\u4ea7\u7269\u7684\u751f\u6210\u6587\u4ef6\u5939\uff0c\u9ed8\u8ba4\u5728 dist \u76ee\u5f55\u4e0b\u3002"),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  outputPath: path.resolve("lib"),\n};\n',lang:"js"}),r.a.createElement("h2",{id:"proxy"},r.a.createElement("a",{"aria-hidden":"true",href:"#proxy"},r.a.createElement("span",{className:"icon icon-link"})),"proxy"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"any[]")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"{}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u7684\u4ee3\u7406\uff0c\u540c ",r.a.createElement("a",{href:"https://webpack.js.org/configuration/dev-server/#devserverproxy",target:"_blank",rel:"noopener noreferrer"},"webpack.devServer.proxy",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\u3002"),r.a.createElement("h2",{id:"publicpath"},r.a.createElement("a",{"aria-hidden":"true",href:"#publicpath"},r.a.createElement("span",{className:"icon icon-link"})),"publicPath"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"/"))),r.a.createElement("p",null,"\u8bbe\u7f6e webpack \u7684 publicPath\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u4e3b\u52a8\u8bbe\u7f6e\uff0c\u5728\u4f7f\u7528 CDN \u7684\u65f6\u5019\u53ef\u4ee5\u8bbe\u7f6e\u6210 CDN \u5730\u5740\u3002"),r.a.createElement("h2",{id:"sassvars"},r.a.createElement("a",{"aria-hidden":"true",href:"#sassvars"},r.a.createElement("span",{className:"icon icon-link"})),"sassVars"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"{"," [key: string]: string ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"{}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u5168\u5c40\u7684 sass \u53d8\u91cf\uff0c \u53d8\u91cf\u540d\u524d\u4e0d\u9700\u8981\u52a0 ",r.a.createElement("code",null,"$"),"\u3002"),r.a.createElement(i.a,{code:'module.exports = {\n  sassVars: {\n    bgColor: "red",\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"scripts"},r.a.createElement("a",{"aria-hidden":"true",href:"#scripts"},r.a.createElement("span",{className:"icon icon-link"})),"scripts"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string[] | ","{"," [key: params]: string[] ","}")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"[]"))),r.a.createElement("p",null,"\u7ed9 html \u6587\u4ef6\u6ce8\u5165\u989d\u5916\u7684\u811a\u672c\uff0c\u4f1a\u81ea\u52a8\u63d2\u5165\u5230\u6240\u6709\u6253\u5305\u4ea7\u7269\u7684 script \u4e4b\u524d\uff0c\u5728\u8bbe\u7f6e\u4e86 ",r.a.createElement("code",null,"externals")," \u6216\u6709\u81ea\u5b9a\u4e49\u9759\u6001\u811a\u672c\u65f6\u53ef\u4ee5\u4f7f\u7528\u3002"),r.a.createElement("p",null,"\u6ce8\u610f\uff1a\u8fd9\u6837\u5f15\u5165\u7684\u811a\u672c\u5373\u4f7f\u5904\u4e8e\u5f00\u53d1\u8def\u5f84\u4e2d\uff0c\u4e5f\u4e0d\u4f1a\u7ecf\u8fc7\u7f16\u8bd1\uff0c\u5982\u679c\u6709\u81ea\u5b9a\u4e49\u7684\u9759\u6001\u811a\u672c\uff0c\u5efa\u8bae\u653e\u5728 ",r.a.createElement("code",null,"public")," \u8def\u5f84\u4e0b\u3002"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u914d\u7f6e\u6210\u6570\u7ec4\u5f62\u5f0f\u65f6\u5e76\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u6240\u6709\u7684 html \u90fd\u4f1a\u63d2\u5165\u6570\u7ec4\u4e2d\u7684\u811a\u672c\u3002"),r.a.createElement("li",null,"\u914d\u7f6e\u6210\u5bf9\u8c61\u5f62\u5f0f\u65f6\uff0c",r.a.createElement("code",null,"key")," \u503c\u4e3a ",r.a.createElement("code",null,"\u5165\u53e3\u540d\u79f0"),"\uff0c\u53ef\u4ee5\u5bf9\u4e0d\u540c\u5165\u53e3\u5206\u522b\u914d\u7f6e\u3002")),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  scripts: ["https://a.com/a.js", path.resolve("public/b.js")],\n};\n',lang:"js"}),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  scripts: {\n    index: ["https://a.com/a.js"],\n    login: [path.resolve("public/b.js")],\n  },\n};\n',lang:"js"}),r.a.createElement("h2",{id:"staticfilehash"},r.a.createElement("a",{"aria-hidden":"true",href:"#staticfilehash"},r.a.createElement("span",{className:"icon icon-link"})),"staticFileHash"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"boolean")),r.a.createElement("li",null,"\u9ed8\u8ba4\uff1a ",r.a.createElement("code",null,"false"))),r.a.createElement("p",null,"\u662f\u5426\u5f00\u542f\u9759\u6001\u6587\u4ef6\u6253\u5305\u540e\u7684 hash \u503c\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\u3002"),r.a.createElement("h2",{id:"title"},r.a.createElement("a",{"aria-hidden":"true",href:"#title"},r.a.createElement("span",{className:"icon icon-link"})),"title"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7c7b\u578b\uff1a ",r.a.createElement("code",null,"string | ","{"," [key: string]: string ","}"))),r.a.createElement("p",null,"\u8bbe\u7f6e\u7f51\u7ad9\u6807\u9898\uff0c\u652f\u6301\u5355\u9875\u548c\u591a\u9875\u3002"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8bbe\u7f6e\u6210\u5b57\u7b26\u4e32\u6a21\u5f0f\uff0c\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u6240\u6709\u7684\u5165\u53e3\u90fd\u4f1a\u4f7f\u7528\u8be5\u6807\u9898\u3002"),r.a.createElement("li",null,"\u8bbe\u7f6e\u6210\u5bf9\u8c61\u6a21\u5f0f\uff0c\u5f00\u542f\u591a\u5165\u53e3\u65f6\uff0c\u672a\u8bbe\u7f6e\u7684\u5165\u53e3\u4f1a\u4f7f\u7528\u6a21\u677f\u6807\u9898\u3002")),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  title: "A",\n};\n',lang:"js"}),r.a.createElement(i.a,{code:'var path = require("path");\n\nmodule.exports = {\n  title: {\n    index: "Index",\n    login: "Login",\n  },\n};\n',lang:"js"})))}}}]);