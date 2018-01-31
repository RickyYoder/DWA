# DWA

This is a simple app that converts a JSON array into form inputs.

To use, first download to your hard disk. Then navigate to the root directory and run `node index.js`. 
From there, just navigate to http://localhost:8080 and you can view the running web app.

## Writing JSON

All JSON must be valid, using double quotes for properties and string values.
To create inputs, simply write your JSON in the following format:

```javascript
[{"type":"text"}, {"type":"password"}]
```

"type" refers to the type of input to create.