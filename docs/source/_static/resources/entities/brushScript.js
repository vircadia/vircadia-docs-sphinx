/* globals Entities */
(function(){
  var COLOR_NAME = "Paint-Color";
  this.collisionWithEntity = function(myID, theirID, collision){
    var collisionProperties = Entities.getEntityProperties(theirID, ['name', 'color']);
    if (collisionProperties.name === COLOR_NAME) {
      Entities.editEntity(myID, {'color' : collisionProperties.color });
    } else {
        if (collisionProperties.name.indexOf('brush') === -1 && 
            collisionProperties.name.indexOf('Palette') === -1 && 
            collisionProperties.name.indexOf('Parent') === -1)  {
              Entities.editEntity(theirID, {'color' : Entities.getEntityProperties(myID, 'color').color});
        }
    }  
  }
});