//
//  Created by Luis Cuenca on 3/8/19
//  Copyright 2018 High Fidelity, Inc.
//
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
/* jslint bitwise: true */
/* global Script, MyAvatar, Tablet
*/

(function () {
    // Adding some additional time befor load fix an issue when updating the debugging overlays
    var MS_AFTER_LOADING = 500;
    Script.setTimeout(function() {
        Script.registerValue("FLOWAPP", true);

        var TABLET_BUTTON_NAME = "FLOW";
        var HTML_URL = Script.resolvePath("./flowAppCpp.html");
        
        var SHOW_AVATAR = true;
        var SHOW_DEBUG_SHAPES = false;
        var SHOW_SOLID_SHAPES = false;
        
        var USE_COLLISIONS = false;
        var IS_ACTIVE = false;
        
        var MSG_DOCUMENT_LOADED = 0;
        var MSG_JOINT_INPUT_DATA = 1;
        var MSG_COLLISION_DATA = 2;
        var MSG_COLLISION_INPUT_DATA = 3;
        var MSG_DISPLAY_DATA = 4;
        var MSG_CREATE = 5;

        var avatarScale = MyAvatar.getSensorToWorldScale();
        
        var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
        var tabletButton = tablet.addButton({
            text: TABLET_BUTTON_NAME,
            icon: Script.resolvePath("./flow-i.svg"),
            activeIcon: Script.resolvePath("./flow-a.svg")
        });
        
        var FlowDebug = function() {
            var self = this;
            this.debugLines = {};
            this.debugSpheres = {};
            this.debugCubes = {};
            this.showDebugShapes = false;
            this.showSolidShapes = false;
            
            this.setDebugCube = function(cubeName, cubePosition, cubeRotation, cubeDimensions, shapeColor, forceRendering) {
                var doRender = self.showDebugShapes || forceRendering;
                if (!doRender) {
                    return;
                }
                var position = cubePosition ? cubePosition : {x: 0, y: 0, z: 0};
                var rotation = cubeRotation ? cubeRotation : {x: 0, y: 0, z: 0, w: 0};
                var dimensions = cubeDimensions ? cubeDimensions : {x: 1, y: 1, z: 1};
                var color = shapeColor !== undefined ? shapeColor : { red: 0, green: 255, blue: 255 };
                if (self.debugCubes[cubeName] !== undefined) {
                    Overlays.editOverlay(self.debugCubes[cubeName], {
                        position: position,
                        rotation: rotation,
                        dimensions: dimensions,
                        color: color,
                        solid: self.showSolidShapes,
                        visible: true
                    });
                } else {
                    self.debugCubes[cubeName] = Overlays.addOverlay("cube", {
                        position: position,
                        rotation: rotation,
                        dimensions: dimensions,
                        color: color,
                        solid: self.showSolidShapes,
                        visible: true
                    });
                }
            };
            
            this.setDebugLine = function(lineName, startPosition, endPosition, shapeColor, width, forceRendering) {
                var doRender = self.showDebugShapes || forceRendering;
                if (!doRender) {
                    return;
                }
                var start = startPosition ? startPosition : {x: 0, y: 0, z: 0};
                var end = endPosition ? endPosition : {x: 0, y: 1, z: 0};
                var color = shapeColor ? shapeColor : { red: 0, green: 255, blue: 255 };
                if (self.debugLines[lineName] !== undefined) {
                    Overlays.editOverlay(self.debugLines[lineName], {
                        color: color,
                        start: start,
                        end: end,
                        visible: true,
                        lineWidth: width
                    });
                } else {
                    self.debugLines[lineName] = Overlays.addOverlay("line3d", {
                        color: color,
                        start: start,
                        end: end,
                        visible: true,
                        lineWidth: width
                    });
                }
            };
            
            this.setDebugSphere = function(sphereName, pos, diameter, shapeColor, forceRendering) {
                var doRender = self.showDebugShapes || forceRendering;
                if (!doRender) {
                    return;
                }
                var DEFAULT_SPHERE_DIAMETER = 0.02;
                var scale = diameter ? diameter : DEFAULT_SPHERE_DIAMETER;
                var color = shapeColor ? shapeColor : { red: 255, green: 0, blue: 255 };
                if (self.debugSpheres[sphereName] !== undefined) {
                    Overlays.editOverlay(self.debugSpheres[sphereName], {
                        color: color,
                        position: pos,
                        scale: {x: scale, y: scale, z: scale},
                        solid: self.showSolidShapes,
                        visible: true
                    });
                } else {
                    self.debugSpheres[sphereName] = Overlays.addOverlay("sphere", {
                        color: color,
                        position: pos,
                        scale: {x: scale, y: scale, z: scale},
                        solid: self.showSolidShapes,
                        visible: true
                    });
                }
            };
            
            this.deleteSphere = function(name) {
                Overlays.deleteOverlay(self.debugSpheres[name]);
                self.debugSpheres[name] = undefined;
            };
            
            this.deleteLine = function(name) {
                Overlays.deleteOverlay(self.debugLines[name]);
                self.debugLines[name] = undefined;
            };
            
            this.deleteCube = function(name) {
                Overlays.deleteOverlay(self.debugCubes[name]);
                self.debugCubes[name] = undefined;
            };
            
            this.cleanup = function() {
                for (var lineName in self.debugLines) {
                    if (lineName !== undefined) {
                        self.deleteLine(lineName);
                    }
                }
                for (var sphereName in self.debugSpheres) {
                    if (sphereName !== undefined) {
                        self.deleteSphere(sphereName);
                    }
                }
                for (var cubeName in self.debugCubes) {
                    if (cubeName!== undefined) {
                        self.deleteCube(cubeName);
                    }
                }
                self.debugLines = {};
                self.debugSpheres = {};
                self.debugCubes = {};
            };
            
            this.setVisible = function(isVisible) {
                self.showDebugShapes = isVisible;
                for (var lineName in self.debugLines) {
                    if (lineName !== undefined) {
                        Overlays.editOverlay(self.debugLines[lineName], {
                            visible: isVisible
                        });
                    }
                }
                for (var sphereName in self.debugSpheres) {
                    if (sphereName !== undefined) {
                        Overlays.editOverlay(self.debugSpheres[sphereName], {
                            visible: isVisible
                        });
                    }
                }
            };
            
            this.setSolid = function(isSolid) {
                self.showSolidShapes = isSolid;
                for (var lineName in self.debugLines) {
                    if (lineName !== undefined) {
                        Overlays.editOverlay(self.debugLines[lineName], {
                            solid: isSolid
                        });
                    }
                }
                for (var sphereName in self.debugSpheres) {
                    if (sphereName !== undefined) {
                        Overlays.editOverlay(self.debugSpheres[sphereName], {
                            solid: isSolid
                        });
                    }
                }
            };       

        };
        
        var flowData, initActive, initColliding, initDebugging;
        updateFlowData(true);
        var collisionDebug = new FlowDebug();
        var jointDebug = new FlowDebug();
        
        collisionDebug.setVisible(SHOW_DEBUG_SHAPES);
        collisionDebug.setSolid(SHOW_SOLID_SHAPES);
        
        MyAvatar.setEnableMeshVisible(SHOW_AVATAR);
        jointDebug.setVisible(SHOW_DEBUG_SHAPES);
        jointDebug.setSolid(SHOW_SOLID_SHAPES);
            
        var shown = false;
        
        function manageClick() {
            if (shown) {
                MyAvatar.useFlow(initActive, initColliding);
                initDebugging = SHOW_DEBUG_SHAPES;
                if (SHOW_DEBUG_SHAPES) {
                    toggleDebugShapes();
                }
                tablet.gotoHomeScreen();
            } else {
                updateFlowData();
                tablet.gotoWebScreen(HTML_URL);
            }
        }
        
        tabletButton.clicked.connect(manageClick);
      
        function onScreenChanged(type, url) {     
            console.log("Screen changed");
            if (type === "Web" && url === HTML_URL) {
                tabletButton.editProperties({isActive: true});
                if (!shown) {
                    // hook up to event bridge
                    tablet.webEventReceived.connect(onWebEventReceived);
                }
                shown = true;
            } else {
                tabletButton.editProperties({isActive: false});
                if (shown) {
                    // disconnect from event bridge
                    tablet.webEventReceived.disconnect(onWebEventReceived);
                }
                shown = false;
            }
        }
        
        var toggleAvatarVisible = function() {
            SHOW_AVATAR = !SHOW_AVATAR;
            MyAvatar.setEnableMeshVisible(SHOW_AVATAR);
        };
        
        var toggleDebugShapes = function() {
            SHOW_DEBUG_SHAPES = !SHOW_DEBUG_SHAPES;
            if (USE_COLLISIONS) {
                collisionDebug.setVisible(SHOW_DEBUG_SHAPES);
            }
            jointDebug.setVisible(SHOW_DEBUG_SHAPES);
        };
        
        var toggleSolidShapes = function() {
            SHOW_SOLID_SHAPES = !SHOW_SOLID_SHAPES;
            collisionDebug.setSolid(SHOW_SOLID_SHAPES);
            jointDebug.setSolid(SHOW_SOLID_SHAPES);
        };
        
        var toggleCollisions = function() {
            USE_COLLISIONS = !USE_COLLISIONS;
            if (USE_COLLISIONS && SHOW_DEBUG_SHAPES) {
                collisionDebug.setVisible(true);
            } else {
                collisionDebug.setVisible(false);
            }
            MyAvatar.useFlow(IS_ACTIVE, USE_COLLISIONS);
        };
        
        var getDisplayData = function() {
            return {"avatar": SHOW_AVATAR, 
                "collisions": USE_COLLISIONS, 
                "debug": SHOW_DEBUG_SHAPES, 
                "solid": SHOW_SOLID_SHAPES};
        };
        
        var jointNames = MyAvatar.getJointNames();
        
        function roundFloat(number, decimals) {
            var DECIMALS_MULTIPLIER = 10;
            var multiplier = Math.pow(DECIMALS_MULTIPLIER, decimals);
            var rounded = Math.round(number * multiplier);
            return rounded / multiplier;
        }
        
        function roundVector(vector, decimals) {
            return {x: roundFloat(vector.x, decimals), y: roundFloat(vector.y, decimals), z: roundFloat(vector.z, decimals)};
        }

        function roundDataValues(decimals) {
            var collisions = flowData.collisions;
            var physics = flowData.physics;
            Object.keys(collisions).forEach(function(key) {
                var data = collisions[key];
                data.radius = roundFloat(data.radius, decimals);
                data.offset = roundVector(data.offset, decimals);                
            });
            Object.keys(physics).forEach(function(key) {
                var data = physics[key];
                data.damping = roundFloat(data.damping, decimals);
                data.delta = roundFloat(data.delta, decimals);
                data.gravity = roundFloat(data.gravity, decimals);
                data.inertia = roundFloat(data.inertia, decimals);
                data.radius = roundFloat(data.radius, decimals);
                data.stiffness = roundFloat(data.stiffness, decimals);               
            });
        }

        function updateFlowData(catchInitValues) {
            flowData = MyAvatar.getFlowData();
            if (typeof(flowData) !== "object" || typeof(flowData.collisions) !== "object") {
                return;
            }
            var ROUND_DECIMALS = 4;
            var collisionJoints = Object.keys(flowData.collisions);
            var inverseScale = 1.0 / avatarScale;
            for (var i = 0; i < collisionJoints.length; i++) {
                var collision = flowData.collisions[collisionJoints[i]];
                collision.radius *= inverseScale;
                collision.offset = Vec3.multiply(collision.offset, inverseScale);
            }
            roundDataValues(ROUND_DECIMALS);
            IS_ACTIVE = flowData.active;
            USE_COLLISIONS = flowData.colliding;
            if (catchInitValues) {
                initActive = flowData.active;
                initColliding = flowData.colliding;
            }
        }
        
        function onWebEventReceived(msg) {
            var message = JSON.parse(msg);
            switch (message.type) {
                case MSG_JOINT_INPUT_DATA: {
                    flowData.physics[message.group][message.name] = message.value;
                    MyAvatar.useFlow(IS_ACTIVE, USE_COLLISIONS, flowData.physics, flowData.collisions);
                    break;
                }
                case MSG_COLLISION_INPUT_DATA: {
                    var value = message.name === "offset" ? {x: 0.0, y: message.value, z: 0.0} : message.value;
                    flowData.collisions[message.group][message.name] = value;
                    MyAvatar.useFlow(IS_ACTIVE, USE_COLLISIONS, flowData.physics, flowData.collisions);
                    break;
                }
                case MSG_DISPLAY_DATA: {
                    switch (message.name) {
                        case "collisions":
                            toggleCollisions();
                            break;
                        case "debug":
                            toggleDebugShapes();
                            break;
                        case "solid":
                            toggleSolidShapes();
                            break;
                        case "avatar":
                            toggleAvatarVisible();
                            break;
                    }
                    break;
                }
                case MSG_DOCUMENT_LOADED: {
                    MyAvatar.useFlow(true, true);
                    updateFlowData();
                    if (initDebugging && !SHOW_DEBUG_SHAPES) {
                        toggleDebugShapes();
                    }
                    createHTMLMenu();
                    break;
                }
                case MSG_COLLISION_DATA: {
                    switch (message.name) {
                        case "add":
                            var collisionData = {"type": "sphere", "radius": 0.05, "offset": {"x": 0.0, "y": 0.0, "z": 0.0}};
                            flowData.collisions[message.value] = collisionData;
                            MyAvatar.useFlow(IS_ACTIVE, USE_COLLISIONS, flowData.physics, flowData.collisions);
                            updateFlowData();
                            tablet.emitScriptEvent(JSON.stringify({
                                "type": MSG_COLLISION_DATA, 
                                "name": message.value,  
                                "data": collisionData
                            }));
                            break;
                        case "remove":
                            var jointName = message.value;
                            collisionDebug.deleteSphere(jointName + "_col");
                            if (flowData.collisions[jointName] !== undefined) {
                                delete flowData.collisions[jointName];
                                MyAvatar.useFlow(IS_ACTIVE, USE_COLLISIONS, flowData.physics, flowData.collisions);
                                updateFlowData();
                            }
                            break;
                    }
                    break;
                }
            }
        }
        
        tablet.screenChanged.connect(onScreenChanged);
        
        function createHTMLMenu() {
            jointNames = MyAvatar.getJointNames();
            tablet.emitScriptEvent(JSON.stringify(  
                {
                    "type": MSG_CREATE, 
                    "data": {
                        "display": getDisplayData(), 
                        "group": flowData.physics, 
                        "collisions": flowData.collisions,
                        "joints": jointNames
                    }
                }  
            ));
        }
        
        function shutdownTabletApp() {
            MyAvatar.useFlow(initActive, initColliding);
            tablet.removeButton(tabletButton);
            if (shown) {
                tablet.webEventReceived.disconnect(onWebEventReceived);
                tablet.gotoHomeScreen();
            }
            tablet.screenChanged.disconnect(onScreenChanged);
        }
            
        MyAvatar.skeletonChanged.connect(function() {
            var MS_AFTER_AVATAR_UPDATE = 200;
            collisionDebug.cleanup();
            jointDebug.cleanup();
            Script.setTimeout(function() {
                jointNames = MyAvatar.getJointNames();
                avatarScale = MyAvatar.getSensorToWorldScale();
                updateFlowData(true);
                if (shown) {
                    manageClick();
                }
            }, MS_AFTER_AVATAR_UPDATE);
        });

        MyAvatar.scaleChanged.connect(function() {
            avatarScale = MyAvatar.getSensorToWorldScale();
        });
        
        Script.update.connect(function() {
            if (IS_ACTIVE) {
                var groupData = flowData.physics;
                var collisionData = flowData.collisions;
                var threads = flowData.threads;
                var groups = Object.keys(groupData);
                var flowPositions = Array(jointNames.length);
                var flowCollisionColors = Array(jointNames.length);
                var collidingJoints = MyAvatar.getCollidingFlowJoints();
                for (var i = 0; i < groups.length; i++) {
                    var group = groups[i];
                    var data = groupData[group];
                    for (var j = 0; j < data.jointIndices.length; j++) {
                        var index = data.jointIndices[j];
                        var name = jointNames[index];
                        var position = MyAvatar.getJointPosition(index);
                        flowPositions[index] = position;
                        var colliding = collidingJoints.indexOf(index) > -1;
                        var color = { red: 255, green: 255, blue: 0 };
                        if (colliding) {
                            color.green = 0;
                        }
                        flowCollisionColors[index] = color;
                        var radius = 2.0 * avatarScale * data.radius;
                        jointDebug.setDebugSphere(name + "_flow", position, radius, color);
                    }
                }
                var names = Object.keys(collisionData);
                for (i = 0; i < names.length; i++) {
                    name = names[i];
                    index = collisionData[name].jointIndex;
                    
                    var offset = Vec3.multiply(collisionData[name].offset, avatarScale);
                    radius = avatarScale * collisionData[name].radius;
                    position = MyAvatar.jointToWorldPoint(offset, index);
                    collisionDebug.setDebugSphere(name + "_col", position, 2 * radius, {red: 200, green: 10, blue: 50});
                }
                var threadKeys = Object.keys(threads);
                for (i = 0; i < threadKeys.length; i++) {
                    var thread = threads[threadKeys[i]];
                    for (j = 1; j < thread.length; j++) {
                        var index1 = thread[j-1];
                        var index2 = thread[j];
                        if (flowPositions[index1] !== undefined && flowPositions[index2] !== undefined) {
                            var lineName = jointNames[index1] + "_line";
                            color = flowCollisionColors[index1];
                            var DEFAULT_LINE_WIDTH = 0.004;
                            var lineWidth = DEFAULT_LINE_WIDTH * avatarScale;
                            jointDebug.setDebugLine(lineName, flowPositions[index1], flowPositions[index2], color, lineWidth);
                        }
                    }
                }
            }
        });
        
        Script.scriptEnding.connect(function () {
            collisionDebug.cleanup();
            jointDebug.cleanup();
            shutdownTabletApp();
        });
    }, MS_AFTER_LOADING);
    
}());