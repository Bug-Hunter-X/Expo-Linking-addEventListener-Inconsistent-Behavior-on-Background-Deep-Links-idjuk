# Expo Linking.addEventListener Inconsistent Behavior

This repository demonstrates a bug in Expo's `Linking` API where the `addEventListener` method for handling deep links may not always fire when the app is in the background.  The issue is particularly noticeable on iOS.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on a physical device (iOS testing recommended).
3. Send a deep link to the app while it's already running in the background.
4. Observe whether the event listener successfully processes the deep link.

## Expected Behavior

The `Linking.addEventListener` should reliably fire and process the deep link regardless of whether the app is in the foreground or background.

## Actual Behavior

In some instances, the event listener fails to fire when the app is in the background, resulting in the deep link being ignored.

## Solution (See bugSolution.js)

The solution involves using a more robust approach to handling deep links.  This improved method ensures that deep links are processed regardless of the app's state.