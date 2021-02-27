.. warning::
    This document is slightly outdated.
    FIXME: should mention the video sync script

##########################
Play Media in a Web Entity
##########################

Web entities can play a number of different media formats through embedded players.

.. contents:: On This Page
    :depth: 2

-----------------------
Supported Media Formats
-----------------------

Currently, exclusively open source formats are supported:

+------------------------+------------------------------------------------------------------+--------------------------+
| Container format       | Supported codecs                                                 | File extension(s)        |
+========================+==================================================================+==========================+
| WebM                   | Video: VP8, VP9       Audio: Vorbis, Opus                        | .webm                    |
+------------------------+------------------------------------------------------------------+--------------------------+
| Matroska               | Video: Theora, VP8, VP9       Audio: Vorbis, Opus, FLAC, MP3     | .mkv, .mk3d, .mka, .mks  |
+------------------------+------------------------------------------------------------------+--------------------------+
| Ogg                    | Video: Theora, VP8       Audio: Vorbis, Opus, FLAC               | .ogg, .oga, .ogv         |
+------------------------+------------------------------------------------------------------+--------------------------+

+------------------------+------------------------------------------------------------------+--------------------------+
| Video codec            | Comments                                                         | Supported containers     |
+========================+==================================================================+==========================+
| VP9 (recommended)      | Good quality, slow encoding.                                     | WebM, Matroska           |
+------------------------+------------------------------------------------------------------+--------------------------+
| VP8                    | Recommended if your APU has hardware accelerated encoding for    | WebM, Matroska           |
|                        | VP8, but not VP9. Slightly faster than VP9.                      |                          |
|                        | Slightly lower quality to compression ratio than VP9.            |                          |
+------------------------+------------------------------------------------------------------+--------------------------+
| Theora                 | Low quality, low compression, outdated.                          | Matroska                 |
+------------------------+------------------------------------------------------------------+--------------------------+

+------------------------+------------------------------------------------------------------+--------------------------+
| Audio codec            | Comments                                                         | Supported containers     |
+========================+==================================================================+==========================+
| Opus                   | Recommended, works well with high and low bitrate.               | WebM, Matroska, Ogg      |
+------------------------+------------------------------------------------------------------+--------------------------+
| Vorbis                 | Lower quality to compression ratio than Opus.                    | WebM, Matroska, Ogg      |
+------------------------+------------------------------------------------------------------+--------------------------+
| FLAC                   | Lossless, bigger files.                                          | Matroska, Ogg            |
+------------------------+------------------------------------------------------------------+--------------------------+
| MP3                    | Lower quality to compression ratio than Opus and Vorbis.         | Matroska                 |
+------------------------+------------------------------------------------------------------+--------------------------+

---------------------------
Re-encode Media with FFmpeg
---------------------------

Here are some example commands for reencoding video files using FFmpeg.

+------------------------+------------------------------------------------------------------+--------------------------+
| Encode                 | Command                                                          | Comments                 |
+========================+==================================================================+==========================+
| VP9, Opus, WebM        | ffmpeg -i "INPUTFILE" -c:v libvpx-vp9 -b:v 0 -crf 5 -vf          | "-vf scale=-2:600"       |
|                        | scale=-2:600 -cpu-used 5 -row-mt 1 -c:a libopus -b:a 96K         | scales the video         |
|                        | "OUTPUTFILE.webm"                                                | down to 600p vertical    |
|                        |                                                                  | resolution while keeping |
|                        |                                                                  | the aspect ratio.        |
|                        |                                                                  | "-crf 5" is the video    |
|                        |                                                                  | quality from 0 to 63,    |
|                        |                                                                  | lower being better. For  |
|                        |                                                                  | the constant quality to  |
|                        |                                                                  | work the bitrate has to  |
|                        |                                                                  | be set to "0" via        |
|                        |                                                                  | "-b:v 0".                |
+------------------------+------------------------------------------------------------------+--------------------------+
| VP9 (Hardware          | ffmpeg -i "INPUTFILE" -c:v vp9_vaapi -b:v 2000k -c:a libopus     | VP9 hardware             |
| accelerated), Opus,    | -b:a 96K "OUTPUTFILE.webm"                                       | acceleration             |
| WebM                   |                                                                  | is currently only        |
|                        |                                                                  | supported by Intel Kaby  |
|                        |                                                                  | Lake or newer APUs.      |
|                        |                                                                  | Hardware accelerated VP9 |
|                        |                                                                  | does not have a constant |
|                        |                                                                  | quality setting, so      |
|                        |                                                                  | bitrate needs to be      |
|                        |                                                                  | used instead.            |
+------------------------+------------------------------------------------------------------+--------------------------+
| VP8 (Hardware          | ffmpeg -i "INPUTFILE" -c:v vp8_vaapi -b:v 2000k -vf scale=-2:600 | VP8 hardware             |
| accelerated), Opus,    | -c:a libopus -b:a 96K "OUTPUTFILE.webm"                          | acceleration is          |
| WebM                   |                                                                  | currently only supported |
|                        |                                                                  | by Intel                 |
|                        |                                                                  | Cherryview/Braswell and  |
|                        |                                                                  | newer APUs.              |
+------------------------+------------------------------------------------------------------+--------------------------+
| Theora, Opus, Matroska | ffmpeg -i "INPUTFILE" -c:v libtheora -q:v 10 -vf scale=-2:600    | "-q:v 10" is the quality |
|                        | -c:a libopus -b:a 96K "OUTPUTFILE.mkv"                           | from 0 to 10, higher     |
|                        |                                                                  | being better.            |
+------------------------+------------------------------------------------------------------+--------------------------+

You can use the ``ffmpeg -codecs`` command to see supported codecs.

Additional info can be found with the command ``ffmpeg -h``
    
Alternatively you can explore these links:

* https://trac.ffmpeg.org/wiki
* https://ffmpeg.org
* https://wiki.archlinux.org/index.php/Hardware_video_acceleration#VA-API_drivers

----------------
Batch Processing
----------------

Here is an example shell script to batch reencode the contents of a folder on Linux using FFmpeg:

You can name it: ``vircadia_reencode.sh``

With this code in it: 

.. code-block:: bash

    # Modified version of https://gist.github.com/ralphcrisostomo/56fc395b1646bd55aeeb2eb442043887
    # Usage: ./vircadia_reencode.sh /SourceDirectory /DestinationDirectory

    SOURCE=$1
    DESTINATION=$2

    while IFS= read -d '' -r ITEM
    do

      echo $ITEM

      FILE=${ITEM##*/}
      EXT=${ITEM##*.}
      EXT=$(echo $EXT | tr "[:upper:]" "[:lower:]")
      OUTPUT="$DESTINATION/${FILE%.*}.mkv"

      # Create directory
      [[ -d $DESTINATION ]] || mkdir -p $DESTINATION

    echo "" | ffmpeg -i "$ITEM" -c:v libvpx-vp9 -b:v 0 -crf 5 -vf scale=-2:600 -cpu-used 5 -row-mt 1 -c:a libopus -b:a 96K "$OUTPUT"

    # All files with the listed extensions will be reencoded.
    done< <(find "$SOURCE" \( -iname '*.mp4' -or -iname '*.avi'  -or -iname '*.mkv' -or -iname '*.mts' \) -print0) |

.. note:: Do not forget to set the script as executable on Linux using something like `chmod +x vircadia_reencode.sh`

------------
Video Player
------------

You can embed videos using the HTML5 video tag. This example code can be put into an HTML file on a web server and be used in a Web entity. 

.. code-block:: html

    <video controls="controls" src="EXAMPLEDIRECTORY/EXAMPLEFILE.webm">
        Your browser does not support the HTML5 Video element.
    </video>


**See Also**

+ :doc:`Create New Entites <create-entities>`
+ `The Create App <../tools.html#the-create-app>`_
+ :doc:`Define an Entity's Behavior <entity-behavior>`
+ :doc:`Change How Entities Look <entity-appearance>`
