var ViewModel = function() {
  this.clickCount  = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('https://');
  this.level = ko.observable('newborn');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    this.incrementLevel();
  };

  this.incrementLevel = function() {
    if (this.clickCount() >= 20) {
      this.level('teen')
    } else if (this.clickCount() >= 10){
      this.level('infant')
    }
  }

  this.nicknames = ko.observableArray([
    {nickname:'Kittie'},
    {nickname: 'hello Kitty'}
  ]);

}

ko.applyBindings(new ViewModel())
