# can-stache-moment
Moment.js helpers for CanJS Stache templates.

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
      {{mFormatDate delivery_date 'MMM D, h:mm a'}}
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
  // {{formatDate dateOfPurchase 'M/D/YYYY'}}
  helpers:{
    formatDate:mFormatDate
  }
});

```

### Formatting Dates with mFormatDate
```
{{mFormatDate key 'String'}}
{{mFormatDate delivery_date 'MMM D, h:mm a'}}
```

More helpers will be added soon.

## Author

- [Marshall Thompson](https://github.com/marshallswain)