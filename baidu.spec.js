describe('百度首页', function(){
    beforeEach(function(){
        browser.ignoreSynchronization = true;
	});
    
    it("加载搜索框", function(){
        browser.driver.get('http://www.baidu.com')
        expect($('#kw').isPresent()).toBe(true)
    })
})