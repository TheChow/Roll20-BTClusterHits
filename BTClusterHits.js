var BTClusterHits = {

    Cluster2: function Cluster2() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                num_hits = "1";
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                num_hits = "2";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster3: function Cluster3() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
            case 4:
                num_hits = "1";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                num_hits = "2";
                break;
            case 10:
            case 11:
            case 12:
                num_hits = "3";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster4: function Cluster4() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
                num_hits = "1";
                break;
            case 3:
            case 4:
            case 5:
            case 6:
                num_hits = "2";
                break;
            case 7:
            case 8:
            case 9:
            case 10:
                num_hits = "3";
                break;
            case 11:
            case 12:
                num_hits = "4";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster5: function Cluster5() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
                num_hits = "1";
                break;
            case 3:
            case 4:
                num_hits = "2";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "3";
                break;
            case 9:
            case 10:
                num_hits = "4";
                break;
            case 11:
            case 12:
                num_hits = "5";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster6: function Cluster6() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "2";
                break;
            case 4:
            case 5:
                num_hits = "3";
                break;
            case 6:
            case 7:
            case 8:
                num_hits = "4";
                break;
            case 9:
            case 10:
                num_hits = "5";
                break;
            case 11:
            case 12:
                num_hits = "6";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster7: function Cluster7() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "2";
                break;
            case 4:
                num_hits = "3";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "4";
                break;
            case 9:
            case 10:
                num_hits = "6";
                break;
            case 11:
            case 12:
                num_hits = "7";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster9: function Cluster9() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "3";
                break;
            case 4:
                num_hits = "4";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "5";
                break;
            case 9:
            case 10:
                num_hits = "7";
                break;
            case 11:
            case 12:
                num_hits = "9";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster10: function Cluster10() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "3";
                break;
            case 4:
                num_hits = "4";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "6";
                break;
            case 9:
            case 10:
                num_hits = "8";
                break;
            case 11:
            case 12:
                num_hits = "10";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster12: function Cluster12() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "4";
                break;
            case 4:
                num_hits = "5";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "8";
                break;
            case 9:
            case 10:
                num_hits = "10";
                break;
            case 11:
            case 12:
                num_hits = "12";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },

    Cluster15: function Cluster15() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "5";
                break;
            case 4:
                num_hits = "6";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "9";
                break;
            case 9:
            case 10:
                num_hits = "12";
                break;
            case 11:
            case 12:
                num_hits = "15";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster20: function Cluster20() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits = 0;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "6";
                break;
            case 4:
                num_hits = "9";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "12";
                break;
            case 9:
            case 10:
                num_hits = "16";
                break;
            case 11:
            case 12:
                num_hits = "20";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster30: function Cluster30() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "10";
                break;
            case 4:
                num_hits = "12";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "18";
                break;
            case 9:
            case 10:
                num_hits = "24";
                break;
            case 11:
            case 12:
                num_hits = "30";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    },


    Cluster40: function Cluster40() {
        var roll = randomInteger(6) + randomInteger(6);
        var num_hits;
        switch (roll) {
            case 2:
            case 3:
                num_hits = "12";
                break;
            case 4:
                num_hits = "18";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                num_hits = "24";
                break;
            case 9:
            case 10:
                num_hits = "32";
                break;
            case 11:
            case 12:
                num_hits = "40";
                break;
            default:
                num_hits = "0";
        }
        return num_hits;
    }
};

on("chat:message", function (msg) {
    //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
    if (msg.type == "api") {
        var hits, isCluster, numShots;
        if (msg.content.indexOf("!c02") !== -1) {
            numShots = 2;
            hits = BTCluster.Cluster2();
            isCluster = true;
        } else if (msg.content.indexOf("!c03") !== -1) {
            numShots = 3;
            hits = BTCluster.Cluster3();
            isCluster = true;
        } else if (msg.content.indexOf("!c04") !== -1) {
            numShots = 4;
            hits = BTCluster.Cluster4();
            isCluster = true;
        } else if (msg.content.indexOf("!c05") !== -1) {
            numShots = 5;
            hits = BTCluster.Cluster5();
            isCluster = true;
        } else if (msg.content.indexOf("!c06") !== -1) {
            numShots = 6;
            hits = BTCluster.Cluster6();
            isCluster = true;
        } else if (msg.content.indexOf("!c07") !== -1) {
            numShots = 7;
            hits = BTCluster.Cluster7();
            isCluster = true;
        } else if (msg.content.indexOf("!c09") !== -1) {
            numShots = 9;
            hits = BTCluster.Cluster9();
            isCluster = true;
        } else if (msg.content.indexOf("!c10") !== -1) {
            numShots = 10;
            hits = BTCluster.Cluster10();
            isCluster = true;
        } else if (msg.content.indexOf("!c15") !== -1) {
            numShots = 15;
            hits = BTCluster.Cluster15();
            isCluster = true;
        } else if (msg.content.indexOf("!c20") !== -1) {
            numShots = 20;
            hits = BTCluster.Cluster20();
            isCluster = true;
        } else if (msg.content.indexOf("!c30") !== -1) {
            numShots = 30;
            hits = BTCluster.Cluster30();
            isCluster = true;
        } else if (msg.content.indexOf("!c40") !== -1) {
            numShots = 40;
            hits = BTCluster.Cluster40();
            isCluster = true;
        }

        if (isCluster) {
            var loc = msg.content.split(' ')[1] || "f";
            var hitLocCallback, hitTarget;
            switch (loc) {
                case "l":
                    hitLocCallback = BTHitLoc.ShootLeft(hits);
                    hitTarget = "Left arc";
                    break;
                case "r":
                    hitLocCallback = BTHitLoc.ShootRight(hits);
                    hitTarget = "Right arc";
                    break;
                case "f":
                default:
                    hitLocCallback = BTHitLoc.ShootFront(hits);
                    hitTarget = "Front/Back arc";
                    break;
            }
            
            sendChat(msg.who, numShots + " shots to " + hitTarget + " with " + hits + " hits at: " + hitLocCallback);
            
        }
    }
});

/*
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c3") !== -1) {
    sendChat(msg.who, BTCluster.Cluster3() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c04") !== -1) {
    sendChat(msg.who, BTCluster.Cluster4() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c5") !== -1) {
    sendChat(msg.who, BTCluster.Cluster5() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c6") !== -1) {
    sendChat(msg.who, BTCluster.Cluster6() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c7") !== -1) {
    sendChat(msg.who, BTCluster.Cluster7() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c9") !== -1) {
    sendChat(msg.who, BTCluster.Cluster9() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c10") !== -1) {
    sendChat(msg.who, BTCluster.Cluster10() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c12") !== -1) {
    sendChat(msg.who, BTCluster.Cluster12() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c15") !== -1) {
    sendChat(msg.who, BTCluster.Cluster15() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c20") !== -1) {
    sendChat(msg.who, BTCluster.Cluster20() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c30") !== -1) {
    sendChat(msg.who, BTCluster.Cluster30() + " hits");
  }
});
on("chat:message", function(msg) {
  //This allows players to enter !sr <number> to roll a number of d6 dice with a target of 4.
  if(msg.type == "api" && msg.content.indexOf("!c40") !== -1) {
    sendChat(msg.who, BTCluster.Cluster40() + " hits");
  }
});*/