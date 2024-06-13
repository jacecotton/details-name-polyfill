A simple polyfill for `details[name]`, which allows you to create exclusive details groups (only open one at a time).

## Known limitations
Only known limitation is it doesn't work in the shadow DOM. It only queries the outer `document`, and even if it drilled down, `name` wouldn't leak across shadow boundaries.
