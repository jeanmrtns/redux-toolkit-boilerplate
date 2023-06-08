# Redux Toolkit Example

This app is an example of how to use Redux Toolkit in a React application.

The configurations are in these folders:
```bash
  src/store/index.ts # setup all reducers and types
  src/store/features # create all slices for the app
  src/Provider # setup Redux Provider

  # Hooks:
  src/hooks/useAppDispatch.ts # Hook to make dispatch less verbose
  src/hooks/useAppSelector.ts # Hook to make selector less verbose
```

Selectors and Dispatch can be used this way inside a React component:
```ts
  const counter = useAppSelector(state => state.counter); // state.<feature>
  const dispatch = useAppDispatch()

  function handleIncrement() {
    dispatch(increment()) // increment() is the action exported from the slice
  }
```

Running the app:
```bash
  # First
  npm install # or yarn

  # Then
  npm run dev # or yarn dev
```