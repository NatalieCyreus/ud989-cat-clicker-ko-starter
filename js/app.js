var Cat = function() {
  this.clickCount  = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('https://');
  this.level = ko.observable('newborn');
  this.nicknames = ko.observableArray(['Kittie', 'hello Kitty']);

  this.incrementLevel = function() {
    if (this.clickCount() < 10){
      this.level('newborn')
    }else if (this.clickCount() < 20) {
      this.level('infant')
    } else if (this.clickCount() < 30){
      this.level('teen')
    } else if (this.clickCount() < 40){
      this.level('adult')
    } else {
      this.level('ninja')
    }
  };
};

var ViewModel = function() {
  this.currentCat = ko.observable( new Cat() );
  this.incrementCounter = function() {
    this.currentCat().clickCount(this.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel())
