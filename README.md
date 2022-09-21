# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Third party libraries

npm install -g json-server
https://www.npmjs.com/package/json-server


@mui/material - styling library


## Homework

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.

```bash
import React from "react";

import Todo from './Todo';

// never use var keyword => use let for variables and const for constants
var todos = (): Promise<{id: string; title: string;}[]> => new Promise((res) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        title: "Go shopping",
      },
      {
        id: "2",
        title: "Job interview",
      },
      {
        id: "3",
        title: "Prepare homework",
      },
    ]);
  }, 100);
});

// use arrow functions
function App() {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([]);

  React.useEffect(() => { // Incorrect fetching functionality, which creates infinite rendering cycle
    (async () => {
      var awaitedTodos = await todos();
      for (var i = 0; i < awaitedTodos.length; i++) {
        setState([...state, awaitedTodos[i]]);
      }
    })()
  })

  return (
    <div>   ----  Unnecesarry div => use Fragment, every item of collection must have pseudo-random index
      {state.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
```
```bash
import React from "react";

class Todo extends React.Component<any> {  --  missing type specification... never use any, class libraries should be replaced by functional if we starts a brand new project
	shouldComponentUpdate(prevProps: any) {
	if(this.props != prevProps) {
		return true;
	}
		return false;
	}

	handleOnClick() {
		window.location.href = '/detail'
	}

	render() {

	return ( 
		<div>  
			<div onClick={this.handleOnClick}>
			{this.props.todo.title}
			</div>
		</div>
	);
	}
}

export default Todo;

```





3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)

<b>for this usecase is better to use classic props drilling (React Context API is better for situation where there is long props chain with minimal rate change)</b>

<b>State management with React Context API shouldn't be used dogmatically.</b>

6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it

7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

<b>Class compomnents are not a good candidate for new component anymore. </b>

<b>Everything that class component were able to do in the past, FC can implement as well. </b>
