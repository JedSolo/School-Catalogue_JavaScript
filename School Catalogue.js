class School{
    constructor(name, level, numberOfStudents){
      this._name = name
      this._level = level
      this._numberOfStudents = numberOfStudents
    }
    get name(){
      return this._name
    }
    get level(){
      return this._level
    }
    get numberOfStudents(){
      return this._numberOfStudents
    }
    set numberofStudents(value){
      if (typeof value === 'number'){
        this._numberOfStudents = value
      }
      else{
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this.numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      let randomNum = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[randomNum]
    }
  }
  
  // Creating the Primary School class:
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents)
      this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy(){
      return this._pickupPolicy
    }
  }
  
  // Creating the Middle School Class:
  class MiddleSchool extends School{
    constructor(name, numberOfStudents){
      super(name, 'middle', numberOfStudents)
    }
  }
  
  // Creating the HighSchool Class:
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams
    }
    get sportsTeams(){
      return this._sportsTeams
    }
  }
  
  // Creating instances of PrimarySchool and HighSchool:
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  lorraineHansbury.quickFacts()
  subsTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  console.log(subsTeacher)
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  console.log(alSmith.sportsTeams)
  
  // Creating an instance of middle school:
  const valleyview = new MiddleSchool('Valley View', 455)
  valleyview.quickFacts()