class Course {
    constructor(name){
      this.name = name;
    }
  
    getName(){
      console.log(this.name);
    }
  }
  
  
  let angular = new Course('Angular2');
  angular.getName();