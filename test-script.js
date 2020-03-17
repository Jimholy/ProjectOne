$(document).ready(function() {

    var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?address=34102&key=AIzaSyDy5Uk_Z46JD4kv3zrgJmTnr3qFjSQGs74"

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response);
            console.log(response.offices[4].officialIndices[0]);

            var senatorSeniorNumber = response.offices[2].officialIndices[0];
            var senatorJuniorNumber = response.offices[2].officialIndices[1];
            var senatorSeniorName = response.officials[senatorSeniorNumber].name;
            var senatorJuniorName = response.officials[senatorJuniorNumber].name;


            var senatorSeniorParty = response.officials[senatorSeniorNumber].party;
            var senatorJuniorParty = response.officials[senatorJuniorNumber].party;
            var representativeNumber = response.offices[3].officialIndices[0];
            var representativeName = response.officials[representativeNumber].name;
            var representativeParty = response.officials[representativeNumber].party;

            var governorNumber = response.offices[4].officialIndices[0];
            var governorName = response.officials[governorNumber].name;
            var governorParty = response.officials[governorNumber].party;

            var partyAffiliation = [senatorSeniorParty, senatorJuniorParty, representativeParty, governorParty];

            console.log("Governor: " + governorName);
            console.log("Senior Senator: " + senatorSeniorName);
            console.log("Junior Senator: " + senatorJuniorName);
            console.log("Representative: " + representativeName);

            console.log(senatorSeniorParty);
            console.log(senatorJuniorParty);

            console.log(representativeParty);
            console.log(governorParty);
            console.log(partyAffiliation);


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