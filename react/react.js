JSX
// JavaScript XML, a syntax extension that allows writing HTML-like code in JavaScript.

Real DOM and Virtual DOM?
// Real DOM updates are slow and inefficient, 
// while Virtual DOM is a lightweight copy that improves performance via diffing and reconciliation.

reconciliation
// The process where React compares the Virtual DOM with the previous version to update the Real DOM efficiently.

controlled and uncontrolled components?
// Controlled: Form data handled by React state.
// Uncontrolled: Form data handled by the DOM (using ref).

Hooks
// Functions that let you use state and lifecycle features in functional components (e.g., useState, useEffect).

useMemo
// useMemo: Memoizes computed values. Memoize expensive calculations to avoid re-computing on every render.
// Heavy computations (e.g., filtering/sorting large lists).

useCallback
// seCallback: Memoizes functions to prevent unnecessary re-renders.
// Memoize functions to prevent unnecessary re-creations.

component lifecycle
// Mounting (componentDidMount), Updating (componentDidUpdate), Unmounting (componentWillUnmount).

React Context?
// A way to share data globally without prop drilling (using createContext, Provider, Consumer).

Redux
// A state management library with a store, actions, and reducers (useSelector, useDispatch with React-Redux).

HOC
// Functions that take a component and return an enhanced component (e.g., for code reuse).

React Fiber?
// A reimplementation of React’s core algorithm for better rendering performance.

routing
// Using libraries like React Router (BrowserRouter, Route, Link).

React Portals?
// A way to render children outside the DOM hierarchy (e.g., modals).

optimize React performance?
// Use React.memo, useMemo, useCallback, code splitting, lazy loading.

server-side rendering
// Rendering React on the server for faster initial load (Next.js supports this).

keys in React lists.
// Keys help React identify which items have changed, preventing re-rendering issues.

React Fragments?
{/* <></> or <Fragment> to group elements without adding extra DOM nodes. */}

useState and useReducer?
// useState for simple state, useReducer for complex state logic (similar to Redux).

Suspense
// Lets components "wait" for something (e.g., data loading) before rendering.

useRef
// useRef returns a mutable object ({ current: value }) that persists across renders. 
// Unlike useState, changing ref.current doesn’t trigger a re-render.