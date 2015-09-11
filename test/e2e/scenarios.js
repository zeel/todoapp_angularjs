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
  it('because of localstorage todo count should be 1 even after page refresh',function(){
    expect(element.all(by.repeater('todos in todolist')).count()).toEqual(1);
    //remove todo.
    element(by.css('.remove_todo_close')).click();
  })
  it('clicking on close button should remove todo from todolist', function(){
    element(by.model('todo')).sendKeys("testingtodo").sendKeys(protractor.Key.ENTER);
    element(by.css('.remove_todo_close')).click();
    expect(element(by.binding('countActive')).getText()).toEqual('0');
    expect(element.all(by.repeater('todos in todolist')).count()).toEqual(0);
  })
  it('clicking on selectall will make countActive 0', function(){
    element(by.model('todo')).sendKeys("testingtodo1").sendKeys(protractor.Key.ENTER);
    element(by.model('todo')).sendKeys("testingtodo2").sendKeys(protractor.Key.ENTER);
    expect(element(by.binding('countActive')).getText()).toEqual('2');
    element(by.model('selectAll')).click();
    expect(element(by.binding('countActive')).getText()).toEqual('0');
  })
});