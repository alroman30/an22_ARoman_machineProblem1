// CCS0043L Source Code Template for 3T AY 2022-2023
/*
	Program: 		Computation of Grades
	Programmer: 	Alessandra Dorothy Roman
	Section: 		AN22
	Start Date: 	June 2, 2023
	End Date: 		June 2, 2023
*/

function student(){
	this.name = prompt("Enter the student's name: ")
	classSum = 0
	summativeSum = 0

	for (let i = 1 ; i <= 5 ; i++){
		classgrade = parseFloat(prompt(`Enter enabling assessment ${i}`))
		classSum = classSum + classgrade
	}

	this.classParticipation = Math.round(classSum/5)

	for (let i = 1 ; i <= 3 ; i++){
		sumgrade = parseFloat(prompt(`Enter summative assessment ${i}`))
		summativeSum = summativeSum + sumgrade
	}

	this.summativeAssessment = Math.round(summativeSum/3)
	this.majorExam = Math.round(parseFloat(prompt("Enter major grade: ")))
	this.finalGrade = Math.round((this.classParticipation*.30)+(this.summativeAssessment*.30)+(this.majorExam*.40))
	this.letterGrade = letter(this.finalGrade)
}

function letter(finalGrade){
		if (finalGrade >= 90){
			letterGrade = "A"
		}
		else if (finalGrade >= 80 && finalGrade < 90){
			letterGrade = "B"
		}
		else if (finalGrade >= 70 && finalGrade < 80){
			letterGrade = "C"
		}
		else if (finalGrade >= 60 && finalGrade < 70){
			letterGrade = "D"
		}
		else{
			letterGrade = "F"
		}
	return letterGrade
	}

function displayGrade(stud){
	console.log(`${stud.name} \t \t \t \t ${stud.classParticipation} \t \t \t \t \t ${stud.summativeAssessment} \t \t \t \t \t ${stud.majorExam} \t \t \t \t ${stud.finalGrade} \t \t \t \t ${stud.letterGrade}`)
}

let stud1 = new student()
let stud2 = new student()
let stud3 = new student()
let stud4 = new student()
let stud5 = new student()


console.log("Name of Student \t Class Participation \t Summative Assessment \t Exam Grade \t Grade Score \t Letter Grade")
displayGrade(stud1)
displayGrade(stud2)
displayGrade(stud3)
displayGrade(stud4)
displayGrade(stud5)