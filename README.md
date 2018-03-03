# get-extremums
A module to get extremums for a value in an array of objects.

## Usage
```javascript
var getExtremums = require('get-extremums');
getExtremums(data, value);
```
where `data` is an array of objects, and `value` is a property.

## Example

```javascript
var array = [
    { temperature: 23.6, humidity: 17 },
    { temperature: 15, humidity: 18 },
    { temperature: 20, humidity: 19 },
    { temperature: 18, humidity: 15 },
];
getExtremums(array, 'temperature');
```

It will return:
```javascript
{
    lowest: { temperature: 15, humidity: 18 },
    highest: { temperature: 23.6, humidity: 17 }
}
```