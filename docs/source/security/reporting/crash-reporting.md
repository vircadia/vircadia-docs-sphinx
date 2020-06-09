# Crash Reporting Privacy

Your interface by default has crash reporting enabled. When this is enabled, interface will send a minidump of information to the reporting server that the Vircadia developers have access to. The current crash management server is called [Sentry](https://sentry.io/).

Here is [information](https://docs.sentry.io/platforms/native/minidump/#what-is-a-minidump) on what a minidump is and how its handled by Sentry.

Here is a list of extra metadata that is collected with a crash report:

* Username
* Domain + Location
* Avatar URL
* Build Type
* Display Plugin
* GPU Model + GPU Memory
* Desktop/VR Mode
* Machine Fingerprint
* Metaverse Session UUID
* Is A Steam Client Version Indicator