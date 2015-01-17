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
    if (msg.type == "api") {
        var hits, isCluster, numShots;
        if (msg.content.indexOf("!c02") !== -1) {
            numShots = 2;
            hits = BTClusterHits.Cluster2();
            isCluster = true;
        } else if (msg.content.indexOf("!c03") !== -1) {
            numShots = 3;
            hits = BTClusterHits.Cluster3();
            isCluster = true;
        } else if (msg.content.indexOf("!c04") !== -1) {
            numShots = 4;
            hits = BTClusterHits.Cluster4();
            isCluster = true;
        } else if (msg.content.indexOf("!c05") !== -1) {
            numShots = 5;
            hits = BTClusterHits.Cluster5();
            isCluster = true;
        } else if (msg.content.indexOf("!c06") !== -1) {
            numShots = 6;
            hits = BTClusterHits.Cluster6();
            isCluster = true;
        } else if (msg.content.indexOf("!c07") !== -1) {
            numShots = 7;
            hits = BTClusterHits.Cluster7();
            isCluster = true;
        } else if (msg.content.indexOf("!c09") !== -1) {
            numShots = 9;
            hits = BTClusterHits.Cluster9();
            isCluster = true;
        } else if (msg.content.indexOf("!c10") !== -1) {
            numShots = 10;
            hits = BTClusterHits.Cluster10();
            isCluster = true;
        } else if (msg.content.indexOf("!c12") !== -1) {
            numShots = 12;
            hits = BTClusterHits.Cluster12();
            isCluster = true;
        } else if (msg.content.indexOf("!c15") !== -1) {
            numShots = 15;
            hits = BTClusterHits.Cluster15();
            isCluster = true;
        } else if (msg.content.indexOf("!c20") !== -1) {
            numShots = 20;
            hits = BTClusterHits.Cluster20();
            isCluster = true;
        } else if (msg.content.indexOf("!c30") !== -1) {
            numShots = 30;
            hits = BTClusterHits.Cluster30();
            isCluster = true;
        } else if (msg.content.indexOf("!c40") !== -1) {
            numShots = 40;
            hits = BTClusterHits.Cluster40();
            isCluster = true;
        }

        if (isCluster) {
            var loc = msg.content.split(' ')[1] || "f";
            var hitLocCallback, hitTarget;
            switch (loc) {
                case "l":
                    hitLocCallback = BTHitLocation.ShootLeft(hits);
                    hitTarget = "Left arc";
                    break;
                case "r":
                    hitLocCallback = BTHitLocation.ShootRight(hits);
                    hitTarget = "Right arc";
                    break;
                case "f":
                default:
                    hitLocCallback = BTHitLocation.ShootFront(hits);
                    hitTarget = "Front/Back arc";
                    break;
            }
            var hist = {};           
            hitLocCallback.forEach(function (a) { if (a in hist) hist[a] ++; else hist[a] = 1; })            
            sendChat(msg.who, numShots + " shots to " + hitTarget + " with " + hits + " hits at: " + JSON.stringify(hist).replace(/\"/g, "").replace("{", "").replace("}", "").replace(/([\w]+):(\d)/g, "$2x $1"));       
        }
    }
});
