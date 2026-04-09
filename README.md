# React Day 1 — Mental Model

This repository contains my first experiment while learning React.

## Goal

Understand the core React idea:

UI = f(state)

Meaning the UI is simply a function of the current state.

When state changes, React re-runs the component and calculates the updated UI automatically.

## Experiment

Built a small counter using `useState` to observe:

* component re-rendering
* state-driven UI updates
* how React recalculates UI after state changes

## Key Observations

When the button is clicked:

1. state updates
2. React re-runs the component
3. React calculates the new UI
4. only the changed DOM parts update

Console logging was used to observe component re-renders.

## Next Steps

Continue exploring:

* props
* list rendering with `map()`
* event handling
