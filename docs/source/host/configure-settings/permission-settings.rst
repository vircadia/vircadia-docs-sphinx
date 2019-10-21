##############################
Assign User Permissions
##############################

You can protect your domain by setting user permission for the visitors in your domain. In your domain settings, you control the types of users that have access to your domain, and the permissions granted to them. For example, you can let anyone connect to your domain, but only give friends access to edit your domain content.

.. contents:: On This Page
    :depth: 2

-----------------------------
Set User Permissions
-----------------------------

Permissions can be assigned to standard user groups, custom user groups, specific users, users from a specific IP, and users from specific computers. 

The permissions for a user will be the sum of all groups that the user is in. For example, let's say that all logged in users can connect and only localhost users can rez entities. If a user is both logged in and on  ocalhost, then they will be able to both connect and rez entities. Additionally, when you assign user permissions to a specific user, it will supersede any group-level permissions that otherwise might apply to that user.  

To assign user permissions: 

1. Open your domain settings.

    * For cloud hosted domains, go to https://metaverse.highfidelity.com/user/cloud_domains. Click the "More Options" menu (3 dots on the right-side of the row), then click 'Domain Server settings'. Log in when prompted.
    * For local servers on Windows: Click on the High Fidelity icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the High Fidelity icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. Scroll to 'Domain-Wide User Permissions'.
3. First, set any permissions for the `standard user groups`_. Check the box of all permissions you'd like to grant.
4. To assign all other permissions, you need to add a custom group, specific user, etc individually to the correct permissions table:

    * **Add Group**: Enter the name of the :doc:`custom group or list <user-groups>`, then click the ``+`` icon. Save your domain settings to load ranks. Check the box of all permissions you'd like to grant or deny (depending on the permissions table you are adding the group to).
    
        .. image:: ../_images/group-permissions.png 
    * **Add Specific User**: Click the ``+`` icon, then enter a specific user name. Check the box of all permissions you'd like to grant.
    
        .. image:: ../_images/user-permissions.png
    * **Add IP Address, MAC Address, or Machine Fingerprint**: Click the ``+`` icon, then enter the information (based on the permissions table you are adding permission to). Check the box of all permissions you'd like to grant.
5. Click 'Save' to save your domain settings.

-----------------------------
Standard User Groups
-----------------------------

Your domain comes with four basic security groups that are already set up, based on the people that you will interact with in the metaverse. They are: 

+-----------+--------------------------------------------------------------------------------------------+
| User Type | Description                                                                                |
+===========+============================================================================================+
| anonymous | A person who is not logged in and is using an instance of High Fidelity's Interface.       |
|           | This is the default user type for someone who has downloaded Interface for the first       |
|           | time.                                                                                      |
+-----------+--------------------------------------------------------------------------------------------+
| friends   | A user that you have connected with by shaking hands with their avatar and clicking        |
|           | on the 'Friends' checkbox in your **People** app. Connections are different from           |
|           | Friends. By default, Friends have more permissions in your domains than your Connections.  |
|           | Connections are treated like anonymous users.                                              |
+-----------+--------------------------------------------------------------------------------------------+
| localhost | A user who is running Interface on the same machine where the server is hosted.            |
|           | Localhost users do not need to be logged in and have permissions that override             |
|           | non-user-specific permissions.                                                             |
+-----------+--------------------------------------------------------------------------------------------+
| logged-in | A user that is logged into their High Fidelity account while using Interface. They         |
|           | do not need to be a Friend or a Connection to have server rights. Permissions that         |
|           | are granted to a specific user override all other permissions.                             |
+-----------+--------------------------------------------------------------------------------------------+

The 'Connect' permission for these standard user groups determine the privacy level of your domain:

* **Public**: A public domain allows 'anonymous' and/or 'logged-in' users to connect to it. These domains may be featured in the GoTo app and in other places around the metaverse. 
* **Private**: A private domain does not allow 'anonymous' and/or 'logged-in' users to connect to it. Domain owners are responsible for promoting their domains to other users and maintaining connect permissions for users to enter their domain.

--------------------------------
User Permissions
--------------------------------

The actions that you can secure for each type of user are as follows:

+-------------------------+------------------------------------------------------------------------------+
| Permissions             | Definition                                                                   |
+=========================+==============================================================================+
| Connect                 | Sets whether a user can enter the domain.                                    |
+-------------------------+------------------------------------------------------------------------------+
| Lock/Unlock             | Sets whether a user can change the "locked" property of an entity to prevent |
|                         | it from being modified.                                                      |
+-------------------------+------------------------------------------------------------------------------+
| Rez                     | Sets whether a user can permanently create (or rez) new entities in the      |
|                         | domain. These users will also have full access to the **Create** app.        |
+-------------------------+------------------------------------------------------------------------------+
| Rez Temporary           | Sets whether a user can create (or rez) new entities with a finite lifetime  |
|                         | (the lifetime is set in **Domain Settings > Entities > Advanced Settings >   |
|                         | Maximum Lifetime of Temporary Entities**). These users will also have full   |
|                         | access to the **Create** app.                                                |
+-------------------------+------------------------------------------------------------------------------+
| Rez Certified           | Sets whether a user can permanently create (or rez) new entities that were   |
|                         | purchased from the Marketplace.                                              |
+-------------------------+------------------------------------------------------------------------------+
| Rez Temporary Certified | Sets whether a user can create (or rez) new entities from the Marketplace    |
|                         | for a finite lifetime (the lifetime is set in **Domain Settings > Entities   |
|                         | > Advanced Settings > Maximum Lifetime of Temporary Entities**).             |
+-------------------------+------------------------------------------------------------------------------+
| Write Assets            | Sets whether a user can add assets (models, audio,  or other files) or make  |
|                         | changes to the domain's asset server (your domain's file storage space).     |
+-------------------------+------------------------------------------------------------------------------+
| Ignore Max Capacity     | Sets whether a user can enter a domain even if it has reached or exceeded    |
|                         | the specified capacity limit.                                                |
+-------------------------+------------------------------------------------------------------------------+
| Kick Users              | Sets whether a user is allowed to remove other users from a domain.          |
+-------------------------+------------------------------------------------------------------------------+
| Replace Content         | Sets whether a user can change the entire content set of a domain by wiping  |
|                         | the existing content.                                                        |
+-------------------------+------------------------------------------------------------------------------+
| Can Get and Set Private | Sets whether a user can access and write to the 'Private User Data' property |
| User Data               | of entities in the domain.                                                   |
+-------------------------+------------------------------------------------------------------------------+

