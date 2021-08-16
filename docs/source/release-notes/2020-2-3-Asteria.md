# Alpha 2020.2.3 Asteria Release Notes

This version of Vircadia is an update to 2020.2.2. It is compatible with the 2020.2.0-Asteria protocol. This version was released on July 15th, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* VR: Experimental OpenVR support for Linux has been added. (#387)
* UI: The `Help` menu now has a `Tutorial` button which will teleport you to the serverless tutorial. (#459)
* UI: The Audio settings panel layout has been adjusted to flow better. (#468)
* Avatar: Reduce log spam if you have missing joints, the notice is now given every 30 seconds. (#474)
* App: The More app has been updated from its main repo. (#476)
* Stability: Prevent a crash for corrupted GLTF models. (#480)
* Stability: Prevent a crash on OSX due to an illegal instruction. (#481)
* VR: The option to enable/disable Vive Pro Eye eye tracking has been added. (#484)
* App: The main Chat window has had quite a few updates. (#485)
    * Shrunk the main window.
    * Spacing between items has been reduced.
    * A more readable font has been selected.
    * The timestamp now has the day, month, and full time. The milliseconds have been removed.
    * URLs can now be opened in an external browser.
    * URLs are now formatted correctly when copied.
    * Chat messages now have an optional subtle notification sound. (Pop!)
* API: `Entities.pasteEntities` now allows you to paste to any host type, defaulting to domain if not specified. (#497)
* Graphics: Particles now pause when you look away instead of dying and restarting. (#498)
* API: `Entities.importEntities` now allows you to import entities to your clipboard even if you have no create rights on the current domain. (#504)
* Graphics: The maximum texture size has been upgraded from 2048 -> 8192. (#505)
* App: The Explore app has been updated from its main repo. (#536)

### Miscellaneous

* Building: Android building has been fixed by updating the URLs for packages. (#466)
* Docs: The general build documentation was updated to better reflect build variables. (#487)
* Docs: The OSX build documentation was updated to better define instructions. (#499, #533)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Stability: A potential crash fix was applied to the entity server. (#435)
* UI: The descriptions for the Sandbox's get/set private user data fields was improved. (#486)

## Metaverse Server (Codename Apollo)

While the [metaverse server](https://github.com/vircadia/project-apollo) is still in development, much progress has been made since starting. The project has over **150 commits** at the time of publishing these release notes, with over 20 commits in the last two weeks (July 1st - July 14th, 2020). Building upon the foundation that Zontreck had placed, Misterblue has created a working prototype of the metaverse. After adequate testing and completion of the system is complete, we will begin the transition to our very own federated metaverse system!

The [metaverse server interface](https://github.com/vircadia/project-apollo-dashboard) has also gotten underway this month. It will serve as the UI foundation for admins and users alike to access and administrate their identities on the metaverse. It has had **18 commits** in the last two weeks (July 1st - July 14th, 2020).

## Vircadia Launcher (Codename Pantheon)

[Vircadia's launcher](https://github.com/vircadia/pantheon-launcher) is at version 0.0.1r, steadily approaching version 1.0.0. It currently features things such as one click downloading and updating, version management, easy settings control for Interface, event listings, and more. It has many planned features, such as world listings and further controls for sandboxes as well. It has over **130 commits** at the time of publishing these release notes.

## Extra Applications

### Explore App (Interim Version)

The numbers at the end of each item are the PR numbers in the Decentralized GoTo [repo](https://github.com/vircadia/Decentralized_GoTo_Experimental).

* Update the Explore app's sorting order to be higher in the menu. (#5)

### Community Apps

The numbers at the end of each item are the PR numbers in the Community Apps [repo](https://github.com/vircadia/community-apps).

* The nametags app by ctrlaltdavid has been added to the community apps repo. This app allows you to have dynamically generated nametags. (#20)

### Inventory App

This is a new app that will be introduced to the community apps repo upon merging into the main Vircadia codebase (#521). It will serve as the initial implementation of an inventory system into Vircadia, later it will incorporate the functions of the "More" app; that app will be deprecated at such a time.

### Slider App

This is another new app whose primary functionality is the syncing and displaying of content from control tablets to big screens. A handy feature of it is the one to many functionality where ten tablets can control five screens for example if needed using channels. This is good for presentations and such. This app will be merged into the main Vircadia codebase upon further work on its initial version.

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Update release notes layout. (#60)
* Add a detailed specification detailing zone entities. (#48) (Thanks JulianGro!)
* Translation support system with automated building added. (#61) (Thanks JulianGro & Thoys!)
* Add initial documentation regarding environment variables for the interface. (#63)
* Add 2020.2.3 Asteria release notes (this document, right here!) to the docs. (#65, #66)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* The `Entities.enterEntity` signal description has been improved to take note of behavior when using it. (#507)
