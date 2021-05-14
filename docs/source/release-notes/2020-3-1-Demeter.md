# Alpha 2020.3.1 Demeter Release Notes

This version of Vircadia is an update to 2020.3.0. It is compatible with the 2020.3.0-Demeter protocol. This version was released on October 25th, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Application: Update shortcut names to include "Vircadia" in them. (#651)
* UI: Add a checkbox for more details to messages logged in entity scripts such as the script URL and function with line numbers. (#669)
* Application: Allow mouse capture via scripting which enables first person and third person shooter camera views on desktop. (#677)
* App: 'Create' app now uses local entities instead of deprecated 3D overlays. (#737)
* App: 'Create' app now has: Copy, Cut, Paste, and Duplicate buttons for VR; Undo and Redo buttons for desktop and VR. (#760)
* Graphics: Fix handling of missing glTF blendshape target meshes. (#773)
* API: Add `url` parameter to `Window.openWebBrowser`. (#778)
* App: Add script that prompts a user to enter a display name on first run if one is not set. (#805)
* Application: Add 'Valve Index' workaround to allow calibration for full body tracking. (#808)
* App: 'Explore' app now references 'Location Name' when adding a location. (#814)

### Miscellaneous

* Application: Fix build warnings. (#761)
* Application: Set GL preference to 'GLVND' from being undefined (LEGACY) then revert functionality to 'LEGACY'. (#763, #806)
* Application: Fix crash when using `About.openUrl`. (#778)
* App: Fix CDN references to hifi-production in tutorial example scripts. (#788)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* UI/UX: Add wizard step to enable/disable automatic threading for the avatar and audio mixers. (#546)
* UI/UX: Hide temp place name button, places table, and places wizard step. Add step during account connection to label the domain. (#803)
* Server: Fix crash in the entity-script server due to logging issues. (#840)

## Metaverse Server & Dashboard (Codename Iamus)

Iamus [Metaverse Server](https://github.com/vircadia/iamus) updates can be found [here](https://github.com/vircadia/Iamus/commits/master).

Iamus [Metaverse Dashboard](https://github.com/vircadia/project-iamus-dashboard) updates can be found [here](https://dashboard.vircadia.com/).

## Vircadia Launcher (Codename Pantheon)

[Vircadia's launcher](https://github.com/vircadia/pantheon-launcher) updates can be found [here](https://github.com/vircadia/pantheon-launcher/commits/master). Some changes are listed below. The launcher is now on experimental version 0.0.1s.

* Fix launching of Interface while the launcher is running as an admin.
* Fix Sandbox closing if the launcher is closed.
* Display a prompt to select your Interface or download it if it is not selected when you try to launch.
* Redesign the version selection dialog.

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Expand 'Home' page with more details. (#86)
* Add 'Gallery' page. (#85)
* Release notes for 2020.3.1 Demeter. (#91)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* `Script` API:
    * `type` property documented. (#730)
* `Window` API:
    * `url` parameter added to `openWebBrowser`. (#623)
* `About` API:
    * `openUrl` documentation updated. (#623)
* `Camera` API:
    * `captureMouse` and `sensitivity` properties added. (#677)
    * `getCaptureMouse`, `setCaptureMouse`, `getSensitivity`, and `setSensitivity` functions added. (#677)
* `Entities` API:
    * `findEntities` function documentation updated to specify caveats when used with an entity-server script. (#789)
* `Stats` API:
    * `decimatedTextureCount` property documentation updated to define maximum allowed dimensions '4096' -> '8192' pixels on desktop. (#821)
