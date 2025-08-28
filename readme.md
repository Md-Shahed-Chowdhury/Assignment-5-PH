## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-  Using getElementById we search html elemments by id and it will give one element as an Id can be held by only 1 element. Using getElementByClassName we search by class name and here multiple elements can be found as the class name can be held by multiple elements in html. querySelector and querySelector all helps us to find elements using css selector.querySelector will return only the first element that matches with the parameter but querySelectorAll helps us to find every elements with the same css property.
## How do you create and insert a new element into the DOM?
- let parent = document.getElementById('');
let newchild = document.createElement('');
newChild.innerHTML = ``;
parent.appendChild('newChild');
## What is Event Bubbling and how does it work?
- When an event is happened, following the elements in which the event has happened it goes to the smallest element which is set as a target. After that if there is any event listener for that specific event then the task said to be done in event listener is performed.That means event listeners of the inner elements are performed first then gradually the outer elements.
## What is Event Delegation in JavaScript? Why is it useful?
- Event delegation means passing the task of event handling of the inner element to any of the outer elements.This helps in dynamic event handling.
## What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() -> it prevents the default behaviour of the button in form which prevents it from refreshing
- stopPropagation() -> it prevents the bubbling of events in the same level.