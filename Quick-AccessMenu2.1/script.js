(typeof OLDmenu !== "undefined") && (ChatRoomSendChat = OLDmenu);//reset
function NEWmenu() {
var content = ElementValue("InputChat").trim();


//chatcommand
if (CurrentScreen == "ChatRoom") {
	
    if (content.indexOf("/help") == 0) {
        ChatRoomMessage({ Content: "ChatRoomHelp", Type: "Action", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "Quick-AccessMenu2: List of commands:", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/action (stuffhere)  = inserts an action. Can also: /a.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/arousal 10  =  sets arousal level. Change value (0-100).", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/autokick  =  toggles on auto kick for 0 day old accounts.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/babytalk (stuffhere) =  speaks as a baby. Can also: /b", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/background =  adds hidden backgrounds to the admin selection screen.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/becomeownlover  =  becomes your own lover.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/becomeownowner  =  becomes your own owner.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/boost  =  boosts skills, similar to maid quarters drink.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/chess  (difficulty) =  starts chess, must specify difficulty first (/chess 1 = easy, /chess 3 = hard).", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/clothes (targetname) =  changes clothes.", Type: "LocalMessage", Sender: Player.MemberNumber });  
        ChatRoomMessage({ Content: "/clubmistress  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/clubslave  =  becomes club slave. Careful, will be forced to complete contract.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/collarremove  =  removes slave/owner collar. Can also be: /removecollar", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/college  =  enters college, bypasses requirements.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/colorchanger  =  using will give more info.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/cum  =  causes an orgasm.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/doctor  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/erase  =  erases chat.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/gagheavy (stuffhere)  =  speaks once in heavy gag talk. Can also: /gh", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/gaglight (stuffhere) =  speaks once in light gag talk. Can also: /gl", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/gagtalk  =  toggle to decode/not decode gagged people talking.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/giveeverything  =  gives every item.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/headmaid  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/hiddenmessages  =  sees hidden messages made by game.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/kidnapper  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/kinkydungeon  =  to the end, add devious to toggle deviouschallenge or cheat to start with cheats or use as is to start vanilla. Remember to wear VR headset if you want others to see you play.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/leave  =  leaves room, even if prevented.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/login (accountname) (password)  =  logs in a new account.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/maid  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/masterkidnapper  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/maxdifficulty  =  all your current bindings become extremely solid.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/maxstatistics  =  gives max statistics, more info on others.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/mindifficulty  =  all your current bindings become very easy to remove.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/mistress  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/money 9999  =  gives or takes money. Change value.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/naked (targetname) =  removes clothes.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/nurse  =  becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/outfit  =  saving/loading, using will give more info.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/patient  = becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/patreoncheats  =  all except college uniform, is auto toggled by default.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/permanentpatient  = becomes this.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/pose (posehere) (targetname) =  Poses: exercise, kneel, sleep, pet, stand, suspension. Only on yourself: jump, roof.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/quitasylum  =  stops being a doctor, nurse, patient or permanent patient.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/quitclubslave  =  breaks club slave contract.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/quitkidnapper  =  stops being a kidnapper or master kidnapper.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/quitmanagement  =  stops being a mistress or club mistress.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/quitsorority  =  stops being a maid or head maid.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/randomize (targetname) = naked + underwear + clothes + restrain commands.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/release (targetname) =  removes all bindings.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/relog  =  relogs.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/resetdifficulty  =  resets difficulty, thereby quitting it. Will warn first.", Type: "LocalMessage", Sender: Player.MemberNumber }); 
        ChatRoomMessage({ Content: "/resetinventory  =  erases your inventory. Will warn first.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/restrain (targetname) =  adds random restraints.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/safewordspecific  =  removes specific item. More info when used.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/search (areaname)  =  opens room search, area is: club or asylum", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/speak  = animates mouth when talking in chat. Can also: /mouth or /speech", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/store  =  leaves chatroom, goes to store. Shows hidden items.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/talkbaby  =  toggle on gag talk. Remember to only use one at a time.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/talkgag light/heavy  =  toggles on gag talk. Remember to only use one at a time.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/timercell (minutes) = stays randomly tied in the isolation cell. More than 60 minutes is possible.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/totalrelease (targetname) =  removes all bindings, collar, harness, chastity, toys.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/underwear (targetname) =  changes underwear.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/unrestrict  = Using will give more info.  Removes all restrictions from game. Can use maid drink tray/other stuff. Submissives should use /unrestrict soft", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/wardrobe (targetname)  =  opens target wardrobe.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "/whisper (targetname) = sets whisper target.", Type: "LocalMessage", Sender: Player.MemberNumber });
    }
	
    else if ((content.indexOf("/action ") == 0) || (content.indexOf("/a ") == 0))  {
        if (content.includes("/action") == true) {
            ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: (content.substring(7).trim() )}] });}
        else {
            ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: (content.substring(2).trim() )}] });}
    }
	
    else if (content.indexOf("/arousal") == 0) {
        Player.ArousalSettings.Progress = content.substring(8);ServerPlayerSync();
        if (content.includes("100")) {
           ActivityOrgasmRuined = false;
           ActivityOrgasmStart(Player); }
    }
	
    else if (content.indexOf("/autokick") == 0) {
        if (this.AutoKickOn == false || this.AutoKickOn == undefined) {
           ChatRoomMessage({ Content: "AutoKick: Ready.", Type: "LocalMessage", Sender: Player.MemberNumber });
           AutoKickOn = true;
           AutoKicker = function (data, days = 1, hours = 12, minutes = 0) {
           minutes *= 60000;
           hours *= 3600000;
           days *= 86400000;
           let character = ChatRoomCharacter.find((c) => c.MemberNumber === data.Sender);
           if (data.Content == "ServerEnter" && character.Creation > CurrentTime - days - hours - minutes) {
               ServerSend("ChatRoomAdmin", { MemberNumber: character.MemberNumber, Action: "Ban" });
               ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: "AutoKick: Account was 0 days old."}] });};
               };ServerSocket.on("ChatRoomMessage", AutoKicker);}
        else {
            AutoKickOn = false;
            ServerSocket.off("ChatRoomMessage", AutoKicker);
            ChatRoomMessage({ Content: "AutoKick: Disabled.", Type: "LocalMessage", Sender: Player.MemberNumber })
        }
    }
	
    else if ((content.indexOf("/babytalk") == 0) || content.indexOf("/b ") == 0) {
        if (content.includes("/babytalk")) {
           content = SpeechBabyTalk({Effect: ["RegressedTalk"]}, content);
           ServerSend("ChatRoomChat", { "Content":content.substring(9).trim(), "Type":"Chat" });}
        else {
           content = SpeechBabyTalk({Effect: ["RegressedTalk"]}, content);
           ServerSend("ChatRoomChat", { "Content":content.substring(2).trim(), "Type":"Chat" });}
    }
	
    else if (content.indexOf("/background") == 0) {
        BackgroundsList.push({ Name: "Pandora/Ground/Entrance", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell4", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell5", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Cell6", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Entrance", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork4", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork5", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Fork6", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel4", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel5", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Second/Tunnel6", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell4", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell5", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Cell6", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Entrance", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork4", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork5", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Fork6", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel4", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel5", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Pandora/Underground/Tunnel6", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "AsylumBedroom", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "AsylumEntrance", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "AsylumMeeting", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "AsylumTherapy", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "AmandaCollarIntro", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "AmandaIntro", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Bar", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "BrickWall", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Cell", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "CollegeCafeteria", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "CollegeDetention", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "CollegeEntrance", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "CollegeTeacherLounge", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "CollegeTennisPlay", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Dressing", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Gambling", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "grey", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "White", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "HorseStableLight", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "HypnoSpiral2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "HypnoticSpiral", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Magic", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "MagicSchoolLaboratory", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "/Orig/buhne-dekorativ-kino-276179", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "/Orig/Entrance", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "/Orig/Lounge", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "OutsideCells", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "PaddedCell", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "PaddedCell2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Prison", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "RhythmGame", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "RhythmGameLoading", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SarahBedroom0", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SarahBedroom1", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SarahBedroom2", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SarahBedroom3", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SarahIntro", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Sheet", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SheetWhite", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "Shop", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SlaveMarket", Tag: [BackgroundsTagIndoor] });
        BackgroundsList.push({ Name: "SophieIntro", Tag: [BackgroundsTagIndoor] });
        ChatCreateBackgroundList = BackgroundsGenerateList(BackgroundsTagList);
        ChatRoomMessage({ Content: "Quick-AccessMenu2: You can use more backgrounds now.", Type: "LocalMessage", Sender: Player.MemberNumber });
    }   
	
    else if (content.indexOf("/becomeownlover") == 0) {
        ChatRoomMessage({ Content: "Warning: Uncomfirmed glitch might occur when removing self as lover, during which a random/real lover will be taken Use with risk in mind. Confirm: /becomeownlover yes", Type: "LocalMessage", Sender: Player.MemberNumber });
           if (content.includes("yes")) {
           ServerSend("AccountLovership", { MemberNumber: Player.MemberNumber, Action: "Propose" && "Accept" })
           ServerSend("AccountLovership", { MemberNumber: Player.MemberNumber, Action: "CanOfferBeginWedding" && "Propose" });
           ServerSend("AccountLovership", { MemberNumber: Player.MemberNumber, Action: "CanBeginWedding" && "Accept" });
           ChatRoomMessage({ Content: "Accomplished. Break-up is done via Club Management.", Type: "LocalMessage", Sender: Player.MemberNumber });}
    }
    //consider writing a lover break up code to compensate for glitch, if possible.
	
    else if (content.indexOf("/becomeownowner") == 0) {
        ServerSend("AccountOwnership", { MemberNumber: Player.MemberNumber, Action: "Propose" && "Accept" })
        ServerSend("AccountOwnership", { MemberNumber: Player.MemberNumber, Action: "CanOfferEndTrial" && "Propose" });
        ServerSend("AccountOwnership", { MemberNumber: Player.MemberNumber, Action: "CanEndTrial" && "Accept" });
    }
    //can't end free from owner, due to club's extreme mode preventing yet not allowing owner to break. Stupid...
	
    else if (content.indexOf("/boost") == 0) {
        LogAdd("ModifierLevel", "SkillModifier", 105);
        LogAdd("ModifierDuration", "SkillModifier", CurrentTime + 3600000);
        ChatRoomMessage({ Content: "Quick-AccessMenu2: You feel your senses heightened(bondage/evasion). Can see change in information panel.", Type: "LocalMessage", Sender: Player.MemberNumber });
    }
	
    else if (content.indexOf("/chess") == 0) {
    CollegeChessGameEndALT = function () {
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
    CollegeChessGameStartALT = function (Difficulty) {
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
        ElementPositionFix("DivChessBoard", null, -1000, -480);
}, 2000);
    }
    else {
    ChessOn = false;
    CollegeChessGameEndALT();}
    }
	
    else if (content.indexOf("/clothes") == 0) {
        var targetname = content.substring(8).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterAppearanceFullRandom(target[0], true);
        ChatRoomCharacterUpdate(target[0]);
    }
	
    else if (content.indexOf("/clubmistress") == 0) {
        LogAdd("ClubMistress", "Management");
    }
	
    else if (content.indexOf("/clubslave") == 0) {
        LogAdd("ClubSlave", "Management", CurrentTime + 3600000);
    }
	
    else if ((content.indexOf("/collarremove") == 0) || (content.indexOf("/removecollar") == 0)) {
        ServerSend("ChatRoomChat", { Content: "PlayerOwnerCollarRelease", Type: "Action", Dictionary: [{Tag: "DestinationCharacterName", Text: Player.Name, MemberNumber: Player.MemberNumber}] });
        LogAdd("Released.Collar", "OwnerRule");
        InventoryRemove(Player, "ItemNeck");
        ChatRoomCharacterItemUpdate(Player, "ItemNeck");
    }
	
    else if (content.indexOf("/college") == 0) {
        ChatRoomSetLastChatRoom("");
        ServerSend("ChatRoomLeave", "");
        OnlineGameName = "";
        CommonSetScreen("Room", "CollegeEntrance");
        ChatRoomClearAllElements();
        CollegeEntranceIsWearingTennisClothes = function () { return true; }
        CollegeEntranceIsWearingCollegeClothes = function () { return true; }
        CollegeEntranceIsWearingTennisClothes = function () { return true; }
        CollegeEntranceCanGoTeacher = function () { return true; }
    }
	
    else if (content.indexOf("/colorchanger") == 0) {

        if (content.includes("custom") || content.includes("set") || content.includes("select")) {
            ChatRoomMessage({ Content: "Quick-AccessMenu2: You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
            setTimeout(function() {
                if (CurrentCharacter.FocusGroup.Name) {
                var RandomColor = null;
                var ColorTargetNameCustom = CurrentCharacter;
                    if (ColorTargetNameCustom !== Player) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used colorchanger on you. If this is undesired, blacklist player.", Type: "Whisper", Target: ColorTargetNameCustom.MemberNumber })};


                if (this.ColorTarget1 == undefined) {this.ColorTarget1 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget2 == undefined) {this.ColorTarget2 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget3 == undefined) {this.ColorTarget3 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget4 == undefined) {this.ColorTarget4 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget5 == undefined) {this.ColorTarget5 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget6 == undefined) {this.ColorTarget6 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget7 == undefined) {this.ColorTarget7 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget8 == undefined) {this.ColorTarget8 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget9 == undefined) {this.ColorTarget9 = CurrentCharacter.FocusGroup.Name}
                else if (this.ColorTarget10 == undefined) {this.ColorTarget10 = CurrentCharacter.FocusGroup.Name}

            ColorChangerCustom = function () {
            setTimeout(function() {ColorChangerCustom()},1000);
            RandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            if (this.ColorTarget1) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget1);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget1);};
            if (this.ColorTarget2) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget2);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget2);};
            if (this.ColorTarget3) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget3);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget3);};
            if (this.ColorTarget4) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget4);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget4);};
            if (this.ColorTarget5) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget5);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget5);};
            if (this.ColorTarget6) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget6);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget6);};
            if (this.ColorTarget7) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget7);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget7);};
            if (this.ColorTarget8) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget8);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget8);};
            if (this.ColorTarget9) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget9);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget9);};
            if (this.ColorTarget510) {
            CharacterAppearanceSetColorForGroup(ColorTargetNameCustom, RandomColor, ColorTarget10);ChatRoomCharacterItemUpdate(ColorTargetNameCustom, ColorTarget10);};
            };ColorChangerCustom();DialogLeave();
            }}, 5000);
        }
	    
        else if (content.includes("eyes")) {
            ChatRoomMessage({ Content: "You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
            setTimeout(function() {
                if (CurrentCharacter) {
                var ColorTargetNameEyes = CurrentCharacter;
                ColorChangerEyes = function () {
                setTimeout(function() {ColorChangerEyes()},1000);
                var RandomColor = null;
                RandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                InventoryGet(ColorTargetNameEyes, "Eyes").Color = RandomColor
                InventoryGet(ColorTargetNameEyes, "Eyes2").Color = RandomColor
                ChatRoomCharacterItemUpdate(ColorTargetNameEyes, "Eyes");
                ChatRoomCharacterItemUpdate(ColorTargetNameEyes, "Eyes2");
                };ColorChangerEyes();DialogLeave();
                    if (ColorTargetNameEyes !== Player) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used colorchanger on you. If this is undesired, blacklist player.", Type: "Whisper", Target: ColorTargetNameEyes.MemberNumber })};
            }}, 5000);
        }

        else if (content.includes("hair")) {
            ChatRoomMessage({ Content: "You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
            setTimeout(function() {
                if (CurrentCharacter) {
                var ColorTargetNameHair = CurrentCharacter;
                ColorChangerHair = function () {
                setTimeout(function() {ColorChangerHair()},1000);
                var RandomColor = null;
                RandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                InventoryGet(ColorTargetNameHair, "HairFront").Color = RandomColor
                InventoryGet(ColorTargetNameHair, "HairBack").Color = RandomColor
                ChatRoomCharacterItemUpdate(ColorTargetNameHair, "HairFront");
                ChatRoomCharacterItemUpdate(ColorTargetNameHair, "HairBack");
                };ColorChangerHair();DialogLeave();
                    if (ColorTargetNameHair !== Player) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used colorchanger on you. If this is undesired, blacklist player.", Type: "Whisper", Target: ColorTargetNameHair.MemberNumber })};
            }}, 5000);
        }
	    
        else if (content.includes("stop") || content.includes("reset")) {
            ColorChangerCustom = function () {};
            ColorChangerEyes = function () {};
            ColorChangerHair = function () {};
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
        }
	    
        else if (content.endsWith("/colorchanger")) {
            ChatRoomMessage({ Content: "Quick-Access Menu2: Manual:", Type: "LocalMessage", Sender: Player.MemberNumber });
            ChatRoomMessage({ Content: "To preselect, two choices exist, type: /colorchanger hair or /colorchanger eyes", Type: "LocalMessage", Sender: Player.MemberNumber });
            ChatRoomMessage({ Content: "To manually select area, type: /colorchanger set or /colorchanger select or /colorchangercustom", Type: "LocalMessage", Sender: Player.MemberNumber });
            ChatRoomMessage({ Content: "Manual selection can only target 10 areas at a time, then requires to be reset to reuse, type: /colorchanger stop or /colorchanger reset", Type: "LocalMessage", Sender: Player.MemberNumber });
            ChatRoomMessage({ Content: "Only 1 target can be active at a time.", Type: "LocalMessage", Sender: Player.MemberNumber });
        }
    }
	
    else if (content.indexOf("/cum") == 0) {
        ActivityOrgasmRuined = false;
        ActivityOrgasmStart(Player);
    }  
	
    else if (content.indexOf("/doctor") == 0) {
        ReputationChange('Asylum', 200);
    }
	
    else if (content.indexOf("/erase") == 0) {
        ElementRemove("TextAreaChatLog");
    }
	
    else if (content.indexOf("/gagheavy") == 0) {
        content = SpeechGarbleByGagLevel(6, content.substring(9).trim());
        ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    }
	
    else if (content.indexOf("/gaglight") == 0) {
        content = SpeechGarbleByGagLevel(1, content.substring(9).trim());
        ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" }); 
    }
	
    else if (content.indexOf("/gagtalk") == 0) {
        if (this.GagTalkOff == undefined | this.GagTalkOff == false) {
            SpeechGagLevelLookup = {};
            GagTalkOff = true;
            ChatRoomMessage({ Content: "Quick-AccessMenu2: Gag-talk toggled off.", Type: "LocalMessage", Sender: Player.MemberNumber });}
        else {
            SpeechGagLevelLookup = {
    	    GagTotal4: 20,
    	    GagTotal3: 16,
    	    GagTotal2: 12,
    	    GagTotal: 8,
	    GagVeryHeavy: 7,
    	    GagHeavy: 6,
	    GagMedium: 5,
    	    GagNormal: 4,
	    GagEasy: 3,
    	    GagLight: 2,
    	    GagVeryLight: 1,};
            GagTalkOff = false;
            ChatRoomMessage({ Content: "Quick-AccessMenu2: Gag-talk toggled on.", Type: "LocalMessage", Sender: Player.MemberNumber });}
    }    
	
    else if (content.indexOf("/gh") == 0) {
        content = SpeechGarbleByGagLevel(6, content.substring(3).trim());
        ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    }
	
    else if (content.indexOf("/giveeverything") == 0) {
        ChatRoomMessage({ Content: "Quick-AccessMenu2: Every item in the game now added.", Type: "LocalMessage", Sender: Player.MemberNumber });
        AssetFemale3DCG.forEach(group=>group.Asset.forEach(item=>InventoryAdd(Player, item.Name, group.Group)));
        ServerPlayerInventorySync();
    }
	
    else if (content.indexOf("/gl") == 0) {
        content = SpeechGarbleByGagLevel(1, content.substring(3).trim());
        ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    }
	
    else if (content.indexOf("/headmaid") == 0) {
        LogAdd("LeadSorority", "Maid");
    }
	
    else if (content.indexOf("/hiddenmessages") == 0) {
        if (this.HiddenMessagesOn == undefined || this.HiddenMessagesOn == false) {
           HiddenMessagesOn = true;
           ChatRoomMessage({ Content: "Hidden messages revealed.", Type: "LocalMessage", Sender: Player.MemberNumber });
           (typeof oldChatRoomMessage !== 'undefined') && (ChatRoomMessage=oldChatRoomMessage);//reset
           newChatRoomMessage = function  (data) {
                if (data.Type == "Hidden") {
                ChatRoomMessage({ Content: "HiddenMessage:"+data.Content, Type: "LocalMessage", Sender: Player.MemberNumber }); }
                else { oldChatRoomMessage(data);}}//if modified code unusued, use original
            window.oldChatRoomMessage = ChatRoomMessage;
            window.ChatRoomMessage = newChatRoomMessage;}
        else {
            HiddenMessagesOn = false;
            newChatRoomMessage = function  (data) {}
            ChatRoomMessage({ Content: "Hidden messages hidden.", Type: "LocalMessage", Sender: Player.MemberNumber });}
    }
	
    else if (content.indexOf("/kidnapper") == 0) {
        ReputationChange("Kidnap", 200);
        ReputationChange("Kidnap", -50);
    }
	
    else if (content.indexOf("/leave") == 0) {
        ChatRoomSetLastChatRoom("");
        ServerSend("ChatRoomLeave", "");
        CommonSetScreen("Online", "ChatSearch");
        ChatRoomClearAllElements();
        OnlineGameName = "";
    }
	
    else if (content.indexOf("/kinkydungeon") == 0)  {
        ArcadeKinkyDungeonEnd = function () {
        CommonSetScreen("Online", "ChatRoom");
        document.getElementById("InputChat").style.display = "inline";
        document.getElementById("TextAreaChatLog").style.display = "inline";
        };//rewrite end to return to chatroom and restore chat
        ArcadeDeviousChallengeAllowed = function () {}//null to always allow

        if (content.includes("devious")) {
            if (this.DeviousOn == undefined || this.DeviousOn == false) {
        DeviousOn = true;
        ArcadeDeviousChallenge = true;
        LogAdd("DeviousChallenge", "Arcade", 1, true);
        ChatRoomMessage({ Content: "Quick-AccessMenu2: DeviousChallenge enabled.", Type: "LocalMessage", Sender: Player.MemberNumber });}
            else {
        DeviousOn = false;
        ArcadeDeviousChallenge = false;
        LogDelete("DeviousChallenge", "Arcade", true);
        ChatRoomMessage({ Content: "Quick-AccessMenu2: DeviousChallenge disabled.", Type: "LocalMessage", Sender: Player.MemberNumber });}
        }
        else if (content.includes("cheat")) {
        ChatRoomMessage({ Content: "Quick-AccessMenu2: If cheats aren't loaded first time, quit and restart.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ArcadeRun();
        ArcadeKinkyDungeonStart(ReputationChange("Gaming"));
        document.getElementById("InputChat").style.display = "none";
        document.getElementById("TextAreaChatLog").style.display = "none";
        setTimeout(function() {
        KinkyDungeonRedKeys += 999;
        KinkyDungeonGreenKeys += 999;
        KinkyDungeonBlueKeys += 999;
        KinkyDungeonLockpicks += 999;
        KinkyDungeonAddGold(999999);
        KinkyDungeonEnchantedBlades += 999;
        KinkyDungeonNormalBlades += 999;
        var KinkyDungeonMysticSeals = 999;
        var KinkyDungeonSpells = [
{name: "Firebolt", exhaustion: 1, components: ["Arms"], level:1, type:"bolt", projectile:true, onhit:"", power: 3, delay: 0, range: 50, damage: "fire", speed: 1, playerEffect: {name: "Damage"}},
	{name: "Snare", exhaustion: 1, components: ["Legs"], level:1, type:"inert", projectile:false, onhit:"lingering", lifetime:-1, time: 10, delay: 3, range: 1, damage: "stun", playerEffect: {name: "MagicRope", time: 3}},
    {name: "Fireball", exhaustion: 6, components: ["Arms"], level:4, type:"bolt", projectile:true, onhit:"aoe", power: 4, delay: 0, range: 50, aoe: 1.5, size: 3, lifetime:1, damage: "fire", speed: 1, playerEffect: {name: "Damage"}}, // Throws a fireball in a direction that moves 1 square each turn
	{name: "Icebolt", exhaustion: 4, components: ["Arms"], level:2, type:"bolt", projectile:true, onhit:"", time: 4,  power: 2, delay: 0, range: 50, damage: "ice", speed: 2, playerEffect: {name: "Damage"}},
	{name: "Electrify", exhaustion: 2, components: ["Arms"], level:2, type:"inert", projectile:false, onhit:"aoe", power: 5, time: 1, delay: 1, range: 4, size: 1, aoe: 0.75, lifetime: 1, damage: "electric", playerEffect: {name: "Shock", time: 1}},
	{name: "Shield", exhaustion: 3, components: ["Legs"], level:1, type:"inert", projectile:false, block: 5, onhit:"", power: 0, delay: 1, range: 1.5, size: 1, damage: ""},
	{name: "GreaterShield", exhaustion: 4, components: ["Legs"], level:2, type:"inert", projectile:false, block: 10, onhit:"", power: 0, delay: 5, range: 2, size: 1, damage: ""},
    {name: "Slime", exhaustion: 5, components: ["Legs"], level:3, type:"inert", projectile:false, onhit:"lingering", time: 2, delay: 1, range: 4, size: 3, aoe: 2, lifetime: 3, lifetimeHitBonus: 12, damage: "stun", playerEffect: {name: "SlimeTrap", time: 3}},
	{name: "ChainBolt", exhaustion: 1, components: ["Arms"], level:1, type:"bolt", projectile:true, onhit:"", time: 1,  power: 2, delay: 0, range: 50, damage: "chain", speed: 2, playerEffect: {name: "SingleChain", time: 1}},
	{name: "SlimeBall", exhaustion: 4, components: ["Arms"], level:2, type:"bolt", projectile:true, onhit:"", time: 2,  power: 2.5, delay: 0, range: 50, damage: "glue", speed: 1, trailLifetime: 10, trailDamage:"stun", trail:"lingering", trailChance: 1.0, playerEffect: {name: "SlimeTrap", time: 3}}, 
	{name: "Leap", exhaustion: 5, components: ["Legs"], level:2, type:"inert", projectile:false, onhit:"teleport", delay: 1, lifetime:1, range: 5, damage: ""},
	{name: "Blink", exhaustion: 3, components: ["Verbal"], level:2, type:"inert", projectile:false, onhit:"teleport", delay: 3, range: 3, damage: ""}, 
    {name: "Flash", exhaustion: 3, components: ["Verbal"], level:2, type:"inert", projectile:false, onhit:"aoe", time: 3, delay: 1, range: 2.5, size: 3, aoe: 1.5, lifetime: 1, damage: "stun", playerEffect: {name: "Blind", time: 3}},
	{name: "GreaterFlash", exhaustion: 5, components: ["Verbal"], level:3, type:"inert", projectile:false, onhit:"aoe", time: 4, delay: 1, range: 2.5, size: 5, aoe: 2.5, lifetime: 1, damage: "stun", playerEffect: {name: "Blind", time: 3}},
	{name: "FocusedFlash", exhaustion: 6, components: ["Verbal"], level:4, type:"inert", projectile:false, onhit:"aoe", time: 12, delay: 2, range: 2.5, size: 3, aoe: 1.5, lifetime: 1, damage: "stun", playerEffect: {name: "Blind", time: 12}},
	{name: "Shroud", exhaustion: 4, components: ["Verbal"], level:3, type:"inert", projectile:false, buffs: [{type: "Evasion", power: 0.75, player: true, enemies: true, tags: ["darkness"], range: 1.5}], onhit:"", aoe: 1.5, power: 0, delay: 8, range: 4, size: 3, damage: ""},
	];
            }, 5000);
        }
        else if (content.endsWith("/kinkydungeon")) {
        ArcadeRun();
        ArcadeKinkyDungeonStart(ReputationChange("Gaming"));
        document.getElementById("InputChat").style.display = "none";
        document.getElementById("TextAreaChatLog").style.display = "none";
        setTimeout(function() {
        KinkyDungeonRedKeys += 0;
        KinkyDungeonGreenKeys += 0;
        KinkyDungeonBlueKeys += 0;
        KinkyDungeonLockpicks += 0;
        KinkyDungeonAddGold(0);
        KinkyDungeonEnchantedBlades += 0;
        KinkyDungeonNormalBlades += 0;
        var KinkyDungeonMysticSeals = 0;
        var KinkyDungeonSpells = [];
            }, 5000);

        }    
    }
	
    else if (content.indexOf("/login") == 0) {
        var stringLogin1 = content;
        var stringLogin2 = stringLogin1.split(/[ ,]+/);
        this.LoginName = stringLogin2[1];
        this.LoginPassword = stringLogin2[2];
        ServerSocket.close();
        ServerSocket.open();
        ServerSend("AccountLogin", { AccountName: LoginName, Password: LoginPassword });
        setTimeout(function() {
        ChatRoomClearAllElements();
        }, 3000);
    }
	
    else if (content.indexOf("/maid") == 0) {
        LogAdd("JoinedSorority", "Management");
    }
	
    else if (content.indexOf("/masterkidnapper") == 0) {
        ReputationChange("Kidnap", 200);
    }
	
    else if (content.indexOf("/maxdifficulty") == 0) {
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: "You will never escape your bindings!" }]});
        InventorySetDifficulty(Player, "ItemAddon", 99);
        InventorySetDifficulty(Player, "ItemArms", 99);
        InventorySetDifficulty(Player, "ItemBoots", 99);
        InventorySetDifficulty(Player, "ItemBreast", 99);
        InventorySetDifficulty(Player, "ItemButt", 99);
        InventorySetDifficulty(Player, "ItemDevices", 99);
        InventorySetDifficulty(Player, "ItemEars", 99);
        InventorySetDifficulty(Player, "ItemFeet", 99);
        InventorySetDifficulty(Player, "ItemHands", 99);
        InventorySetDifficulty(Player, "ItemHead", 99);
        InventorySetDifficulty(Player, "ItemHood", 99);
        InventorySetDifficulty(Player, "ItemLegs", 99);
        InventorySetDifficulty(Player, "ItemMisc", 99);
        InventorySetDifficulty(Player, "ItemMouth", 99);
        InventorySetDifficulty(Player, "ItemMouth2", 99);
        InventorySetDifficulty(Player, "ItemMouth3", 99);
        InventorySetDifficulty(Player, "ItemNeck", 99);
        InventorySetDifficulty(Player, "ItemNeckAccessories", 99);
        InventorySetDifficulty(Player, "ItemNeckRestraints", 99);
        InventorySetDifficulty(Player, "ItemNipples", 99);
        InventorySetDifficulty(Player, "ItemNipplesPiercings", 99);
        InventorySetDifficulty(Player, "ItemNose", 99);
        InventorySetDifficulty(Player, "ItemPelvis", 99);
        InventorySetDifficulty(Player, "ItemTorso", 99) 
        InventorySetDifficulty(Player, "ItemVulva", 99);
        InventorySetDifficulty(Player, "ItemVulvaPiercings", 99);
        ServerPlayerInventorySync();
    }
	
    else if (content.indexOf("/maxstatistics") == 0) {
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
        GameLARPLevelProgress(10000);//fix might be needed
        CheatAllow = true;
        LogAdd("BondageCollege", "Import");
        LogAdd("KidnapSophie", "Sarah");
        ChatRoomMessage({ Content: "Quick-AccessMenu2: A few things have to be set manually.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "Asylum, type: /doctor or /nurse versus /patient or /permanentpatient", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "Kidnapper's League, type: /kidnapper or /masterkidnapper", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "Management, type: /mistress or /clubmistress", Type: "LocalMessage", Sender: Player.MemberNumber }); 
        ChatRoomMessage({ Content: "Sorority, type: /maid or /headmaid", Type: "LocalMessage", Sender: Player.MemberNumber }); 
        ChatRoomMessage({ Content: "ClubSlave, type: /clubslave.", Type: "LocalMessage", Sender: Player.MemberNumber });
        ChatRoomMessage({ Content: "To quit any of the above, type: /quitasylum or /quitmanagement or /quitkidnapper or /quitsorority or /quitclubslave", Type: "LocalMessage", Sender: Player.MemberNumber });
    }
	
    else if (content.indexOf("/mindifficulty") == 0) {
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: "You can easily escape your bindings now!" }]});
        InventorySetDifficulty(Player, "ItemAddon", 1);
        InventorySetDifficulty(Player, "ItemArms", 1);
        InventorySetDifficulty(Player, "ItemBoots", 1);
        InventorySetDifficulty(Player, "ItemBreast", 1);
        InventorySetDifficulty(Player, "ItemButt", 1);
        InventorySetDifficulty(Player, "ItemDevices", 1);
        InventorySetDifficulty(Player, "ItemEars", 1);
        InventorySetDifficulty(Player, "ItemFeet", 1);
        InventorySetDifficulty(Player, "ItemHands", 1);
        InventorySetDifficulty(Player, "ItemHead", 1);
        InventorySetDifficulty(Player, "ItemHood", 1);
        InventorySetDifficulty(Player, "ItemLegs", 1);
        InventorySetDifficulty(Player, "ItemMisc", 1);
        InventorySetDifficulty(Player, "ItemMouth", 1);
        InventorySetDifficulty(Player, "ItemMouth2", 1);
        InventorySetDifficulty(Player, "ItemMouth3", 1);
        InventorySetDifficulty(Player, "ItemNeck", 1);
        InventorySetDifficulty(Player, "ItemNeckAccessories", 1);
        InventorySetDifficulty(Player, "ItemNeckRestraints", 1);
        InventorySetDifficulty(Player, "ItemNipples", 1);
        InventorySetDifficulty(Player, "ItemNipplesPiercings", 1);
        InventorySetDifficulty(Player, "ItemNose", 1);
        InventorySetDifficulty(Player, "ItemPelvis", 1);
        InventorySetDifficulty(Player, "ItemTorso", 1) 
        InventorySetDifficulty(Player, "ItemVulva", 1);
        InventorySetDifficulty(Player, "ItemVulvaPiercings", 1);
        ServerPlayerInventorySync();
    }
	
    else if (content.indexOf("/mistress") == 0) {
        LogAdd("ClubMistress", "Management");
        ReputationChange("Dominant", 200);
    }
	
    else if (content.indexOf("/money") == 0) {
        Player.Money = content.substring(6);ServerPlayerSync();
    }
	
    else if (content.indexOf("/naked") == 0) {
        var targetname = content.substring(6).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterNaked(target[0]);
        ChatRoomCharacterUpdate(target[0]);
    } 
	
    else if (content.indexOf("/nurse") == 0) {
        ReputationChange('Asylum', 200);
        ReputationChange('Asylum', -50)
    }
	
    else if (content.indexOf("/outfit") == 0) {
        if (content.includes("reset") || content.includes("revert") ||  content.includes("restore")) {
    Player.Appearance = ChatSearchSafewordAppearance.slice(0);
   // Player.ActivePose = ChatSearchSafewordPose; should not be needed
    CharacterRefresh(Player);
    ChatRoomCharacterUpdate(Player);}
         else if (content.includes("save 1") || content.includes("save1")) {
         ChatRoomMessage({ Content: "You have 5 seconds to click on target. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
         setTimeout(function() {
         this.savedoutfit1 = CurrentCharacter.Appearance.slice(0);
         DialogLeave();
             }, 5000);
        }
         else if (content.includes("save 2") || content.includes("save2")) {
         ChatRoomMessage({ Content: "You have 5 seconds to click on target. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
         setTimeout(function() {
         this.savedoutfit2 = CurrentCharacter.Appearance.slice(0);
         DialogLeave();
             }, 5000);
        }
         else if (content.includes("save 3") || content.includes("save3")) {
         ChatRoomMessage({ Content: "You have 5 seconds to click on target. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
         setTimeout(function() {
         this.savedoutfit3 = CurrentCharacter.Appearance.slice(0);
         DialogLeave();
             }, 5000);
        }
         else if (content.includes("load 1") || content.includes("load1")) {
         ChatRoomMessage({ Content: "You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
         setTimeout(function() {
         CurrentCharacter.Appearance = this.savedoutfit1.slice(0);
         CharacterRefresh(CurrentCharacter);
         ChatRoomCharacterUpdate(CurrentCharacter);
         DialogLeave();
             }, 5000);
         }
         else if (content.includes("load 2") || content.includes("load2")) {
         ChatRoomMessage({ Content: "Quick-AccessMenu2: You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
         setTimeout(function() {
         CurrentCharacter.Appearance = savedoutfit2.slice(0);
         CharacterRefresh(CurrentCharacter);
         ChatRoomCharacterUpdate(CurrentCharacter);
         DialogLeave();
             }, 8000);
         }
         else if (content.includes("load 3") || content.includes("load3")) {
         ChatRoomMessage({ Content: "You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
         setTimeout(function() {
         CurrentCharacter.Appearance = savedoutfit3.slice(0);
         CharacterRefresh(CurrentCharacter);
         ChatRoomCharacterUpdate(CurrentCharacter);
         DialogLeave();
             }, 5000);
         }
        else if (content.endsWith("/outfit")) {
         ChatRoomMessage({ Content: "Quick-Access Menu2: Manual:", Type: "LocalMessage", Sender: Player.MemberNumber });
         ChatRoomMessage({ Content: "To restore your outfit to what it was before entering room, type: /outfit reset or /outfit revert or /outfit restore", Type: "LocalMessage", Sender: Player.MemberNumber });
         ChatRoomMessage({ Content: "Three outfits can be saved then must be reset, save your outfit, type: /outfit save", Type: "LocalMessage", Sender: Player.MemberNumber });
         ChatRoomMessage({ Content: "To reset saved outfits and be able to save new, type: /outfit resetsave or /outfit savereset", Type: "LocalMessage", Sender: Player.MemberNumber });
         ChatRoomMessage({ Content: "To load saved outfits, type: /outfit 1 or /outfit 2 or /outfit 3", Type: "LocalMessage", Sender: Player.MemberNumber });
         ChatRoomMessage({ Content: "Saves lasts only 1 login session.", Type: "LocalMessage", Sender: Player.MemberNumber });}
    }
    else if (content.indexOf("/patient") == 0) {
        ReputationChange('Asylum', -200);
        ReputationChange('Asylum', 50);
    }    
    else if (content.indexOf("/patreoncheats") == 0) {
        CheatValidate = function () { return true; };
        CheatAllow = true;
        CheatRun();
        document.getElementById("InputChat").style.display = "none";
        document.getElementById("TextAreaChatLog").style.display = "none";
        CommonSetScreen("Character", "Cheat");
        CheatExit = function () {//rewrite cheattexit to return to chatroom
	CheatExport();
	CommonSetScreen("Online", "ChatRoom");
        document.getElementById("InputChat").style.display = "inline";
        document.getElementById("TextAreaChatLog").style.display = "inline";}
    }
    else if (content.indexOf("/permanentpatient") == 0) {
        ReputationChange('Asylum', -200);
    }
    else if (content.indexOf("/pose") == 0) {
    var stringPose1 = content;
    var stringPose2 = stringPose1.split(/[ ,]+/);
    var targetname = stringPose2[2];
    if (targetname  == undefined) {targetname = Player.Name};
    var targetfinder = new RegExp('^'+targetname+'', 'i');
    var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
    if (target[0] !== Player) {ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: (Player.Name+" helps pose "+target[0].Name )}] });};

        if (content.includes("kneel")) {
        CharacterSetActivePose(target[0], "Kneel");
        ChatRoomCharacterUpdate(target[0]);}
       else if (content.includes("sleep")) {
        CharacterSetActivePose(target[0], "Hogtied");
        ChatRoomCharacterUpdate(target[0]);}
       else if (content.includes("pet")) {
        CharacterSetActivePose(target[0], "AllFours");
        ChatRoomCharacterUpdate(target[0]);}
       else if (content.includes("stand")) {
        CharacterSetActivePose(target[0], null);
        ChatRoomCharacterUpdate(target[0]);}
       else if (content.includes("suspension")) {
        CharacterSetActivePose(target[0], "Suspension");
        ChatRoomCharacterUpdate(target[0]);}
       else if (content.includes("roof")) {
       CharacterSetFacialExpression(Player, "Emoticon", "Annoyed", 1);
       CharacterSetActivePose(Player, null);ChatRoomCharacterUpdate(Player);
        setTimeout(function() {
        CharacterSetActivePose(Player, "OverTheHead");ChatRoomCharacterUpdate(Player);
        }, 500);
        setTimeout(function() {
         InventoryGet(Player, "Emoticon").Property.OverrideHeight = { Height: 250 };
        CurrentScreen === "ChatRoom"
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
        }, 1000);
        setTimeout(function() {
         CharacterSetActivePose(Player, "Kneel");ChatRoomCharacterUpdate(Player);
        }, 2000);
        setTimeout(function() {
        CharacterSetActivePose(Player, "BaseUpper");
         CharacterSetActivePose(Player, null);
        CharacterSetActivePose(Player, ["Suspension", "Kneel"]);
         InventoryGet(Player, "Emoticon").Property.OverrideHeight = { Height: -300 };
        CurrentScreen === "ChatRoom"
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
        }, 3000);}
        else if (content.includes("jump")) {
        CharacterSetActivePose(Player, null);
        setTimeout(function() {
         InventoryGet(Player, "Emoticon").Property.OverrideHeight = { Height: 150 };
        CharacterSetActivePose(Player, "Kneel");
        CurrentScreen === "ChatRoom"
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
        }, 1000);
        setTimeout(function() {
         InventoryGet(Player, "Emoticon").Property.OverrideHeight = undefined;
        CharacterSetActivePose(Player, null);
        CurrentScreen === "ChatRoom"
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
        }, 2000);
        setTimeout(function() {
         InventoryGet(Player, "Emoticon").Property.OverrideHeight = { Height: 150 };
        CharacterSetActivePose(Player, "Kneel");
        CurrentScreen === "ChatRoom"
        ? ChatRoomCharacterUpdate(Player)
        : CharacterRefresh(Player);
        }, 3000);
        setTimeout(function() {
        CharacterSetActivePose(Player, null);
        delete InventoryGet(Player, 'Emoticon').Property.OverrideHeight;
        CurrentScreen === 'ChatRoom'
      ? ChatRoomCharacterUpdate(Player)
      : CharacterRefresh(Player);
        }, 4000);}
        else if (content.includes("exercise")) {
var Region = undefined;

if (InventoryGet(target[0], "ItemButt") == null) {
InventoryWear(target[0], "AnalHook", "ItemButt", "#272727");
Region = "ItemButt"}
else if (InventoryGet(target[0], "ItemButt").Asset.Name == "AnalHook") {
Region = "ItemButt"}
else if (InventoryGet(target[0], "ItemTorso") == null) {
InventoryWear(target[0], "HempRopeHarness", "ItemTorso", "#272727");
InventoryGet(target[0], "ItemTorso").Property = {Type: "Waist"};
Region = "ItemTorso"}
else if (InventoryGet(target[0], "ItemTorso").Asset.Name == "HempRopeHarness") {
InventoryGet(target[0], "ItemTorso").Property = {Type: "Waist"};
Region = "ItemTorso"}
else if (InventoryGet(target[0], "ItemPelvis") == null) {
InventoryWear(target[0], "HempRope", "ItemPelvis", "#272727");
Region = "ItemPelvis"}
else if (InventoryGet(target[0], "ItemPelvis").Asset.Name == "HempRope") {
Region = "ItemPelvis"}
else {ChatRoomMessage({ Content: "Quick-AccessMenu2.1: You're too heavily tied to excercise.", Type: "LocalMessage", Sender: Player.MemberNumber })};
    CharacterSetActivePose(target[0], null);ChatRoomCharacterUpdate(target[0]);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "OverTheHead");
        ChatRoomCharacterUpdate(target[0]);
        }, 500);
        setTimeout(function() {
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 100};
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
        DialogFocusItem.Property.OverrideHeight = {Height: 350};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 3000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "OverTheHead");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 100};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 4000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "Yoked");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 350};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 5000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "OverTheHead");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 100};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 6000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "Yoked");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 350};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 7000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "OverTheHead");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 100};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 8000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "Yoked");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 350};
        ChatRoomCharacterUpdate(target[0]);
        DialogLeaveItemMenu();
        }, 9000);
        setTimeout(function() {
        CharacterSetActivePose(target[0], "OverTheHead");
        target[0].FocusGroup = AssetGroupGet("Female3DCG", Region);
        DialogExtendItem(InventoryGet(target[0], Region));
        DialogFocusItem.Property.OverrideHeight = {Height: 100};
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
        }, 10000);}
        else if (content.includes("reset")) {
        CharacterSetActivePose(target[0], null);
        delete InventoryGet(target[0], 'Emoticon').Property.OverrideHeight;
        CurrentScreen === 'ChatRoom'
      ? ChatRoomCharacterUpdate(target[0])
      : CharacterRefresh(target[0]);}
        else if (content.endsWith("/pose")) {
    ChatRoomMessage({ Content: "Quick-AccessMenu2: Must include a pose. List: exercise, kneel, sleep, pet, stand, suspension. Only on yourself: jump, roof.", Type: "LocalMessage", Sender: Player.MemberNumber });}
    }
	
    else if (content.indexOf("/quitasylum") == 0) {
        DialogSetReputation("Asylum", 0);
    }
	
    else if (content.indexOf("/quitclubslave") == 0) {
        LogAdd("ClubSlave", "Management", CurrentTime);
        LogAdd("BlockChange", "Rule", CurrentTime);
        ManagementIsClubSlave = function () { return false }
        ManagementClubSlaveDialog = function (Player) {}
        ManagementFinishClubSlave()
    }
	
    else if (content.indexOf("/quitkidnapper") == 0) {
        DialogSetReputation("Kidnap", 0)
    }
	
    else if ((content.indexOf("/quitmanagement") == 0) || content.indexOf("/quitmistress") == 0) {
        LogDelete("ClubMistress", "Management");
        LogDelete("Mistress", "Management");
    }
	
    else if ((content.indexOf("/quitsorority") == 0) ||  content.indexOf("/quitmaid") == 0)  {
	LogDelete("JoinedSorority", "Management");
	LogDelete("LeadSorority", "Maid");
    }
	
    else if (content.indexOf("/randomize") == 0) {
        var targetname = content.substring(10).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterNaked(target[0]);
        CharacterRandomUnderwear(target[0]); 
        CharacterAppearanceFullRandom(target[0], true);
        CharacterFullRandomRestrain(target[0],"ALL");
        ChatRoomCharacterUpdate(target[0]);
    }
	
    else if (content.indexOf("/release") == 0) {
        var targetname = content.substring(8).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterRelease(target[0]);
        ChatRoomCharacterUpdate(target[0]);
    }
	
    else if (content.indexOf("/relog") == 0) {
        ServerSocket.close();
        ServerSocket.open();
    }
	
    else if (content.indexOf("/resetdifficulty") == 0) {
        if (content.includes("yes")) {
        Player.Difficulty = [];
        ChatRoomMessage({ Content: "Quick-AccessMenu2: Difficulty reset, select a new one in settings.", Type: "LocalMessage", Sender: Player.MemberNumber });}
        else {ChatRoomMessage({ Content: "Quick-AccessMenu2: Warning, resetting difficulty will incur a 7-day waiting period to rechange. Confirm by typing: /resetdifficulty yes", Type: "LocalMessage", Sender: Player.MemberNumber })}
    }
	
    else if (content.indexOf("/restrain") == 0) {
        var targetname = content.substring(9).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterFullRandomRestrain(target[0],"ALL");
        ChatRoomCharacterUpdate(target[0]);
    }
	
    else if (content.indexOf("/safewordspecific") == 0) {
        ChatRoomMessage({ Content: "Quick-AccessMenu2: You have 5 seconds to click on target, select area. If successful, will be returned. If not, retry.", Type: "LocalMessage", Sender: Player.MemberNumber });
        setTimeout(function() {
        if (CurrentCharacter !== Player) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has removed "+InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name+" on you via console. If this is undesired, blacklist player.", Type: "Whisper", Target: CurrentCharacter.MemberNumber })};
        CurrentCharacter.Appearance = CurrentCharacter.Appearance.filter(x => (CurrentCharacter.FocusGroup && CurrentCharacter.FocusGroup.Name) ? x.Asset.Group.Name != 
        CurrentCharacter.FocusGroup.Name : true);
        ChatRoomCharacterUpdate(CurrentCharacter);
        DialogLeave();
        }, 5000);
    }
	
    else if (content.indexOf("/search") == 0) {
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
    }
	
    else if ((content.indexOf("/speak") == 0) || (content.indexOf("/mouth") == 0) || (content.indexOf("/speech") == 0)) {
        (typeof OLDtalking !== 'undefined') && (ChatRoomSendChat=OLDtalking); // reset
        NEWtalking = function (){this.msg = ElementValue("InputChat").trim();
        if(!this.msg.startsWith("/")&&!this.msg.startsWith("*")&&!this.msg.startsWith("!")) {
        if(this.msg.length > 10) {RunExpressionAnimation([null, "Grin", "Smirk", null, "Grin", "Smirk", null]);
        } else {RunExpressionAnimation([null, "Grin", "Smirk", null]);}}OLDtalking();}
        this.OLDtalking=ChatRoomSendChat;this.ChatRoomSendChat=NEWtalking;
    }
	
    else if (content.indexOf("/store") == 0) {
        Asset.forEach(e => { if (e.Value < 0) e.Value = 1; });
        ServerSend("ChatRoomLeave", "");
        CommonSetScreen("Room", "Shop");
        ChatRoomSetLastChatRoom("");
        OnlineGameName = "";
        ChatRoomClearAllElements();
    }
	
    else if (content.indexOf("/talkbaby") == 0) {
        ElementValue("InputChat", "");
             if (this.BabyTalkOn == false || this.BabyTalkOn == undefined) {
             BabyTalkOn = true;
             OLDmenu();}
             else {
             BabyTalkOn = false;
             OLDmenu();}
    }
	
    else if (content.indexOf("/talkgag") == 0) {
        if (content.includes("light")) {
           ElementValue("InputChat", "");
           if (this.TalkGagLightOn == false || this.TalkGagLightOn == undefined) {
           TalkGagLightOn = true;}
           else {
           TalkGagLightOn = false;}
        }
        else if (content.includes("heavy")) {
           ElementValue("InputChat", "");
           if (this.TalkGagHeavyOn == false || this.TalkGagHeavyOn == undefined) {
           TalkGagHeavyOn = true;}
           else {
           TalkGagHeavyOn = false;}
        }
    }
	
    else if (content.indexOf("/timercell") == 0) {
        var minutes = content.substring(10).trim();
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: ""+Player.Name+" gets grabbed by two maids and locked in a timer cell for "+minutes+" minutes." }]});
        DialogLentLockpicks = false;
        ChatRoomClearAllElements();
        ServerSend("ChatRoomLeave", "");         
        CharacterDeleteAllOnline();
        CellLock(minutes);
        CharacterFullRandomRestrain(Player,"ALL");
        ChatRoomCharacterUpdate(Player);
    }
	
    else if (content.indexOf("/totalrelease") == 0) {
        var targetname = content.substring(13).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterReleaseTotal(target[0]);
        ChatRoomCharacterUpdate(target[0]);
    }
	
    else if (content.indexOf("/underwear") == 0) {
        var targetname = content.substring(10).trim();
        if (targetname == undefined) {targetname = Player.Name};
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        if ((target[0].Name == Player.Name) == false) {ServerSend("ChatRoomChat", { Content: "Quick-Access Menu2: "+Player.Name+" has used console to alter appearance. If this is undesired, blacklist player.", Type: "Whisper", Target: target[0].MemberNumber })};
        CharacterRandomUnderwear(target[0]);
        ChatRoomCharacterUpdate(target[0]);
    }
	
    else if (content.indexOf("/unrestrict") == 0) {
        if (content.includes("soft")) {
        InventoryGroupIsBlocked  = function (C, GroupName) { return false; }
        InventoryPrerequisiteMessage    = function (C, Prerequisit) { return ""; }
        Player.GameplaySettings.BlindDisableExamine = false;
        Player.Inventory.forEach(item => item.Asset.Enable = true);
        Player.Inventory.forEach(item => item.Asset.Wear = true);
        ChatRoomMessage({ Content: "Quick-AccessMenu2: Unrestricted softly. Can do most things you couldn't do before. Store also includes hidden items. This can only be reset via relog.", Type: "LocalMessage", Sender: Player.MemberNumber });
        }
        else if (content.includes("total")) {
        ChatRoomMessage({ Content: "Quick-AccessMenu2: Unrestricted totally. Can do most things you couldn't do before. Store also includes hidden items. This can only be reset via relog.", Type: "LocalMessage", Sender: Player.MemberNumber });
        Player.CanInteract       = function () { return true; }
        Player.CanWalk           = function () { return true; }
        Player.CanTalk           = function () { return true; }
        Player.IsPlugged         = function () { return false; }
        Player.IsVulvaChaste     = function () { return false; }
        Player.CanChange  = function () { return true; }
        InventoryGroupIsBlocked  = function (C, GroupName) { return false; }
        InventoryPrerequisiteMessage    = function (C, Prerequisit) { return ""; }
        Player.GameplaySettings.BlindDisableExamine = false;
        Player.Inventory.forEach(item => item.Asset.Enable = true);
        Player.Inventory.forEach(item => item.Asset.Wear = true);
        DialogHasKey = function (C, Item) {return true}
        StruggleLockPickProgressStart = function (C, Item) {
        InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
        ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
        DialogLeave()}
        StruggleProgressStart = function (C, PrevItem, NextItem) {
        if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
        if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
        StruggleProgressCurrentMinigame = "Strength";StruggleStrengthStart(C, PrevItem, NextItem);}}else {
        InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
        ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);}}}
        if (content.endsWith("/unrestrict")) {
        ChatRoomMessage({ Content: "Quick-AccessMenu2: Manual. For total, type /unrestrict total. For submissives, type /unrestrict soft. To reset, type /unrestrict reset", Type: "LocalMessage", Sender: Player.MemberNumber });}
        else if (content.includes("reset")) {
        ChatRoomMessage({ Content: "Quick-AccessMenu2: Unrestrict reset.", Type: "LocalMessage", Sender: Player.MemberNumber });
        Player.CanInteract = function () { return (this.Effect.indexOf("Block") < 0)}
        Player.CanTalk = function () {
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
        (this.Effect.indexOf("GagTotal4") < 0)}
        ChatSearchMuffle = function (Text) {
        let ret = Text;
        if (Player.ImmersionSettings && Player.ImmersionSettings.ChatRoomMuffle && Player.GetBlindLevel() > 0) {
        ret = SpeechGarbleByGagLevel(Player.GetBlindLevel() * Player.GetBlindLevel(), Text, true);
        if (ret.length == 0)return "...";return ret;}return ret;}
        Player.CanWalk = function () { return (
        (this.Effect.indexOf("Freeze") < 0) &&
        (this.Effect.indexOf("Tethered") < 0) &&
        ((this.Pose == null) || (this.Pose.indexOf("Kneel") < 0) || (this.Effect.indexOf("KneelFreeze") < 0)))}
        Player.IsPlugged = function () { return (this.Effect.indexOf("IsPlugged") >= 0)}
        Player.IsVulvaChaste = function () { return (this.Effect.indexOf("Chaste") >= 0)}
        Player.CanKneel = function () { return CharacterCanKneel(this)}
        Player.GetBlindLevel = function (eyesOnly = false) { 
        let blindLevel = 0;
        const eyes1 = InventoryGet(this, "Eyes");
        const eyes2 = InventoryGet(this, "Eyes2");
        if (eyes1.Property && eyes1.Property.Expression && eyes2.Property && eyes2.Property.Expression) {
        if ((eyes1.Property.Expression === "Closed") && (eyes2.Property.Expression === "Closed")) {
        blindLevel += DialogFacialExpressionsSelectedBlindnessLevel;}}}
        Player.CanChange  = function (Pose) { return CharacterCanChangeToPose(this, Pose) }
        InventoryGroupIsBlocked = function (C, GroupName, Activity) {
	if (InventoryGroupIsBlockedForCharacter(C, GroupName, Activity)) return true;
	if ((C.ID != 0) && Player.IsEnclose()) return true;
	return false;}
        InventoryPrerequisiteMessage    = function (C, Prerequisit) { return ""; }//too long to restore
        Player.GameplaySettings.BlindDisableExamine = false;//no point
        Player.Inventory.forEach(item => item.Asset.Enable = true);//can't be
        Player.Inventory.forEach(item => item.Asset.Wear = true);//can't be
        DialogHasKey = function (C, Item) {
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
        if (lock != null) {if (lock.Asset.LoverOnly && !C.IsLoverOfPlayer()) return false;
        if (lock.Asset.OwnerOnly && !C.IsOwnedByPlayer()) return false;
        return true;} else return true;}return false;}
        StruggleStrengthStart = function (C, PrevItem, NextItem) {
        var StruggleDiff = StruggleStrengthGetDifficulty(C, PrevItem, NextItem);
        var S = StruggleDiff.difficulty;
        if ((PrevItem && PrevItem.Asset) || (NextItem && NextItem.Asset)) {
        var AudioFile = (NextItem && NextItem.Asset) ? NextItem.Asset.Audio : PrevItem.Asset.Audio;
        if (AudioFile != null) AudioDialogStart("Audio/" + AudioGetFileName(AudioFile) + ".mp3");}
        if (Player.CanInteract()) {StruggleProgress = 200;StruggleProgressPrevItem = PrevItem;
        StruggleProgressNextItem = NextItem;}
        else {StruggleProgress = 0;StruggleProgressAuto = StruggleDiff.auto;
        StruggleProgressPrevItem = PrevItem;StruggleProgressNextItem = NextItem;
        StruggleProgressOperation = StruggleProgressGetOperation(C, PrevItem, NextItem);
        StruggleProgressSkill = StruggleDiff.timer;StruggleProgressChallenge = S * -1;
        StruggleProgressLastKeyPress = 0;StruggleProgressStruggleCount = 0;
        DialogItemToLock = null;DialogMenuButtonBuild(C);
        if ((StruggleProgressAuto < 0) && Player.CanInteract() && (PrevItem == null)) StruggleProgressAuto = 0;
        if ((StruggleProgressAuto < 0) && Player.CanInteract() && (PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && !InventoryItemHasEffect(PrevItem, "Mounted", true)) StruggleProgressAuto = 0;
        DialogAllowBlush = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Blush") == null) || (InventoryGet(C, "Blush").Property == null) || (InventoryGet(C, "Blush").Property.Expression == null)));
        DialogAllowEyebrows = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Eyebrows") == null) || (InventoryGet(C, "Eyebrows").Property == null) || (InventoryGet(C, "Eyebrows").Property.Expression == null)));
        DialogAllowFluids = ((StruggleProgressAuto < 0) && (StruggleProgressChallenge > 0) && (C.ID == 0) && ((InventoryGet(C, "Fluids") == null) || (InventoryGet(C, "Fluids").Property == null) || (InventoryGet(C, "Fluids").Property.Expression == null)));}}
        StruggleProgressStart = function (C, PrevItem, NextItem) {
        if (InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name) == null) {
        if (C != Player || PrevItem == null || ((PrevItem != null) && (!InventoryItemHasEffect(PrevItem, "Lock", true) || DialogCanUnlock(C, PrevItem)) && ((Player.CanInteract() && !InventoryItemHasEffect(PrevItem, "Mounted", true)) || StruggleStrengthGetDifficulty(C, PrevItem, NextItem).auto >= 0))) {
        StruggleProgressCurrentMinigame = "Strength";
        StruggleStrengthStart(C, PrevItem, NextItem);}}
        else if (Player.CanInteract()) {
        ServerSend("ChatRoomChat", { Content: "Beep", Type: "Action", Dictionary: [{Tag: "Beep", Text: Player.Name+" removes the "+InventoryGet(CurrentCharacter, CurrentCharacter.FocusGroup.Name).Asset.Name+" from "+CurrentCharacter.Name+"'s "+CurrentCharacter.FocusGroup.Name }]});InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
        InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);}
        else {StruggleProgressChoosePrevItem = PrevItem;StruggleProgressChooseNextItem = NextItem;StruggleProgressCurrentMinigame = "";StruggleProgress = 0;DialogMenuButtonBuild(Player);StruggleStrengthStart(Player, StruggleProgressChoosePrevItem, StruggleProgressChooseNextItem);}}
        function StruggleLockPickProgressStart(C, Item) {
        StruggleLockPickArousalText = "";StruggleLockPickArousalTick = 0;if (Item) {StruggleLockPickItem = Item;}
        var lock = InventoryGetLock(Item);var LockRating = 1;var LockPickingImpossible = false;if (Item != null && lock) {
        var BondageLevel = Item.Difficulty - Item.Asset.Difficulty;var S = 0;
        S = S + SkillGetWithRatio("LockPicking");if (lock.Asset.PickDifficulty && lock.Asset.PickDifficulty > 0) {
        S = S - lock.Asset.PickDifficulty;LockRating = lock.Asset.PickDifficulty;}
        if (Player.IsEnclose() || Player.IsMounted()) S = S - 2;if (!Player.CanInteract() && (Item != null)) {
        if (InventoryItemHasEffect(Item, "NotSelfPickable", true)){S = S - 50;LockPickingImpossible = true;}else {
        if (InventoryItemHasEffect(InventoryGet(Player, "ItemArms"), "Block", true)) {
        if (Item.Asset.Group.Name != "ItemArms" && Item.Asset.Group.Name != "ItemHands") S = S - 50;else S = S - 2;}
        if (InventoryItemHasEffect(InventoryGet(Player, "ItemHands"), "Block", true)) {
        if (!LogQuery("KeyDeposit", "Cell") && DialogHasKey(Player, Item)) S = S - 4;else S = S - 50;}if (S < -6) {
        LockPickingImpossible = true;}if (!C.CanTalk()) S = S - 1;
        if (InventoryItemHasEffect(InventoryGet(Player, "ItemLegs"), "Block", true)) S = S - 1;
        if (InventoryItemHasEffect(InventoryGet(Player, "ItemFeet"), "Block", true)) S = S - 1;
        if (InventoryGroupIsBlocked(Player, "ItemFeet")) S = S - 1;
        if (Player.IsBlind()) S = S - 1;if (Player.GetDeafLevel() > 0) S = S - Math.Ceiling(Player.GetDeafLevel()/2);}}
        var NumPins = 4;if (LockRating >= 6) NumPins += 2;if (LockRating >= 8) NumPins += 1;
        if (LockRating >= 10) NumPins += 1;if (LockRating >= 11) NumPins += 2;
        StruggleLockPickOrder = [];StruggleLockPickSet = [];StruggleLockPickSetFalse = [];StruggleLockPickOffset = [];
        StruggleLockPickOffsetTarget = [];StruggleLockPickImpossiblePins = [];StruggleLockPickProgressItem = Item;
        StruggleLockPickProgressOperation = StruggleLockPickProgressGetOperation(C, Item);
        StruggleLockPickProgressSkill = Math.floor(NumPins*NumPins/2) + Math.floor(Math.max(0, -S)*Math.max(0, -S));
        StruggleLockPickProgressSkillLose = NumPins*NumPins/2;StruggleLockPickProgressChallenge = S * -1;
        StruggleLockPickProgressCurrentTries = 0;StruggleLockPickSuccessTime = 0;StruggleLockPickFailTime = 0;
        DialogMenuButtonBuild(C);for (let P = 0; P < NumPins; P++) {StruggleLockPickOrder.push(P);
        StruggleLockPickSet.push(false);StruggleLockPickSetFalse.push(false);StruggleLockPickOffset.push(0);
        StruggleLockPickOffsetTarget.push(0);}for (var i = StruggleLockPickOrder.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));var temp = StruggleLockPickOrder[i];
        StruggleLockPickOrder[i] = StruggleLockPickOrder[j];StruggleLockPickOrder[j] = temp;}
        if ((Item.Property == null)) Item.Property = {};if (Item.Property != null)
        if ((Item.Property.LockPickSeed == null) || (typeof Item.Property.LockPickSeed != "string")) {Item.Property.LockPickSeed = CommonConvertArrayToString(StruggleLockPickOrder); StruggleLockPickTotalTries = 0;}
        else {var conv = CommonConvertStringToArray(Item.Property.LockPickSeed);for (let PP = 0; PP < conv.length; PP++) {
        if (typeof conv[PP] != "number") {Item.Property.LockPickSeed = CommonConvertArrayToString(StruggleLockPickOrder);
        conv = StruggleLockPickOrder;break;}}StruggleLockPickOrder = conv;}var PickingImpossible = false;if (S < -6 && LockPickingImpossible) {
        PickingImpossible = true;StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length-1]);
        if (NumPins >= 6) StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length-2]);
        if (NumPins >= 8) StruggleLockPickImpossiblePins.push(StruggleLockPickOrder[StruggleLockPickOrder.length-3]);}
        var NumTries = Math.max(Math.floor(NumPins * (1.5 - 0.3*BondageLevel/10)),
        Math.ceil(NumPins * (3.25 - BondageLevel/10) - Math.max(0, (StruggleLockPickProgressChallenge + BondageLevel/2)*1.5)));	
        StruggleLockPickProgressMaxTries = Math.max(1, NumTries - NumPins);}}}
    }   
	
    else if (content.indexOf("/wardrobe") == 0) {
        var targetname = content.substring(10).trim();
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        target[0].OnlineSharedSettings.AllowFullWardrobeAccess = true;
        target[0].OnlineSharedSettings.BlockBodyCosplay = false;
        ChatRoomClickCharacter(ChatRoomTargetMemberNumber = target[0]);
        ChatRoomChangeClothes();
    }
	
    else if (content.indexOf("/whisper") == 0) {
        var targetname = content.substring(8).trim();
        var targetfinder = new RegExp('^'+targetname+'', 'i');
        var target = ChatRoomCharacter.filter(A => (A.Name.match(targetfinder)));
        ChatRoomTargetMemberNumber = target[0].MemberNumber;
    }          
		else if (content.indexOf('@') == 0) {
			ElementValue("InputChat", content.replace('@', "?"));
			OLDmenu();
			return;
		}
		else if (tenorRe.test(ElementValue("InputChat"))) {
			if (ChatRoomTargetMemberNumber == null) {
				sendHiddenMessageAll(content);
			} else {
				sendHiddenMessageTarget('CheckMediaSupport', ChatRoomTargetMemberNumber);
				sendHiddenMessageTarget('whisper ' + content, ChatRoomTargetMemberNumber);
				var msg = createMessageElement();
				getChatWindowElement().append(msg);
				var senderName = document.createElement("div");
				senderName.innerText = `Whisper to ${findCharacterInRoom(ChatRoomTargetMemberNumber).Name}:`;
				senderName.classList.add("ChatMessage", "ChatMessageWhisper");
				senderName.style.paddingLeft = "0";
				var a = document.createElement("a");
				a.target = '_blank';
				a.href = `${content}`;
				var img = createImgElement(content);
				img.style.maxWidth = '40%';
				img.style.maxHeight = '40%';
				msg.append(senderName);
				a.append(img);
				msg.append(a);
				img.addEventListener('load', () => {
					ElementScrollToEnd("TextAreaChatLog");
				})
			}
			ElementRemove("InputChat");
			return;
		} else if (tubeRe.test(ElementValue("InputChat"))) {
			if (ChatRoomTargetMemberNumber == null) {
				sendHiddenMessageAll(content);
			} else {
				sendHiddenMessageTarget('CheckMediaSupport', ChatRoomTargetMemberNumber);
				sendHiddenMessageTarget('whisper ' + content, ChatRoomTargetMemberNumber);
				var videoCode = content.match(tubeRe)[5];
				var msg = createMessageElement();
				getChatWindowElement().append(msg);
				var link = `https://www.youtube.com/embed/${videoCode}`;
				var senderName = document.createElement("div");
				senderName.innerText = `Whisper to ${findCharacterInRoom(ChatRoomTargetMemberNumber).Name}:`;
				senderName.classList.add("ChatMessage", "ChatMessageWhisper");
				senderName.style.paddingLeft = "0";
				var iframe = document.createElement('iframe');
				iframe.src = link;
				iframe.style.width = '50%';
				iframe.style.height = '8em';
				msg.append(senderName);
				msg.append(iframe);
				iframe.addEventListener('load', () => {
					ElementScrollToEnd("TextAreaChatLog");
				})
			}
			ElementRemove("InputChat");
			return;
		}
	//	DO NOT add new commands past this point. 



//IDEAS
// -make an auto change background and select 10 of which should cycle
//-fix chess sizing 
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




else {//check which speech mode should be used
    if (this.BabyTalkOn == true) {
    content = SpeechBabyTalk({Effect: ["RegressedTalk"]}, content);
    ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" })
    ElementValue("InputChat", "");
    }
    else if (this.TalkGagLightOn == true) {
    content = SpeechGarbleByGagLevel(1, content);
    ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    ElementValue("InputChat", "");
    }
    else if (this.TalkGagHeavyOn == true) {
    content = SpeechGarbleByGagLevel(6, content);
    ServerSend("ChatRoomChat", { "Content":content, "Type":"Chat" });
    ElementValue("InputChat", "");
    }
    else {OLDmenu()}
}ElementValue("InputChat", "");
}}//if modified code above is not called, use original.
var OLDmenu = ChatRoomSendChat;
var ChatRoomSendChat = NEWmenu;
//below is additional stuff

//greeting message.
ChatCommandGreeting = function (data) {
if (CurrentScreen == "ChatRoom" && data.Content == "ServerEnter") {
ChatRoomMessage({ Content: "Quick-AccessMenu2.1: Ready, type /help. For any inquiries, join https://discord.gg/YukepB6RVp", Type: "LocalMessage", Sender: Player.MemberNumber })
ServerSocket.off('ChatRoomMessage', ChatCommandGreeting)}}

setTimeout(function() {
ServerSocket.on('ChatRoomMessage', ChatCommandGreeting);
}, 5000);


//AutoRelog/AntiDisconnect
function LoginDoLogin() {//rewrite login to variabilize credentials for later use
if (!LoginSubmitted && ServerIsConnected) {
this.LoginName = ElementValue("InputName");
this.LoginPassword = ElementValue("InputPassword");
var letters = /^[a-zA-Z0-9]+$/;
if (LoginName.match(letters) && LoginPassword.match(letters) && (LoginName.length > 0) && (LoginName.length <= 20) && (LoginPassword.length > 0) && (LoginPassword.length <= 20)) {
LoginSetSubmitted();
ServerSend("AccountLogin", { AccountName: LoginName, Password: LoginPassword });}
else LoginStatusReset("InvalidNamePassword");}
LoginUpdateMessage();}

function ServerDisconnect(data, close = false) {//rewrite disconnect to prevent relog screen
if (!ServerIsConnected) return;
ChatRoomMessage({ Content: "Disconnected! Reconnecting...", Type: "LocalMessage", Sender: Player.MemberNumber });
	const ShouldRelog = Player.Name != "";
ServerSocket.on("ServerMessage", function (data) { AutoRelog(); });
let msg = data;
if (data) {
console.warn(data);
msg = data;
}
ServerSetConnected(false, msg);
if (close) {
ServerSocket.disconnect();
}}
function AutoRelog () {
    ServerSend("AccountLogin", { AccountName: LoginName, Password: LoginPassword });
    ChatRoomMessage({ Content: "Reconnected!", Type: "LocalMessage", Sender: Player.MemberNumber });
ServerSocket.off("ServerMessage", function (data) { AutoRelog(); });}

//Mouth animator
var expressionAnimation;var expressionAnimationIndex=0;function RunExpressionAnimationStep() {
CharacterSetFacialExpression(Player, "Mouth", expressionAnimation[expressionAnimationIndex++]);
if(expressionAnimationIndex<expressionAnimation.length) {setTimeout(RunExpressionAnimationStep, 1000);
} else {expressionAnimation=null;}}
function RunExpressionAnimation(list) {if(expressionAnimation) {return;}
expressionAnimation=list;expressionAnimationIndex=0;
expressionAnimationEx=InventoryGet(Player, "Mouth");
if(expressionAnimationEx && expressionAnimationEx.Property && expressionAnimationEx.Property.Expression) {
expressionAnimation[expressionAnimation.length-1]=expressionAnimationEx.Property.Expression;//set last to current
}RunExpressionAnimationStep();}
//core functionaliy moved to: /speak /mouth /speech

//text limits remover by rewriting functions
//transport jacket can not be rewritten.
//pet bowl can not be rewritten.
//wooden box can not be rewritten.
//canvas hood can not be rewritetn.
InventoryItemMiscWoodenSignLoad = function () {
DynamicDrawLoadFont(InventoryItemMiscWoodenSignFont);
var C = CharacterGetCurrent();var MustRefresh = false;
if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};
if (DialogFocusItem.Property.Text == null && DialogFocusItem.Property.Text2 == null) {
DialogFocusItem.Property.Text = "";DialogFocusItem.Property.Text2 = "";MustRefresh = true;}
if (MustRefresh) {CharacterRefresh(C);ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);}
const input1 = ElementCreateInput("WoodenSignText1", "text", DialogFocusItem.Property.Text, "50");
const input2 = ElementCreateInput("WoodenSignText2", "text", DialogFocusItem.Property.Text2, "50");
if (input1) input1.pattern = DynamicDrawTextInputPattern;if (input2) input2.pattern = DynamicDrawTextInputPattern;}
//
InventoryItemNeckAccessoriesCustomCollarTagLoad = function () {
var C = CharacterGetCurrent();var MustRefresh = false;
if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};if (DialogFocusItem.Property.Text == null) {
DialogFocusItem.Property.Text = "Tag";MustRefresh = true;}if (MustRefresh) {CharacterRefresh(C);
ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);}
if (!InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {ElementCreateInput("TagText", "text", DialogFocusItem.Property.Text, "30");}}
//
InventoryItemNeckAccessoriesElectronicTagLoad = function () {
var C = CharacterGetCurrent();var MustRefresh = false;
if (DialogFocusItem.Property == null) DialogFocusItem.Property = {};if (DialogFocusItem.Property.Text == null) {
DialogFocusItem.Property.Text = "Tag";MustRefresh = true;}if (MustRefresh) {CharacterRefresh(C);
ChatRoomCharacterItemUpdate(C, DialogFocusItem.Asset.Group.Name);}if (!InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
ElementCreateInput("TagText", "text", DialogFocusItem.Property.Text, "30");}}

//Auto enable patreon cheats. Also allows functionality for submissive mistress. If patched, blank functions.
    CheatValidate = function () { return true; };
    CheatAllow = true;
    CheatActivated.push("ChangeNPCTrait");
    CheatActivated.push("FreeNPCDress");
    CheatActivated.push("MiniGameBonus");
   // CheatActivated.push("FreeCollegeOutfit");withheld to prevent auto cheating
    CheatActivated.push("CantLoseMistress");
    CheatActivated.push("NoLoveDecay");
    CheatActivated.push("AutoShowTraits");
    CheatActivated.push("SkipTrialPeriod");
    CheatActivated.push("BlockRandomKidnap");
    CheatActivated.push("DoubleItemSpeed");
    CheatActivated.push("DoubleMoney");
    CheatActivated.push("DoubleSkill");
    CheatActivated.push("DoubleReputation");
	CheatExport();

//Additionaly rule changers for game. 
Asset.forEach(e => { if (e.Value < 0) e.Value = 1; });
function ManagementCannotBeReleasedExtreme() {}
function ManagementCannotBreakUpLoverNPC(L) { return false}
function ManagementCanBeClubMistress() { return true }      
function ManagementCannotBeClubMistress() {}
function ManagementCannotBeClubMistressLaugh() {}
function ManagementCannotBeClubMistressTime() {}
function ManagementCanBeClubSlave() {return true }
function ManagementCannotBeClubSlaveOwnerLock() {}
function ManagementCannotBeClubSlaveLoverLock() {}
function AsylumEntranceIsWearingNurseClothes() {return true}
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
	ChatRoomMessage({ Content: content, Type: "LocalMessage", Sender: Player.MemberNumber });
	document.querySelector('#TextAreaChatLog').lastChild.style.color = 'silver';
}
function findCharacterInRoom(name) {
	if (!isNaN(name)) {
		var target = ChatRoomCharacter.find(c => c.MemberNumber == name);
	}
	else if (typeof name == 'string') {
		var target = ChatRoomCharacter.find(c => c.Name.toLowerCase() == name.toLowerCase());
	}
	return target;
}
function sendHiddenMessageTarget(message, MemberNumber) {
	ServerSend("ChatRoomChat", { Content: message, Type: "Hidden", Target: MemberNumber });
}
function sendHiddenMessageAll(message) {
	ServerSend("ChatRoomChat", { Content: message, Type: "Hidden" });
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
ServerSocket.on("ChatRoomMessage", function (data) {
	if (data.Content.startsWith("?")) {
		return;
	}
	if (tenorRe.test(data.Content)) {
		var content = data.Content.match(tenorRe);
		if (content) {
			var link = content[0];
			var chatWindow = getChatWindowElement();

			// removes message with link to replace it later with image
			if (tenorRe.test(data.Content) && (data.Type == "Chat" || data.Type == "Whisper")) {
				chatWindow.lastChild.remove();
			}

			var divMsg = createMessageElement();
			var senderName = createCharacterNameElement(data.Sender);
			var img = createImgElement(link);
			var a = document.createElement("a");
			a.target = '_blank';
			a.href = `${content}`;
			img.style.maxWidth = '40%';
			img.style.maxHeight = '40%';

			// add (whisper) to name for whispers to make it more clear that it is a whisper message
			if (data.Content.startsWith('whisper')) {
				senderName.innerHTML = `<span class="ChatMessage ChatMessageWhisper" style="text-shadow: none; padding-left: 0px;">(Whisper)</span> ` + senderName.innerText;
			}

			chatWindow.append(divMsg);
			divMsg.append(senderName);
			divMsg.append(a);
			a.append(img);

			// if scroll position near the end, it scrolls chat automatically
			if (tenorRe.test(data.Content) && (chatWindow.scrollHeight - chatWindow.offsetHeight - chatWindow.scrollTop < 300)) {
				img.addEventListener('load', () => {
					ElementScrollToEnd("TextAreaChatLog");
				})
			}
		}
	} else if (tubeRe.test(data.Content)) {
		var content = data.Content.match(tubeRe);
		if (content && content[5] && content[5].length == 11 && (content.includes("youtube.com") || content.includes("youtu.be"))) {
			var link = `https://www.youtube.com/embed/${content[5]}`;
			var chatWindow = getChatWindowElement();

			// removes message with link to replace it later with image
			if (tubeRe.test(data.Content) && (data.Type == "Chat" || data.Type == "Whisper")) {
				chatWindow.lastChild.remove();
			}
			var divMsg = createMessageElement();
			var senderName = createCharacterNameElement(data.Sender);
			chatWindow.append(divMsg);
			var iframe = document.createElement('iframe');
			iframe.src = link;
			iframe.style.width = '50%';
			iframe.style.height = '8em';

			// add (whisper) to name to make it more clear that it is a whisper message
			if (data.Content.startsWith('whisper')) {
				senderName.innerHTML = `<span class="ChatMessage ChatMessageWhisper" style="text-shadow: none; padding-left: 0px;">(Whisper)</span> ` + senderName.innerText;
			}

			divMsg.append(senderName);
			divMsg.append(iframe);
			if (tenorRe.test(data.Content) && (chatWindow.scrollHeight - chatWindow.offsetHeight - chatWindow.scrollTop < 300)) {
				img.addEventListener('load', () => {
					ElementScrollToEnd("TextAreaChatLog");
				})
			}
		}
	}
});
}, 5000);


function ChatSearchJoin() {//rewrite chatroom join to house auto join
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

AutoJoin = function () {
this.AutoJoinOn = true;
setTimeout(function() {AutoJoin()},1300);
ChatSearchLastQueryJoinTime = CommonTime();
ChatSearchLastQueryJoin = RoomName;
ChatRoomPlayerCanJoin = true;
ServerSend("ChatRoomJoin", { Name: RoomName });
ChatRoomPingLeashedPlayers();
if (CurrentScreen == "ChatRoom") {AutoJoin = function () {};this.AutoJoinOn = false;ElementRemove("AutoJoinAlert");IsOn = false;}
};
if (this.AutoJoinOn == false || this.AutoJoinOn == undefined) {AutoJoin()};


}}
X = X + 660;
if (X > 1500) {
X = 25;
Y = Y + 109;
}}}






