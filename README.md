# Technical Test

For this test, you are given the task of developing a feature for one of our products.

## Task: Appointment Form
Below is an example of the appointment form, it does not have to look like this:
![](https://user-images.githubusercontent.com/31007761/114183240-761c6c00-9911-11eb-8b9a-fc7b3b8ca04b.png)

#### Feature requirements:
- Allow the user to select a service.
- The user must select one service before the rest of the form is shown.
- Depending on the service selected, show a custom form to the user so they can enter their details.
- When the user submits the form, log the field values to the console (this should also include the selected service value).
- After the form has been submitted, reset the form so that the user can make a new appointment request.

Here is the *tricky part*. Depending on the service selected, different input and labels will need to be shown in the form.

#### Data Fetching

Services: `data/services.json` 
Form: `data/form.json`

`Services`: contains all the services a user can select.

`Form`: describes the form constructions that are possible. When a user selects a `service`, you will need to look for the right form description containing the `service` in it's property `services` and show the right title and inputs (with the right type and label) for the user to fill out.

The form containing `*` in its services is used if no other form description contains the service the user selected.

#### Bonus
Instead of using the local `json` files, fetch the data from:
- Services: https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/services.json
- Form: https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/form.json

Add field validation to prevent the user from submitting invalid information:
- Email: must be a valid email 
- Phone: must only contain numbers
- Text: must not be an empty string `""`

## Getting Started
We have setup a basic Next.js app for you to build on. To get started, run the following commands from your terminal:

```
npm install
npm run dev
```

The app will run on http://localhost:3000 and any changes in your code will be reflected there without restarting your server.

Styles: in styles.scss
Entry point: pages/index.js
Syntax: ES6


---------------------------------------

## Part 2 - Questions

#### Q1: What is the result?
`true + false > 2 + true`

2) `false`

#### Q2: What is the result?
`"1" - -"1"`
2) `2`

#### Q3: What is the result?
`new array(5).toString()`
1) `",,,,"`

#### Q4: What is printed in the console?
```
  var arr = ["foo", "bar"]
  arr.length = 0;
  arr.push("bin")
  console.log(arr)
```
4) `['bin']`

#### Q5: What is the result?
`10 > 9 > 8 === true` 
2) `false`

#### Q6: What is logged to the console?
```
function bar() {
 return foo;
 foo = 10;
 function foo() {}
 var foo = ‘11’;
}
console.log(typeof bar());
``` 
5) `Error`

---------

### React & Redux Questions

#### Q1: What is the difference between state and props?
#### In React, props are passed down from a parent component to a child component, while state is managed within a component and can be changed by the component itself. Props are immutable, while state can be changed, and state is only accessible within the component that manages it.
#### Q2: What is the point of using `keys` in React?
#### Keys are used in React to help identify which items in a list have changed, been added, or been removed, which helps optimize rendering and improve performance.
#### Q3: What's the difference between a controlled component and an uncontrolled one in React?
#### A controlled component is one whose value is controlled by React, while an uncontrolled component is one whose value is controlled by the DOM. Controlled components offer a more reliable and consistent way of managing form state in React.
#### Q4: What would be a good lifecycle method/hook to fetch data from an API for a component?
#### The useEffect hook is commonly used to fetch data from an API for a component in React. It allows you to perform side effects like data fetching and updating the component state in response to changes in props or state.
#### Q5: How is `state` updated in an application using Redux?
#### In an application using Redux, state is updated through actions, which are plain JavaScript objects that describe what happened. These actions are dispatched to a central store, which manages the application state and returns a new state object based on the previous state and the action dispatched
#### Q6: How can we handle async logic in Redux (for example making a call to fetch data)?
#### Async logic can be handled in Redux by using middleware like redux-thunk or redux-saga. These middleware allow actions to return functions that can perform async operations and dispatch additional actions as needed.
#### Q7: What are reducers in Redux?
#### Reducers are pure functions in Redux that take the current state and an action as arguments, and return a new state based on the action type. They describe how the application state changes in response to actions dispatched to the store.
