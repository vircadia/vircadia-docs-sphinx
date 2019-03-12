# Tutorial: Create a Purchase Button for Marketplace Sales

If you are selling items on the Marketplace, you can have a space in your domain where users can easily buy your items. This could be done with a display copy of your items, an image of your item, or a purchase button for users to click. 

**On This Page:**

- [Prerequisites](#prerequisites)
- [Get an Item's Marketplace ID](#get-an-items-marketplace-id)
- [Write a Purchase Item Script](#write-a-purchase-item-script)
- [Create an Entity to Use as a Button](#create-an-entity-to-use-as-a-button)
  
  
## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](create-entities)
- [Change How Entities Look](entity-appearance)
- [Define an Entity's Behavior](entity-behavior)
- [Get Started with Scripting](../../script/get-started-with-scripting)
- [Client Entity Scripts](../../script/client-entity-scripts)
- [Write Your Own Scripts](../../script/write-scripts)
- [Purchase Marketplace Items from Script](../../script/transfer-hfc-tutorial.html#purchase-marketplace-items)
  
## Get an Item's Marketplace ID
If you are putting up an item (in your domain) you have on sale in the Marketplace, you need to get the item's 'marketplaceID'. This unique identifier can be found when you view your Marketplace item in a browser window.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p> This tutorial lets you link to any item in the Marketplace, even those you don't own. If you link to another user's item, keep in mind that they will receive the proceeds from the sale.</p>
</div>

1. In your browser of choice, navigate to [www.highfidelity.com/marketplace](https://www.highfidelity.com/marketplace).
2. Locate the item.
3. Copy the multi-number identifier at the end of the URL in the address bar of your browser. This is your item's 'marketplaceID'.

## Write a Purchase Item Script

To make our button work and actually sell an item, we need to attach a client entity script to it. In this example, [buy-item.js](https://hifi-scripting-101.glitch.me/entity-client-script-buy-item.js), the script opens a specified Marketplace page. You can use it as-is, modify it, or [write your own script](../../script/write-scripts) to suit your needs.

The buy-item.js script we've used:
+ Uses High Fidelity's [JavaScript API](https://apidocs.highfidelity.com/) to determine when a user clicks with the mouse or triggers the entity using hand controllers.
+ Opens the user's Tablet to the purchase page if there is a valid 'marketplaceID' specified in the 'userdata' field of the entity that is clicked or triggered.
  
## Create an Entity to Use as a Button

The entity you create for your button has to be [triggerable](entity-behavior.html#set-an-entity-to-trigger-scripts) so that the script can detect when you trigger or push the button with your hand controllers.


1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](create-entities) to be used as a button. This can be a 3D model, cube, or sphere entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Select 'Code' from the drop down menu in the 'User Data' property. Add the following line, replacing 'YOUR_MARKETPLACE_ID_HERE' with the 'marketplaceID' that you copied in the first step of the tutorial:
	```JSON
	{'marketplaceID' : 'YOUR_MARKETPLACEID_HERE'}
	```

5. Next to 'Script', paste the script URL. In this case, it is '[buy-item.js](https://hifi-scripting-101.glitch.me/entity-client-script-buy-item.js)'.
5. Scroll down to 'Triggerable' and ensure that 'Triggerable' is selected.
6. When you close the **Create** app, test your script by clicking or triggering the button to  open the item's purchase page. If a user has already purchased the item, they will be shown a page that allows them to re-purchase another copy or view it in their **Inventory**.

**See Also**

- [Create New Entities](create-entities)
- [Change How Entities Look](entity-appearance)
- [Define an Entity's Behavior](entity-behavior)
- [Get Started with Scripting](../../script/get-started-with-scripting)
- [Client Entity Scripts](../../script/client-entity-scripts)
- [Write Your Own Scripts](../../script/write-scripts)
- [Interact with Your Environment](../../explore/interact)

