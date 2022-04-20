(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    const cars = require("../data/MOCK_DATA.json");

    const getAllCars = (term,valueTerm) =>
  new Promise((resolve) => {
    let data = Array.from(cars);

    if(term) {

        switch(term) {
            case "car_vin":
                data = data.filter((car) => cars.car_vin.toLowerCase().includes(valueTerm));
                break;
            case "car_manufacturer":
                data = data.filter((car) => cars.car_manufacturer.toLowerCase().includes(valueTerm));
                break;
            case "car_model":
                data = data.filter((car) => cars.car_model.toLowerCase().includes(valueTerm));
                break;
            case "car_model_year":
                data = data.filter((car) => cars.car_model_year.toLowerCase().includes(valueTerm));
               
            default:
                // do nothing
                break;
        }
    }

   // filter cost range
   /* if (manufacturing_from && manufacturing_from != "" && manufacturing_to && manufacturing_to != "") {
        data = data.filter((car) => cars.car_model_year >= manufacturing_from  && cars.car_model_year <= manufacturing_to);
    }*/
        resolve({ caode:200,data: data });
    });

    const getByVin = (car_vin) =>
  new Promise((resolve) => {
    const car = cars.find((car_vin) => car.car_vin === car_vin);

    if (car) {
        resolve({data: Array(car) });
    } else {
        resolve({
            data: { message: `No car found for VIN number ${car_vin}` },
        });
    }
  });

module.exports = {
    getAllCars,
    getByVin,
};
  
},{"../data/MOCK_DATA.json":2}],2:[function(require,module,exports) {
    module.exports=[{"car_vin":"JN1AZ4FH5FM085310","car_manufacturer":"Ford","car_model":"F250","car_model_year":1995},
    {"car_vin":"WA1CGAFEXFD319533","car_manufacturer":"McLaren","car_model":"MP4-12C","car_model_year":2012},
    {"car_vin":"5NPET4AC1AH410095","car_manufacturer":"Plymouth","car_model":"Colt","car_model_year":1994},
    {"car_vin":"WAUXG94F19N985743","car_manufacturer":"Eagle","car_model":"Talon","car_model_year":1990},
    {"car_vin":"WA1VGAFP4EA787199","car_manufacturer":"Dodge","car_model":"Colt","car_model_year":1993},
    {"car_vin":"4JGDF2EE4FA096651","car_manufacturer":"Chrysler","car_model":"Imperial","car_model_year":1993},
    {"car_vin":"1HGCR2F31DA002941","car_manufacturer":"GMC","car_model":"Safari","car_model_year":1995},
    {"car_vin":"2C3CDXFG9DH054000","car_manufacturer":"Lexus","car_model":"LS Hybrid","car_model_year":2011},
    {"car_vin":"JM3KE2BE9F0223054","car_manufacturer":"Toyota","car_model":"Highlander","car_model_year":2012},
    {"car_vin":"5TDDK3DC2CS481338","car_manufacturer":"Lexus","car_model":"IS","car_model_year":2008},
    {"car_vin":"SALAC2D44CA863072","car_manufacturer":"Kia","car_model":"Sportage","car_model_year":2007},
    {"car_vin":"SCBLF44J49C084134","car_manufacturer":"Ford","car_model":"Laser","car_model_year":1986},
    {"car_vin":"WAUEH98E56A243984","car_manufacturer":"Kia","car_model":"Rio","car_model_year":2001},
    {"car_vin":"WUAAU34238N559744","car_manufacturer":"Geo","car_model":"Prizm","car_model_year":1992},
    {"car_vin":"1G6KD54Y64U412130","car_manufacturer":"Mercedes-Benz","car_model":"C-Class","car_model_year":2011},
    {"car_vin":"WVGAV3AX8DW598419","car_manufacturer":"Pontiac","car_model":"GTO","car_model_year":1967},
    {"car_vin":"1GYS4JEF0ER190119","car_manufacturer":"Mercury","car_model":"Sable","car_model_year":1986},
    {"car_vin":"WA1YD54B85N103963","car_manufacturer":"Porsche","car_model":"Cayman","car_model_year":2011},
    {"car_vin":"1NXBE4EE2AZ692435","car_manufacturer":"BMW","car_model":"3 Series","car_model_year":1992},
    {"car_vin":"JN1BY0AR4AM105765","car_manufacturer":"GMC","car_model":"Sonoma","car_model_year":2002},
    {"car_vin":"WBA3B1C5XFP718995","car_manufacturer":"Land Rover","car_model":"Range Rover","car_model_year":2012},
    {"car_vin":"WBAWC7C57AE027201","car_manufacturer":"Ford","car_model":"Windstar","car_model_year":1996},
    {"car_vin":"2T1BU4EE4DC557403","car_manufacturer":"Mercedes-Benz","car_model":"W201","car_model_year":1987},
    {"car_vin":"3CZRE3H52BG771563","car_manufacturer":"Mercedes-Benz","car_model":"S-Class","car_model_year":2012},
    {"car_vin":"WBAEK73495B769824","car_manufacturer":"Dodge","car_model":"Dakota","car_model_year":1998},
    {"car_vin":"2G4WD552671062664","car_manufacturer":"Mercedes-Benz","car_model":"G-Class","car_model_year":2009},
    {"car_vin":"WAUFFAFL9AN519968","car_manufacturer":"Volvo","car_model":"C70","car_model_year":2008},
    {"car_vin":"1C6RD6FK9CS545735","car_manufacturer":"Mazda","car_model":"B-Series","car_model_year":2005},
    {"car_vin":"SCFEBBCF6CG375139","car_manufacturer":"Buick","car_model":"Park Avenue","car_model_year":2001},
    {"car_vin":"WUALNAFG0EN426454","car_manufacturer":"Hummer","car_model":"H2","car_model_year":2009},
    {"car_vin":"KMHEC4A41BA803768","car_manufacturer":"Oldsmobile","car_model":"Silhouette","car_model_year":1997},
    {"car_vin":"WBAUN1C59DV262850","car_manufacturer":"Audi","car_model":"A4","car_model_year":1999},
    {"car_vin":"2G61T5S36E9276652","car_manufacturer":"Buick","car_model":"Rendezvous","car_model_year":2007},
    {"car_vin":"1VWAH7A30CC113770","car_manufacturer":"Lincoln","car_model":"Town Car","car_model_year":2011},
    {"car_vin":"WBALX5C51CC179405","car_manufacturer":"Mazda","car_model":"MPV","car_model_year":1998},
    {"car_vin":"WAUVT58E64A830800","car_manufacturer":"Mercury","car_model":"Mariner","car_model_year":2007},
    {"car_vin":"SCFEBBAK3EG502335","car_manufacturer":"Ford","car_model":"F150","car_model_year":2007},
    {"car_vin":"WAULV44E67N564466","car_manufacturer":"Land Rover","car_model":"Defender","car_model_year":1992},
    {"car_vin":"3C6JD7DP7CG245653","car_manufacturer":"Lincoln","car_model":"Navigator","car_model_year":2007},
    {"car_vin":"KM8JT3AB3BU132450","car_manufacturer":"Mercedes-Benz","car_model":"W201","car_model_year":1990},
    {"car_vin":"JN8AF5MR6DT283425","car_manufacturer":"Mitsubishi","car_model":"3000GT","car_model_year":1996},
    {"car_vin":"WA1LYAFE1AD228298","car_manufacturer":"Ford","car_model":"Probe","car_model_year":1991},
    {"car_vin":"WAUA2AFD4DN274788","car_manufacturer":"Chevrolet","car_model":"Malibu","car_model_year":2002},
    {"car_vin":"SALVP1BG4EH169313","car_manufacturer":"Cadillac","car_model":"Seville","car_model_year":2004},
    {"car_vin":"WBAAW33451E911378","car_manufacturer":"Chevrolet","car_model":"Tahoe","car_model_year":1996},
    {"car_vin":"WBAVA37518N947470","car_manufacturer":"Toyota","car_model":"Camry Solara","car_model_year":2008},
    {"car_vin":"WBAVM1C53EV091506","car_manufacturer":"Plymouth","car_model":"Voyager","car_model_year":1993},
    {"car_vin":"1FTSW2B52AE608583","car_manufacturer":"Mercury","car_model":"Grand Marquis","car_model_year":2002},
    {"car_vin":"SALAC2D43BA776259","car_manufacturer":"BMW","car_model":"7 Series","car_model_year":2002},
    {"car_vin":"1G6DG5E52C0353278","car_manufacturer":"Chevrolet","car_model":"Silverado 1500","car_model_year":2012},
    {"car_vin":"JH4KC1F73EC455715","car_manufacturer":"Chevrolet","car_model":"Astro","car_model_year":1996},
    {"car_vin":"3N1CE2CP4EL124238","car_manufacturer":"Nissan","car_model":"Maxima","car_model_year":2009},
    {"car_vin":"JN8AZ2KR0ET681563","car_manufacturer":"Mitsubishi","car_model":"Eclipse","car_model_year":2012},
    {"car_vin":"1G6DC1E30E0002391","car_manufacturer":"GMC","car_model":"Yukon","car_model_year":1999},
    {"car_vin":"JTDKN3DU1F0976709","car_manufacturer":"Toyota","car_model":"Avalon","car_model_year":2004},
    {"car_vin":"1G6DM57T060479163","car_manufacturer":"Jeep","car_model":"Grand Cherokee","car_model_year":2011},
    {"car_vin":"1D7RV1CP0AS236585","car_manufacturer":"Kia","car_model":"Spectra","car_model_year":2006},
    {"car_vin":"WBAAV33491F560410","car_manufacturer":"Toyota","car_model":"Supra","car_model_year":1995},
    {"car_vin":"1B3CB5HA1AD098517","car_manufacturer":"Ford","car_model":"Escort","car_model_year":1997},
    {"car_vin":"WAUDH78E68A553595","car_manufacturer":"Ford","car_model":"Festiva","car_model_year":1990},
    {"car_vin":"2T1BPRHE5EC469266","car_manufacturer":"Pontiac","car_model":"G8","car_model_year":2009},
    {"car_vin":"SCBCR73W49C403392","car_manufacturer":"Pontiac","car_model":"Bonneville","car_model_year":1968},
    {"car_vin":"19UUA76638A112012","car_manufacturer":"Lexus","car_model":"LS","car_model_year":2004},
    {"car_vin":"KNAFU5A28D5440789","car_manufacturer":"Acura","car_model":"RL","car_model_year":1997},
    {"car_vin":"WAUEG78E26A252620","car_manufacturer":"Mazda","car_model":"MX-3","car_model_year":1995},
    {"car_vin":"1G6AX5S38F0831620","car_manufacturer":"Toyota","car_model":"Tacoma Xtra","car_model_year":1996},
    {"car_vin":"1FTSX2B54AE308931","car_manufacturer":"Ford","car_model":"F150","car_model_year":2010},
    {"car_vin":"WAUGL78EX8A555166","car_manufacturer":"Jaguar","car_model":"S-Type","car_model_year":2000},
    {"car_vin":"WAUHF78P38A702179","car_manufacturer":"Ford","car_model":"Bronco II","car_model_year":1984},
    {"car_vin":"2C3CCAGG7EH483037","car_manufacturer":"Dodge","car_model":"D250 Club","car_model_year":1993},
    {"car_vin":"SCBLC47JX8C527759","car_manufacturer":"Chevrolet","car_model":"Cavalier","car_model_year":1998},
    {"car_vin":"KMHEC4A47DA421277","car_manufacturer":"Bentley","car_model":"Arnage","car_model_year":2008},
    {"car_vin":"WVGEF9BP4FD640163","car_manufacturer":"GMC","car_model":"Safari","car_model_year":1994},
    {"car_vin":"WBAXA5C5XED547953","car_manufacturer":"Saab","car_model":"9000","car_model_year":1996},
    {"car_vin":"WBA3B9C53FJ628265","car_manufacturer":"Kia","car_model":"Sportage","car_model_year":1997},
    {"car_vin":"1G4GA5EC6BF878085","car_manufacturer":"Chrysler","car_model":"Concorde","car_model_year":1999},
    {"car_vin":"1G6AT5SX9E0190104","car_manufacturer":"Dodge","car_model":"Stratus","car_model_year":1998},
    {"car_vin":"WBA3A5C58FP310263","car_manufacturer":"Chevrolet","car_model":"Impala","car_model_year":2006},
    {"car_vin":"3N1CE2CP4FL932803","car_manufacturer":"Maserati","car_model":"GranTurismo","car_model_year":2012},
    {"car_vin":"1G6AC5SX8E0657268","car_manufacturer":"Lexus","car_model":"LS","car_model_year":2005},
    {"car_vin":"WBAYM1C5XDD222139","car_manufacturer":"Lexus","car_model":"RX","car_model_year":2013},
    {"car_vin":"WAUKH78E06A786442","car_manufacturer":"Cadillac","car_model":"CTS","car_model_year":2006},
    {"car_vin":"WAULH54B01N690221","car_manufacturer":"Nissan","car_model":"NV2500","car_model_year":2012},
    {"car_vin":"3GYT4NEF9CG871596","car_manufacturer":"Nissan","car_model":"Sentra","car_model_year":1995},
    {"car_vin":"WAUPL58E04A815850","car_manufacturer":"Ford","car_model":"Transit Connect","car_model_year":2010},
    {"car_vin":"5UXKS4C51E0070744","car_manufacturer":"Audi","car_model":"Cabriolet","car_model_year":1998},
    {"car_vin":"KL4CJDSB7FB147147","car_manufacturer":"Kia","car_model":"Sportage","car_model_year":1996},
    {"car_vin":"JN1CV6FE6CM952571","car_manufacturer":"Bentley","car_model":"Mulsanne","car_model_year":2012},
    {"car_vin":"2C3CDZAG2FH149553","car_manufacturer":"Mitsubishi","car_model":"i-MiEV","car_model_year":2012},
    {"car_vin":"WAUMGBFL9CA052846","car_manufacturer":"Chevrolet","car_model":"Corvette","car_model_year":2005},
    {"car_vin":"1GYS4AEF8ER839181","car_manufacturer":"Fairthorpe","car_model":"Rockette","car_model_year":1960},
    {"car_vin":"2G61P5S35F9907381","car_manufacturer":"Ford","car_model":"Bronco","car_model_year":1994},
    {"car_vin":"WBAEW53423P692657","car_manufacturer":"GMC","car_model":"Sierra 1500","car_model_year":2011},
    {"car_vin":"1FTEW1CF2FF586391","car_manufacturer":"Suzuki","car_model":"X-90","car_model_year":1996},
    {"car_vin":"WBAXH5C59CD310766","car_manufacturer":"Chrysler","car_model":"300M","car_model_year":2001},
    {"car_vin":"JH4KC1F30EC476177","car_manufacturer":"Toyota","car_model":"Paseo","car_model_year":1995},
    {"car_vin":"3D7TT2CT1AG927436","car_manufacturer":"Chevrolet","car_model":"Uplander","car_model_year":2006},
    {"car_vin":"1D4RD4GG6BC088059","car_manufacturer":"Ford","car_model":"Econoline E250","car_model_year":1999},
    {"car_vin":"5N1AR2MM5FC005605","car_manufacturer":"Porsche","car_model":"Carrera GT","car_model_year":2005},
    {"car_vin":"3VW467AT8CM352033","car_manufacturer":"Chrysler","car_model":"Voyager","car_model_year":2001},
    {"car_vin":"1N6AA0EC2DN564386","car_manufacturer":"GMC","car_model":"Yukon XL 1500","car_model_year":2009},
    {"car_vin":"1FMHK7B81BG597249","car_manufacturer":"Suzuki","car_model":"Swift","car_model_year":2001},
    {"car_vin":"WA1CV74L47D301959","car_manufacturer":"Toyota","car_model":"4Runner","car_model_year":2005},
    {"car_vin":"KNDMG4C71E6149258","car_manufacturer":"Ford","car_model":"Ranger","car_model_year":1998},
    {"car_vin":"SCFFDAAMXEG002571","car_manufacturer":"Nissan","car_model":"Altima","car_model_year":1996},
    {"car_vin":"1J4AA2D19AL704806","car_manufacturer":"GMC","car_model":"Safari","car_model_year":2004},
    {"car_vin":"1D4PT2GK3AW661855","car_manufacturer":"Buick","car_model":"Park Avenue","car_model_year":2003},
    {"car_vin":"WAU3GAFR4EA123772","car_manufacturer":"Chrysler","car_model":"Sebring","car_model_year":2008},
    {"car_vin":"WA1CGAFE3CD915353","car_manufacturer":"Dodge","car_model":"Ram Van 1500","car_model_year":1998},
    {"car_vin":"1GYS4FEJ6CR815752","car_manufacturer":"MINI","car_model":"Cooper","car_model_year":2003},
    {"car_vin":"WAUUL78E88A580781","car_manufacturer":"Pontiac","car_model":"Firebird","car_model_year":1968},
    {"car_vin":"KNAGM4A71B5651484","car_manufacturer":"Mitsubishi","car_model":"GTO","car_model_year":1998},
    {"car_vin":"WA1C8BFP7DA700114","car_manufacturer":"Buick","car_model":"LaCrosse","car_model_year":2009},
    {"car_vin":"1GKLRKED2AJ931805","car_manufacturer":"Honda","car_model":"Pilot","car_model_year":2008},
    {"car_vin":"3C3CFFER2CT510514","car_manufacturer":"Mercedes-Benz","car_model":"SLS-Class","car_model_year":2011},
    {"car_vin":"WDDEJ8GB1AA621516","car_manufacturer":"Oldsmobile","car_model":"Silhouette","car_model_year":2004},
    {"car_vin":"1G6DG8E53C0180713","car_manufacturer":"Mercedes-Benz","car_model":"SLK-Class","car_model_year":2005},
    {"car_vin":"JN8AE2KP7D9889073","car_manufacturer":"Chrysler","car_model":"Sebring","car_model_year":2002},
    {"car_vin":"WBALM73529E129954","car_manufacturer":"Buick","car_model":"Riviera","car_model_year":1993},
    {"car_vin":"5YMGY0C54DL649813","car_manufacturer":"Mercury","car_model":"Mystique","car_model_year":1997},
    {"car_vin":"5FRYD3H98GB736528","car_manufacturer":"Hyundai","car_model":"Azera","car_model_year":2010},
    {"car_vin":"WAUEH98E58A823111","car_manufacturer":"Subaru","car_model":"Impreza","car_model_year":1996},
    {"car_vin":"1YVHZ8BAXA5978307","car_manufacturer":"Porsche","car_model":"911","car_model_year":2002},
    {"car_vin":"JN8AF5MV0FT291603","car_manufacturer":"Ram","car_model":"3500","car_model_year":2011},
    {"car_vin":"WBALX5C52CC456322","car_manufacturer":"Hyundai","car_model":"Santa Fe","car_model_year":2007},
    {"car_vin":"5BZAF0AA8FN484537","car_manufacturer":"Suzuki","car_model":"Equator","car_model_year":2009},
    {"car_vin":"1G6DP5ED7B0068680","car_manufacturer":"Chrysler","car_model":"Town & Country","car_model_year":2011},
    {"car_vin":"5N1AN0NW5DN490748","car_manufacturer":"Mercury","car_model":"Grand Marquis","car_model_year":2011},
    {"car_vin":"1G6DK5EV2A0733216","car_manufacturer":"Nissan","car_model":"Armada","car_model_year":2009},
    {"car_vin":"1HGCP2E87AA422797","car_manufacturer":"Subaru","car_model":"Forester","car_model_year":2002},
    {"car_vin":"JTHBE1BL5D5863178","car_manufacturer":"BMW","car_model":"3 Series","car_model_year":1995},
    {"car_vin":"2C3CDXEJ2EH697433","car_manufacturer":"Maserati","car_model":"Biturbo","car_model_year":1986},
    {"car_vin":"1FMCU0E70AK688328","car_manufacturer":"Mercury","car_model":"Grand Marquis","car_model_year":1992},
    {"car_vin":"WBSBR93401E180174","car_manufacturer":"Pontiac","car_model":"Grand Am","car_model_year":1989},
    {"car_vin":"JN1AZ4EH9FM469544","car_manufacturer":"Toyota","car_model":"Sienna","car_model_year":2005},
    {"car_vin":"JHMZE2H5XAS353032","car_manufacturer":"Ford","car_model":"Thunderbird","car_model_year":2006},
    {"car_vin":"ZFBCFABH8EZ917598","car_manufacturer":"Dodge","car_model":"Viper RT/10","car_model_year":1993},
    {"car_vin":"WP0AB2A82FK343338","car_manufacturer":"Dodge","car_model":"Stealth","car_model_year":1993},
    {"car_vin":"WAUVFAFH3CN622605","car_manufacturer":"Mitsubishi","car_model":"Eclipse","car_model_year":1999},
    {"car_vin":"KMHTC6AD0FU998009","car_manufacturer":"Chevrolet","car_model":"Suburban 2500","car_model_year":1992},
    {"car_vin":"5UXKR0C59F0254206","car_manufacturer":"Lotus","car_model":"Esprit","car_model_year":2002},
    {"car_vin":"WAUJT68E24A581870","car_manufacturer":"Pontiac","car_model":"G8","car_model_year":2009},
    {"car_vin":"JN8AZ1MU3AW618784","car_manufacturer":"Mazda","car_model":"MX-5","car_model_year":1995},
    {"car_vin":"5N1AR1NB5AC189363","car_manufacturer":"Cadillac","car_model":"Escalade","car_model_year":2000},
    {"car_vin":"3GTU2YEJ2BG060971","car_manufacturer":"Mercury","car_model":"Mystique","car_model_year":2000},
    {"car_vin":"1FTSX2A50AE492377","car_manufacturer":"Land Rover","car_model":"Range Rover Sport","car_model_year":2011},
    {"car_vin":"JA4AD2A34EZ181145","car_manufacturer":"Mercedes-Benz","car_model":"C-Class","car_model_year":1994},
    {"car_vin":"KNAFK4A60F5043292","car_manufacturer":"Acura","car_model":"Integra","car_model_year":1995},
    {"car_vin":"WAULL44E55N274867","car_manufacturer":"Audi","car_model":"80","car_model_year":1991},
    {"car_vin":"5LMJJ3H50DE904483","car_manufacturer":"Jeep","car_model":"Wrangler","car_model_year":2007},
    {"car_vin":"1FTMF1CW2AK684252","car_manufacturer":"Porsche","car_model":"Panamera","car_model_year":2010},
    {"car_vin":"1G6YX36D285060616","car_manufacturer":"Mitsubishi","car_model":"Raider","car_model_year":2006},
    {"car_vin":"SCBBP9ZA9DC907289","car_manufacturer":"Mercedes-Benz","car_model":"SL-Class","car_model_year":1986},
    {"car_vin":"WA1YD54B72N460031","car_manufacturer":"Kia","car_model":"Amanti","car_model_year":2007},
    {"car_vin":"5N1AN0NU5AC258429","car_manufacturer":"GMC","car_model":"Safari","car_model_year":1993},
    {"car_vin":"JM1CW2BL3F0816871","car_manufacturer":"Chevrolet","car_model":"Blazer","car_model_year":1994},
    {"car_vin":"1G6DH5E59D0129908","car_manufacturer":"Ford","car_model":"Flex","car_model_year":2009},
    {"car_vin":"3C4PDCEG5CT109961","car_manufacturer":"Honda","car_model":"Prelude","car_model_year":1986},
    {"car_vin":"5GAKVBED3CJ631732","car_manufacturer":"Subaru","car_model":"Outback","car_model_year":2010},
    {"car_vin":"5FRYD3H60GB750784","car_manufacturer":"Suzuki","car_model":"Swift","car_model_year":1999},
    {"car_vin":"WBALL5C56EJ634467","car_manufacturer":"GMC","car_model":"Sonoma","car_model_year":2004},
    {"car_vin":"JH4DC53866S073862","car_manufacturer":"Hyundai","car_model":"Accent","car_model_year":2009},
    {"car_vin":"WAU4FAFL6CA634884","car_manufacturer":"Chevrolet","car_model":"Avalanche","car_model_year":2006},
    {"car_vin":"5FRYD4H41GB482185","car_manufacturer":"Mercury","car_model":"Cougar","car_model_year":1999},
    {"car_vin":"2C3CDXDT5EH605329","car_manufacturer":"Toyota","car_model":"Celica","car_model_year":2005},
    {"car_vin":"JTDZN3EU1EJ940444","car_manufacturer":"Isuzu","car_model":"i-350","car_model_year":2006},
    {"car_vin":"1GD12ZCG6BF800096","car_manufacturer":"Saturn","car_model":"Astra","car_model_year":2009},
    {"car_vin":"WAUKH98E76A482536","car_manufacturer":"Saab","car_model":"900","car_model_year":1997},
    {"car_vin":"1FTSX2A53AE357541","car_manufacturer":"Lincoln","car_model":"Town Car","car_model_year":1988},
    {"car_vin":"JN1CV6EK5BM782337","car_manufacturer":"Mitsubishi","car_model":"Lancer","car_model_year":2010},
    {"car_vin":"WAUJC68E95A339191","car_manufacturer":"Chevrolet","car_model":"Silverado 2500","car_model_year":2001},
    {"car_vin":"1FTNX2A51AE865908","car_manufacturer":"Audi","car_model":"A4","car_model_year":2004},
    {"car_vin":"2D4RN3DG8BR132579","car_manufacturer":"Chevrolet","car_model":"Corvette","car_model_year":2006},
    {"car_vin":"1FTWW3A59AE161369","car_manufacturer":"Mitsubishi","car_model":"3000GT","car_model_year":1996},
    {"car_vin":"5FRYD4H27GB959815","car_manufacturer":"Audi","car_model":"Coupe GT","car_model_year":1987},
    {"car_vin":"5J6TF2H51DL318750","car_manufacturer":"Suzuki","car_model":"Kizashi","car_model_year":2012},
    {"car_vin":"WA1EV94L57D894025","car_manufacturer":"Toyota","car_model":"Previa","car_model_year":1993},
    {"car_vin":"4A31K5DF7CE161279","car_manufacturer":"GMC","car_model":"Sierra 1500","car_model_year":2001},
    {"car_vin":"5UXZV8C54DL458142","car_manufacturer":"BMW","car_model":"X5","car_model_year":2001},
    {"car_vin":"WAUSH78EX8A202325","car_manufacturer":"Ford","car_model":"ZX2","car_model_year":2001},
    {"car_vin":"WAUKG94F36N715774","car_manufacturer":"Chevrolet","car_model":"Venture","car_model_year":1999},
    {"car_vin":"JN1AZ4EHXFM249359","car_manufacturer":"BMW","car_model":"Z4 M Roadster","car_model_year":2009},
    {"car_vin":"WAUAT48H95K550237","car_manufacturer":"Ford","car_model":"F-Series","car_model_year":2005},
    {"car_vin":"1G6KF57991U492503","car_manufacturer":"Pontiac","car_model":"Vibe","car_model_year":2010},
    {"car_vin":"YV440MBK6F1742166","car_manufacturer":"Subaru","car_model":"Alcyone SVX","car_model_year":1994},
    {"car_vin":"JA4AS2AW3CU585788","car_manufacturer":"GMC","car_model":"1500 Club Coupe","car_model_year":1994},
    {"car_vin":"WBSKG9C55DJ567510","car_manufacturer":"Toyota","car_model":"Tacoma","car_model_year":1995},
    {"car_vin":"1GYS4CEF6BR562134","car_manufacturer":"Bentley","car_model":"Mulsanne","car_model_year":2012},
    {"car_vin":"1GYS3HEF1BR686991","car_manufacturer":"Maybach","car_model":"62","car_model_year":2007},
    {"car_vin":"3C6LD4AT5CG827081","car_manufacturer":"Mazda","car_model":"929","car_model_year":1988},
    {"car_vin":"3VWKX7AJ1DM355070","car_manufacturer":"BMW","car_model":"Z4","car_model_year":2008},
    {"car_vin":"2C4RDGCG4DR053678","car_manufacturer":"Chrysler","car_model":"Aspen","car_model_year":2007},
    {"car_vin":"3D7TT2CT3BG043161","car_manufacturer":"Toyota","car_model":"Corolla","car_model_year":1998},
    {"car_vin":"1G4GE5GV2AF124358","car_manufacturer":"Jaguar","car_model":"XK Series","car_model_year":2000},
    {"car_vin":"WAUEFBFL0EN144799","car_manufacturer":"Volkswagen","car_model":"Golf","car_model_year":1997},
    {"car_vin":"1G6DH5E57D0326429","car_manufacturer":"Porsche","car_model":"911","car_model_year":1991},
    {"car_vin":"WBAYE8C53ED147985","car_manufacturer":"Pontiac","car_model":"Grand Am","car_model_year":2003},
    {"car_vin":"WAUKFAFL1CN893637","car_manufacturer":"Lotus","car_model":"Esprit","car_model_year":1995},
    {"car_vin":"WBAYF8C59DD822735","car_manufacturer":"BMW","car_model":"745","car_model_year":2004},
    {"car_vin":"1N4AA5AP9DC830965","car_manufacturer":"Jaguar","car_model":"XJ Series","car_model_year":1995}]

 },{}],3:[function(require,module,exports) {
    const { getAllCars, getByVin } = require("./api/controller/car");

    const renderTable = (data) => {
        const tableBody = document.getElementById("table-body");

        if (!tableBody) {
            throw new Error("No table element found");
          }

          const rows = data.reduce(
            (acc, { car_vin, car_manufacturer, car_model, car_model_year }) =>
              acc +
              `<tr>
                <td>${car_vin}</td>
                <td>${car_manufacturer}</td>
                <td>${car_model}</td>
                <td>${car_model_year}</td>
            </tr>`,
            ``
          );
        
          tableBody.innerHTML = rows;
        };

        getAllCars().then(({ data }) => renderTable(data)); 

        const onSubmit = (event) => {
            event.preventDefault();
            const term = event.target.filters.value;
          
            //const manufacturing_from = event.target.manufacturing_from.value;
            //const manufacturing_to = event.target.manufacturing_to.value;
           
                    
            const valueTerm = event.target.input.value;
            
            if(term === `car_vin`) {
                getByVin(valueTerm).then(({ data }) => renderTable(data));
            } else {
                
                getAllCars(term,manufacturing_from, manufacturing_to, valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
            }
          };
          
          const onReset = () => {
            window.location.replace(window.location.pathname);
            getAllCars().then(({ data }) => renderTable(data));
          };
          
          document.getElementById("myForm").addEventListener("submit", onSubmit);
          document.getElementById("myForm").addEventListener("reset", onReset);
          
          },{"./api/controller/car":1}]},{},[3]);

