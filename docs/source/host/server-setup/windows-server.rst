.. warning::
    This document is outdated.
    FIXME: mentions purchasing domain names, only mentions DigitalOcean, mentions tray console

#################################
Host a Domain from a Local Server
#################################

A local server lets you use your own computer to host your virtual domain on the metaverse.

.. warning:: Hosting any kind of server from your home means exposing your network to the world. Therefore, we recommend using local servers only for private events and small gatherings. If you want to host a public domain or advertise your domain in the GoTo app, we recommend using a hosting provider such as DigitalOcean.

.. contents:: On This Page
    :depth: 2

------------------
Set Up Your Server
------------------

Before you set up a local server, you should have a basic understanding of computer and networking concepts. Specifically, familiarize yourself with:

* Your system and hardware configuration
* Your network configuration

At a minimum, the computer that you use for your server should meet our `minimum system requirements <../../explore/get-started/install.html#minimum-system-requirements>`_. However, keep in mind that as you add more visitors to your domain, the demand on your resources will increase. Therefore if you wish to invite a large group (over 15 visitors) or create a complex content set, we encourage you to increase your memory and network bandwidth. 

To host a domain, you must be running Vircadia's open source `Client + Sandbox <https://vircadia.com/download-vircadia/#interface>`_ software.

.. note:: While we do not publish an installer for Linux computers, you can still run a local domain server on a Linux machine. To do so, you will need to build the application from our code base. For more information, see our `Linux Build Guide <https://github.com/vircadia/vircadia/blob/master/BUILD_LINUX.md>`_.


---------------
Create a Domain
---------------

To set up a domain and host it on your local server:

1. Open the **Setup Wizard (Domain Server Settings)**. 

    * For Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. Follow the steps of the Wizard to create a domain on the metaverse and connect it to your local server. 
    
    * **Step 1: Connect your Vircadia account**: When you connect your account, you become the owner of the new domain that is created for your server. The security token that you copy and paste gives Vircadia access to your domain settings, which are stored on your local server.
    * **Step 2: Identify place name**: Your place name is how users will visit your domain in the metaverse. By default, you are assigned a temporary place name for your domain, such as turquoise-bandwidth-8162. 
    
    .. note:: Your temporary place name is only active while your domain is being staged. Permanant place names can be purchased on a subscription basis, and are renewed yearly. :doc:`Learn how to purchase a custom place name for your domain <../configure-settings/place-setting>`. 
    
    * **Step 3: Set up basic permissions**: By default, anyone logged on to your computer will have access to the domain settings for your domain. If you would like to extend administrator privileges to remote users (or allow yourself access from a remote location), then add the Vircadia usernames here. In addition, choose who will be able to connect or rez items. 
    * Click **Finish** to close the Setup Wizard. You will automatically be redirected to the Domain Settings for your domain.
    
At this point, you have staged a domain in the metaverse and connected it to your server. However, it is not yet "live", meaning that it exists only as a temporary or "draft" domain in the metaverse. 

--------------------
Activate Your Domain
--------------------

To activate your domain: 

1. Return to the Domain Settings for your domain. If it isn't open, open a browser window and type http://localhost:40100/settings/ into the URL bar.
2. Click 'Advanced Settings' under **Metaverse/Networking**.
3. Click the 'Create new domain ID' button. 

This will assign your domain with a permanent, unique identification code that registers it in the metaverse. Your temporary place name will no longer work, and your domain is accessible through its purchased place name or your server's IP address. 

.. note:: If you did not purchase a permanent place name, the only way to access your domain is by your server's IP address. However, note that when your IP address changes, so too will the address of your domain and you will need to manually restart your domain each time you change networks. Therefore, if you are hosting your domain on a laptop or on a computer with a frequently changing IP address, we strongly recommend that you purchase a permanent place name for your domain. :doc:`Learn how to purchase a custom place name for your domain <../configure-settings/place-setting>`. 

Now, your domain is officially part of the expanding metaverse! 

------------
What's Next?
------------

.. rst-class:: list-table

+-----------------------------------------------+--------------------------------------+-----------------------------------------------+
| Visit Your Domain                             | Personalize Your Content             | Configure More Settings                       |
+===============================================+======================================+===============================================+
| * `Go visit your domain using the Explore app | * `Create a unique content set and   | * `Purchase a custom place name <../configure |
|   <../../explore/travel.html#goto-app>`_      |   upload it to your domain           |   -settings/place-setting.html>`_             |
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

