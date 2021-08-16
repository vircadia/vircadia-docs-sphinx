# Alpha 2020.3.3 Demeter Release Notes

This version of Vircadia is an update to 2020.3.2. It is compatible with the 2020.3.0-Demeter protocol. This version was released on January 2nd, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* UI/UX: Remove "Console" options from the Interface-only installer on Windows. (#824)
* Application: The collision hull of entities now updates when the model is replaced. (#830)
* Application: Entity update performance has been improved. (#830, #944)
* UI/UX: The VR HUD overlay has been fixed and improved. (#838)
    * Overlay surface is rendered a bit further away (1.5m instead of 1.0m). This makes it easier on the eyes.
    * The horizontal size of the overlay surface has been reduced from 270 deg to 180 deg. This means that it doesn't wrap around "behind" you.
    * The physical (real world) distance required to move before the HUD overlay is recentered on your avatar has been reduced from 0.99m to 0.33m. This makes the HUD always be reasonably centered on your view rather than possibly being very offset at times.
    * Reorienting the overlay surface to better suit your current HMD orientation (i.e., be reasonably well centered on your current view) has been enabled. This means that the HUD overlay can no longer be behind you.
    * Fix un-pinned HUD content (e.g., Web browser window) displaying only every second recentering.
    * Fix laser intersection with HUD overlay dialogs / windows: laser intersects exactly per dialog position and size. This, for example, means that you can now drag dialogs using their top margin.
    * Fix the position of the dialog / window resize outline, displayed when resizing a dialog / window - in both desktop and HMD mode.
* Application: Pressing the Alt key on Linux now works correctly. (#860)
* App: 'Create' app December 2020 improvements package. (#894)
    * New "Tools" menu to the Create Application.
    * The previous "Selection" and "Actions" menu has been renamed "Select" and "Edit".
    * We have now all the actions regrouped in the 3 menus: "Select", "Edit" and "Tools".
        * The menu "Teleport To Selected Entities" has been moved from the "Select" menu to the new "Tools" menu.
        * The "Hotkey" "G" is now used to toggle the grid (previously it was to align it to the selection). It made sense to have G (for Grid) to manage the visibility of this one.
        * New "Hotkey" has been added to control the other actions related to the Grid:
            * "Activate/Deactivate Snap to Grid" can be triggered by pressing "H".
            * "Align Grid to Selected Entities" can be triggered by pressing "J".
            * "Align Grid to Avatar" can be triggered by pressing "K".
        * The actions: "Align Grid to Selected Entities" and "Align Grid to Avatar" will turn on the grid if it was not visible. (Doing this implies that you want to have the grid be visible). But you will still need to "Toggle Grid" (G) to turn the grid off. Note that "Align Grid to Selected Entities" will work only if there is at least one entity selected.
    * Main "Edit" menu:
        * The two "Import Entities" actions have been brought back to the main "Edit" menu. (Since there was no unanimity about their removal.)
        * A separator has been added to properly group the 'Create' app's menu items.
    * In desktop mode only, the default window width is now 750px instead of 490px.
* App: 'Create' app material icons update. (#907)
    * Preference: "Show Zones in Create Mode" has been removed. The method behind it is still in the API, but does nothing. It has been abandoned since it was only drawing a box that wasn't useful to assist in figuring out the shape of the zone.
    * Preference: "Show Lights and Particle Systems in Create Mode" has been renamed to "Show Icons in Create Mode" since this setting was also managing all the icons (including Zones and now Parented Materials). The objective of the setting is mainly to simplify the display in edit mode when a scene is very dense.
    * `image3D` overlays used for the icons have been migrated to local entities.
    * All the entity icons (in-world non physical entities) have been updated to be more uniform. They now all have the same dark gray tone, with a white border to keep them visible under different lighting.

### Miscellaneous

* Misc: Module updates for screenshare app. (#708, #905)
* Application: Upgrade tbb (oneAPI Threading Building Blocks) to fix a startup crash on Fedora 32 and later. (#863)
* Build: GHA now builds PR builds with crash reporting enabled on Windows. (#878)
* Application: The `--forceCrashReporting` command-line parameter has been added to enable crash reporting even if the settings have it off. (#879)
* Build: Fix hifi_qt.py reporting Ubuntu 20.04 as outdated. (#891)
* Misc: Update various references for GitHub links in the codebase. (#906)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Server: The Domain server now sends its IP address and port to the Metaverse server with every heartbeat. (#877)

## Metaverse Server & Dashboard (Codename Iamus)

### Iamus [Metaverse Server](https://github.com/vircadia/iamus)

#### Version 2.3.7

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/c2350d627178836c5edcd7f2516bdcaf8b28ec59">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ad8adc9dd94fa797e978131ccf0e840eda7e77df">view &bull;</a> Update documentation. Clarify that fetching of accounts can be done either by accountId or username. Add comments to AccountScopeFilter to describe its use.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/c692f2b4081a33673dc5e6006407637a20f21e7d">view &bull;</a> Replace build bash scripts with node.js scripts. (#68)</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/37a4dbee5137ef2da8cb1b876ac86c22baa2c4d5">view &bull;</a> Clean up some code in Util.buildLocationInfo(). No functional changes.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/12f31a4f23e14d264b7e0feddef3cc5214f3dd8f">view &bull;</a> Limit the size of input JSON to Config.server.max-body-size.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/249b26d0989caa820a2d9d79db30f05083d56c72">view &bull;</a> Fix pagination so it returns the proper number of items on a page. Makes the "?per_page=N&page_num=M" work properly.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/47bab57be416826773550493430844b113fe2188">view &bull;</a> Add Perm.PUBLIC to check if accessing an AccountEntity that is "public" i.e., 'availability' is either unspecified or Perm.ALL.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d7c169fd05782d45fa5b76915b410e89b95a8d09">view &bull;</a> Add AccountEntity.profileDetail that just stores a JSON object. Modify AccountEntity.locker to accept a JSON object. Add validators for 'object' that allows storing JSON object values.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/696007d84fa5752acb165c28be5c1bd586a50e3f">view &bull;</a> Modify returned Account fields to include 'profileDetail'. Update documentation.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/43813c4ff380e3e7f6704b479593d149e0e745e9">view &bull;</a> Add /api/v1/profile and /api/v1/profile/:accountId Add documentation for same.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/dfda90f4731c4f0aa16d8fc8a5d6cd840403965d">view &bull;</a> Bump to 2.3.7</li> 
</ul>

#### Version 2.3.6

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/d39b5731e0481cc0006dae2e6fb4a8530137b0bb">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/c67706945d71c51d806023c02dce26d4147ea1a6">view &bull;</a> Minor bug fixes in BackupDb.sh</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/6b05304c326f8303a18afbde9421ccf030949297">view &bull;</a> Update links and names (#66)</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/cc8e9d64f077c2ee62405cfe2437ad3483845c24">view &bull;</a> Update NPM package version.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8cf1eee04aab3a069442c346241cf96aa8572f1a">view &bull;</a> Fix problem where user wasn't returned their token by /api/v1/tokens. The search field must be specified to AccountScopeFilter. A few other places were checked and updated.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/1d0be3bf637315c3196390124600cada3fc218f1">view &bull;</a> Bump version to 2.3.6</li> 
</ul>

#### Version 2.3.5

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/e95291d4988f48d780795e134a364d9120f22fc3">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/b360944a70a994ee701a0f2b23303a1d71dd76fb">view &bull;</a> Change Place filter 'maturity' to take a comma separated string of maturity classes to match.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/00355c7481b1958379d574a1ff7acc65a18d2eed">view &bull;</a> When creating a Place, default maturity to the parent domain's maturity. Default DomainEntity.maturity to Maturity.UNRATED.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/a80864dfea02c284c195000184392f9c1f7bdcce">view &bull;</a> Massive refactoring to remove circular import dependencies that were causing null value initializations due to how JavaScript loads. Move Entity field definitions into separate files. Moved Entity field getting and setting into the Entity controlling class. Repackaged (into multiple files) Permission and Get/Set/Validate routines.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/bf4df1bad8290c7ef4b20e5ce940b1a925f3b04e">view &bull;</a> Bump version to 2.3.5</li> 
</ul>

#### Version 2.3.4

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/387e26b76f6c98b5fe5e55f34d319c588f77b5a8">view &bull;</a> Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d9759a3986c7c906b687047df268a9476193648d">view &bull;</a> Add documentation on the design of the Entity field get/set system.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/356b27369300f543e57dd7e7a73bc8f1d686ea15">view &bull;</a> Fix DELETE Place so the owner of the Place's domain can delete the Place.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f9651d25d43a76d8e4aa5ee932f3e0a0f279514a">view &bull;</a> Make Monitoring.event so it doesn't fail if monitoring was not inited.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/d45833f889f838bdefe5cf8bfb31d316aad486e5">view &bull;</a> Record network_address and network_port if specified when creating doamin.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/acaa36a494ad439122f48376ba31f08068219566">view &bull;</a> Added "maturity" and "tags" to PlaceEntity Centralized "maturity" specifications into src/Entities/sets/Maturity.ts Moved AccountAvailability and AccountRoles to src/Entities/sets and made a set pattern. Documented "/api/v1/places?maturity=LEVEL" and "/api/v1/places?tags=TAGLIST" Added comments to src/Entities/EntityFilters/CriteriaFilter.ts explaining how filters are to be used Added "maturity-catagories" to Places responses Fixed /api/v1/users/places to return only the places that belong to the requesting user Deleted bin/www -- what was that from??</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/56c4649b60f58915c3b05907f3f1149cf3fe0e71">view &bull;</a> Bump version to 2.3.4</li> 
</ul>

### Iamus [Metaverse Dashboard](https://github.com/vircadia/project-iamus-dashboard)

Updates are reflected [here](https://dashboard.vircadia.com/). The Dashboard has been upgraded from version 1.1.3 to version 1.2.2. (13 commits altering functionality, 18 commits total.)

* Profiles have been added for all users with the core component being redesigned.
* Routing bugs when using the ?page parameter have been corrected.
* A 404 "not found" error page has been added.
* The main menu now changes its highlighted item correctly based on what page you are on.

## Vircadia Launcher (Codename Pantheon)

[Vircadia's launcher](https://github.com/vircadia/pantheon-launcher) updates can be found [here](https://github.com/vircadia/pantheon-launcher/commits/master). The launcher is on experimental version 0.0.1s.

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Add docs video module and update some pages to .rst format. (#72, #105)
* Add Weblate configuration instructions. (#98)
* Update GitHub reference links. (#102)
* Release notes for 2020.3.3 Demeter. (#106)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* Fix typo `Quat.fromPitchYawRollDgrees` -> `Quat.fromPitchYawRollDegrees`. (#882)
