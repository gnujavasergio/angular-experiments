const courses = ['Angular', 'JS', 'Java'];

// Con funciones
courses.map(function(name){
  console.log(name)
});

// con Arrow Functions
courses.map(name => console.log(name));

const doble1 = function(){
  const _this = this;
  this.num *= 2;
  courses.forEach(function(course){    
    console.log(`Lenguaje: ${course} \nPrimera forma: ${_this.num}`);
  });  
}

doble1.call({num:3});

const doble2 = function(){
  const self = this;
  this.num *= 2;
  courses.forEach(function(course){    
    console.log(`Lenguaje: ${course} \nSegunda forma: ${self.num}`);
  });  
}

doble2.call({num:3});


const doble3 = function(){
  this.num *= 2;
  courses.forEach(function(course){    
    console.log(`Lenguaje: ${course} \nTercera forma: ${this.num}`);
  }.bind(this));  
}

doble3.call({num:3});

const doble4 = function(){
  this.num *= 2;
  courses.forEach(course => {    
    console.log(`Lenguaje: ${course} \nCuarta forma: ${this.num}`);
  });  
}

doble4.call({num:3});