var BTClusterHits = BTClusterHits || (function() {

    var HitsTable = {
         2: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
         3: [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3],
         4: [1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4],
         5: [1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5],
         6: [2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6],
         7: [2, 2, 3, 4, 4, 4, 4, 6, 6, 7, 7],
         8: [3, 3, 4, 4, 5, 5, 5, 6, 6, 8, 8],
         9: [3, 3, 4, 5, 5, 5, 5, 7, 7, 9, 9],
        10: [3, 3, 4, 6, 6, 6, 6, 8, 8, 10, 10],
        11: [4, 4, 5, 7, 7, 7, 7, 8, 8, 11, 11],
        12: [4, 4, 5, 7, 7, 7, 7, 8, 8, 12, 12],
        13: [4, 4, 5, 8, 8, 8, 8, 11, 11, 13, 13],
        14: [5, 5, 6, 9, 9, 9, 9, 11, 11, 14, 14],
        15: [5, 5, 6, 9, 9, 9, 9, 12, 12, 15, 15],
        16: [5, 5, 7, 10, 10, 10, 10, 13, 13, 16, 16],
        17: [5, 5, 7, 10, 10, 10, 10, 14, 14, 17, 17],
        18: [6, 6, 8, 11, 11, 11, 11, 14, 14, 18, 18],
        19: [6, 6, 8, 11, 11, 11, 11, 15, 15, 19, 19],
        20: [6, 6, 9, 12, 12, 12, 12, 16, 16, 20, 20],
        21: [7, 7, 9, 13, 13, 13, 13, 17, 17, 21, 21],
        22: [7, 7, 9, 14, 14, 14, 14, 18, 18, 22, 22],
        23: [7, 7, 10, 15, 15, 15, 15, 19, 19, 23, 23],
        24: [8, 8, 10, 16, 16, 16, 16, 20, 20, 24, 24],
        25: [8, 8, 10, 16, 16, 16, 16, 21, 21, 25, 25],
        26: [9, 9, 11, 17, 17, 17, 17, 21, 21, 26, 26],
        27: [9, 9, 11, 17, 17, 17, 17, 22, 22, 27, 27],
        28: [9, 9, 11, 17, 17, 17, 17, 23, 23, 28, 28],
        29: [10, 10, 12, 18, 18, 18, 18, 23, 23, 29, 29],
        30: [10, 10, 12, 18, 18, 18, 18, 24, 24, 30, 30],
        40: [12, 12, 18, 24, 24, 24, 24, 32, 32, 40, 40],
    };

    function validHits(size) {
        return (size in HitsTable);
    }

    function getClusterHits(shots) {
        var roll = randomInteger(6) + randomInteger(6);
        var hits;
        if (shots === null || _.isUndefined(shots)) return;
        if (validHits(shots)) {
            var HitScale = HitsTable[shots];

            hits = HitScale[roll - 2];
        }
        return hits;
    }

    function getLoc(arc, size) {
        var hitLocCallback, hitTarget;
        var hitObj = {
            arc: "",
            locations: []
        };
        switch (arc) {
            case "la":
                hitLocCallback = BTHitLocation.ShootLeft(size);
                hitTarget = "Left Arc";
                break;
            case "ra":
                hitLocCallback = BTHitLocation.ShootRight(size);
                hitTarget = "Right Arc";
                break;
            case "rr":
                hitLocCallback = BTHitLocation.ShootRear(size);
                hitTarget = "Rear Arc";
                break;
                //            case "fa":
            default:
                hitLocCallback = BTHitLocation.ShootFront(size);
                hitTarget = "Front Arc";
                break;
        }
        hitObj.arc = hitTarget;
        hitObj.locations = hitLocCallback;
        return hitObj;
    }

    return {
        GetClusterHits: getClusterHits,
        ValidHits: validHits,
        GetLoc: getLoc
    };
})();

on("chat:message", function(msg) {
    if (msg.type == "api" && msg.content.indexOf("!ch") !== -1) {
        var hits;
        var params = msg.content.split(" ");
        var hitReport = "";
        //Check and make sure they provided a cluster size
        if (params.length < 2) {
            hitReport = "Requires a cluster size!<br/>" + hitReport;
            return;
        }

        //Extract Cluster Size
        var size = parseInt(params[1]);

        //If only cluster size is provided, just return total hits
        if (params.length == 2) {
            hits = BTClusterHits.GetClusterHits(size);
            sendChat(msg.who, "\n" + size + " shots  with " + hits + " hits");
            return;
        }

        //If cluster size and arc are provided, also return damage locations
        if (params.length >= 3) {
            var arc = params[2].toLowerCase();
            //Default grouping of 1
            var grouping = 1;
            if (params.length > 3) {
                grouping = (parseInt(params[3]));
                if (_.isNaN(grouping)) {
                    hitReport = "Grouping is invalid: " + params[3] + "<br/>" + hitReport;
                } else {
                    grouping = parseInt(params[3]);
                }
            }
            //Check to see if the requested cluster size exists
            if (BTClusterHits.ValidHits(size) && !(_.isNaN(grouping))) {
                hits = BTClusterHits.GetClusterHits(size);
                var groupedHits = BTClusterHits.GetLoc(arc, Math.floor(hits / grouping));

                //Math is fun
                var remainderHits = BTClusterHits.GetLoc(arc, Math.ceil(hits % grouping / grouping));

                var groupedHist = {};
                var remainderHist = {};

                hitReport = "<br/>" + size + " shots to " + groupedHits.arc + " with " + hits + " hits at:";
                for (var loc in groupedHits.locations) {
                    hitReport = hitReport.concat("<br/>" + grouping + " damage to " + groupedHits.locations[loc]);
                }
                for (var loc in remainderHits.locations) {
                    hitReport = hitReport.concat("<br/>" + hits % grouping + " damage to " + remainderHits.locations[loc]);
                }

                //.sort() the hit locations before running the histograms
                //.sort alters the ordering so this must be done after outputting unordered list
                groupedHits.locations.sort().forEach(function(a) {
                    if (a in groupedHist) groupedHist[a] ++;
                    else groupedHist[a] = 1;
                });
                remainderHits.locations.sort().forEach(function(a) {
                    if (a in remainderHist) remainderHist[a] ++;
                    else remainderHist[a] = 1;
                });
                hitReport = hitReport.concat("<br/><hr/>Summary:<br/>");
                log(groupedHist)
                hitReport = hitReport.concat(JSON.stringify(groupedHist)
                    .replace(/[\"{}]/g, "")
                    .replace(/([\w\s]+):(\d+)/g, "$2x" + grouping + " $1")
                    .replace(/,/g, ",<br/>"));
                hitReport = hitReport.concat("<br/>" + JSON.stringify(remainderHist)
                    .replace(/[\"{}]/g, "")
                    .replace(/([\w\s]+):(\d+)/g, "$2x" + hits % grouping + " $1")
                    .replace(/,/g, ",<br/>"));
            } else {
                hitReport = "Invalid Cluster Size: " + params[2] + "<br/>" + hitReport;
            }
        }
        sendChat(msg.who, hitReport);
    }
});