
const modern_books = ["Concept of Modern Physics", "Principle of Quantum Mechanics", "University Physics", "Principle of Modern Physics"];
const classical_books = ["Introduction to Classical Mechanics", "Newtonian Mechanics", "Classical Mechanics", "Statistics Physics"];
const atomic_books = ["Atomic Physics", "Atomic and Nuclear Physics", "Atomic physics and human knowledge", "Fundamental of molecular physics"];
const organic_books = ["Organic Chemsitry","Name Reaction and Reagents","Reaction ans Synthesis","Advanvced Organic Chemistry"];
const Inorganic_books = ["Consise Inorganic Chemistry","D-block Chemistry","Fundamentals of Inorganic Chemistry","Basics of Inorganic Chemistry"];
const physical_books = ["A molecular approach","Atkin's Physical Chemistry","Levine's Physical Chemistry","Principle of Physical Chemistry"];
const trigo_books = ["Fundamentals of Trignometry","Advanced Trignometgry","Plane Trignometry","Algebra and trignometry"];
const integration_books = ["Thomsan's Calculus","Handbook of integration","Methods of Numerical Integration","The Fractional Calculus"];
const geometry_books = ["Euclid's geometry","A school geometry","Interduction to geometry","The elements of coordinate geometry"];


function modern() {
    modern_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function classical() {
    classical_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function atomic() {
    atomic_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function organic() {
    organic_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function inorganic() {
    Inorganic_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function physical() {
    physical_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function trio() {
    trigo_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function integration() {
    integration_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};
function geometry() {
    geometry_books.forEach(el => {
        document.getElementById('blank').innerHTML += `<div>${el}</div><br/>`;
    });
};

function clearDiv() {
     let div = document.getElementById("blank");
     div.replaceChildren();
  }

