// midiTest.js
//
//  Created by Bruce Brown on 7/15/17.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

// info on midi protocol can be found here:
// https://www.midi.org/specifications/item/table-1-summary-of-midi-message

//DWORD 00000000 0vvvvvvv 0nnnnnnn 1sss cccc //  c:channel, s:status, n:note, v:velocity

const MIDI_SHIFT_STATUS = 4;
const MIDI_SHIFT_NOTE = 8;
const MIDI_SHIFT_VELOCITY = 16;

const MIDI_BYTE_MASK = 0x0FF;
const MIDI_STATUS_MASK = 0x0F0;
const MIDI_CHANNEL_MASK = 0x00F;

const MIDI_NOTE_OFF = 0x080;
const MIDI_NOTE_ON = 0x090;
const MIDI_POLYPHONIC_KEY_PRESSURE = 0x0a0;
const MIDI_CONTROL_CHANGE = 0x0b0;
const MIDI_PROGRAM_CHANGE = 0x0c0;
const MIDI_CHANNEL_PRESSURE = 0x0d0;
const MIDI_PITCH_BEND_CHANGE = 0x0e0;
const MIDI_SYSTEM_MESSAGE = 0x0f0;

var midiInDevice = "loopMIDI Port";
var midiOutDevice = "loopMIDI Port";
var midiInDeviceId = -1;
var midiOutDeviceId = -1;
var midiChannel = 1;
var midiInDeviceList = [];
var midiOutDeviceList = [];
const INPUT = false;
const OUTPUT = true;
const ENABLE = true;
const DISABLE = false;

var FREQUENCY = 5000;

var devel = true;
var wantMidiLoopbackTest = true;

// Status
var statusMap = [
	"0","1","2","3","4","5","6","7",// Not Used
	"Note Off",//8
	"Note On",//9
	"Polyphonic Key Pressure",//a
	"Control Change",//b Note = Controlers 1-119 Velocity = for buttons: 0:Off, 127:On. For knobs & faders 0-127
	"Program Change",//c
	"Channel Pressure",//d
	"Pitch Bend Change",//e 14 bit value so uses Note(LSB)+Velocity(MSB) 0x2000 being Center // Not Exposed
	"System Message"//f
];

// Special Controllers
var channelModeMap = [ // Special Control Change Controllers 120-127
	"All Sound Off",// Controller 120
	"Reset All Controllers",// Controller 121
	"Local Control",// Controller 122
	"All Notes Off",// Controller 123
	"Omni Mode Off",// Controller 124
	"Omni Mode On",// Controller 125
	"Mono Mode On (Poly Off) ",// Controller 126
	"Poly Mode On (Mono Off) "// Controller 127
];

function getMidiInputs(){
    midiInDeviceList = Midi.listMidiDevices(INPUT);
}

function getMidiOutputs(){
    midiOutDeviceList = Midi.listMidiDevices(OUTPUT);
}

function getMidiDeviceIds(){
    for (var i = 0; i < midiInDeviceList.length; i++){
        if (midiInDeviceList[i] == midiInDevice){
            midiInDeviceId = i;
        }
    }
    for (var i = 0; i < midiOutDeviceList.length; i++){
        if (midiOutDeviceList[i] == midiOutDevice){
            midiOutDeviceId = i;
        }
    }
}

// List Midi Input Devices
function listMidiInputs(){
    print("Input Devices:");
    for(var i = 0; i < midiInDeviceList.length; i++) {
        if(midiInDeviceList[i] == midiInDevice){
            print("(" + i + ")*" + midiInDeviceList[i]);
        } else {
            print("(" + i + ") " + midiInDeviceList[i]);
        };
    };
}

// List Midi ouput Devices
function listMidiOutputs(){
    print("Output Devices:");
    for(var i = 0; i < midiOutDeviceList.length; i++) {
        if(midiOutDeviceList[i] == midiOutDevice){
            print("(" + i + ")*" + midiOutDeviceList[i]);
        } else {        
            print("(" + i + ") " + midiOutDeviceList[i]);
    };  }
}

// Block Midi Device
function blockMidiDevice(){
		//Midi.blockMidiDevice("Device Name", OUTPUT);
		//Midi.blockMidiDevice("Device Name", INPUT);
}
+
// Unblock Midi Device
function unblockMidiDevice(){
		Midi.unblockMidiDevice(midiOutDevice, OUTPUT);
		Midi.unblockMidiDevice(midiInDevice, INPUT);
}	

// Play Midi Note
function playMidiNote(){
	Midi.playMidiNote(144, 35, 50);// Status,Note,Velocity
	if(devel){Midi.sendMidiMessage(2,0x9,33,100);
		}
}
function sendRawMidi(){
	Midi.sendRawDword(1253776);// DWORD 00000000 0vvvvvvv 0nnnnnnn 1sss cccc
}

function midiOutputTest(){
print("In Device #" + midiInDeviceId + " Out Device #" + midiOutDeviceId);
//		Midi.sendMidiMessage(Device, Channel, Type, Note, Velocity);  //  Channel (1-16), Type (8-15), Note (0-127), Velocity (0-127), //  Add DEVICE INDEX?
Midi.sendMidiMessage(midiOutDeviceId, 1, 9, 50, 100); // Note On
Midi.sendMidiMessage(midiOutDeviceId, 2, 8, 50, 0); // Note Off
Midi.sendMidiMessage(midiOutDeviceId, 3, 10, 50, 50); // Polyphonic Key Pressure
Midi.sendMidiMessage(midiOutDeviceId, 4, 11, 20, 127); // Control Change
Midi.sendMidiMessage(midiOutDeviceId, 5, 12, 123, 0); // Program Change
Midi.sendMidiMessage(midiOutDeviceId, 6, 13, 123, 0); // Channel Pressuer
Midi.sendMidiMessage(midiOutDeviceId, 7, 14, 123, 123);  // Pitch Bend Change
Midi.sendMidiMessage(midiOutDeviceId, 8, 15, 123, 123);  // System Message
}

function midiEventReceived(eventData) {
	if (devel){
		print("In Device #" + midiInDeviceId + " Out Device #" + midiOutDeviceId);
		print("Midi Message: " + toBinary(eventData.raw));
		print("Midi Decode: " + "(D#" + eventData.device + " Ch#" + eventData.channel + " T:" + statusMap[eventData.type] + " N:" + eventData.note + " V:" + eventData.velocity + " B:" + eventData.bend + " P:" + eventData.program + ")\r\n");
		if (wantMidiLoopbackTest){
			if (eventData.raw == 6566544){print("Test 1 Receieved on device #" + eventData.device)};	
			if (eventData.raw == 12929){print("Test 2 Receieved on device #" + eventData.device)};	
			if (eventData.raw == 3289762){print("Test 3 Receieved on device #" + eventData.device)};	
			if (eventData.raw == 8328371){print("Test 4 Receieved on device #" + eventData.device)};	
			if (eventData.raw == 31684){print("Test 5 Receieved on device #" + eventData.device)};	
			if (eventData.raw == 31701){print("Test 6 Receieved on device #" + eventData.device)};	
			if (eventData.raw == 8092646){print("Test 7 Receieved on device #" + eventData.device)};	
		}
	} else {
		var statusName = (MIDI_BYTE_MASK & (eventData.status >> MIDI_SHIFT_STATUS))
		print("Midi Status: " + statusMap[statusName] + "(Ch#" + ((MIDI_CHANNEL_MASK & eventData.status) + 1 + " N:" + eventData.note + " V:" + eventData.velocity + ")"));

	}
}

function midiHardwareResetReceieved(){
	print("MIDI RESET RECEIEVED");
	getMidiInputs();
	getMidiOutputs();
	getMidiDeviceId();
	unblockMidiDevice();

	//print("MIDI RESET RECEIEVED");
}

function midiConfig(){
	Midi.thruModeEnable(DISABLE);
	Midi.broadcastEnable(ENABLE);
	Midi.typeNoteOffEnable(ENABLE);
	Midi.typeNoteOnEnable(ENABLE);
	Midi.typePolyKeyPressureEnable(ENABLE);
	Midi.typeControlChangeEnable(ENABLE);
	Midi.typeProgramChangeEnable(ENABLE);
	Midi.typeChanPressureEnable(ENABLE);
	Midi.typePitchBendEnable(ENABLE);
	Midi.typeSystemMessageEnable(DISABLE);
	getMidiInputs();
	getMidiOutputs();
	getMidiDeviceId();
	unblockMidiDevice();
}

/** Convert a decimal number to binary **/

var toBinary = function(decNum){
    return parseInt(decNum,10).toString(2);
}
/** Convert a binary number to decimal **/

var toDecimal = function(binary) {
    return parseInt(binary,2).toString(10);
}

function scriptEnding() {
	if (wantMidiLoopbackTest) {
		Script.clearInterval(timer);
	}
}

midiConfig();
listMidiInputs();
listMidiOutputs();

if (wantMidiLoopbackTest){
	var timer = Script.setInterval (function () {
    	midiOutputTest();
	}, FREQUENCY);
}

if (devel){
	Midi.midiReset.connect(midiHardwareResetReceieved);
	Midi.midiMessage.connect(midiEventReceived);
} else {
	Midi.midiNote.connect(midiEventReceived);
}

Script.scriptEnding.connect(scriptEnding);