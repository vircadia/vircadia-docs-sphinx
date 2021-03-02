
    FIXME: mentions High Fidelity, mentions purchasing domain names, only mentions DigitalOcean
    This document is outdated.
.. warning::
####################################
Define Your Network Settings
####################################

The **Metaverse/Networking** section of the Domain Settings defines all of the network settings for your domain.

.. warning:: Changing any network settings will affect how High Fidelity's servers connects to your domain. Before making any changes to the settings, ensure that you have a basic understanding of networking concepts (IP, UDP, ports, etc) as changing these settings can impact visitors or (if you're running a local server) put your system at risk.

.. contents:: On This Page
    :depth: 2

--------------------------------
Linked High Fidelity Account
--------------------------------

Every domain is linked to one High Fidelity account, who is the owner of that domain. When you link your account, an OAuth access token is created and grants your account access to modify domain settings, and access groups necessary for domain operations. In addition, you can access your account-specific settings and purchases, such as place names.

The status of your linked High Fidelity account is reflected at the top of the Metaverse/Networking section of the domain settings. You can also view your access token on this page (under 'Advanced Options').

.. image:: ../_images/account-status.png

--------------------------------
Automatic Networking
--------------------------------

The automatic networking settings define how other nodes in the metaverse connect to your domain. These nodes include the avatar mixer, audio mixer, entity server, asset server, entity script server and messages mixer. 

.. warning:: Do not change any network settings for cloud hosted domains. These are configured as part of the automatic setup process that occurs when you purchase a DigitalOcean droplet through High Fidelity. Changing any of these network settings may cause your cloud hosted domain to not work as intended.

Choose from the following automatic networking options:

* **None**: The network address and port displayed will be used to connect your domain. They are never automatically updated, and your domain must be reachable at the address and port you set.
* **IP Only**: Your domain will update the network address displayed to whatever it detects as your current IP address. The port displayed will not be automatically changed, so your domain must be reachable on the specified port. This option is recommended for a local server running on a home network with a dynamically changing public IP address.
* **Full**: Your domain will provide the networking information to High Fidelity's servers, so that new clients can connect to it via UDP hole punch without needing to make any changes to NAT or firewall settings. This may not work for all networks.

Depending on the automatic networking method you choose, define the network address and/or port in the fields provided. 

.. note:: If you intend to host multiple domains on the same network and router, be sure to set each domain to a separate UDP port. You can use the value "0" to have your domain select a random port, which will help prevent port collisions.

.. image:: ../_images/network-settings.png

--------------------------------
Domain ID
--------------------------------

Each domain on the metaverse is assigned a unique domain ID. High Fidelity uses this ID to track where certified Marketplace items are rezz'd, to link domains to place names, to identify domain owners and more. 

If you don't want your domain to be registered in the metaverse, leave the Domain ID field blank. 

.. warning:: Do not change the domain ID for cloud hosted domains. This is assigned to your domain when you purchase a DigitalOcean droplet through High Fidelity, and changing it may result in errors on your domain. 

.. image:: ../_images/domain-id.png

---------------------------------
Enable Packet Verification
---------------------------------

When 'Enable Packet Verification' is turned on, High Fidelity sends secure checksums on communications that use the High Fidelity protocols. This increases security in your domain, but may slightly decrease domain performance for your visitors.

.. image:: ../_images/packet-verification.png