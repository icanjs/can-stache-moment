@page CanStacheMoment can-stache-moment

# can-stache-moment
[Moment.js](http://momentjs.com/) helpers for [CanJS](http://canjs.com/index.html) [Stache](http://canjs.com/docs/can.stache.html) templates.

[![NPM](https://nodei.co/npm/can-stache-moment.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/can-stache-moment/)

## Installation
```
npm install can-stache-moment --save
```

(Recommended) Using CanJS's support for StealJS, you can import the helpers directly inside your templates:
```html
<can-import from="can-stache-moment"/>

<table class="table table-hover">
<thead>
  <tr>
    <th>Date</th>
    <th>Customer</th>
    <th>Invoice</th>
  </tr>
</thead>
<tbody>
  {{#items}}
  <tr>
    <td>
      <!-- FORMATTING A DATE -->
      &nbsp;{{mFormatDate delivery_date 'MMM D, h:mm a'}}
    <td>
      {{customer.company}}
    </td>
    <td class="fit-width">
      {{invoice_number}}
    </td>
  </tr>
  {{/items}}
</tbody>
</table>
```

## Usage

To help avoid collisions with other helpers, these helpers are all prefixed with 'm'.

**There are two ways to use the included helpers.**

### Register all Helpers Globally
Register all helpers by simply importing the library with can-import.
```
import 'can-stache-moment';
```

### Use individually in can-component
The other way is to import the module's function and use it in an individual module in your app:
```js
// First, import the helper.
import mFormatDate from 'can-stache-moment/format-date';
import mCalendar from 'can-stache-moment/format-date';
import mTimeFromNow from 'can-stache-moment/format-date';
import template from './my-component.stache!';
import './my-component.less!';

export var MCViewModel = can.Map.extend({
  // This is the date we'll be using in the template.
  date_of_purchase: new Date()
});

Component.extend({
  tag:'my-component',
  template: template,
  viewModel:MCViewModel,
  events:{},
  // Add it to your Component's helpers. You can assign it
  // a different name if desired.  The my-component.stache file would
  // use this syntax to access the helper:
  // \{{mFormatDate dateOfPurchase 'M/D/YYYY'}}
  helpers:{
    formatDate,
    mCalendar,
    mTimeFromNow
  }
});
```

## API

### Formatting Dates with mFormatDate

```
\{{mFormatDate key 'String'}}

// Example
\{{mFormatDate delivery_date 'MMM D, h:mm a'}}
```

See the [Format](http://momentjs.com/docs/#/displaying/format/) MomentJS docs.

### Time From Now

```
\{{mTimeFromNow [boolean]}}

// Examples:
\{{mTimeFromNow}} --> a minute ago

// boolean is to remove the suffix.
\{{mTimeFromNow true}} --> a minute
```
See the [Time from Now](http://momentjs.com/docs/#/displaying/fromnow/) MomentJS docs.

### Calendar Time

```
\{{mCalendar}} -->
```

See the [Calendar Time](http://momentjs.com/docs/#/displaying/calendar-time/) docs for example output.

## Changelog

- `3.0.0` Added compatibility with CanJS 3.0
- `1.0.0` importing the main file now registers all of the helpers globally.

## Contributing
Pull requests are welcome.  I will add more helpers as I need them.

## Author

- [Marshall Thompson](https://github.com/marshallswain)

[![Built with StealJS](./dist/build-with-stealjs.jpg)](http://StealJS.com)
