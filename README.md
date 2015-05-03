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

### Formatting Dates with mFormatDate
```
{{mFormatDate key 'String'}}
{{mFormatDate delivery_date 'MMM D, h:mm a'}}
```

More helpers will be added soon.

## Author

- [Marshall Thompson](https://github.com/marshallswain)