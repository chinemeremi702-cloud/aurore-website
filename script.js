function openCollection(id) {
document.getElementById('products').classList.add('hidden');
document.querySelectorAll('.collection').forEach(function(collection) {
    collection.classList.add('hidden');
});
document.getElementById(id).classList.remove('hidden');
window.scrollTo(0, 0);
}
function goBack(){
document.querySelectorAll('.collection').forEach(function(collection) {
    collection.classList.add('hidden');
});
document.getElementById('products').classList.remove('hidden');
document.getElementById('products').classList.add('active');
window.scrollTo(0, 0);
}
function showSection(id) {
var sections = document.querySelectorAll('section');
for(var i = 0; i < sections.length; i++) {
sections[i].classList.remove('active');
sections[i].classList.add('hidden');
}
var collections = document.querySelectorAll('.collection');
for(var j = 0; j < collections.length; j++) {
collections[j].classList.add('hidden');
}
var target = document.getElementById(id);
if(target) {
target.classList.remove('hidden');
target.classList.add('active');
}
}
let cartcount = 0;
function addToCart(productName) {
cartcount = cartcount + 1;
document.getElementById('cartcount').textContent = cartcount;
}
const contactForm = document.getElementById('contactForm');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
contactForm.addEventListener('submit', function(event) {
event.preventDefault();
const fullName = document.getElementById('fullname').value.trim();
const email = document.getElementById('email').value.trim();
const subject = document.getElementById('subject').value.trim();
const message = document.getElementById('message').value.trim();
formError.textContent = '';
formSuccess.textContent = '';
if (fullName.length <2) {
    formError.textContent = 'Please enter your full name.';
    return;
}
if(!email.includes('@') || !email.includes('.')) {
    formError.textContent = 'Please enter a valid email address.';
return;
}
if (subject.length <2) {
formError.textContent = 'Please enter a subject.';
return;
}
if (message.length <5) {
formError.textContent = 'Please tell us what us you need, at least 5 characters.';
return;
}
formSuccess.textContent = 'Thank you ' + fullName + '! Your message has been sent. We will get back to you soon.';
contactForm.reset();
document.getElementById('selectedService').textContent = 'No service selected yet.';
});
}


