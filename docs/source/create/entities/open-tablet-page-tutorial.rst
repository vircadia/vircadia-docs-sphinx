#####################################
Tutorial: Open Web Page with Entities
#####################################

Entities are often used to add objects to your environment. However, you can do so much more with this when you use scripting to define their behavior. In this tutorial, we will use an entity as a button to open a web page on your tablet. You can use this tutorial to do things like directing your visitors to an external shop for purchasing an item.

.. contents:: On This Page
    :depth: 2

-------------
Prerequisites
-------------

Consider getting familiar with the following concepts before starting this tutorial:

- `Create New Entities <create-entities>`_
- `Change How Entities Look <entity-appearance>`_
- `Define an Entity's Behavior <entity-behavior>`_
- `Get Started with Scripting <../../script/get-started-with-scripting>`_
- `Client Entity Scripts <../../script/client-entity-scripts>`_
- `Write Your Own Scripts <../../script/write-scripts>`_

---------------------------------
Write a Script to Open a Web Page
---------------------------------

The script used here opens a web page on the Tablet or the external web browser when a user clicks or triggers an entity. In this example, we've written a client entity script that opens the Vircadia documentation when an entity/item is triggered. The script looks for the URL in the 'User data' property of the entity.

You can get the script `here <https://vircadia-content-public.s3.amazonaws.com/Bazaar/Scripts/clickToOpenBrowser.js>`_.

-----------------------------------
Create an Entity to Use as a Button
-----------------------------------

The entity you create for your button has to be `triggerable <entity-behavior.html#set-an-entity-to-trigger-scripts>`_ so that the script can detect when you trigger or push the button with your hand controllers.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. `Create an entity <create-entities>`_ to be used as a button. This can be a 3D model, cube, or sphere entity.
3. Go to the 'Properties' tab at the top and down to the 'Behavior' tab on the left of the window.
4. Set it as 'Triggerable'.
5. Next go to the 'Script' tab and paste the script URL. In this case, it is `clickToOpenBrowser.js <https://vircadia-content-public.s3.amazonaws.com/Bazaar/Scripts/clickToOpenBrowser.js>`_.
6. Paste the following JSON data into the 'User data' field for your entity:

.. code-block:: json

  {
    "useConfirmDialog": true,
    "confirmDialogMessage": "Are you sure you want to open this link?",
    "url": "https://docs.vircadia.dev/",
    // options are "interface" and "browser"
    // "interface" opens an overlay, "browser" opens the OS' external browser.
    "openIn": "interface",
    "dimensions": {
      "width": 1600,
      "height": 900
    }
  }

7. After you exit the **Create** app, test your script by clicking or triggering the button to open the web page.

**See Also**

+ :doc:`Create New Entities <create-entities>`
+ :doc:`Change How Entities Look <entity-appearance>`
+ :doc:`Define an Entity's Behavior <entity-behavior>`
+ :doc:`Get Started with Scripting <../../script/get-started-with-scripting>`
+ :doc:`Client Entity Scripts <../../script/client-entity-scripts>`
+ :doc:`Write Your Own Scripts <../../script/write-scripts>`
+ :doc:`Interact with Your Environment <../../explore/interact>`
