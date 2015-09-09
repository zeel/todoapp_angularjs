// spec.js
describe('Protractor Demo App', function() {
  beforeEach(function(){
    browser.get('index.html');
  })
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('TODO - MVC');
  });
  it('pressing enter after adding text should create a new todo',function(){
    element(by.model('todo')).sendKeys("testingtodo").sendKeys(protractor.Key.ENTER);
    expect(element(by.binding('countActive')).getText()).toEqual('1');
    expect(element.all(by.repeater('todos in todolist')).count()).toEqual(1);
  })
  it('clicking on close button should remove todo from todolist', function(){
    element(by.model('todo')).sendKeys("testingtodo").sendKeys(protractor.Key.ENTER);
    element(by.css('.remove_todo_close')).click();
    expect(element(by.binding('countActive')).getText()).toEqual('0');
    expect(element.all(by.repeater('todos in todolist')).count()).toEqual(0);
  })
});