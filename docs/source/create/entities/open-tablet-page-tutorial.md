# Tutorial: Open Web Page with Entities

Entities are often used to add objects to your environment. However, you can do so much more with this when you use scripting to define their behavior. In this tutorial, we will use an entity as a button to open a web page on your tablet. You can use this tutorial to do things like directing your visitors to specific Marketplace items for purchase.

**On This Page:**

- [Prerequisites](#prerequisites)
- [Write a Script to Open a Web Page](#write-a-script-to-open-a-web-page)
- [Create an Entity to Use as a Button](#create-an-entity-to-use-as-a-button)

## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)

## Write a Script to Open a Web Page

The script used here opens a web page on the Tablet when a user clicks or triggers an entity. In this example, we've written a client entity script that opens the Marketplace web page when an entity/item is triggered. The script looks for the URL in the 'User data' property of the entity and injects the Marketplace code into the link. This allows the user who triggered the script to purchase the item without having to go to the **Market** app on their Tablet or HUD. 

You can get the script [here](https://open-tablet-to-page.glitch.me/openTabletPageButton.js). 


## Create an Entity to Use as a Button

The entity you create for your button has to be [triggerable](entity-behavior.html#set-an-entity-to-trigger-scripts) so that the script can detect when you trigger or push the button with your hand controllers.

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](create-entities) to be used as a button. This can be a 3D model, cube, or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Paste the following JSON data into the 'User data' field for your entity:
	```
	{
	  "url": "your_marketplace_url_in_quotes_here",
	  "grabbableKey": {
	    "grabbable": false,
	    "triggerable": true
	  }
	}
	```

5. Next to 'Script', paste the script URL. In this case, it is [openTabletPageButton.js](https://open-tablet-to-page.glitch.me/openTabletPageButton.js).
6. Scroll down and ensure that 'Triggerable' is selected.
7. After you exit the **Create** app, test your script by clicking or triggering the button to open the Marketplace web page for your item.

![](_images/open-page.GIF)

**See Also**

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)
- [Interact with Your Environment](../../explore/interact.html)