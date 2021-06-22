# Prezioso CMS
<img alt="PHP version 7.4" src="https://img.shields.io/badge/PHP-7.4-blueviolet"> <img src="https://img.shields.io/badge/JS-ES6-yellow" alt="Javascript ECMA Script 6"> <img src="https://img.shields.io/badge/-Bootstrap_5.0.x-blueviolet" alt="Bootstrap 5.0.x">

Prezioso CMS is a custom made contend management system and is made in the scope of a school project at [SAE](https://www.sae.edu/che/de/).

The CMS is based on PHP and has a similar directory structure like [Laravel](https://laravel.com/docs/8.x/structure). Check it out for mor Information about the directory structure.

The code architecture is based on **MVC** (**M**odel **V**iew **C**ontroller).

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install dependencies defined in package-lock.json

```bash
npm install
```

## Usage

### PHP Server
The development environment ist [Laravel Homestead](https://laravel.com/docs/8.x/homestead#introduction). But you can set up and use your own webserver.

#### Root Folder
Set the directory [public/](/public) as root folder. 
There is also the `index.php` saved and is served as the main entry point for the application.

To access the CMS-Space open the URL e.g. [localhost/admin](/admin)

There is already a user to log in:
```
email: admin.example.com
password: 06p8Vdo#1t#I
```

### Database
SQLite3

Go into directory [database/](/directory)
copy and rename `example.database.sqlite` to `database.sqlite` in the same directory.

There is also a configuration for MYSQL for future implementation. 

## License
[ISC](https://choosealicense.com/licenses/isc/)
