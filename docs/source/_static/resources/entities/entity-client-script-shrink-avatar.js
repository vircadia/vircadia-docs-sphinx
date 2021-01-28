// entity-client-script-shrink-avatar.js
//
// This script is an example of an entity client script in High Fidelity
// To use this script, paste it into the 'script' property text box while
// in Create mode. This script makes your avatar shrink when you click or trigger on it.
// You must enable "Triggerable" on the entity.
//
// Copyright 2019 High Fidelity
// Licensed under the Apache 2.0 License
// 
/* globals Entities, MyAvatar */
(function() {
  
  // We first store a reference to the entity that this script is on
  var _selfEntityID;
  
  // The scale to shrink to on click
  var size = 0.1;
  
  // A function that sets our avatar scale to the size specified in the 'size' variable
  function shrinkAvatar() {
    MyAvatar.scale = size;
  };
  
  // The preload function fires whenever a client first loads the entity and this
  // script. The reference to the entityID that this script is on is passed in as
  // a parameter, which can be stored and used elsewhere in the script.
  this.preload = function(entityID) {
    _selfEntityID = entityID;
  }
  
  // We connect the mousePressOnEntity signal to call our color change function 
  this.mousePressOnEntity = function() {
    shrinkAvatar();
  };
  
  // We connect the stopFarTrigger signal to call our color change function
  this.stopFarTrigger = function() {
    shrinkAvatar();
  };
})