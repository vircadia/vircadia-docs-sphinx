# Alpha 2020.2.2 Asteria Release Notes

This version of Vircadia is an update to 2020.2.1. It is compatible with the 2020.2.0-Asteria protocol. This version was released on June 26th, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Vive Pro Eye support added. (#350, #478)
* Fix Linux default audio selection and warnings. (#377)
* Rebranding and login screen updates. (#384, #471, #473)
* Controller API: fix various crashes and fix more than one controller not buzzing on `triggerHapticPulse`. (#399)
* Begin transitioning metaverse server URLs into central files for easier development around the Metaverse API. (#411)
* Disable certified entities being auto deleted by the server because the check returned false. (#438)
* Fix models not scaling correctly on load due to a low timeout; also fix resizing of models for the first time after they load. (#442)
* Fix reloading content in serverless domains. (#447)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Add the "Prometheus" exporter, which allows for exporting of full domain and mixer statistics for visualization. (#280)

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Update build docs from main repo, fix link for auto-updating of build docs. (#55)
* Create debugging tips for Interface on Windows. (#56)
* Release notes for 2020.2.2. (#57)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* Nothing new!

## Extra Applications

### Explore App (Interim Version)

The numbers at the end of each item are the PR numbers in the Decentralized GoTo [repo](https://github.com/vircadia/Decentralized_GoTo_Experimental).

* Nothing new!

### Community Apps

The numbers at the end of each item are the PR numbers in the Community Apps [repo](https://github.com/vircadia/community-apps).

* Add "Refresh" app. (#18)
* Add more info to "Radar" app. (#19)
