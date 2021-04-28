#####################################
Host a Domain from Locally on Windows
#####################################

A local server lets you use your own computer to host your virtual domain on the metaverse.

.. warning:: Hosting any kind of server from your home means exposing your network to the world. Therefore, we recommend using local servers only for private events and small gatherings. If you want to host a public domain or advertise your domain in the Explore app, we recommend using a cloud hosting provider such as DigitalOcean.

.. contents:: On This Page
    :depth: 2

------------------
Set Up Your Server
------------------

Before you set up a local server, you should have a basic understanding of computer and networking concepts. Specifically, familiarize yourself with:

* Your system and hardware configuration
* Your network configuration

At a minimum, the computer that you use for your server should meet our `minimum system requirements <../../explore/get-started/install.html#minimum-system-requirements>`_. However, keep in mind that as you add more visitors to your domain, the demand on your resources will increase. Therefore if you wish to invite a large group (over 15 visitors) or create a complex content set, we encourage you to increase your memory and network bandwidth. 

To host a domain on Windows, you must be running Vircadia's open source `Client + Server <https://vircadia.com/download-vircadia/#windows>`_ software.

---------------
Create a Domain
---------------

To set up a domain and host it on your local server:

1. Open the **Setup Wizard (Domain Server Settings)**. 

    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For local servers running on any OS, go to http://localhost:40100/settings.

2. Follow the steps of the Wizard to create a domain on the metaverse and connect it to your local server. 
    
    * **Step 1: Connect your Metaverse account**: When you connect your account, you become the owner of the new domain ID that is created for your server. The security token that you copy and paste gives the Metaverse Server access to your domain settings, which are stored on your local server.
    * **Step 2: Create Place name**: Your Place name is how users will visit your domain in the metaverse. Alternatively, they can enter your domain's ID or IP address into the Explore app.
    
    .. note:: Learn :doc:`how to configure a Place name <../configure-settings/place-setting>`.
    
    * **Step 3: Set up basic permissions**: By default, anyone logged on to your computer will have full access to your domain. If you would like to extend administrator privileges to remote users (or allow yourself access from a remote location), then add the Vircadia Metaverse usernames here. In addition, choose who will be able to connect or rez items. 
    * Click **Finish** to close the Setup Wizard. You will automatically be redirected to the Domain Settings for your domain.
    
At this point, you have staged a domain in the metaverse and connected it to your server. However, it is not yet "live", meaning that it exists only as a temporary or "draft" domain in the metaverse. 

--------------------
Activate Your Domain
--------------------

To activate your domain: 

1. Return to the Domain Settings for your domain. If it isn't open, open a browser window and type http://localhost:40100/settings/ into the URL bar.
2. Click 'Advanced Settings' under **Metaverse/Networking**.
3. Click the 'Create new domain ID' button. 

This will assign your domain with a permanent, unique identification code that registers it in the metaverse. Your domain will now be accessible through the Place name or your server's IP address. 

.. note:: If you did not assign a Place name, the only way to access your domain is by your server's IP address. However, note that when your IP address changes, so too will the address of your domain. Therefore, if you are hosting your domain on a laptop or on a computer with a frequently changing IP address, we strongly recommend that you configure a Place name for your domain. Learn :doc:`how to configure a Place name <../configure-settings/place-setting>`. 

Now, your domain is officially part of the expanding metaverse! 

------------
What's Next?
------------

.. rst-class:: list-table

+-----------------------------------------------+--------------------------------------+-----------------------------------------------+
| Visit Your Domain                             | Personalize Your Content             | Configure More Settings                       |
+===============================================+======================================+===============================================+
| * `Go visit your domain using the Explore app | * `Create a unique content set and   | * `Create a Place name <../configure-settings |
|   <../../explore/travel.html#goto-app>`_      |   upload it to your domain           |   /place-setting.html>`_                      |
| * `Invite people to your domain <../invite-us |   <../add-content.html>`_            | * `Set additional user permissions <../config |
|   ers.html>`_                                 |                                      |   ure-settings/permission-settings.html>`_    |
| * :doc:`Meet new people and explore other     |                                      | * `Adjust audio settings <../configure-settin |
|   domains <../../explore/socialize>`          |                                      |   gs/audio-settings.html>`_                   |
|                                               |                                      | * `Backup your domain's content <../maintain- |
|                                               |                                      |   domain/backup-domain.html>`_                |
|                                               |                                      | * `Update for new Vircadia releases           |
|                                               |                                      |   <../maintain-domain/update-software.html>`_ |
|                                               |                                      | * And more...                                 |
+-----------------------------------------------+--------------------------------------+-----------------------------------------------+
