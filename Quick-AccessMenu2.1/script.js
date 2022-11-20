// ==UserScript==
// @name Quick-AccessMenu2.1
// @namespace https://www.bondageprojects.com/
// @version 1.9.1
// @description Everything you'll ever need for BC
// @author Nemesea
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant none
// @run-at document-end
// ==/UserScript==
(typeof OLDmenu !== "undefined") && (ChatRoomSendChat = OLDmenu); //reset
async function NEWmenu() {
    var content = ElementValue("InputChat").trim();
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
    if (InventoryGet(Player, "Pronouns").Asset.Name == "HeHim")  {
        var tmpr1 = "He";
        var tmpr2 = "him";
        var tmpr3 = "his";
	var tmpr4 = "he";
    } else {
        var tmpr1 = "She";
        var tmpr2 = "her";
        var tmpr3 = "her";
	var tmpr4 = "she";
    }

    //chatcommand
    if (CurrentScreen == "ChatRoom") {

        if (content.indexOf("/help") == 0) {
            if (content.endsWith("/help")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: QAM help is organized into categories. Use <b>/help</b> (category). List of categories:\n" +
                    "<b>bondage</b> = commands related to bondage.\n" +
                    "<b>character</b> = commands related to your character.\n" +
                    "<b>chat</b> = commands with extra features in chat room.\n" +
                    "<b>clothing</b> = commands related to the clothes.\n" +
                    "<b>escape</b> = commands related to escape.\n" +
		    "<b>features</b> = automatic features without command.\n" +
                    "<b>fun</b> = commands related to fun, pain and pleasure.\n" +
		    "<b>kd</b> = info about kd command (for Kinky Dungeon).\n" +
                    "<b>misc</b> = special commands.\n" +
                    "<b>talking</b> = commands related to talking.\n" +
                    "<b>visual</b> = commands related to animations and background.\n" +
                    "<b>zones</b> = commands related to game zones.\n" +
		    "Several commands require to specify a target. It can be a real name or a member number.\n" +
		    "Use <b>/help new</b> to get info about changes in current QAM version.\n" +
		    "Visit also our <a href='https://github.com/tetris245/tetris245/wiki' target='_blank'>Wiki</a></p>"	
                );
            } else if (content.includes("bondage")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Bondage commands:\n" +
                    "<b>/lock</b> = adds locks on all lockable items. Use /help lock for more info.\n" +
		    "<b>/outfit</b> = restores/saves/loads outfit (including restraints). Using will give more info.\n" +
                    "<b>/pet</b> (target) = becomes a fully restrained pet.\n" +
                    "<b>/randomize</b> (target) = naked + underwear + clothes + restrain commands.\n" +
                    "<b>/restrain</b> (target) = adds random restraints.\n" +
                    "<b>/solidity</b> (value) = changes the solidity of most current bindings. Value must be between 1 and 99. Use high values to make escape impossible!</p>"
                );
            } else if (content.includes("character")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Character commands - * = more info when using\n" +
                    "<b>/becomeownlover</b> = becomes your own lover.\n" +
                    "<b>/becomeownowner</b> = becomes your own owner.\n" +
                    "<b>/difficulty</b> (number) = changes game difficulty. *\n" +
                    "<b>/giveeverything</b> = gives every item.\n" +
                    "<b>/maxstatistics</b> = gives max statistics.\n" +
                    "<b>/money</b> (value) = gives or takes money.\n" +
                    "<b>/name</b> (newnamehere) = temporary new nickname. Without newname, real name is used.\n" +
		    "<b>/npcpunish</b> = enables/disables NPC punishments.\n" +
		    "<b>/permission</b> (number) = changes your item permission *\n" +
                    "<b>/reputation</b> (reputation) (level) = changes a reputation. *\n" +
                    "<b>/resetinventory</b> = erases your inventory. Will warn first.\n" +
                    "<b>/roleplay</b> (rolehere) = starts a role. *\n" +
                    "<b>/rolequit</b> (role or clubarea here) = ceases to play a role. *\n" +
                    "<b>/savename</b> = definitive status to temporary nickname.\n" +
                    "<b>/skill</b> (skill) (level) = changes a skill. *\n" +
                    "<b>/title</b> (newtitlehere) = chooses a new title. *</p>"
                );
            } else if (content.includes("chat")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Chat commands:\n" +
		    "<b>/action</b> (stuffhere) = inserts an action. Can also: /a.\n" +
                    "<b>/autokick</b> = toggles on auto kick for 0 day old accounts.\n" +
		    "<b>/bio</b> (target) = gives direct access to the profile description of any player in the chat room.\n" +
                    "<b>/erase</b> = erases chat.\n" +
                    "<b>/font</b> (newfont) (size) = changes font in BC. Using will give more info.\n" +
                    "<b>/frlist</b> = gives access to friendlist with clickable links to other rooms during 15 seconds.\n" +
                    "<b>/hiddenmessages</b> = toggles on show hidden messages made by game.\n" +
		    "<b>/poof</b> (action) = leaves the club very fast. Action is optional (default = poofs away).\n" +
                    "<b>/search</b> (areaname) = opens room search, area is: club or asylum.\n" +
                    "<b>/theme</b> (number) = changes chat color theme after automatic relog. Number must be between 0 and 3.</p>" 
                );
            } else if (content.includes("clothing")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Clothing commands:\n" +
                    "<b>/clothes</b> (target) = changes clothes.\n" +
                    "<b>/diaper</b> (actionhere) (targetname or setvalue) = plays with diapers (ABDL game). Using will give more info.\n" +
                    "<b>/naked</b> (target) = removes clothes.\n" +
                    "<b>/outfit</b> = restores/saves/loads outfit (including restraints). Using will give more info.\n" +
                    "<b>/underwear</b> (target) = changes underwear.\n" +
                    "<b>/wardrobe</b> (target) = opens target wardrobe.</p>"
                );
            } else if (content.includes("escape")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Escape commands:\n" +
                    "<b>/boost</b> = boosts skills, similar to maid quarters drink.\n" +
                    "<b>/collarremove</b> = removes slave/owner collar. Can also be: /removecollar.\n" +
                    "<b>/frlist</b> = gives access to friendlist with clickable links to other rooms during 15 seconds.\n" +
                    "<b>/leave</b> = leaves room, even if prevented.\n" +
                    "<b>/resetdifficulty</b> = resets difficulty, thereby quitting it. Will warn first.\n" +
                    "<b>/safewordspecific</b> = removes specific item. More info when used.\n" +
                    "<b>/solidity</b> (value) = changes the solidity of most current bindings. Use low values to escape! Value 1 allows to escape special devices.\n" +
                    "<b>/totalrelease</b> (target) = removes all bindings, collar, harness, chastity, toys.\n" +
                    "<b>/unlock</b> (target) (locktype) = removes all locks or only a specified type of lock. More info with /help unl.\n" +
		    "<b>/untie</b> (target) = removes all bindings.</p>" 
                );
	    } else if (content.includes("features")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Automatic features without command:\n" +
		    "<b>Auto All Items Are Craftable</b> but limited using of the extra crafted items\n" +
                    "<b>Auto-Disable NPC Punishments</b> - can be changed with the /npcpunish command\n" +
                    "<b>Auto-Disable Validation</b> only for yourself\n" +
		    "<b>Auto Extended Availability of Pose Menu </b>with priority over Facial Expression\n" +
		    "<b>Auto Extra Buttons In Wardrobe</b>: Export (usable only if you come from a chat room) - Import1 = outfit + restraints\n" +
		    "Import2 = outfit + cosplay items + restraints - Import3 = full import including body changes\n" +
                    "<b>Auto-Join</b> to enter a room as soon as possible\n" +
                    "<b>Auto More Characters For Nickname</b> \n" +
                    "<b>Auto-Relog</b> - Works only if you select Return to chatrooms on relog in the Immersion settings - Not compatible with FBC Auto-Relog</p>"
                );    
            } else if (content.includes("fun")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Fun commands:\n" +
                    "<b>/cum</b> = causes an orgasm.\n" +
		    "<b>/invisible1</b> = becomes invisible (anal hook must be allowed).\n" +
		    "<b>/invisible2</b> = becomes invisible (glitter mask must be usable).\n" +
                    "<b>/moaner</b> = moans when horny and stimulated. Using will give more info.\n" +
		    "<b>/sleep</b> (target) = uses the sleeping pill on yourself or another player.\n" +
                    "<b>/superdice</b> (sides) = rolls a superdice. Sides can be between 2 and 999999999.\n" +
		    "<b>/visible</b> = back to visible state after using of an invisible command.</p>"
                );
	    } else if (content.includes("kd")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: How to use the kd command:\n" +
                    "1 - Optionally, use <b>/kd devious</b> to toggle the Devious Challenge and/or <b>/kd debug</b> to enable the Debug Mode\n" +
                    "2 - Use <b>/kd</b> without any option to launch the game without cheat\n" +
		    "3 -  After launching of the game, you can click on the Exit button to go back to the chatroom and use a command with cheat:\n" +
                    "<b>/kd maxstats</b> to get high stats and many potions\n" +
                    "<b>/kd moreitems</b> to get all extra items\n" +
		    "<b>/kd outfits</b> to get all outfits\n" +
		    "<b>/kd restraints</b> to get all restraints\n" +
                    "<b>/kd spells</b> to get special spells for extra slots and improved stats\n" +
                    "<b>/kd weapons</b> to get all weapons\n" +
		    " \n" +
		    "<b>/kd remove</b> to remove one layer of restraints\n" +
                    "4 - Check the cheat effect on the game before repeating step 3 for another cheat</p>"
                );    
            } else if (content.includes("lock")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The lock command has several syntaxes:\n" +
                    "/lock (target) (locktype) for locks 1 to 8\n" +
                    "/lock (target) (locktype) (r) for lock 9\n" +
                    "/lock (target) (locktype) (code) for lock 10\n" +
                    "/lock (target) (locktype) (password) (r) for locks 11 and 12\n" +
                    "/lock (target) (locktype) (minutes) (h) (i) (r) for locks 13 to 15\n" +
                    "/lock (target) (locktype) (password) (minutes) (h) (i) (r) for lock 16\n" +
                    " \n" +
		    "The target always needs to be specified.\n" +
                    "The lock types:\n" +
                    "1 Metal - 2 Exclusive - 3 Intricate - 4 High Security\n" +
                    "5 Pandora - 6 Mistress - 7 Lover - 8 Owner\n" +
                    "9 Five Minutes - 10 Combination - 11 Safeword\n" +
                    "12 Password - 13 Mistress Timer - 14 Lover Timer\n" +
                    "15 Owner Timer - 16 Timer Password\n" +
                    "Use <b>/help lpar</b> for info about other parameters</p>"
                );
            } else if (content.includes("lpar")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Special parameters of lock command:\n" +
                    "code must be between 0 and 9999.\n" +
                    "password is limited to 8 characters.\n" +
                    "maximum time = 240 minutes for locks 13 and 16,\n" +
                    "10080 minutes for locks 14 and 15.\n" +
                    " \n" +
                    "Optional parameters:\n" +
                    "h to hide the timer,\n" +
                    "i to enable time input from other players,\n" +
                    "r for item removal when correct password entered\n" +
                    "or lock timer runs out.\n" +
                    " \n" +
                    "Tip: replace h and/or i by another character when you need to skip them.</p>"
                );
            } else if (content.includes("misc")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Misc commands:\n" +
                    "<b>/clubhelp</b> = displays the standard commands of the game (and optionaly the FBC commands)\n" +
                    "<b>/help</b> (category) = displays the QAM commands. Available categories: bondage, character, clothing, escape, features, fun, kd, misc, pleasure, talking, visual, zones.\n" +
                    "<b>/login</b> (accountname) (password) = logs in a new account.\n" +
                    "<b>/relog</b> = relogs.\n" +
                    "<b>/unrestrict</b> =  removes all restrictions from game. Can use maid drink tray/other stuff. Using will give more info. Submissives should use /unrestrict soft.</p>"
                );
	    } else if (content.includes("new")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Main changes in v.1.9.1:\n" + 
		    "- Improved most commands with target by adding condition related to permissions and removing whispered message.\n" +	
		    "- Updated the /kd debug command (Tip: check the internal enhanced KD menu!).\n" +		
                    "- Updated several commands and rewritten functions for R86 compatibility.</p>"
                );   	    
            } else if (content.includes("talking")) {
		ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Talking commands - * = more info when using\n" +
                    "<b>/babytalk</b> (stuffhere) = speaks once as a baby. Can also: /b.\n" +
                    "<b>/gagcode</b> = toggle to decode/not decode gagged people talking. Also works against deafness.\n" +
		    "<b>/gagtalk</b> (talkmode) (stuffhere) = speaks once in specified gag talk. *\n" +
		    "<b>/hear</b> (hearmode) = forces a specific hearing mode. *\n" +
                    "<b>/moaner</b> = moans when horny and stimulated. *\n" +
                    "<b>/s1</b> (stuffhere) = speaks once in light stuttering mode.\n" +
                    "<b>/s2</b> (stuffhere) = speaks once in normal stuttering mode.\n" +
                    "<b>/s3</b> (stuffhere) = speaks once in heavy stuttering mode.\n" +
                    "<b>/s4</b> (stuffhere) = speaks once in total stuttering mode.\n" +
                   "<b>/stutter</b> (stuttermode) = forces a specific stuttering mode. *\n" +
		    "<b>/talk</b> (talkmode) = changes your talk mode. *\n" +
                    "<b>/whisper</b> (target) = sets whisper target.</p>"
                );
            } else if (content.includes("unl")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The unlock command:\n" +
                    "<b>/unlock</b> (target) (locktype).\n" +
		    "The target always needs to be specified.\n" +
                    "All locks of any type will be removed if you don't specify the lock type.\n" +
                    " \n" +
                    "The lock types:\n" +
                    "1 Metal - 2 Exclusive - 3 Intricate - 4 High Security\n" +
                    "5 Pandora - 6 Mistress - 7 Lover - 8 Owner\n" +
                    "9 Five Minutes - 10 Combination - 11 Safeword\n" +
                    "12 Password - 13 Mistress Timer - 14 Lover Timer\n" +
                    "15 Owner Timer - 16 Timer Password</p>"
                );
            } else if (content.includes("visual")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Visual commands - * = more info when using\n" +
                    "<b>/anim2</b> (animhere) = changes your facial expression. *\n" +
                    "<b>/bg1</b> = adds hidden backgrounds to the admin selection screen. Tip for BCX users: activate BCX before login.\n" +
		    "<b>/bg2</b> (number) = uses a hidden platform background. Number between 1 and 86. /bg2 or /bg2 0 to get the list.\n" +
                    "<b>/colorchanger</b> (animhere) = gets an animation with color change. *\n" +
                    "<b>/pose2</b> (posehere) (target) = changes the pose of any player. *\n" +
		    "<b>/see</b> (visionmode) (blurlevel) = forces a vision mode. *\n" +
                    "<b>/speak</b> = animates mouth when talking in chat. Can also: /mouth or /speech.\n" +
                    "<b>/trsee</b> (visor) (deafening module) (chin strap) = changes the settings of a worn Techno Helmet. * \n" +
                    "<b>/vrsee</b> (background) (mode) (game) = changes the settings of a worn VR Headset. *</p>"
                );
            } else if (content.includes("zones")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Zones commands:\n" +
                    "<b>/asylum</b> (minutes) = enters asylum, bypasses requirements. Specify minutes if you are a patient.\n" +
                    "<b>/chess</b> (difficulty) = starts chess, must specify difficulty first (1 easy - 2 normal - 3 hard).\n" +
                    "<b>/college</b> = enters college, bypasses requirements.\n" +
                    "<b>/game</b> (minigamehere) = launches a minigame. Using will give more info.\n" +
                    "<b>/ggts</b> (minutes) (level) = enters ggts training in asylum for the specified time. Level must be between 1 and 6.\n" +
                    "<b>/keydeposit</b> (hours) = keeps your keys safe in the vault.\n" +
                    "<b>/prison</b> (minutes) = stays in Pandora prison. More than 60 minutes is possible.\n" +
                    "<b>/store</b> = leaves chatroom, goes to store. Shows hidden items.\n" +
                    "<b>/timercell</b> (minutes) = stays in the isolation cell. More than 60 minutes is possible.</p>"
                );
            }
        } else if ((content.indexOf("/action ") == 0) || (content.indexOf("/a ") == 0)) {
            if (content.includes("/action") == true) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: (content.substring(7).trim())
                    }]
                });
            } else {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: (content.substring(2).trim())
                    }]
                });
            }
        } else if (content.indexOf("/anim2") == 0) {
            CharacterResetFacialExpression(Player);
            CharacterResetFacialExpression(Player);
            if (content.includes("angry1")) {
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is angry."
                    }]
                });
            } else if (content.includes("angry2")) {
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyes", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Angry", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is very angry."
                    }]
                });
            } else if (content.includes("blink")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", .96);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", .96);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " blinks " + tmpr3 + " eyes."
                    }]
                });
            } else if (content.includes("blush1")) {
                CharacterSetFacialExpression(Player, "Blush", "Low", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " slightly blushes."
                    }]
                });
            } else if (content.includes("blush2")) {
                CharacterSetFacialExpression(Player, "Blush", "Medium", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " blushes."
                    }]
                });
            } else if (content.includes("blush3")) {
                CharacterSetFacialExpression(Player, "Blush", "High", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " blushes a lot."
                    }]
                });
            } else if (content.includes("blush4")) {
                CharacterSetFacialExpression(Player, "Blush", "VeryHigh", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " very strongly blushes."
                    }]
                });
            } else if (content.includes("blush5")) {
                CharacterSetFacialExpression(Player, "Blush", "Extreme", 2.78);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " extremely blushes."
                    }]
                });
            } else if (content.includes("chuckle")) {
                CharacterSetFacialExpression(Player, "Mouth", "Grin", 1.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " chuckles."
                    }]
                });
            } else if (content.includes("closeeyes")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " closes " + tmpr3 + " eyes."
                    }]
                });
            } else if (content.includes("closemouth")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " closes " + tmpr3 + " mouth."
                    }]
                });
            } else if (content.includes("confused")) {
                CharacterSetFacialExpression(Player, "Eyebrows", "OneRaised", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is confused."
                    }]
                });
            } else if (content.includes("cuddle")) {
                CharacterSetFacialExpression(Player, "Eyes", "ShylyHappy", 9.99);
                CharacterSetFacialExpression(Player, "Eyes2", "ShylyHappy", 9.99);
                CharacterSetFacialExpression(Player, "Eyebrows", "Raised", 9.99);
                CharacterSetFacialExpression(Player, "Mouth", "Happy", 9.99);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " cuddles with " + tmpr3 + " friend."
                    }]
                });
            } else if (content.includes("cry")) {
                CharacterSetFacialExpression(Player, "Fluids", "TearsMedium", 1000, "#000016");
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " cries."
                    }]
                });
            } else if (content.includes("disoriented")) {
                CharacterSetFacialExpression(Player, "Eyes", "Dizzy", 8.22);
                CharacterSetFacialExpression(Player, "Eyes2", "Dizzy", 8.22);
                CharacterSetFacialExpression(Player, "Eyebrows", "Raised", 8.22);
                CharacterSetFacialExpression(Player, "Blush", "Medium", 8.22);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " feels disoriented."
                    }]
                });
            } else if (content.includes("distressed")) {
                CharacterSetFacialExpression(Player, "Eyes", "Scared", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Scared", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 75000);
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is distressd."
                    }]
                });
            } else if (content.includes("droolreset")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " stops to drool."
                    }]
                });
            } else if (content.includes("droolsides")) {
                CharacterSetFacialExpression(Player, "Fluids", "DroolSides", 1000, "#000016");
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is drooling."
                    }]
                });
            } else if (content.includes("frown")) {
                CharacterSetFacialExpression(Player, "Mouth", "Frown", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " disagrees."
                    }]
                });
            } else if (content.includes("gaginflate")) {
                CharacterSetFacialExpression(Player, "Eyes", "Lewd", 4.11);
                CharacterSetFacialExpression(Player, "Eyes2", "Lewd", 4.11);
                CharacterSetFacialExpression(Player, "Blush", "Medium", 4.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is excited by the inflation of " + tmpr3 + " gag."
                    }]
                });
            } else if (content.includes("giggle")) {
                RunExpressionAnimation([null, "Laughing", "Grin", "Happy", "Laughing", "Happy", null]);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " giggles."
                    }]
                });
            } else if (content.includes("glare")) {
                CharacterSetFacialExpression(Player, "Eyes", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Angry", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Harsh", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " looks at everybody with angry eyes."
                    }]
                });
            } else if (content.includes("grin")) {
                CharacterSetFacialExpression(Player, "Eyes", "Horny", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Horny", 75000);
                CharacterSetFacialExpression(Player, "Mouth", "Grin", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " grins."
                    }]
                });
            } else if (content.includes("happy")) {
                CharacterSetFacialExpression(Player, "Mouth", "Happy", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is happy."
                    }]
                });
            } else if (content.includes("iced")) {
                CharacterSetFacialExpression(Player, "Eyes", "Surprised", 1.83);
                CharacterSetFacialExpression(Player, "Eyes2", "Surprised", 1.83);
                CharacterSetFacialExpression(Player, "Mouth", "Angry", 2.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " feels the effect of something very cold on " + tmpr3 + " skin."
                    }]
                });
            } else if (content.includes("kiss1")) {
                CharacterSetFacialExpression(Player, "Mouth", "HalfOpen", 1.44);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " gives simple kisses to " + tmpr3 + " friend."
                    }]
                });
            } else if (content.includes("kiss2")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", 2.88);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 2.88);
                CharacterSetFacialExpression(Player, "Mouth", "HalfOpen", 2.88);
                CharacterSetFacialExpression(Player, "Blush", "Low", 2.88);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " kisses " + tmpr3 + " friend on the lips."
                    }]
                });
            } else if (content.includes("kiss3")) {
                CharacterSetFacialExpression(Player, "Eyes", "Closed", 4.22);
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 4.22);
                CharacterSetFacialExpression(Player, "Mouth", "Open", 4.22);
                CharacterSetFacialExpression(Player, "Blush", "Medium", 5.00);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " gives a long kiss to " + tmpr3 + " friend."
                    }]
                });
            } else if (content.includes("laugh")) {
                RunExpressionAnimation([null, "Laughing", "Grin", "Laughing", "Happy", "Laughing", "Grin", "Laughing", "Happy", null]);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " laughs."
                    }]
                });
            } else if (content.includes("lick")) {
                CharacterSetFacialExpression(Player, "Mouth", "Ahegao", 4.11);
                CharacterSetFacialExpression(Player, "Blush", "Low", 4.11);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " licks sensitive body zones of " + tmpr3 + " friend."
                    }]
                });
            } else if (content.includes("lipbite")) {
                CharacterSetFacialExpression(Player, "Mouth", "LipBite", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " bites " + tmpr3 + " lips."
                    }]
                });
            } else if (content.includes("narroweyes")) {
                CharacterSetFacialExpression(Player, "Eyes", "Horny", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Horny", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " narrows " + tmpr3 + " eyes."
                    }]
                });
            } else if (content.includes("neutral")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " goes back to a neutral facial expression."
                    }]
                });
            } else if (content.includes("openeyes")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " opens " + tmpr3 + " eyes."
                    }]
                });
            } else if (content.includes("openmouth")) {
                CharacterSetFacialExpression(Player, "Mouth", "Moan", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " opens " + tmpr3 + " mouth."
                    }]
                });
            } else if (content.includes("pout")) {
                CharacterSetFacialExpression(Player, "Mouth", "Pout", 75000);
                CharacterSetFacialExpression(Player, "Eyes", "Dazed", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Dazed", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Harsh", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " pouts."
                    }]
                });
            } else if (content.includes("raisebrows")) {
                CharacterSetFacialExpression(Player, "Eyebrows", "Raised", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " raises " + tmpr3 + " brows."
                    }]
                });
            } else if (content.includes("resetbrows")) {
                CharacterSetFacialExpression(Player, "Eyebrows", "", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " feels reassured."
                    }]
                });
            } else if (content.includes("sad")) {
                CharacterSetFacialExpression(Player, "Mouth", "Frown", 75000);
                CharacterSetFacialExpression(Player, "Eyes", "Shy", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Shy", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is sad."
                    }]
                });
            } else if (content.includes("smile")) {
                CharacterSetFacialExpression(Player, "Mouth", "Grin", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " smiles."
                    }]
                });
            } else if (content.includes("smirk")) {
                CharacterSetFacialExpression(Player, "Mouth", "Smirk", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " smirks."
                    }]
                });
            } else if (content.includes("spanked")) {
                CharacterSetFacialExpression(Player, "Eyes", "Lewd", 2.44);
                CharacterSetFacialExpression(Player, "Eyes2", "Lewd", 2.44);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 2.44);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " feels the effect of the spanking on " + tmpr3 + " skin."
                    }]
                });
            } else if (content.includes("wink")) {
                CharacterSetFacialExpression(Player, "Eyes2", "Closed", 1.42);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " winks."
                    }]
                });
            } else if (content.includes("worried")) {
                CharacterSetFacialExpression(Player, "Eyes", "Surprised", 75000);
                CharacterSetFacialExpression(Player, "Eyes2", "Surprised", 75000);
                CharacterSetFacialExpression(Player, "Eyebrows", "Soft", 75000);
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is worried."
                    }]
                });
            } else if (content.endsWith("/anim2")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The anim2 command must include an anim.\n" +
                    " \n" +
                    "Available anims:\n" +
                    "angry1, angry2, blink, blush1, blush2, blush3, blush4,\n" +
                    "blush5, chuckle, closeeyes, closemouth, confused, cuddle,\n" +
                    "cry, disoriented, distressed, droolreset, droolsides, frown,\n" +
                    "gaginflate, giggle, glare, grin, happy, iced, kiss1, kiss2,\n" +
                    "kiss3, laugh, lick, lipbite, narroweyes, neutral, openeyes,\n" +
                    "openmouth, pout, raisebrows, resetbrows, sad, smile,\n" +
                    "smirk, spanked, wink, worried.</p>"
                );
            }
        } else if (content.indexOf("/asylum") == 0) {
            var minutes = content.substring(7).trim();
            ChatRoomSetLastChatRoom("");
            ServerSend("ChatRoomLeave", "");
            OnlineGameName = "";
            CommonSetScreen("Room", "AsylumEntrance");
            ChatRoomClearAllElements();
            AsylumEntranceIsWearingNurseClothes = function() {
                return true
            };
            if (ReputationGet("Asylum") < 0) {
                LogAdd("Committed", "Asylum", CurrentTime + 60000 * minutes);
            }
        } else if (content.indexOf("/autokick") == 0) {
            if (this.AutoKickOn == false || this.AutoKickOn == undefined) {
                ChatRoomSendLocal("AutoKick: Ready.");
                AutoKickOn = true;
                AutoKicker = function(data, days = 1, hours = 12, minutes = 0) {
                    minutes *= 60000;
                    hours *= 3600000;
                    days *= 86400000;
                    let character = ChatRoomCharacter.find((c) => c.MemberNumber === data.Sender);
                    if (data.Content == "ServerEnter" && character.Creation > CurrentTime - days - hours - minutes) {
                        ServerSend("ChatRoomAdmin", {
                            MemberNumber: character.MemberNumber,
                            Action: "Ban"
                        });
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "AutoKick: Account was 0 days old."
                            }]
                        });
                    };
                };
                ServerSocket.on("ChatRoomMessage", AutoKicker);
            } else {
                AutoKickOn = false;
                ServerSocket.off("ChatRoomMessage", AutoKicker);
                ChatRoomSendLocal("AutoKick: Disabled.");
            }
        } else if ((content.indexOf("/babytalk") == 0) || content.indexOf("/b ") == 0) {
            if (content.includes("/babytalk")) {
                content = SpeechBabyTalk({
                    Effect: ["RegressedTalk"]
                }, content);
                if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content.substring(9).trim(),
                        "Type": "Chat"
                    });
                } else {
                    ServerSend("ChatRoomChat", { 
                            "Content": content.substring(9).trim(),
                            "Type": "Whisper", 
                            "Target": ChatRoomTargetMemberNumber
                        });
                        for (let C = 0; C < ChatRoomCharacter.length; C++)
			    if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		                TargetName = ChatRoomCharacter[C].Name;
				break;
			    }
			ChatRoomMessage({ 
                            Content: "Whisper to "+TargetName+": " + content.substring(9).trim(), 
                            Type: "LocalMessage", 
                            Sender: Player.MemberNumber 
                        });
			document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
			document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }
            } else {
                content = SpeechBabyTalk({
                    Effect: ["RegressedTalk"]
                }, content);
                if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content.substring(2).trim(),
                        "Type": "Chat"
                    });
                } else {
                    ServerSend("ChatRoomChat", { 
                            "Content": content.substring(2).trim(),
                            "Type": "Whisper", 
                            "Target": ChatRoomTargetMemberNumber
                        });
                        for (let C = 0; C < ChatRoomCharacter.length; C++)
			    if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		                TargetName = ChatRoomCharacter[C].Name;
				break;
			    }
			ChatRoomMessage({ 
                            Content: "Whisper to "+TargetName+": " + content.substring(2).trim(),
                            Type: "LocalMessage", 
                            Sender: Player.MemberNumber 
                        });
			document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
			document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }
            }
        } else if (content.indexOf("/becomeownlover") == 0) {
            if (content.includes("yes")) {
                ServerSend("AccountLovership", {
                    MemberNumber: Player.MemberNumber,
                    Action: "Propose" && "Accept"
                })
                ServerSend("AccountLovership", {
                    MemberNumber: Player.MemberNumber,
                    Action: "CanOfferBeginWedding" && "Propose"
                });
                ServerSend("AccountLovership", {
                    MemberNumber: Player.MemberNumber,
                    Action: "CanBeginWedding" && "Accept"
                });
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Accomplished. Break-up is done via Club Management.</p>"
		);
            } else {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Warning</b>: Uncomfirmed glitch might occur when removing self as lover, during which a random/real lover will be taken\n" +
                    "Use with risk in mind. Confirm by typing: <b>/becomeownlover yes</b></p>"
                );
            }
        }
        //consider writing a lover break up code to compensate for glitch, if possible.
        else if (content.indexOf("/becomeownowner") == 0) {
            ServerSend("AccountOwnership", {
                MemberNumber: Player.MemberNumber,
                Action: "Propose" && "Accept"
            })
            ServerSend("AccountOwnership", {
                MemberNumber: Player.MemberNumber,
                Action: "CanOfferEndTrial" && "Propose"
            });
            ServerSend("AccountOwnership", {
                MemberNumber: Player.MemberNumber,
                Action: "CanEndTrial" && "Accept"
            });
            ChatRoomSendLocal(
                "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Accomplished. Break-up is done via Club Management.</p>"
	    );
        }
        //can't end free from owner, due to club's extreme mode preventing yet not allowing owner to break. Stupid...
        else if (content.indexOf("/bg1") == 0) {
            var BackgroundsTagList = [
                BackgroundsTagNone,
                BackgroundsTagIndoor,
                BackgroundsTagOutdoor,
                BackgroundsTagAquatic,
                BackgroundsTagSpecial,
                BackgroundsTagSciFiFantasy,
                BackgroundsTagClub,
                BackgroundsTagHouse,
                BackgroundsTagDungeon,
                BackgroundsTagAsylum
            ];
            BackgroundsList.push({
                Name: "Pandora/Ground/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Cell6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Fork6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Rest0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Second/Tunnel6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Cell6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Fork6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Rest0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel4",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel5",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Pandora/Underground/Tunnel6",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "AmandaCollarIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "AmandaIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "AsylumGGTSRoomAlert",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Bar",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "BrickWall",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Cell",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeCafeteria",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeClass2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeDetention",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeEntrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeTeacherLounge",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CollegeTennisPlay",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "CraftingWorkshop",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Dressing",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Gambling",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "grey",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "HorseStableLight",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "HypnoSpiral2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "HypnoticSpiral",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Magic",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "MagicSchoolEscape",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "MagicSchoolLaboratory",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "/Orig/Entrance",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "/Orig/Lounge",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Prison",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "RhythmGame",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "RhythmGameLoading",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom0",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom1",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom2",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahBedroom3",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SarahIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Sheet",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SheetWhite",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "Shop",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SlaveMarket",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "SophieIntro",
                Tag: [BackgroundsTagIndoor]
            });
            BackgroundsList.push({
                Name: "White",
                Tag: [BackgroundsTagIndoor]
            });
            ChatCreateBackgroundList = BackgroundsGenerateList(BackgroundsTagList);
            ChatRoomSendLocal(
	        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You can use more backgrounds now.</p>"
	    );
	} else if (content.indexOf("/bg2") == 0) {
            var bg = content.substring(4).trim();
            if (bg == 0) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: List of hidden platform backgrounds:\n" +
                    "1, 2 Balcony - 3 Ballroom\n" +
                    "4 to 6 Barn - 7 to 9 Bathroom Olivia\n" +
                    "10 Bedroom Dungeon - 11 Bedroom Edward\n" +
                    "12, 13 Bedroom Isabella - 14 Bedroom Melody\n" +
                    "15 to 17 Bedroom Olivia - 18 to 23 Birch\n" +
                    "24 Black - 25 to 27 Camp Ground\n" +
		    "28 to 30 Castle - 31, 32 Clearing\n" +
		    "33 to 35 College - 36 to 38 Countess Hall\n" + 
		    "39, 40 Dungeon 1 - 41, 42 Dungeon Cell\n" +
		    "43 to 45 Dungeon Storage - 46 Forest\n" +
                    "47 to 50 Forest Cabin - 51 Gas\n" +
		    "52 Green Plain - 53 to 63 Hall (1 to 4)\n" +
                    "64 to 69 Lake - 70 Maid Bed\n" +
                    "71 Mountain Path - 72, 73 Oak\n" +
                    "74 to 78 Plain - 79 Pond\n" +
                    "80, 81 Savannah - 82, 83 Terrace\n" +
                    "84 Vulture Plain - 85, 86 Wine Cell</p>"
                );
            } else if (bg == 1) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Balcony';
                updateBackground();
            } else if (bg == 2) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Balcony';
                updateBackground();
            } else if (bg == 3) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Ballroom';
                updateBackground();
            } else if (bg == 4) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/BarnExterior';
                updateBackground();
            } else if (bg == 5) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/BarnInterior';
                updateBackground();
            } else if (bg == 6) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BarnInterior';
                updateBackground();
            } else if (bg == 7) {
                ChatCreateBackgroundSelect = '../Screens/Room//Platform/Background/Castle/Orig/BathroomOlivia';
                updateBackground();
            } else if (bg == 8) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BathroomOlivia';
                updateBackground();
            } else if (bg == 9) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BathroomOlivia';
                updateBackground();
            } else if (bg == 10) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomDungeon';
                updateBackground();
            } else if (bg == 11) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomEdward';
                updateBackground();
            } else if (bg == 12) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomIsabella';
                updateBackground();
            } else if (bg == 13) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BedroomIsabella';
                updateBackground();
            } else if (bg == 14) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomMelody';
                updateBackground();
            } else if (bg == 15) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/BedroomOlivia';
                updateBackground();
            } else if (bg == 16) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BedroomOlivia';
                updateBackground();
            } else if (bg == 17) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/BedroomOliviaDark';
                updateBackground();
            } else if (bg == 18) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/BirchClear';
                updateBackground();
            } else if (bg == 19) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/BirchHeavy';
                updateBackground();
            } else if (bg == 20) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/BirchLight';
                updateBackground();
            } else if (bg == 21) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/ForestBirchLight';
                updateBackground();
            } else if (bg == 22) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/BirchMaze';
                updateBackground();
            } else if (bg == 23) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/ForestMaze';
                updateBackground();
            } else if (bg == 24) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Black';
                updateBackground();	
            } else if (bg == 25) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/CampGround';
                updateBackground();
            } else if (bg == 26) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/CampGround';
                updateBackground();	
            } else if (bg == 27) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/CampGroundRaft';
                updateBackground(); 
            } else if (bg == 28) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/Orig/CastleEntrance';
                updateBackground();
            } else if (bg == 29) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/CastleHall';
               updateBackground();
            } else if (bg == 30) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/CastleWall';
                updateBackground();
            } else if (bg == 31) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/SecludedClearing';
                updateBackground(); 
            } else if (bg == 32) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/SecludedClearing';
                updateBackground();
            } else if (bg == 33) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/College/CollegeArt1';
                updateBackground();
            } else if (bg == 34) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/College/CollegeClass1';
                updateBackground();
            } else if (bg == 35) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/College/CollegeHall1';
                updateBackground();
            } else if (bg == 36) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/CountessHall';
                updateBackground();
            } else if (bg == 37) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/CountessHall';
                updateBackground();
            } else if (bg == 38) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/CountessHallDeadEnd';
                updateBackground();
            } else if (bg == 39) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Dungeon1C';
                updateBackground();
            } else if (bg == 40) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Dungeon1W';
                updateBackground();
            } else if (bg == 41) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/DungeonCell';
                updateBackground();
            } else if (bg == 42) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/DungeonCell';
                updateBackground();
            } else if (bg == 43) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/DungeonStorage';
                updateBackground();
            } else if (bg == 44) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/DungeonStorage';
                updateBackground();
            } else if (bg == 45) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/DungeonStorageDark';
                updateBackground();	          
            } else if (bg == 46) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/FirLight';
                updateBackground(); 
	    } else if (bg == 47) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/CabinInterior';
                updateBackground();           
            } else if (bg == 48) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/CabinPath';
                updateBackground(); 	    
	    } else if (bg == 49) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/ForestCabin';
                updateBackground();  
	    } else if (bg == 50) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/Orig/WoodCabin';
                updateBackground();    
            } else if (bg == 51) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Gas';
                updateBackground();   
            } else if (bg == 52) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/Orig/GreenPlain';
                updateBackground();
            } else if (bg == 53) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall1C';
                updateBackground();
            } else if (bg == 54) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall1W';
                updateBackground();
            } else if (bg == 55) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall2C';
                updateBackground();
            } else if (bg == 56) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3C';
                updateBackground();
            } else if (bg == 57) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3Cv2';
                updateBackground();
            } else if (bg == 58) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3E';
                updateBackground();
            } else if (bg == 59) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall3W';
                updateBackground();
            } else if (bg == 60) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4C';
                updateBackground();
            } else if (bg == 61) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4E';
                updateBackground();
            } else if (bg == 62) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4W1';
                updateBackground();
            } else if (bg == 63) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Hall4W2';
                updateBackground();
	    } else if (bg == 64) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/LakeBetweenRocks';
                updateBackground();   
	    } else if (bg == 65) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/LakeRaft';  
                updateBackground();   
            } else if (bg == 66) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/LakeShore';
                updateBackground();           
            } else if (bg == 67) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/LakeShoreRaft';
                updateBackground();           
            } else if (bg == 68) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/MountainLake';
                updateBackground();   
            } else if (bg == 69) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Water';
                updateBackground();        
            } else if (bg == 70) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/MaidBed';
                updateBackground();
            } else if (bg == 71) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/Orig/MountainPath';
                updateBackground();          
            } else if (bg == 72) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/OakHeavy';  
                 updateBackground();               
            } else if (bg == 73) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/OakHeavy';
                 updateBackground();          
            } else if (bg == 74) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/PlainDistantLake';        
                updateBackground();          
            } else if (bg == 75) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/PlainSparseRocks';        
                updateBackground();   
            } else if (bg == 76) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/PlainToForest';        
                updateBackground();  
            } else if (bg == 77) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/PlainToSavannah';        
                updateBackground();          
            } else if (bg == 78) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/PlainWoodPath';        
                updateBackground();          
            } else if (bg == 79) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/LostPond';        
                updateBackground();   
            } else if (bg == 80) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/Savannah';        
                updateBackground();  
            } else if (bg == 81) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Savannah';
                updateBackground();    
            } else if (bg == 82) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/Terrace';
                updateBackground();
            } else if (bg == 83) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/Terrace';
                updateBackground();   
            } else if (bg == 84) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Forest/Orig/VulturePlain';
                updateBackground();
            } else if (bg == 85) {
                ChatCreateBackgroundSelect = '../Screens/Room/Platform/Background/Castle/WineCellar';
                updateBackground();
            } else if (bg == 86) {
                ChatCreateBackgroundSelect = '../Screens/Room/PlatformDialog/Background/WineCellar';
                updateBackground();
            }		
	} else if (content.indexOf("/bio") == 0) {
            var targetname = content.substring(4).trim();
            if (targetname == undefined) {
                targetname = Player.Name;
            }
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	    if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            }
            if (target[0] != null) {
                InformationSheetLoadCharacter(target[0]);
                OnlineProfileRun();
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                CommonSetScreen("Character", "OnlineProfile");
            }	
        } else if (content.indexOf("/boost") == 0) {
            LogAdd("ModifierLevel", "SkillModifier", 105);
            LogAdd("ModifierDuration", "SkillModifier", CurrentTime + 3600000);
            ChatRoomSendLocal(
	        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You feel your senses heightened(bondage/evasion). Can see change in information panel.</p>"
	    );
        } else if (content.indexOf("/chess") == 0) {
            CollegeChessGameEndALT = function() {
                document.removeEventListener("chessOnMove", CollegeChessGameProgress);
                MiniGameEnded = true;
                ChessEndStatus = "Draw";
                ElementRemove("DivChessBoard");
                CommonDynamicFunction(MiniGameReturnFunction + "()");
                CommonSetScreen("Online", "ChatRoom");
                CurrentScreen = "ChatRoom";
                ChatRoomDrawCharacter();
                ChatRoomMenuBuild();
                ChatRoomDrawBackground();
                ChatRoomLoad();
                ChatRoomClearAllElements();
            };
            CollegeChessGameStartALT = function(Difficulty) {
                CollegeChessDifficulty = parseInt(Difficulty);
                const playerStarts = Math.random() < 0.5;
                ChessCharacterWhite = playerStarts ? Player : CollegeChessOpponent;
                ChessCharacterBlack = playerStarts ? CollegeChessOpponent : Player;
                MiniGameStart("Chess", CollegeChessDifficulty, "CollegeChessGameEndALT");
                document.addEventListener("chessOnMove", CollegeChessGameProgress);
            };
            var chessdifficulty = content.substring(6).trim();
            if (this.ChessOn == false || this.ChessOn == undefined) {
                ChessOn = true;
                CommonSetScreen("Room", "CollegeChess");
                CollegeChessGameStartALT(chessdifficulty);
                setTimeout(function() {
                    CommonSetScreen("Online", "ChatRoom");
                    ElementPositionFix("DivChessBoard", null, -1000, 0);
                }, 2000);
            } else {
                ChessOn = false;
                CollegeChessGameEndALT();
            }
        } else if (content.indexOf("/clothes") == 0) {
	    if (content.endsWith("/clothes")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers put random clothes on " + tmpname + " body."
                    }]
                });
                CharacterAppearanceFullRandom(Player, true);
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(8).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers put random clothes on " + tgpname + " body."
                        }]
                    });
                    CharacterAppearanceFullRandom(target[0], true);
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }
        } else if (content.indexOf("/clubhelp") == 0) {
            CommandPrintHelpFor(Commands);
        } else if ((content.indexOf("/collarremove") == 0) || (content.indexOf("/removecollar") == 0)) {
            ServerSend("ChatRoomChat", {
                Content: "PlayerOwnerCollarRelease",
                Type: "Action",
                Dictionary: [{
                    Tag: "DestinationCharacterName",
                    Text: Player.Name,
                    MemberNumber: Player.MemberNumber
                }]
            });
            LogAdd("Released.Collar", "OwnerRule");
            InventoryRemove(Player, "ItemNeck");
            ChatRoomCharacterItemUpdate(Player, "ItemNeck");
        } else if (content.indexOf("/college") == 0) {
            ChatRoomSetLastChatRoom("");
            ServerSend("ChatRoomLeave", "");
            OnlineGameName = "";
            CommonSetScreen("Room", "CollegeEntrance");
            ChatRoomClearAllElements();
            CollegeEntranceIsWearingTennisClothes = function() {
                return true;
            }
            CollegeEntranceIsWearingCollegeClothes = function() {
                return true;
            }
            CollegeEntranceIsWearingTennisClothes = function() {
                return true;
            }
            CollegeEntranceCanGoTeacher = function() {
                return true;
            }
        } else if (content.indexOf("/colorchanger") == 0) {

            if (content.includes("custom") || content.includes("set") || content.includes("select")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.</p>"
		);
                setTimeout(function() {
                    if (CurrentCharacter.FocusGroup.Name) {
                        var RandomColor = null;
                        var ColorTargetNameCustom = CurrentCharacter;
                        if (ColorTargetNameCustom !== Player) {
                            ServerSend("ChatRoomChat", {
                                Content: "Quick-Access Menu2: " + Player.Name + " has used colorchanger on you. If this is undesired, blacklist player.",
                                Type: "Whisper",
                                Target: ColorTargetNameCustom.MemberNumber
                            })
                        };


                        if (this.ColorTarget1 == undefined) {
                            this.ColorTarget1 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget2 == undefined) {
                            this.ColorTarget2 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget3 == undefined) {
                            this.ColorTarget3 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget4 == undefined) {
                            this.ColorTarget4 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget5 == undefined) {
                            this.ColorTarget5 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget6 == undefined) {
                            this.ColorTarget6 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget7 == undefined) {
                            this.ColorTarget7 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget8 == undefined) {
                            this.ColorTarget8 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget9 == undefined) {
                            this.ColorTarget9 = CurrentCharacter.FocusGroup.Name
                        } else if (this.ColorTarget10 == undefined) {
                            this.ColorTarget10 = CurrentCharacter.FocusGroup.Name
                        }

                        ColorChangerCustom = function() {
                            setTimeout(function() {
                                ColorChangerCustom()
                            }, 1000);
                            RandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            if (this.ColorTarget1) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget1);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget1);
                            };
                            if (this.ColorTarget2) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget2);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget2);
                            };
                            if (this.ColorTarget3) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget3);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget3);
                            };
                            if (this.ColorTarget4) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget4);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget4);
                            };
                            if (this.ColorTarget5) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget5);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget5);
                            };
                            if (this.ColorTarget6) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget6);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget6);
                            };
                            if (this.ColorTarget7) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget7);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget7);
                            };
                            if (this.ColorTarget8) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget8);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget8);
                            };
                            if (this.ColorTarget9) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget9);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget9);
                            };
                            if (this.ColorTarget510) {
                                CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget10);
                                ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget10);
                            };
                        };
                        ColorChangerCustom();
                        DialogLeave();
                    }
                }, 5000);
            } else if (content.includes("eyes")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.</p>"
		);
                setTimeout(function() {
                    if (CurrentCharacter) {
                        var ColorTargetNameEyes = CurrentCharacter;
                        ColorChangerEyes = function() {
                            setTimeout(function() {
                                ColorChangerEyes()
                            }, 1000);
                            var RandomColor = null;
                            RandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            InventoryGet(ColorTargetNameEyes, "Eyes").Color = RandomColor
                            InventoryGet(ColorTargetNameEyes, "Eyes2").Color = RandomColor
                            ChatRoomCharacterItemUpdate(ColorTargetNameEyes, "Eyes");
                            ChatRoomCharacterItemUpdate(ColorTargetNameEyes, "Eyes2");
                        };
                        ColorChangerEyes();
                        DialogLeave();
                        if (ColorTargetNameEyes !== Player) {
                            ServerSend("ChatRoomChat", {
                                Content: "Quick-Access Menu2: " + Player.Name + " has used colorchanger on you. If this is undesired, blacklist player.",
                                Type: "Whisper",
                                Target: ColorTargetNameEyes.MemberNumber
                            })
                        };
                    }
                }, 5000);
            } else if (content.includes("hair")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.</p>"
		);
                setTimeout(function() {
                    if (CurrentCharacter) {
                        var ColorTargetNameHair = CurrentCharacter;
                        ColorChangerHair = function() {
                            setTimeout(function() {
                                ColorChangerHair()
                            }, 1000);
                            var RandomColor = null;
                            RandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                            InventoryGet(ColorTargetNameHair, "HairFront").Color = RandomColor
                            InventoryGet(ColorTargetNameHair, "HairBack").Color = RandomColor
                            ChatRoomCharacterItemUpdate(ColorTargetNameHair, "HairFront");
                            ChatRoomCharacterItemUpdate(ColorTargetNameHair, "HairBack");
                        };
                        ColorChangerHair();
                        DialogLeave();
                        if (ColorTargetNameHair !== Player) {
                            ServerSend("ChatRoomChat", {
                                Content: "Quick-Access Menu2: " + Player.Name + " has used colorchanger on you. If this is undesired, blacklist player.",
                                Type: "Whisper",
                                Target: ColorTargetNameHair.MemberNumber
                            })
                        };
                    }
                }, 5000);
            } else if (content.includes("stop") || content.includes("reset")) {
                ColorChangerCustom = function() {};
                ColorChangerEyes = function() {};
                ColorChangerHair = function() {};
                this.ColorTarget1 = undefined;
                this.ColorTarget2 = undefined;
                this.ColorTarget3 = undefined;
                this.ColorTarget4 = undefined;
                this.ColorTarget5 = undefined;
                this.ColorTarget6 = undefined;
                this.ColorTarget7 = undefined;
                this.ColorTarget8 = undefined;
                this.ColorTarget9 = undefined;
                this.ColorTarget10 = undefined;
                this.ColorTargetNameCustom = undefined;
            } else if (content.endsWith("/colorchanger")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The colorchanger command:\n" +
                    "To preselect, two choices exist, type: <b>/colorchanger hair</b> or <b>/colorchanger eyes</b>\n" +
                    "To manually select area, type: <b>/colorchanger set</b> or <b>/colorchanger select</b> or <b>/colorchanger custom</b>\n" +
                    "Manual selection can only target 10 areas at a time,\n" +
                    "then requires to be reset to reuse, type: <b>/colorchanger stop</b> or <b>/colorchanger reset</b>\n" +
                    "Only 1 target can be active at a time</p>"
                );
            }
        } else if (content.indexOf("/cum") == 0) {
            ActivityOrgasmRuined = false;
            ActivityOrgasmStart(Player);
        } else if (content.indexOf("/diaper") == 0) {
            if (content.includes("change1")) {
	        if (content.endsWith("/change1")) {
                    refreshDiaper("panties");
                } else {      
                    var stringChange1 = content;
                    var stringChange2 = stringChange1.split(/[ ,]+/);
                    var targetname = stringChange2[2];
                    var targetfinder = new RegExp('^' + targetname + '', 'i');
                    var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
		    if (target[0] == null) {
                        var targetnumber = parseInt(targetname);
                        target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                    }
                    if ((target[0] != null) && (checkForDiaper("Panties")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Quick-Access Menu2: " + tmpname + " will change your normal diapers and allows you to use the /diaper change1 command.",
                            Type: "Whisper",
                            Target: target[0].MemberNumber
                        })
                    };
		    ChatRoomSetTarget(null);
                }
            } else if (content.includes("change2")) {
                if (content.endsWith("/change2")) {
                    refreshDiaper("chastity");
                } else {      
                    var stringChange1 = content;
                    var stringChange2 = stringChange1.split(/[ ,]+/);
                    var targetname = stringChange2[2];
                    var targetfinder = new RegExp('^' + targetname + '', 'i');
                    var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
		    if (target[0] == null) {
                        var targetnumber = parseInt(targetname);
                        target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                    }
                    if ((target[0] != null) && (checkForDiaper("ItemPelvis")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Quick-Access Menu2: " + tmpname + " will change your chastity diapers and allows you to use the /diaper change2 command.",
                            Type: "Whisper",
                            Target: target[0].MemberNumber
                        })
                    };
		    ChatRoomSetTarget(null);
                }    
            } else if (content.includes("change3")) {
	        if (content.endsWith("/change3")) {
                    refreshDiaper("both");
                } else {      
                    var stringChange1 = content;
                    var stringChange2 = stringChange1.split(/[ ,]+/);
                    var targetname = stringChange2[2];
                    var targetfinder = new RegExp('^' + targetname + '', 'i');
                    var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
		    if (target[0] == null) {
                        var targetnumber = parseInt(targetname);
                        target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                    }
                    if ((target[0] != null) && (checkForDiaper("Panties") && (checkForDiaper("ItemPelvis")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Quick-Access Menu2: " + tmpname + " will change all your diapers and allows you to use the /diaper change3 command.",
                            Type: "Whisper",
                            Target: target[0].MemberNumber
                        })
                    };
		    ChatRoomSetTarget(null);
                }        	    
            } else if (content.includes("setdesperation")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.desperationLevel = setchange;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your desperation level has been changed.</p>"
		);
            } else if (content.includes("setmesschance")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.messChance = setchange;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your chance to mess diapers has been changed.</p>"
		);
            } else if (content.includes("setmess1")) {
                if (InventoryGet(Player, "Panties") != null) {
                    if (InventoryGet(Player, "Panties").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "Panties").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange < diaperDefaultValues.wetLevelInner) {
                            diaperDefaultValues.messLevelInner = setchange;
                            ChatRoomSendLocal(
			        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your mess level for normal diapers has been changed.</p>"
			    );
                        }
                    }
                }
            } else if (content.includes("setmess2")) {
                if (InventoryGet(Player, "ItemPelvis") != null) {
                    if (InventoryGet(Player, "ItemPelvis").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "ItemPelvis").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange < diaperDefaultValues.wetLevelOuter) {
                            diaperDefaultValues.messLevelOuter = setchange;
                            ChatRoomSendLocal(
			        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your mess level for chastity diapers has been changed.</p>"
			    );
                        }
                    }
                }
            } else if (content.includes("setregression")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.regressionLevel = setchange;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your regression level has been changed.</p>"
		);
            } else if (content.includes("settimer")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.baseTimer = setchange;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your wet/mess timer has been changed.</p>"
		);
            } else if (content.includes("setwetchance")) {
                var stringSet1 = content;
                var stringSet2 = stringSet1.split(/[ ,]+/);
                var setchange = stringSet2[2];
                diaperDefaultValues.wetChance = setchange;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your chance to wet diapers has been changed.</p>"
		);
            } else if (content.includes("setwet1")) {
                if (InventoryGet(Player, "Panties") != null) {
                    if (InventoryGet(Player, "Panties").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "Panties").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange > diaperDefaultValues.messLevelInner) {
                            diaperDefaultValues.wetLevelInner = setchange;
                            ChatRoomSendLocal(
			        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your wet level for normal diapers has been changed.</p>"
			    );
                        }
                    }
                }
            } else if (content.includes("setwet2")) {
                if (InventoryGet(Player, "ItemPelvis") != null) {
                    if (InventoryGet(Player, "ItemPelvis").Asset.Name == "BulkyDiaper" || InventoryGet(Player, "ItemPelvis").Asset.Name === "PoofyDiaper") {
                        var stringSet1 = content;
                        var stringSet2 = stringSet1.split(/[ ,]+/);
                        var setchange = stringSet2[2];
                        if (setchange > diaperDefaultValues.messLevelOuter) {
                            diaperDefaultValues.wetLevelOuter = setchange;
                            ChatRoomSendLocal(
			        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your wet level for chastity diapers has been changed.</p>"
			    );
                        }
                    }
                }
            } else if (content.includes("start")) {
                diaperWetter();
            } else if (content.includes("stop")) {
                stopWetting();
            } else if (content.includes("tick")) {
                diaperTick();
            } else if (content.endsWith("/diaper")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The diaper command must include an action.\n" +
                    "You need to wear one or two layers of diapers (only bulky and poofy versions)\n" +
                    "<b>/diaper start</b> to enable the script\n" +
                    "<b>/diaper stop</b> to disable the script\n" +
                    "<b>/diaper tick</b> to force a tick\n" +
                    " \n" +
                    "To get new clean diapers:\n" +
                    "<b>/diaper change1</b> (target) for normal diapers\n" +
                    "<b>/diaper change2</b> (target) for chastity diapers\n" +
                    "<b>/diaper change3</b> (target) for both diapers\n" +
                    " \n" +
                    "Customisation (before using /diaper start):\n" +
                    "Use <b>/diaper custom</b> for detailed info</p>"
                );
            } else if (content.includes("custom")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Diaper customisation (before using /diaper start):\n" +
                    "<b>/diaper setdesperation</b> (value between 0 and 3) for desperation level, normally controlled by having a milk bottle used on you\n" +
                    "<b>/diaper setregression</b> (value between 0 and 3) for regression level, normally controlled by wearing Nursery Milk for an extended period of time\n" +
                    "<b>/diaper settimer</b> (minutes) to change the wet/mess timer\n" +
                    "<b>/diaper setwetchance</b> (value between 0 and 1) to control how often you will wet\n" +
                    "<b>/diaper setmesschance</b> (value between 0 and 1) to control how often you will mess. Make sure this is lower than wetchance.\n" +
                    "<b>/diaper setwet1</b> (value)* for wet level of normal diapers\n" +
                    "<b>/diaper setwet2</b> (value)* for wet level of chastity diapers\n" +
                    "<b>/diaper setmess1</b> (value)* for mess level of normal diapers\n" +
                    "<b>/diaper setmess2</b> (value)* for mess level of chastity diapers - * = value between 0 and 2</p>"
                );
            }
        } else if (content.indexOf("/difficulty") == 0) {
            if (content.endsWith("/difficulty")) {
		 ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The difficulty command must be followed by a number between 0 and 3.\n" +
                    " \n" +
                    "Available difficulty modes:\n" +
                    "0 roleplay\n" +
                    "1 regular\n" +
                    "2 hardcore\n" +
                    "3 extreme</p>"
                 );      
            } else {
                PreferenceDifficultyLevel = content.substring(11).trim() * 1;
            }
            if ((PreferenceDifficultyLevel > -1) && (PreferenceDifficultyLevel < 4) && (PreferenceDifficultyLevel != Player.Difficulty.Level)) {
                PreferenceDifficultyAccept = true;
                Player.Difficulty = {
                    LastChange: CurrentTime,
                    Level: PreferenceDifficultyLevel
                };
                ServerSend("AccountDifficulty", PreferenceDifficultyLevel);
                PreferenceInitPlayer();
                LoginDifficulty(true);
            }
        } else if (content.indexOf("/erase") == 0) {
            ElementRemove("TextAreaChatLog");
        } else if (content.indexOf("/font") == 0) {
            if (content.endsWith("/font")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The font command must be followed by a font number and optionally a size number.\n" +
                    "The effect will be visible in the chat after an automatic relog.\n" +
                    "Supported fonts: 0 Arial - 1 Times New Roman\n" +
                    "2 Papyrus - 3 Comic Sans - 4 Impact\n" +
                    "5 Helvetica Neue - 6 Verdana - 7 Century Gothic\n" +
                    "8 Georgia - 9 Courrier New - 10 Copperplate\n" +
                    "Sizes: 0 Small - 1 Medium - 2 Large</p>"
                );
            } else {
                var stringFont1 = content;
                var stringFont2 = stringFont1.split(/[ ,]+/);
                var font = stringFont2[1];
                var size = stringFont2[2];
                Player.GraphicsSettings.Font = PreferenceGraphicsFontList[font];
                CommonGetFont.clearCache();
                CommonGetFontName.clearCache();
                DrawingGetTextSize.clearCache();
                if ((size > -1) && (size < 3)) {
                    Player.ChatSettings.FontSize = PreferenceChatFontSizeList[size];
                    ChatRoomRefreshFontSize();
                }
                ServerAccountUpdate.QueueData({
                    ChatSettings: Player.ChatSettings
                });
                ServerAccountUpdate.QueueData({
                    GraphicsSettings: Player.GraphicsSettings
                });
                ServerSocket.close();
                ServerSocket.open();
            }
        } else if (content.indexOf("/frlist") == 0) {
            setTimeout(function() {
                ChatRoomSpace = "";
                CommonSetScreen("Online", "ChatSearch");
                ChatRoomSetLastChatRoom("");
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                ElementRemove("InputSearch");
                FriendListReturn = {
                    Screen: CurrentScreen,
                    Module: CurrentModule
                };
                CommonSetScreen("Character", "FriendList");
            }, 3000);
            setTimeout(function() {
                FriendListExit();
                CommonSetScreen("Online", "ChatRoom");
                document.getElementById("InputChat").style.display = "inline";
                document.getElementById("TextAreaChatLog").style.display = "inline";
            }, 15000);
        } else if (content.indexOf("/gagcode") == 0) {
            if (this.GagTalkOff == undefined | this.GagTalkOff == false) {
                GagTalkOff = true;
                gagSpeak();
                window.SpeechGarble = NewSpeechGarble;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Gag Talk is decoded.</p>"
		);
            } else {
                GagTalkOff = false;
                window.SpeechGarble = OldSpeechGarble;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Gag Talk is not decoded.</p>"
		);
            }
	} else if (content.indexOf("/gagtalk") == 0) {          
            if (content.endsWith("/gagtalk")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The gagtalk command must be followed by a number between 1 and 8, then your message.\n" +
                    " \n" +
                    "Available talk modes:\n" +                 
                    "1 very light gag talk\n" +
                    "2 light gag talk\n" +
                    "3 easy gag talk\n" +
                    "4 normal gag talk\n" +
                    "5 medium gag talk\n" +
                    "6 heavy gag talk\n" +
                    "7 very heavy gag talk\n" +
                    "8 total gag talk\n" +
		    "9 real gag talk</p>"
                );
            } else {
                var stringGag1 = content;
                var stringGag2 = stringGag1.split(/[ ,]+/);
                var gaglevel = stringGag2[1];
                if ((gaglevel > 0) && (gaglevel < 9)) {  
                    gl = gaglevel; 
		}
                if (gaglevel == 9) {  
                    gl = SpeechGetTotalGagLevel(Player);
                }
                if ((gaglevel > 0) && (gaglevel < 10)) {  	
                    content = SpeechGarbleByGagLevel(gl, content.substring(11).trim());
		    if (ChatRoomTargetMemberNumber == null) {
                        ServerSend("ChatRoomChat", {
                            "Content": content,
                            "Type": "Chat"
                        }); 
                    } else {
                        ServerSend("ChatRoomChat", { 
                            "Content": content, 
                            "Type": "Whisper", 
                            "Target": ChatRoomTargetMemberNumber
                        });
                        for (let C = 0; C < ChatRoomCharacter.length; C++)
			    if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		                TargetName = ChatRoomCharacter[C].Name;
				break;
			    }
			ChatRoomMessage({ 
                            Content: "Whisper to "+TargetName+": "+ content, 
                            Type: "LocalMessage", 
                            Sender: Player.MemberNumber 
                        });
			document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
			document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                    }            
                }
            }
        } else if (content.indexOf("/game") == 0) {
            if (content.endsWith("/game")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The game command must include a minigame.\n" +
                    "Available minigames:\n" +
                    "carrot, cleaning, dojo, drinks, hurdle, kidnap, puppy,\n" +
                    "rhythm, training, whippony.\n" +
                    "Training is the trainer version of the hurdle game.\n" +
                    "You need to click on the maid in the Maid Quarters for the cleaning, drinks and rhythm games.</p>"
                );
            } else {
                ServerSend("ChatRoomLeave", "");
                ChatRoomSetLastChatRoom("");
                OnlineGameName = "";
                ChatRoomClearAllElements();
                if (content.includes("carrot")) {
                    CommonSetScreen("Room", "Stable");
                    StableDressPonyStart();
                    StableWearPonyEquipment(Player);
                    MiniGameStart("HorseWalk", "Carrot", "StablePonyEnd");
                } else if (content.includes("cleaning")) {
                    CommonSetScreen("Room", "MaidQuarters");
                    GameType = "MaidCleaning";
                    MaidQuartersMaid.Stage = "400";
                } else if (content.includes("dojo")) {
                    CommonSetScreen("Room", "Introduction");
                    IntroductionJobStart("SubDojo", 0)
                    IntroductionJobDojoStart();
                } else if (content.includes("drinks")) {
                    CommonSetScreen("Room", "MaidQuarters");
                    GameType = "MaidDrinks";
                    MaidQuartersMaid.Stage = "200";
                } else if (content.includes("hurdle")) {
                    CommonSetScreen("Room", "Stable");
                    StableDressPonyStart();
                    StableWearPonyEquipment(Player);
                    MiniGameStart("HorseWalk", "Hurdle", "StablePonyEnd");
                } else if (content.includes("kidnap")) {
                    CommonSetScreen("Room", "Introduction");
                    IntroductionJobStart("DomKidnap", 0)
                    IntroductionJobBouncerStart();
                } else if (content.includes("puppy")) {
                    CommonSetScreen("Room", "Introduction");
                    IntroductionJobStart("DomPuppy", 0)
                    IntroductionJobPuppyStart();
                } else if (content.includes("rhythm")) {
                    CommonSetScreen("Room", "MaidQuarters");
                    GameType = "RhythmGame";
                    MaidQuartersMaid.Stage = "500";
                } else if (content.includes("training")) {
                    CommonSetScreen("Room", "Stable");
                    StablePlayerAppearance = Player.Appearance.slice();
                    StableWearTrainerEquipment(Player);
                    MiniGameStart("HorseWalk", "HurdleTraining", "StableTrainerEnd");
                } else if (content.includes("whippony")) {
                    CommonSetScreen("Room", "Stable");
                    StablePlayerAppearance = Player.Appearance.slice();
                    StableWearTrainerEquipment(Player);
                    MiniGameStart("HorseWalk", "WhipPony", "StableTrainerEnd");
                }
            }
        } else if (content.indexOf("/ggts") == 0) {
            var stringGgts1 = content;
            var stringGgts2 = stringGgts1.split(/[ ,]+/);
            var minutes = stringGgts2[1];
            var level = stringGgts2[2];
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + " gets grabbed by two maids and locked in the asylum for " + minutes + " minutes of training with the Good Girl Training System Level " + level + "."
                }]
            });
            DialogLentLockpicks = false;
            ChatRoomClearAllElements();
            ServerSend("ChatRoomLeave", "");
            CharacterDeleteAllOnline();
            AsylumGGTSLock(minutes, TextGet("GGTSIntro"));
            AsylumGGTSStartLevel(level);
        } else if (content.indexOf("/giveeverything") == 0) {
            ChatRoomSendLocal(
	        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Every item in the game now added.</p>"
	    );
            AssetFemale3DCG.forEach(group => group.Asset.forEach(item => InventoryAdd(Player, item.Name, group.Group)));
            ServerPlayerInventorySync();
	} else if (content.indexOf("/hear") == 0) {
             if (content.endsWith("/hear")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The hear command must be followed by a number between 0 and 4.\n" +
                    " \n" +
                    "Available hearing modes:\n" +
                    "0 normal hearing\n" +
                    "1 light deafness\n" +
                    "2 normal deafness\n" +
                    "3 heavy deafness\n" +
                    "4 total deafness</p>"
                 );
             } else {
                 var dl = content.substring(5).trim();
                     if (dl == 0) { 
                         GetDeafLevel0();
                         Player.GetDeafLevel = GetDeafLevel0;
                         Player.GetDeafLevel();
		         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Back to normal hearing mode.</p>"
			 );
                     } 
                     if (dl == 1) { 
		         GetDeafLevel1();
                         Player.GetDeafLevel = GetDeafLevel1;
                         Player.GetDeafLevel();
                         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in light deafness mode.</p>"
			 );
                     } 
                    if (dl == 2) { 
		        GetDeafLevel2(); 
                        Player.GetDeafLevel = GetDeafLevel2;
                        Player.GetDeafLevel();
                        ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in normal deafness mode.</p>"
			);
                     } 
                   if (dl == 3) { 
			GetDeafLevel3(); 
                        Player.GetDeafLevel = GetDeafLevel3;
                        Player.GetDeafLevel();
                        ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in heavy deafness mode.</p>"
			);
                     } 
                  if (dl == 4) { 
		       GetDeafLevel4();
                       Player.GetDeafLevel = GetDeafLevel4;
                       Player.GetDeafLevel();
                       ChatRoomSendLocal(
	                   "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in total deafness mode.</p>"
		       );
                     } 
              }	
        } else if (content.indexOf("/hiddenmessages") == 0) {
            if (this.HiddenMessagesOn == undefined || this.HiddenMessagesOn == false) {
                HiddenMessagesOn = true;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Hidden messages revealed.</p>"
		);
                (typeof oldChatRoomMessage !== 'undefined') && (ChatRoomMessage = oldChatRoomMessage); //reset
                newChatRoomMessage = function(data) {
                    if (data.Type == "Hidden") {
                        ChatRoomMessage({
                            Content: "HiddenMessage:" + data.Content,
                            Type: "LocalMessage",
                            Sender: Player.MemberNumber
                        });
                    }
                    oldChatRoomMessage(data);
                }
                window.oldChatRoomMessage = ChatRoomMessage;
                window.ChatRoomMessage = newChatRoomMessage;
            } else {
                HiddenMessagesOn = false;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Hidden messages hidden.</p>"
		);
                (typeof oldChatRoomMessage !== 'undefined') && (ChatRoomMessage = oldChatRoomMessage); //reset
                newChatRoomMessage = function(data) {}
            }
	} else if (content.indexOf("/invisible1") == 0) {
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "Magical lasers make " + tmpname + " completely invisible."
               }]
            });   
            InventoryWear(Player, "AnalHook", "ItemButt");
            window.InventoryGet(window.Player, "ItemButt").Property = {
                Type: "Hair",
                Hide: [
                    "Activity",
                    "Blush",
                    "BodyLower",
                    "BodyUpper",
                    "Bra",
                    "Bracelet",
                    "Cloth",
                    "ClothAccessory",
                    "ClothLower",
                    "Corset",  
                    "Emoticon",
                    "Eyebrows",
                    "Eyes",
                    "Eyes2",
                    "Face",
                    "Fluids",
                    "Garters",
                    "Glasses",
                    "Gloves",
                    "HairAccessory1",
                    "HairAccessory2",
                    "HairAccessory3",
                    "HairBack",
                    "HairFront",
                    "Hands",
                    "Hat",
                    "Head",
                    "ItemAddon",
                    "ItemArms",
                    "ItemBoots",
                    "ItemBreast",
                    "ItemDevices",
                    "ItemEars",
                    "ItemFeet",
		    "ItemHandheld",
                    "ItemHands",
                    "ItemHead",
                    "ItemHood",   
                    "ItemLegs",
                    "ItemMisc",
                    "ItemMouth",
                    "ItemMouth2",
                    "ItemMouth3",
                    "ItemNeck",
                    "ItemNeckAccessories",
                    "ItemNeckRestraints",
                    "ItemNose",
                    "ItemNipples",
                    "ItemNipplesPiercings",
                    "ItemPelvis",
                    "ItemTorso",
                    "ItemTorso2",
                    "ItemVulva",                        
                    "ItemVulvaPiercings",                        
                    "LeftAnklet", 
		    "LeftHand",
                    "Mask",
                    "Mouth",
                    "Necklace",
                    "Nipples",
                    "Panties",
                    "Pussy",
                    "RightAnklet",
		    "RightHand",
                    "Shoes",
                    "Socks",
                    "Suit",
                    "SuitLower",
                    "TailStraps",
                    "Wings"    
                ]
            }	
            ServerPlayerAppearanceSync();
        } else if (content.indexOf("/invisible2") == 0) {
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "Magical lasers make " + tmpname + " completely invisible."
                }]
            });   
            InventoryWear(Player, "Glitter", "Mask", "#664433");
            window.InventoryGet(window.Player, "Mask").Property = {
                Type: "MidFrecklesSmall",
                Hide: [
                    "Activity",
                    "Blush",
                    "BodyLower",
                    "BodyUpper",
                    "Bra",
                    "Bracelet",
                    "Cloth",
                    "ClothAccessory",
                    "ClothLower",
                    "Corset",  
                    "Emoticon",
                    "Eyebrows",
                    "Eyes",
                    "Eyes2",
                    "Face",
                    "Fluids",
                    "Garters",
                    "Glasses",
                    "Gloves",
                    "HairAccessory1",
                    "HairAccessory2",
                    "HairAccessory3",
                    "HairBack",
                    "HairFront",
                    "Hands",
                    "Hat",
                    "Head",
                    "ItemAddon",
                    "ItemArms",
                    "ItemBoots",
                    "ItemBreast",
                    "ItemButt",
                    "ItemDevices",
                    "ItemEars",
                    "ItemFeet",
	            "ItemHandheld",
                    "ItemHands",
                    "ItemHead",
                    "ItemHood",   
                    "ItemLegs",
                    "ItemMisc",
                    "ItemMouth",
                    "ItemMouth2",
                    "ItemMouth3",
                    "ItemNeck",
                    "ItemNeckAccessories",
                    "ItemNeckRestraints",
                    "ItemNose",
                    "ItemNipples",
                    "ItemNipplesPiercings",
                    "ItemPelvis",
                    "ItemTorso",
                    "ItemTorso2",
                    "ItemVulva",                        
                    "ItemVulvaPiercings",                        
                    "LeftAnklet", 
		    "LeftHand",
                    "Mouth",
                    "Necklace",
                    "Nipples",
                    "Panties",
                    "Pussy",
                    "RightAnklet",
		    "RightHand",
                    "Shoes",
                    "Socks",
                    "Suit",
                    "SuitLower",
                    "TailStraps",
                    "Wings"    
                ]
            }	
	    ServerPlayerAppearanceSync();
        } else if (content.indexOf("/kd") == 0) {
            ArcadeKinkyDungeonEnd = function() {
                CommonSetScreen("Online", "ChatRoom");
                document.getElementById("InputChat").style.display = "inline";
                document.getElementById("TextAreaChatLog").style.display = "inline";
            }; //rewrite end to return to chatroom and restore chat
            ArcadeDeviousChallengeAllowed = function() {} //null to always allow
	    if (content.includes("debug")) {
		    TestMode = true;
                    KDDebugMode = true;
                    ChatRoomSendLocal(
		        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: KD Debug mode enabled</p>"
		    );
            } else if (content.includes("devious")) {
                if (this.DeviousOn == undefined || this.DeviousOn == false) {
                    DeviousOn = true;
                    ArcadeDeviousChallenge = true;
                    LogAdd("DeviousChallenge", "Arcade", 1, true);
                    ChatRoomSendLocal(
		        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Devious Challenge enabled</p>"
		    );
                } else {
                    DeviousOn = false;
                    ArcadeDeviousChallenge = false;
                    LogDelete("DeviousChallenge", "Arcade", true);
                    ChatRoomSendLocal(
		        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Devious Challenge disabled</p>"
		    );
                }
            } else {
                ArcadeRun();
                ArcadeKinkyDungeonStart(ReputationChange("Gaming"));
                document.getElementById("InputChat").style.display = "none";
                document.getElementById("TextAreaChatLog").style.display = "none";
                if (content.endsWith("/kd")) {
                } else if (content.includes("maxstats")) {                     
                    setTimeout(function() {  
                         KinkyDungeonAddGold(999999);
                         KinkyDungeonBlueKeys = 999;
                         KinkyDungeonEnchantedBlades = 999;
                         KinkyDungeonLockpicks = 999;
                         KinkyDungeonNormalBlades = 999;
                         KinkyDungeonMysticSeals = 999;
                         KinkyDungeonRedKeys = 999;
			 KinkyDungeonSpellPoints = 999;
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionFrigid, +99);
			 KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionInvisibility, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionMana, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionStamina, +99);
			 KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionWill, +99);
                     }, 5000);   
		 } else if (content.includes("moreitems")) {  
		     setTimeout(function() {  
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSource, +99);  
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSourceSpent, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Bola, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Bomb, +99);         
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.EarthRune, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Ectoplasm, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ElfCrystal, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.EnchantedGrinder, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.IceRune, +99); 
			 KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ManaOrb, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.MistressKey, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollArms, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollLegs, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollPurity, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollVerbal, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.SmokeBomb, +99);
                         KinkyDungeonChangeConsumable(KinkyDungeonConsumables.WaterRune, +99);
 	             }, 5000); 		 
                 } else if (content.includes("outfits")) {                     
                     setTimeout(function() {    
			 KinkyDungeonInventoryAddOutfit("BlueSuit");
                         KinkyDungeonInventoryAddOutfit("BlueSuitPrison");
                         KinkyDungeonInventoryAddOutfit("Dragon");
                         KinkyDungeonInventoryAddOutfit("Elven");
                         KinkyDungeonInventoryAddOutfit("JailUniform");
                         KinkyDungeonInventoryAddOutfit("Maid");
                         KinkyDungeonInventoryAddOutfit("Obsidian");
                         KinkyDungeonInventoryAddOutfit("Wolfgirl");
                     }, 5000);  
		 } else if (content.includes("remove")) {                     
                     setTimeout(function() { 
                   KinkyDungeonRemoveRestraint("ItemAddon");      
                   KinkyDungeonRemoveRestraint("ItemArms");
                   KinkyDungeonRemoveRestraint("ItemBoots");
                   KinkyDungeonRemoveRestraint("ItemBreast");
                   KinkyDungeonRemoveRestraint("ItemButt");
                   KinkyDungeonRemoveRestraint("ItemDevices");
                   KinkyDungeonRemoveRestraint("ItemEars");                     
                   KinkyDungeonRemoveRestraint("ItemFeet");
                   KinkyDungeonRemoveRestraint("ItemHands");
                   KinkyDungeonRemoveRestraint("ItemHead");
                   KinkyDungeonRemoveRestraint("ItemHood");
                   KinkyDungeonRemoveRestraint("ItemLegs");
                   KinkyDungeonRemoveRestraint("ItemMisc");
                   KinkyDungeonRemoveRestraint("ItemMouth");
                   KinkyDungeonRemoveRestraint("ItemMouth2");
                   KinkyDungeonRemoveRestraint("ItemMouth3");
                   KinkyDungeonRemoveRestraint("ItemNeck");
                   KinkyDungeonRemoveRestraint("ItemNeckAccessories");
                   KinkyDungeonRemoveRestraint("ItemNeckRestraints");
                   KinkyDungeonRemoveRestraint("ItemNipples");
                   KinkyDungeonRemoveRestraint("ItemNipplesPiercings");
                   KinkyDungeonRemoveRestraint("ItemNose");
                   KinkyDungeonRemoveRestraint("ItemPelvis");
                   KinkyDungeonRemoveRestraint("ItemTorso");
                   KinkyDungeonRemoveRestraint("ItemTorso2");
                   KinkyDungeonRemoveRestraint("ItemVulva");
                   KinkyDungeonRemoveRestraint("ItemVulvaPiercings");
                     }, 5000); 	 
	         } else if (content.includes("restraints")) {                     
                     setTimeout(function() {  
                         for (var i = 0; i < KinkyDungeonRestraints.length; i++){
                             if(!Object.hasOwn(KinkyDungeonRestraints[i], "events")){
                                 KinkyDungeonInventoryAdd({"name": KinkyDungeonRestraints[i].name, "type": "looserestraint", "quantity": 2});
                             } else {
                                 KinkyDungeonInventoryAdd({"name": KinkyDungeonRestraints[i].name, "type": "looserestraint", "events": KinkyDungeonRestraints[i].events, "quantity": 2});
                             }
                         }                 
                     }, 5000); 
		 } else if (content.includes("spells")) {  
                     setTimeout(function() {  
                         KinkyDungeonSpells = [	
                             {name: "APUp1", 
			      school: "Any", 
			      manacost: 0, 
			      components: [], 
			      level:2, 
			      passive: true, 
			      type:"", 
			      onhit:"", 
			      time: 0, 
			      delay: 0, 
			      range: 0, 
			      lifetime: 0, 
			      power: 0, 
			      damage: "inert"
			     },
                             {name: "APUp2",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
                             {name: "APUp3",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
			     {name: "IronWill", 
			      tags: ["utility"], 
			      school: "Elements", 
			      spellPointCost: 2, 
			      manacost: 0, 
			      components: [], 
			      level:1, 
			      passive: true, 
			      type:"", onhit:"", 
			      time: 0, 
			      delay: 0, 
			      range: 0, 
			      lifetime: 0, 
			      power: 0, 
			      damage: "inert", 
			      events: [{type: "IronWill", trigger: "calcMaxStats", power: 0.4},]
			     },
                             {name: "MPUp1",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
                             {name: "MPUp2",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
                             {name: "MPUp3",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
                             {name: "SPUp1",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },    
			     {name: "StaffUser1", 
			      tags: ["utility"], 
			      school: "Elements", 
			      manacost: 0, 
			      components: [], 
			      level:1, 
			      passive: true, 
			      type:"", 
			      onhit:"", 
			      time: 0, 
			      delay: 0, 
			      range: 0, 
			      lifetime: 0, 
			      power: 0, 
			      damage: "inert", 
			      events: [{type: "StaffUser1", trigger: "afterCalcMana", power: 0.8},]
			     },
		             {name: "StaffUser2", 
			      tags: ["utility"], 
			      prerequisite: "StaffUser1", 
			      school: "Elements", 
			      manacost: 0, 
			      components: [], 
			      level:2, 
			      passive: true, 
			      type:"", 
			      onhit:"", 
			      time: 0, 
			      delay: 0, 
			      range: 0, 
			      lifetime: 0, 
			      power: 0.5, 
			      damage: "inert", 
			      events: [{type: "IncreaseManaPool", trigger: "calcMaxStats", power: 10},]
			     },
		             {name: "StaffUser3", 
			      tags: ["utility"], 
			      prerequisite: "StaffUser2", 
			      school: "Elements", 
			      manacost: 0, 
			      components: [], 
			      level:3, 
			      passive: true, 
			      type:"", 
			      onhit:"", 
			      time: 0, 
			      delay: 0, 
			      range: 0, 
			      lifetime: 0, 
			      power: 0, 
			      damage: "inert", 
			      events: [{type: "StaffUser3", trigger: "beforeMultMana", power: 0.75},]
			     },
                             {name: "SummonUp1",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:2,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
                             {name: "SummonUp2",
			      school: "Any",
			      manacost: 0,
			      components: [],
			      level:3,
			      passive: true,
			      type:"",
			      onhit:"",
			      time: 0,
			      delay: 0,
			      range: 0,
			      lifetime: 0,
			      power: 0,
			      damage: "inert"
			     },
			     {name: "WPUp1", 
			      school: "Any", 
			      hide: true, 
			      manacost: 0, 
			      components: [], 
			      level:2, 
			      passive: true, 
			      type:"", 
			      onhit:"", 
			      time: 0, 
			      delay: 0, 
			      range: 0, 
			      lifetime: 0, 
			      power: 0, 
			      damage: "inert"
			     },
                         ];
                     }, 5000);             
		 } else if (content.includes("weapons")) {                     
                     setTimeout(function() {  
			 KinkyDungeonInventoryAddWeapon("Arbiter");
			 KinkyDungeonInventoryAddWeapon("ArcaneCrystal");
                         KinkyDungeonInventoryAddWeapon("Axe");
                         KinkyDungeonInventoryAddWeapon("BoltCutters");
                         KinkyDungeonInventoryAddWeapon("BondageBuster");
                         KinkyDungeonInventoryAddWeapon("Dragonslaver");
			 KinkyDungeonInventoryAddWeapon("Dreamcatcher");
                         KinkyDungeonInventoryAddWeapon("EnchKnife");                   
                         KinkyDungeonInventoryAddWeapon("EscortDrone");
                         KinkyDungeonInventoryAddWeapon("Feather");
                         KinkyDungeonInventoryAddWeapon("Flail");
                         KinkyDungeonInventoryAddWeapon("Flamberge");
			 KinkyDungeonInventoryAddWeapon("FourSeasons");
                         KinkyDungeonInventoryAddWeapon("Hammer");
                         KinkyDungeonInventoryAddWeapon("IceBreaker");
                         KinkyDungeonInventoryAddWeapon("IceCube");
                         KinkyDungeonInventoryAddWeapon("Knife");
                         KinkyDungeonInventoryAddWeapon("MagicAxe");
                         KinkyDungeonInventoryAddWeapon("MagicFlail");
                         KinkyDungeonInventoryAddWeapon("MagicHammer");
                         KinkyDungeonInventoryAddWeapon("MagicSpear");
                         KinkyDungeonInventoryAddWeapon("MagicSword");
			 KinkyDungeonInventoryAddWeapon("MessengerOfLove");
                         KinkyDungeonInventoryAddWeapon("MoraiScissors");
                         KinkyDungeonInventoryAddWeapon("Pickaxe");
                         KinkyDungeonInventoryAddWeapon("Rope");
                         KinkyDungeonInventoryAddWeapon("Slimethrower");
                         KinkyDungeonInventoryAddWeapon("Spear");
                         KinkyDungeonInventoryAddWeapon("StaffBind");
                         KinkyDungeonInventoryAddWeapon("StaffDoll");
                         KinkyDungeonInventoryAddWeapon("StaffFlame");
                         KinkyDungeonInventoryAddWeapon("StaffFrostbite");
                         KinkyDungeonInventoryAddWeapon("StaffPermafrost");
                         KinkyDungeonInventoryAddWeapon("StaffStorm");
                         KinkyDungeonInventoryAddWeapon("Sword");
                         KinkyDungeonInventoryAddWeapon("TheEncaser");
			 KinkyDungeonInventoryAddWeapon("Torch");
                         KinkyDungeonInventoryAddWeapon("VibeWand");
                    }, 5000);   
                } 
            } 	    
	} else if (content.indexOf("/keydeposit") == 0) {
            var hours = content.substring(11).trim();
	    if (hours != '') {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " keys are now safe in the vault for " + hours + " hours."
                   }]
                });
                CellDepositKeys(hours);
	    }    
        } else if (content.indexOf("/leave") == 0) {
            ChatRoomSetLastChatRoom("");
            ServerSend("ChatRoomLeave", "");
            CommonSetScreen("Online", "ChatSearch");
            ChatRoomClearAllElements();
            OnlineGameName = "";
        } else if (content.indexOf("/lock") == 0) {
            var stringLock1 = content;
            var stringLock2 = stringLock1.split(/[ ,]+/);
            var lk = stringLock2[2];
            if (lk == 1) {
                Lock = "MetalPadlock";
            } else if (lk == 2) {
                Lock = "ExclusivePadlock";
            } else if (lk == 3) {
                Lock = "IntricatePadlock";
            } else if (lk == 4) {
                Lock = "HighSecurityPadlock";
            } else if (lk == 5) {
                Lock = "PandoraPadlock";
            } else if (lk == 6) {
                Lock = "MistressPadlock";
            } else if (lk == 7) {
                Lock = "LoversPadlock";
            } else if (lk == 8) {
                Lock = "OwnerPadlock";
            } else if (lk == 9) {
                Lock = "TimerPadlock";
                var removeitem = stringLock2[3];
            } else if (lk == 10) {
                Lock = "CombinationPadlock";
                var code = stringLock2[3];
            } else if (lk == 11) {
                Lock = "SafewordPadlock";
                var PS = /^[A-Z]+$/;
                var pw = stringLock2[3].toUpperCase();
                var removeitem = stringLock2[4];
            } else if (lk == 12) {
                Lock = "PasswordPadlock";
                var PS = /^[A-Z]+$/;
                var pw = stringLock2[3].toUpperCase();
                var removeitem = stringLock2[4];
            } else if (lk == 13) {
                Lock = "MistressTimerPadlock";
                var minutes = stringLock2[3];
                time = (minutes - 5);
                var hidetimer = stringLock2[4];
                var enableinput = stringLock2[5];
                var removeitem = stringLock2[6];
            } else if (lk == 14) {
                Lock = "LoversTimerPadlock";
                var minutes = stringLock2[3];
                time = (minutes - 5);
                var hidetimer = stringLock2[4];
                var enableinput = stringLock2[5];
                var removeitem = stringLock2[6];
            } else if (lk == 15) {
                Lock = "OwnerTimerPadlock";
                var minutes = stringLock2[3];
                time = (minutes - 5);
                var hidetimer = stringLock2[4];
                var enableinput = stringLock2[5];
                var removeitem = stringLock2[6];
            } else if (lk == 16) {
                Lock = "TimerPasswordPadlock";
                var PS = /^[A-Z]+$/;
                var pw = stringLock2[3].toUpperCase();
                var minutes = stringLock2[4];
                time = (minutes - 5);
                var hidetimer = stringLock2[5];
                var enableinput = stringLock2[6];
                var removeitem = stringLock2[7];
            }
            var targetname = stringLock2[1];
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
            if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            }
            if ((target[0] != null) && ((target[0] == Player) || (target[0].AllowItem == true)))  {
		if (target[0].Nickname == '') { 
                    tgpname = target[0].Name;
                } else {
                    tgpname = target[0].Nickname;
                } 
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make appear locks on " + tgpname + " body."
                    }]
                });
                mn = Player.MemberNumber;
                if ((InventoryGet(target[0], "ItemAddon") != null) && (InventoryGet(target[0], "ItemAddon").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemAddon").Property != null) && (InventoryGet(target[0], "ItemAddon").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemAddon").Property == null)) {
                        InventoryLock(target[0], "ItemAddon", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemAddon").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemAddon").Property.RemoveTimer = InventoryGet(target[0], "ItemAddon").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemAddon").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemAddon").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemAddon").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemAddon").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemArms") != null) && (InventoryGet(target[0], "ItemArms").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemArms").Property != null) && (InventoryGet(target[0], "ItemArms").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemArms").Property == null)) {
                        InventoryLock(target[0], "ItemArms", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemArms").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemArms").Property.RemoveTimer = InventoryGet(target[0], "ItemArms").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemArms").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemArms").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemArms").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemArms").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemBoots") != null) && (InventoryGet(target[0], "ItemBoots").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemBoots").Property != null) && (InventoryGet(target[0], "ItemBoots").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemBoots").Property == null)) {
                        InventoryLock(target[0], "ItemBoots", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemBoots").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemBoots").Property.RemoveTimer = InventoryGet(target[0], "ItemBoots").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemBoots").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemBoots").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemBoots").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemBoots").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemBreast") != null) && (InventoryGet(target[0], "ItemBreast").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemBreast").Property != null) && (InventoryGet(target[0], "ItemBreast").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemBreast").Property == null)) {
                        InventoryLock(target[0], "ItemBreast", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemBreast").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemBreast").Property.RemoveTimer = InventoryGet(target[0], "ItemBreast").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemBreast").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemBreast").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemBreast").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemBreast").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemButt") != null) && (InventoryGet(target[0], "ItemButt").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemButt").Property != null) && (InventoryGet(target[0], "ItemButt").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemButt").Property == null)) {
                        InventoryLock(target[0], "ItemButt", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemButt").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemButt").Property.RemoveTimer = InventoryGet(target[0], "ItemButt").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemButt").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemButt").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemButt").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemButt").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemDevices") != null) && (InventoryGet(target[0], "ItemDevices").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemDevices").Property != null) && (InventoryGet(target[0], "ItemDevices").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemDevices").Property == null)) {
                        InventoryLock(target[0], "ItemDevices", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemDevices").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemDevices").Property.RemoveTimer = InventoryGet(target[0], "ItemDevices").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemDevices").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemDevices").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemDevices").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemDevices").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemEars") != null) && (InventoryGet(target[0], "ItemEars").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemEars").Property != null) && (InventoryGet(target[0], "ItemEars").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemEars").Property == null)) {
                        InventoryLock(target[0], "ItemEars", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemEars").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemEars").Property.RemoveTimer = InventoryGet(target[0], "ItemEars").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemEars").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemEars").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemEars").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemEars").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemFeet") != null) && (InventoryGet(target[0], "ItemFeet").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemFeet").Property != null) && (InventoryGet(target[0], "ItemFeet").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemFeet").Property == null)) {
                        InventoryLock(target[0], "ItemFeet", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemFeet").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemFeet").Property.RemoveTimer = InventoryGet(target[0], "ItemFeet").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemFeet").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemFeet").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemFeet").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemFeet").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemHands") != null) && (InventoryGet(target[0], "ItemHands").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemHands").Property != null) && (InventoryGet(target[0], "ItemHands").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemHands").Property == null)) {
                        InventoryLock(target[0], "ItemHands", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemHands").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemHands").Property.RemoveTimer = InventoryGet(target[0], "ItemHands").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemHands").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemHands").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemHands").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemHands").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemHead") != null) && (InventoryGet(target[0], "ItemHead").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemHead").Property != null) && (InventoryGet(target[0], "ItemHead").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemHead").Property == null)) {
                        InventoryLock(target[0], "ItemHead", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemHead").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemHead").Property.RemoveTimer = InventoryGet(target[0], "ItemHead").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemHead").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemHead").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemHead").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemHead").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemHood") != null) && (InventoryGet(target[0], "ItemHood").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemHood").Property != null) && (InventoryGet(target[0], "ItemHood").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemHood").Property == null)) {
                        InventoryLock(target[0], "ItemHood", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemHood").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemHood").Property.RemoveTimer = InventoryGet(target[0], "ItemHood").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemHood").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemHood").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemHood").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemHood").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemLegs") != null) && (InventoryGet(target[0], "ItemLegs").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemLegs").Property != null) && (InventoryGet(target[0], "ItemLegs").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemLegs").Property == null)) {
                        InventoryLock(target[0], "ItemLegs", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemLegs").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemLegs").Property.RemoveTimer = InventoryGet(target[0], "ItemLegs").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemLegs").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemLegs").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemLegs").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemLegs").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMisc") != null) && (InventoryGet(target[0], "ItemMisc").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMisc").Property != null) && (InventoryGet(target[0], "ItemMisc").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMisc").Property == null)) {
                        InventoryLock(target[0], "ItemMisc", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMisc").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMisc").Property.RemoveTimer = InventoryGet(target[0], "ItemMisc").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMisc").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMisc").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMisc").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMisc").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMouth") != null) && (InventoryGet(target[0], "ItemMouth").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMouth").Property != null) && (InventoryGet(target[0], "ItemMouth").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMouth").Property == null)) {
                        InventoryLock(target[0], "ItemMouth", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMouth").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMouth").Property.RemoveTimer = InventoryGet(target[0], "ItemMouth").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMouth").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMouth").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMouth").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMouth").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMouth2") != null) && (InventoryGet(target[0], "ItemMouth2").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMouth2").Property != null) && (InventoryGet(target[0], "ItemMouth2").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMouth2").Property == null)) {
                        InventoryLock(target[0], "ItemMouth2", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMouth2").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMouth2").Property.RemoveTimer = InventoryGet(target[0], "ItemMouth2").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMouth2").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMouth2").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMouth2").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMouth2").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemMouth3") != null) && (InventoryGet(target[0], "ItemMouth3").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemMouth3").Property != null) && (InventoryGet(target[0], "ItemMouth3").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemMouth3").Property == null)) {
                        InventoryLock(target[0], "ItemMouth3", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemMouth3").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemMouth3").Property.RemoveTimer = InventoryGet(target[0], "ItemMouth3").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemMouth3").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemMouth3").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemMouth3").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemMouth3").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNeck") != null) && (InventoryGet(target[0], "ItemNeck").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNeck").Property != null) && (InventoryGet(target[0], "ItemNeck").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNeck").Property == null)) {
                        InventoryLock(target[0], "ItemNeck", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNeck").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNeck").Property.RemoveTimer = InventoryGet(target[0], "ItemNeck").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNeck").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNek").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNeck").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNeck").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNeckAccessories") != null) && (InventoryGet(target[0], "ItemNeckAccessories").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNeckAccessories").Property != null) && (InventoryGet(target[0], "ItemNeckAccessories").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNeckAccessories").Property == null)) {
                        InventoryLock(target[0], "ItemNeckAccessories", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.RemoveTimer = InventoryGet(target[0], "ItemNeckAccessories").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNeckAccessories").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNeckRestraints") != null) && (InventoryGet(target[0], "ItemNeckRestraints").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNeckRestraints").Property != null) && (InventoryGet(target[0], "ItemNeckRestraints").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNeckRestraints").Property == null)) {
                        InventoryLock(target[0], "ItemNeckRestraints", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.RemoveTimer = InventoryGet(target[0], "ItemNeckRestraints").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNeckRestraints").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNipples") != null) && (InventoryGet(target[0], "ItemNipples").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNipples").Property != null) && (InventoryGet(target[0], "ItemNipples").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNipples").Property == null)) {
                        InventoryLock(target[0], "ItemNipples", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNipples").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNipples").Property.RemoveTimer = InventoryGet(target[0], "ItemNipples").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNipples").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNipples").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNipples").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNipples").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNipplesPiercings") != null) && (InventoryGet(target[0], "ItemNipplesPiercings").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNipplesPiercings").Property != null) && (InventoryGet(target[0], "ItemNipplesPiercings").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNipplesPiercings").Property == null)) {
                        InventoryLock(target[0], "ItemNipplesPiercings", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.RemoveTimer = InventoryGet(target[0], "ItemNipplesPiercings").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNipplesPiercings").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemNose") != null) && (InventoryGet(target[0], "ItemNose").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemNose").Property != null) && (InventoryGet(target[0], "ItemNose").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemNose").Property == null)) {
                        InventoryLock(target[0], "ItemNose", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemNose").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemNose").Property.RemoveTimer = InventoryGet(target[0], "ItemNose").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemNose").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemNose").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemNose").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemNose").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemPelvis") != null) && (InventoryGet(target[0], "ItemPelvis").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemPelvis").Property != null) && (InventoryGet(target[0], "ItemPelvis").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemPelvis").Property == null)) {
                        InventoryLock(target[0], "ItemPelvis", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemPelvis").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemPelvis").Property.RemoveTimer = InventoryGet(target[0], "ItemPelvis").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemPelvis").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemPelvis").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemPelvis").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemPelvis").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemTorso") != null) && (InventoryGet(target[0], "ItemTorso").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemTorso").Property != null) && (InventoryGet(target[0], "ItemTorso").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemTorso").Property == null)) {
                        InventoryLock(target[0], "ItemTorso", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemTorso").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemTorso").Property.RemoveTimer = InventoryGet(target[0], "ItemTorso").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemTorso").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemTorso").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemTorso").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemTorso").Property.Password = pw;
                        }
                    }
                }
		if ((InventoryGet(target[0], "ItemTorso2") != null) && (InventoryGet(target[0], "ItemTorso2").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemTorso2").Property != null) && (InventoryGet(target[0], "ItemTorso2").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemTorso2").Property == null)) {
                        InventoryLock(target[0], "ItemTorso2", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemTorso2").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemTorso2").Property.RemoveTimer = InventoryGet(target[0], "ItemTorso2").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemTorso2").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemTorso2").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemTorso2").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemTorso2").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemVulva") != null) && (InventoryGet(target[0], "ItemVulva").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemVulva").Property != null) && (InventoryGet(target[0], "ItemVulva").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemVulva").Property == null)) {
                        InventoryLock(target[0], "ItemVulva", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemVulva").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemVulva").Property.RemoveTimer = InventoryGet(target[0], "ItemVulva").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemVulva").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemVulva").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemVulva").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemVulva").Property.Password = pw;
                        }
                    }
                }
                if ((InventoryGet(target[0], "ItemVulvaPiercings") != null) && (InventoryGet(target[0], "ItemVulvaPiercings").Asset.AllowLock == true)) {
                    if (((InventoryGet(target[0], "ItemVulvaPiercings").Property != null) && (InventoryGet(target[0], "ItemVulvaPiercings").Property.LockedBy == null)) || (InventoryGet(target[0], "ItemVulvaPiercings").Property == null)) {
                        InventoryLock(target[0], "ItemVulvaPiercings", Lock, mn);
                        if (removeitem == "r") {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.RemoveItem = true;
                        }
                        if (minutes != null) {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.RemoveTimer = InventoryGet(target[0], "ItemVulvaPiercings").Property.RemoveTimer + (time * 60 * 1000);
                        }
                        if (hidetimer == "h") {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.ShowTimer = false;
                        }
                        if (enableinput == "i") {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.EnableRandomInput = true;
                        }
                        if ((code != null) && (code > -1) && (code < 10000)) {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.CombinationNumber = code;
                        }
                        if ((pw != null) && (pw.length <= 8) && (pw.match(PS))) {
                            InventoryGet(target[0], "ItemVulvaPiercings").Property.Password = pw;
                        }
                    }
                }
                ChatRoomCharacterUpdate(target[0]);
		ChatRoomSetTarget(null);
            }
        } else if (content.indexOf("/login") == 0) {
            var stringLogin1 = content;
            var stringLogin2 = stringLogin1.split(/[ ,]+/);
            this.LoginName = SpeechGarbleByGagLevel(6, stringLogin2[1]);
            this.LoginPassword = SpeechGarbleByGagLevel(6, stringLogin2[2]);
            ServerSocket.close();
            ServerSocket.open();
            ServerSend("AccountLogin", {
                AccountName: stringLogin2[1],
                Password: stringLogin2[2]
            });
            setTimeout(function() {
                ChatRoomClearAllElements();
            }, 3000);
        } else if (content.indexOf("/maxstatistics") == 0) {
            Player.Money = 9999999999;
            SkillChange("Infiltration", 10);
            SkillChange("SelfBondage", 10);
            SkillChange("Willpower", 10);
            SkillChange("Evasion", 10);
            SkillChange("Bondage", 10);
            SkillChange("Dressage", 10);
            SkillChange("LockPicking", 10)
            ReputationChange("Gaming", 100);
            ReputationChange("Gambling", 100);
            ReputationChange("LARP", 100);
            ReputationChange("Maid", 100);
            ReputationChange("ABDL", 100);
            ReputationChange("Nurse", 100);
            GameLARPLevelProgress(10000); //fix might be needed
            CheatAllow = true;
            LogAdd("BondageCollege", "Import");
            LogAdd("KidnapSophie", "Sarah");
            ChatRoomSendLocal(
	        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: A few things have to be set manually. See the /roleplay and /rolequit commands.</p>"
	    );
        } else if (content.indexOf("/moaner") == 0) {
            if (content.endsWith("/moaner")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Several actions are possible with the moaner command:\n" +
                    "<b>/moaner on</b> = starts the moaner\n" +
                    "<b>/moaner off</b> = stops the moaner\n" +
                    "<b>/moaner profile</b> (profilename) =  selects a moaner profile. Without profilename, access to moaner profile help\n" +
                    "<b>/moaner status</b> = displays current moaner status\n" +
                    "<b>/moaner verbose</b> (on/off) = enable/disable verbose mode\n" +
                    " \n" +
                    "You can also enable/disable parts of the Moaner with:\n" +
                    "<b>/moaner orgasm</b> (on/off): moans when you cum\n" +
                    "<b>/moaner spank</b> (on/off): moans when you are spanked\n" +
                    "<b>/moaner talk</b> (on/off): moans when talking if vibed\n" +
                    "<b>/moaner vibe</b> (on/off): moans when vibes settings changed</p>"
                );
            } else {
                var stringMoan1 = content;
                var stringMoan2 = stringMoan1.split(/[ ,]+/);
                var feature = stringMoan2[1];
                if ((feature == "on") || (feature == "off")) {
                    scriptControl(feature);
                    M_MOANER_saveControls();
                } else {
                    var commande = stringMoan2[2];
                    if (feature == "orgasm") {
                        orgasmControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "profile") {
                        if (commande == null) {
                            profilesList();
                        } else if (commande != null) {
                            M_MOANER_activerProfile(commande);
                            M_MOANER_saveControls();
                        }
                        showM_MOANER_profileStatus();
                    } else if (feature == "spank") {
                        spankControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "status") {
                        showStatus();
                    } else if (feature == "talk") {
                        talkControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "verbose") {
                        verboseControl(commande);
                        M_MOANER_saveControls();
                    } else if (feature == "vibe") {
                        vibeControl(commande);
                        M_MOANER_saveControls();
                    }
                }
            }
        } else if (content.indexOf("/money") == 0) {
            Player.Money = content.substring(6);
            ServerPlayerSync();
        } else if (content.indexOf("/naked") == 0) {
            if (content.endsWith("/naked")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make disappear the clothes on " + tmpname + " body."
                    }]
                });
                CharacterNaked(Player);
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(6).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers make disappear the clothes on " + tgpname + " body."
                        }]
                    });
                    CharacterNaked(target[0]);
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }
        } else if (content.indexOf("/name") == 0) {
            var NewName = content.substring(5).trim();
            var LS = /[/\p{L}\p{N}\p{Z}'-]/gu;
	    if (Player.Nickname == '') { 
                var tmpname = Player.Name;
            } else {
                var tmpname = Player.Nickname;
            }
            if (NewName.length == 0) {
		if (Player.Name != tmpname) {  
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "" + tmpname + " is now known as " + Player.Name + "."
                        }]
                    });
		}	
                Player.Nickname = Player.Name;
                var tmpname = Player.Name;
            } else if ((NewName.length <= 20) && (NewName.match(LS))) {
                if (NewName != tmpname) {
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "" + tmpname + " is now known as " + NewName + "."
                        }]
                    });
                }
                Player.Nickname = NewName;
                var tmpname = NewName;
            }
	} else if (content.indexOf("/npcpunish") == 0) {
            if (Player.RestrictionSettings.BypassNPCPunishments == true) {
                Player.RestrictionSettings.BypassNPCPunishments = false;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: NPC punishments enabled.</p>"
		);
            } else {
                Player.RestrictionSettings.BypassNPCPunishments = true;
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: NPC punishments disabled.</p>"
		);
            }	
       } else if (content.indexOf("/outfit") == 0) {
            if (content.includes("load1")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target. If successful, the outfit will be loaded. If not, retry.</p>"
		);
                setTimeout(function() {
                    CurrentCharacter.Appearance = this.savedoutfit1.slice(0);
                    CharacterRefresh(CurrentCharacter);
                    ChatRoomCharacterUpdate(CurrentCharacter);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("load2")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target. If successful, the outfit will be loaded. If not, retry.</p>"
		);
                setTimeout(function() {
                    CurrentCharacter.Appearance = savedoutfit2.slice(0);
                    CharacterRefresh(CurrentCharacter);
                    ChatRoomCharacterUpdate(CurrentCharacter);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("load3")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target. If successful, the outfit will be loaded. If not, retry.</p>"
		);
                setTimeout(function() {
                    CurrentCharacter.Appearance = savedoutfit3.slice(0);
                    CharacterRefresh(CurrentCharacter);
                    ChatRoomCharacterUpdate(CurrentCharacter);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("reset") || content.includes("revert") || content.includes("restore")) {
                Player.Appearance = ChatSearchSafewordAppearance.slice(0);
                // Player.ActivePose = ChatSearchSafewordPose; should not be needed
                CharacterRefresh(Player);
                ChatRoomCharacterUpdate(Player);
            } else if (content.includes("save1")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target. If successful, the outfit will be saved. If not, retry.</p>"
		);
                setTimeout(function() {
                    this.savedoutfit1 = CurrentCharacter.Appearance.slice(0);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("save2")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target. If successful, the outfit will be saved. If not, retry.</p>"
		);
                setTimeout(function() {
                    this.savedoutfit2 = CurrentCharacter.Appearance.slice(0);
                    DialogLeave();
                }, 5000);
            } else if (content.includes("save3")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click on target. If successful, the outfit will be saved. If not, retry.</p>"
		);
                setTimeout(function() {
                    this.savedoutfit3 = CurrentCharacter.Appearance.slice(0);
                    DialogLeave();
                }, 5000);
            } else if (content.endsWith("/outfit")) {
                ChatRoomSendLocal(
	            "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: Options for outfit command:\n" + 
		    "<b>All these options include the restraints</b>, so it's also a good bondage tool.\n" +
	            "To restore your outfit to what it was before entering room, type: <b>/outfit reset</b> or <b>/outfit restore</b> or <b>/outfit revert</b>\n" + 
	            "Three outfits can be saved by using <b>/outfit save1</b> or <b>/outfit save2</b> or <b>/outfit save3</b>\n" + 
	            "To load saved outfits, type: <b>/outfit load1</b> or <b>/outfit load2</b> or <b>/outfit load3</b>\n" + 
	            "You will have 5 seconds to click on target. Retry if the saving/loading was unsuccessful\n" + 
	            "These saves last only 1 login session.\n" + 
	            "To save outfits between sessions, use the <b>Export button</b> in wardrobe\n" +    
	            "You will have the outfit saved as a code. You can copy and paste it elsewhere.\n" + 
	            "Then you can use the <b>Import buttons</b> to load it later.</p>" 
		);
            }
	} else if (content.indexOf("/permission") == 0) {
            if (content.endsWith("/permission")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The permission command must be followed by a number.\n" +
                    "The effect will be visible in your profile.\n" +
                    "0 Everyone, no exceptions\n" +
                    "1 Everyone, except blacklist\n" +
                    "2 Owner, Lover, whitelist & Dominants\n" +
                    "3 Owner, Lover and whitelist only\n" +
                    "4 Owner and Lover only\n" +
                    "5 Owner only</p>"
                );
            } else {
                 var perm = content.substring(11).trim() * 1;
                 if ((perm > -1) && (perm < 6)) {
                     Player.ItemPermission = perm;
                     ServerAccountUpdate.QueueData({
                         ItemPermission: Player.ItemPermission
                     });
                 }
            }	
        } else if (content.indexOf("/pet") == 0) {
	    if (content.endsWith("/pet")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " becomes a cute pet."
                    }]
                });
                CharacterNaked(Player);
	        InventoryWearRandom(Player, "ItemArms", 8, null, false, true, ["ArmbinderJacket", "BitchSuit", "Bolero", "BoxTieArmbinder", "Chains", "FullLatexSuit", "HempRope", "InflatableStraightLeotard", "LatexBoxtieLeotard", "LatexButterflyLeotard", "LatexSleevelessLeotard", "LeatherStraitJacket", "PantyhoseBody", "PantyhoseBodyOpen","SeamlessStraitDress","SeamlessStraitDressOpen","StraitLeotard", "StrictLeatherPetCrawler"], true);
	        InventoryWearRandom(Player, "HairAccessory1", 8, null, false, true, ["Antennae", "BunnyEars1", "BunnyEars2", "CowHorns", "Ears1", "Ears2", "ElfEars", "FoxEars1", "FoxEars2", "FoxEars3", "KittenEars1", "KittenEars2", "MouseEars1", "MouseEars2", "PonyEars1", "PuppyEars1", "PuppyEars2", "RaccoonEars1", "WolfEars1", "WolfEars2"], true);
	        InventoryWearRandom(Player, "TailStraps", 8, null, false, true, ["CowtailStrap", "FoxTailsStrap", "FoxTailStrap1", "FoxTailStrap2", "HorseTailStrap", "HorseTailStrap1", "KittenTailStrap1", "KittenTailStrap2", "MouseTailStrap1", "MouseTailStrap2", "PuppyTailStrap", "PuppyTailStrap1", "RaccoonStrap", "WolfTailStrap1", "WolfTailStrap2", "WolfTailStrap3"], true);
	        if (InventoryGet(Player, "ItemMouth") == null) InventoryWearRandom(Player, "ItemMouth", 8);
	        if (InventoryGet(Player, "ItemNeck") == null) InventoryWearRandom(Player, "ItemNeck", 8);
	        if (InventoryGet(Player, "ItemNeckRestraints") == null) InventoryWear(Player, "ChainLeash", "ItemNeckRestraints", null, 8);
	        CharacterSetActivePose(Player, "Kneel", true);
                CharacterRefresh(Player);
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(4).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "" + tgpname + " becomes a cute pet."
                        }]
                    });
                    CharacterNaked(target[0]);
	            InventoryWearRandom(target[0], "ItemArms", 8, null, false, true, ["ArmbinderJacket", "BitchSuit", "Bolero", "BoxTieArmbinder", "Chains", "FullLatexSuit", "HempRope", "InflatableStraightLeotard", "LatexBoxtieLeotard", "LatexButterflyLeotard", "LatexSleevelessLeotard", "LeatherStraitJacket", "PantyhoseBody", "PantyhoseBodyOpen","SeamlessStraitDress","SeamlessStraitDressOpen","StraitLeotard", "StrictLeatherPetCrawler"], true);
	            InventoryWearRandom(target[0], "HairAccessory1", 8, null, false, true, ["Antennae", "BunnyEars1", "BunnyEars2", "CowHorns", "Ears1", "Ears2", "ElfEars", "FoxEars1", "FoxEars2", "FoxEars3", "KittenEars1", "KittenEars2", "MouseEars1", "MouseEars2", "PonyEars1", "PuppyEars1", "PuppyEars2", "RaccoonEars1", "WolfEars1", "WolfEars2"], true);
	            InventoryWearRandom(target[0], "TailStraps", 8, null, false, true, ["CowtailStrap", "FoxTailsStrap", "FoxTailStrap1", "FoxTailStrap2", "HorseTailStrap", "HorseTailStrap1", "KittenTailStrap1", "KittenTailStrap2", "MouseTailStrap1", "MouseTailStrap2", "PuppyTailStrap", "PuppyTailStrap1", "RaccoonStrap", "WolfTailStrap1", "WolfTailStrap2", "WolfTailStrap3"], true);
	            if (InventoryGet(target[0], "ItemMouth") == null) InventoryWearRandom(target[0], "ItemMouth", 8);
	            if (InventoryGet(target[0], "ItemNeck") == null) InventoryWearRandom(target[0], "ItemNeck", 8);
	            if (InventoryGet(target[0], "ItemNeckRestraints") == null) InventoryWear(target[0], "ChainLeash", "ItemNeckRestraints", null, 8);
	            CharacterSetActivePose(target[0], "Kneel", true);
                    CharacterRefresh(target[0]);
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }	
	} else if (content.indexOf("/poof") == 0) {
            if (content.endsWith("/poof")) {
                var message = " poofs away."
            } else {
                var message = ' '.repeat(1) + content.substring(5).trim();
            }
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + message
                }]
            });
            RelogExit();	
        } else if (content.indexOf("/pose2") == 0) {
            if (content.endsWith("/pose2")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The pose2 command must be followed by a pose and optionally a target.\n" +
                    " \n" +
                    "Available poses:\n" +
                    "armsfree, belly, boxtied, cuffed, elbowtied, exercise,\n" +
                    "kneel1, kneel2, legsclosed, legsopen, pet,\n" +
                    "sleep, spreadarms1, spreadarms2, spreadeagle1\n" +
                    "spreadeagle2, spreadlegs, stand, suspension,\n" +
                    "tapedhands. Only on yourself: jump, roof.\n" +
                    "Use <b>/pose2 reset</b> (target) to back to neutral pose.\n" + 
		    "If FBC is enabled, use <b>/pose baseupper</b> only on yourself when /pose2 reset fails.</p>"
                );
            } else {
                var stringPose1 = content;
                var stringPose2 = stringPose1.split(/[ ,]+/);
                var targetname = stringPose2[2];
                if (targetname == undefined) {
                    targetname = Player.Name;
                }
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
		if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
                }
                if (target[0] != null) {
	            if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname;
                    } 
		    if (InventoryGet(target[0], "Pronouns").Asset.Name == "HeHim")  {
                        tgpr1 = "He";
                        tgpr2 = "him";
                        tgpr3 = "his";
			tgpr4 = "he";
                    } else {
                        tgpr1 = "She";
                        tgpr2 = "her";
                        tgpr3 = "her";
			tgpr4 = "she";
                    }	
                    //poses for any player
                    if (content.includes("armsfree")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'BaseUpper') 
			    && (CharacterCanChangeToPose(target[0], 'BaseUpper'))) {  
                            CharacterSetActivePose(target[0], "BaseUpper");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                     Content: "Beep",
                                     Type: "Action",
                                     Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " relaxes " + tmpr3 + " arms."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                         Tag: "Beep",
                                         Text: "" + tmpname + " lets " + tgpname + " relax " + tgpr3 + " arms."
                                    }]
                                });
                            }
			 }	
                    } else if (content.includes("belly")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'Hogtied') 
			    && (CharacterCanChangeToPose(target[0], 'Hogtied'))) {  
                            CharacterSetActivePose(target[0], "Hogtied");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " relaxes on " + tmpr3 + " belly."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to stay on " + tgpr3 + " belly."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("boxtied")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'BackBoxTie') 
			    && (CharacterCanChangeToPose(target[0], 'BackBoxTie'))) { 
                            CharacterSetActivePose(target[0], "BackBoxTie");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts the arms behind " + tmpr3 + " back."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to put the arms behind " + tgpr3 + " back."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("cuffed")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'BackCuffs') 
			    && (CharacterCanChangeToPose(target[0], 'BackCuffs')))  {  
                            CharacterSetActivePose(target[0], "BackCuffs");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts " + tmpr3 + " arms out like " + tmpr4 + " is handcuffed."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to put the arms out like " + tgpr4 + " handcuffed."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("elbowtied")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'BackElbowTouch') 
			    && (CharacterCanChangeToPose(target[0], 'BackElbowTouch'))) {  
                            CharacterSetActivePose(target[0], "BackElbowTouch");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts the arms behind " + tmpr3 + " back, elbows almost touching."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to put the arms behind her back, elbows almost touching."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("kneel1")) {
		        if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'Kneel') 
			    && ((CharacterCanChangeToPose(target[0], 'Kneel')) || (ChatRoomCanAttemptKneel(target[0]) == true)))  {
                            CharacterSetActivePose(target[0], "Kneel");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " kneels down."
                                   }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to kneel down."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("kneel2")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'KneelingSpread') 
			    && (CharacterCanChangeToPose(target[0], 'KneelingSpread'))) {
                            CharacterSetActivePose(target[0], "KneelingSpread");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " kneels down and opens " + tmpr3 + " legs."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to kneel down, forcing " + tgpr3 + " legs open."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("legsclosed")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'LegsClosed') 
			    && (CharacterCanChangeToPose(target[0], 'LegsClosed'))) {
                            CharacterSetActivePose(target[0], "LegsClosed");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " stands up and closes " + tmpr3 + " legs."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to stand up with " + tgpr3 + " legs closed."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("legsopen")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'LegsOpen') 
			    && (CharacterCanChangeToPose(target[0], 'LegsOpen'))) {
                            CharacterSetActivePose(target[0], "LegsOpen");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " stands up normally on " + tmpr3 + " feet."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to stand up normally on " + tgpr3 + " feet."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("pet")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'AllFours') 
			    && (CharacterCanChangeToPose(target[0], 'AllFours'))) {
                            CharacterSetActivePose(target[0], "AllFours");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " relaxes on all fours."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " on all fours."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("spreadarms1")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'Yoked') 
			    && (CharacterCanChangeToPose(target[0], 'Yoked'))) {  
                            CharacterSetActivePose(target[0], "Yoked");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " raises " + tmpr3 + " hands."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to raise " + tgpr3 + " hands."
                                    }]
                                });
                            }
			}
                    } else if (content.includes("spreadarms2")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'OverTheHead') 
			    && (CharacterCanChangeToPose(target[0], 'OverTheHead'))) { 
                            CharacterSetActivePose(target[0], "OverTheHead");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " raises the hands above " + tmpr3 + " head."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to raise the hands above " + tgpr3 + " head."
                                    }]
                                });
                            }
			}	
		    } else if (content.includes("spreadeagle1")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && ((target[0].ActivePose == null) || (target[0].ActivePose.includes('Yoked') == false) || (target[0].ActivePose.includes('Spread') == false)) 
			    && (CharacterCanChangeToPose(target[0], 'Yoked')) 
			    && (CharacterCanChangeToPose(target[0], 'Spread'))) {  
                            CharacterSetActivePose(target[0], "Yoked");
                            CharacterSetActivePose(target[0], "Spread");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " raises " + tmpr3 + " hands and spreads " + tmpr3 + " legs."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                         Tag: "Beep",
                                         Text: "" + tmpname + " forces " + tgpname + " to raise the hands and spread the legs."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("spreadeagle2")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && ((target[0].ActivePose == null) || (target[0].ActivePose.includes('OverTheHead') == false) || (target[0].ActivePose.includes('Spread') == false)) 
			    && (CharacterCanChangeToPose(target[0], 'OverTheHead')) 
			    && (CharacterCanChangeToPose(target[0], 'Spread')))  {  
                            CharacterSetActivePose(target[0], "OverTheHead");
                            CharacterSetActivePose(target[0], "Spread");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " raises the hands above " + tmpr3 + " head and spreads " + tmpr3 + " legs."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to raise the hands above the head and spread the legs."
                                    }]
                                });
                            }
	                }	    
                    } else if (content.includes("spreadlegs")) {
		        if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'Spread') 
			    && (CharacterCanChangeToPose(target[0], 'Spread')))  {
                            CharacterSetActivePose(target[0], "Spread");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " spreads " + tmpr3 + " legs."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to spread " + tgpr3 + " legs."
                                    }]
                                });
                            }
			} 	
                    } else if (content.includes("stand")) {
		        if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != null) 
			    && ((CharacterCanChangeToPose(target[0], null)) || (ChatRoomCanAttemptStand(target[0]) == true)))  {
                            CharacterSetActivePose(target[0], null);
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " stands up."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                     Content: "Beep",
                                     Type: "Action",
                                     Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to stand up."
                                     }]
                                });
                            }
		        }		    
                    } else if (content.includes("suspension")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'Suspension') 
			    && (CharacterCanChangeToPose(target[0], 'Suspension'))) {   
                            CharacterSetActivePose(target[0], "Suspension");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " is now in an acrobatic pose in suspension."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " in an acrobatic pose in suspension."
                                    }]
                                });
                            }
			}	
                    } else if (content.includes("tapedhands")) {
			if (((target[0] == Player) || (target[0].AllowItem == true)) 
			    && (target[0].ActivePose != 'TapedHands') 
			    && (CharacterCanChangeToPose(target[0], 'TapedHands')))  {    
                            CharacterSetActivePose(target[0], "TapedHands");
                            ChatRoomCharacterUpdate(target[0]);
                            if (target[0].Name == Player.Name) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts " + tmpr3 + " arms out like " + tmpr3 + " hands are taped."
                                    }]
                                });
                            } else {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to put the arms out like " + tgpr3 + " hands are taped."
                                    }]
                                });
                            }
			}	
                    }
                    //poses only on yourself
                    else if (content.includes("jump")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "" + tmpname + " jumps with joy."
                            }]
                        });
                        CharacterSetActivePose(Player, null);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: 150
                            };
                            CharacterSetActivePose(Player, "Kneel");
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 1000);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = undefined;
                            CharacterSetActivePose(Player, null);
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 2000);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: 150
                            };
                            CharacterSetActivePose(Player, "Kneel");
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 3000);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, null);
                            delete InventoryGet(Player, 'Emoticon').Property.OverrideHeight;
                            CurrentScreen === 'ChatRoom' ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 4000);
                    } else if (content.includes("roof")) {
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: "" + tmpname + " jumps to the ceiling."
                            }]
                        });
                        CharacterSetFacialExpression(Player, "Emoticon", "Annoyed", 1);
                        CharacterSetActivePose(Player, null);
                        ChatRoomCharacterUpdate(Player);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, "OverTheHead");
                            ChatRoomCharacterUpdate(Player);
                        }, 500);
                        setTimeout(function() {
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: 250
                            };
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 1000);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, "Kneel");
                            ChatRoomCharacterUpdate(Player);
                        }, 2000);
                        setTimeout(function() {
                            CharacterSetActivePose(Player, "BaseUpper");
                            CharacterSetActivePose(Player, null);
                            CharacterSetActivePose(Player, ["Suspension", "Kneel"]);
                            InventoryGet(Player, "Emoticon").Property.OverrideHeight = {
                                Height: -300
                            };
                            CurrentScreen === "ChatRoom" ?
                                ChatRoomCharacterUpdate(Player) :
                                CharacterRefresh(Player);
                        }, 3000);
                    }
                    //exercises on any player
                    else if (content.includes("exercise")) {
                        var Region = undefined;
                        if (InventoryGet(target[0], "ItemButt") == null) {
                            InventoryWear(target[0], "AnalHook", "ItemButt", "#272727");
                            Region = "ItemButt";
                        } else if (InventoryGet(target[0], "ItemButt").Asset.Name == "AnalHook") {
                            Region = "ItemButt";
                        } else if (InventoryGet(target[0], "ItemTorso") == null) {
                            InventoryWear(target[0], "HempRopeHarness", "ItemTorso", "#272727");
                            InventoryGet(target[0], "ItemTorso").Property = {
                                Type: "Waist"
                            };
                            Region = "ItemTorso";
                        } else if (InventoryGet(target[0], "ItemTorso").Asset.Name == "HempRopeHarness") {
                            InventoryGet(target[0], "ItemTorso").Property = {
                                Type: "Waist"
                            };
                            Region = "ItemTorso";
                        } else if (InventoryGet(target[0], "ItemPelvis") == null) {
                            InventoryWear(target[0], "HempRope", "ItemPelvis", "#272727");
                            Region = "ItemPelvis";
                        } else if (InventoryGet(target[0], "ItemPelvis").Asset.Name == "HempRope") {
                            Region = "ItemPelvis";
                        } else {
			    ChatRoomSendLocal(
		                "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You're too heavily tied to excercise.</p>"
		            );
                        }
                        if (target[0].Name == Player.Name) {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + tmpname + " makes " + tmpr3 + " workout."
                                }]
                            });
                        } else {
                            ServerSend("ChatRoomChat", {
                                Content: "Beep",
                                Type: "Action",
                                Dictionary: [{
                                    Tag: "Beep",
                                    Text: "" + tmpname + " helps " + tgpname + " to make " + tgpr3 + " workout."
                                }]
                            });
                        }
                        CharacterSetActivePose(target[0], null);
                        ChatRoomCharacterUpdate(target[0]);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            ChatRoomCharacterUpdate(target[0]);
                        }, 500);
                        setTimeout(function() {
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 1000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Kneel");
                        }, 2000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 3000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 4000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 5000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 6000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 7000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 8000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "Yoked");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 350
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 9000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], "OverTheHead");
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = {
                                Height: 100
                            };
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 10000);
                        setTimeout(function() {
                            CharacterSetActivePose(target[0], null);
                            target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
                            DialogExtendItem(InventoryGet(target[0], Region));
                            DialogFocusItem.Property.OverrideHeight = undefined;
                            ChatRoomCharacterUpdate(target[0]);
                            DialogLeaveItemMenu();
                        }, 10000);
                    }
                    //reset
                    else if (content.includes("reset")) {
                        CharacterSetActivePose(target[0], null);
                        delete InventoryGet(target[0], 'Emoticon').Property.OverrideHeight;
                        ChatRoomCharacterUpdate(target[0]);
                        CharacterRefresh(target[0]);
                    }
		ChatRoomSetTarget(null);
                }
            }
        } else if (content.indexOf("/prison") == 0) {
            var minutes = content.substring(7).trim();
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + " gets grabbed by two maids and sent to Pandora prison for " + minutes + " minutes."
                }]
            });
            DialogLentLockpicks = false;
            ChatRoomClearAllElements();
            ServerSend("ChatRoomLeave", "");
            CharacterDeleteAllOnline();
            PandoraBackground = "Pandora/Underground/Cell" + Math.floor(Math.random() * 7).toString();
            PandoraRestrainPlayer();
            PandoraPunishmentSentence(minutes);
            PandoraPunishmentStart();
        } else if (content.indexOf("/randomize") == 0) {
	    if (content.endsWith("/randomize")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers apply random clothes and bindings on " + tmpname + " body."
                    }]
                });
		CharacterNaked(Player);
                CharacterRandomUnderwear(Player);
                CharacterAppearanceFullRandom(Player, true);
                CharacterFullRandomRestrain(Player, "ALL");
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(10).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers apply random clothes and bindings on " + tgpname + " body."
                        }]
                    });
		    CharacterNaked(target[0]);
                    CharacterRandomUnderwear(target[0]);
                    CharacterAppearanceFullRandom(target[0], true);
                    CharacterFullRandomRestrain(target[0], "ALL");
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }		
        } else if (content.indexOf("/relog") == 0) {
            ServerSocket.close();
            ServerSocket.open();
        } else if (content.indexOf("/reputation") == 0) {
            if (content.endsWith("/reputation")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The reputation command must be followed by a reputation and a level.\n" +
                    "You will be able to check the change in your profile.\n" +
                    " \n" +
                    "Available reputations:\n" +
                    "abdl, amplector, corporis, dominant, gambling,\n" +
                    "gaming, kidnap, larp, maid, maiestas, nurse,\n" +
                    "patient, submissive, vincula.\n" +
                    "Level must be between 0 and 100.</p>"
                );
            } else {
                var stringReputation1 = content;
                var stringReputation2 = stringReputation1.split(/[ ,]+/);
                var reputation = stringReputation2[1];
                var level = stringReputation2[2];
                if (reputation == "abdl") {
                    DialogSetReputation("ABDL", level);
                } else if (reputation == "amplector") {
                    DialogSetReputation("HouseCorporis", 0);
                    DialogSetReputation("HouseMaiestas", 0);
                    DialogSetReputation("HouseVincula", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseAmplector", level);
                } else if (reputation == "corporis") {
                    DialogSetReputation("HouseAmplector", 0);
                    DialogSetReputation("HouseMaiestas", 0);
                    DialogSetReputation("HouseVincula", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseCorporis", level);
                } else if (reputation == "dominant") {
                    DialogSetReputation("Dominant", level);
                } else if (reputation == "gambling") {
                    DialogSetReputation("Gambling", level);
                } else if (reputation == "gaming") {
                    DialogSetReputation("Gaming", level);
                } else if (reputation == "kidnap") {
                    DialogSetReputation("Kidnap", level);
                } else if (reputation == "larp") {
                    DialogSetReputation("LARP", level);
                } else if (reputation == "maid") {
                    DialogSetReputation("Maid", level);
                } else if (reputation == "maiestas") {
                    DialogSetReputation("HouseAmplector", 0);
                    DialogSetReputation("HouseCorporis", 0);
                    DialogSetReputation("HouseVincula", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseMaiestas", level);
                } else if (reputation == "nurse") {
                    DialogSetReputation("Asylum", level);
                } else if (reputation == "patient") {
                    DialogSetReputation("Asylum", -level);
                } else if (reputation == "submissive") {
                    DialogSetReputation("Dominant", -level);
                } else if (reputation == "vincula") {
                    DialogSetReputation("HouseAmplector", 0);
                    DialogSetReputation("HouseCorporis", 0);
                    DialogSetReputation("HouseMaiestas", 0);
                    LogDelete("Mastery", "MagicSchool");
                    DialogSetReputation("HouseVincula", level);
                }
            }
        } else if (content.indexOf("/resetdifficulty") == 0) {
            if (content.includes("yes")) {
                Player.Difficulty = [];
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Difficulty reset, select a new one in settings.</p>"
		);
            } else {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'><b>Warning</b>: Resetting difficulty will incur a 7-day waiting period to rechange. Confirm by typing: <b>/resetdifficulty yes</b></p>"
		);
            }
        } else if (content.indexOf("/resetinventory") == 0) {
            if (content.includes("yes")) {
                Player.Inventory = [];
                ServerPlayerInventorySync();
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Accomplished. Visit store to buy new clothes and items..</p>"
		);
            } else {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'><b>Warning</b>: You will lose many clothes and items, you will need to buy them again. Confirm by typing: <b>/resetinventory yes</b></p>"
		);
            }
        } else if (content.indexOf("/restrain") == 0) {
	    if (content.endsWith("/restrain")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers apply random restraints on " + tmpname + " body."
                    }]
                });
                CharacterFullRandomRestrain(Player, "ALL");
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(9).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers apply random restraints on " + tgpname + " body."
                        }]
                    });
                    CharacterFullRandomRestrain(target[0], "ALL");
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }	
        } else if (content.indexOf("/roleplay") == 0) {
            if (content.includes("clubmistress")) {
                LogAdd("ClubMistress", "Management");
            } else if (content.includes("clubslave")) {
                LogAdd("ClubSlave", "Management", CurrentTime + 3600000);
            } else if (content.includes("doctor")) {
                LogAdd("Committed", "Asylum", CurrentTime);
                ReputationChange('Asylum', 200);
            } else if (content.includes("escapedpatient")) {
                LogAdd("Escaped", "Asylum", CurrentTime + 86400000);
            } else if (content.includes("headmaid")) {
                LogAdd("LeadSorority", "Maid");
            } else if (content.includes("kidnapper")) {
                DialogSetReputation("Kidnap", 50);
            } else if (content.includes("magician")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseVincula", 50);
            } else if (content.includes("magus")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseMaiestas", 100);
            } else if (content.includes("maid")) {
                LogDelete("LeadSorority", "Maid");
                LogAdd("JoinedSorority", "Management");
            } else if (content.includes("masterkidnapper")) {
                ReputationChange("Kidnap", 100);
            } else if (content.includes("mistress")) {
                LogAdd("ClubMistress", "Management");
                ReputationChange("Dominant", 200);
            } else if (content.includes("nurse")) {
                LogAdd("Committed", "Asylum", CurrentTime);
                DialogSetReputation("Asylum", 50);
            } else if (content.includes("oracle")) {
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseAmplector", 100);
            } else if (content.includes("patient")) {
                DialogSetReputation("Asylum", -50);
            } else if (content.includes("permanentpatient")) {
                ReputationChange('Asylum', -200);
            } else if (content.includes("sage")) {
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseAmplector", 50);
            } else if (content.includes("sorcerer")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseMaiestas", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseVincula", 100);
            } else if (content.includes("warlock")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseCorporis", 100);
            } else if (content.includes("witch")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseCorporis", 50);
            } else if (content.includes("wizard")) {
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                DialogSetReputation("HouseVincula", 0);
                LogDelete("Mastery", "MagicSchool");
                DialogSetReputation("HouseMaiestas", 50);
            } else if (content.endsWith("/roleplay")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The roleplay command must include a role.\n" +
                    "You will be able to check the changes in your profile.\n" +
                    " \n" +
                    "Available roles:\n" +
                    "clubmistress, clubslave, doctor, escapedpatient,\n" +
                    "headmaid, kidnapper, maid, magician, magus,\n" +
                    "masterkidnapper, mistress, nurse, oracle, patient,\n" +
                    "permanentpatient, sage, sorcerer, warlock, witch, wizard.\n" +
                    "Be careful with clubslave, you will be forced to complete contract. Similar warning for escapedpatient.</p>"
                );
            }
        } else if (content.indexOf("/rolequit") == 0) {
            if (content.includes("asylum")) {
                LogAdd("Escaped", "Asylum", CurrentTime);
                LogAdd("Committed", "Asylum", CurrentTime);
                DialogSetReputation("Asylum", 0);
            } else if (content.includes("clubslave")) {
                LogAdd("ClubSlave", "Management", CurrentTime);
                LogAdd("BlockChange", "Rule", CurrentTime);
                ManagementIsClubSlave = function() {
                    return false
                }
                ManagementClubSlaveDialog = function(Player) {}
                ManagementFinishClubSlave()
            } else if (content.includes("ggts")) {
                Level = parseInt(0);
                Player.Game.GGTS.Level = 0;
                ServerAccountUpdate.QueueData({
                    Game: Player.Game
                });
            } else if (content.includes("kidnapper")) {
                DialogSetReputation("Kidnap", 0)
            } else if (content.includes("magician")) {
                DialogSetReputation("HouseMaiestas", 0);
                DialogSetReputation("HouseVincula", 0);
                DialogSetReputation("HouseAmplector", 0);
                DialogSetReputation("HouseCorporis", 0);
                LogDelete("Mastery", "MagicSchool");
            } else if ((content.includes("management")) || content.includes("mistress")) {
                LogDelete("ClubMistress", "Management");
                LogDelete("Mistress", "Management");
            } else if ((content.includes("sorority")) || content.includes("maid")) {
                LogDelete("JoinedSorority", "Management");
                LogDelete("LeadSorority", "Maid");
            } else if (content.endsWith("/rolequit")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The rolequit command must include a role or clubarea.\n" +
                    "You will be able to check the changes in your profile.\n" +
                    " \n" +
                    "Available roles or areas:\n" +
                    "asylum to cease being doctor, nurse, patient or permanent patient.\n" +
                    "clubslave to break the club slave contract.\n" +
                    "ggts to leave ggts training (back to level 0).\n" +
                    "kidnapper to cease being kidnapper or master kidnapper.\n" +
                    "magician to cease one of the 8 magic roles.\n" +
                    "management or mistress to cease being mistress or club mistress.\n" +
                    "sorority or maid to cease being maid or headmaid.</p>"
                );
            }
        } else if (content.indexOf("/s1") == 0) {  
             content = StutterTalk1(content.substring(3).trim());
             if (ChatRoomTargetMemberNumber == null) {
                 ServerSend("ChatRoomChat", {
                     "Content": content,
                     "Type": "Chat"
                 }); 
             } else {
                 ServerSend("ChatRoomChat", { 
                     "Content": content, 
                     "Type": "Whisper", 
                     "Target": ChatRoomTargetMemberNumber
                 });
                 for (let C = 0; C < ChatRoomCharacter.length; C++)
                     if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		              TargetName = ChatRoomCharacter[C].Name;
		              break;
	             }
	         ChatRoomMessage({ 
                     Content: "Whisper to "+TargetName+": "+ content, 
                     Type: "LocalMessage", 
                     Sender: Player.MemberNumber 
                 });
		 document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		 document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
             }                     
        } else if (content.indexOf("/s2") == 0) {
             content = StutterTalk2(content.substring(3).trim());
             if (ChatRoomTargetMemberNumber == null) {
                 ServerSend("ChatRoomChat", {
                     "Content": content,
                     "Type": "Chat"
                 }); 
             } else {
                 ServerSend("ChatRoomChat", { 
                     "Content": content, 
                     "Type": "Whisper", 
                     "Target": ChatRoomTargetMemberNumber
                 });
                 for (let C = 0; C < ChatRoomCharacter.length; C++)
                     if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		              TargetName = ChatRoomCharacter[C].Name;
		              break;
	             }
	         ChatRoomMessage({ 
                     Content: "Whisper to "+TargetName+": "+ content, 
                     Type: "LocalMessage", 
                     Sender: Player.MemberNumber 
                 });
		 document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
		 document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
             }                     
        } else if (content.indexOf("/s3") == 0) {
             content = StutterTalk3(content.substring(3).trim());
             if (ChatRoomTargetMemberNumber == null) {
                 ServerSend("ChatRoomChat", {
                     "Content": content,
                     "Type": "Chat"
                 }); 
             } else {
                 ServerSend("ChatRoomChat", { 
                     "Content": content, 
                     "Type": "Whisper", 
                     "Target": ChatRoomTargetMemberNumber
                 });
                 for (let C = 0; C < ChatRoomCharacter.length; C++)
                     if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		              TargetName = ChatRoomCharacter[C].Name;
		              break;
	             }
	         ChatRoomMessage({ 
                     Content: "Whisper to "+TargetName+": "+ content, 
                     Type: "LocalMessage", 
                     Sender: Player.MemberNumber 
                 });
		 document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
		 document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
             }                     
        } else if (content.indexOf("/s4") == 0) {
             content = StutterTalk4(content.substring(3).trim());
             if (ChatRoomTargetMemberNumber == null) {
                 ServerSend("ChatRoomChat", {
                     "Content": content,
                     "Type": "Chat"
                 }); 
             } else {
                 ServerSend("ChatRoomChat", { 
                     "Content": content, 
                     "Type": "Whisper", 
                     "Target": ChatRoomTargetMemberNumber
                 });
                 for (let C = 0; C < ChatRoomCharacter.length; C++)
                     if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		              TargetName = ChatRoomCharacter[C].Name;
		              break;
	             }
	         ChatRoomMessage({ 
                     Content: "Whisper to "+TargetName+": "+ content, 
                     Type: "LocalMessage", 
                     Sender: Player.MemberNumber 
                 });
		 document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";
		 document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
             }                     
        } else if (content.indexOf("/safewordspecific") == 0) {
            ChatRoomSendLocal(
	        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You have 5 seconds to click  on target, select area. If successful, will be returned. If not, retry.</p>"
	    );
            setTimeout(function() {
                if (CurrentCharacter !== Player) {
                    ServerSend("ChatRoomChat", {
                        Content: "Quick-Access Menu2: " + Player.Name + " has removed " + InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name + " on you via console. If this is undesired, blacklist player.",
                        Type: "Whisper",
                        Target: CurrentCharacter.MemberNumber
                    })
                };
                CurrentCharacter.Appearance = CurrentCharacter.Appearance.filter(x => (CurrentCharacter.FocusGroup && CurrentCharacter.FocusGroup.Name) ? x.Asset.Group.Name !=
                    CurrentCharacter.FocusGroup.Name : true);
                ChatRoomCharacterUpdate(CurrentCharacter);
                DialogLeave();
            }, 5000);
        } else if (content.indexOf("/savename") == 0) {
            var NewName = tmpname;
            ServerAccountUpdate.QueueData({
                Nickname: NewName
            });
            ChatRoomSendLocal(
	        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Your temporary nickname has now a definitive status.</p>"
	    );
        } else if (content.indexOf("/search") == 0) {
            if (content.includes("Asylum") || content.includes("asylum")) {
                setTimeout(function() {
                    ChatRoomSpace = "Asylum";
                    ChatSearchLeaveRoom = "AsylumEntrance";
                    ChatSearchBackground = "AsylumEntrance";
                    ChatCreateBackgroundList = BackgroundsTagAsylum
                    CommonSetScreen("Online", "ChatSearch");
                    ChatRoomSetLastChatRoom("");
                    document.getElementById("InputChat").style.display = "none";
                    document.getElementById("TextAreaChatLog").style.display = "none";
                }, 3000);
                setTimeout(function() {
                    CommonSetScreen("Online", "ChatRoom");
                    document.getElementById("InputChat").style.display = "inline";
                    document.getElementById("TextAreaChatLog").style.display = "inline";
                }, 15000);
            }
            if (content.includes("club") || content.includes("Club") || content.includes("LARP") || content.includes("larp")) {
                setTimeout(function() {
                    ChatRoomSpace = "";
                    CommonSetScreen("Online", "ChatSearch");
                    ChatRoomSetLastChatRoom("");
                    document.getElementById("InputChat").style.display = "none";
                    document.getElementById("TextAreaChatLog").style.display = "none";
                }, 3000);
                setTimeout(function() {
                    CommonSetScreen("Online", "ChatRoom");
                    document.getElementById("InputChat").style.display = "inline";
                    document.getElementById("TextAreaChatLog").style.display = "inline";
                }, 15000);
            }
	} else if (content.indexOf("/see") == 0) {
            if (content.endsWith("/see")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The see command must be followed by a vision mode number and optionally a blur level number.\n" +
                    " \n" +
                    "Available vision modes:\n" +
                    "0 normal vision\n" +
                    "1 light blindness\n" +
                    "2 normal blindness\n" +
                    "3 heavy blindness\n" +
                    " \n" +
                    "Available blur levels:\n" +
                    "0 no blur effect\n" +
                    "1 light blur effect\n" +
                    "2 normal blur effect\n" +
                    "3 heavy blur effect\n" +
                    "4 total blur effect</p>"
                );
            } else {
                var stringVision1 = content;
                var stringVision2 = stringVision1.split(/[ ,]+/);
                var bl = stringVision2[1];
                var br = stringVision2[2];  
                    if (bl == 0) { 
                        GetBlindLevel0();
                        Player.GetBlindLevel = GetBlindLevel0;
                        Player.GetBlindLevel();
		        ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Back to normal vision mode.</p>"
			);
                    } 
                    if (bl == 1) { 
		        GetBlindLevel1();
                        Player.GetBlindLevel = GetBlindLevel1;
                        Player.GetBlindLevel();
                        ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in light blindness mode.</p>"
			);
                    } 
                    if (bl == 2) { 
		        GetBlindLevel2(); 
                        Player.GetBlindLevel = GetBlindLevel2;
                        Player.GetBlindLevel();
                        ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in normal blindness mode.</p>"
			);
                    } 
                    if (bl == 3) { 
			GetBlindLevel3(); 
                        Player.GetBlindLevel = GetBlindLevel3;
                        Player.GetBlindLevel();
                        ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in heavy blindness mode.</p>"
			);
                    } 
		    if (br == 0) { 
                         GetBlurLevel0();
                         Player.GetBlurLevel = GetBlurLevel0;
                         Player.GetBlurLevel();
		         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Back to vision without blur effect.</p>"
			 );
                    } 
                    if (br == 1) { 
                         GetBlurLevel1();
                         Player.GetBlurLevel = GetBlurLevel1;
                         Player.GetBlurLevel();
		         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: A light blur effect is applied on your vision.</p>"
			 );
                    } 
                    if (br == 2) { 
                         GetBlurLevel2();
                         Player.GetBlurLevel = GetBlurLevel2;
                         Player.GetBlurLevel();
		         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: A normal blur effect is applied on your vision.</p>"
			 );
                    } 
                    if (br == 3) { 
                         GetBlurLevel3();
                         Player.GetBlurLevel = GetBlurLevel3;
                         Player.GetBlurLevel();
		         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: A heavy blur effect is applied on your vision.</p>"
			 );
                    } 
                    if (br == 4) { 
                         GetBlurLevel4();
                         Player.GetBlurLevel = GetBlurLevel4;
                         Player.GetBlurLevel();
		         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: A total blur effect is applied on your vision.</p>"
			 );
                    }      
              }		
        } else if (content.indexOf("/skill") == 0) {
            if (content.endsWith("/skill")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The skill command must be followed by a skill and a level.\n" +
                    "You will be able to check the change in your profile.\n" +
                    " \n" +
                    "Available skills:\n" +
                    "bondage, dressage, evasion, infiltration,\n" +
                    "lockpicking, selfbondage, willpower.\n" +
                    "Level must be between 0 and 10.</p>"
                );
            } else {
                var stringSkill1 = content;
                var stringSkill2 = stringSkill1.split(/[ ,]+/);
                var skill = stringSkill2[1];
                var level = stringSkill2[2];
                if (skill == "bondage") {
                    SkillChange("Bondage", level);
                } else if (skill == "dressage") {
                    SkillChange("Dressage", level);
                } else if (skill == "evasion") {
                    SkillChange("Evasion", level);
                } else if (skill == "infiltration") {
                    SkillChange("Infiltration", level);
                } else if (skill == "lockpicking") {
                    SkillChange("LockPicking", level);
                } else if (skill == "selfbondage") {
                    SkillChange("SelfBondage", level);
                } else if (skill == "willpower") {
                    SkillChange("Willpower", level);
                }
            }
	} else if (content.indexOf("/sleep") == 0) {
	    if (content.endsWith("sleep")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " swallows a sleeping pill and drinks a glass of water. " + tmpr1 + " falls asleep very quickly."
                    }]
                });
                InventoryWear(Player,"RegularSleepingPill",'ItemMouth');
                CharacterSetFacialExpression(Player, "Eyes", "Closed");
                CharacterSetFacialExpression(Player, "Eyes2", "Closed");
                CharacterSetFacialExpression(Player, "Emoticon", "Sleep");
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(6).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    if (InventoryGet(target[0], "Pronouns").Asset.Name == "HeHim")  {
                        tgpr1 = "He";
                        tgpr2 = "him";
                        tgpr3 = "his";
			tgpr4 = "he";
                    } else {
                        tgpr1 = "She";
                        tgpr2 = "her";
                        tgpr3 = "her";
			tgpr4 = "she";
                    }	
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "" + tmpname + " feeds "+ tgpname + " a sleeping pill and gives " + tgpr2 + " a glass of water. "+ tgpname +" falls asleep very quickly."
                        }]
                    });
                    InventoryWear(target[0],"RegularSleepingPill",'ItemMouth');
                    CharacterSetFacialExpression(target[0], "Eyes", "Closed");
                    CharacterSetFacialExpression(target[0], "Eyes2", "Closed");
                    CharacterSetFacialExpression(target[0], "Emoticon", "Sleep");
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }     
        } else if (content.indexOf("/solidity") == 0) {
	    if (content.endsWith("/solidity")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The solidity command must be followed by a number between 1 and 99.</p>"
		);
            } else {	
                var solidity = content.substring(9).trim();
                    if (InventoryGet(Player, "ItemDevices") != null) {
                        if ((InventoryGet(Player, "ItemDevices").Asset.Name == "FuturisticCrate") || (InventoryGet(Player, "ItemDevices").Asset.Name == "WoodenRack"))  {
                            if (solidity == 1) {
                                InventoryRemove(Player, "ItemDevices");
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "Magical lasers make disappear the device in which " + Player.Nickname + " was prisoner."
                                    }]
                                });
                            }
                        }
                    }
                InventorySetDifficulty(Player, "ItemAddon", solidity);
                InventorySetDifficulty(Player, "ItemArms", solidity);
                InventorySetDifficulty(Player, "ItemBoots", solidity);
                InventorySetDifficulty(Player, "ItemBreast", solidity);
                InventorySetDifficulty(Player, "ItemButt", solidity);
                InventorySetDifficulty(Player, "ItemDevices", solidity);
                InventorySetDifficulty(Player, "ItemEars", solidity);
                InventorySetDifficulty(Player, "ItemFeet", solidity);
                InventorySetDifficulty(Player, "ItemHands", solidity);
                InventorySetDifficulty(Player, "ItemHead", solidity);
                InventorySetDifficulty(Player, "ItemHood", solidity);
                InventorySetDifficulty(Player, "ItemLegs", solidity);
                InventorySetDifficulty(Player, "ItemMisc", solidity);
                InventorySetDifficulty(Player, "ItemMouth", solidity);
                InventorySetDifficulty(Player, "ItemMouth2", solidity);
                InventorySetDifficulty(Player, "ItemMouth3", solidity);
                InventorySetDifficulty(Player, "ItemNeck", solidity);
                InventorySetDifficulty(Player, "ItemNeckAccessories", solidity);
                InventorySetDifficulty(Player, "ItemNeckRestraints", solidity);
                InventorySetDifficulty(Player, "ItemNipples", solidity);
                InventorySetDifficulty(Player, "ItemNipplesPiercings", solidity);
                InventorySetDifficulty(Player, "ItemNose", solidity);
                InventorySetDifficulty(Player, "ItemPelvis", solidity);
                InventorySetDifficulty(Player, "ItemTorso", solidity);
	        InventorySetDifficulty(Player, "ItemTorso2", solidity);
                InventorySetDifficulty(Player, "ItemVulva", solidity);
                InventorySetDifficulty(Player, "ItemVulvaPiercings", solidity);
                ServerPlayerInventorySync();
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: The solidity of most current bindings has been changed.</p>"
		);
	    }    
        } else if ((content.indexOf("/speak") == 0) || (content.indexOf("/mouth") == 0) || (content.indexOf("/speech") == 0)) {
            (typeof OLDtalking !== 'undefined') && (ChatRoomSendChat = OLDtalking); // reset
            NEWtalking = function() {
                this.msg = ElementValue("InputChat").trim();
                if (!this.msg.startsWith("/") && !this.msg.startsWith("*") && !this.msg.startsWith("!")) {
                    if (this.msg.length > 10) {
                        RunExpressionAnimation([null, "Grin", "Smirk", null, "Grin", "Smirk", null]);
                    } else {
                        RunExpressionAnimation([null, "Grin", "Smirk", null]);
                    }
                }
                OLDtalking();
            }
            this.OLDtalking = ChatRoomSendChat;
            this.ChatRoomSendChat = NEWtalking;
        } else if (content.indexOf("/store") == 0) {
            Asset.forEach(e => {
                if (e.Value < 0) e.Value = 1;
            });
            ServerSend("ChatRoomLeave", "");
            CommonSetScreen("Room", "Shop");
            ChatRoomSetLastChatRoom("");
            OnlineGameName = "";
            ChatRoomClearAllElements();
	} else if (content.indexOf("/stutter") == 0) {
             if (content.endsWith("/stutter")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The stutter command must be followed by a number between 0 and 4.\n" +
                    " \n" +
                    "Available stuttering modes:\n" +
                    "0 no stuttering\n" +
                    "1 light stuttering\n" +
                    "2 normal stuttering\n" +
                    "3 heavy stuttering\n" +
                    "4 total stuttering</p>"
                );
             } else {
                 var stlevel = content.substring(8).trim();
                 ElementValue("InputChat", ""); 
                     if (stlevel == 0) { 
                         ChatRoomSendLocal(
		             "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: No more stuttering.</p>"
			 );
                         Stutter1On = false;
                         Stutter2On = false;
                         Stutter3On = false;
                         Stutter4On = false;
                         OLDmenu();
                     } if (stlevel == 1) { 
                         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in light stuttering mode.</p>"
			 );
                         Stutter1On = true;
                         Stutter2On = false;
                         Stutter3On = false;
                         Stutter4On = false;
                     } if (stlevel == 2) { 
                         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in normal stuttering mode.</p>"
			 );
                         Stutter1On = false;
                         Stutter2On = true;
                         Stutter3On = false;
                         Stutter4On = false;
                      } if (stlevel == 3) { 
                         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in heavy stuttering mode.</p>"
			 );
                         Stutter1On = false;
                         Stutter2On = false;
                         Stutter3On = true;
                         Stutter4On = false;
                      } if (stlevel == 4) { 
                         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in total stuttering mode.</p>"
			 );
                         Stutter1On = false;
                         Stutter2On = false;
                         Stutter3On = false;
                         Stutter4On = true;
                     }
              }	
        } else if (content.indexOf("/superdice") == 0) {
            var sides = content.substring(10).trim();
            if ((sides < 2) || (sides > 1000000000)) sides = 6;
            const Result = [];
            let Roll = Math.floor(Math.random() * sides) + 1;
            Result.push(Roll);
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + " rolls a superdice of " + sides + " sides. The result is " + Result + "."
                }]
            });
        } else if (content.indexOf("/talk") == 0) {
             if (content.endsWith("/talk")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The talk command must be followed by a number between -1 and 9.\n" +
                    " \n" +
                    "Available talk modes:\n" +
                    "-1 baby talk\n" +
                    "0 normal talk\n" +
                    "1 very light gag talk\n" +
                    "2 light gag talk\n" +
                    "3 easy gag talk\n" +
                    "4 normal gag talk\n" +
                    "5 medium gag talk\n" +
                    "6 heavy gag talk\n" +
                    "7 very heavy gag talk\n" +
                    "8 total gag talk\n" +
	            "9 real baby/gag talk</p>"
                );
             } else {
                 var gaglevel = content.substring(5).trim();
                 ElementValue("InputChat", "");
                     if (gaglevel == -1) {            
                         if (this.BabyTalkOn == false || this.BabyTalkOn == undefined) {  
                             ChatRoomSendLocal(
			         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in baby talk mode.</p>"
			     );
                             GagTalkOn = false;                  
                             BabyTalkOn = true;
                             OLDmenu();
                         }
                     } 
                     if (gaglevel == 0) { 
                         ChatRoomSendLocal(
			     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Back to normal talk mode.</p>"
			 );
                         BabyTalkOn = false;
                         GagTalkOn = false;
                         OLDmenu();
                     } 
                     if ((gaglevel > 0) && (gaglevel < 9)) {  
                         if (this.GagTalkOn == false || this.GagTalkOn == undefined)  { 
                             BabyTalkOn = false;  
                             gl = gaglevel;                  
                             GagTalkOn = true;                  
                         } else {
                             GagTalkOn = false;   
                             gl = gaglevel;                  
                             GagTalkOn = true;
                         } 
                         ChatRoomSendLocal(
		              "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in gag talk mode.</p>"
		         );
                     }
		     if (gaglevel == 9) { 
                         if ((InventoryGet(Player, "ItemMouth") != null) && (InventoryGet(Player, "ItemMouth").Asset.Name == "RegressedMilk")) {
                             bl = 1;
                         }
                         if ((InventoryGet(Player, "ItemMouth2") != null) && (InventoryGet(Player, "ItemMouth2").Asset.Name == "RegressedMilk")) {
                             bl = 1;
                         }
                         if ((InventoryGet(Player, "ItemMouth3") != null) && (InventoryGet(Player, "ItemMouth3").Asset.Name == "RegressedMilk")) {
                             bl = 1;
                         }
                         if (bl == 1) { 
                             if (this.BabyTalkOn == false || this.BabyTalkOn == undefined) {  
                                 ChatRoomSendLocal(
				     "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in real baby talk mode.</p>"
				 );
                                 GagTalkOn = false;                  
                                 BabyTalkOn = true;
                                 OLDmenu();
                             }
                         } else {
                             bl = 0;
                             if (this.GagTalkOn == false || this.GagTalkOn == undefined)  { 
                                 BabyTalkOn = false;  
                                 gl = SpeechGetTotalGagLevel(Player);
                                 if (gl == 0) {
                                     GagTalkOn = false;   
                                     ChatRoomSendLocal(
				         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Back to normal talk mode.</p>"
				     );
                                     OLDmenu();
                                 } else {
                                     GagTalkOn = true; 
                                     ChatRoomSendLocal(
				         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in real gag talk mode.</p>"
				     );
                                 }
                             } else {
                                 GagTalkOn = false;   
                                 gl = SpeechGetTotalGagLevel(Player);
                                 if (gl == 0) {   
                                     ChatRoomSendLocal(
				         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Back to normal talk mode.</p>"
				     );
                                     OLDmenu();
                                 } else {
                                     GagTalkOn = true; 
                                     ChatRoomSendLocal(
				         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: You are now in real gag talk mode.</p>"
				     );
                                 }                            
                             }                         
                         }
                     }     
             }
        } else if (content.indexOf("/theme") == 0) {
            var theme = content.substring(6).trim();
            if ((theme > -1) && (theme < 4)) {
                Player.ChatSettings.ColorTheme = PreferenceChatColorThemeList[theme]
                ServerAccountUpdate.QueueData({
                    ChatSettings: Player.ChatSettings
                });
                ServerSocket.close();
                ServerSocket.open();
            }
        } else if (content.indexOf("/timercell") == 0) {
            var minutes = content.substring(10).trim();
            ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + " gets grabbed by two maids and locked in a timer cell for " + minutes + " minutes."
                }]
            });
            DialogLentLockpicks = false;
            ChatRoomClearAllElements();
            ServerSend("ChatRoomLeave", "");
            CharacterDeleteAllOnline();
            CellLock(minutes);
        } else if (content.indexOf("/title") == 0) {
            if (content.endsWith("/title")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The title command must be followed by a title.\n" +
                    "It will also change required parameters to get the title.\n" +
                    "You will be able to check the changes in your profile.\n" +
                    " \n" +
                    "Available titles:\n" +
                    "agent, angel, baby, bondage baby, bondage maid,\n" +
                    "bunny, clubslave, coldbloodhorse, collegestudent,\n" +
                    "demon, diaperlover, doctor, doll, drone, duchess,\n" +
                    "escapedpatient, farmhorse, flyingpegasus, foal, foxy,\n" +
                    "goodgirl, goodslave, goodslavegirl, headmaid,\n" +
                    "hotbloodhorse, houdini, infiltrator, kidnapper,\n" +
                    "kitten, ladyluck, littleone, magician, magus, maid,\n" +
                    "majesticalicorn, masterkidnapper, mistress, mole,\n" +
                    "nawashi, nurse, operative, oracle, patient,\n" +
                    "patron, permanentpatient, puppy, sage, shiningunicorn,\n" +
                    "sorcerer, succubus, superspy, switch, warmbloodhorse,\n" +
                    "warlock, wildmustang, witch, wizard.</p>"
                );
            } else {
                var title = content.substring(6).trim();
                if (title == "agent") {
                    if ((SkillGetLevel(Player, "Infiltration") < 6) || (SkillGetLevel(Player, "Infiltration") > 7)) {
                        SkillChange("Infiltration", 6);
                    }
                    TitleSet("InfilrationAgent");
                } else if (title == "angel") {
                    TitleSet("Angel");
                } else if (title == "baby") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    TitleSet("Baby");
                } else if (title == "bondagebaby") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    if (SkillGetLevel(Player, "Evasion") < 10) {
                        SkillChange("Evasion", 10);
                    }
                    TitleSet("BondageBaby");
                } else if (title == "bondagemaid") {
                    if ((LogQuery("JoinedSorority", "Maid") == false) || (LogQuery("LeadSorority", "Maid") == false)) {
                        LogAdd("JoinedSorority", "Management");
                    }
                    if (SkillGetLevel(Player, "Evasion") < 10) {
                        SkillChange("Evasion", 10);
                    }
                    TitleSet("BondageMaid");
                } else if (title == "bunny") {
                    TitleSet("Bunny");
                } else if (title == "clubslave") {
                    LogAdd("ClubSlave", "Management", CurrentTime + 3600000);
                } else if (title == "coldbloodhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 3) || (SkillGetLevel(Player, "Infiltration") > 3)) {
                        SkillChange("Dressage", 3);
                    }
                    TitleSet("PonyCold");
                } else if (title == "collegestudent") {
                    LogAdd("BondageCollege", "Import");
                    TitleSet("CollegeStudent");
                } else if (title == "demon") {
                    TitleSet("Demon");
                } else if (title == "diaperlover") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    TitleSet("DL");
                } else if (title == "doctor") {
                    if (ReputationGet("Asylum") < 100) {
                        DialogSetReputation("Asylum", 100);
                    }
                    LogAdd("Committed", "Asylum", CurrentTime);
                    TitleSet("Doctor");
                } else if (title == "doll") {
                    TitleSet("Doll");
                } else if (title == "drone") {
                    if (AsylumGGTSGetLevel(Player) < 6) {
                        Level = parseInt(6);
                        Player.Game.GGTS.Level = 6;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("Drone");
                } else if (title == "duchess") {
                    LogAdd("KidnapSophie", "Sarah");
                    TitleSet("Duchess");
                } else if (title == "escapedpatient") {
                    LogAdd("Escaped", "Asylum", CurrentTime + 86400000);
                } else if (title == "farmhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 2) || (SkillGetLevel(Player, "Infiltration") > 2)) {
                        SkillChange("Dressage", 2);
                    }
                    TitleSet("PonyFarm");
                } else if (title == "flyingpegasus") {
                    if ((SkillGetLevel(Player, "Dressage") < 8) || (SkillGetLevel(Player, "Infiltration") > 9)) {
                        SkillChange("Dressage", 8);
                    }
                    TitleSet("PonyPegasus");
                } else if (title == "foal") {
                    if (ReputationGet("ABDL") < 1) {
                        if ((SkillGetLevel(Player, "Dressage") < 1) || (SkillGetLevel(Player, "Infiltration") > 2)) {
                            SkillChange("Dressage", 1);
                        }
                    } else if (ReputationGet("ABDL") >= 1) {
                        if (SkillGetLevel(Player, "Dressage") < 1) {
                            SkillChange("Dressage", 1);
                        }
                    }
                    TitleSet("PonyFoal");
                } else if (title == "foxy") {
                    TitleSet("Foxy");
                } else if (title == "goodgirl") {
                    if (AsylumGGTSGetLevel(Player) < 4) {
                        Level = parseInt(4);
                        Player.Game.GGTS.Level = 4;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("GoodGirl");
                } else if (title == "goodslave") {
                    if (AsylumGGTSGetLevel(Player) < 6) {
                        Level = parseInt(6);
                        Player.Game.GGTS.Level = 6;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("GoodSlave");
                } else if (title == "goodslavegirl") {
                    if (AsylumGGTSGetLevel(Player) < 5) {
                        Level = parseInt(5);
                        Player.Game.GGTS.Level = 5;
                        ServerAccountUpdate.QueueData({
                            Game: Player.Game
                        });
                    }
                    TitleSet("GoodSlaveGirl");
                } else if (title == "headmaid") {
                    LogAdd("LeadSorority", "Maid");
                    TitleSet("HeadMaid");
                } else if (title == "hotbloodhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 5) || (SkillGetLevel(Player, "Infiltration") > 5)) {
                        SkillChange("Dressage", 5);
                    }
                    TitleSet("PonyHot");
                } else if (title == "houdini") {
                    if (SkillGetLevel(Player, "Evasion") < 10) {
                        SkillChange("Evasion", 10);
                    }
                    TitleSet("Houdini");
                } else if (title == "infiltrator") {
                    if ((SkillGetLevel(Player, "Infiltration") < 4) || (SkillGetLevel(Player, "Infiltration") > 5)) {
                        SkillChange("Infiltration", 4);
                    }
                    TitleSet("InfilrationInfiltrator");
                } else if (title == "kidnapper") {
                    if ((ReputationGet("Kidnap") < 50) || (ReputationGet("Kidnap") > 99)) {
                        DialogSetReputation("Kidnap", 50);
                    }
                    TitleSet("Kidnapper");
                } else if (title == "kitten") {
                    TitleSet("Kitten");
                } else if (title == "ladyluck") {
                    if (ReputationGet("Gambling") < 100) {
                        DialogSetReputation("Gambling", 100);
                    }
                    TitleSet("LadyLuck");
                } else if (title == "littleone") {
                    if (ReputationGet("ABDL") < 1) {
                        DialogSetReputation("ABDL", 1);
                    }
                    TitleSet("LittleOne");
                } else if (title == "magician") {
                    if ((ReputationGet("HouseVincula") < 50) || (ReputationGet("HouseVincula") > 99)) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseVincula", 50);
                    }
                    TitleSet("MagicSchoolMagician");
                } else if (title == "magus") {
                    if (ReputationGet("HouseMaiestas") < 100) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseMaiestas", 100);
                    }
                    TitleSet("MagicSchoolMagus");
                } else if (title == "maid") {
                    LogDelete("LeadSorority", "Maid");
                    LogAdd("JoinedSorority", "Management");
                    TitleSet("Maid");
                } else if (title == "majesticalicorn") {
                    if (SkillGetLevel(Player, "Dressage") < 10) {
                        SkillChange("Dressage", 10);
                    }
                    TitleSet("PonyAlicorn");
                } else if (title == "masterkidnapper") {
                    if (ReputationGet("Kidnap") < 100) {
                        DialogSetReputation("Kidnap", 100);
                    }
                    TitleSet("MasterKidnapper");
                } else if (title == "mistress") {
                    LogAdd("ClubMistress", "Management");
                    TitleSet("Mistress");
                } else if (title == "mole") {
                    if ((SkillGetLevel(Player, "Infiltration") < 2) || (SkillGetLevel(Player, "Infiltration") > 3)) {
                        SkillChange("Infiltration", 2);
                    }
                    TitleSet("InfilrationMole");
                } else if (title == "nawashi") {
                    if (SkillGetLevel(Player, "Bondage") < 10) {
                        SkillChange("Bondage", 10);
                    }
                    TitleSet("Nawashi");
                } else if (title == "nurse") {
                    if ((ReputationGet("Asylum") < 50) || (ReputationGet("Asylum") > 99)) {
                        DialogSetReputation("Asylum", 50);
                    }
                    LogAdd("Committed", "Asylum", CurrentTime);
                    TitleSet("Nurse");
                } else if (title == "operative") {
                    if ((SkillGetLevel(Player, "Infiltration") < 8) || (SkillGetLevel(Player, "Infiltration") > 9)) {
                        SkillChange("Infiltration", 8);
                    }
                    TitleSet("InfilrationOperative");
                } else if (title == "oracle") {
                    if (ReputationGet("HouseAmplector") < 100) {
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseAmplector", 100);
                    }
                    TitleSet("MagicSchoolOracle");
                } else if (title == "patient") {
                    if ((ReputationGet("Asylum") > -50) || (ReputationGet("Asylum") < -99)) {
                        DialogSetReputation("Asylum", -50);
                    }
                    TitleSet("Patient");
                } else if (title == "patron") {
                    TitleSet("Patron");
                } else if (title == "permanentpatient") {
                    if (ReputationGet("Asylum") > -100) {
                        DialogSetReputation("Asylum", -100);
                    }
                    TitleSet("PermanentPatient");
                } else if (title == "puppy") {
                    TitleSet("Puppy");
                } else if (title == "sage") {
                    if ((ReputationGet("HouseAmplector") < 50) || (ReputationGet("HouseAmplector") > 99)) {
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseAmplector", 50);
                    }
                    TitleSet("MagicSchoolSage");
                } else if (title == "shiningunicorn") {
                    if ((SkillGetLevel(Player, "Dressage") < 7) || (SkillGetLevel(Player, "Infiltration") > 7)) {
                        SkillChange("Dressage", 7);
                    }
                    TitleSet("PonyUnicorn");
                } else if (title == "sorcerer") {
                    if (ReputationGet("HouseVincula") < 100) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseVincula", 100);
                    }
                    TitleSet("MagicSchoolSorcerer");
                } else if (title == "succubus") {
                    TitleSet("Succubus");
                } else if (title == "superspy") {
                    if (SkillGetLevel(Player, "Infiltration") < 10) {
                        SkillChange("Infiltration", 10);
                    }
                    TitleSet("InfilrationSuperspy");
                } else if (title == "switch") {
                    TitleSet("Switch");
                } else if (title == "warlock") {
                    if (ReputationGet("HouseCorporis") < 100) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseCorporis", 100);
                    }
                    TitleSet("MagicSchoolWarlock");
                } else if (title == "warmbloodhorse") {
                    if ((SkillGetLevel(Player, "Dressage") < 4) || (SkillGetLevel(Player, "Infiltration") > 4)) {
                        SkillChange("Dressage", 4);
                    }
                    TitleSet("PonyWarm");
                } else if (title == "wildmustang") {
                    if ((SkillGetLevel(Player, "Dressage") < 6) || (SkillGetLevel(Player, "Infiltration") > 6)) {
                        SkillChange("Dressage", 6);
                    }
                    TitleSet("PonyWild");
                } else if (title == "witch") {
                    if ((ReputationGet("HouseCorporis") < 50) || (ReputationGet("HouseCorporis") > 99)) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseMaiestas", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseCorporis", 50);
                    }
                    TitleSet("MagicSchoolWitch");
                } else if (title == "wizard") {
                    if ((ReputationGet("HouseMaiestas") < 50) || (ReputationGet("HouseMaiestas") > 99)) {
                        DialogSetReputation("HouseAmplector", 0);
                        DialogSetReputation("HouseCorporis", 0);
                        DialogSetReputation("HouseVincula", 0);
                        LogDelete("Mastery", "MagicSchool");
                        DialogSetReputation("HouseMaiestas", 50);
                    }
                    TitleSet("MagicSchoolWizard");
                }
            }
        } else if (content.indexOf("/totalrelease") == 0) {
	    if (content.endsWith("/totalrelease")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make disappear all bindings and toys on " + tmpname + " body."
                    }]
                });
                CharacterReleaseTotal(Player);
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(13).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers make disappear all bindings and toys on " + tgpname + " body."
                        }]
                    });
                    CharacterReleaseTotal(target[0]);
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }
	} else if (content.indexOf("/trsee") == 0) {
            if (content.endsWith("/trsee")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The trsee command must be followed by 3 numbers for visor, deafening module and chin strap.\n" +
                    " \n" +
                    "Available visors:\n" +
                    "0 No visor - 1 transparent\n" +
                    "2 light tinted - 3 heavy tinted\n" +
                    "4 opaque - 5 hypnotic\n" +
                    " \n" +
                    "Available deafening modules:\n" +
                    "0 no module\n" +
                    "1 light\n" +
                    "2 heavy\n" +
                    "3 noise-cancelling\n" +
                    " \n" +
                    "Available options for chin strap:\n" +
                    "0 No chin strap\n" +
                    "1 chin strap</p>"
                );
            } else {
                if (InventoryGet(Player, "ItemHood") != null) {
                     if (InventoryGet(Player, "ItemHood").Asset.Name == "TechnoHelmet1")  {
                         var stringTRvision1 = content;
                         var stringTRvision2 = stringTRvision1.split(/[ ,]+/);
                         var vtr = stringTRvision2[1];
                         var dtr = stringTRvision2[2];  
                         var ctr = stringTRvision2[3]; 
                         if ((vtr > -1) && (vtr < 6) && (dtr > -1) && (dtr < 4) && (ctr > -1) && (ctr < 2)) {
                             const TechnoHelmet1 = InventoryGet(Player, "ItemHood");
                             const TechnoHelmet1Config = ModularItemDataLookup.ItemHoodTechnoHelmet1;
                             TechnoHelmet1.Property = ModularItemMergeModuleValues(TechnoHelmet1Config, [vtr, dtr, ctr]);
                             ChatRoomCharacterUpdate(Player);
                             ChatRoomSendLocal(
			    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: The settings of your Techno Helmet have been modified.</p>"
                  );                   
                          }
                     }
                }   	
            } 	
        } else if (content.indexOf("/underwear") == 0) {
	    if (content.endsWith("/underwear")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers put " + tmpname + " in random underwear."
                    }]
                });
                CharacterRandomUnderwear(Player);
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(10).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers put " + tgpname + " in random underwear."
                        }]
                    });
                    CharacterRandomUnderwear(target[0]);
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }	
        } else if (content.indexOf("/unlock") == 0) {
            var stringUnlock1 = content;
            var stringUnlock2 = stringUnlock1.split(/[ ,]+/);
            var lk = stringUnlock2[2];
            var targetname = stringUnlock2[1];
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	    if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            }
            if ((target[0] != null) && (target[0].AllowItem == true))  {
		if (target[0].Nickname == '') { 
                    tgpname = target[0].Name;
                } else {
                    tgpname = target[0].Nickname;
                } 
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make disappear locks on " + tgpname + " body."
                    }]
                });
                if (lk == null) {
                    CharacterReleaseFromLock(target[0], "CombinationPadlock");
                    CharacterReleaseFromLock(target[0], "ExclusivePadlock");
                    CharacterReleaseFromLock(target[0], "HighSecurityPadlock");
                    CharacterReleaseFromLock(target[0], "IntricatePadlock");
                    CharacterReleaseFromLock(target[0], "LoversPadlock");
                    CharacterReleaseFromLock(target[0], "LoversTimerPadlock");
                    CharacterReleaseFromLock(target[0], "MetalPadlock");
                    CharacterReleaseFromLock(target[0], "MistressPadlock");
                    CharacterReleaseFromLock(target[0], "MistressTimerPadlock");
                    CharacterReleaseFromLock(target[0], "OwnerPadlock");
                    CharacterReleaseFromLock(target[0], "OwnerTimerPadlock");
                    CharacterReleaseFromLock(target[0], "PandoraPadlock");
                    CharacterReleaseFromLock(target[0], "PasswordPadlock");
                    CharacterReleaseFromLock(target[0], "SafewordPadlock");
                    CharacterReleaseFromLock(target[0], "TimerPadlock");
                    CharacterReleaseFromLock(target[0], "TimerPasswordPadlock");
                } else if (lk == 1) {
                    CharacterReleaseFromLock(target[0], "MetalPadlock");
                } else if (lk == 2) {
                    CharacterReleaseFromLock(target[0], "ExclusivePadlock");
                } else if (lk == 3) {
                    CharacterReleaseFromLock(target[0], "IntricatePadlock");
                } else if (lk == 4) {
                    CharacterReleaseFromLock(target[0], "HighSecurityPadlock");
                } else if (lk == 5) {
                    CharacterReleaseFromLock(target[0], "PandoraPadlock");
                } else if (lk == 6) {
                    CharacterReleaseFromLock(target[0], "MistressTimerPadlock");
                } else if (lk == 7) {
                    CharacterReleaseFromLock(target[0], "LoversPadlock");
                } else if (lk == 8) {
                    CharacterReleaseFromLock(target[0], "OwnerPadlock");
                } else if (lk == 9) {
                    CharacterReleaseFromLock(target[0], "TimerPadlock");
                } else if (lk == 10) {
                    CharacterReleaseFromLock(target[0], "CombinationPadlock");
                } else if (lk == 11) {
                    CharacterReleaseFromLock(target[0], "SafewordPadlock");
                } else if (lk == 12) {
                    CharacterReleaseFromLock(target[0], "PasswordPadlock");
                } else if (lk == 13) {
                    CharacterReleaseFromLock(target[0], "MistressTimerPadlock");
                } else if (lk == 14) {
                    CharacterReleaseFromLock(target[0], "LoversTimerPadlock");
                } else if (lk == 15) {
                    CharacterReleaseFromLock(target[0], "OwnerTimerPadlock");
                } else if (lk == 16) {
                    CharacterReleaseFromLock(target[0], "TimerPasswordPadlock");
                }
                ChatRoomCharacterUpdate(target[0]);
		ChatRoomSetTarget(null);  
            }
        } else if (content.indexOf("/unrestrict") == 0) {
            if (content.includes("soft")) {
                InventoryGroupIsBlocked = function(C, GroupName) {
                    return false;
                }
		InventoryPrerequisiteMessage = function(C, Prerequisit) {
                    if (Prerequisit == 'HasBreasts') {
                        return !InventoryIsItemInList(C, "BodyUpper", ["XLarge", "Large", "Normal", "Small"]) ? "MustHaveBreasts" : "";
                    } else if (Prerequisit == 'HasFlatChest') {
                        return !InventoryIsItemInList(C, "BodyUpper", ["FlatSmall", "FlatMedium"]) ? "MustHaveFlatChest" : "";
                    } else if (Prerequisit == 'HasPenis') {
                        return !InventoryIsItemInList(C, "Pussy", ["Penis"]) ? "MustHavePenis" : "";
                    } else if (Prerequisit == 'HasVagina') {
                        return !InventoryIsItemInList(C, "Pussy", ["PussyLight1", "PussyLight2", "PussyLight3", "PussyDark1", "PussyDark2", "PussyDark3"]) ? "MustHaveVagina" : "";
                    } else {
                        return "";
                    }
                }
                Player.GameplaySettings.BlindDisableExamine = false;
                Asset.forEach(e => {
                    if (e.Value < 0) e.Value = 1;
                });
                Player.Inventory.forEach(item => item.Asset.Enable = true);
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Unrestricted softly. Can do most things you couldn't do before.\n" +
                    "Store also includes hidden items. This can only be reset via a full relog.</p>"
                );
            } else if (content.includes("total")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Unrestricted totally. Can do most things you couldn't do before.\n" +
                    "Store also includes hidden items. This can only be reset via a full relog.</p>"
                );
                Player.CanInteract = function() {
                    return true;
                }
                Player.CanWalk = function() {
                    return true;
                }
                Player.CanTalk = function() {
                    return true;
                }
                Player.IsPlugged = function() {
                    return false;
                }
                Player.IsVulvaChaste = function() {
                    return false;
                }
                Player.CanChange = function() {
                    return true;
                }
                InventoryGroupIsBlocked = function(C, GroupName) {
                    return false;
                }
		InventoryPrerequisiteMessage = function(C, Prerequisit) {
                    if (Prerequisit == 'HasBreasts') {
                        return !InventoryIsItemInList(C, "BodyUpper", ["XLarge", "Large", "Normal", "Small"]) ? "MustHaveBreasts" : "";
                    } else if (Prerequisit == 'HasFlatChest') {
                        return !InventoryIsItemInList(C, "BodyUpper", ["FlatSmall", "FlatMedium"]) ? "MustHaveFlatChest" : "";
                    } else if (Prerequisit == 'HasPenis') {
                        return !InventoryIsItemInList(C, "Pussy", ["Penis"]) ? "MustHavePenis" : "";
                    } else if (Prerequisit == 'HasVagina') {
                        return !InventoryIsItemInList(C, "Pussy", ["PussyLight1", "PussyLight2", "PussyLight3", "PussyDark1", "PussyDark2", "PussyDark3"]) ? "MustHaveVagina" : "";
                    } else {
                        return "";
                    }
                } 
                Player.GameplaySettings.BlindDisableExamine = false;
                Asset.forEach(e => {
                    if (e.Value < 0) e.Value = 1;
                });
                Player.Inventory.forEach(item => item.Asset.Enable = true);
                DialogHasKey = function(C, Item) {
                    return true
                }
                StruggleLockPickProgressStart = function(C, Item) {
                    InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    DialogLeave()
                }
                StruggleProgressStart = function(C, PrevItem, NextItem) {
                    if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
                        if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
                            StruggleProgressCurrentMinigame = "Strength";
                            StruggleStrengthStart(C, PrevItem, NextItem);
                        }
                    } else {
                        InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    }
                }
            }
            if (content.endsWith("/unrestrict")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The unrestrict command:\n" +
                    "For total, type <b>/unrestrict total</b>\n" +
                    "For submissives, type <b>/unrestrict soft</b>\n" +
                    "To reset, type <b>/unrestrict reset</b></p>"
                );
            } else if (content.includes("reset")) {
                ChatRoomSendLocal(
		    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Unrestrict reset.</p>"
		);
                Player.CanInteract = function() {
                    return (this.Effect.indexOf("Block") < 0)
                }
                Player.CanTalk = function() {
                    (this.Effect.indexOf("GagVeryLight") < 0) &&
                    (this.Effect.indexOf("GagLight") < 0) &&
                    (this.Effect.indexOf("GagEasy") < 0) &&
                    (this.Effect.indexOf("GagNormal") < 0) &&
                    (this.Effect.indexOf("GagMedium") < 0) &&
                    (this.Effect.indexOf("GagHeavy") < 0) &&
                    (this.Effect.indexOf("GagVeryHeavy") < 0) &&
                    (this.Effect.indexOf("GagTotal") < 0) &&
                    (this.Effect.indexOf("GagTotal2") < 0) &&
                    (this.Effect.indexOf("GagTotal3") < 0) &&
                    (this.Effect.indexOf("GagTotal4") < 0)
                }
                ChatSearchMuffle = function(Text) {
                    let ret = Text;
                    if (Player.ImmersionSettings && Player.ImmersionSettings.ChatRoomMuffle && Player.GetBlindLevel() > 0) {
                        ret = SpeechGarbleByGagLevel(Player.GetBlindLevel() * Player.GetBlindLevel(), Text, true);
                        if (ret.length == 0) return "...";
                        return ret;
                    }
                    return ret;
                }
                Player.CanWalk = function() {
                    return (
                        (this.Effect.indexOf("Freeze") < 0) &&
                        (this.Effect.indexOf("Tethered") < 0) &&
                        ((this.Pose == null) || (this.Pose.indexOf("Kneel") < 0) || (this.Effect.indexOf("KneelFreeze") < 0)))
                }
                Player.IsPlugged = function() {
                    return (this.Effect.indexOf("IsPlugged") >= 0)
                }
                Player.IsVulvaChaste = function() {
                    return (this.Effect.indexOf("Chaste") >= 0)
                }
                Player.CanKneel = function() {
                    return CharacterCanKneel(this)
                }
                Player.GetBlindLevel = function (eyesOnly = false) {
		    let blindLevel = 0;
		    const eyes1 = InventoryGet(this, "Eyes");
	            const eyes2 = InventoryGet(this, "Eyes2");
		    if (eyes1 && eyes1.Property && eyes1.Property.Expression && eyes2 && eyes2.Property && eyes2.Property.Expression) {
		        if ((eyes1.Property.Expression === "Closed") && (eyes2.Property.Expression === "Closed")) {
			    blindLevel += DialogFacialExpressionsSelectedBlindnessLevel;
			}
		    }  
		    if (!eyesOnly) {
			if (this.Effect.includes("BlindHeavy")) blindLevel += 3;
			else if (this.Effect.includes("BlindNormal")) blindLevel += 2;
			else if (this.Effect.includes("BlindLight")) blindLevel += 1;
			if (InventoryCraftCount(this, "Thick") > 0) blindLevel++;
			if (InventoryCraftCount(this, "Thin") > 0) blindLevel--;
		    }
		    blindLevel = Math.min(3, blindLevel);
		    if (this.IsPlayer() && this.GameplaySettings && this.GameplaySettings.SensDepChatLog == "SensDepLight") blindLevel = Math.min(2, blindLevel);
		    return blindLevel;
		}
                Player.CanChange = function(Pose) {
                    return CharacterCanChangeToPose(this, Pose)
                }
                InventoryGroupIsBlocked = function(C, GroupName, Activity) {
                    if (InventoryGroupIsBlockedForCharacter(C, GroupName, Activity)) return true;
                    if ((C.ID != 0) && Player.IsEnclose()) return true;
                    return false;
                }
                InventoryPrerequisiteMessage = function(C, Prerequisit) {
                    return "";
                } //too long to restore
                Player.GameplaySettings.BlindDisableExamine = false; //no point
                Player.Inventory.forEach(item => item.Asset.Enable = true); //can't be
                Player.Inventory.forEach(item => item.Asset.Wear = true); //can't be
                DialogHasKey = function(C, Item) {
                    if (InventoryGetItemProperty(Item, "SelfUnlock") == false && (!Player.CanInteract() || C.ID == 0)) return false;
                    if (C.IsOwnedByPlayer() && InventoryAvailable(Player, "OwnerPadlockKey", "ItemMisc") && Item.Asset.Enable) return true;
                    const lock = InventoryGetLock(Item);
                    if (C.IsLoverOfPlayer() && InventoryAvailable(Player, "LoversPadlockKey", "ItemMisc") && Item.Asset.Enable && Item.Property && Item.Property.LockedBy && !Item.Property.LockedBy.startsWith("Owner")) return true;
                    if (lock && lock.Asset.ExclusiveUnlock && ((!Item.Property.MemberNumberListKeys && Item.Property.LockMemberNumber != Player.MemberNumber) || (Item.Property.MemberNumberListKeys && CommonConvertStringToArray("" + Item.Property.MemberNumberListKeys).indexOf(Player.MemberNumber) < 0))) return false;
                    if (lock && lock.Asset.ExclusiveUnlock) return true;
                    var UnlockName = "Unlock-" + Item.Asset.Name;
                    if ((Item.Property != null) && (Item.Property.LockedBy != null)) UnlockName = "Unlock-" + Item.Property.LockedBy;
                    for (let I = 0; I < Player.Inventory.length; I++)
                        if (InventoryItemHasEffect(Player.Inventory[I], UnlockName)) {
                            if (lock != null) {
                                if (lock.Asset.LoverOnly && !C.IsLoverOfPlayer()) return false;
                                if (lock.Asset.OwnerOnly && !C.IsOwnedByPlayer()) return false;
                                return true;
                            } else return true;
                        } return false;
                }
                StruggleStrengthStart = function(C, PrevItem, NextItem) {
                    var StruggleDiff = StruggleStrengthGetDifficulty(C, PrevItem, NextItem);
                    var S = StruggleDiff.difficulty;
                    if ((PrevItem && PrevItem.Asset) || (NextItem && NextItem.Asset)) {
                        var AudioFile = (NextItem && NextItem.Asset) ? NextItem.Asset.Audio : PrevItem.Asset.Audio;
                        if (AudioFile != null) AudioDialogStart("Audio/" + AudioGetFileName(AudioFile) + ".mp3");
                    }
                    if (Player.CanInteract()) {
                        StruggleProgress = 200;
                        StruggleProgressPrevItem = PrevItem;
                        StruggleProgressNextItem = NextItem;
                    } else {
                        StruggleProgress = 0;
                        StruggleProgressAuto = StruggleDiff.auto;
                        StruggleProgressPrevItem = PrevItem;
                        StruggleProgressNextItem = NextItem;
                        StruggleProgressOperation = StruggleProgressGetOperation(C, PrevItem, NextItem);
                        StruggleProgressSkill = StruggleDiff.timer;
                        StruggleProgressChallenge = S * -1;
                        StruggleProgressLastKeyPress = 0;
                        StruggleProgressStruggleCount = 0;
                        DialogItemToLock = null;
                        DialogMenuButtonBuild(C);
                        if ((StruggleProgressAuto < 0) && Player.CanInteract() && (PrevItem == null)) StruggleProgressAuto = 0;
                        if ((StruggleProgressAuto < 0) && Player.CanInteract() && (PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && !InventoryItemHasEffect(PrevItem, "Mounted", true)) StruggleProgressAuto = 0;
                        DialogAllowBlush = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Blush") == null) || (InventoryGet(C, "Blush").Property == null) || (InventoryGet(C, "Blush").Property.Expression == null)));
                        DialogAllowEyebrows = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Eyebrows") == null) || (InventoryGet(C, "Eyebrows").Property == null) || (InventoryGet(C, "Eyebrows").Property.Expression == null)));
                        DialogAllowFluids = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Fluids") == null) || (InventoryGet(C, "Fluids").Property == null) || (InventoryGet(C, "Fluids").Property.Expression == null)));
                    }
                }
                StruggleProgressStart = function(C, PrevItem, NextItem) {
                    if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
                        if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
                            StruggleProgressCurrentMinigame = "Strength";
                            StruggleStrengthStart(C, PrevItem, NextItem);
                        }
                    } else if (Player.CanInteract()) {
                        ServerSend("ChatRoomChat", {
                            Content: "Beep",
                            Type: "Action",
                            Dictionary: [{
                                Tag: "Beep",
                                Text: Player.Name + " removes the " + InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name + " from " + CurrentCharacter.Name + "'s " + CurrentCharacter.FocusGroup.Name
                            }]
                        });
                        InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                        ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
                    } else {
                        StruggleProgressChoosePrevItem = PrevItem;
                        StruggleProgressChooseNextItem = NextItem;
                        StruggleProgressCurrentMinigame = "";
                        StruggleProgress = 0;
                        DialogMenuButtonBuild(Player);
                        StruggleStrengthStart(Player, StruggleProgressChoosePrevItem, StruggleProgressChooseNextItem);
                    }
                }

                function StruggleLockPickProgressStart(C, Item) {
                    StruggleLockPickArousalText = "";
                    StruggleLockPickArousalTick = 0;
                    if (Item) {
                        StruggleLockPickItem = Item;
                    }
                    var lock = InventoryGetLock(Item);
                    var LockRating = 1;
                    var LockPickingImpossible = false;
                    if (Item != null && lock) {
                        var BondageLevel = Item.Difficulty - Item.Asset.Difficulty;
                        var S = 0;
                        S = S + SkillGetWithRatio("LockPicking");
                        if (lock.Asset.PickDifficulty && lock.Asset.PickDifficulty > 0) {
                            S = S - lock.Asset.PickDifficulty;
                            LockRating = lock.Asset.PickDifficulty;
                        }
                        if (Player.IsEnclose() || Player.IsMounted()) S = S - 2;
                        if (!Player.CanInteract() && (Item != null)) {
                            if (InventoryItemHasEffect(Item, "NotSelfPickable", true)) {
                                S = S - 50;
                                LockPickingImpossible = true;
                            } else {
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemArms"), "Block", true)) {
                                    if (Item.Asset.Group.Name != "ItemArms" && Item.Asset.Group.Name != "ItemHands") S = S - 50;
                                    else S = S - 2;
                                }
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemHands"), "Block", true)) {
                                    if (!LogQuery("KeyDeposit", "Cell") && DialogHasKey(Player, Item)) S = S - 4;
                                    else S = S - 50;
                                }
                                if (S < -6) {
                                    LockPickingImpossible = true;
                                }
                                if (!C.CanTalk()) S = S - 1;
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemLegs"), "Block", true)) S = S - 1;
                                if (InventoryItemHasEffect(InventoryGet(Player, "ItemFeet"), "Block", true)) S = S - 1;
                                if (InventoryGroupIsBlocked(Player, "ItemFeet")) S = S - 1;
                                if (Player.IsBlind()) S = S - 1;
                                if (Player.GetDeafLevel() > 0) S = S - Math.Ceiling(Player.GetDeafLevel() / 2);
                            }
                        }
                        var NumPins = 4;
                        if (LockRating >= 6) NumPins += 2;
                        if (LockRating >= 8) NumPins += 1;
                        if (LockRating >= 10) NumPins += 1;
                        if (LockRating >= 11) NumPins += 2;
                        StruggleLockPickOrder = [];
                        StruggleLockPickSet = [];
                        StruggleLockPickSetFalse = [];
                        StruggleLockPickOffset = [];
                        StruggleLockPickOffsetTarget = [];
                        StruggleLockPickImpossiblePins = [];
                        StruggleLockPickProgressItem = Item;
                        StruggleLockPickProgressOperation = StruggleLockPickProgressGetOperation(C, Item);
                        StruggleLockPickProgressSkill = Math.floor(NumPins * NumPins / 2) + Math.floor(Math.max(0, -S) * Math.max(0, -S));
                        StruggleLockPickProgressSkillLose = NumPins * NumPins / 2;
                        StruggleLockPickProgressChallenge = S * -1;
                        StruggleLockPickProgressCurrentTries = 0;
                        StruggleLockPickSuccessTime = 0;
                        StruggleLockPickFailTime = 0;
                        DialogMenuButtonBuild(C);
                        for (let P = 0; P < NumPins; P++) {
                            StruggleLockPickOrder.push(P);
                            StruggleLockPickSet.push(false);
                            StruggleLockPickSetFalse.push(false);
                            StruggleLockPickOffset.push(0);
                            StruggleLockPickOffsetTarget.push(0);
                        }
                        for (var i = StruggleLockPickOrder.length - 1; i > 0; i--) {
                            var j = Math.floor(Math.random() * (i + 1));
                            var temp = StruggleLockPickOrder[i];
                            StruggleLockPickOrder[i] = StruggleLockPickOrder[j];
                            StruggleLockPickOrder[j] = temp;
                        }
                        if ((Item.Property == null)) Item.Property = {};
                        if (Item.Property != null)
                            if ((Item.Property.LockPickSeed == null) || (typeof Item.Property.LockPickSeed != "string")) {
                                Item.Property.LockPickSeed = CommonConvertArrayToString(StruggleLockPickOrder);
                                StruggleLockPickTotalTries = 0;
                            }
                        else {
                            var conv = CommonConvertStringToArray(Item.Property.LockPickSeed);
                            for (let PP = 0; PP < conv.length; PP++) {
                                if (typeof conv[PP] != "number") {
                                    Item.Property.LockPickSeed = CommonConvertArrayToString(StruggleLockPickOrder);
                                    conv = StruggleLockPickOrder;
                                    break;
                                }
                            }
                            StruggleLockPickOrder = conv;
                        }
                        var PickingImpossible = false;
                        if (S < -6 && LockPickingImpossible) {
                            PickingImpossible = true;
                            StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length - 1]);
                            if (NumPins >= 6) StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length - 2]);
                            if (NumPins >= 8) StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length - 3]);
                        }
                        var NumTries = Math.max(Math.floor(NumPins * (1.5 - 0.3 * BondageLevel / 10)),
                            Math.ceil(NumPins * (3.25 - BondageLevel / 10) - Math.max(0, (StruggleLockPickProgressChallenge + BondageLevel / 2) * 1.5)));
                        StruggleLockPickProgressMaxTries = Math.max(1, NumTries - NumPins);
                    }
                }
            }
	} else if (content.indexOf("/untie") == 0) {
            if (content.endsWith("/untie")) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "Magical lasers make disappear the bindings on " + tmpname + " body."
                    }]
                });
                CharacterRelease(Player);
                ChatRoomCharacterUpdate(Player);  
            } else {
                var targetname = content.substring(6).trim();
                var targetfinder = new RegExp('^' + targetname + '', 'i');
                var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	        if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);              
                }
                if ((target[0] != null) && (target[0].AllowItem == true))  {
		    if (target[0].Nickname == '') { 
                        tgpname = target[0].Name;
                    } else {
                        tgpname = target[0].Nickname; 
                    } 
                    ServerSend("ChatRoomChat", {
                        Content: "Beep",
                        Type: "Action",
                        Dictionary: [{
                            Tag: "Beep",
                            Text: "Magical lasers make disappear the bindings on " + tgpname + " body."
                        }]
                    });
                    CharacterRelease(target[0]);
                    ChatRoomCharacterUpdate(target[0]);
		    ChatRoomSetTarget(null);
                }
            }
	} else if (content.indexOf("/visible") == 0) {
	    ServerSend("ChatRoomChat", {
                Content: "Beep",
                Type: "Action",
                Dictionary: [{
                    Tag: "Beep",
                    Text: "" + tmpname + " suddenly is visible for everybody."
                }]
            });   
            if (InventoryGet(Player, "ItemButt") != null) {
                  if (InventoryGet(Player, "ItemButt").Asset.Name == "AnalHook")  {
                      InventoryRemove(Player,"ItemButt");               
                }
            }  
            if (InventoryGet(Player, "Mask") != null) {
                  if (InventoryGet(Player, "Mask").Asset.Name == "Glitter")  {
                      InventoryRemove(Player,"Mask");                                   
                }
            }  
        } else if (content.indexOf("/vrsee") == 0) {
            if (content.endsWith("/vrsee")) {
                ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'><b>Quick-AccessMenu2</b>: The vrsee command must be followed by 3 numbers for background, mode and game.\n" +
                    " \n" +
                    "Available backgrounds:\n" +
                    "0 No background - 1 Virtual World\n" +
                    "2 Dungeon - 3 High-Tech\n" +
                    "4 Ancient Ruins - 5 Trance\n" +
                    " \n" +
                    "Available modes:\n" +
                    "0 Passthrough\n" +
                    "1 VR off\n" +
                    "2 VR on\n" +
                    "3 VR on + Hide restraints\n" +
                    " \n" +
                    "Available games:\n" +
                    "0 No game\n" +
                    "1 Kinky Dungeon</p>"
                );
            } else {
                if (InventoryGet(Player, "ItemHead") != null) {
                     if (InventoryGet(Player, "ItemHead").Asset.Name == "InteractiveVRHeadset")  {
                         var stringVRvision1 = content;
                         var stringVRvision2 = stringVRvision1.split(/[ ,]+/);
                         var bvr = stringVRvision2[1];
                         var fvr = stringVRvision2[2];  
                         var gvr = stringVRvision2[3]; 
                         if ((bvr > -1) && (bvr < 6) && (fvr > -1) && (fvr < 4) && (gvr > -1) && (gvr < 2)) {
                             const InteractiveVRHeadset = InventoryGet(Player, "ItemHead");
                             const InteractiveVRHeadsetConfig = ModularItemDataLookup.ItemHeadInteractiveVRHeadset;
                             InteractiveVRHeadset.Property = ModularItemMergeModuleValues(InteractiveVRHeadsetConfig, [bvr, fvr, gvr]);
                             ChatRoomCharacterUpdate(Player);
                             ChatRoomSendLocal(
			        "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: The settings of your VR Headset have been modified.</p>"
                             );                   
                         }
                     }
                }   	
            } 	
        } else if (content.indexOf("/wardrobe") == 0) {
            var targetname = content.substring(10).trim();
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	    if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            }
            if (target[0] != null) {
                target[0].OnlineSharedSettings.AllowFullWardrobeAccess = true;
                target[0].OnlineSharedSettings.BlockBodyCosplay = false;
                ChatRoomClickCharacter(target[0]);
                DialogChangeClothes();
            }
        } else if (content.indexOf("/whisper") == 0) {
            var targetname = content.substring(8).trim();
            var targetfinder = new RegExp('^' + targetname + '', 'i');
            var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
	    if (target[0] == null) {
                    var targetnumber = parseInt(targetname);
                    target[0] = ChatRoomCharacter.find((x) => x.MemberNumber === targetnumber);
            }
            if (target[0] != null) {
                ChatRoomTargetMemberNumber = target[0].MemberNumber;
            }	
        }

        //	DO NOT add new commands past this point.



        //IDEAS
        // -make an auto change background and select 10 of which should cycle
        //-make code to auto promote admin lovers, owner, sub,
        //-make a background rezier that can be seen by others and restorer
        //-make a "move closer togheter" code that can be seen by others and restorer
        //-move speech over toa a "random gestures" that will do yawn and post in chat, use emotes randomly, stick on stuff randomly, detects afk and does stuff, eventually sleeping, perhaps even testing restrains and such
        //-add special safeword If on extreme, add a cooldown after each ue.

        //3 beep leash code, can be used by any
        //add code to be comitted to asylum, can be used by any
        //add code to be added to jail, to be used by any
        //add code to forced work as maid, to be used by any
        //MERGE ALL ABOVE INTO ONE, JUST ADD A SPECIAL CUSTOM CHOSEN WORD NEEDD IN ORDER TO USE that's auto generated adn whsipered to palyer at command

        //add improvestruddle code


        //-make a mid sentence gag talk, rather than looking for double whitespace
        //add game room scripts
        //fix highlights
        //make a group whisper chatREQUIRES JUST "SERVERSEND WHISPER? NO OTHER WAY
        //add auto NPC grab code
        //add code to remove safeties like validation
        //rewrite code to change name and add
        //change whisper code to not just set target but rather /whipser name texthere
        //join room, create room code, from within a room. Seems unecessary since /search code can already accomplish.
        //make safeword total for non hardcore/extrene. Seems unecessary, real asfeword already exist.
        else { //check which speech mode should be used
            if (this.BabyTalkOn == true) {
                content = SpeechBabyTalk({
                    Effect: ["RegressedTalk"]
                }, content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                         
                ElementValue("InputChat", "");
            } if (this.GagTalkOn == true) {
                content = SpeechGarbleByGagLevel(gl, content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                      		
                ElementValue("InputChat", "");
            } if (this.Stutter1On == true) {
                content = StutterTalk1(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                     
                ElementValue("InputChat", "");		    		    
            } if (this.Stutter2On == true) {
                content = StutterTalk2(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                     
                ElementValue("InputChat", "");
            } if (this.Stutter3On == true) {
		content = StutterTalk3(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                         
                ElementValue("InputChat", "");
            } if (this.Stutter4On == true) {
                content = StutterTalk4(content);
		if (ChatRoomTargetMemberNumber == null) {
                    ServerSend("ChatRoomChat", {
                        "Content": content,
                        "Type": "Chat"
                    }); 
                } else {
                    ServerSend("ChatRoomChat", { 
                        "Content": content, 
                        "Type": "Whisper", 
                        "Target": ChatRoomTargetMemberNumber
                    });
                    for (let C = 0; C < ChatRoomCharacter.length; C++)
                        if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber) {
		            TargetName = ChatRoomCharacter[C].Name;
		            break;
	                }
	            ChatRoomMessage({ 
                        Content: "Whisper to "+TargetName+": "+ content, 
                        Type: "LocalMessage", 
                        Sender: Player.MemberNumber 
                    });
		    document.querySelector('#TextAreaChatLog').lastChild.style.fontStyle = "italic";	
		    document.querySelector('#TextAreaChatLog').lastChild.style.color = "silver";
                }                      
                ElementValue("InputChat", "");    
            } else {
                OLDmenu()
            }
        }
        ElementValue("InputChat", "");
    }
}
//if modified code above is not called, use original.
var OLDmenu = ChatRoomSendChat;
var ChatRoomSendChat = NEWmenu;

//below is additional stuff

//greeting message.
ChatCommandGreeting = function(data) {
    if (CurrentScreen == "ChatRoom" && data.Content == "ServerEnter") {
	Player.RestrictionSettings.BypassNPCPunishments = true;
	ChatRoomSendLocal(
                    "<p style='background-color:#5fbd7a'>Quick-AccessMenu2 - version 1.9.1: Ready, type <b>/help</b> for general menu.\n" +
		    "Note: NPC punishments are disabled.\n" +
                    "Use <b>/help new</b> to get info about changes in current QAM version.\n" +
		    "Use <b>/clubhelp</b> to get the standard BC menu (+ FBC menu when enabled).\n" +
		    "Visit also our <a href='https://github.com/tetris245/tetris245/wiki' target='_blank'>Wiki</a>\n" +
                    "For any inquiries, join <a href='https://discord.gg/JUvYfSpCmN' target='_blank'>https://discord.gg/JUvYfSpCmN</a></p>"
                );   	    	  	    	    
        ServerSocket.off('ChatRoomMessage', ChatCommandGreeting)
    }
}
setTimeout(function() {
    ServerSocket.on('ChatRoomMessage', ChatCommandGreeting);
}, 5000);

//AutoRelog/AntiDisconnect
function LoginDoLogin() { //rewrite login to variabilize credentials for later use
    if (!LoginSubmitted && ServerIsConnected) {
        this.LoginName = ElementValue("InputName");
        this.LoginPassword = ElementValue("InputPassword");
        var letters = /^[a-zA-Z0-9]+$/;
        if (LoginName.match(letters) && LoginPassword.match(letters) && (LoginName.length > 0) && (LoginName.length <= 20) && (LoginPassword.length > 0) && (LoginPassword.length <= 20)) {
            LoginSetSubmitted();
            ServerSend("AccountLogin", {
                AccountName: LoginName,
                Password: LoginPassword
            });
        } else LoginStatusReset("InvalidNamePassword");
    }
    LoginUpdateMessage();
}

function ServerDisconnect(data, close = false) { //rewrite disconnect to prevent relog screen
    if (!ServerIsConnected) return;
    ChatRoomSendLocal(
        "<p style='background-color:#5fbd7a'>Disconnected! Reconnecting...</p>"
    );
    const ShouldRelog = Player.Name != "";
    AutoRelog();
    let msg = data;
    if (data) {
        console.warn(data);
        msg = data;
    }
    ServerSetConnected(false, msg);
    if (close) {
        ServerSocket.disconnect();
    }
}

function AutoRelog() {
    if (ServerPlayerIsInChatRoom()) {
        RelogChatLog = document.getElementById("TextAreaChatLog").cloneNode(true);
        RelogChatLog.id = "RelogChatLog";
        RelogChatLog.name = "RelogChatLog";
        RelogInputText = ElementValue("InputChat").trim();
        ElementRemove("InputChat");
        ElementRemove("TextAreaChatLog");
        CurrentScreen = "ChatSearch";
        CurrentModule = "Online";
        CurrentCharacter = null;
    } else {
        RelogChatLog = null;
        RelogInputText = "";
    }
    RelogData = {
        Screen: CurrentScreen,
        Module: CurrentModule,
        Character: CurrentCharacter
    };
    CurrentCharacter = null;
    ServerSend("AccountLogin", {
        AccountName: LoginName,
        Password: LoginPassword
    });
}

//Other functions

function gagSpeak() {
     OldSpeechGarble = SpeechGarble;
     SpeechGarble = function(C,CD,NoDeaf){
         origin = CD;
         out  = OldSpeechGarble(C,CD,NoDeaf)
         var GagEffect = 0;
         GagEffect += SpeechGetGagLevel(C, "ItemEars");
         GagEffect += SpeechGetGagLevel(C, "ItemMouth");
         GagEffect += SpeechGetGagLevel(C, "ItemMouth2");
         GagEffect += SpeechGetGagLevel(C, "ItemMouth3");
         GagEffect += SpeechGetGagLevel(C, "ItemHead");
         GagEffect += SpeechGetGagLevel(C, "ItemHood");
         GagEffect += SpeechGetGagLevel(C, "ItemNeck");
         GagEffect += SpeechGetGagLevel(C, "ItemDevices");
         if((GagEffect>0 || Player.GetDeafLevel()>0) && origin.charAt(0)!='('){
              out = out+' ('+ origin + ')';
         } 
         return out;
    }
    NewSpeechGarble = SpeechGarble;
}

function GetBlindLevel0 () {
    let blindLevel = 0;
    return blindLevel;
}

function GetBlindLevel1 () {
    let blindLevel = 1;
    return blindLevel;
}

function GetBlindLevel2 () {
    let blindLevel = 2;
    return blindLevel;
}

function GetBlindLevel3 () {
    let blindLevel = 3;
    return blindLevel;
}

function GetBlurLevel0 () {
    let blurLevel = 0;
    return blurLevel;
}

function GetBlurLevel1 () {
    let blurLevel = 3;
    return blurLevel;
}

function GetBlurLevel2 () {
    let blurLevel = 8;
    return blurLevel;
}

function GetBlurLevel3 () {
    let blurLevel = 20;
    return blurLevel;
}

function GetBlurLevel4 () {
    let blurLevel = 50;
    return blurLevel;
}

function GetDeafLevel0 () {
    let deafLevel = 0;
    return deafLevel;
}

function GetDeafLevel1 () {
    let deafLevel = 1;
    return deafLevel;
}

function GetDeafLevel2 () {
    let deafLevel = 2;
    return deafLevel;
}

function GetDeafLevel3 () {
    let deafLevel = 3;
    return deafLevel;
}

function GetDeafLevel4 () {
    let deafLevel = 4;
    return deafLevel;
}

function StutterTalk1(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 2;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function StutterTalk2(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 4;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function StutterTalk3(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 6;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function StutterTalk4(CD) {
	if (CD == null) CD = "";
	var Par = false;
	var CS = 1;
	var Seed = CD.length;
	for (let L = 0; L < CD.length; L++) {
	    var H = CD.charAt(L).toLowerCase();
	    if (H == "(") Par = true;
	    if (!Par && CS >= 0 && (H.match(/[[a-z?-??]/i))) {
	        var R = Math.sin(Seed++) * 10000;
		   R = R - Math.floor(R);
		   R = Math.floor(R * 10) + 8;
		   if (CS == 1 || R >= 10) {
		       CD = CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
			  L += 2;
		   }
		   CS = -1;
	     }
		if (H == " ") CS = 0;
		}
	return CD;
}

function updateBackground() {
    var UpdatedRoom = {
        Name: ChatRoomData.Name,
        Description: ChatRoomData.Description,
        Language: ChatRoomData.Language,
        Background: ChatCreateBackgroundSelect,
        Limit: "" + ChatRoomData.Limit,
        Admin: ChatRoomData.Admin,
        Ban: ChatRoomData.Ban,
        BlockCategory: ChatRoomData.BlockCategory,
        Game: ChatRoomData.Game,
        Private: ChatRoomData.Private,
        Locked: ChatRoomData.Locked,
    };
    ServerSend("ChatRoomAdmin", {
        MemberNumber: Player.ID,
        Room: UpdatedRoom,
        Action: "Update",
    });
}

//Mouth animator
var expressionAnimation;
var expressionAnimationIndex = 0;

function RunExpressionAnimationStep() {
    CharacterSetFacialExpression(Player, "Mouth", expressionAnimation[expressionAnimationIndex++]);
    if (expressionAnimationIndex < expressionAnimation.length) {
        setTimeout(RunExpressionAnimationStep, 1000);
    } else {
        expressionAnimation = null;
    }
}

function RunExpressionAnimation(list) {
    if (expressionAnimation) {
        return;
    }
    expressionAnimation = list;
    expressionAnimationIndex = 0;
    expressionAnimationEx = InventoryGet(Player, "Mouth");
    if (expressionAnimationEx && expressionAnimationEx.Property && expressionAnimationEx.Property.Expression) {
        expressionAnimation[expressionAnimation.length - 1] = expressionAnimationEx.Property.Expression; //set last to current
    }
    RunExpressionAnimationStep();
}
//core functionaliy moved to: /speak /mouth /speech


//Moaner
//ChatRoom
/*var backupChatRoomSendChat;
var backupActivityOrgasmPrepare;
var backupActivityOrgasmStart;
var backupChatRoomMessage;
var backupChatRoomFirstTimeHelp;*/

var M_MOANER_scriptOn = true;
let backupChatRoomMessage = ChatRoomMessage;

function M_MOANER_MoanerInitAlteredFns() {
    //gemissements quand on parle
    M_MOANER_initChatRoomSendChatOverride();
    //initActivityOrgasmPrepareOverride();
    M_MOANER_initActivityOrgasmStart();
    //gemissements quand on recoit une stimulation
    M_MOANER_initChatRoomMessageOverride();
    //message d'aide
    M_MOANER_initChatRoomFirstTimeHelpOverride();
}

function M_MOANER_initChatRoomFirstTimeHelpOverride() {
    let backupChatRoomFirstTimeHelp = ChatRoomFirstTimeHelp;
    ChatRoomFirstTimeHelp = () => {
        firstHelp();
        backupChatRoomFirstTimeHelp();
    }
}

var M_MOANER_tempChatRoomData;

function M_MOANER_initChatRoomMessageOverride() {
    M_MOANER_logDebug("Entree initChatRoomOverride pour ChatRoomMessage");
    let backupChatRoomMessage = ChatRoomMessage;
    ChatRoomMessage = (data) => {
        if (M_MOANER_scriptOn && window.CurrentScreen == "ChatRoom") {
            M_MOANER_tempChatRoomData = data;
            if (data != null && data.Content != undefined && data.Content != null) {
                M_MOANER_logDebug("lancerM_MOANER_reactionTrigger");
                M_MOANER_reactionTrigger(data);
            }
        }
        backupChatRoomMessage(data);
    };
}

function M_MOANER_initChatRoomSendChatOverride() {
    M_MOANER_logDebug("Entree M_MOANER_MoanerInitAlteredFns pour ChatRoomSendChat");
    let backupChatRoomSendChat = ChatRoomSendChat;
    ChatRoomSendChat = (...rest) => {

        let msg = ElementValue("InputChat").trim();
        if (M_MOANER_scriptOn && M_MOANER_isSimpleChat(msg)) {
            msg = M_MOANER_reactionExcitation(Player, msg);
            ElementValue("InputChat", msg);
        }
        M_MOANER_logDebug("msg=" + msg);
        backupChatRoomSendChat(...rest);
        M_MOANER_logDebug("Sortie ChatRoomSendChat");
    };
}

function M_MOANER_initActivityOrgasmStart() {
    let backupActivityOrgasmStart = ActivityOrgasmStart;
    ActivityOrgasmStart = (C) => {
        if (M_MOANER_scriptOn) {
            M_MOANER_reactionOrgasm(C);
        }
        backupActivityOrgasmStart(C);
    };
}

function M_MOANER_isCommande(msg) {
    return msg.startsWith("/") && ChatRoomTargetMemberNumber == null;
}

function M_MOANER_isSimpleChat(msg) {
    return msg.trim().length > 0 && !msg.startsWith("/") && !msg.startsWith("(") && !msg.startsWith("*") && ChatRoomTargetMemberNumber == null;
}

function M_MOANER_isInChatRoom() {
    return window.CurrentScreen == "ChatRoom";
}

//MoanerCommands
//commande:
//@moaner feature commande
//feature: talk (quand on parle), orgasm, startVibrator, spank
//commande On, OFF

var M_MOANER_moanerKey = "bc_moaner_";

//features
var M_MOANER_talkActive = true;
var M_MOANER_orgasmActive = true;
var M_MOANER_vibratorActive = true;
var M_MOANER_spankActive = true;
var M_MOANER_verboseActive = true;
var M_MOANER_firstHelpSeen = false;

var M_MOANER_scriptStatus = ["The moaner is active.", "The moaner is not active."];
var M_MOANER_orgasmStatus = ["The orgasm moan is active. You will moan while cumming.", "The orgasm moan is not active. You will not moan while cumming anymore."];
var M_MOANER_vibratorStatus = ["The vibes moan is active. If your vibrator's setting changes, you will moan.", "The vibes moan is not active. If your vibrator's setting changes, you will not moan."];
var M_MOANER_spankStatus = ["The spank moan is active. You will moan while being spanked.", "The spank moan is not active. You will not moan while being spanked."];
var M_MOANER_talkStatus = ["The talk moan is active. If you're vibed, you will moan while speaking.", "The talk moan is not active. If you're vibed, you will not moan while speaking anymore."];
var M_MOANER_verboseStatus = ["Moaner is verbose.", "Moaner is not verbose."];
var M_MOANER_profileStatus = ["No custom profile loaded.", "Current moans profile: "];
var M_MOANER_profileListM_MOANER_intro = "Available moaning profiles: ";

var M_MOANER_intro = "Myrhanda Moaner installed. Type /moaner for more info, /moaner status for current status.";

function M_MOANER_initControls() {
    var datas = JSON.parse(localStorage.getItem(M_MOANER_moanerKey + "_" + Player.MemberNumber));

    if (datas == null || datas == undefined) {
        M_MOANER_talkActive = true;
        M_MOANER_orgasmActive = true;
        M_MOANER_vibratorActive = true;
        M_MOANER_spankActive = true;
        M_MOANER_scriptOn = false;
        profileName = "default";
        //M_MOANER_saveControls();
    } else {
        M_MOANER_talkActive = datas.talkMoan;
        M_MOANER_orgasmActive = datas.orgasmMoan;
        M_MOANER_vibratorActive = datas.vibeMoan;
        M_MOANER_spankActive = datas.spankMoan;
        M_MOANER_scriptOn = datas.script;
        profileName = datas.moanProfile;
    }
}

function M_MOANER_saveControls() {
    var controls = {
        "talkMoan": M_MOANER_talkActive,
        "orgasmMoan": M_MOANER_orgasmActive,
        "vibeMoan": M_MOANER_vibratorActive,
        "spankMoan": M_MOANER_spankActive,
        "script": M_MOANER_scriptOn,
        "moanProfile": profileName
    };
    localStorage.setItem(M_MOANER_moanerKey + "_" + Player.MemberNumber, JSON.stringify(controls));
}

function M_MOANER_deleteControls() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith(M_MOANER_moanerKey) && key.endsWith(Player.MemberNumber)) {
            localStorage.removeItem(key);
        }
    }
}

//controle sur le script entier
function scriptControl(commande) {
    if (commande == "on") {
        M_MOANER_scriptOn = true;
    } else if (commande == "off") {
        M_MOANER_scriptOn = false;
    }
    showM_MOANER_scriptStatus();
}

//controle sur le mode verbose
function verboseControl(commande) {
    if (commande == "on") {
        M_MOANER_verboseActive = true;
    } else if (commande == "off") {
        M_MOANER_verboseActive = false;
    }
    showM_MOANER_verboseStatus();
}

//controle sur les gÃƒÂ©missements quand on parle
function talkControl(commande) {
    if (commande == "on") {
        M_MOANER_talkActive = true;
    } else if (commande == "off") {
        M_MOANER_talkActive = false;
    }
    showM_MOANER_talkStatus();
}

//controle sur les gÃƒÂ©missements ÃƒÂ  l'orgasme
function orgasmControl(commande) {
    if (commande == "on") {
        M_MOANER_orgasmActive = true;
    } else if (commande == "off") {
        M_MOANER_orgasmActive = false;
    }
    showM_MOANER_orgasmStatus();
}

//controle sur les gÃƒÂ©missements au lancement d'un vibrateur
function vibeControl(commande) {
    if (commande == "on") {
        M_MOANER_vibratorActive = true;
    } else if (commande == "off") {
        M_MOANER_vibratorActive = false;
    }
    showM_MOANER_vibratorStatus();
}

//controle sur les gÃƒÂ©missements ÃƒÂ  la fessÃƒÂ©e
function spankControl(commande) {
    if (commande == "on") {
        M_MOANER_spankActive = true;
    } else if (commande == "off") {
        M_MOANER_spankActive = false;
    }
    showM_MOANER_spankStatus();
}

function firstHelp() {
    //console.log("ChatRoomHelpSeen="+ChatRoomHelpSeen);
    if (!M_MOANER_firstHelpSeen) {
        M_MOANER_firstHelpSeen = true;
        console.log("firstHelp! " + ChatRoomHelpSeen);
        M_MOANER_sendMessageToWearer(M_MOANER_intro);
    }
}

function profilesList() {
    let liste = M_MOANER_getKeys(M_MOANER_moansProfiles);
    let msg = M_MOANER_profileListM_MOANER_intro + liste;
    M_MOANER_sendMessageToWearer(msg);
}

//Status
function showStatus() {
    showM_MOANER_scriptStatus();
    showM_MOANER_profileStatus();
    showM_MOANER_talkStatus();
    showM_MOANER_orgasmStatus();
    showM_MOANER_vibratorStatus();
    showM_MOANER_spankStatus();
    showM_MOANER_verboseStatus();
}

function showM_MOANER_profileStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (profileName == "default") {
        msg = M_MOANER_profileStatus[0];
    } else {
        msg = M_MOANER_profileStatus[1] + profileName;
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_verboseStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_scriptOn) {
        msg = M_MOANER_verboseStatus[0];
    } else {
        msg = M_MOANER_verboseStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_scriptStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_scriptOn) {
        msg = M_MOANER_scriptStatus[0];
    } else {
        msg = M_MOANER_scriptStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_talkStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_talkActive) {
        msg = M_MOANER_talkStatus[0];
    } else {
        msg = M_MOANER_talkStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_orgasmStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_orgasmActive) {
        msg = M_MOANER_orgasmStatus[0];
    } else {
        msg = M_MOANER_orgasmStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_vibratorStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_vibratorActive) {
        msg = M_MOANER_vibratorStatus[0];
    } else {
        msg = M_MOANER_vibratorStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

function showM_MOANER_spankStatus() {
    if (!M_MOANER_verboseActive) {
        return;
    }
    let msg;
    if (M_MOANER_spankActive) {
        msg = M_MOANER_spankStatus[0];
    } else {
        msg = M_MOANER_spankStatus[1];
    }
    M_MOANER_sendMessageToWearer(msg);
}

//MoanerUtils

function M_MOANER_logDebug(msg) {}

function startDebug() {
    M_MOANER_logDebug = (msg) => {
        console.log("DEBUG: " + msg);
    };
}

function stopDebug() {
    M_MOANER_logDebug = (msg) => {
        console.log("DEBUG: " + msg);
    };
}

let MoanerIsLoaded;

MoanerLoginListener();

async function MoanerLoginListener() {
    while (!MoanerIsLoaded) {
        try {
            while ((!window.CurrentScreen || window.CurrentScreen == "Login" || (typeof window.CursedStarter === "function" && window.cursedConfig === undefined)) && !MoanerIsLoaded) {
                //console.log("cherche isLoaded");
                //console.log("window.CurrentScreen="+window.CurrentScreen);
                await new Promise(r => setTimeout(r, 2000));
            }
            //console.log("window.CurrentScreen="+window.CurrentScreen);
            //console.log("MoanerIsLoaded trouvÃƒÂ©");
            MoanerIsLoaded = true;
            M_MOANER_MoanerInitAlteredFns();
            M_MOANER_initControls();

        } catch (err) {
            console.log(err);
        }
        await new Promise(r => setTimeout(r, 2000));
    }
}

function M_MOANER_getKeys(obj) {
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
}

function M_MOANER_shuffle(array, seed) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to M_MOANER_shuffle...
    while (0 !== currentIndex) {
        seed = M_MOANER_getRandomNumber(seed);

        // Pick a remaining element...
        randomIndex = seed % (array.length - 1);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function M_MOANER_sendMessageToWearer(msg) {
    ServerSend("ChatRoomChat", {
        Type: "Action",
        Content: "gag",
        Target: Player.MemberNumber,
        Dictionary: [{
            Tag: "gag",
            Text: msg
        }],
    });
}

function M_MOANER_getRandomNumber(seed) {
    let number = Math.floor(Math.abs(Math.sin(seed) * 1000));
    return number;
}

//MoanerManagement

/*const baseM_MOANER_factor4Moans=["n... Nyah\u2665","Oooh","mmmmmh!","NYyaaA\u2665"];
const baseM_MOANER_factor3Moans=["mm","aaaah","nyAh\u2665"];
const baseM_MOANER_factor2Moans=["nyah\u2665","Aah!","mh","oh!\u2665","mh\u2665"];
const basefactor1Moans=["mh","\u2665oh\u2665","ah","...\u2665"];
const baseM_MOANER_orgasmMoans=["Nya...Ny...NyaaAAaah!","Mmmmh... MMmh... Hhhmmmm...","Oooooh... Mmmmh... OooOOOOh!","Mmmhnn... Nyhmm... Nyah!"];
const basePainMoans=["Aie!","Aoouch!","Eek","ouch","Aow"];*/

var M_MOANER_profileName = "default";

M_MOANER_defaultMoans = {
    "hot": ["n... Nyah\u2665", "Oooh", "mmmmmh!", "NYyaaA\u2665"],
    "medium": ["mm", "aaaah", "nyAh\u2665"],
    "light": ["nyah\u2665", "Aah!", "mh", "oh!\u2665", "mh\u2665"],
    "low": ["mh", "\u2665oh\u2665", "ah", "...\u2665"],
    "orgasm": ["Nya...Ny...NyaaAAaah!", "Mmmmh... MMmh... Hhhmmmm...", "Oooooh... Mmmmh... OooOOOOh!", "Mmmhnn... Nyhmm... Nyah!"],
    "pain": ["Aie!", "Aoouch!", "Aaaaie!", "Ouch", "Aow"]
}

M_MOANER_customMoans = {
    "hot": [],
    "medium": [],
    "light": [],
    "low": [],
    "orgasm": [],
    "pain": []
}

var M_MOANER_moansProfiles = [];

function M_MOANER_activerProfile(name) {
    if (M_MOANER_moansProfiles[name] == undefined) {
        profileName = "default";
        resetMoans(Math.random() * 300);
    } else {
        profileName = name;
        resetMoans(Math.random() * 300);
    }
}

function M_MOANER_getMoans(name) {
    var pleasureMoans = M_MOANER_moansProfiles[name];
    if (pleasureMoans == undefined) {
        pleasureMoans = M_MOANER_defaultMoans;
    }
    return pleasureMoans;
}

function M_MOANER_addMoansProfile(name, pleasure) {
    if (pleasure.hot == undefined || pleasure.hot.length == 0) {
        pleasure.hot = M_MOANER_defaultMoans.hot;
    }
    if (pleasure.medium == undefined || pleasure.medium.length == 0) {
        pleasure.medium = M_MOANER_defaultMoans.medium;
    }
    if (pleasure.light == undefined || pleasure.light.length == 0) {
        pleasure.light = M_MOANER_defaultMoans.light;
    }
    if (pleasure.low == undefined || pleasure.low.length == 0) {
        pleasure.low = M_MOANER_defaultMoans.low;
    }
    if (pleasure.orgasm == undefined || pleasure.orgasm.length == 0) {
        pleasure.orgasm = M_MOANER_defaultMoans.orgasm;
    }
    if (pleasure.pain == undefined || pleasure.pain.length == 0) {
        pleasure.pain = M_MOANER_defaultMoans.pain;
    }
    M_MOANER_moansProfiles[name] = pleasure;
}

function addLowMoans(name, pleasureList) {
    var profile = M_MOANER_moansProfiles[name];
    if (profile == undefined) {
        profiledefaultPleasureMoans;
    }
    profile.low = pleasureList;
    addMoansProfile(name, profile);
}

M_MOANER_addMoansProfile("default", M_MOANER_defaultMoans);

//MoanerReactions

var M_MOANER_orgasmMoans = [];

var M_MOANER_factor4Moans = [];
var M_MOANER_factor3Moans = [];
var M_MOANER_factor2Moans = [];
var factor1Moans = [];
var PROPORTION_MAX = 40;

/******************************************************************/
//rÃƒÂ©agir au chat
/******************************************************************/
function M_MOANER_reactionExcitation(C, CD) {

    if (M_MOANER_talkActive && IsStimulated(C)) {

        // Validate nulls
        if (CD == null) CD = "";

        // Validates that the preferences allow stuttering
        /*if ((C.ArousalSettings == null) || (C.ArousalSettings.AffectStutter == null) || (C.ArousalSettings.AffectStutter != "None")) {
        	return M_MOANER_applyMoanToMsg(C,CD);
        }*/
        return M_MOANER_applyMoanToMsg(C, CD);
    }

    // No stutter effect, we return the regular text
    return CD;
}

function M_MOANER_reactionOrgasm(C) {
    if (M_MOANER_orgasmActive && M_MOANER_scriptOn && C.MemberNumber == Player.MemberNumber && window.CurrentScreen == "ChatRoom") {
        if (C.ID == 0 && C.MemberNumber == Player.MemberNumber) {
            var moan;
            var backupChatRoomTargetMemberNumber = null;
            //doit pas se lancer en prive
            //doit pas se lancer en /me
            //doit se lancer uniquement en chat simple
            msg = ElementValue("InputChat");
            if (M_MOANER_isSimpleChat(msg)) {

                moan = msg + "... " + getOrgasmMoan();

                ElementValue("InputChat", moan);
                msg = "";
                ChatRoomSendChat();
            } else {
                backupChatRoomTargetMemberNumber = ChatRoomTargetMemberNumber;
                ChatRoomTargetMemberNumber = null;
                moan = "... " + getOrgasmMoan();
                ElementValue("InputChat", moan);
                ChatRoomSendChat();
                ChatRoomTargetMemberNumber = backupChatRoomTargetMemberNumber;
                ElementValue("InputChat", msg);
            }
        }
    }
}

function M_MOANER_reactionTrigger(data) {
    if (M_MOANER_isPlayerTarget(data)) {
        var msg = ElementValue("InputChat");
        if (M_MOANER_isSimpleChat(msg)) {
            M_MOANER_reactionVibeWithChat(data);
            M_MOANER_reactionSpankWithChat(data);
        } else {
            M_MOANER_reactionSpankWithoutChat(data);
            M_MOANER_reactionVibeWithoutChat(data);
        }
    }
}

function M_MOANER_reactionSpankWithChat(data) {
    if (M_MOANER_spankActive && M_MOANER_isSpank(data)) {
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getSpankMoan(Factor, Math.random() * 300);
        var msg = ElementValue("InputChat");
        if (msg != "") {
            moan = msg + "... " + moan;
        }
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
    }
}

function M_MOANER_reactionSpankWithoutChat(data) {
    if (M_MOANER_spankActive && M_MOANER_isSpank(data)) {
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getSpankMoan(Factor, Math.random() * 300);
        var msg = ElementValue("InputChat");
        let backtarget = ChatRoomTargetMemberNumber;
        ChatRoomTargetMemberNumber = null;
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
        ElementValue("InputChat", msg);
        ChatRoomTargetMemberNumber = backtarget;
    }
}

function M_MOANER_reactionVibeWithoutChat(data) {
    if (M_MOANER_vibratorActive && M_MOANER_isVibes(data)) {
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getMoan(Factor, true, Math.random() * 300);
        var msg = ElementValue("InputChat");
        let backtarget = ChatRoomTargetMemberNumber;
        ChatRoomTargetMemberNumber = null;
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
        ElementValue("InputChat", msg);
        ChatRoomTargetMemberNumber = backtarget;
    }
}

function M_MOANER_reactionVibeWithChat(data) {
    if (M_MOANER_vibratorActive && M_MOANER_isVibes(data)) {
        //rÃƒÂ©cupÃƒÂ©rer le gÃƒÂ©missement ÃƒÂ  appliquer
        //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
        var Factor = Math.floor(Player.ArousalSettings.Progress / 20);
        var moan = getMoan(Factor, true, Math.random() * 300);
        var msg = ElementValue("InputChat");
        console.log("msg=" + msg);
        if (msg != "") {
            moan = msg + "... " + moan;
        }
        ElementValue("InputChat", moan);
        ChatRoomSendChat();
    }
}

function M_MOANER_isSpank(data) {
    var array = data.Dictionary;
    if (data.Content == "ActionActivitySpankItem") {
        return true;
    }
    for (index in array) {
        let elem = array[index];
        if (elem.Tag == "ActivityName") {
            if (elem.Text == "Spank" || elem.Text == "Slap") {
                return true;
            }
        }
    }
    return false;
}

function M_MOANER_isVibes(data) {
    if (data.Type == "Action" && data.Content.includes("Vibe")) {
        return true;
    }
    return false;
}

function M_MOANER_isPlayerTarget(data) {
    var array = data.Dictionary;
    for (index in array) {
        let elem = array[index];
        if ((elem.Tag == "DestinationCharacter" || elem.Tag == "TargetCharacter" || elem.Tag == "DestinationCharacterName") && elem.MemberNumber == Player.MemberNumber) {
            return true;
        }
    }
    return false;
}

function M_MOANER_applyMoanToMsg(C, CD) {
    //dÃƒÂ©terminer le nombre de gÃƒÂ©missements
    //calculer ÃƒÂ§a en fonction du nombre de mots
    //proportion: PROPORTION_MAX*niveauExcitation
    //PROPORTION_MAX=40%
    var proportion = C.ArousalSettings.Progress * PROPORTION_MAX / 10000;
    M_MOANER_logDebug("proportion: " + proportion);
    var CDList = CD.split(" ");

    var currentIndex = 0;
    var stop = false;
    var finalTextList = [];

    //rÃƒÂ©cupÃƒÂ©rer les gÃƒÂ©missements ÃƒÂ  appliquer
    //datas pour gÃƒÂ©nÃƒÂ©ration des gÃƒÂ©missements
    var Factor = Math.floor(C.ArousalSettings.Progress / 20);
    while (currentIndex < CDList.length) {
        //si le prochain mot contient une parenthÃƒÂ¨se, on arrÃƒÂ¨te la rÃƒÂ©partission des gÃƒÂ©missements)
        var currentWord = CDList[currentIndex++];
        var presenceParenthese = M_MOANER_detectParentheses(currentWord);
        if (presenceParenthese == 1) {
            stop = true;
        }
        if (stop) {
            finalTextList.push(currentWord);
        } else {
            let random = Math.ceil(Math.random() * 100)
            let result;
            if (random <= proportion * 100) {
                if (random % 2 == 0) {
                    result = currentWord + "..." + getMoan(Factor, true, CD.length);
                } else {
                    result = getMoan(Factor, true, CD.length) + " " + currentWord;
                }
                finalTextList.push(result);
            } else {
                finalTextList.push(currentWord);
            }
        }
        if (presenceParenthese == 2) {
            stop = false;
        }
    }
    return finalTextList.join(" ");
}

//return 1 if opening bracket, 2 of closing bracket, 0 otherwise
function M_MOANER_detectParentheses(CD) {
    if (!CD.includes("(") && !CD.includes(")")) {
        return 0;
    }
    for (i = CD.length; i >= 0; i--) {
        if (CD.charAt(i) == ")") {
            return 2;
        }
        if (CD.charAt(i) == "(") {
            return 1;
        }
    }
    return 0;
}

function transformText(isStimulated, L, ArouseFactor, CD) {
    if (isStimulated) {
        return CD.substring(0, L) + CD.charAt(L) + getMoan(ArouseFactor, isStimulated) + CD.substring(L, CD.length);
    } else {
        return CD.substring(0, L) + CD.charAt(L) + "-" + CD.substring(L, CD.length);
    }
}

function getMoan(Factor, isStimulated, seed) {
    //M_MOANER_logDebug("getMoan: factor="+Factor);
    //M_MOANER_logDebug("getMoan: isStimulated="+isStimulated);
    if (!isStimulated) return "";
    //sÃƒÂ©lectionner un gÃƒÂ©missement
    return " " + selectMoan(Factor, seed);
}

function getSpankMoan(Factor, seed) {
    let gemissement;
    //selon le niveau de fetichisme fessÃƒÂ©e
    let activity = getActivityTaste("Spank");
    if (activity == undefined) return "";
    let activityTaste = activity.Self;

    let seuilDouleur = Math.min(10, (4 - activityTaste) * 25);
    let seuilPlaisir = seuilDouleur + 40
    let douleur = Player.ArousalSettings.Progress <= seuilDouleur;
    let plaisir = Player.ArousalSettings.Progress > seuilPlaisir;
    if (douleur) {
        gemissement = getPainMoan();
    } else if (plaisir) {
        gemissement = "\u2665" + getMoan(Factor, true, 300) + "\u2665";
    } else {
        gemissement = getPainMoan() + "\u2665" + getMoan(Factor, true, 300) + "\u2665";
    }
    return gemissement;
}

function getZoneTaste(data) {
    let zone;
    let taste;
    for (index in data.Dictionary) {
        var elem = data.Dictionary[index];
        if (elem.Tag == "ActivityGroup") zone = getZone(elem.Text);
    }
    if (zone == undefined || zone == null || zone.Factor == undefined) {
        return undefined;
    }
    taste = zone.Factor;
    if (zone.Orgasm == true) {
        taste *= 2;
    }
    return taste;
}

function getZone(name) {
    for (index in Player.ArousalSettings.Activity) {
        var zone = Player.ArousalSettings.Zone[index];
        if (zone.Name == name) return zone;
    }
}

function getActivityTaste(name) {
    for (index in Player.ArousalSettings.Activity) {
        var activity = Player.ArousalSettings.Activity[index];
        if (activity.Name == name) return activity;
    }
}

function resetMoans(seed) {
    //M_MOANER_logDebug("resetMoans IN");

    factor1Moans = M_MOANER_shuffle(basefactor1Moans.concat([]), seed);
    M_MOANER_factor2Moans = M_MOANER_shuffle(factor1Moans.concat(baseM_MOANER_factor2Moans), seed);
    M_MOANER_factor3Moans = M_MOANER_shuffle(M_MOANER_factor2Moans.concat(baseM_MOANER_factor3Moans), seed);
    M_MOANER_factor4Moans = M_MOANER_shuffle(M_MOANER_factor3Moans.concat(baseM_MOANER_factor4Moans), seed);
    //M_MOANER_logDebug("resetMoans OUT");
}

function getPainMoanBACK() {
    let index = Math.floor(Math.random() * basePainMoans.length);
    return basePainMoans[index];
}

function resetMoans(seed) {
    //M_MOANER_logDebug("resetMoans IN");
    moanProfile = M_MOANER_getMoans(profileName);
    factor1Moans = M_MOANER_shuffle(moanProfile.low.concat([]), seed);
    M_MOANER_factor2Moans = M_MOANER_shuffle(factor1Moans.concat(moanProfile.light), seed);
    M_MOANER_factor3Moans = M_MOANER_shuffle(M_MOANER_factor2Moans.concat(moanProfile.medium), seed);
    M_MOANER_factor4Moans = M_MOANER_shuffle(M_MOANER_factor3Moans.concat(moanProfile.hot), seed);
    //M_MOANER_logDebug("resetMoans OUT");
}

function getPainMoan() {
    moanProfile = M_MOANER_getMoans(profileName);
    let index = Math.floor(Math.random() * moanProfile.pain.length);
    return moanProfile.pain[index];
}

function getOrgasmMoan() {
    var gemissement;

    if (M_MOANER_orgasmMoans.length == 0) {
        M_MOANER_logDebug("getOrgasmMoan: reset list");
        let seed = 3000;
        M_MOANER_logDebug("getOrgasmMoan: seed=" + seed);
        moanProfile = M_MOANER_getMoans(profileName);
        M_MOANER_orgasmMoans = M_MOANER_shuffle(moanProfile.orgasm.concat([]), seed);
    }
    gemissement = M_MOANER_orgasmMoans.shift();
    return gemissement;
}

function selectMoan(Factor, seed) {
    if (Factor < 2) {
        //M_MOANER_logDebug("factor1Moans.length="+factor1Moans.length);
        if (factor1Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return factor1Moans.shift();
        }
    } else if (Factor < 3) {
        //M_MOANER_logDebug("M_MOANER_factor2Moans.length="+M_MOANER_factor2Moans.length);
        if (M_MOANER_factor2Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return M_MOANER_factor2Moans.shift();
        }
    } else if (Factor < 4) {
        //M_MOANER_logDebug("M_MOANER_factor3Moans.length="+M_MOANER_factor3Moans.length);
        if (M_MOANER_factor3Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return M_MOANER_factor3Moans.shift();
        }
    } else if (Factor >= 4) {
        //M_MOANER_logDebug("M_MOANER_factor4Moans.length="+M_MOANER_factor4Moans.length);
        if (M_MOANER_factor4Moans.length <= 0) {
            resetMoans(seed);
            return selectMoan(Factor, seed);
        } else {
            return M_MOANER_factor4Moans.shift();
        }
    }
}

function IsStimulated(C) {
    if (C.IsEgged() && ((C.ArousalSettings == null) || (C.ArousalSettings.AffectStutter == null) || (C.ArousalSettings.AffectStutter == "Vibration") || (C.ArousalSettings.AffectStutter == "All")))
        for (let A = 0; A < C.Appearance.length; A++) {
            var Item = C.Appearance[A];
            if (InventoryItemHasEffect(Item, "Vibrating", true))
                return true;
        }
    return false;
}

//MoanerProfiles
//dog
M_MOANER_dogMoans = {
    "hot": ["w... Wouuuf\u2665", "aouuh\u2665"],
    "medium": ["waaaf\u2665", "ky\u016b\u016b\n", "..wouf"],
    "light": ["Ouaff\u2665", "Aouh!", "Oua\u2665af", "Ky\u016bn\u2665"],
    "low": ["wou..", "ouah\u2665", "Wouf\u2665", "\u2665ky\u016bn\u2665", "ky\u016b\u2665"],
    "orgasm": ["ouaf\u2665 O... Ouuw... Ouaaaa!!", "Mmmhnn... aaaa... Ouuuaaaaaf!!", "mmmh... Aouuuh.... Aouhhhh!"],
    "pain": ["Ka\u00ef!", "Aoouch!", "Kaaa\u00ef!", "Ouch", "Aow"]
}
M_MOANER_addMoansProfile("dog", M_MOANER_dogMoans);

//fox
//base: wif, yif, aouh
//thanks to Noriko
M_MOANER_foxMoans = {
    "hot": ["w... Wiiif\u2665", "Yiiif\u2665"],
    "medium": ["wiiif\u2665", "Yiii", "..yif"],
    "light": ["Wiff\u2665", "Yif!", "yi\u2665iif", "Wiif"],
    "low": ["wif", "Wy\u2665", "if\u2665", "\u2665yi\u2665", "Yi\u2665"],
    "orgasm": ["Wiff\u2665 W... Wiii... WIIF!!", "Mmmhnn... Wiiif... Yiiiif!!", "mmmh... Aouuuh.... Aouhhhh!"],
    "pain": []
}
M_MOANER_addMoansProfile("fox", M_MOANER_foxMoans);

//mouse
//base coui
M_MOANER_mouseMoans = {
    "hot": ["Scouiiic\u2665", "couiiic\u2665"],
    "medium": ["scouiii\u2665", "Couyk", "..scoui"],
    "light": ["Scouii\u2665", "Coui!", "kouu\u2665ic", "Couic \u2665"],
    "low": ["coui..", "scoui\u2665", "cou\u2665i", "Couic ", "koui\u2665"],
    "orgasm": ["Couic\u2665 sc.. couIIIiic!!", "Mmmhnn... ooo... ouiiiic!!", "mmmh... Scouuu.... Scouiiic!"],
    "pain": []
}
M_MOANER_addMoansProfile("mouse", M_MOANER_mouseMoans);

//neko
M_MOANER_nekoMoans = {
    "hot": ["n... Nyah\u2665", "NYyaaA\u2665"],
    "medium": ["nyAh\u2665", "nyyy", "..yah"],
    "light": ["nyah\u2665", "Yah!", "myuh", "mh\u2665"],
    "low": ["myu", "ny\u2665", "mh", "\u2665yh\u2665", "ny\u2665"],
    "orgasm": ["Nya...Ny...NyaaAAaah!", "Mmmhnn... Nyhmm... Nyah!", "mmmh... mmmeeeee.... meeeoooow!"],
    "pain": []
}
M_MOANER_addMoansProfile("neko", M_MOANER_nekoMoans);

//pig
M_MOANER_pigMoans = {
    "hot": ["Gruiik\u2665", "gruik\u2665"],
    "medium": ["gruiii\u2665", "Gruik", "..Grui.."],
    "light": ["Grui\u2665", "Gruik!", "gruuiii\u2665ic", "gruik \u2665"],
    "low": ["grui.. gruiik\u2665", "gruiik\u2665", "gru\u2665i", "Gruik ", "Groi\u2665"],
    "orgasm": ["Gru\u2665 gr.. gruiIIIiick!!", "Mmmhnn... uii... gruiiik!!", "mmmh... Gruiik.... Gruiiiiik!"],
    "pain": ["Gruuik!!", "Aoouch!", "Awo... gruik!", "Ouch", "Gruiiik"]
}
M_MOANER_addMoansProfile("pig", M_MOANER_pigMoans);

//wildFox
M_MOANER_wildFoxMoans = {
    "hot": ["w... Wiiif\u2665", "Yiiif\u2665", "Wa\u2665ouu"],
    "medium": ["wiiif\u2665", "Yiii", "..yif", "waouuu"],
    "light": ["Wiff\u2665", "Yif!", "yi\u2665iif", "Wiif", "waou"],
    "low": ["wif", "Wy\u2665", "if\u2665", "\u2665yi\u2665", "Yi\u2665", "aou"],
    "orgasm": ["WAAAAOUUUUUUUHHHHH!", "Mmmhnn... Wiiif... Yiiiif!!", "AOUUUUUH!", "WAHOOOOOOOUUUUH!", "WAAAAAAAAHH!", "WAAAAOUUUUUUUHHHHH!", "AOUUUUUH!", "WAHOOOOOOOUUUUH!", "WAAAAAAAAHH!"],
    "pain": []
}
M_MOANER_addMoansProfile("wildFox", M_MOANER_wildFoxMoans);


//BC-Diaper-Wetter
// A simple table for the colors that the script will use.
DiaperUseLevels = [
    ["#808080", "#97916A", "#8B8D41"],
    ["#877C6C", "#7E774E"],
    ["#4C3017"]
];

// Table to store all the defaul values for diaperWetter()
const diaperDefaultValues = {
    messChance: .3,
    wetChance: .5,
    baseTimer: 30,
    regressionLevel: 0,
    desperationLevel: 0,
    messLevelInner: 0,
    wetLevelInner: 0,
    messLevelOuter: 0,
    wetLevelOuter: 0
};

const diaperHelpMessages = {
    default: "Welcome to BCDW: Bondage Club Diaper Wetter! Where we make sure babies use their diapers!\nTo get started, use the ->diaper start to begin using your diaper and ->diaper stop to stop. You can also use ->diaper help <command> to get more information on any given command (for example, arguments!).",
    start: "",
    change: "",
    stop: ""
};

diaperLoop = null; // Keeps a hold of the loop so it can be exited at any time easily

// Destutter speach. Needed for interations with other mods
function destutter(string) {
    // Step over every character in the string
    for (var i = 0; i < string.length - 2; i++) {
        if (string.at(i + 1) === "-" && string.at(i) === string.at(i + 2)) {
            console.log(string.at(i));
            string = string.substring(0, i) + string.substring(i + 2, string.length);
        }
    }
    return string;
}

// Chat handeler
// ServerSocket.on("ChatRoomMessage", bcdw);
function bcdw(data) {
    // First, make sure there's actually something to read
    if (data) {
        // Check to see if a milk bottle is used on the user
        if (
            data.Type === "Action" &&
            data.Content === "ActionUse" &&
            data.Dictionary[1]?.Tag === "DestinationCharacter" &&
            data.Dictionary[1]?.MemberNumber === Player.MemberNumber &&
            data.Dictionary[2]?.AssetName === "MilkBottle"
        ) {
            setDesperation();
        }

        // Starts the script running
        if (
            destutter(data?.Content).startsWith("->diaper") &&
            (data.Type === "Chat" || data.Type === "Whisper")
        ) {
            // Parse out data into a queue for easier processing
            chatCommand = data?.Content.toLowerCase().split(" ");
            chatCommand.shift();

            // Send to command parser
            bcdwCommands(chatCommand.reverse(), data.Sender, data.Type);
        }
    }
}

// Command handler
function bcdwCommands(chatCommand, callerID, type) {
    // Commands only the user can use
    if (callerID === Player.MemberNumber) {
        // Start the script
        if (chatCommand[chatCommand.length - 1] === "start") {
            // Check to see if other arguments have been passed as well (default regression level, desperation, or use levels)
            chatCommand.pop()

            // Parse arguments for command
            let commandArguments = ["wetchance", "messchance", "desperation", "regression", "timer", "wetpanties", "messpanties", "wetchastity", "messchastity"];
            let caughtArguments = diaperDefaultValues;
            while (commandArguments.includes(chatCommand[chatCommand.length - 1])) {
                let tempVal = chatCommand.pop();
                switch (tempVal) {
                    case commandArguments[0]:
                        caughtArguments.initWetChance = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.wetChance : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[1]:
                        caughtArguments.initMessChance = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.messChance : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[2]:
                        caughtArguments.initDesperationLevel = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.desperationLevel : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[3]:
                        caughtArguments.initRegressionLevel = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.regressionLevel : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[4]:
                        caughtArguments.baseTimer = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.baseTimer : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[5]:
                        caughtArguments.initWetLevelInner = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.wetLevelInner : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[6]:
                        caughtArguments.initMessLevelInner = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.messLevelInner : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[7]:
                        caughtArguments.initWetLevelOuter = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.wetLevelOuter : chatCommand[chatCommand.length - 1];
                        break;
                    case commandArguments[8]:
                        caughtArguments.initMessLevelOuter = (isNaN(chatCommand[chatCommand.length - 1])) ? diaperDefaultValues.messLevelOuter : chatCommand[chatCommand.length - 1];
                        break;
                }
                chatCommand.pop();
            }
            diaperWetter(caughtArguments);
        }

        // End the script
        else if (chatCommand[chatCommand.length - 1] === "stop") {
            stopWetting();
        }
    }
    // Chat commands that can be executed by other people
    {
        // Filter to make sure the command is targeted at the user
        if (chatCommand[chatCommand.length - 2] === Player.MemberNumber || type === "Whisper" || callerID === Player.MemberNumber) {
            // Change into a fresh diaper
            if (chatCommand[chatCommand.length - 1] === "change") {
                chatCommand.pop();

                // Get rid of the member number in case that was passed
                if (chatCommand[chatCommand.length - 1] === Player.MemberNumber) {
                    chatCommand.pop();
                }

                // See if you should be changing both or just one of the diaper (and which one, of course)
                if (chatCommand[chatCommand.length - 1] === "panties") {
                    if (!checkForDiaper("panties")) {
                        ServerSend("ChatRoomChat", {
                            Type: "Action",
                            Content: "gag",
                            Dictionary: [{
                                Tag: "gag",
                                Text: Player.Nickname + " doesn't have a diaper there!"
                            }]
                        });
                    } else {
                        refreshDiaper({
                            cdiaper: "panties"
                        });
                    }
                } else if (chatCommand[chatCommand.length - 1] === "chastity") {
                    if (!checkForDiaper === "chastity") {
                        ServerSend("ChatRoomChat", {
                            Type: "Action",
                            Content: "gag",
                            Dictionary: [{
                                Tag: "gag",
                                Text: Player.Nickname + " doesn't have a diaper there!"
                            }]
                        });
                    } else {
                        refreshDiaper({
                            cdiaper: "chastity"
                        });
                    }
                } else {
                    if (!(checkForDiaper("panties") || checkForDiaper("chastity"))) {
                        ServerSend("ChatRoomChat", {
                            Type: "Action",
                            Content: "gag",
                            Dictionary: [{
                                Tag: "gag",
                                Text: Player.Nickname + " doesn't have a diaper! Get one on her before she makes a mess!"
                            }]
                        });
                    } else {
                        refreshDiaper({
                            cdiaper: "both"
                        });
                    }
                }
            }
        }
    }
}

// Initializer function
function diaperWetter({
    initMessChance = diaperDefaultValues.messChance,
    initWetChance = diaperDefaultValues.wetChance,
    baseTimer = diaperDefaultValues.baseTimer,
    initRegressionLevel = diaperDefaultValues.regressionLevel,
    initDesperationLevel = diaperDefaultValues.desperationLevel,
    initMessLevelInner = diaperDefaultValues.messLevelInner,
    initWetLevelInner = diaperDefaultValues.wetLevelInner,
    initMessLevelOuter = diaperDefaultValues.messLevelOuter,
    initWetLevelOuter = diaperDefaultValues.wetLevelOuter
} = {}) {
    // Greating message
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
    ServerSend("ChatRoomChat", {
        Type: "Action",
        Content: "gag",
        Dictionary: [{
            Tag: "gag",
            Text: "Say hello to the little baby " + tmpname + "!"
        }]
    });

    // Initial clear.
    refreshDiaper({
        cdiaper: "both",
        inMessLevelChastity: (initMessLevelOuter < 0 || initMessLevelOuter > 2) ?
            diaperDefaultValues.messLevelOuter : initMessLevelOuter,
        inWetLevelChastity: (initWetLevelOuter < 0 || initWetLevelOuter > 2) ?
            ((initMessLevelOuter < 0 || initMessLevelOuter > 2) ?
                diaperDefaultValues.messLevelOuter :
                inMessLevelOuter
            ) : ((initWetLevelOuter > initMessLevelOuter) ?
                initWetLevelOuter :
                ((initMessLevelOuter < 0 || initMessLevelOuter > 2) ?
                    diaperDefaultValues.messLevelOuter :
                    initMessLevelOuter
                )
            ),
        inMessLevelPanties: (initMessLevelInner < 0 || initMessLevelInner > 2) ?
            diaperDefaultValues.messLevelInner : initMessLevelInner,
        inWetLevelPanties: (initWetLevelInner < 0 || initWetLevelInner > 2) ?
            ((initMessLevelInner < 0 || initMessLevelInner > 2) ?
                diaperDefaultValues.messLevelInner :
                initMessLevelOuter
            ) : ((initWetLevelInner > initMessLevelInner) ?
                initWetLevelInner :
                ((initMessLevelInner < 0 || initMessLevelInner > 2) ?
                    diaperDefaultValues.messLevelInner :
                    initMessLevelInner
                )
            ),
    });
    messChance = initMessChance;
    wetChance = initWetChance;
    diaperTimerBase = baseTimer; // The default amount of time between ticks in minutes
    regressionLevel = initRegressionLevel; // Used for tracking how much the user has regressed (affects the timer)
    desperationLevel = initDesperationLevel; // Used for tracking how recently a milk bottle has been used (affects the timer)


    // Handle modifiers
    var diaperTimerModifier = 1; // We will divide by the modifier (positive modifiers decrease the timer)
    diaperTimerModifier = manageRegression(diaperTimerModifier);
    diaperTimerModifier = manageDesperation(diaperTimerModifier);
    diaperTimer = diaperTimerBase / diaperTimerModifier;

    // Go into main loop
    diaperRunning = true; // Helps with the kill switch
    checkTick();
}

// Changes how long it takes between ticks (in minutes)
function changeDiaperTimer(delay) {
    // Bound the delay to between 2 minutes and 1 hour
    if (delay < 2) {
        delay = 2;
    } else if (delay > 60) {
        delay = 60;
    }
    diaperTimerBase = delay; // Updates diaperTimerBase
}

// Refresh the diaper settings so wet and mess levels are 0. Pass "chastity", "panties", or "both" so only the correct diaper gets reset.
function refreshDiaper({
    cdiaper = "both",
    inWetLevelPanties = diaperDefaultValues.wetLevelInner,
    inMessLevelPanties = diaperDefaultValues.messLevelInner,
    inWetLevelChastity = diaperDefaultValues.wetLevelOuter,
    inMessLevelChastity = diaperDefaultValues.messLevelOuter,
} = {}) {
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
    if (InventoryGet(Player, "Pronouns").Asset.Name == "HeHim")  {
        var tmpr1 = "He";
        var tmpr2 = "him";
        var tmpr3 = "his";
	var tmpr4 = "he";
    } else {
        var tmpr1 = "She";
        var tmpr2 = "her";
        var tmpr3 = "her";
	var tmpr4 = "she";
    }
    DiaperChangeMessages = {
        "ChangeDiaperInner": " has gotten a fresh inner diaper.",
        "ChangeDiaperOuter": " has gotten a fresh outer diaper.",
        "ChangeDiaperOnly": " has gotten a fresh diaper.",
        "ChangeDiaperBoth": " has gotten a fresh pair of diapers."
    };
    if (cdiaper === "both") {
        MessLevelPanties = inMessLevelPanties;
        WetLevelPanties = inWetLevelPanties;
        MessLevelChastity = inMessLevelChastity;
        WetLevelChastity = inWetLevelChastity;
        changeDiaperColor("ItemPelvis");
        changeDiaperColor("Panties");
        if (checkForDiaper("Panties") && checkForDiaper("ItemPelvis")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperChangeMessages["ChangeDiaperBoth"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperChangeMessages["ChangeDiaperOnly"]
                }]
            });
        }
    } else if (cdiaper === "chastity") {
        MessLevelChastity = inMessLevelChastity;
        WetLevelChastity = inWetLevelChastity;
        changeDiaperColor("ItemPelvis");
        if (checkForDiaper("ItemPelvis") && checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperChangeMessages["ChangeDiaperOuter"]
                }]
            });
        } else if (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperChangeMessages["ChangeDiaperOnly"]
                }]
            });
        }
    } else if (cdiaper === "panties") {
        MessLevelPanties = inMessLevelPanties;
        WetLevelPanties = inWetLevelPanties;
        changeDiaperColor("Panties");
        if (checkForDiaper("ItemPelvis") && checkForDiaper("Panties")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperChangeMessages["ChangeDiaperOuter"]
                }]
            });
        } else if (checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperChangeMessages["ChangeDiaperOnly"]
                }]
            });
        }
    }
}

// Check for if a diaper is in the Panties or ItemPelvies slot
function checkForDiaper(slot) {
    return InventoryGet(Player, slot)?.Asset?.Name === "PoofyDiaper" || InventoryGet(Player, slot)?.Asset?.Name === "BulkyDiaper";
}

// Checks to see if the user has a nursery milk equiped
function checkForNurseryMilk() {
    return (InventoryGet(Player, "ItemMouth")?.Asset?.Name === "RegressedMilk") || (InventoryGet(Player, "ItemMouth2")?.Asset?.Name === "RegressedMilk") || (InventoryGet(Player, "ItemMouth3")?.Asset?.Name === "RegressedMilk");
}

// Checks for a normal milk bottle
function checkForMilk() {
    return (InventoryGet(Player, "ItemMouth")?.Asset?.Name === "MilkBottle") || (InventoryGet(Player, "ItemMouth2")?.Asset?.Name === "MilkBottle") || (InventoryGet(Player, "ItemMouth3")?.Asset?.Name === "MilkBottle");
}

// Handles the regression counter
function manageRegression(diaperTimerModifier = 1) {
    if (checkForNurseryMilk() && regressionLevel < 3) {
        regressionLevel++;
    } else if (!checkForNurseryMilk() && regressionLevel > 0) {
        regressionLevel--;
    }

    return diaperTimerModifier * Math.pow(2, regressionLevel);
}

// Sets the users desperationLevel to 3 when they are given a milk bottle
function setDesperation() {
    desperationLevel = 3;
}

// Handles "desperateness" aka how recently a milk bottle was drunk
function manageDesperation(diaperTimerModifier = 1) {
    // If they don't have a milk bottle anymore
    if (!checkForMilk()) {
        // Decrease desperationLevel to a minimum of zero if no milk is found
        desperationLevel = (desperationLevel != 0) ? desperationLevel - 1 : 0;
    }
    return diaperTimerModifier * (desperationLevel + 1);
}

// Updates the color of a diaper
function changeDiaperColor(slot) {
    if (slot === "ItemPelvis" && checkForDiaper(slot)) {
        InventoryWear(
            Player,
            InventoryGet(Player, slot)?.Asset?.Name,
            slot,
            [
                InventoryGet(Player, slot)?.Color[0],
                DiaperUseLevels[MessLevelChastity][WetLevelChastity - MessLevelChastity],
                InventoryGet(Player, slot)?.Color[2],
                InventoryGet(Player, slot)?.Color[3]
            ],
            InventoryGet(Player, slot)?.Difficulty,
            Player.MemberNumber
        );
    } else if (slot === "Panties" && checkForDiaper(slot)) {
        InventoryWear(
            Player,
            InventoryGet(Player, slot)?.Asset?.Name,
            slot,
            [
                InventoryGet(Player, slot)?.Color[0],
                DiaperUseLevels[MessLevelPanties][WetLevelPanties - MessLevelPanties],
                InventoryGet(Player, slot)?.Color[2],
                InventoryGet(Player, slot)?.Color[3]
            ],
            InventoryGet(Player, slot)?.Difficulty,
            Player.MemberNumber
        );
    }
}

// Command to stop the script from running
function stopWetting() {
    console.log("See you next time!");
    diaperRunning = false;
    clearTimeout(diaperLoop);
    checkTick();
}

// Funcky while loop
function checkTick() {
    // Terminate loop if the user isn't wearing a compatible diaper
    if ((checkForDiaper("ItemPelvis") || checkForDiaper("Panties")) && diaperRunning === true) {
        // Wait for a bit
        diaperLoop = setTimeout(checkTick, diaperTimer * 60 * 1000);
        // Go to main logic
        diaperTick();
    } else {
	if (Player.Nickname == '') { 
            var tmpname = Player.Name;
        } else {
            var tmpname = Player.Nickname;
        }
        diaperRunning = false;
        ServerSend("ChatRoomChat", {
            Type: "Action",
            Content: "gag",
            Dictionary: [{
                Tag: "gag",
                Text: "Awww, " + tmpname + " is all grown up!"
            }]
        });
    }
}

// Body function
// If the baby uses their diaper, it will make the front of their diaper look like it's been used
function diaperTick() {
    // Handle modifiers 
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
    if (InventoryGet(Player, "Pronouns").Asset.Name == "HeHim")  {
        var tmpr1 = "He";
        var tmpr2 = "him";
        var tmpr3 = "his";
	var tmpr4 = "he";
    } else {
        var tmpr1 = "She";
        var tmpr2 = "her";
        var tmpr3 = "her";
	var tmpr4 = "she";
    }
    DiaperUseMessages = {
        "MessInner": " has messed " + tmpr3 + " inner diaper.",
        "MessInnerFully": " has fully messed " + tmpr3 + " inner diaper.",
        "WetInner": " has wet " + tmpr3 + " inner diaper.",
        "WetInnerFully": " has fully wet " + tmpr3 + " inner diaper.",
        "MessOuter": " has messed " + tmpr3 + " outer diaper.",
        "MessOuterFully": " has fully messed " + tmpr3 + " outer diaper.",
        "WetOuter": " has wet " + tmpr3 + " outer diaper.",
        "WetOuterFully": " has fully wet " + tmpr3 + " outer diaper.",
        "MessOnly": " has messed " + tmpr3 + " diaper.",
        "MessOnlyFully": " has fully messed " + tmpr3 + " diaper.",
        "WetOnly": " has wet " + tmpr3 + " diaper.",
        "WetOnlyFully": " has fully " + tmpr3 + " her diaper."
    };
    var diaperTimerModifier = 1; // We will divide by the modifier (positive modifiers decrease the timer)
    diaperTimerModifier = manageRegression(diaperTimerModifier);
    diaperTimerModifier = manageDesperation(diaperTimerModifier);
    diaperTimer = diaperTimerBase / diaperTimerModifier;

    testMess = Math.random();
    // If the baby messes, increment the mess level to a max of 2 and make sure that the wet level is at least as high as the mess level.
    if (testMess > 1 - messChance) {
        if (MessLevelPanties === 2 || !checkForDiaper("Panties")) {
            MessLevelChastity = (MessLevelChastity < 2) ? MessLevelChastity + 1 : MessLevelChastity;
            WetLevelChastity = (WetLevelChastity < MessLevelChastity) ? MessLevelChastity : WetLevelChastity;
        } else if (checkForDiaper("Panties")) {
            MessLevelPanties = MessLevelPanties + 1;
            WetLevelPanties = (WetLevelPanties < MessLevelPanties) ? MessLevelPanties : WetLevelPanties;
        }

        // Display messages for when a diaper is messed.
        if ((MessLevelPanties === 2 && checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (MessLevelChastity === 2 && checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["MessOnlyFully"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["MessOnly"]
                }]
            });
        } else if (MessLevelChastity === 0) {
            if (MessLevelPanties === 2) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: tmpname + DiaperUseMessages["MessInnerFully"]
                    }]
                });
            } else if (MessLevelPanties === 1) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: tmpname + DiaperUseMessages["MessInner"]
                    }]
                });
            }
        } else if (MessLevelChastity === 1) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["MessOuter"]
                }]
            });
        } else if (MessLevelChastity === 2) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["MessOuterFully"]
                }]
            });
        }
    }
    // If the baby only wets, increment the wet level to a max of 2.
    else if (testMess > 1 - wetChance) {
        if (WetLevelPanties == 2 && (InventoryGet(Player, "Panties") !== "PoofyDiaper" && InventoryGet(Player, "Panties") !== "BulkyDiaper")) {
            WetLevelChastity = (WetLevelChastity < 2) ? WetLevelChastity + 1 : WetLevelChastity;
        } else {
            WetLevelPanties = WetLevelPanties + 1;
        }

        // Display messages for when a diaper is wet.
        if ((WetLevelPanties === 2 && checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (WetLevelChastity === 2 && checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["MessOnlyFully"]
                }]
            });
        } else if ((checkForDiaper("Panties") && !checkForDiaper("ItemPelvis")) || (checkForDiaper("ItemPelvis") && !checkForDiaper("Panties"))) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["WetOnly"]
                }]
            });
        } else if (WetLevelChastity === 0) {
            if (WetLevelPanties === 2) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: tmpname + DiaperUseMessages["WetInnerFully"]
                    }]
                });
            } else if (WetLevelPanties === 1) {
                ServerSend("ChatRoomChat", {
                    Type: "Action",
                    Content: "gag",
                    Dictionary: [{
                        Tag: "gag",
                        Text: tmpname + DiaperUseMessages["WetInner"]
                    }]
                });
            }
        } else if (WetLevelChastity === 1) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["WetOuter"]
                }]
            });
        } else if (WetLevelChastity === 2) {
            ServerSend("ChatRoomChat", {
                Type: "Action",
                Content: "gag",
                Dictionary: [{
                    Tag: "gag",
                    Text: tmpname + DiaperUseMessages["WetOuterFully"]
                }]
            });
        }
    }
    // Don't update the color when it's not needed.
    else {
        return;
    }

    // Update color based on the DiaperUseLevels table.
    changeDiaperColor("ItemPelvis");
    changeDiaperColor("Panties");
    ChatRoomCharacterUpdate(Player);
}

/////////////////////
//Rewritten functions

//Crafting
function CraftingItemListBuild() {
	let Search = ElementValue("InputSearch");
	if (Search == null) Search = "";
	Search = Search.toUpperCase().trim();
	CraftingItemList = [];
	for (let A of Asset) {
		if (!InventoryAvailable(Player, A.Name, A.Group.Name)) continue;
		if (!A.Group.Name.startsWith("Item")) continue;
		let Match = true;
		const desc = A.DynamicDescription(Player).toUpperCase().trim();
		if (desc.indexOf(Search) < 0) Match = false;
		if (Match)
			for (let E of CraftingItemList)
				if (E.CraftGroup === A.Name || E.Name === A.CraftGroup)
					Match = false;
		if (Match) CraftingItemList.push(A);
	}
	CraftingItemList.sort((a,b) => (a.Description > b.Description) ? 1 : (b.Description > a.Description) ? -1 : 0);
	if (CraftingOffset >= CraftingItemList.length) CraftingOffset = 0;
}

//Login screen (Ready message)
function LoginRun() {
	if (LoginCredits != null) LoginDrawCredits();
	const CanLogin = ServerIsConnected && !LoginSubmitted;
        DrawButton(750,120,500,60,"QAM 1.9.1 Ready!", "Pink", "Black", "");
	DrawText(TextGet("Welcome"), 1000, 50, "White", "Black");
	DrawText(LoginMessage, 1000, 100, "White", "Black");
	DrawText(TextGet("AccountName"), 1000, 200, "White", "Black");
	ElementPosition("InputName", 1000, 260, 500);
	DrawText(TextGet("Password"), 1000, 350, "White", "Black");
	ElementPosition("InputPassword", 1000, 410, 500);
	DrawButton(775, 500, 200, 60, TextGet("Login"), CanLogin ? "White" : "Grey", "");
	DrawButton(1025, 500, 200, 60, TextGet("Language"), "White", "");
	DrawText(TextGet("CreateNewCharacter"), 1000, 670, "White", "Black");
	DrawButton(825, 740, 350, 60, TextGet("NewCharacter"), CanLogin ? "White" : "Grey", "");
	DrawButton(825, 870, 350, 60, TextGet(CheatAllow ? "Cheats" : "PasswordReset"), CheatAllow || CanLogin ? "White" : "Grey", "");
	DrawCharacter(LoginCharacter, 1400, 100, 0.9);
	if (LoginThankYouNext < CommonTime()) LoginDoNextThankYou();
	DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);
	DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");
}

//Main Hall (Welcome message)
function MainHallRun() {
	KidnapLeagueResetOnlineBountyProgress();
	if (!MainHallBeingPunished) {
		if (Player.ImmersionSettings && Player.LastChatRoom && (Player.LastChatRoom != "") && (AsylumGGTSGetLevel(Player) <= 5) && ((MainHallMaid === null) || (MainHallMaid.Stage === "0"))) {
			if (MainHallFirstFrame) {
				if (Player.ImmersionSettings.ReturnToChatRoom) {
					ChatRoomStart(Player.LastChatRoomSpace, "", null, null, "Introduction", BackgroundsTagList);
					return;
				} else ChatRoomSetLastChatRoom("");
			} else MainHallFirstFrame = true;
		} else {
			if (CurrentCharacter == null && CommonVersionUpdated && MainHallMaid.Dialog != null && MainHallMaid.Dialog.length > 0) {
				CommonVersionUpdated = false;
				CharacterSetCurrent(MainHallMaid);
				MainHallMaid.Stage = "200";
				MainHallMaid.CurrentDialog = DialogFind(MainHallMaid, "ClubUpdated");
				return;
			}
			if ((CurrentCharacter == null) && ManagementIsClubSlave() && LogQuery("BlockChange", "Rule") && !Player.IsNaked() && (MainHallMaid.Dialog != null) && (MainHallMaid.Dialog.length > 0)) {
				MainHallMaid.Stage = "50";
				MainHallMaid.CurrentDialog = DialogFind(MainHallMaid, "ClubSlaveMustBeNaked");
				CharacterRelease(MainHallMaid);
				CharacterSetCurrent(MainHallMaid);
				MainHallStartEventTimer = null;
				MainHallNextEventTimer = null;
				return;
			}
			if ((CurrentCharacter == null) && LogQuery("ClubMistress", "Management") && (ReputationGet("Dominant") < 50) && (CheatFactor("CantLoseMistress", 0) == 1) && Player.CanTalk() && (MainHallMaid.Dialog != null) && (MainHallMaid.Dialog.length > 0)) {
				CommonSetScreen("Room", "Management");
				CharacterSetCurrent(MainHallMaid);
				CurrentScreen = "MainHall";
				MainHallMaid.Stage = "60";
				MainHallMaid.CurrentDialog = DialogFind(MainHallMaid, "MistressExpulsionIntro");
				return;
			}
		}
	}
	DrawCharacter(Player, 750, 0, 1);
	MainCanvas.font = "italic " + CommonGetFont(30);
	DrawTextWrap(TextGet("Tip" + MainHallTip), 100, 800, 500, 200, "White");
	MainCanvas.font = CommonGetFont(36);
	var QAMtext = "Welcome to Quick-AccessMenu2!      " +
	              "Besides the commands usable only in chat rooms, this add-on comes with several automatic features. " +        
                      "Visit QAM Wiki and use /help for more info!";
        MainCanvas.fillStyle = "#50E992";
	MainCanvas.fillRect(20, 588, 640, 246);
	MainCanvas.strokeStyle = "Black";
	MainCanvas.strokeRect(20, 588, 640, 246);
        MainCanvas.textAlign = "left";
	DrawTextWrap(QAMtext, 30 - 630 / 2, 593, 630, 236, "black");
	MainCanvas.textAlign = "center";
	DrawButton(1645, 25, 90, 90, "", "White", "Icons/Character.png", TextGet("Profile"));
	if (Player.CanChangeOwnClothes()) DrawButton(1765, 25, 90, 90, "", "White", "Icons/Dress.png", TextGet("Appearance"));
	DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png", TextGet("Exit"));
	DrawButton(1645, 145, 90, 90, "", "White", "Icons/Chat.png", TextGet("ChatRooms"));
	if (Player.CanWalk() && (!Player.IsRestrained() || !Player.GameplaySettings.OfflineLockedRestrained)) {
		if (MainHallAllow("A")) DrawButton(1765, 145, 90, 90, "", "White", "Icons/Shop.png", TextGet("Shop"));
		if (!LogQuery("LockOutOfPrivateRoom", "Rule") && MainHallAllow("B")) DrawButton(1885, 145, 90, 90, "", "White", "Icons/Private.png", TextGet("PrivateRoom"));
		if (MainHallAllow("C")) DrawButton(1645, 265, 90, 90, "", "White", "Icons/Introduction.png", TextGet("IntroductionClass"));
		if (MainHallAllow("D")) DrawButton(1765, 265, 90, 90, "", "White", "Icons/Maid.png", TextGet("MaidQuarters"));
		DrawButton(1885, 265, 90, 90, "", "White", "Icons/Management.png", TextGet("ClubManagement"));
		if (MainHallAllow("E")) DrawButton(1645, 385, 90, 90, "", "White", "Icons/Kidnap.png", TextGet("KidnapLeague"));
		if (MainHallAllow("F")) DrawButton(1765, 385, 90, 90, "", "White", "Icons/Dojo.png", TextGet("ShibariDojo"));
		if (SarahRoomAvailable && MainHallAllow("G")) DrawButton(1885, 385, 90, 90, "", "White", "Icons/Explore.png", TextGet(SarahRoomLabel()));
		if (MainHallAllow("S")) DrawButton(1525, 505, 90, 90, "", "White", "Icons/Crafting.png", TextGet("Crafting"));
		if (MainHallAllow("H")) DrawButton(1645, 505, 90, 90, "", "White", "Icons/Question.png", TextGet("LookForTrouble"));
		if (MainHallAllow("I")) DrawButton(1765, 505, 90, 90, "", "White", "Icons/Gavel.png", TextGet("SlaveMarket"));
		if (MainHallAllow("J")) DrawButton(1885, 505, 90, 90, "", "White", "Icons/Cell.png", TextGet("Cell"));
		if (!ManagementIsClubSlave() && MainHallAllow("R")) DrawButton(1525, 625, 90, 90, "", "White", "Icons/Platform.png", TextGet("Platform"));
		if (!ManagementIsClubSlave() && MainHallAllow("K")) DrawButton(1645, 625, 90, 90, "", "White", "Icons/Battle.png", TextGet("LARPBattle"));
		if (!ManagementIsClubSlave() && MainHallAllow("L")) DrawButton(1765, 625, 90, 90, "", "White", "Icons/College.png", TextGet("College"));
		if (MainHallAsylumOpen && MainHallAllow("M")) DrawButton(1885, 625, 90, 90, "", "White", "Icons/Asylum.png", TextGet("Asylum"));
		if (Player.CanChangeOwnClothes() && MainHallAllow("Q")) DrawButton(1525, 745, 90, 90, "", "White", "Icons/MagicSchool.png", TextGet("MagicSchool"));
		if (Player.CanChangeOwnClothes() && Player.CanTalk() && MainHallAllow("N")) DrawButton(1645, 745, 90, 90, "", "White", "Icons/Poker.png", TextGet("Poker"));
		if (Player.CanChangeOwnClothes() && MainHallAllow("O")) DrawButton(1765, 745, 90, 90, "", "White", "Icons/Infiltration.png", TextGet("Infiltration"));
		if (Player.CanChangeOwnClothes() && MainHallAllow("P")) DrawButton(1885, 745, 90, 90, "", "White", "Icons/MovieStudio.png", TextGet("MovieStudio"));
		if (MainHallAllow("2")) DrawButton(265, 25, 90, 90, "", "White", "Icons/Camera.png", TextGet("Photographic"));
		if (MainHallAllow("1")) DrawButton(145, 25, 90, 90, "", "White", "Icons/Cage.png", TextGet("Prison"));
		if (MainHallAllow("0")) DrawButton(25, 25, 90, 90, "", "White", "Icons/Random.png", TextGet("Gambling"));
		if (MainHallAllow("5")) DrawButton(265, 145, 90, 90, "", "White", "Icons/Diaper.png", TextGet("Nursery"));
		if (MainHallAllow("4")) DrawButton(145, 145, 90, 90, "", "White", "Icons/Magic.png", TextGet("Magic"));
		if (MainHallAllow("3")) DrawButton(25, 145, 90, 90, "", "White", "Icons/Horse.png", TextGet("Stable"));
		if (MainHallAllow("7")) DrawButton(145, 265, 90, 90, "", "White", "Icons/Arcade.png", TextGet("Arcade"));
		if (MainHallAllow("6")) DrawButton(25, 265, 90, 90, "", "White", "Icons/Refreshsments.png", TextGet("Cafe"));
	} else {
		if (Player.CanWalk() && MaidQuartersOnlineDrinkStarted) {
			DrawButton(1765, 265, 90, 90, "", "White", "Icons/Maid.png", TextGet("MaidQuarters"));
			DrawButton(25, 265, 90, 90, "", "White", "Icons/Refreshsments.png", TextGet("Cafe"));
		}
		if (Player.CanWalk() && (InventoryIsWorn(Player, "BountySuitcase", "ItemMisc") || InventoryIsWorn(Player, "BountySuitcaseEmpty", "ItemMisc")))
			DrawButton(1645, 385, 90, 90, "", "White", "Icons/Kidnap.png", TextGet("KidnapLeague"));
	}
	if (MainHallMaid !== null && (MainHallNextEventTimer != null) && (CommonTime() >= MainHallNextEventTimer)) {
		MainHallMaid.Stage = "0";
		CharacterRelease(MainHallMaid);
		CharacterSetCurrent(MainHallMaid);
		MainHallStartEventTimer = null;
		MainHallNextEventTimer = null;
		MainHallMaidWasCalledManually = false;
	}
	if ((MainHallStartEventTimer == null) && (MainHallNextEventTimer == null)) {
		if ( (!Player.GameplaySettings || !Player.GameplaySettings.DisableAutoMaid) && ((!Player.CanInteract() || !Player.CanWalk() || !Player.CanTalk() || Player.IsShackled()))) {
			MainHallStartEventTimer = CommonTime();
			MainHallNextEventTimer = CommonTime() + 40000 + Math.floor(Math.random() * 40000);
		} else {
			DrawText(TextGet("OnlinePlayers") + " " + CurrentOnlinePlayers.toString(), 1650, 960, "White", "Black");
			DrawButton(1885, 900, 90, 90, "", "White", "Icons/ServiceBell.png", TextGet("RequestMaid"));
		}
		MainHallMaidWasCalledManually = false;
	} else {
		if (!MainHallMaidWasCalledManually && !((!Player.CanInteract() || !Player.CanWalk() || !Player.CanTalk() || Player.IsShackled()))) {
			MainHallStartEventTimer = null;
			MainHallNextEventTimer = null;
		} else {
			DrawText(TextGet("RescueIsComing"), 1750, 925, "White", "Black");
			DrawProgressBar(1525, 955, 450, 35, (1 - ((MainHallNextEventTimer - CommonTime()) / (MainHallNextEventTimer - MainHallStartEventTimer))) * 100);
		}
	}
}

//Misc changes in game.
Asset.forEach(e => {
    if (e.Value < 0) e.Value = 1;
});

function ManagementCannotBeReleasedExtreme() {}

function ManagementCannotBreakUpLoverNPC(L) {
    return false
}

function ManagementCanBeClubMistress() {
    return true
}

function ManagementCannotBeClubMistress() {}

function ManagementCannotBeClubMistressLaugh() {}

function ManagementCannotBeClubMistressTime() {}

function ManagementCanBeClubSlave() {
    return true
}

function ManagementCannotBeClubSlaveOwnerLock() {}

function ManagementCannotBeClubSlaveLoverLock() {}

function AsylumEntranceIsWearingNurseClothes() {
    return true
}

//Nickname
function CharacterNickname(C) {
    let Regex = /[/\p{L}\p{N}\p{Z}'-]/gu;
    let Nick = C.Nickname;
    if (Nick == null) Nick = "";
    Nick = Nick.trim().substring(0, 20);
    if ((Nick == "") || !Regex.test(Nick)) Nick = C.Name;
    return AsylumGGTSCharacterName(C, Nick);
}

function TitleExit() {
    let Regex = /[/\p{L}\p{N}\p{Z}'-]/gu;
    let Nick = ElementValue("InputNickname");
    if (Player.Nickname == '') { 
        var tmpname = Player.Name;
    } else {
        var tmpname = Player.Nickname;
    }
    if (Nick == null) Nick = "";
    Nick = Nick.trim().substring(0, 20);
    if (Nick.length == 0) {
	if (Player.Name != tmpname) {  
	    if (ServerPlayerIsInChatRoom()) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is now known as " + Player.Name + "."
                    }]
                });
	    }	
	}	
        Player.Nickname = Player.Name;
        ServerAccountUpdate.QueueData({
            Nickname: Nick
        });
    } else if ((Nick.length <= 20) && (Nick.match(Regex))) {
	if (ServerPlayerIsInChatRoom()) {    
            if (Nick != tmpname) {
                ServerSend("ChatRoomChat", {
                    Content: "Beep",
                    Type: "Action",
                    Dictionary: [{
                        Tag: "Beep",
                        Text: "" + tmpname + " is now known as " + Nick + "."
                    }]
                });
	    }	    
         }
         Player.Nickname = Nick;
         ServerAccountUpdate.QueueData({
            Nickname: Nick
         });
    }
    TitleSet(TitleSelectedTitle);
    ElementRemove("InputNickname");
    CommonSetScreen("Character", "InformationSheet");
}

//Pandora Prison
function PandoraPrisonRun() {
    if ((Player.Infiltration.Punishment.Timer < CurrentTime) && (CurrentCharacter == null) && !PandoraPrisonEscaped)
        PandoraPrisonCharacter = PandoraPrisonMaid;
    if (PandoraWillpowerTimer < CommonTime()) {
        if (PandoraWillpower < PandoraMaxWillpower) PandoraWillpower++;
        PandoraWillpowerTimer = PandoraWillpowerTimer + ((InfiltrationPerksActive("Recovery")) ? 20000 : 30000);
    }
    if ((Player.Infiltration.Punishment.Timer >= CurrentTime) && (PandoraPrisonCharacterTimer < CommonTime()) && (CurrentCharacter == null) && !PandoraPrisonEscaped) {
        PandoraPrisonBribeEnabled = true;
        PandoraPrisonCharacter = (PandoraPrisonCharacter == null) ? PandoraPrisonGuard : null;
        PandoraPrisonCharacterTimer = CommonTime() + 30000 + Math.floor(Math.random() * 30000);
    }
    if (PandoraPrisonCharacter != null) {
        DrawCharacter(Player, 500, 0, 1);
        DrawCharacter(PandoraPrisonCharacter, 1000, 0, 1);
    } else DrawCharacter(Player, 750, 0, 1);
    if (Player.CanKneel()) DrawButton(1885, 25, 90, 90, "", "White", "Icons/Kneel.png", TextGet("Kneel"));
    DrawButton(1885, 145, 90, 90, "", "White", "Icons/Character.png", TextGet("Profile"));
    if (Player.Infiltration.Punishment.Timer > CurrentTime) {
        DrawText(TextGet("Sentence") + " " + Player.Infiltration.Punishment.Minutes.toString() + " " + TextGet("Minutes"), 1800, 870, "White", "Black");
        DrawText(TextGet("EndsIn") + " " + TimerToString(Player.Infiltration.Punishment.Timer - CurrentTime), 1800, 920, "White", "Black");
    }
    DrawProgressBar(1610, 954, 380, 36, Math.round(PandoraWillpower / PandoraMaxWillpower * 100));
    DrawText(PandoraWillpower.toString(), 1800, 973, "black", "white");
}

//Pose Command
function DialogExtendItem(Item, SourceItem) {
	const C = CharacterGetCurrent();
	StruggleProgress = -1;
	StruggleLockPickOrder = null;
	DialogLockMenu = false;
	DialogCraftingMenu = false;
	DialogColor = null;
	DialogFocusItem = Item;
	DialogFocusSourceItem = SourceItem;
	CommonDynamicFunction("Inventory" + Item.Asset.Group.Name + Item.Asset.Name + "Load()");
}

function CharacterRefresh(C, Push, RefreshDialog = true) {
	CharacterLoadEffect(C);
	CharacterLoadPose(C);
	CharacterLoadCanvas(C);
	C.RunScripts = (!C.AccountName.startsWith('Online-') || !(Player.OnlineSettings && Player.OnlineSettings.DisableAnimations)) && (!Player.GhostList || Player.GhostList.indexOf(C.MemberNumber) == -1);
	C.HasScriptedAssets = !!C.Appearance.find(CA => CA.Asset.DynamicScriptDraw);
	if ((C.ID == 0) && (C.OnlineID != null) && ((Push == null) || (Push == true))) {
		ChatRoomRefreshChatSettings();
		ServerPlayerAppearanceSync();
	}
	var Current = CharacterGetCurrent();
	if (Current && C.ID == Current.ID && RefreshDialog) {
		CharacterRefreshDialog(C);
	}
}

//Pose Menu
var DialogSelfMenuOptions = [
	{
		Name: "Pose",
		IsAvailable: () => true,
		Load: DialogLoadPoseMenu,
		Draw: DialogDrawPoseMenu,
		Click: DialogClickPoseMenu,
	},
	{
		Name: "Expression",
		IsAvailable: () => (CurrentCharacter.ID == 0),
		Draw: DialogDrawExpressionMenu,
		Click: DialogClickExpressionMenu,
	},
	{
		Name: "SavedExpressions",
		IsAvailable: () => (CurrentCharacter.ID == 0),
		Draw: DialogDrawSavedExpressionsMenu,
		Click: DialogClickSavedExpressionsMenu,
	},
	{
		Name: "OwnerRules",
		IsAvailable: () => DialogSelfMenuSelected && DialogSelfMenuSelected.Name == "OwnerRules",
		Draw: DialogDrawOwnerRulesMenu,
		Click: () => { },
	},
];

function DialogDraw() {
    if (ControllerActive == true) {
        ClearButtons();
    }
    if (CurrentCharacter.ID != 0) DrawCharacter(Player, 0, 0, 1);
    DrawCharacter(CurrentCharacter, 500, 0, 1);
    CharacterCheckHooks(C, true);
    if (CurrentCharacter != null) {
        if (DialogSelfMenuOptions.filter(SMO => SMO.IsAvailable()).length > 1 && !CommonPhotoMode) DrawButton(420, 50, 90, 90, "", "White", "Icons/Next.png", DialogFindPlayer("NextPage"));
	if (!DialogSelfMenuSelected) {
            DialogLoadPoseMenu();
	    DialogDrawPoseMenu();
	} else {
	    DialogSelfMenuSelected.Draw();
        }
    }
    if (((Player.FocusGroup != null) || ((CurrentCharacter != null && CurrentCharacter.FocusGroup != null) && CurrentCharacter != null && CurrentCharacter.AllowItem)) && (DialogIntro() != "")) {
        var C = CharacterGetCurrent();
	if (DialogFocusItem != null) {
	    CommonDynamicFunction("Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Draw()");
	    DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png");
	} else {
	    if (DialogActivityMode) DialogDrawActivityMenu(C);
	    else DialogDrawItemMenu(C);
	}
	if (CurrentCharacter != null && CurrentCharacter.HeightModifier != null && CurrentCharacter.FocusGroup != null) {
	    let drawButton = "";
	    if (CharacterAppearanceForceUpCharacter == CurrentCharacter.MemberNumber) {
	        drawButton = "Icons/Remove.png";
	    } else if (CurrentCharacter.HeightModifier < -90) {
	        drawButton = CurrentCharacter.IsInverted() ? "Icons/Down.png" : "Icons/Up.png";
	    } else if (CurrentCharacter.HeightModifier > 30) {
	        drawButton = CurrentCharacter.IsInverted() ? "Icons/Up.png" : "Icons/Down.png";
	    }
	    if (drawButton) DrawButton(510, 50, 90, 90, "", "White", drawButton, DialogFindPlayer("ShowAllZones"));
	}
    } else {
	if (CurrentCharacter != null) {
	    if ((DialogIntro() != "") && (DialogIntro() != "NOEXIT")) {
	        DrawTextWrap(SpeechGarble(CurrentCharacter, CurrentCharacter.CurrentDialog), 1025, -5, 840, 165, "white", null, 3);
		DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png");
	    } else DrawTextWrap(SpeechGarble(CurrentCharacter, CurrentCharacter.CurrentDialog), 1025, -5, 950, 165, "white", null, 3);
	    let pos = 0;
	    for (let D = 0; D < CurrentCharacter.Dialog.length; D++) {
	        if ((CurrentCharacter.Dialog[D].Stage == CurrentCharacter.Stage) && (CurrentCharacter.Dialog[D].Option != null) && DialogPrerequisite(D)) {
	            DrawTextWrap(SpeechGarble(Player, CurrentCharacter.Dialog[D].Option), 1025, 160 + 105 * pos, 950, 90, "black", ((MouseX >= 1025) && (MouseX <= 1975) && (MouseY >= 160 + pos * 105) && (MouseY <= 250 + pos * 105) && !CommonIsMobile) ? "cyan" : "white", 2);
		    pos++;
		}
	     }
	 NPCInteraction();
        }
    }
}

function DialogClick() {
    let C = CharacterGetCurrent();
	if ((CurrentCharacter.HeightModifier < -90 || CurrentCharacter.HeightModifier > 30) && (CurrentCharacter.FocusGroup != null) && MouseIn(510, 50, 90, 90)) {
	    CharacterAppearanceForceUpCharacter = CharacterAppearanceForceUpCharacter == CurrentCharacter.MemberNumber ? -1 : CurrentCharacter.MemberNumber;
	    return;
	}
	if (DialogColor != null && C.FocusGroup && InventoryGet(C, C.FocusGroup.Name) && MouseIn(1300, 25, 675, 950)) {
	    return ItemColorClick(C, C.FocusGroup.Name, 1200, 25, 775, 950, true);
	}
	if ((CurrentCharacter.AllowItem || (MouseX < 500)) && MouseIn(500, 0, 500, 1000) && ((CurrentCharacter.ID != 0) || (MouseX > 500)) && (DialogIntro() != "") && DialogAllowItemScreenException()) {
	    DialogLeaveItemMenu(false);
	    DialogLeaveFocusItem();
		if (DialogItemPermissionMode && C.ID !== (MouseX < 500 ? Player.ID : CurrentCharacter.ID)) {
		    DialogItemPermissionMode = false;
		}
	    let X = MouseX < 500 ? 0 : 500;
	    for (let A = 0; A < AssetGroup.length; A++)
	        if ((AssetGroup[A].Category == "Item") && (AssetGroup[A].Zone != null))
		for (let Z = 0; Z < AssetGroup[A].Zone.length; Z++)
		if (DialogClickedInZone(C, AssetGroup[A].Zone[Z], 1, X, 0, C.HeightRatio)) {
		    C.FocusGroup = AssetGroup[A];
		    DialogItemToLock = null;
		    DialogFocusItem = null;
		    DialogInventoryBuild(C);
		    DialogText = DialogTextDefault;
		    break;
	        }
        }    
	if (CharacterAppearanceForceUpCharacter == CurrentCharacter.MemberNumber && ((MouseX < 500) || (MouseX > 1000) || (CurrentCharacter.FocusGroup == null))) {
	    CharacterAppearanceForceUpCharacter = -1;
	    CharacterRefresh(CurrentCharacter, false, false);
	}
	if (DialogActivityMode && (StruggleProgress < 0 && !StruggleLockPickOrder) && (DialogColor == null) && ((Player.FocusGroup != null) || ((CurrentCharacter.FocusGroup != null) && CurrentCharacter.AllowItem)))
	if ((MouseX >= 1000) && (MouseX <= 1975) && (MouseY >= 125) && (MouseY <= 1000)) {
	    let X = 1000;
	    let Y = 125;
	    for (let A = DialogInventoryOffset; (A < DialogActivity.length) && (A < DialogInventoryOffset + 12); A++) {
	        const act = DialogActivity[A];
		if ((MouseX >= X) && (MouseX < X + 225) && (MouseY >= Y) && (MouseY < Y + 275)) {
		    const type = (act.Item && act.Item.Property ? act.Item.Property.Type : null);
		    if (!act.Blocked || act.Blocked === "limited" && InventoryCheckLimitedPermission(C, act.Item, type)) {
		        if (C.IsNpc()) {
			    let Line = C.FocusGroup.Name + act.Item.Asset.DynamicName(Player);
			    let D = DialogFind(C, Line, null, false);
			    if (D != "") {
			        C.CurrentDialog = D;
			    }
			}						
		        IntroductionJobProgress("SubActivity", act.Activity.MaxProgress.toString(), true);
		        if (act.Item && act.Item.Asset.Name === "ShockRemote") {
		            let targetItem = InventoryGet(C, C.FocusGroup.Name);
			    if (targetItem && targetItem.Property && typeof targetItem.Property.TriggerCount === "number") {	    
		                targetItem.Property.TriggerCount++;							
				ChatRoomCharacterItemUpdate(C, C.FocusGroup.Name);
			    }
		        }
		        ActivityRun(C, act);
		    }
		    return;
                }
		X = X + 250;
		if (X > 1800) {
		    X = 1000;
		    Y = Y + 300;
		}
	    }
	    return;
	}
	if (((Player.FocusGroup != null) || ((CurrentCharacter.FocusGroup != null) && CurrentCharacter.AllowItem)) && (DialogIntro() != "")) {
	    if (DialogFocusItem != null) {
	        CommonDynamicFunction("Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Click()");
	    } else {
	        if ((MouseX >= 1000) && (MouseX < 2000) && (MouseY >= 400) && (MouseY < 1000) && (StruggleProgress >= 0)) StruggleClick(false);
		if ((MouseX >= 1000) && (MouseX < 2000) && (MouseY >= 200) && (MouseY < 1000) && (StruggleLockPickOrder)) { 
		    StruggleLockPickClick(CurrentCharacter); 
		    return; 
		}
		if ((MouseX >= 1000) && (MouseX < 2000) && (MouseY >= 15) && (MouseY <= 105)) DialogMenuButtonClick();
		if ((MouseX >= 1000) && (MouseX <= 1975) && (MouseY >= 125) && (MouseY <= 1000) && !DialogCraftingMenu && ((DialogItemPermissionMode && (Player.FocusGroup != null)) || (Player.CanInteract() && !InventoryGroupIsBlocked(C, null, true))) && (StruggleProgress < 0 && !StruggleLockPickOrder) && (DialogColor == null)) {
		    let X = 1000;
		    let Y = 125;
		    for (let I = DialogInventoryOffset; (I < DialogInventory.length) && (I < DialogInventoryOffset + 12); I++) {
		        if ((MouseX >= X) && (MouseX < X + 225) && (MouseY >= Y) && (MouseY < Y + 275))
			    if (DialogInventory[I].Asset.Enable || (DialogInventory[I].Asset.Extended && DialogInventory[I].Asset.OwnerOnly && CurrentCharacter.IsOwnedByPlayer())) {
			        DialogItemClick(DialogInventory[I]);
				break;
			    }
			X = X + 250;
			if (X > 1800) {
			    X = 1000;
			    Y = Y + 300;
			}
		    }
		}
	    }
	} else {
	    if ((DialogIntro() != "") && (DialogIntro() != "NOEXIT") && (MouseX >= 1885) && (MouseX <= 1975) && (MouseY >= 25) && (MouseY <= 110))
	    DialogLeave();
	    if ((MouseX >= 1025) && (MouseX <= 1975) && (MouseY >= 100) && (MouseY <= 990) && (CurrentCharacter != null)) {
	        var pos = 0;
		for (let D = 0; D < CurrentCharacter.Dialog.length; D++) {
		    if ((CurrentCharacter.Dialog[D].Stage == CurrentCharacter.Stage) && (CurrentCharacter.Dialog[D].Option != null) && DialogPrerequisite(D)) {
		        if ((MouseX >= 1025) && (MouseX <= 1975) && (MouseY >= 160 + pos * 105) && (MouseY <= 250 + pos * 105)) {
			    if (!Player.CanTalk()) CurrentCharacter.CurrentDialog = DialogFind(CurrentCharacter, "PlayerGagged");
			    else CurrentCharacter.CurrentDialog = CurrentCharacter.Dialog[D].Result;
			    if ((Player.CanTalk() && CurrentCharacter.CanTalk()) || SpeechFullEmote(CurrentCharacter.Dialog[D].Option)) {
			        CurrentCharacter.CurrentDialog = CurrentCharacter.Dialog[D].Result;
				if (CurrentCharacter.Dialog[D].NextStage != null) CurrentCharacter.Stage = CurrentCharacter.Dialog[D].NextStage;
				if (CurrentCharacter.Dialog[D].Function != null) CommonDynamicFunctionParams(CurrentCharacter.Dialog[D].Function);
			    } else if ((CurrentCharacter.Dialog[D].Function != null) && (CurrentCharacter.Dialog[D].Function.trim() == "DialogLeave()"))
			    DialogLeave();
			    break;
			}
			pos++;
		    }
		}
	    }
	}
	if ((CurrentCharacter != null) && (MouseX >= 0) && (MouseX <= 500)) {
	    if (MouseIn(420, 50, 90, 90) && DialogSelfMenuOptions.filter(SMO => SMO.IsAvailable()).length > 1) DialogFindNextSubMenu();
	    if (!DialogSelfMenuSelected)
	        DialogClickPoseMenu();
	    else
		DialogSelfMenuSelected.Click();
	}
}

function DialogDrawPoseMenu() {
    if ((CurrentCharacter.ID == 0) || (CurrentCharacter.AllowItem == true)) {
	DrawText(DialogFindPlayer("PoseMenu"), 70, 50, "White", "Black");
	for (let I = 0; I < DialogActivePoses.length; I++) {
	    var OffsetX = 140 + 140 * I;
	    var PoseGroup = DialogActivePoses[I];
	    for (let P = 0; P < PoseGroup.length; P++) {
		var OffsetY = 180 + 100 * P;
		var IsActive = false;
		if (typeof CurrentCharacter.ActivePose == "string" && CurrentCharacter.ActivePose == PoseGroup[P].Name)
		    IsActive = true;
		else if (Array.isArray(CurrentCharacter.ActivePose)) {
		    if (CurrentCharacter.ActivePose.includes(PoseGroup[P].Name))
			IsActive = true;
		    else if (PoseGroup[P].Name == "BaseUpper" && !CurrentCharacter.ActivePose.map(Pose => PoseFemale3DCG.find(PP => PP.Name == Pose)).filter(Pose => Pose).find(Pose => Pose.Category == "BodyUpper" || Pose.Category == "BodyFull"))
			IsActive = true;
		    else if (PoseGroup[P].Name == "BaseLower" && !CurrentCharacter.ActivePose.map(Pose => PoseFemale3DCG.find(PP => PP.Name == Pose)).filter(Pose => Pose).find(Pose => Pose.Category == "BodyLower" || Pose.Category == "BodyFull"))
			IsActive = true;
		}
		else if ((PoseGroup[P].Name == "BaseUpper" || PoseGroup[P].Name == "BaseLower") && CurrentCharacter.ActivePose == null)
		    IsActive = true;
	    DrawButton(OffsetX, OffsetY, 90, 90, "", !CurrentCharacter.CanChangeToPose(PoseGroup[P].Name) ? "#888" : IsActive ? "Pink" : "White", "Icons/Poses/" + PoseGroup[P].Name + ".png");
	    }
	}
    }    
}

function DialogClickPoseMenu() {
    if ((CurrentCharacter.ID == 0) || (CurrentCharacter.AllowItem == true)) {
        for (let I = 0; I < DialogActivePoses.length; I++) {
            var OffsetX = 140 + 140 * I;
	    var PoseGroup = DialogActivePoses[I];
	    for (let P = 0; P < PoseGroup.length; P++) {
	        var OffsetY = 180 + 100 * P;
	        var IsActive = false;
	        if (typeof CurrentCharacter.ActivePose == "string" && CurrentCharacter.ActivePose == PoseGroup[P].Name)
	            IsActive = true;
	        if (Array.isArray(CurrentCharacter.ActivePose) && CurrentCharacter.ActivePose.includes(PoseGroup[P].Name))
	            IsActive = true;
	        if (MouseIn(OffsetX, OffsetY, 90, 90) && !IsActive && CurrentCharacter.CanChangeToPose(PoseGroup[P].Name)) {
	            if (ChatRoomOwnerPresenceRule("BlockChangePose", CurrentCharacter)) {
		        DialogLeave();
		        return;
		    }
		    CharacterSetActivePose(CurrentCharacter, PoseGroup[P].Name);
		    if (CurrentScreen == "ChatRoom") {
	                if (Player.Nickname == '') { 
                             var tmpname = Player.Name;
                        } else {
                             var tmpname = Player.Nickname;
                        }
			if (InventoryGet(Player, "Pronouns").Asset.Name == "HeHim")  {
                            var tmpr1 = "He";
                            var tmpr2 = "him";
                            var tmpr3 = "his";
	                    var tmpr4 = "he";
                        } else {
                            var tmpr1 = "She";
                            var tmpr2 = "her";
                            var tmpr3 = "her";
	                    var tmpr4 = "she";
                        }
                        if ((CurrentCharacter.Nickname == '') || (CurrentCharacter.Nickname == undefined)) { 
                            var tgpname = CurrentCharacter.Name;
                        } else {
                            var tgpname = CurrentCharacter.Nickname;
                        }
			if (InventoryGet(CurrentCharacter, "Pronouns").Asset.Name == "HeHim")  {
                            var tgpr1 = "He";
                            var tgpr2 = "him";
                            var tgpr3 = "his";
			    var tgpr4 = "he";
                        } else {
                            var tgpr1 = "She";
                            var tgpr2 = "her";
                            var tgpr3 = "her";
			    var tgpr4 = "she";
                        }	  
                        if ((CurrentCharacter.ID == 0) && (Player.ActivePose != null)) {
                            if (Player.ActivePose.includes('AllFours') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " relaxes on all fours."
                                    }]
                                });
                            }
                            if (Player.ActivePose.includes('BackBoxTie') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts the arms behind " + tmpr3 + " back."
                                    }]
                                });
                            }
                            if (Player.ActivePose.includes('BackCuffs') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts " + tmpr3 + " arms out like " + tmpr4 + " is handcuffed."
                                    }]
                                });
                            }
                            if (Player.ActivePose.includes('BackElbowTouch') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " puts the arms behind " + tmpr3 + " back, elbows almost touching."
                                    }]
                                });
                            }
                            if (Player.ActivePose.includes('Kneel') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + "  kneels down."
                                    }]
                                }); 
                            }  
                            if (Player.ActivePose.includes('KneelingSpread') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " kneels down and opens " + tmpr3 + " legs."
                                    }]
                                }); 
                            }  
                            if (Player.ActivePose.includes('LegsClosed') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " stands up and closes " + tmpr3 + " legs."
                                    }]
                                }); 
                            }  
                            if (Player.ActivePose.includes('OverTheHead') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " raises the hands above " + tmpr3 + " head."
                                    }]
                                }); 
                            }  
                            if (Player.ActivePose.includes('Yoked') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " raises " + tmpr3 + " hands."
                                    }]
                                }); 
                            }  
                        }
                        if ((CurrentCharacter.ID != 0) && (CurrentCharacter.ActivePose != null)) {
                            if (CurrentCharacter.ActivePose.includes('AllFours') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " on all fours."
                                    }]
                                });
                            }
                            if (CurrentCharacter.ActivePose.includes('BackBoxTie') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to put the arms behind " + tgpr3 + " back."
                                    }]
                                });
                            }
                            if (CurrentCharacter.ActivePose.includes('BackCuffs') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text:  "" + tmpname + " forces " + tgpname + " to put the arms out like " + tgpr4 + " is handcuffed."
				    }]
                                });
                            }
                            if (CurrentCharacter.ActivePose.includes('BackElbowTouch') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to put the arms behind " + tgpr3 + " back, elbows almost touching."
				    }]
                                });
                            }
                            if (CurrentCharacter.ActivePose.includes('Kneel') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text:"" + tmpname + " helps " + tgpname + " to kneel down." 
                                    }]
                                }); 
                            }  
                            if (CurrentCharacter.ActivePose.includes('KneelingSpread') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to kneel down, forcing " + tgpr3 + " legs open."
                                    }]
                                }); 
                            }  
                            if (CurrentCharacter.ActivePose.includes('LegsClosed') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to stand up with " + tgpr3 + " legs closed."
                                    }]
                                }); 
                            }  
                            if (CurrentCharacter.ActivePose.includes('OverTheHead') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " forces " + tgpname + " to raise the hands above " + tgpr3 + " head."
                                    }]
                                }); 
                            }  
                            if (CurrentCharacter.ActivePose.includes('Yoked') == true) {
                                ServerSend("ChatRoomChat", {
                                    Content: "Beep",
                                    Type: "Action",
                                    Dictionary: [{
                                        Tag: "Beep",
                                        Text: "" + tmpname + " helps " + tgpname + " to raise " + tgpr3 + " hands."
                                    }]
                                }); 
                            }  
                        }						   	    			    		    			  					
		        ChatRoomCharacterUpdate(CurrentCharacter);
                        CharacterRefresh(CurrentCharacter);	    
		    }
		}
	    }	
	}
    }	    
}

function PhotographicShotThePlayerPhoto() {
     CharacterSetCurrent(Player);
     CommonTakePhoto(500, 0, 500, 1000);
}

//Stable
function StablePonyEnd() {
    CommonSetScreen("Room", "Stable");
    CharacterSetCurrent(StableTrainer);
    StableTrainer.Stage = "StableTrainingRunOut";
    CharacterRelease(Player);
    CharacterNaked(Player);
    for (let E = Player.Appearance.length - 1; E >= 0; E--)
        if ((Player.Appearance[E].Asset.Group.Name == "ItemTorso") || (Player.Appearance[E].Asset.Group.Name == "Hat") || (Player.Appearance[E].Asset.Group.Name == "ItemButt")) {
            Player.Appearance.splice(E, 1);
        }
    CharacterDress(Player, StablePlayerAppearance);
    CharacterRefresh(Player);
}

function StableTrainerEnd() {
    CommonSetScreen("Room", "Stable");
    CharacterSetCurrent(StableTrainer);
    StableTrainer.Stage = "StableExamTPass";
    CharacterNaked(Player);
    CharacterDress(Player, StablePlayerAppearance);
    CharacterRefresh(Player);
}

//text limits remover by rewriting functions
//transport jacket can not be rewritten.
//pet bowl can not be rewritten.
//wooden box can not be rewritten.
//canvas hood can not be rewritetn.
InventoryItemMiscWoodenSignLoad = function() {
    DynamicDrawLoadFont(InventoryItemMiscWoodenSignFont);
    var C = CharacterGetCurrent();
    var MustRefresh = false;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
    if (DialogFocusItem.Property.Text == null && DialogFocusItem.Property.Text2 == null) {
        DialogFocusItem.Property.Text = "";
        DialogFocusItem.Property.Text2 = "";
        MustRefresh = true;
    }
    if (MustRefresh) {
        CharacterRefresh(C);
        ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);
    }
    const input1 = ElementCreateInput("WoodenSignText1", "text", DialogFocusItem.Property.Text, "50");
    const input2 = ElementCreateInput("WoodenSignText2", "text", DialogFocusItem.Property.Text2, "50");
    if (input1) input1.pattern = DynamicDrawTextInputPattern;
    if (input2) input2.pattern = DynamicDrawTextInputPattern;
}
//
InventoryItemNeckAccessoriesCustomCollarTagLoad = function() {
    var C = CharacterGetCurrent();
    var MustRefresh = false;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
    if (DialogFocusItem.Property.Text == null) {
        DialogFocusItem.Property.Text = "Tag";
        MustRefresh = true;
    }
    if (MustRefresh) {
        CharacterRefresh(C);
        ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);
    }
    if (!InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
        ElementCreateInput("TagText", "text", DialogFocusItem.Property.Text, "30");
    }
}
//
InventoryItemNeckAccessoriesElectronicTagLoad = function() {
    var C = CharacterGetCurrent();
    var MustRefresh = false;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
    if (DialogFocusItem.Property.Text == null) {
        DialogFocusItem.Property.Text = "Tag";
        MustRefresh = true;
    }
    if (MustRefresh) {
        CharacterRefresh(C);
        ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);
    }
    if (!InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
        ElementCreateInput("TagText", "text", DialogFocusItem.Property.Text, "30");
    }
}

//Timercell
function CellLoad() {
    CellKeyDepositStaff = CharacterLoadNPC("NPC_Cell_KeyDepositStaff");
    CellKeyDepositStaff.AllowItem = false;
    CharacterSetActivePose(Player, null);
    CellOpenTimer = LogValue("Locked", "Cell");
    if (CellOpenTimer == null) CellOpenTimer = 0;
}

function CellClick() {
    if (MouseIn(1885, 25, 90, 90) && Player.CanKneel() && (CellOpenTimer > CurrentTime)) CharacterSetActivePose(Player, (Player.ActivePose == null) ? "Kneel" : null, true);
    if (MouseIn(750, 0, 500, 1000)) CharacterSetCurrent(Player);
    if (MouseIn(1885, 145, 90, 90)) InformationSheetLoadCharacter(Player);
    if (CellOpenTimer < CurrentTime) {
        if (MouseIn(1885, 25, 90, 90)) CommonSetScreen("Room", "MainHall");
        if (MouseIn(1885, 265, 90, 90)) CellLock(CellMinutes);
        if (MouseIn(1885, 385, 90, 90)) CellMinutes = CellMinutes + 5;
        if (MouseIn(1885, 505, 90, 90) && (CellMinutes > 5)) CellMinutes = CellMinutes - 5;
        if (MouseIn(1885, 625, 90, 90)) CharacterSetCurrent(CellKeyDepositStaff);
    }
}

//Validation (neutralisation)
function ServerAppearanceLoadFromBundle(C, AssetFamily, Bundle, SourceMemberNumber, AppearanceFull = false) {
    if (!Array.isArray(Bundle)) {
		Bundle = [];
    }
    const appearanceDiffs = ServerBuildAppearanceDiff(AssetFamily, C.Appearance, Bundle);
    ServerAddRequiredAppearance(AssetFamily, appearanceDiffs);
    if (SourceMemberNumber == null) SourceMemberNumber = C.MemberNumber;
    const updateParams = ValidationCreateDiffParams(C, SourceMemberNumber);
    let {
        appearance,
        updateValid
    } = Object.keys(appearanceDiffs)
        .reduce(({
            appearance,
            updateValid
        }, key) => {
            const diff = appearanceDiffs[key];
            const {
                item,
                valid
            } = ValidationResolveAppearanceDiff(diff[0], diff[1], updateParams);
            if (item) appearance.push(item);
            updateValid = updateValid && valid;
            return {
                appearance,
                updateValid
            };
        }, {
            appearance: [],
            updateValid: true
        });
    if (AppearanceFull) {
        C.AppearanceFull = appearance;
    } else {
        C.Appearance = appearance;
    }
}

function ChatRoomSyncItem(data) {
    if ((data == null) || (typeof data !== "object") || (data.Source == null) || (typeof data.Source !== "number") || (data.Item == null) || (typeof data.Item !== "object") || (data.Item.Target == null) || (typeof data.Item.Target !== "number") || (data.Item.Group == null) || (typeof data.Item.Group !== "string")) return;
    for (let C = 0; C < ChatRoomCharacter.length; C++)
        if (ChatRoomCharacter[C].MemberNumber === data.Item.Target) {
            const updateParams = ValidationCreateDiffParams(ChatRoomCharacter[C], data.Source);
            const previousItem = InventoryGet(ChatRoomCharacter[C], data.Item.Group);
            const newItem = ServerBundledItemToAppearanceItem(ChatRoomCharacter[C].AssetFamily, data.Item);
            let {
                item,
                valid
            } = ValidationResolveAppearanceDiff(previousItem, newItem, updateParams);
            ChatRoomAllowCharacterUpdate = false;
            if (!item || (previousItem && previousItem.Asset.Name !== item.Asset.Name)) {
                InventoryRemove(ChatRoomCharacter[C], data.Item.Group, false);
            }
            if (item) {
                CharacterAppearanceSetItem(
                    ChatRoomCharacter[C], data.Item.Group, item.Asset, item.Color, item.Difficulty, null, false);
		        if (item.Craft != null) 
			    for (let Char of ChatRoomCharacter)
			        if (Char.MemberNumber === data.Source)
				    InventoryCraft(Char, ChatRoomCharacter[C], data.Item.Group, item.Craft, false);
                InventoryGet(ChatRoomCharacter[C], data.Item.Group).Property = item.Property;
                const diffMap = {};
                for (const appearanceItem of ChatRoomCharacter[C].Appearance) {
                    const groupName = appearanceItem.Asset.Group.Name;
                    if (groupName === data.Item.Group) {
                        diffMap[groupName] = [previousItem, appearanceItem];
                    } else {
                        diffMap[groupName] = [appearanceItem, appearanceItem];
                    }
                }
                const cyclicBlockSanitizationResult = ValidationResolveCyclicBlocks(ChatRoomCharacter[C].Appearance, diffMap);
                ChatRoomCharacter[C].Appearance = cyclicBlockSanitizationResult.appearance;
                valid = valid && cyclicBlockSanitizationResult.valid;
            }
            ChatRoomAllowCharacterUpdate = true;
            CharacterRefresh(ChatRoomCharacter[C]);
            for (let R = 0; R < ChatRoomData.Character.length; R++) {
                if (ChatRoomData.Character[R].MemberNumber == data.Item.Target)
                    ChatRoomData.Character[R].Appearance = ChatRoomCharacter[C].Appearance;
            }
            return;
        }
}

//Wardrobe 
function AppearanceRun() {
	var C = CharacterAppearanceSelection;
	if (CharacterAppearanceHeaderTextTime < CommonTime() && CharacterAppearanceMode == "Cloth")
		CharacterAppearanceHeaderText = "";
	if (CharacterAppearanceHeaderText == "") {
		if (C.ID == 0) CharacterAppearanceHeaderText = TextGet("SelectYourAppearance");
		else CharacterAppearanceHeaderText = TextGet("SelectSomeoneAppearance").replace("TargetCharacterName", C.Name);
	}
	DrawCharacter(C, -600, -100 + 4 * C.HeightModifier, 4, false);
	DrawCharacter(C, 750, 0, 1);
	DrawText(CharacterAppearanceHeaderText, 400, 40, "White", "Black");
	if (DialogFocusItem != null) {
		CommonDynamicFunction("Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Draw()");
		DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png");
		return;
	}
	if (CharacterAppearanceMenuMode !== CharacterAppearanceMode) {
		CharacterAppearanceMenuMode = CharacterAppearanceMode;
		AppearanceMenuBuild(C);
	}
	AppearanceMenuDraw();
	if (CharacterAppearanceMode == "") {
		for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
		    if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && AssetGroup[A].AllowCustomize) {
                        if (AppearanceGroupAllowed(C, AssetGroup[A].Name)) {
                            const Item = InventoryGet(C, AssetGroup[A].Name);
			    const ButtonColor = WardrobeGroupAccessible(C, AssetGroup[A]) ? "White" : "#888";
			    if (AssetGroup[A].AllowNone && (AssetGroup[A].Category == "Appearance") && (Item != null) && WardrobeGroupAccessible(C, AssetGroup[A]))
			        DrawButton(1210, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", ButtonColor, "Icons/Small/Naked.png", TextGet("StripItem"));
				DrawBackNextButton(1300, 145 + (A - CharacterAppearanceOffset) * 95, 400, 65, AssetGroup[A].Description + ": " + CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Description"), ButtonColor, "",
					() => WardrobeGroupAccessible(C, AssetGroup[A]) ? CharacterAppearanceNextItem(C, AssetGroup[A].Name, false, true) : "",
					() => WardrobeGroupAccessible(C, AssetGroup[A]) ? CharacterAppearanceNextItem(C, AssetGroup[A].Name, true, true) : "",
					!WardrobeGroupAccessible(C, AssetGroup[A]),
					AssetGroup[A].AllowNone || AppearancePreviewUseCharacter(AssetGroup[A]) ? 65 : null);
				var Color = CharacterAppearanceGetCurrentValue(C, AssetGroup[A].Name, "Color");
				const ColorButtonText = ItemColorGetColorButtonText(Color);
				const ColorButtonColor = ColorButtonText.startsWith("#") ? ColorButtonText : "#fff";
				const CanCycleColors = !!Item && WardrobeGroupAccessible(C, AssetGroup[A]) && (Item.Asset.ColorableLayerCount > 0 || Item.Asset.Group.ColorSchema.length > 1) && !InventoryBlockedOrLimited(C, Item);
				const CanPickColor = CanCycleColors && AssetGroup[A].AllowColorize;
				const ColorIsSimple = ItemColorIsSimple(Item);
			        DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", null, null, !CanCycleColors);
			     	DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Color.png" : "Icons/MultiColor.png" : "Icons/ColorBlocked.png", null, !CanPickColor);
			    } else DrawText(AssetGroup[A].Description + " " + TextGet("OwnerBlock"), 1600, 177 + (A - CharacterAppearanceOffset) * 95, "White", "Silver");
		    }
	}
	if (CharacterAppearanceMode == "Wardrobe") {
		DrawText(CharacterAppearanceWardrobeText, 1645, 220, "White", "Gray");
		ElementPosition("InputWardrobeName", 1645, 315, 690);
                DrawButton(1300, 240, 157, 60, "Export", "#50E992", "", "Full QAM Export");
                DrawButton(1472, 240, 157, 60, "Import1", "#50E992", "", "Clothing + Restraints");       
                DrawButton(1644, 240, 157, 60, "Import2", "#50E992", "", "Clothing + Restraints + Cosplay");
                DrawButton(1816, 240, 157, 60, "Import3", "#50E992", "", "Full QAM Import");
		for (let W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++) {
			DrawButton(1300, 430 + (W - CharacterAppearanceWardrobeOffset) * 95, 500, 65, "", "White", "");
			DrawTextFit((W + 1).toString() + (W < 9 ? ":  " : ": ") + Player.WardrobeCharacterNames[W], 1550, 463 + (W - CharacterAppearanceWardrobeOffset) * 95, 496, "Black");
			DrawButton(1820, 430 + (W - CharacterAppearanceWardrobeOffset) * 95, 160, 65, "Save", "White", "");
		}
	}
	if (CharacterAppearanceMode == "Color") {
		if (!InventoryGet(CharacterAppearanceSelection, CharacterAppearanceColorPickerGroupName)) ItemColorCancelAndExit();
		ItemColorDraw(CharacterAppearanceSelection, CharacterAppearanceColorPickerGroupName, 1200, 25, 775, 950, true);
	}
	if (CharacterAppearanceMode == "Cloth") {
		let X = 1250;
		let Y = 125;
		for (let I = DialogInventoryOffset; (I < DialogInventory.length) && (I < DialogInventoryOffset + 9); I++) {
			const Item = DialogInventory[I];
			const Hover = MouseIn(X, Y, 225, 275) && !CommonIsMobile;
			const Background = AppearanceGetPreviewImageColor(C, Item, Hover);
			if (Item.Hidden) {
				DrawPreviewBox(X, Y, "Icons/HiddenItem.png", Item.Asset.Description, { Background });
			} else if (AppearancePreviewUseCharacter(C.FocusGroup)) {
				const Z = C.FocusGroup.PreviewZone;
				const PreviewCanvas = DrawCharacterSegment(AppearancePreviews[I], Z[0], Z[1], Z[2], Z[3]);
				DrawCanvasPreview(X, Y, PreviewCanvas, Item.Asset.Description, { Background, Vibrating: Item.Vibrating, Icons: Item.Icons });
			} else {
				DrawAssetPreview(X, Y, Item.Asset, { Background, Vibrating: Item.Vibrating, Icons: Item.Icons });
			}
			setButton(X, Y);
			X = X + 250;
			if (X > 1800) {
				X = 1250;
				Y = Y + 300;
			}
		}
	}
}

function AppearanceClick() {
	var C = CharacterAppearanceSelection;
	ClearButtons();
	if (DialogFocusItem != null) {
		CommonDynamicFunction("Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Click()");
	}
	else if (CharacterAppearanceMode == "Color") {
		ItemColorClick(CharacterAppearanceSelection, CharacterAppearanceColorPickerGroupName, 1200, 25, 775, 950, true);
	}
	else if (MouseYIn(25, 90)) AppearanceMenuClick(C);
	else if (CharacterAppearanceMode == "") {
          if ((MouseX >= 1210) && (MouseX < 1275) && (MouseY >= 145) && (MouseY < 975))
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && WardrobeGroupAccessible(C, AssetGroup[A]) && AssetGroup[A].AllowNone && (InventoryGet(C, AssetGroup[A].Name) != null))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95)) 
						if (AppearanceGroupAllowed(C, AssetGroup[A].Name)) {
							InventoryRemove(C, AssetGroup[A].Name, false);
							CharacterRefresh(C, false);
						} 
           if ((MouseX >= 1300) && (MouseX < 1700) && (MouseY >= 145) && (MouseY < 975)) {
			C.FocusGroup = null;
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++)
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && WardrobeGroupAccessible(C, AssetGroup[A]))
					if (MouseYIn(145 + (A - CharacterAppearanceOffset) * 95, 65))
						if (AppearanceGroupAllowed(C, AssetGroup[A].Name)) {
							if (!AssetGroup[A].AllowNone && !AppearancePreviewUseCharacter(AssetGroup[A])) {
								CharacterAppearanceNextItem(C, AssetGroup[A].Name, MouseX > 1500);
							}
							else {
								if (MouseXIn(1300, 65)) CharacterAppearanceNextItem(C, AssetGroup[A].Name, false);
								else if (MouseXIn(1635, 65)) CharacterAppearanceNextItem(C, AssetGroup[A].Name, true);
								else {
									C.FocusGroup = AssetGroup[A];
									DialogInventoryBuild(C, null, true);
									CharacterAppearanceCloth = InventoryGet(C, C.FocusGroup.Name);
									CharacterAppearanceMode = "Cloth";
									return;
								}
							}
						}

		}
            if ((MouseX >= 1725) && (MouseX < 1885) && (MouseY >= 145) && (MouseY < 975))
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++) {
				const Item = InventoryGet(C, AssetGroup[A].Name);
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && WardrobeGroupAccessible(C, AssetGroup[A]) && Item && (Item.Asset.ColorableLayerCount > 0 || Item.Asset.Group.ColorSchema.length > 1) && !InventoryBlockedOrLimited(C, Item))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95))
						if (AppearanceGroupAllowed(C, AssetGroup[A].Name))
							CharacterAppearanceNextColor(C, AssetGroup[A].Name);
			}
           if (MouseIn(1910, 145, 65, 830))
			for (let A = CharacterAppearanceOffset; A < AssetGroup.length && A < CharacterAppearanceOffset + CharacterAppearanceNumPerPage; A++) {
				const Item = InventoryGet(C, AssetGroup[A].Name);
				if ((AssetGroup[A].Family == C.AssetFamily) && (AssetGroup[A].Category == "Appearance") && WardrobeGroupAccessible(C, AssetGroup[A]) && AssetGroup[A].AllowColorize && Item && Item.Asset.ColorableLayerCount > 0 && !InventoryBlockedOrLimited(C, Item))
					if ((MouseY >= 145 + (A - CharacterAppearanceOffset) * 95) && (MouseY <= 210 + (A - CharacterAppearanceOffset) * 95))
						if (AppearanceGroupAllowed(C, AssetGroup[A].Name))
							AppearanceItemColor(C, Item, AssetGroup[A].Name, "");
			}
		return;
	}
	else if (CharacterAppearanceMode == "Wardrobe") {
            if ((MouseX >= 1300) && (MouseX < 1447) && (MouseY >= 240) && (MouseY < 290)) {
		if (ServerPlayerIsInChatRoom()) {
                    var appall = new Array();
                    C.Appearance.forEach(item=>{
                        var app = new Array();
                        app.push(item.Asset.Name);
                        app.push(item.Asset.Group.Name);
                        app.push(item.Color);
                        app.push(item.Difficulty);
                        app.push(item.Craft);
                        app.push(false);
			//Do not remove this line.It is for the compability with bcg.
                        appall.push(app);
                            }
                    );
                    ChatRoomSendLocal(
                         "<p style='background-color:#5fbd7a'>Quick-AccessMenu2: Appearance saved.</p>\n" +
                         btoa(encodeURI(JSON.stringify(appall)))
                    );
                    DialogLeave();
		}	
            }
	    if ((MouseX >= 1472) && (MouseX < 1629) && (MouseY >= 240) && (MouseY < 290)) {
                appinp = prompt('Please input the awcode (Compatible with BCG).', '');
		for (let A = C.Appearance.length - 1; A >= 0; A--)
		if ((C.Appearance[A].Asset.Group.Category == "Appearance") && C.Appearance[A].Asset.Group.AllowNone) {
                    if ((C.Appearance[A].Asset.Group.Name != "Blush") 
			&& (C.Appearance[A].Asset.Group.Name != "BodyLower") 
                        && (C.Appearance[A].Asset.Group.Name != "BodyUpper") 
			&& (C.Appearance[A].Asset.Group.Name != "Emoticon") 
			&& (C.Appearance[A].Asset.Group.Name != "Eyebrows") 
                        && (C.Appearance[A].Asset.Group.Name != "Eyes") 
                        && (C.Appearance[A].Asset.Group.Name != "Eyes2") 
			&& (C.Appearance[A].Asset.Group.Name != "Fluids") 
                        && (C.Appearance[A].Asset.Group.Name != "HairBack") 
                        && (C.Appearance[A].Asset.Group.Name != "HairFront") 
			&& (C.Appearance[A].Asset.Group.Name != "Hands") 
                        && (C.Appearance[A].Asset.Group.Name != "Head") 
                        && (C.Appearance[A].Asset.Group.Name != "Height") 
                        && (C.Appearance[A].Asset.Group.Name != "Mouth") 
                        && (C.Appearance[A].Asset.Group.Name != "Nipples")
                        && (C.Appearance[A].Asset.Group.Name != "Pussy") 
                        && (C.Appearance[A].Asset.Group.Name != "HairAccessory1") 
                        && (C.Appearance[A].Asset.Group.Name != "HairAccessory2") 
                        && (C.Appearance[A].Asset.Group.Name != "TailStraps") 
			&& (C.Appearance[A].Asset.Group.Name != "Wings"))  {
	                InventoryRemove(C,C.Appearance[A].Asset.Group.Name);
	            }
	        }    
		CharacterReleaseNoLock(C);
                var appobj = JSON.parse(decodeURI(atob(appinp)));
                appobj.forEach(itemstr=>{
                    if ((InventoryGet(C, itemstr[1]) != null) && (InventoryGet(C, itemstr[1]).Asset.AllowLock == true)) {
                        if (((InventoryGet(C, itemstr[1]).Property != null) && (InventoryGet(C, itemstr[1]).Property.LockedBy == null)) || (InventoryGet(C, itemstr[1]).Property == null)) { 
                            InventoryRemove(C,itemstr[1]);
			    InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);
                        }
                    } else if ((itemstr[1] != "Blush") 
			       && (itemstr[1] != "BodyLower") 
			       && (itemstr[1] != "BodyUpper")
			       && (itemstr[1] != "Emoticon") 
			       && (itemstr[1] != "Eyebrows") 
			       && (itemstr[1] != "Eyes") 
			       && (itemstr[1] != "Eyes2") 
			       && (itemstr[1] != "Fluids") 
			       && (itemstr[1] != "HairBack") 
			       && (itemstr[1] != "HairFront") 
			       && (itemstr[1] != "Hands") 
			       && (itemstr[1] != "Head") 
			       && (itemstr[1] != "Height") 
			       && (itemstr[1] != "Mouth") 
			       && (itemstr[1] != "Nipples") 
			       && (itemstr[1] != "Pussy") 
			       && (itemstr[1] != "HairAccessory1") 
			       && (itemstr[1] != "HairAccessory2") 
			       && (itemstr[1] != "TailStraps") 
			       && (itemstr[1] != "Wings")) {   
			InventoryRemove(C,itemstr[1]);
                        InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);      
                        } 
                    } 
                );   
                ChatRoomCharacterUpdate(C);
		DialogLeave();
	    }
            if ((MouseX >= 1644) && (MouseX < 1791) && (MouseY >= 240) && (MouseY < 290)) {
                appinp = prompt('Please input the awcode (Compatible with BCG).', '');
		CharacterNaked(C); 
		CharacterReleaseNoLock(C);
                var appobj = JSON.parse(decodeURI(atob(appinp)));
                appobj.forEach(itemstr=>{
                    if ((InventoryGet(C, itemstr[1]) != null) && (InventoryGet(C, itemstr[1]).Asset.AllowLock == true)) {
                        if (((InventoryGet(C, itemstr[1]).Property != null) && (InventoryGet(C, itemstr[1]).Property.LockedBy == null)) || (InventoryGet(C, itemstr[1]).Property == null)) {
                            InventoryRemove(C,itemstr[1]);
			    InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);
                        }
                    } else if ((itemstr[1] != "Blush") 
			       && (itemstr[1] != "BodyLower") 
			       && (itemstr[1] != "BodyUpper")
			       && (itemstr[1] != "Emoticon") 
			       && (itemstr[1] != "Eyebrows") 
			       && (itemstr[1] != "Eyes") 
			       && (itemstr[1] != "Eyes2") 
			       && (itemstr[1] != "Fluids") 
			       && (itemstr[1] != "HairBack") 
			       && (itemstr[1] != "HairFront") 
			       && (itemstr[1] != "Hands")
			       && (itemstr[1] != "Head") 
			       && (itemstr[1] != "Height") 
			       && (itemstr[1] != "Mouth") 
			       && (itemstr[1] != "Nipples") 
			       && (itemstr[1] != "Pussy")) {   
			InventoryRemove(C,itemstr[1]);
                        InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);      
                        } 
                    } 
                );   
                ChatRoomCharacterUpdate(C);
		DialogLeave();
	    }
            if ((MouseX >= 1816) && (MouseX < 1973) && (MouseY >= 240) && (MouseY < 290)) {
                appinp = prompt('Please input the awcode (Compatible with BCG).', '');
		CharacterNaked(C); 
		CharacterReleaseNoLock(C);
                var appobj = JSON.parse(decodeURI(atob(appinp)));
                appobj.forEach(itemstr=>{
                    if ((InventoryGet(C, itemstr[1]) != null) && (InventoryGet(C, itemstr[1]).Asset.AllowLock == true)) {
                        if (((InventoryGet(C, itemstr[1]).Property != null) && (InventoryGet(C, itemstr[1]).Property.LockedBy == null)) || (InventoryGet(C, itemstr[1]).Property == null)) { 
                            InventoryRemove(C,itemstr[1]);
			    InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);
                        }
                    } else {
			InventoryRemove(C,itemstr[1]);
                        InventoryWear(C, itemstr[0], itemstr[1], itemstr[2], itemstr[3], -1, itemstr[4]);
                        }
                    }
                );                
                ChatRoomCharacterUpdate(C);
		DialogLeave();
	    }
	    if ((MouseX >= 1300) && (MouseX < 1800) && (MouseY >= 430) && (MouseY < 970))
	        for (let W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++)
	            if ((MouseY >= 430 + (W - CharacterAppearanceWardrobeOffset) * 95) && (MouseY <= 495 + (W - CharacterAppearanceWardrobeOffset) * 95)) {
		        WardrobeFastLoad(C, W, false);
		        ElementValue("InputWardrobeName", Player.WardrobeCharacterNames[W]);
		    }
	    if ((MouseX >= 1820) && (MouseX < 1975) && (MouseY >= 430) && (MouseY < 970))
		for (let W = CharacterAppearanceWardrobeOffset; W < Player.Wardrobe.length && W < CharacterAppearanceWardrobeOffset + 6; W++)
		    if ((MouseY >= 430 + (W - CharacterAppearanceWardrobeOffset) * 95) && (MouseY <= 495 + (W - CharacterAppearanceWardrobeOffset) * 95)) {
		        WardrobeFastSave(C, W);
			var LS = /^[a-zA-Z0-9 ]+$/;
			var Name = ElementValue("InputWardrobeName").trim();
			if (Name.match(LS) || Name.length == 0) {
			    WardrobeSetCharacterName(W, Name);
			    CharacterAppearanceWardrobeText = TextGet("WardrobeNameInfo");
			} else {
			    CharacterAppearanceWardrobeText = TextGet("WardrobeNameError");
			}
		   }
		return;
	}
	else if (CharacterAppearanceMode == "Cloth") {
		var X = 1250;
		var Y = 125;
		for (let I = DialogInventoryOffset; (I < DialogInventory.length) && (I < DialogInventoryOffset + 9); I++) {
			if ((MouseX >= X) && (MouseX < X + 225) && (MouseY >= Y) && (MouseY < Y + 275)) {
				var Item = DialogInventory[I];
				const CurrentItem = InventoryGet(C, C.FocusGroup.Name);
				const worn = (CurrentItem && (CurrentItem.Asset.Name == Item.Asset.Name));
				if (DialogItemPermissionMode) {
				DialogInventoryTogglePermission(Item, worn);
				} else {
					if (InventoryBlockedOrLimited(C, Item)) return;
					if (InventoryAllow(C, Item.Asset)) {
						if (worn && CurrentItem.Asset.Extended) {
						DialogExtendItem(CurrentItem);
						} else {
						CharacterAppearanceSetItem(C, C.FocusGroup.Name, DialogInventory[I].Asset);
							DialogInventoryBuild(C, DialogInventoryOffset);
							AppearanceMenuBuild(C);
						}
					} else {
					CharacterAppearanceHeaderTextTime = DialogTextDefaultTimer;
						CharacterAppearanceHeaderText = DialogText;
					}
				}
				return;
			}
			X = X + 250;
			if (X > 1800) {
				X = 1250;
				Y = Y + 300;
			}
		}
	}
}

//embed engine. Depends on hidden unicode characters, so don't touch or risk corruption... depenencies are in chatroom script.
var tenorRe = /(?:(?:(?:[A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)(?:(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)(?:jpg|jpeg|gif|png)/;
var tubeRe = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?/;

function getChatWindowElement() {
    var div = document.querySelector("#TextAreaChatLog");
    return div;
}

function createMessageElement() {
    var divMsg = document.createElement('div');
    divMsg.classList.add("ChatMessage", "ChatMessageChat");
    return divMsg;
}

function createImgElement(src) {
    var img = document.createElement('img');
    img.src = src;
    img.classList.add('chatImg');
    return img;
}

function createCharacterNameElement(name) {
    var char = findCharacterInRoom(name);
    var senderName = document.createElement('div');
    senderName.innerText = char.Name + ":";
    senderName.classList.add('ChatMessageName');
    senderName.style.color = char.LabelColor;
    return senderName;
}

function sendLocalMessage(content) {
    ChatRoomMessage({
        Content: content,
        Type: "LocalMessage",
        Sender: Player.MemberNumber
    });
    document.querySelector('#TextAreaChatLog').lastChild.style.color = 'silver';
}

function findCharacterInRoom(name) {
    if (!isNaN(name)) {
        var target = ChatRoomCharacter.find(c => c.MemberNumber == name);
    } else if (typeof name == 'string') {
        var target = ChatRoomCharacter.find(c => c.Name.toLowerCase() == name.toLowerCase());
    }
    return target;
}

function sendHiddenMessageTarget(message, MemberNumber) {
    ServerSend("ChatRoomChat", {
        Content: message,
        Type: "Hidden",
        Target: MemberNumber
    });
}

function sendHiddenMessageAll(message) {
    ServerSend("ChatRoomChat", {
        Content: message,
        Type: "Hidden"
    });
}

function bodyPartHasRestraint(character, groupName) {
    var hasItem = false;
    for (const item of character.Appearance) {
        if (item.Asset.Group.Name == groupName) hasItem = true;
    }
    return hasItem;
}

function getCommand(commandName) {
    for (const cmd of ChatCommands) {
        if (cmd.name == commandName) {
            var command = cmd;
        } else if (cmd.aliases && cmd.aliases.includes(commandName)) {
            var command = cmd;
        }
    }
    return command;
}

setTimeout(function() {
    ServerSocket.on("ChatRoomMessage", function(data) {
        if (data.Content.startsWith("?")) {
            return;
        }
    });
}, 5000);


function ChatSearchJoin() { //rewrite chatroom join to house auto join
    var X = 25;
    var Y = 25;
    for (let C = ChatSearchResultOffset; C < ChatSearchResult.length && C < (ChatSearchResultOffset + ChatSearchRoomsPerPage); C++) {
        if (ChatSearchLastQueryJoin != RoomName || (ChatSearchLastQueryJoin == RoomName && ChatSearchLastQueryJoinTime + 1000 < CommonTime())) {
            if (this.IsOn == undefined || this.IsOn == false) {
                IsOn = true;
                var TextArea = document.createElement("TextArea");
                TextArea.setAttribute("ID", "AutoJoinAlert");
                document.body.appendChild(TextArea);
                ElementValue("AutoJoinAlert", "AutoJoining...");
                ElementPosition("AutoJoinAlert", 300, 970, 350);
            };

            if ((MouseX >= X) && (MouseX <= X + 630) && (MouseY >= Y) && (MouseY <= Y + 85)) {
                var RoomName = ChatSearchResult[C].Name;

                AutoJoin = function() {
                    this.AutoJoinOn = true;
                    setTimeout(function() {
                        AutoJoin()
                    }, 1300);
                    ChatSearchLastQueryJoinTime = CommonTime();
                    ChatSearchLastQueryJoin = RoomName;
                    ChatRoomPlayerCanJoin = true;
                    ServerSend("ChatRoomJoin", {
                        Name: RoomName
                    });
                    ChatRoomPingLeashedPlayers();
                    if (CurrentScreen == "ChatRoom") {
                        AutoJoin = function() {};
                        this.AutoJoinOn = false;
                        ElementRemove("AutoJoinAlert");
                        IsOn = false;
                    }
                };
                if (this.AutoJoinOn == false || this.AutoJoinOn == undefined) {
                    AutoJoin()
                };


            }
        }
        X = X + 660;
        if (X > 1500) {
            X = 25;
            Y = Y + 109;
        }
    }
}



