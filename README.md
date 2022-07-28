# QAM

Quick-AccessMenu2.1 by Nemesea - Addon for Ben987's BondageClub game 

Most recent release is version 1.4.3. - Visit also our wiki: https://github.com/tetris245/tetris245/wiki

Installation 

Recommended methode with Tampermonkey - link to the QAM loader: https://tetris245.github.io/QAMloader.js

You can find Tampermonkey here: https://www.tampermonkey.net/ (it's available for several browsers: Chrome, Microsoft Edge, Safari, Opera Next, Firefox, Dolphin, UC)

Inside Tampermonkey: Add new script / Utilities / Insert link to QAM loader in last option / Click on "Install"

Alternative methode for Google Chrome, Microsoft Edge, similar browsers:
1. Download the Quick-AccessMenu2.1-version1.4.3.zip file on the Releases page
2. Depending on browser, the .zip might have to be extracted. few browsers accept a .zip, a few requires a folder.
3. Go to browser extensions. Enable developer mode.
4. Load as Unpacked. Done. If the file can't be seen, see step 2.

After installation, refresh your BC page and relog.

Credits

Special thanks to KellyLoveyness for creating the original version.

Special thanks to Firefly for giving permission to integrate the BC-Diaper-Wetter script.

Special thanks to Myrhanda and Kimei for giving permission to integrate the Moaner script.

Thanks for special assistance:
Shyness, Ada.

Thanks for general assistance:
Brianna, Better, Miyako, Zeltron, Selina, Estsanatlehi.
All else I might not have included.

===========================================================================

Changes for future version 

* New command: hear (hearmode) to force a specific hearing mode. The mode is specified by a number between 0 and 4.
* New commands: s1, s2, s3, s4 followed by stuff to speak once in light, normal, heavy or total stuttering mode.
* New command: see (visionmode) (blur level) to force a specific vision mode and optionally a blur level. Vision mode is specified by a number between 0 and 3, blur level by a number between 0 and 4.
* New command: sleep (target) to use the sleeping pill on yourself or another player
* New command: stutter (stuttermode) to force a specific stuttering mode. The mode is specified by a number between 0 and 4.
* New command: talk (talkmode), which merges talkbaby and talkgag commands, and gives more options of gag talk sent to the server 
* Renamed the old gagtalk command as gagcode and improved it by using lillyBC gagspeak function (https://github.com/lillyBC/bcTampermonkeys):
  - works now also against deafness
  - in decoder mode, displays now both versions of the message
* Merged the gaglight and gagheavy commands into the new version of gagtalk command, used in a similar way to the talk command, but only for gag talk sent to the server 
* Improved the outfit command with the awsave option, which provides a code that you can copy/paste in a file, then use later with the awload option (thanks to huzpsb) - Note: this code is compatible with the BCG tool, used by Chinese BC users
* Removed the arousal command (does not work as intended and can lead to a crash)
* Fixed a bug in the unrestrict reset command




