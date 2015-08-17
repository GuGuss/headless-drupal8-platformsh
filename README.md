# Headless Drupal 8 & AngularJS on Platform.sh

## Overview

This project is a working example of a Headless Drupal 8 & AngularJS, working on Platform.sh. It reuses some code from a session in [DrupalCon Los Angeles 2015](https://www.youtube.com/watch?v=0ARnhwcI74g) from [Travis Tidwell](https://github.com/travist/).

The Drupal site is used as a backend to store a collection of videos and serving a RESTful API at ``/movie``, whereas the Angular site is used as a frontend to consume the API and display the videos.

The repository is clearly separated in two distinct applications which have each their own Platform.sh configuration file:
* [Angular configuration](https://github.com/GuGuss/headless-drupal8-angular-platformsh/blob/master/angular/.platform.app.yaml)
* [Drupal configuration](https://github.com/GuGuss/headless-drupal8-angular-platformsh/blob/master/drupal/.platform.app.yaml)

It's a great starting point to learn about **Drupal 8 best practices** (*Drush make file, RESTful services...*) and **AngularJS best practices** (*Grunt, Yeoman...*).

## Demo

[Click here](http://master-wibjys76j7zfu.us.platform.sh/) to see the Angular frontend.

[Click here](http://drupal---master-wibjys76j7zfu.us.platform.sh/movie) to access the RESTful API provided by Drupal 8.

## Tools

### Platform.sh

[Platform.sh](https://platform.sh/) is a groundbreaking, award-winning hosting and development tool for web applications. It extends a branch-merge workflow to infrastructure so that every branch can be tested as if it were in production, and it scales up to the largest sites.Support multiple application.

It natively supports deploying multiple applications which makes it the perfect tool for this example.

### AngularJS

[AngularJS](https://www.angularjs.org/) is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications.

In this example, we use [Yeoman](http://yeoman.io/) which helps you to kickstart new projects, prescribing best practices and tools to help you stay productive.

### Drupal 8

[Drupal](https://drupal.org/) is an open source content management platform powering millions of websites and applications. It’s built, used, and supported by an active and diverse community of people around the world.
