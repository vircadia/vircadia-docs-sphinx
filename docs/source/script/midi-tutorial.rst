###################################################
Tutorial: Use MIDI to Control Your Environment
###################################################

MIDI (Musical Instrument Digital Interface) is a protocol (with electrical connectors and a digital interface) that allows digital tools and electronic devices (virtual and physical) to communicate with each other. MIDI is usually used as a music sequencer. Originally, this format was created in the 80s as a way for instruments to communicate with each other, but over the last 30 years, it has evolved into a highly organized specification that is heavily tested and adopted for a multitude of purposes.

We created a MIDI class (with the help of one of our community members, Brainstormer) that can be used to control your environment in Vircadia. For example, we used MIDI to control lighting in a domain for a music show.

.. note:: Currently, we support the MIDI class only on Windows.

.. contents:: On This Page
    :depth: 2

-----------------------
MIDI Class Basics
-----------------------

Our MIDI class works by passing a DWORD (double word), a data type specific to Microsoft Windows, as a message. It is an unsigned 32-bit unit of data and can contain an integer value ranging from ``0`` to ``4,294,967,295``. 

Every time you move a lever, rotate a knob, press/release a key, or push down a pad, you are creating a MIDI message that says what channel, what note, what velocity, and what is the status/command to run.

Each byte in this message describes a different type's value. 

+----------+----------+----------+------+------+
| 00000000 | 0vvvvvvv | 0nnnnnnn | 1sss | cccc |
+----------+----------+----------+------+------+

Where: 

* v = velocity
* n = notes
* s = status
* c = channel

The number in the higher order bit (the first number) denotes whether it is a command (1) or data (0). The rest of the numbers determine the value of the type. This means that the velocity and note can represent 128 unique values (1+2+4+8+16+32+64), status can represent 8 unique values, and channel can represent 16 values. 

The different status types we support are:

+--------+-------------------------+
| Status | Types                   |
+========+=========================+
| 08     | note off                |
+--------+-------------------------+
| 09     | note on                 |
+--------+-------------------------+
| 10     | polyphonic key pressure |
+--------+-------------------------+
| 11     | control change          |
+--------+-------------------------+
| 12     | program change          |
+--------+-------------------------+
| 13     | channel pressure        |
+--------+-------------------------+
| 14     | pitch bend              |
+--------+-------------------------+
| 15     | system message          |
+--------+-------------------------+

----------------------------------
Connect Your Controller Device
----------------------------------

You can either connect a real controller device that you use to control your environment in High Fidelity, or create a virtual one that will help you connect to other virtual devices. 

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Connect Ableton Live to Interface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To `connect Ableton Live <https://help.ableton.com/hc/en-us/articles/209774225-Using-virtual-MIDI-buses>`_ directly to High Fidelity’s Interface client, we recommend the following virtual tools:

+ `loopMIDI <https://www.tobias-erichsen.de/software/loopmidi.html>`_: This will create a virtual in/out port to send information into and out of HiFi
+ `VMP <http://vmpk.sourceforge.net>`_: You can use this to simulate keys being pressed or sliders/knobs being manipulated if you do not have a controller.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Connect an iPad or iPhone to Interface
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can use your iPad or iPhone as a touch screen controller with buttons, knobs, and sliders. Read the sections `Configure Your MIDI Device`_ and `Example: Change the Color of a Cube using MIDI`_ before reading these instructions. 

+ Download our recommended app `touchosc <https://hexler.net/software/touchosc>`_.
+ Download the Windows bridge. 
+ Set up either through USB or through your local WIFI network in the settings menu. 
+ If you setup your `onEventReceived` to log the messages coming in, you can see which knobs send what information that you can use to call custom functions. 
+ There are some interesting components like the accelerometer which you can use as well!

-------------------------------
Configure Your MIDI Device
-------------------------------

Once you've set up your MIDI Controller Device, you need to configure it. 

1. Here is a general recommended MIDI config function you can run in a script. With it, you can see a list of MIDI devices that are currently connected::

    // Some helpful constants
    const INPUT = false;
    const OUTPUT = true;
    const ENABLE = true;
    const DISABLE = false;
    function midiConfig(){
        Midi.thruModeEnable(DISABLE );
        Midi.broadcastEnable(DISABLE );
        Midi.typeNoteOffEnable(ENABLE );
        Midi.typeNoteOnEnable(ENABLE );
        Midi.typePolyKeyPressureEnable(DISABLE);
        Midi.typeControlChangeEnable(ENABLE);
        Midi.typeProgramChangeEnable(ENABLE);
        Midi.typeChanPressureEnable(DISABLE);
        Midi.typePitchBendEnable(ENABLE );
        Midi.typeSystemMessageEnable(DISABLE);

        // get a list of the available  in and  out device IDs
        midiInDeviceList = Midi.listDevices(INPUT);
        midiOutDeviceList = Midi.listDevices(OUTPUT);
        print(JSON.stringify(midiInDeviceList));
        print(JSON.stringify(midiOutDeviceList));

2. After you run the configuration function, you will want to connect to ``midiMessages``::

    Midi.midiMessage.connect(onEventReceived);
    // Your message handler will look like the following:
    /// @param {int} device: device number
    /// @param {int} channel: channel number
    /// @param {int} type: 0x8 is noteoff, 0x9 is noteon (if velocity=0, noteoff), etc
    /// @param {int} note: MIDI note number
    /// @param {int} velocity: note velocity (0 means noteoff)
    
    function onEventReceived(eventData){
        // functions you run in response to different MIDI events
    }

---------------------------------------------------
Example: Change the Color of a Cube using MIDI
---------------------------------------------------

Let's change the color of a cube entity in High Fidelity using MIDI.

1. Use this method to figure out the MIDI range of ``0`` to ``127`` to be any other output range you want using linear interpolation::

    function lerp(InputLow, InputHigh, OutputLow, OutputHigh, Input) {
        return ((Input - InputLow) / (InputHigh - InputLow)) * (OutputHigh - OutputLow) + OutputLow;
    }
    lerp (0,127,0,360,eventData.velocity); // the 0 would be 0, and the 127 would be 360.

2. Since colors go from ``0`` to ``255``, we could do the following::

    var red = 0;
    function  changeCubeColor(redValue){
        var entityColorProps = Entities.getEntityProps(cubeID, ["color"]).color;
        entityColorProps.red = redValue;
        Entities.editEntity(cubeID, entityColorProps);
    }

3. Then use ``onEventReceived`` to change the color of the cube::

    // eventData.device, eventData.channel, eventData.type, eventData.note, eventData.velocity

    function onEventReceived(eventData){
        changeCubeColor( lerp(0,127,0,255,eventData.velocity) );
    }

Print the ``eventData`` in your ``onEventReceived`` function to see each controller and its output. This will tell you everything you need to know about how to route the right key, slider, knob, or button to to your intended JavaScript functions.

If you want to use to control something outside of High Fidelity, or to directly call a MIDI event to control something in Hifi, you can use the function::

    // event similar to the above
    Midi.playNote(Status, Note, Velocity);

---------------------------------------------
Other Ways to Use MIDI in High Fidelity
---------------------------------------------

- Use Ableton to sequence out entire animations of your domain.
- Control real world devices by the movements things make in Hifi and vice versa (think update loop)
- Setup your iPad to be a whole group of buttons that you can press at any time to trigger events in your domain at will.

**See Also** 

- `API Reference: MIDI <https://apidocs.vircadia.dev/Midi.html>`_
- `MIDI-API <../_static/resources/script/MidiAPI.txt>`_
- `MIDI-Test <../_static/resources/script/midiTest.js>`_
- `MIDI-Examples <../_static/resources/script/MIDI-Example.js>`_