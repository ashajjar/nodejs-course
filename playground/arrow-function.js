var square = x=> x*x;
console.log(square(9));

var user = {
	name : 'Ahmad',
	sayHi: ()=>{
		console.log(arguments);
		console.log('Hi '+ this.name);
	},
	sayHello(){
		console.log(arguments);
		console.log('Hi '+ this.name);
	}
};

user.sayHi(1,2,3);
user.sayHello(1,2,3);