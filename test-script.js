$(document).ready(function() {

    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?address=34102&key=AIzaSyDy5Uk_Z46JD4kv3zrgJmTnr3qFjSQGs74"

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);
            console.log(response.offices[4].officialIndices[0]);

            // Define variables for senator index numbers and senator names and senator party
            var senatorSeniorNumber = response.offices[2].officialIndices[0];
            var senatorJuniorNumber = response.offices[2].officialIndices[1];
            var senatorSeniorName = response.officials[senatorSeniorNumber].name;
            var senatorJuniorName = response.officials[senatorJuniorNumber].name;
            var senatorSeniorParty = response.officials[senatorSeniorNumber].party;
            var senatorJuniorParty = response.officials[senatorJuniorNumber].party;

            // Define variables for representative index numbers and representative names and senator party
            var representativeNumber = response.offices[3].officialIndices[0];
            var representativeName = response.officials[representativeNumber].name;
            var representativeParty = response.officials[representativeNumber].party;

            // Define variables for governor index numbers and governor names and senator party
            var governorNumber = response.offices[4].officialIndices[0];
            var governorName = response.officials[governorNumber].name;
            var governorParty = response.officials[governorNumber].party;

            // Create array to hold party affiliations
            var partyAffiliation = [senatorSeniorParty, senatorJuniorParty, representativeParty, governorParty];

            // Console log checks
            console.log("Governor: " + governorName);
            console.log("Senior Senator: " + senatorSeniorName);
            console.log("Junior Senator: " + senatorJuniorName);
            console.log("Representative: " + representativeName);

            // Create for loop to cycle through party affiliation array and count number of republicans / democrats / independents
            var i;
            for (i = 0; i < partyAffiliation.length; i++) {
                if (partyAffiliation[i] === "Republican Party") {
                    console.log("BAD GUY");
                }
                if (partyAffiliation[i] === "Democratic Party") {
                    console.log("GOOD GUY");
                }
                if (partyAffiliation[i] === "Nonpartisan") {
                    console.log("OKAY GUY");
                }

            }

        })


    // End of listener
})