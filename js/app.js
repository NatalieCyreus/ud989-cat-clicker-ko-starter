var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'blalala',
    nicknames: ['Tibbie', 'Tralala','Mrs.T']
  },
  {
    clickCount: 0,
    name: 'Cutie',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'blalala',
    nicknames: ['Coco', 'Co','Mrs.C']
  },
  {
    clickCount: 0,
    name: 'Kittie',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'blalala',
    nicknames: ['helloKittie', 'Ki','Mrs.Ki']
  }
]

//Cat Clicker build with KnockOut by Natalie 2017

var Cat = function(data) {
  this.clickCount  = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10){
      title = 'newborn';
    }else if (clicks < 20) {
      title = 'infant';
    } else if (clicks < 30){
      title = 'teen';
    } else if (clicks < 40){
      title = 'adult';
    } else {
      title = 'ninja';
    }
    return title;
  }, this);
};

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push( new Cat (catItem) )
  });
  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
  this.currentCat = ko.observable( this.catList()[0] );
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel())
