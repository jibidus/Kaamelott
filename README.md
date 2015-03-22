Kaamelott App
=====================

This App is dedicated to **Kaamelott**. It's aim is to play with all famous quotes of this TV serie.
Designed for all devices.


## Live demo
https://rawgit.com/jibidus/Kaamelott/master/www/index.html

## Using this project

You need the ionic utility:

```bash
$ sudo npm install -g cordova ionic gulp
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

## Build

```bash
$ npm install
$ gulp
```

Build iOS version (android is also available with android parameter)

```bash
$ ionic platform add ios
$ ionic build ios
```

## Run

Run as webapp

``` bash
$ ionic serve
```

Emulate for iOS

``` bash
$ ionic emulate ios
```

Run on a device through USB

``` bash
cordova run android
```

## Update Ionic version
``` bash
ionic lib update
```
