const index0class =()=>{
    return`class Animal {
        constructor(name, sound) {
          this.name = name;
          this.sound = sound;
        }
  
        makeSound() {
          console.log(\`\${this.name} says \${this.sound}\`);
        }
    }
      
    // Creating an instance of the class
    const cat = new Animal('Cat', 'Meow');
    cat.makeSound();        //Cat says Meow`
}

export default index0class;