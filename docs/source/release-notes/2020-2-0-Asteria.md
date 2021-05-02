# Alpha 2020.2.0 Asteria Release Notes

This version of Vircadia is the follow-up version to K2. It is not compatible with the v0.86.0 protocol. This version was released on June 8th, 2020.

The software version is denoted by the new versioning scheme: 
    
    YYYY.MajorVersion.MinorVersion-Name
    
The major version will denote a protocol bump and therefore incompatibility with other versions. A minor version is a patch or update that will be compatible with its major version. The name of the release (Asteria, Demeter, etc.) changes when the major version changes.

For example, **2020.2.5-Asteria** will be compatible with **2020.2.0-Asteria**. Whereas **2020.3.0-Demeter** will not be compatible with **2020.2.0-Asteria** or **2020.2.5-Asteria**.


## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Create App
    * Now has tabs for entity properties. (#193)
    * **"Alpha"** property added to the **"Shape"** entity's editor. (#215)
    * **"renderWithZones"** property added to all entities. (#274, #369)
* User Activity Logging separated from crash reporting functionality. (#257)
* QML branding updates. (#277)
* Gridchat is now muted by default. (#287)
* Grabbable property on entities is now disabled by default. (#344)
* Flying in VR is now enabled by default in new Interface installations. (#394)

### Graphics

* Zone Occlusion feature added. You can now have entities within a zone become culled if you are not within specified zones. (#78)
* Models now support flipped normals on double sided geometry. (#301)
* Models now support blendshapes. (#62)

### Technicals

* Package scripts: rename to Vircadia, add deletion and migration functionality. (#273)
* VS2019 (Version 16.5.1) build fix. (#279)
* Make custom Qt builds work on unsupported Ubuntu distributions. (#292)
* Add community-apps repo to default QML whitelist. (#296)
* GitHub Actions for PR builds with artifact uploading. (#300)
* Snapshot name changed from "hifi" to "vircadia". (#334)
* Vircadia now uses version 1.11.11 of the OpenVR SDK. (#335)
* Crash reporting information sent to Sentry improved. (#336)
* Packet version size fixed. (#338)
* Fix whitespace and line endings in tabs.css. (#339)
* Attempt to fix issue #337: by ensuring the object is marked as dead. (#340)
* Log file names updated from "hifi" to "vircadia". (#343)
* Remove all uses of QString::null. (#346)
* Fix issue #347: Linux PR builds failing due to "distro" not found. (#364)
* Fix issue #380: Create app now uses proper dimensions when creating entities. (#406)
* Revert commit 359248829c using -m 1 to temporarily fix issue 383. (#414)
* Fix many GLTF (\*.glb) files being unable to be loaded due to bad URL parsing. (#415)
* Include <stdexcept> for building on Windows 10 with Visual Studio 2019. (#418)
* Fix GHA PR building. (#421)
* Rebrand HiFi & Athena -> Vircadia. (#427)
* Use newer Opus codec to fix illegal instruction in libopusCodec.so. (#429)
* Remove path from boilerplate in coding standard. (#431)

## High Fidelity -> Vircadia Master Merge (#285)

(v0.86.0 -> v0.87.0)

High Fidelity's v0.87.0 was merged with Vircadia's v0.86.0 codebase. PR numbers here relate to the original High Fidelity repo and can only be retrieved if you have a backup of that repo before it was set to private.

### General

* DEV-2330: Improved attenuation zones. Redefine an audio zone attenuation coefficient = 1.0 to mean "silent at any distance" instead of extreme falloff with distance. This ensures that chatterboxes are not audible outside of their boundary. Include code-health improvements to the HRTF. New functionality (parametric occlusion/lowpass effect) is not currently used, as it will require a new audio zone type to enable. (#16480)
* DEV-2769: Remove the "acceleration" entity property from Create app
It's a deprecated property that doesn't affect the entity. (#16497)
* Added animedit avatar-animation.json graph editor tool. Animedit is a developer tool used to inspect and edit avatar animation graphs. Note: this is an independent application, separate from the main application. (#16532)
* Use Alt to clone entities on Mac. (#16443)
* Add display name field to the log in screen. (#15334)
* Add automaticLookAt.js to developer scripts
`automaticLookAt.js` is a script that automatically controls the avatar's head and eye to simulate human interaction during group interactions.
This PR adds that script to the developer script folder. (#16545)


* Screenshare in Interface! (#16429)
    * Fix a few Screenshare bugs. (#16534)
        - Fix screenshare broadcast on MacOS DEV builds _only_ - this is related to [DEV-2812], but doesn't fix the issue.
        - Fix z-fighting on smartboard in screenshare mode [DEV-2484].
    * Ignore anonymous screenshare zone entry. (#16544)
    * DEV-2700: Add screenshare property to zones and evaluate in avatar mixer. (#16540)
    * DEV-2858: White screen displayed when using screenshare. (#16555)
    * Attempt to fix DEV-2859 with tighter constraints on screenshare resolution and framerate. (#16554)
    * DEV-2832, DEV-2816, DEV-2843: Auto-minimize Screen Share; enable switching between windows; prevent video dropout. (#16549)

* Important bug fixes.
    * DEV-2663: Adding safeguard in case device list is empty. (#16481)
    * DEV-2742: Fix Graphics.exportModelToOBJ() JavaScript crash. (#16490)
    * DEV-2800: Fix crash in Stats.forceUpdateStats() at start-up. (#16533)
    * DEV-2825: Fix camera pitch by mouse wheel. (#16531)
    * DEV-2760: Fix Realtime Unfocused to be 60 Hz. When choosing "Realtime" rendering in custom graphics or if you're using the High Quality graphics setting, the render/game rate should still target 60hz even when the window is focused. This is so that people doing streaming can still have high frame rate rendering when using apps like OBS. (#16496)
    * DEV-2649: Fix entities list "filter to frustum" eye button. (#16461)

### GitHub Actions

* GitHub actions initial work. (#16401)
* Switching Windows builds over to a self-hosted runner. (#16582)
* GitHub Actions workflow clean-up.
    - Add step to clear out working directory before starting build
    - Change "find" path for symbol packaging in hopes of fixing that error. (#16584)
* Add apt-update step to refresh the apt repository index for Linux builds. (#16575)
* Enable label based PR builds. (#16569)
* DEV-2572: Linux GHA PR builds. Split out from pull/16520; includes some new files for Docker image creation but doesn't affect master-build workflow. (#16565)
* Fix GHA S3 upload path. (#16568)
* Github Actions master builds. (#16552)
* Remove upload step and unlabel job from builds. (#16524)


### Documentation

* DOC-209: AudioStats JSDoc. (#16495)
    * Namespaces:
        - AudioStats
    * Classes:
        - AudioStreamStats
* DOC-208: Revisions to JSDoc added by developers since July 2019.
    * pull/15974 - Sitting API.
    * pull/16025 - Debug API for Picks/Pointers.
    * pull/16144 - Avatar "look at" target.
    * pull/16245 - Directional blending for point reaction.
    * pull/16399 - Updated blend shape support with ARKit compatibility.
* DOC-233: MaterialCache JSDoc (#16541)
    * Namespaces:
        - MaterialCache
    * Also:
        - Added missing `numGlobalQueriesPending` and `numGlobalQueriesLoading` properties' documentation to `AnimationCache`, `ModelCache`, `SoundCache`, and `TextureCache`.
        - `Entities.MaterialResource` type now appears in and is used in the JSDoc output.
        - `Entities.Material` type now appears in and is used in the JSDoc output.
        - `RGBS` global type now appears in and is used in the JSDoc output.
        - Revised recent `Entities.Material` JSDoc changes.
* DOC-227: Stats JSDoc (#16539)
    * Namespaces:
        - Stats
    * Globals:
        - RefreshRateProfile
        - RefreshRateRegime
        - UXMode
* DOC-237: DialogsManager JSDoc (#16560)
    * Namespaces:
        - DialogsManager
* DOC-238: AddressManager JSDoc (#16561)
    * Namespaces:
        - AddressManager
* DOC-235: DriveKeys JSDoc (#16556)
    * Namespaces:
        - DriveKeys
    * Also:
        - Type MyAvatar.DriveKeys renamed to (global) type DriveKey.
        - MyAvatar.disableDriveKey() example updated to use DriveKeys API.
* DOC-198: OffscreenFlags JSDoc (#16563)
    * Namespaces:
        - OffscreenFlags
* DOC-240: console JSDoc (#16567)
    * Namespaces:
        - console
    * Also:
        - Updated Script API accordingly.
        - Fixed global print function's JSDoc.
* DOC-239: Rates JSDoc (#16564)
    - Rates
* DOC-244: OverlayWindow and OverlayWebWindow JSDoc (#16573)
    * Classes:
        - OverlayWindow
        - OverlayWebWindow
    * Also:
        - Fixed up some related InteractiveWindow JSDoc.
* DOC-243: EntityScriptServerLog JSDoc (#16571)
* DOC-241: ContextOverlay JSDoc (#16570)
    * Namespaces:
        - ContextOverlay
    * Also:
        - Updated WalletScripingInteface JSDoc with links to a relevant ContextOverlay method.
* DOC-242: WebSocket and WebSocketServer JSDoc (#16574)
    * Namespaces:
        - WebSocket
        - WebsocketServer
* DOC-157: LODManager and Performance JSDoc
    * Namespaces:
        - LODManager
        - Performance
    * Also:
        - Update the Stats API JSDoc to match.
* DOC-55: XMLHttpRequest JSDoc (#16577)
    * Namespaces:
        - XMLHttpRequest
    * Also:
        - A few minor fixes to the WebSocket API JSDoc.
* Combined API docs update. Condenses the following PRs into a single PR and resolves the merge conflicts. (#16583)
    - pull/16578
    - pull/16579
    - pull/16580
    - pull/16581

### Technical / Other Changes

* Fix handleUrl helper regex. (#16511)
* Reduce fidgety motions in seated fidgets; remove jitter and bounce from several seated idles and fidgets, also reduce look-around cone. (#16464)
* Fix for assert in AnimBlendDirectional on startup; specifically, std::vector subscript out of range. (#16458)
* DEV-2650: Remove "user" icon from Entities List. (#16451)
* DEV-2648: Fix Cmd-click multi-select in entity list on Mac. (#16440)
* Remove Avatar app links to AvatarIsland and BodyMart. (#16504)
* Procedural Material crashes in shadow pass on deformed shape renderItems. Now that avatars can potentially have their own custom pipeline, shadow pass needs to support it. (#16470)
* Made web entities not grabbable by default. (#16468)
* Oculus Quest: Fix for the hand controllers in the latest version. The change will let you use both of your hands on the Quest. Without this 6DOF fix it will assume that the user is holding a Oculus GearVR remote controller. See more info about this issue at: 
    * https://developer.oculus.com/documentation/quest/latest/concepts/mobile-native-manifest/?fbclid=IwAR3AgasGPJFVGsz7lyzfJNfuTB8R1FOg88Quq8YZz67eQlwEFvgEMDGjSdo 
    * https://developers.google.com/vr/develop/android/3dof-to-6dof
* Update WindowScriptingInterface.h; replace "model" with "modal". (#16742)
* Different settle transition depending on momentum. The settle animation that transitions from walk/run to idle is too big for very small adjustments, such as nudging the WASD keys just to slightly reposition. This creates a bool that is true when speed rises above 2.2 m/s. If true, play the larger settle. (#16467)
* Fix HMD strafe locomotion animation. Handle HMD in input vars in Rig.cpp, remove buggy json transitions between normal/HMD strafe states, and use isNotMoving to leave HMD strafe states. (#16486)
* DEV-2709: Reset QAudioDevInfo on switch. (#16487)
* DEV-2711: Fix crash when highlighting custom pipeline shapes. (#16477)
* Bugfix for t-pose avatar when moving. The android specific optimized IK animation graph was out of date, it was referencing animations that have been deleted, hence the t-pose. This PR updates and renames the android/optimized IK animation graph to the latest. (#16488)
* Speculative fix for infinite loop in SafeLanding. This PR (#16479) contains two fixes:
    * Tightening up the locks in the SafeLanding class to prevent race conditions. By inspection there are cases where variables are read and modified outside of locks. 
    * A check to help prevent an infinite loop in the \_sequenceNumber std::distance calculation. This is the main issue, in some cases backtrace is reporting the main thread as deadlocked. The stacktrace points to an issue with the std::distance() calculation. If the EntityQueryInitialResultsComplete is delayed significantly, there could be a rare case where the \_sequenceNumber map grows large enough for the wraparound less then operator will no longer function correctly. This will cause the std::distance calculation to never complete. I've added a guard to prevent this from happening and some logs to help diagnose this issue in the future.
* Revert safe landing "fix". This was introduced via this PR #16479. (#16494)
* DEV-1811 redux: Apply entity deletion rules. This is a second attempt to apply the entity deletion rules. The previous attempt was PR-16307. (#16361)
    * deleting an avatar-entity parent doesn't delete any domain-entity children.
    * deleting a domain-entity parent does delete all of its children.
* Fix Realtime Unfocused to be 60 Hz. (#16496)
* Fix for inadvertent comment. (#16500)
* DEV-2718: Models brought in at incorrect dimensions. (#16502)
* Added desktopSharing variable. (#16504)
* Add tools for debugging entity workload proxies. This PR introduces some debug tools for examining entity workload proxies. The hope is this will allow us to get more clues about the "sometimes fall through ground" problem (DEV-2189). (#16483)
* Clear more disk caches. When the user selects "Clear Disk Cache" from the Developer menu, clear more of the caches. (#15278)
* DEV-2789: Implement retry timer when retrieving screen share info. (#16508)
* DEV-430 Instancing: Introduce hfm::Shape to enable Instancing support. This PR will introduce the concept of hfm::Shape to the runtime model format, and refactor runtime code to use the new format. This will assist support for efficient rendering of multiple copies of the same geometry within a single model. (#16197)
* Improve seated rotation. Add support for acceleration in seated rotation, and trigger lean animation with inputs as well as transition and settle back to seated idle. Remove deadspot beyond 90 degrees where Q/E don't work. (#16498)
* DEV-2791: Update hard-coded screen values. (#16510)
* Fix for whiteboard poly lines getting their parentID incorrectly reverted. (#16512)
* Fix-multiple-color-sphere-pops. (#16514)
* Pinch to zoom camera, two finger swipe to look around, bug fixes. (#16505)
* Attempt to fix Mac release builds. (#16518)
* DEV-2797/DEV-2798: Add some comments to that click to zoom script, and connects the update signal only when necessary. (#16519)
* Force rebuild for Mac build issue. (#16521)
* Remove worklist.net references. (#16516)
* DEV-2794: Update BUILD.MD. (#16522)
* Move "away" animation from S3 bucket to local resource 
Put away animation into compiled animation resource and update script to use local resource path. (#16523)
* On Linux, remove quazip5 dynamic libs. (#16527)
* Call updateGeometry before Model::createRenderItemSet. (#16526)
* DEV-2871: Signal connection check before emit of devices changed. Fixing logic to emit after scripting interface has initialized the audio devices. (#16525)
* Fix Linux build. (#16530)
* Input plugin for streaming blendshapes from an iPhone. An OSC input plugin that works in conjunction with the FaceCap application for streaming facial blendshapes from an iPhone. (#16517)
* Update prebuilt dependencies. (#16536)
* DEV-491: Create a README.md file to document the Qt Launcher. (#16537)
* DEV-2840: Fix z-fighting issues in Smartboard and enable quicker positional iteration in the future. (#16547)
* DEV-829: Waiting on local injector prep. Adding a future to the thread pool(ed) call to preparelocalinjectors. Since the function call runs on a separate thread it does not get notified that he device has swapped. Before switching we check if the prep local injectors is running and wait until its completed. Switching devices has lower priority than preparing local injectors. (otherwise we can cause starve problems.) (#16542)
* DEV-2729: Airpods starve on startup. (#16550)
* DEV-2812: Broadcasting from MacOS won't work. (#16553)
* Dump installer logs on failure. (#16559)
* Allow Linux interface to connect to domain when DISABLE_QML is true
when built with DISABLE_QML true, Linux interface doesn't attempt to connect to domain. (#16566)
* DEV-1943: Make MyAvatar.getAvatarEntityData() return all properties. Make MyAvatar.getAvatarEntityData() return all properties rather than just changed properties. (#16551)
    - Fixed string property values to be returned as string primitives instead of String objects. (So the JSON.stringify() produces the expected results.)
    - Included localPosition etc. properties in values returned by `MyAvatar.getAvatarEntitiesVariant()` and `Avatar.getAvatarEntitiesData()`, to match those returned by `Entities.getEntityProperties()`.
    - Removed now-unnecessary call to `Entities.getEntityProperties()` in WebTablet.js.
    - Make Agent.getAvatarEntityData() return all properties.
* DEV-2810: Rename Stats.audioAudioInboundPPS to Stats.audioInboundPPS. (#16557)
* DEV-2442: Fix main gamepad (XBox controller) controls. (#16562)
    * General fixes:
        - `Controller.Actions.CycleCamera` fixed so that it doesn't get stuck in third person (HMD mode) or selfie view (desktop mode).
        - JSDoc for `Controller.Actions.CycleCamera` updated to reflect new camera modes used.
    * Gamepad-specific fixes:
        - Reinstated teleporting on "Y" button.


## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Explore section updates with further rebranding. (#21, #40)
* Build Docs support added to the main documentation repo. (#25)
* Various general and rebranding updates. (#29, #30, #39, #43)
* Last minute K2 release notes updated. (#27, #28)
* Avatar thumbnails documentation added. (#32)
* Updated "Get your 3D Model" page. (#34)
* Videos in web entities documentation added. (#36)
* Meta documentation updated. (#37, #45)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* Various API docs updates. (#277, #278)
* Various API docs fixes. (#320)
* Installer creation docs updated. (#391)

## Extra Applications

### Explore App (Interim Version)

The numbers at the end of each item are the PR numbers in the Decentralized GoTo [repo](https://github.com/vircadia/Decentralized_GoTo_Experimental).

* Nothing new!


### Community Apps

The numbers at the end of each item are the PR numbers in the Community Apps [repo](https://github.com/vircadia/community-apps).

* VR Grab Scale app updated. (#17)
    * Gizmo entities updated to avatar entities.
    * Added lifetime of 300 seconds for gizmo entities + interval updater.
    * Added righthand distance checker.
    * Changed renderLayer to front.
    * Don't scale gizmo to grabbed entity dimension.
* Newly installed scripts are not loaded from the cache but rather the latest version is retrieved from the server. (#11)
* Spectator Camera app added. (#12)
* Record app housekeeping. (#13, #14)
* Radar app created by ctrlaltdavid added. (#15)
* Developer mode for main app added. (#16)
