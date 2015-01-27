var BTClusterHits = BTClusterHits || (function () {
    
   var HitsTable = {
       2 : [ 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
       3 : [ 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3],
       4 : [ 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4],
       5 : [ 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5],
       6 : [ 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6],
       7 : [ 2, 2, 3, 4, 4, 4, 4, 6, 6, 7, 7],
       8 : [ 3, 3, 4, 4, 5, 5, 5, 6, 6, 8, 8],
       9 : [ 3, 3, 4, 5, 5, 5, 5, 7, 7, 9, 9],
       10: [ 3, 3, 4, 6, 6, 6, 6, 8, 8,10,10],
       11: [ 4, 4, 5, 7, 7, 7, 7, 8, 8,11,11],
       12: [ 4, 4, 5, 7, 7, 7, 7, 8, 8,12,12],
       13: [ 4, 4, 5, 8, 8, 8, 8,11,11,13,13],
       14: [ 5, 5, 6, 9, 9, 9, 9,11,11,14,14],
       15: [ 5, 5, 6, 9, 9, 9, 9,12,12,15,15],
       16: [ 5, 5, 7,10,10,10,10,13,13,16,16],
       17: [ 5, 5, 7,10,10,10,10,14,14,17,17],
       18: [ 6, 6, 8,11,11,11,11,14,14,18,18],
       19: [ 6, 6, 8,11,11,11,11,15,15,19,19],
       20: [ 6, 6, 9,12,12,12,12,16,16,20,20],
       21: [ 7, 7, 9,13,13,13,13,17,17,21,21],
       22: [ 7, 7, 9,14,14,14,14,18,18,22,22],
       23: [ 7, 7,10,15,15,15,15,19,19,23,23],
       24: [ 8, 8,10,16,16,16,16,20,20,24,24],
       25: [ 8, 8,10,16,16,16,16,21,21,25,25],
       26: [ 9, 9,11,17,17,17,17,21,21,26,26],
       27: [ 9, 9,11,17,17,17,17,22,22,27,27],
       28: [ 9, 9,11,17,17,17,17,23,23,28,28],
       29: [10,10,12,18,18,18,18,23,23,29,29],
       30: [10,10,12,18,18,18,18,24,24,30,30],
       40: [12,12,18,24,24,24,24,32,32,40,40]
   }
   
   function validHits(size){
       if (size in HitsTable) return true;
       return false;
   }
   
    function getClusterHits(shots) {
        var roll = randomInteger(6) + randomInteger(6);
        var hits;
        if (shots === null || _.isUndefined(shots)) return;
        if (validHits(shots)){
            var HitScale = HitsTable[shots];
            
            hits = HitScale[roll-2];
        }
        return hits;
    }
    
    return {
		GetClusterHits: getClusterHits,
        ValidHits: validHits
	};
})();

on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!ch") !== -1) {
        var params = msg.content.split(" ");
        
        //Check and make sure they provided a cluster size
        if (params.length < 2){
            sendChat(msg.who, "Requires a cluster size!")
            return;
        }
        
        //Extract Cluster Size
        var size = params[1].toLowerCase();
        
        //If only cluster size is provided, just return total hits
        if (params.length == 2){
            var hits = BTClusterHits.GetClusterHits(size);
            sendChat(msg.who, "\n" + size + " shots  with " + hits + " hits");
            return;
        }
        
        //If cluster size and arc are provided, also return damage locations
        if (params.length == 3){
        var arc = params[2].toLowerCase();
        var hits;
        hits = BTClusterHits.GetClusterHits(size);
        //Check to see if the requested cluster size exists
        if (BTClusterHits.ValidHits(size)) {
            var hitLocCallback, hitTarget;
            switch (arc) {
                case "la":
                    hitLocCallback = BTHitLocation.ShootLeft(hits);
                    hitTarget = "Left arc";
                    break;
                case "ra":
                    hitLocCallback = BTHitLocation.ShootRight(hits);
                    hitTarget = "Right arc";
                    break;
                case "rr":
                    hitLocCallback = BTHitLocation.ShootRear(hits);
                    hitTarget = "Rear arc";
                    break;
                case "fa":
                default:
                    hitLocCallback = BTHitLocation.ShootFront(hits);
                    hitTarget = "Front arc";
                    break;
            }
            var hist = {};           
            hitLocCallback.forEach(function (a) { if (a in hist) hist[a] ++; else hist[a] = 1; });            
            sendChat(msg.who, "\n" + size + " shots to " + hitTarget + " with " + hits + " hits at: " + 
            JSON.stringify(hist)
                .replace(/[\"{}]/g, "")                
                .replace(/([\w]+):(\d)/g, "$2x $1"));   
        }
    }
    }
});