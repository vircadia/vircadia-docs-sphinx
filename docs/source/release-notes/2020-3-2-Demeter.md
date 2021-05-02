# Alpha 2020.3.2 Demeter Release Notes

This version of Vircadia is an update to 2020.3.1. It is compatible with the 2020.3.0-Demeter protocol. This version was released on December 1st, 2020.

## Interface (Codename Athena)

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Graphics: Add and enable automatic maximum texture size scaling by default. (#599)
* Application: Add `Script.require` developer toggle to force cachebusting on every load. (#664)
* App: 'Create' app October 2020 improvements package. (#833)
    * Add error dialogue if an unsupported filetype is added as a model URL.
    * Angular velocity precision can now go below 0.4 in the UI.
    * Add Actions menu.
        - Undo
        - Redo
        - Cut
        - Copy
        - Paste
        - Duplicate
        - Delete
        - Parent Entity to Last Selected
        - Unparent Entity
        - Move Selected Entities to Avatar
    * Add Selection menu.
        - Select All
        - Select None
        - Inverse Selection
        - Select All Entities In Box
        - Select All Entities Touching Box
        - Teleport to Selected Entities
    * Add a parent 'Hierarchy' column to the entity list, identifying:
        - Parent
        - Child
        - Parent & Child
        - None
    * Selected entities now have different colors based on parent-child hierarchy.
* Application: Add ability for `Script.require` to automatically cachebust itself when changes are made to the script on the local filesystem. (#848)
* UI/UX: Enable ability to login to domains with an email as well as a username. (#852)
* API: Fix `Entities.enterEntity` and `Entities.leaveEntity` event not firing in entity script after content reload. (#853)
* App: 'Create' app November 2020 improvements package. (#858, #874)
    * The last selected entity is now highlighted.
    * The entity list column visibility and order of columns now persists when the Create app is closed and reopened.
    * The selection buttons for 'Parent' and child entities have been renamed.
    * New in-world bounding box color for a selected entity that is a parent & child at the same time:
        * If the entity is a top parent, the selection color of the bounding box is orange.
        * If the entity is parent and child, the selection color of the bounding box is magenta.
        * If the entity is only a child, then the selection color of the bounding box is cyan.
        * If not involved in any parent line, or if the selection is multiple, then the selection color of the bounding box is light grey.
    * The 'Selection' and 'Actions' menus now close when the 'Create' app or entity list is closed.
    * 'Move Selected Entities to Avatar' is now recorded in the undo history.
    * Fix entity list interpreting the last selected entity as the first selection in the selection stack.
* Application: 'Local Entity' and self-owned 'Avatar Entity' scripts now run on their own separate script engines to improve performance and security. (#871)

### Miscellaneous

* Application: Transition listener registration from member string names to member string pointers. (#613)
* Build: GHA now generates builds for Android and Quest platforms. (#615)
* Build: GHA now builds and uploads installers for every merge to the master branch. (#719, #881)
* Application: Qt 5.15 fixes: Initialize flags with default constructor. (#791)
* Application: Add color, ms timestamps, PID, and thread ID as possible logging settings. (#804)
* UI: Hide 'Secure Transactions' section in Settings > Security. (#842)
* Application: Clean and revamp 'Script Plugin Infrastructure' example plugin. (#847)
* Build: Fix GHA building. (#872)
* Graphics: Acquiring the free VRAM value on AMD video cards for 'Auto' maximum texture memory mode now works correctly, preventing a crash. (#887)

## Domain Server

The numbers at the end of each item are the PR numbers in the Vircadia [repo](https://github.com/vircadia/vircadia).

### General

* Server: Append 'Vircadia' to the environment variable for the metadata exporter port. (#826)
* UI/UX: Fix wrapping of "Enable Automatic Threading" in server setup wizard. (#844)
* UI/UX: Fix 'Create new Domain ID' dialog. (#846)

## Metaverse Server & Dashboard (Codename Iamus)

### Iamus [Metaverse Server](https://github.com/vircadia/iamus)

#### Version 2.3.3

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/fe0518f44cbbab7e87a68c8e2bf44a8149cf9262">view &bull;</a> Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f1299154d43fe10687de6bc8ee79460fa4e24e53">view &bull;</a> Add proper handling of SIGTERM and SIGINT     Shutdown server, finish requests, and then cleanly exit.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/6a8c2b0fab15558ef684555ff35843d030dcf718">view &bull;</a> Add domain.sponsorAccountId to Places information returned by /api/v1/places/... Update documentation.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/fc4f64670e5836f732b8cef1f5a5a477d3aea76f">view &bull;</a> Fix problem with changing username: update AccountEntity setPermissions. Should fix vircadia/project-iamus-dashboard#21</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8cf02628b3c8055d0e84655fa2e65951bd2a6a4b">view &bull;</a> Bump version to 2.3.3</li> 
</ul>

#### Version 2.3.2

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/1a137f8f7b2722234ef5d3a5fd110d1007a502fd">view &bull;</a> Fix sorting of versions in genChangeLog.sh Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/4654f30bb6af0cb89ac0a4c7fcf9f640576876f3">view &bull;</a> Return more useful error message when finding a domain name contains non-allowed characters. Some non-functional formatting and code cleanup.</li>
<li><a href="http://github.com/vircadia/Iamus/commit/729cdd156c95d514751a7663bafd6b584c725d49">view &bull;</a> Fix line endings to Linux style</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/0511c01854bebf75a46a7ad79dbf243f194aa06d">view &bull;</a> Modify Entity field value validation to return reason for any validation failure. Rather than just returning 'false', the validator returns a structure with an optional reason for the validation failure. Modify the callers of Entity field setting to return error. Closes #48 Fix AccountEntity.Availability and AccountEntity.Roles to validate values correctly.</li>
<li><a href="http://github.com/vircadia/Iamus/commit/8dca92378f89629819e544ff3d73351756902b2e">view &bull;</a> Tone down the AccountEntity.email format validation to require one AT sign. An RFC compliant email address can be very complex so rely on later email verification handshake to really checkout that email is a good format. Closes #63</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/3d6f7679ea605c288f537ddf8fffd011d9795922">view &bull;</a> Bump version to 2.3.2</li> 
</ul>

#### Version 2.3.1

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/a0edba9f67e250ba5d1b8ad5c758bd17d4981af3">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ffe9c154e709e5138c3afaa7377b448abac81354">view &bull;</a> Bump version to 2.3.1</li> 
</ul>

#### Version 2.2.24

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/f59619261cfa874be2c3cd5f436def099040dde8">view &bull;</a> Update Changelog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/7ec03825c70af2f85ff569c38a59a0c77dca242c">view &bull;</a> When deleting connections or friends, remove the reverse pointers: Deleting a connection removes both connection and friend in both accounts. Deleting a friend removes friend from other account also. Closes #59</li>
<li><a href="http://github.com/vircadia/Iamus/commit/c0ca649c6b97915662597363785cf3ceeae85d2e">view &bull;</a> For domain token generation default web page, move generated domain token text up higher and make it white so it stands out. Clean up some CSS errors. Closes #5</li>
<li><a href="http://github.com/vircadia/Iamus/commit/53ac8b06c950adeab17901476c2054c68315e49b">view &bull;</a> Bump version to 2.2.24</li> 
</ul>

#### Version 2.2.23

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/1c51ba8f46832f70551d2802422cbb91c20a681d">view &bull;</a> Update ChangeLog.md Modify genChangelog.sh to get the tags from git and generating a list of the last 10 version tags (tag form: major.minor.patch)</li>
<li><a href="http://github.com/vircadia/Iamus/commit/db36bccf9dd965cc66940ff839596249d94abe14">view &bull;</a> Add pagination response fields to API requests that handle pagination.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/2b01b6bad64d0a7ceeb141befd5f6b0fb41db198">view &bull;</a> Implement redirection of /users/:username to Dashboard. Closes #58</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/4dcab7bbcbf4bf5bb2f02143c541fe88b9abe3ac">view &bull;</a> Bump version to 2.2.23</li> 
</ul>

#### Version 2.2.22

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/9e98dc82bb0fab9ae2b0ffa3e58111de024ba1cb">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/650824f948c3d905ebc2242147d32364b0170914">view &bull;</a> Remove the one-time, DB fix for bad domain network addresses.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/4e81b42308fb55b78d6b6a4fd625d0f9917b0ed7">view &bull;</a> Add 'BRANCH' argument to Dockerfile for optional branch building</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/cfdaf535927a3d02a03d547fa7e7c24284bd9ddd">view &bull;</a> Modify the connection building code for /api/v1/users/connections.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/e4a58caca81fbd274e919591c219ddcc508baf01">view &bull;</a> Correct 'location' element name in /api/v1/users/connections. Add documentation for /api/v1/users/connections</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/44a371d26d2564308e2654c9db9318291da6fea6">view &bull;</a> Add pagination response fields to /api/v1/users/connections. Add response field function to other criteria filters.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/292681ac5e7e41dbdb0451714eaca27e9bbc663f">view &bull;</a> Implement POST /api/v1/user/friends so a user can make a connection into a friend.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/b3776e16c969bf5328dbb7f524d0c845166d5cdb">view &bull;</a> Allow an account to add any connection or friend they wish</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/24c9c956fffd1db523f9f232ec42c3dbb0f69144">view &bull;</a> Change /api/v1/users/connections response to have proper connection type flag. The code seemed to want "is_friend" but it really wants just "friend". Update documentation for /api/v1/users/connections</li>
<li><a href="http://github.com/vircadia/Iamus/commit/8ddfdab9df65206edfb927ba25b7fe3c939088c5">view &bull;</a> Bump version to 2.2.22</li> 
</ul>

#### Version 2.2.21

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/55271bbe7b37e7b5c9aae9fa8f30f0f4256fa351">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/a64ea50eccdae4001d362b7523bc8caeb391c7b3">view &bull;</a> Add parameter to stats requests "history=no" which doesn't return histograms.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/c124e8548d2e13f00999d1615ea52e5d72230ffa">view &bull;</a> Debug stat "?history=no" query parameter for categories. Add documentation on history suppression to API-Monitoring.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/a59452440edc2c93dd792b080395a8e9238d25f7">view &bull;</a> Add Domain timer to check for non-heartbeating domains and to zero reported users. Add Config.metaverse-server.domain-seconds-until-offline = 10*60 Allow 'admin' to set Domain num_users and num_anon_users (for debugging). Closes #43</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/fe70496ad98d0816c57097f7910cfe7d68ba501b">view &bull;</a> Add stats category 'metaverse'. Add Accounts.countAccouts and Domains.countDomains for collecting of number of filtered entities. Add Db.countObjects(criteria) to do database count operation Make stats.Gather operation async so it can do database operations. Add documentation for 'metaverse' stat category</li>
<li><a href="http://github.com/vircadia/Iamus/commit/918ae7717f7131e22e624570708490a1f8cf1c24">view &bull;</a> Add initialization of stats category 'metaverse'.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/259c4d6fbcbef43e90e716ed4744940607d33d84">view &bull;</a> Add stats.metaverse debugging statements. Add debugging logging to Db.countObjects.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/4296b939a4af475adec3ceab988c3042d185a01a">view &bull;</a> Fix line endings to Linux style.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/9ff50dea5b5fb41c584ca732c005896db0885292">view &bull;</a> Fix Db.countObjects to use the passed criteria.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/b6f928c07628f820ab35062fe1b31de7fa44a6ee">view &bull;</a> Return idle and inactive times as strings in Accounts and Domains</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/a7be99a9052988c41261cfcdaed1765889d10493">view &bull;</a> Return Date for idle and offline Account and Domain dates. Properly invoke date fetchers in monitoring code.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/55c7c5da8699e2e4cf45380337a2d07de5b65000">view &bull;</a> Remove chatty debug logging in stats.metaverse.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/548ed92935d7faf8d4ebc062fe0301a811c7af0d">view &bull;</a> Add 'admin' ability to set 'connections' and 'friends' in AccountEntity. Was preventing handshakes from working.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/da160e075b345fd24b960b8210367343816d6341">view &bull;</a> Add more error logging in setEntityField processing</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/2928148e8962b57e0d2be65f7b1d4c8f1e69d463">view &bull;</a> Split Permissions.ts into Permissions.ts and GetterSetter.ts to better modularize functions. Re-order module inclusion to "fix" (??) variables not getting initialized. Add code to Accounts and Domains to verify entity field structure is initialized. There is some ordering problem that causes the function to not get set in the const assignment Replace all instances of FieldDefn getters and setters with "noGetter" rather than "undefined" Add "automatic_networking" to DomainEntity</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ec220c27add73c30d581d1ad6e0bd1c3f03a62e3">view &bull;</a> Rename Domains.network_mode to Domains.automatic_networking which is what the existing domain-server code uses. Update documentation to remove "network_mode" and replace with "automatic_networking"</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f58fdefbc47f37f9bcdaf314d14c970b4c358b17">view &bull;</a> Remove code that assumed domain-server network address was connection IP address. The immediate connection can be from a proxy server so it's often wrong. More design and debugging is needed for this feature. Add /api/maint/fixDomainIP to allow an admin to clean out bad domain IP addresses.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/9cd564701196f3b5fe118003b25bbe0c897c5135">view &bull;</a> Get login account info for fixDomainIP maint operation.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/b515cd2c546dce221747410484e9415a4eb4be29">view &bull;</a> Bump version to 2.2.21</li> 
</ul>

#### Version 2.2.20

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/bcba27784d37f4d7190a7b67f6b7ec4250715881">view &bull;</a> Add the missing address to the end of an Explore hifi URL</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/a2b8737f327f9cac359db53d481ec36221b66bfd">view &bull;</a> Fix line endings to Linux style.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/6517cb89b740779ca5532bcd975b9f0f9f729b39">view &bull;</a> Remove authentication requirement for fetching /explore</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/facd94a32b11d9fd9df99c2b6ec8b70e1c28aacb">view &bull;</a> Change type of request being searched for in connection_request. Add some debug messages to connection_request.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/b59c6ec0994ed9eef117e846b40e33d527e1b000">view &bull;</a> Always return "Owner" in Explore entries.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ff55e37fa4ebf8044de3247324786de00344eca6">view &bull;</a> Add more debugging to user/connection_request</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/e359e51dbe3e0cb78bf3145c1ec74dd853dfbaac">view &bull;</a> Fix problem where set entity field would not assign a value if the field did not exist on the target entity.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/708e24542aa6680e8de679719267a2bb8e1380e7">view &bull;</a> Add function route-tools.Util.buildImageInfo() for consistant user image return data.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/cd3c1cf57c2fa644d99787d08384e3ad166bfe3e">view &bull;</a> Change "GET /explore" to "GET /explore.json" as that's what the calling script wants.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/519f918ff0d5449fc042414659a415cd33c4f23f">view &bull;</a> Add /api/v1/users/connections which returns connections and their images/location info.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/f6b15d8e749f748c5e1265b573229da35bac9ab2">view &bull;</a> Bump version to 2.2.20</li> 
</ul>

#### Version 2.2.19

<ul>
<li><a href="http://github.com/vircadia/Iamus/commit/76fd7ffc1ef865f8913daa8bf4c088ab76225653">view &bull;</a> Update ChangeLog.md</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/6fc75b342899ab69fe330f9449bc86ee23145b21">view &bull;</a> Add week history for apiRequests</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/ead079973b6918de016abb05697b6056c427b80c">view &bull;</a> Fix line endings to be consistant Linux form</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/48e048fd3e3e97a027bf7202f3994c50e170371b">view &bull;</a> Remove some chatty debug messages for errors in RESTResponse.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/36c6a25c16246cedb7e05ce51d6232567ea80808">view &bull;</a> Remove 'accountId' from PlaceEntity to simplify place linkage management. Update API-Place documentation Add middleware.placeFromParams to map :placeId to req.vPlace. Add req.vPlace to ExpressJS.Request     Centralize code to look up place with both id and name. Lookup domain when fetching place by parameter id Update /api/v1/places/* to use :placeId. Use permissions.checkEntityAccess rather than checking fields for permissions</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/8da9cc25998042e4cad5279bb0e9754d637c1066">view &bull;</a> Correct domain address variable naming from "network_addr" to "network_address". Updates names on POST input and GET responses. Update documentation.</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/357bf894d90b2bbfa34a0f143b35aa31a86eec54">view &bull;</a> Add /explore API point that returns Place information with location info</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/e5099e082c996dd0406b8782e20f5286fa6e9f07">view &bull;</a> Add function to assume a domain server's addr if not saved. Add Config.metaverse-server.fix-domain-network-address defaulting to 'true'</li> 
<li><a href="http://github.com/vircadia/Iamus/commit/7a28811715fc72ab7cfe3cbe274bfbf4d15578e8">view &bull;</a> Bump version to 2.2.19</li> 
</ul>

### Iamus [Metaverse Dashboard](https://github.com/vircadia/project-iamus-dashboard)

Updates are reflected [here](https://dashboard.vircadia.com/).

* Fix copying of domain token on Chrome.
* Optimize 'Domain' page layout for different screens.
* Add basic Metaverse stats to the 'Home' page.
* Optimize 'Profile' page layout for different screens.
* Fix delete buttons for places that are owned by the user.

## Vircadia Launcher (Codename Pantheon)

[Vircadia's launcher](https://github.com/vircadia/pantheon-launcher) updates can be found [here](https://github.com/vircadia/pantheon-launcher/commits/master). The launcher is on experimental version 0.0.1s.

## Documentation

### User Docs

The numbers at the end of each item are the PR numbers in the Vircadia-Docs-Sphinx [repo](https://github.com/vircadia/vircadia-docs-sphinx).

* Add description of `VIRCADIA_LOG_OPTIONS` environment variable. (#88)
* Release notes for 2020.3.2 Demeter. (#97)
* Document a multitude of missing environment variables for the Interface and Domain server. (#90)
* Misc. name updates (Athena -> Vircadia) and documents `HIFI_DEBUG_HMD` environment variable for Interface. (#96)

### API Docs

The API docs are generated from the software source [repo](https://github.com/vircadia/vircadia).
The latest live deployment source can be viewed [here](https://github.com/vircadia/vircadia-api-docs).

* Nothing new to report!
