##############################
Backup and Restore Your Domain
##############################

We recommend that you do backups of your domain in case of data loss or griefing. While your domain server does perform automatic backups periodically of your domain's content, it is up to you to configure the frequency these backups that are performed. In addition, we recommend that you periodically download copies of these backups to your computer as a secondary backup.

.. contents:: On This Page
    :depth: 2

----------------------------------------------------
Automatic Content Archives
----------------------------------------------------

Your domain server makes regular archives of the content in your domain. By default, it saves a backup rolling every 30 days, every week, every day, and every half hour. To change the frequency of these backups:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Settings > Automatic Content Archives**.
3. Under 'Rolling Backup Rules', click the ``+`` icon.
4. Enter a name for the rule, along with the backup interval (in seconds) and the number of backups to store on the server.
5. Click the ``X`` icon next to any rule you want to delete.
6. Save your domain settings.

To access your content archives:

1. Open your domain settings.
2. On the top menu bar, select **Content > Content Archives**.

The automatic backups will be listed under 'Automatic Content Archives'.

---------------------------------------------------
Manually Backup Your Domain Content
---------------------------------------------------

In the case you need a backup on demand, you can create one:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/cloud_domains. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Content Archives**.
3. Under 'Manual Content Archives', click 'Generate New Archive'.
4. Enter a name for your archive and click 'Generate Archive'.

It will appear just below the 'Generate New Archive' button.

---------------------------------------------------
Download Content Archives
---------------------------------------------------

To download any content archive (automatic or manual):

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Content Archives**.
3. Locate the content archive you want to download.
4. From the Actions menu, click 'Download'.

---------------------------------------------------
Restore a Domain's Content
---------------------------------------------------

To restore content to a previous archive on this domain:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Content Archives**.
3. Locate the content archive you want to restore.
4. From the Actions menu, click 'Restore from here'.
5. Confirm that you are sure that you want to replace your current content with the restored content set. At this point, your domain server will restart and the new content will be deployed in your domain.

To restore content from a downloaded content archive:

1. Open your domain settings.
2. On the top menu bar, select **Content > Upload Content**.
3. Under 'Upload Content', click 'Choose File'.
4. Browse to the downloaded content archive.
5. Click 'Upload Content'.
6. Confirm that you are sure that you want to replace your current content with the restored content set. At this point, your domain server will restart and the new content will be deployed in your domain.

---------------------------------------------------
Backup Your Domain Settings
---------------------------------------------------

To backup your domain's so you can quickly configure another domain or restore them later:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'.
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Settings > Setting Backup /Restore**.
3. Click 'Download Domain Settings'.


