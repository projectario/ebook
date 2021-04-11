# VideoClub Project

A web MVC project for the PeopleCERT Coding Bootcamp (group project)

### The technologies we used:

- [Sails v1](https://sailsjs.com)
- [sails-mysql](https://www.npmjs.com/package/sails-mysql) (npm)
- [Sass](https://www.npmjs.com/package/sass)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) (npm)
- [Paypal-Checkout](https://developer.paypal.com/docs/business/develop/design-guidelines/#button-placement)

### How to Install

1. Clone this repository
2. Move to project directoty `$ cd ebook`
3. Install dependences `$ npm install`
4. On the console type `$ sails lift` to start the server
5. On your browser visit [localhost:1337](localhost:1337)

### Scope of functionalities

The website has three different user roles. Guest, member (logged in) and admin.

- The guest can visit the homepage, FAQ page, search for ebooks by title or filter them by their attributes and read ebook details and description. For further access he has to sign up and log in.

- The logged in user is authenticated and encrypted with bcrypt. That way, even one with access to the database, can't see the password.
  Once the user logs in, he can buy and read the ebook he want. When the user click on an ebook, he gets redirected to the ebook-detail page that contains the ebook info like, description, price, rating and whether or not is best seller or editor's choice. To proceed, the user must click the "Add to my list" button and will be redirected to a checkout page, powered by Paypal. After the payment is confirmed the user get access to the "Read Now" button where he can click to go to the ebook reader.

- The admin has full CRUD functionality at ebooks. He can also delete a user's account.

### Illustrations

[![Video-Club-homepage.png](https://i.postimg.cc/4NLJ6JpM/Video-Club-homepage.png)](https://postimg.cc/ykR4BCQX)
[![Video-Club-movie-detail.png](https://i.postimg.cc/fRHfQq1p/Video-Club-movie-detail.png)](https://postimg.cc/bZttQgy9)

#### Notes

- The database is already filled and contains all needed data.
- To make a mock payment you should have a paypal sandbox user account.

## Contributors

- [Petros Foutsis](https://github.com/PetrosFou)
- [Grigoris Palaiohoritis](https://github.com/GrigorisPs)
- [Anastasia Kounoupi](https://github.com/anastasiakounoupi)
- [Andreas Koutroulis](https://github.com/AndreasCtrl)
- [Nektarios Banousi](https://github.com/BanNektarios)
