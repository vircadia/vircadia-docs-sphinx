# Alpha 2020.3.0 Demeter Release Notes

This version of Vircadia is a new release. It is **not** compatible with the 2020.2.0-Asteria protocol. This version was released on September 29th, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Graphics: Fix procedural shaders applying to entities other than the target entity. (#309)
* Application: Fix Interface shutdown deadlock. (#311)
* Application: Add support for transparent web entities. (#605, #630)
* App: Revamp the Explore App UI. (#654)
* API: `Script.getExternalPath` added to generate accessible URLs to Vircadia CDNs. (#668)
* UI: Add "open in external browser" button to Interface browser, improve buttons, and fix favicon support. (#689)
* Application: Support relative JSON URLs in the texture property for models. (#694)
* Application: Fix not being able to click or interact with glTF models. (#699)
* App: Fix 'Create' app not refreshing when the image URL is updated on an image entity. (#701)
* Application: Fix crash when switching audio output devices when in desktop or VR. (#713)
* App: Fix 'Chat' app opening when other users toggle their own & improve URL copying and pasting support. (#738)
* Application: Fix GLB files not being able to be added to the world from the Asset Server (ATP). (#743)

### Miscellaneous

* Application: Fix warnings emitted by GCC. (#349)
* Application & Docs: Add ability to package Interface with a custom startup location and improve installer docs. (#640)
* Application: Fix build of hifiSdl2 on GCC 10. (#656)
* Application: Fix build of Vircadia on Qt 5.14. (#657)
* Application: Mass update of the codebase to better support metaverse servers. (#668)
* Application: Quiet warnings for unused blendshapeCoefficients property. (#705)
* Application: Fix 'Serverless' capitalization in the Interface title bar. (#715)
* Application: Further improve support for metaverse servers. (#718)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Server: Fix domain-server Docker packager's retrieval of a temp name. (#632)
* Mixer: Fix assignment-client custom port and hostname parameters. (#667)
* Server: Correct and improve support for switching metaverse servers. (#718)

## Metaverse Server & Dashboard (Codename Iamus)

The metaverse server [Iamus](https://github.com/vircadia/iamus) is live at [https://metaverse.vircadia.com/live](https://dashboard.vircadia.com/), with the [metaverse server interface](https://github.com/vircadia/project-iamus-dashboard) live for user registration and interaction at on Vircadia's [website](https://dashboard.vircadia.com/).

## Vircadia Launcher (Codename Pantheon)

[Vircadia's launcher](https://github.com/vircadia/pantheon-launcher) has added support for outputting log files, checking for updates on startup, and metaverse server switching with version 0.0.1q.

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Release notes for 2020.3.0 Demeter. (#83)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* The `Script.getExternalPath` API was added. (#668)
