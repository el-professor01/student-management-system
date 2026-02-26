let students = [];

/* ================= LANGUAGE SYSTEM ================= */

function setLanguage(lang){

if(lang === "sw"){
document.getElementById("mainTitle").textContent="Mfumo wa Usimamizi wa Wanafunzi wa O-Level";
document.getElementById("registerTitle").textContent="Sajili Mwanafunzi";
document.getElementById("searchTitle").textContent="Tafuta Mwanafunzi";
document.getElementById("performanceTitle").textContent="Ongeza Matokeo ya Masomo";
document.getElementById("listTitle").textContent="Orodha ya Wanafunzi";

studentId.placeholder="Kitambulisho cha Mwanafunzi";
studentName.placeholder="Jina Kamili";
studentAge.placeholder="Umri";
searchId.placeholder="Weka Kitambulisho";
perfStudentId.placeholder="Kitambulisho cha Mwanafunzi";
math.placeholder="Hisabati";
english.placeholder="Kiingereza";
science.placeholder="Sayansi";
social.placeholder="Maarifa ya Jamii";

registerBtn.textContent="Sajili";
searchBtn.textContent="Tafuta";
performanceBtn.textContent="Ongeza Matokeo";
}

if(lang === "en"){
document.getElementById("mainTitle").textContent="O-Level Student Management System";
document.getElementById("registerTitle").textContent="Register Student";
document.getElementById("searchTitle").textContent="Search Student";
document.getElementById("performanceTitle").textContent="Add Academic Performance";
document.getElementById("listTitle").textContent="Student List";

studentId.placeholder="Student ID";
studentName.placeholder="Full Name";
studentAge.placeholder="Age";
searchId.placeholder="Enter Student ID";
perfStudentId.placeholder="Student ID";
math.placeholder="Math";
english.placeholder="English";
science.placeholder="Science";
social.placeholder="Social Studies";

registerBtn.textContent="Register";
searchBtn.textContent="Search";
performanceBtn.textContent="Add Performance";
}

if(lang === "fr"){
	document.getElementById("mainTitle").textContent="Système de gestion des élèves O-Level";
	document.getElementById("registerTitle").textContent="Enregistrer un élève";
	document.getElementById("searchTitle").textContent="Rechercher un élève";
	document.getElementById("performanceTitle").textContent="Ajouter les résultats scolaires";
	document.getElementById("listTitle").textContent="Liste des élèves";

	studentId.placeholder="ID de l'élève";
	studentName.placeholder="Nom complet";
	studentAge.placeholder="Âge";
	searchId.placeholder="Entrez l'ID";
	perfStudentId.placeholder="ID de l'élève";
	math.placeholder="Mathématiques";
	english.placeholder="Anglais";
	science.placeholder="Sciences";
	social.placeholder="Sciences sociales";

	registerBtn.textContent="Enregistrer";
	searchBtn.textContent="Rechercher";
	performanceBtn.textContent="Ajouter";
}

		// Translate table headers and other small UI elements
		const thID = document.getElementById('thID');
		const thName = document.getElementById('thName');
		const thForm = document.getElementById('thForm');
		const thMath = document.getElementById('thMath');
		const thEnglish = document.getElementById('thEnglish');
		const thScience = document.getElementById('thScience');
		const thSocial = document.getElementById('thSocial');
		const thAverage = document.getElementById('thAverage');
		const thActions = document.getElementById('thActions');
		const clearBtnEl = document.getElementById('clearBtn');
		const searchMsgEl = document.getElementById('searchMsg');

		// selects
		const genderSelect = document.getElementById('studentGender');
		const formSelect = document.getElementById('studentFormLevel');

		if(lang === 'sw'){
			if(thID) thID.textContent = 'Kitambulisho';
			if(thName) thName.textContent = 'Jina';
			if(thForm) thForm.textContent = 'Kidato';
			if(thMath) thMath.textContent = 'Hisabati';
			if(thEnglish) thEnglish.textContent = 'Kiingereza';
			if(thScience) thScience.textContent = 'Sayansi';
			if(thSocial) thSocial.textContent = 'Maarifa ya Jamii';
			if(thAverage) thAverage.textContent = 'Wastani';
			if(thActions) thActions.textContent = 'Vitendo';
			if(clearBtnEl) clearBtnEl.textContent = 'Futa';
			if(searchMsgEl) searchMsgEl.textContent = '';

			if(genderSelect) genderSelect.innerHTML = `
			  <option value="">Chagua Jinsia</option>
			  <option value="Male">Mwanaume</option>
			  <option value="Female">Mwanamke</option>
			`;

			if(formSelect) formSelect.innerHTML = `
			  <option value="">Chagua Kidato</option>
			  <option value="1">Kidato 1</option>
			  <option value="2">Kidato 2</option>
			  <option value="3">Kidato 3</option>
			  <option value="4">Kidato 4</option>
			`;
		} else if(lang === 'fr'){
			if(thID) thID.textContent = "ID";
			if(thName) thName.textContent = 'Nom';
			if(thForm) thForm.textContent = 'Classe';
			if(thMath) thMath.textContent = 'Mathématiques';
			if(thEnglish) thEnglish.textContent = 'Anglais';
			if(thScience) thScience.textContent = 'Sciences';
			if(thSocial) thSocial.textContent = 'Sciences sociales';
			if(thAverage) thAverage.textContent = 'Moyenne';
			if(thActions) thActions.textContent = 'Actions';
			if(clearBtnEl) clearBtnEl.textContent = 'Effacer';
			if(searchMsgEl) searchMsgEl.textContent = '';

			if(genderSelect) genderSelect.innerHTML = `
			  <option value="">Sélectionner le sexe</option>
			  <option value="Male">Masculin</option>
			  <option value="Female">Féminin</option>
			`;

			if(formSelect) formSelect.innerHTML = `
			  <option value="">Sélectionner la classe</option>
			  <option value="1">Classe 1</option>
			  <option value="2">Classe 2</option>
			  <option value="3">Classe 3</option>
			  <option value="4">Classe 4</option>
			`;
		} else { // default to English
			if(thID) thID.textContent = 'ID';
			if(thName) thName.textContent = 'Name';
			if(thForm) thForm.textContent = 'Form';
			if(thMath) thMath.textContent = 'Math';
			if(thEnglish) thEnglish.textContent = 'English';
			if(thScience) thScience.textContent = 'Science';
			if(thSocial) thSocial.textContent = 'Social';
			if(thAverage) thAverage.textContent = 'Average';
			if(thActions) thActions.textContent = 'Actions';
			if(clearBtnEl) clearBtnEl.textContent = 'Clear';
			if(searchMsgEl) searchMsgEl.textContent = '';

			if(genderSelect) genderSelect.innerHTML = `
			  <option value="">Select Gender</option>
			  <option value="Male">Male</option>
			  <option value="Female">Female</option>
			`;

			if(formSelect) formSelect.innerHTML = `
			  <option value="">Select Form</option>
			  <option value="1">Form 1</option>
			  <option value="2">Form 2</option>
			  <option value="3">Form 3</option>
			  <option value="4">Form 4</option>
			`;
		}

		// Persist choice
		try{ localStorage.setItem('lang', lang); }catch(e){}

}

/* =============== CORE SYSTEM ================= */

function createStudent(id,name,age,gender,form){
return {id,name,age:parseInt(age),gender,form:parseInt(form),performance:[]};
}

/* Register */
studentForm.addEventListener("submit",function(e){
e.preventDefault();

let id=studentId.value.trim();
let name=studentName.value.trim();
let age=studentAge.value;
let gender=studentGender.value;
let form=studentFormLevel.value;

if(!id||!name||!age||!gender||!form){
alert("All fields required");
return;
}

if(students.find(s=>s.id===id)){
alert("Student ID must be unique");
return;
}

students.push(createStudent(id,name,age,gender,form));
displayStudents();
this.reset();
});

/* Add Performance */
performanceForm.addEventListener("submit",function(e){
e.preventDefault();

let id=perfStudentId.value.trim();
let student=students.find(s=>s.id===id);

if(!student){
alert("Student not found");
return;
}

let record={
form:student.form,
subjects:{
math:parseInt(math.value)||0,
english:parseInt(english.value)||0,
science:parseInt(science.value)||0,
social:parseInt(social.value)||0
}
};

student.performance.push(record);
displayStudents();
this.reset();
});

/* Calculate Average */
function calculateAverage(student){
if(student.performance.length===0) return "N/A";
let s=student.performance[student.performance.length-1].subjects;
let avg=(s.math+s.english+s.science+s.social)/4;
return avg.toFixed(2);
}

/* Display */
function displayStudents(list){
	const data = Array.isArray(list) ? list : students;
	studentTable.innerHTML = "";

	data.forEach(student=>{

		let mathMark="-",engMark="-",sciMark="-",socMark="-";

		if(student.performance.length>0){
			let s=student.performance[student.performance.length-1].subjects;
			mathMark=s.math;
			engMark=s.english;
			sciMark=s.science;
			socMark=s.social;
		}

		studentTable.innerHTML+=`
		<tr>
		<td>${student.id}</td>
		<td>${student.name}</td>
		<td>Form ${student.form}</td>
		<td>${mathMark}</td>
		<td>${engMark}</td>
		<td>${sciMark}</td>
		<td>${socMark}</td>
		<td>${calculateAverage(student)}</td>
		<td>
		<button onclick="promoteStudent('${student.id}')">Promote</button>
		<button onclick="deleteStudent('${student.id}')">Delete</button>
		</td>
		</tr>
		`;
	});
}

/* Delete */
function deleteStudent(id){
students=students.filter(s=>s.id!==id);
displayStudents();
}

/* Promote */
function promoteStudent(id){
let student=students.find(s=>s.id===id);
let avg=parseFloat(calculateAverage(student));

if(avg>=50 && student.form<4){
student.form++;
alert("Student Promoted");
}else{
alert("Promotion not allowed");
}
displayStudents();
}

/* Search */
function searchStudent(){
	let id=searchId.value.trim();
	const msgEl = document.getElementById('searchMsg');

	if(!id){
		msgEl.textContent = '';
		displayStudents();
		return;
	}

	let student=students.find(s=>s.id===id);

	if(!student){
		msgEl.textContent = 'Student not found';
		displayStudents([]);
		return;
	}

	msgEl.textContent = '';
	displayStudents([student]);
}

/* Clear Search */
function clearSearch(){
	searchId.value="";
	const msgEl = document.getElementById('searchMsg');
	if(msgEl) msgEl.textContent = '';
	displayStudents();
}

// Initialize language dropdown on load
document.addEventListener('DOMContentLoaded', function(){
	const sel = document.getElementById('languageSelect');
	const saved = (function(){ try{ return localStorage.getItem('lang'); }catch(e){ return null; }})();
	const langToUse = saved || (sel ? sel.value : 'en');
	if(sel) sel.value = langToUse;
	setLanguage(langToUse);
});