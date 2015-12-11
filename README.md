
# Protractor+ScreenReporter Demo

## ��װ
�����Ѿ�����Node��������һ������npm����Ŀ��û�еĻ��ο�������������
1. ��װNode.js���ڹ��� [nodejs.org](http://nodejs.org/) ���ذ�װ
2. `npm init` ��ʼ��һ�� package.json

���Ի����İ�װ����
1. `npm install protractor -g` ȫ�ְ�װ protractor
2. `webdriver-manager update` ��װ selenium server��������ֿ�ס����ʧ�ܵ���������ֶ���������selenium jar���� `protractor/selenium`��
    ���ص�ַ[http://selenium-release.storage.googleapis.com/index.html](http://selenium-release.storage.googleapis.com/index.html)
3. `npm install protractor-jasmine2-screenshot-reporter --save-dev` ��װ���ɱ���Ĳ��

## ��д����
���Կ��ʹ�� [jasmine](http://jasmine.github.io/)�����棬��дһ�������ļ� `baidu.spec.js`

```
describe('�ٶ���ҳ', function(){
    beforeEach(function(){
        // ��Angular��Ŀ��Ҫ�������
        browser.ignoreSynchronization = true;
	});
    
    it("����������", function(){
        // �򿪰ٶ�
        browser.driver.get('http://www.baidu.com')
        // �ж�������Ƿ����
        expect($('#kw').isPresent()).toBe(true)
    })
})
```

## ���ò���
�½�һ�������ļ� `protractor.conf.js`

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

## ���в���
1. `webdriver-manager start` ���� selenium server�������� [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub) ����server��Ϣ
2. `protractor protractor.conf.js` ����

������󣬿����� `_reports/` �¿������ɵı��档


