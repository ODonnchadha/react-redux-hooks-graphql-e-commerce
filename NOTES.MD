- The Long Road Ahead:
1. Our strategy? Build an e-commerce Website. Learn how to lead projects.

- Project Overview:

- Github and Project Repositories:
1. Obtain existing source code and then make it your own.
### `git clone XYZ cloned-repo`
### `cd cloned-repo`
### `git remote`
    origin
### `git remote remove origin`
### `git remote add origin YYZ`
### `git push origin master`

- E-Commerce Homepage
### `npx create-react-app react-redux-hooks-graphql-e-commerce`
1. We'll use SASS for our styling.
### `yarn add node-sass`
2. create-react-app comes with SASS configuration.
3. &:first-child === menu-item:first-child. Shortcuts for nesting.

- Project Files:
1. package lock files ensure that different machines, etc, have the very same packages.
2. serviceWorker. Progressive Web apps.

- Project components:

- Homepage and Directory Components:
1. What's a page component?

- Routing in a Single Page Application:
1. So we send files via the server once versus Server-side rendering. 
    a. Angular is a framework. React does not care.
2. We will use React Router. Browers are built on clicking a link and receiving a new HTML file.
    a. The browser provides a history API. So we hijack URLs with the library.

- So what is Routing? Most popular and most supported. Follows component-driven architecture.
### `yarn add react-router-dom`
```jsx
    import { BrowserRouter } from 'react-router-dom';
```
1. Router receives the following:
    a. exact: true/false property. Path must be exact.
    b. path: string eual to the path itself. e.g.: '/' for the root (at the base.)
    c. component: Rendered component
```jsx
    <Route exact path component />
```
2. <Switch /> component. Wrap route components within. The moment that there is a match, we render.
    1. Otherwise, we fall through and can render multiple components.

- React Router Dom
1. Three props: { history, location, match }
    a. history. Using the push. Two ways to navigate between pages.
    b. { Link } component. Dynamically pass in a 'to' property. Modified <a> link.
    c. Or use the history. OnClick = fn() props.history.push('') with the string.
    d. location prop. Where we are currently. Focus on the pathname.
2. Main useage of match. Allows our components to build a nested structure.
    a. e.g.: to={`${props.match.url}/13`}

- withRouter():
1. Route passes properties one child deep. 
2. Here's a bad pattern called prop tunneling (or prop drilling): history={this.props.history}
    a. Basically, the children inbetween do not need the property.
3. This is a higher order component. A function that takes any component as an argument and (may) return a modified component.
```jsx
    export default withRouter(MenuItem);
```

- Forms in React:
1. Forms and User Authentication. Register and/or validate existence. So, back to the three points:
    a. Decide on component state.
    b. Decide the state and where it lives.
    c. What changes when state changes.
2. Creation of custom, reuseable components. Where should state live?

- Form Input
1. @mixin: Substitute entire chunk of css within SASS.

- Firebase:
1. Storage and Authentication via server, database, and authentication. e.g.: shop data.
2. e-commerce-db. Free plan is enough for us.

- Sign In With Google
1. Firebase knows that a user never signed out. Subscriber is always listening, until sign out.
    a. User persistence.
2. O-Auth (essentially) allows users to log in with any other third-party service.

- Firebase Firestore: Email and Password.
1. No SQL database. One giant JSON object.
2. A collection: A group of objects called documents. They can have properties that point to other collections.
    a. /users will have a document id. e.g.:
    b. /users/40/cartItems/50
```jsx
    firestore.collection('users').doc('40').collection('cartItems').doc('50');
    firestore.doc('/users/40/cartItems/50');
    firestore.collection('/users/40/cartItems');
```
- Store authenticated users within our datastore.
1. A query is a request we make to firestore to provide us something from the database.
2. Firestore returns us two types of objects: references and snapshots. Of these objects, they can either be document or collection versions.
3. Firestore will *always* return us these objects, even if nothing exists from that query.
- DocumentReference versus CollectionReference

1. We use documentRef objects to perform our CRUD methods (create, retrieve, update, delete.) The documentRef methods are .set(), .get(), .update(), and .delete() respectively.
2. We can also add documents to collections using the collectionRef object with the .add() method.
    a. e.g.: collectionRef.add( {} );
3. We get the snapshotObject from the referenceObject using the .get() method.
    a. e.g.: documentRef.get() or collectionRef.get();
4. documentRef returns a documentSnapshot object. collectionRef returns a querySnapshot object.

1. We get a documentSnapshot object from our documentReference object.
2. The documentSnapshot object allows us to check if a document exists at this query using the .exists property which returns a boolean.
3. We can also get the actual properties on the object by calling the .data() method, which returns to us a JSON object of the document.
    a. displayName: Administration
    b. user: admin@react.com
    c. password: Admin1234