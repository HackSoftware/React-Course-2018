# Forms

Our task is to implement the following form:

![form](FORM.png "The form!")

## Endpoints to use:

1) https://react-forms-backend.herokuapp.com/booking/email-exist/
  post api to check wether an email exists, expects the following data:
  ```
  {
    email: some-email-here
  }
  ```
2) https://react-forms-backend.herokuapp.com/booking/booking-request/
 post api to create a booking request, expects the following data:
 ```
 {
    name: some-name,
    phone: some-phone, // non required
    start: start-date-in-YYYY-MM-DD-format,
    end: end-date-in-YYYY-MM-DD-format,
    roomType: room-type-id,
    meal: meal-id, // non required
    notes: some-notes-text, // non required
    numberOfPeople: some-int-number, // non required
 }
 ```
3) https://react-forms-backend.herokuapp.com/booking/meals/ get api to fetch all the meals
4) https://react-forms-backend.herokuapp.com/booking/room-types/ get api to fetch all the room types
