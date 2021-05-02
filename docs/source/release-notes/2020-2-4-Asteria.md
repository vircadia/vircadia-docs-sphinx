# Alpha 2020.2.4 Asteria Release Notes

This version of Vircadia is an update to 2020.2.3. It is compatible with the 2020.2.0-Asteria protocol. This version was released on August 6th, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* API: `Window.getUserAgent` has been added to return the Interface's user agent. (#520)
* App: The Inventory app v2.0.2 has been merged as an unpublished script, to be deployed in the More app. (#521)
* Brand: Updated strings, comments, and folders (especially on OSX) to Vircadia. (#524)
* UI: Fix bug where Snap app shows in screenshots occasionally. (#538)
* App: Fix bug where the avatar does not show when a recording is reloaded. (#539)
* Graphics: Fix bug where shapes with an alpha of 0.0 sometimes appear opaque. (#543)
* UI: Connection dialog now says "EXPLORE" instead of "GOTO". (#544)
* Graphics: Fix bug where FBX models will only show vertex colors if more than one color is given. (#545)
* Avatar: Fix bug where Interface lags extensively when moving after startup due to a physics issue. (#547)
* UI: The graphics settings dialog now allows you to set the resolution scale to 2.0, up from 1.0. (#550)
* Graphics: Fix bug where `renderWithZones` doesn't work after reloading content. (#561)
* Graphics: Fix bug where `renderWithZones` would not work when loading content from a JSON file. (#564)
* Application: Fix bug where the --url command line parameter would not work under some circumstances. (#574)
* App: The Chat app has a few updates. (#579)
    * A notification has been added for when people enter or leave the domain.
    * The main Chat window will open when you click on a chat message notification.
* Security: You can now sign-in to OAuth2 enabled domains. (Alpha Feature) (#591)
* Graphics: The default "Automatic" maximum texture memory setting has been increased from 1GB to 2GB. (#594)
* UI: The graphics settings dialog now has a button in the toolbar for clear and easy access. (#595)

### Miscellaneous

* Docs: Packaging docs are more accurate now with respect to the requirements on Windows. (#537)
* UX: The NSIS installer no longer defaults the options for the Sandbox (server-console) to start after install or start with Windows as true. (#596)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Security: Domains can now accept user logins via groups based on WordPress roles via OAuth2. (Alpha Feature) (#591)

## Metaverse Server (Codename Apollo)

The [metaverse server](https://github.com/vircadia/project-apollo) and [metaverse server interface](https://github.com/vircadia/project-apollo-dashboard) are progressing well. The metaverse server is currently being rewritten in TypeScript with Node.JS in order to improve its capabilities for the long term. As of now (8/6/2020) it is at feature parity with its original C# implementation.

## Vircadia Launcher (Codename Pantheon)

[Vircadia's launcher](https://github.com/vircadia/pantheon-launcher) is at version 0.0.1u. The launcher now runs the Interface as a separate process by default. Because of this, it now has greatly improved stability when Interface is launched with it. The drag and drop feature as well as crash reporting now also work correctly.

## Extra Applications

### Explore App (Interim Version)

The numbers at the end of each item are the PR numbers in the Decentralized GoTo [repo](https://github.com/vircadia/Decentralized_GoTo_Experimental).

* Nothing new to report!

### Community Apps

The numbers at the end of each item are the PR numbers in the Community Apps [repo](https://github.com/vircadia/community-apps).

* Add the initial release of the Inventory app. (#21)

The Slider app now has proper syncing with multiple users when viewing a presenter's screen. Work is still underway to improve its use before merging. The PR can be viewed [here](https://github.com/vircadia/vircadia/pull/541).

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Enable GitHub Actions support with auto deployment for the docs. (#67)
* Translation configuration fixed. (#68)
* Release notes for 2020.2.4 Asteria. (#71)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* The `Window.getUserAgent` API call was created and documented. (#520)
