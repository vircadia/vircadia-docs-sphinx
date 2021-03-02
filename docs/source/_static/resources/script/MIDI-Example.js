// MIDI-Example.js
//
//  Created by Bruce Brown on 12/27/17.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

/*
Midi API (Windows only at this time)
DWORD 00000000 0vvvvvvv 0nnnnnnn 1sss cccc
c:channel, s:status, n:note, v:velocity

The note and velocity fields are used for passing data for the various
status types.

Methods: 
	Midi.sendMidiMessage(Device, Channel, Type, Note, Velocity);
		Device #, Channel (1-16), Type (8-15), Note (0-127), Velocity (0-127)
	Midi.sendRawMessage(Device, Raw);
		Sends a raw midi message (DWORD)
	Midi.playMidiNote(Status, Note, Velocity);
		Legacy
	Midi.listMidiDevices(bool output = true);
		returns string array of ALL midi devices.

    Midi Routing:
		Note that blocking/unblocking a device will change the device
		list order:
	Midi.blockMidiDevice(QString, bool output = true);
		block midi device by name,true=Midi out, false = midi in
	Midi.unblockMidiDevice(QString, bool output = true);
		unblock midi device by name,true=Midi out, false = midi in
	Midi.BroadcastEnable(bool enable = true));
		(default = disable) broadcast to all unblocked devices except the
		"Microsoft GS Wavetable Synthesizer
	Midi.thruModeEnable(bool enable = true));
		(default disable) midi Thru Mode

	Filter, Types we want to receive:
		Midi.typeNoteOffEnable(bool enable = true);
		Midi.typeNoteOnEnable(bool enable = true);
		Midi.typePolyKeyPressureEnable(bool enable = true);
		Midi.typeControlChangeEnable(bool enable = true);
		Midi.typeProgramChangeEnable(bool enable = true);
		Midi.typeChanPressureEnable(bool enable = true);
		Midi.typePitchBendEnable(bool enable = true);
		Midi.typeSystemMessageEnable(bool enable = true );

Events: 
	Midi.midiReset: Hardware Changed
	Midi.midiNote:  Legacy, Received Midi Message
		eventData.status
			(Still channel+status) //Legacy
		eventData.note
			note/Controller number (0-127)
		eventData.velocity
			velocity/controller value (0-127)

	Midi.midiMessage: Received Midi Message
			eventData.device
				device number
			eventData.raw
				unprocessed midi message (DWORD)
			eventData.status
				(channel+status) //Legacy
			eventData.channel
				decoded midi channel (1-16)
			eventData.type
				decoded status types i.e. note on,note off,
				control change etc. (8-15)
			eventData.note
				note/Controller number (0-127)
			eventData.velocity
				velocity/controller value (0-127)
			eventData.bend
				decoded pitch bend value (-8192 to 8191)//Signed 14 bit value
			eventData.program
				decoded program change (0-127)

Status types:
note off (status type 8)
note on (Status type 9)
polyphonic key pressure (Status type 10)
control change (Status type 11)
program change (Status type 12)
channel pressure (Status type 13)
pitch bend (Status type 14)
system message (status type 15)

Midi Javascript.
_______________________________________________________________________
*/
var midiInDevice = "Launchpad Pro";
var midiOutDevice = "Launchpad Pro";
var midiInDeviceId = -1;
var midiOutDeviceId = -1;
var midiChannel = 1; // set midi channel
var midiInDeviceList = [];
var midiOutDeviceList = [];
const INPUT = false;
const OUTPUT = true;
const ENABLE = true;
const DISABLE = false;

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
    };	}
}

function midiHardwareResetReceieved(){
	getMidiInputs();
	getMidiOutputs();
	getMidiDeviceIds();
	unblockMidiDevice();
}

function unblockMidiDevice(){
	Midi.unblockMidiDevice(midiOutDevice, OUTPUT);
	Midi.unblockMidiDevice(midiInDevice, INPUT);
}

function midiConfig(){
	Midi.thruModeEnable(DISABLE);
	Midi.broadcastEnable(DISABLE);
	Midi.typeNoteOffEnable(ENABLE);
	Midi.typeNoteOnEnable(ENABLE);
	Midi.typePolyKeyPressureEnable(DISABLE);
	Midi.typeControlChangeEnable(ENABLE);
	Midi.typeProgramChangeEnable(ENABLE);
	Midi.typeChanPressureEnable(DISABLE);
	Midi.typePitchBendEnable(DISABLE);
	Midi.typeSystemMessageEnable(DISABLE);
	midiHardwareResetReceieved();
}

function midiEventReceived(eventData) {
	if (eventData.device != midiInDeviceId
		|| eventData.channel != midiChannel ){
		return;
	};
	print("\r\nMidi Decode: " + "(D#" + eventData.device + " Ch#"
		+ eventData.channel + " ST:"+ eventData.type + " N:" + eventData.note
		+ " V:" + eventData.velocity + " B:" + eventData.bend + " P:"
		+ eventData.program + ")");
	print("In Device #" + midiInDeviceId + " Out Device #" + midiOutDeviceId);
}

function scriptEnding() {
	//Script Cleanup Code
}

midiConfig();
listMidiInputs();
listMidiOutputs();
Midi.sendMidiMessage(midiInDeviceId,midiChannel,9,56,100);

// Events
Midi.midiReset.connect(midiHardwareResetReceieved);
Midi.midiMessage.connect(midiEventReceived);
Script.scriptEnding.connect(scriptEnding);
