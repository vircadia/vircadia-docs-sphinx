##############################
Play media in a Web Entity
##############################

Web entities can play a number of different media formats through embedded players.

.. contents:: On This Page
    :depth: 1

--------------------------------
Supported media formats
--------------------------------

Currently exclusively open source formats are supported:

+------------------------+------------------------------------------------------------------+--------------------------+
| Container format       | Supported codecs                                                 | File extension(s)        |
+========================+==================================================================+==========================+
| WebM                   | Video: VP8, VP9  Audio: Vorbis, Opus                             | .webm                    |
+------------------------+------------------------------------------------------------------+--------------------------+
| Matroska               | Video: Theora, VP8, VP9  Audio: Vorbis, Opus, FLAC, MP3          | .mkv, .mk3d, .mka, .mks  |
+------------------------+------------------------------------------------------------------+--------------------------+
| Ogg                    | Video: Theora, VP8  Audio: Vorbis, Opus, FLAC                    | .ogg, .oga, .ogv         |
+------------------------+------------------------------------------------------------------+--------------------------+

+------------------------+------------------------------------------------------------------+--------------------------+
| Video codec            | Comments                                                         | Supported containers     |
+========================+==================================================================+==========================+
| VP9 (recommended)      | Good quality, slow encoding                                      | WebM, Matroska           |
+------------------------+------------------------------------------------------------------+--------------------------+
| VP8                    | Recommended if your APU has hardware accelerated encoding for VP8, but not VP9. Slightly faster than VP9. Slightly lower quality to compression ratio than VP9.                             | WebM, Matroska           | 
+------------------------+------------------------------------------------------------------+--------------------------+
| Theora                 | Low quality, low compression, outdated                           | Matroska                 |
+------------------------+------------------------------------------------------------------+--------------------------+

+------------------------+------------------------------------------------------------------+--------------------------+
| Audio codec            | Comments                                                         | Supported containers     |
+========================+==================================================================+==========================+
| Opus                   | Recommended, works well with high and low bitrate                | WebM, Matroska, Ogg      |
+------------------------+------------------------------------------------------------------+--------------------------+
| Vorbis                 | Lower quality to compression ratio than Opus                     | WebM, Matroska, Ogg      |
+------------------------+------------------------------------------------------------------+--------------------------+
| FLAC                   | Lossless, bigger files                                           | Matroska, Ogg            |
+------------------------+------------------------------------------------------------------+--------------------------+
| MP3                    | Lower quality to compression ratio than Opus and Vorbis          | Matroska                 |
+------------------------+------------------------------------------------------------------+--------------------------+

--------------------------------
Reencode media with ffmpeg
--------------------------------

Here are some example commands for reencoding video files using ffmpeg:

+------------------------+------------------------------------------------------------------+--------------------------+
| Encode                 | Command                                                          | Comments     |
+========================+==================================================================+==========================+
| VP9, Opus, WebM        | ffmpeg -i "INPUTFILE" -c:v libvpx-vp9 -b:v 0 -crf 5 -vf scale=-2:600 -cpu-used 5 -row-mt 1 -c:a libopus -b:a 96K "OUTPUTFILE.webm" | "-vf scale=-2:600" scales the video down to 600p vertical resolution while keeping the aspect ratio. "-crf 5" is the video quality from 0 to 63, lower being better. For the constant quality to work the bitrate has to be set to "0" via "-b:v 0"    |
+------------------------+------------------------------------------------------------------+--------------------------+
| VP9 (Hardware accelerated), Opus, WebM | ffmpeg -i "INPUTFILE" -c:v vp9_vaapi -b:v 2000k -c:a libopus -b:a 96K "OUTPUTFILE.webm" | VP9 hardware acceleration is currently only supported by Intel Kaby Lake or newer APUs. Hardware accelerated VP9 does not have a constant quality setting, so bitrate needs to be used instead.      |
+------------------------+------------------------------------------------------------------+--------------------------+
| VP8 (Hardware accelerated), Opus, WebM | ffmpeg -i "INPUTFILE" -c:v vp8_vaapi -b:v 2000k -vf scale=-2:600 -c:a libopus -b:a 96K "OUTPUTFILE.webm" | VP8 hardware acceleration is currently only supported by Intel Cherryview/Braswell and newer APUs. |
+------------------------+------------------------------------------------------------------+--------------------------+
| Theora, Opus, Matroska | ffmpeg -i "INPUTFILE" -c:v libtheora -q:v 10 -vf scale=-2:600 -c:a libopus -b:a 96K "OUTPUTFILE.mkv" | "-q:v 10" is the quality from 0 to 10, higher being better.                 |
+------------------------+------------------------------------------------------------------+--------------------------+

You can use the "ffmpeg -codecs" command to see supported codecs.

Additional info can be found on:
"ffmpeg -h" command
https://trac.ffmpeg.org/wiki
https://ffmpeg.org
https://wiki.archlinux.org/index.php/Hardware_video_acceleration#VA-API_drivers

------------------------
Batch processing
------------------------

Here is an example shell script to batch reencode the contents of a folder on Linux using ffmpeg:

`vircadia_reencode.sh`
```
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
```
.. note:: Do not forget to set the script as executable on Linux using something like `chmod +x vircadia_reencode.sh`

-----------------------
Video player
-----------------------



**See Also**

+ :doc:`Create new Entity's <create-entities>`
+ `The Create App <../tools.html#the-create-app>`_
+ :doc:`Define an Entity's Behavior <entity-behavior>`
+ :doc:`Change How Entities Look <entity-appearance>`
