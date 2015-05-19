@page CanStacheMoment can-stache-moment

[Moment.js](http://momentjs.com/) helpers for [CanJS](http://canjs.com/index.html) [Stache](http://canjs.com/docs/can.stache.html) templates.

[![NPM](https://nodei.co/npm/can-stache-moment.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/can-stache-moment/)

## Installation
```
npm install can-stache-moment --save
```

You can use any of the builds in the dist folder to meet your project needs.

(Recommended) Using CanJS's new support for StealJS, you can now import directly inside your templates.  For example:
```html
<can-import from="can-stache-moment/registerHelper/mFormatDate"/>

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

In hopes to help avoid collisions with other helper names that you may already have registered in existing applications, the helpers are all prefixed with 'm'.

**There are two ways to use the included helpers.**

### Register a Helper Globally
You can globally register a helper by importing the module from the `registerHelper` folder.  This is similar to the in-template example above.
```
import 'can-stache-moment/registerHelper/mFormatDate';
```

You can register all available helpers globally by importing the file **`can-stache-moment/registerHelper/all`**.

### Use in an individual can.Component
The other way is to import the module's function and use it in an individual module in your app:
```js
// First, import the helper.
import mFormatDate from 'can-stache-moment/mFormatDate';
import template from './my-component.stache!';
import './my-component.less!';

export var MCViewModel = can.Map.extend({
  // This is the date we'll be using in the template.
  date_of_purchase: new Date()
});

can.Component.extend({
  tag:'my-component',
  template: template,
  viewModel:MCViewModel,
  events:{},
  // Add it to your can.Component's helpers. You can assign it 
  // a different name if desired.  The my-component.stache file would
  // use this syntax to access the helper: 
  // \{{formatDate dateOfPurchase 'M/D/YYYY'}}
  helpers:{
    formatDate:mFormatDate
  }
});
```

Alternatively, you can import all of the helpers at once, and use them individually in your component (only showing the changed parts from above):
```
import helpers from 'can-stache-moment';

can.Component.extend({
  helpers:{
    formatDate: helpers.mFormatDate,
    timeFromNow: helpers.mTimeFromNow
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

## Contributing
Pull requests are welcome.  I will add more helpers as I need them.

## Author

- [Marshall Thompson](https://github.com/marshallswain)

[![Built with StealJS](./dist/build-with-stealjs.jpg)](http://StealJS.com)

