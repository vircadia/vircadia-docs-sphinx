# Socialize with Others

High Fidelity is all about the people you meet and the experiences you have with them. High Fidelity enables people connected by interest, community, and friendship to come together from anywhere in the world.

**On This Page:**
* [Make Connections and Friends](#make-connections-and-friends)
	* [The People App](#the-people-app)
	* [Your Privacy Bubble](#your-privacy-bubble)
* [Attend Live Events](#attend-live-events)
* [Express Yourself](#express-yourself)
	* [The Emote App](#the-emote-app)
* [Give and Receive Gifts](#give-and-receive-gifts)
	* [Send HFC to Others](#send-hfc-to-others)
	* [Send Purchased Items to Others](#send-purchased-items-to-others)
	* [Create a Coupon](#create-a-coupon)

## Make Connections and Friends

In High Fidelity, you can establish a connection with someone else by shaking hands with them. With your hand controllers, place your hands near each other and hold the grip button. Desktop users can press and hold <kbd class="keyboard">X</kbd> on their keyboard. 

Once you make a connection with someone, they will appear under Connections in the [**People** app](#the-people-app). You will also appear on their list of connections. You will be able to see where they are in the metaverse, and you can travel to them at any time. 

To mark a connection as a friend, check the box next to their name in the People app.

![](_images/make-connection.png)

### The People App

The People app provides a set of tools that help users manage their interactions with people in the metaverse. It gives you a list of the people nearby (in the same domain as you), and gives you easy access to all of your connections. From the People app, you can: 

* Change your availability
* Toggle your visibility between friends, connections, and the entire community
* Set the master volume for the domain you're in
* Teleport directly to a friend's location  

![](_images/people-nearby.png)

### Your Privacy Bubble

You can enable a privacy bubble that protects your personal space in the metaverse. When it is enabled, other people will disappear if they get too close to you. Your privacy bubble is disabled by default. To enable it, pull up your tablet or HUD and click **Bubble**.

![](_images/privacy-bubble.png)

## Attend Live Events

One of the great things about virtual reality is that you can attend events. High Fidelity regularly hosts events such as workshops, lectures on VR, and town hall meetings to meet our team. Click here to [view all upcoming events](https://tockify.com/hifieventscalendar/agenda), Events are a great place to meet others and share experiences with others around the world.

To attend an event, simply go to the hosted domain at the time of the event.

## Express Yourself

There are many ways you can express yourself in High Fidelity, such as animating the mouth of your avatar or using gestures in the **Emote** App. 

By default, all avatars will use a standard set of animations, such as your eyes blinking or your mouth opening and closing as you talk. When you are using a VR controller, your avatar will automatically mimic your hand gestures and movements. 

### The Emote App

The Emote app is a way for desktop users to express themselves without using VR controllers. With this app, you can display feelings by: crying, acting surprised, dancing, cheering, waving, falling, pointing, clapping, sitting, or showing love. 

![](_images/emote-app.png)

## Give and Receive Gifts

Just like in real life, you can give money or presents to your friends in High Fidelity. You may wish to gift an item to a friend, send money to a connection, have a VIP zone in your domain, or play a poker game with your friends. 

With the Commerce API, you can also award money or items using a coupon. A _coupon_ is a way to send HFC or items to someone at a later time, even when you are not logged in to High Fidelity. For example, you can create a coupon to award the winner of a trivia game 250 HFC, or to give someone a soda when they buy something from a vending machine.

### Send HFC to Others

To send money to a connection or someone nearby:
1. In Interface, pull up your tablet or HUD and go to **Inventory**.
2. In the **Inventory** app, click 'Send Money'. <br />![](_images/send-money.PNG)  
3. Send money to one of your connections or even someone nearby in the same domain.  
	* If you want to send it to one of your connections, click 'Connections; and choose the recipient from the list.
	* If you want to send it to someone nearby, click 'Someone Nearby' and choose your recipient by triggering or clicking on someone nearby to select them. <br />![](_images/nearby.PNG)
4. Add the amount you wish to send. This amount should be less than or equal to your HFC balance. 
5. You can add an optional public message. Click 'Submit'. 
6. A window pops up confirming that your money has been sent. 

### Send Purchased Items to Others

After you [buy something from the Marketplace](shop#shopping-the-marketplace), you can give it to a connection or someone nearby. To do so: 
1. In Interface, pull up your tablet or HUD and go to **Inventory**.
2. In the Inventory app, click 'Items'. <br />![](_images/items-tab.png)
3. Scroll to the item you'd like to give and click on the menu. <br />![](_images/item-menu.png)
4. Select 'Gift'. <br />![](_images/gift-item.png)
5. Send the item to one of your connections or even someone nearby in the same domain. 
	* If you want to send it to one of your connections, click 'Connections' and choose the recipient from the list.
	* If you want to send it to someone nearby, click 'Someone Nearby' and choose your recipient by triggering or clicking on someone nearby to select them. <br />![](_images/nearby.PNG)
6. You can add an optional public message. Click 'Submit'. 
7. A window pops up confirming that your item has been sent.  

>>>>>When you send an item to another user, it is removed from your **Inventory**.

### Create a Coupon
You can create a coupon when you want to send money or an item to someone at a later time, even when you are not logged in to High Fidelity.  
>>>>> Currently, you can only use a coupon in a script. You will not be able to redeem a coupon anywhere in Interface.

1. In Interface, pull up your tablet or HUD and go to **Inventory**.
2. Choose whether you'd like to later send HFC or an item.
	* If you want to send HFC, click 'Send Money'.
	* If you want to send an item, click 'Items' and scroll to the item you'd like to give. Click on the item's menu and choose 'Gift'.
3. Select 'Create Coupon'.
4. Enter an optional public message explaining the purpose of the coupon. 
5. The Tablet will now display a window with the 'Authorization ID' and 'Coupon ID'. Copy both these values on your computer. Click 'Close'.
6. Include the copied values in a [script where another user receives the HFC or item](../script/transfer-hfc-tutorial).

![](_images/create-coupon.png)

**Example: Use a Coupon to Hold a Raffle**  

Say you want to pre-authorize 10 of your High Fidelity Coins to be paid out to a user who wins a raffle that you host. In this example, [curl](https://curl.haxx.se/) is used to perform the redemption. But you can redeem a pre-authorized transfer using any script or tool that can perform `HTTP PUT` requests, such as High Fidelity Interface's `request` JavaScript module or a simple PHP form on a website.

1. [Create a coupon](#create-a-coupon) to get an 'Authorization ID' and 'Coupon ID' value pair associated with a 10-HFC Pre-Authorized Money transfer.
2. Copy and paste the 'Authorization ID' and 'Coupon ID' to a text file on your computer.
3. Click 'Close', then 'I'm All Set'.
4. Hold your raffle! In this example, a user with username `steve` has won the raffle.
5. Use the following `curl` command from the command line to dispense the money authorized in (1) to username `steve`:
   `curl -X PUT -d authorization_id=<authorization ID from 1> -d coupon_id=<coupon ID from 1> -d username=steve https://highfidelity.com/api/v1/commerce/redeem`

**See Also**

+ [Bank and Shop](shop)
+ [Tutorial: Transfer Money and Items](../script/transfer-hfc-tutorial)