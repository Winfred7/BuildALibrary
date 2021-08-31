class Media{
  constructor(title){
    this._title=title;
    this._ratings=[];
    this._isCheckedOut=false;
  }

  get title(){
    return this._title;
  }

  get isCheckedOut (){
    return this._isCheckedOut;
  };

  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(option){
    this._isCheckedOut=option;
  };
toggleCheckOutStatus (){
  this._isCheckedOut= !this._isCheckedOut;
}
getAverageRating(){
let sumArr=0;
sumArr=this._ratings.reduce((a,b) => a+b,0);
 let aveRating= (sumArr/this._ratings.length);
 return  Math.floor(aveRating);
}

addRating(entry){
 this._ratings.push(entry);
}
}

class Book extends Media{
  constructor(title,author,pages){
    super(title);
    this._author=author;
    this._pages=pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }

}

class Movie extends Media{
  constructor(title,director,runTime){
    super(title);
    this._director=director;
    this._runTime=runTime;
  };

  get director(){
    return this._director;
  };

  get runTime(){
    return this._runTime;
  }
};
//instance of book
const historyOfEverything=new Book('A Short History of Nearly Everything','Bill Bryson',544);
//call to the Media  methods
historyOfEverything.toggleCheckOutStatus();

console.log('The book is checked out :'+historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
///
console.log('The average rating for book is: '+ historyOfEverything.getAverageRating());

const speed=new Movie('Speed','Jan de Bont',116);

speed.toggleCheckOutStatus();
console.log('The movie '+speed.title+' is checked out:' +speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);



console.log('The average rating of movie speed is: '+speed.getAverageRating());



