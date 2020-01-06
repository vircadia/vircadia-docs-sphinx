#############################
Update to the Latest Version
#############################

High Fidelity is always changing, as we work to improve performance and add features that will enhance your experience in the metaverse. If a new version has been released, all of our users will be prompted to update to the latest (and most stable) release. 

.. contents:: On This Page
    :depth: 2

-----------------------------------------
Protocol Compatibility
-----------------------------------------

High Fidelity requires that the client and server (the visitor's installed software and the server's software) maintain protocol compatibility across versions. Most of our beta releases include protocol changes, and will affect the visitors who can visit your domain. 

* An updated client version will be unable to connect to a domain that is not updated.
* A client running an older version will be unable to connect to a domain that is running a new version. 

Both of these will result in an error message "Protocol Mismatch".

------------------------------------------
Upgrade Your Domain Server
------------------------------------------

Because all of our users are prompted to update to the latest release, it is highly likely that the majority of your visitors are running the newest version of High Fidelity. Therefore, if there has been a protocol change (check the :doc:`Release Notes <../../release-notes>` for your version), we strongly recommend that you upgrade your domain server to the newest release. The process will be different for local servers versus cloud-hosted domains.

To upgrade a cloud-hosted domain: 

1. Go to https://highfidelity.com/user/cloud_domains to view your DigitalOcean droplets. If you’re not logged in, you will be prompted to do so.
2. If the menu (3 dots) is yellow, then a new High Fidelity version is available for download. Click this menu, and select 'Update High Fidelity'.

.. image:: ../images~/update-cloud.png

To update a local server: 

1. Download the latest `Client + Sandbox installer <https://www.highfidelity.com/download#sandbox>`_ from High Fidelity's website or download the upgrade when prompted to on your server.
2.  On your local server, quit Sandbox:

    * On Windows: Click on the High Fidelity icon in the system tray, then click 'Quit'. Alternatively, end the ‘server-console’ background process using the Task Manager.
    * On Mac: Right-click the High Fidelity icon on the top menu bar, then click 'Quit'.
3. Run the installer.

After installation, check your local server's domain settings to ensure that its running the most recent version. 

