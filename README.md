
# Protractor+ScreenReporter Demo

## 安装
假设已经有了Node环境，和一个基于npm的项目，没有的话参考以下两步操作
1. 安装Node.js，在官网 [nodejs.org](http://nodejs.org/) 下载安装
2. `npm init` 初始化一个 package.json

测试环境的安装如下
1. `npm install protractor -g` 全局安装 protractor
2. `webdriver-manager update` 安装 selenium server。如果出现卡住或者失败的情况，请手动下载最新selenium jar包到 `protractor/selenium`，
    下载地址[http://selenium-release.storage.googleapis.com/index.html](http://selenium-release.storage.googleapis.com/index.html)
3. `npm install protractor-jasmine2-screenshot-reporter --save-dev` 安装生成报告的插件

## 编写测试
测试框架使用 [jasmine](http://jasmine.github.io/)。下面，编写一个测试文件 `baidu.spec.js`

```
describe('百度首页', function(){
    beforeEach(function(){
        // 非Angular项目需要设置这个
        browser.ignoreSynchronization = true;
	});
    
    it("加载搜索框", function(){
        // 打开百度
        browser.driver.get('http://www.baidu.com')
        // 判断输入框是否存在
        expect($('#kw').isPresent()).toBe(true)
    })
})
```

## 配置测试
新建一个配置文件 `protractor.conf.js`

```
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['baidu.spec.js'],
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                dest: '_reports/' + ()new Date().getTime()) + '/',
                filename: 'index.html'
            })
        );
    }
};
```

## 运行测试
1. `webdriver-manager start` 启动 selenium server。可以在 [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub) 看到server信息
2. `protractor protractor.conf.js` 运行

运行完后，可以在 `_reports/` 下看到生成的报告。


