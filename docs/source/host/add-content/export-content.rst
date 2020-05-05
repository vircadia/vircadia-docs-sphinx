###################
Export Your Content 
###################

To create a backup of your content, you need to export it to an external file. This file contains all of the information about the assets that make up your domain: the asset types, dimensions, positions, physics, resource URLs and every other property entity property. 

Many domain creation and maintenance tasks require content backups, including:

* Baking content for optimization
* Importing content sets to new domains
* Restoring content in case of corruption 
* Sharing content with others
* Uploading content sets to the Marketplace


.. contents:: On This Page
    :depth: 2

-----------------------
Export Entities to JSON
-----------------------

The first method to export your content is to select specific entities from the Entity List and export them to a JSON file. Use this method if you want to:

* Bake your domain's content
* Back up content that is not yet live on a domain
* Export only specific entities, rather than the entire domain's content set

To export entities: 

1. In your Sandbox, pull up your tablet or HUD and go to **Create**.
2. In the Entity List, select the entities you want to export. To select all of the entities, use the keyboard shortcut ``Ctrl`` + ``A``. To select more than one adjacent entity, click on the first entity, press hold down the ``Shift`` key, then click the last entity. To select more than one non-adjacent entity, hold down the ``Ctrl`` key while clicking the entities you want to select.
3. Once you've selected all of the entities you want to export, click 'Export Selection'.
4. Browse to a folder location and enter a name for the exported JSON file.
5. Click 'Save'. 


-----------------------------------
Retrieve Automatic Content Archives
-----------------------------------

By default, Vircadia creates regular content archives of all active domains on the metaverse. This means that if you have a registered domain on the metaverse (either via a local server or DigitalOcean), then we have already created a backup of the content that is installed in your domain. These backup files are called *content archives*. 

To retrieve these backups: 

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Content Archives**.
3. Under 'Automatic Content Archives', locate the archive you would like to download.
4. From the Actions menu, click 'Download'.

When you upzip the content archive, locate models.json.gz. This file contains all of the assets in your domain, along with their properties.


-------------------------------
Create a Manual Content Archive
-------------------------------

The final method of exporting your content is to create a manual content archive of your domain. This is recommended if you want to:

* Deploy your content to multiple domains
* Share a copy of your custom content set with others
* Sell your environment on the Marketplace

To create a content archive and download it:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Content Archives**.
3. Under 'Manual Content Archives', click 'Generate New Archive'.
4. Enter a name for your archive and click 'Generate Archive'. It will appear just below the 'Generate New Archive' button. 
5. From the Actions menu, click 'Download'.

The content archive includes models.json.gz, along with other backup files. From here, you can upload your content archive to another domain, send it to others or upload it to the Marketplace.
