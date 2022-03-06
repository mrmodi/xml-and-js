/*
    Submitted By:
        name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Project - 1 - project1.js  
*/

//variables
let passengerInfo;
let classArray = [];

//create template for html
const htmlToElement = (html) => {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.firstChild;
};

//load data using callback
const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
        if (target.readyState == 4 && target.status == 200) {
            callback(target.responseXML);
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};
  
//render html table
const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");

    let nodes = [];

    if (!table) {
        throw new Error("No table element found!!!!");
    }

    //retreive filters from URL
    const withFilters = Boolean(window.location.search);
    if (!withFilters) {

        //if no filters applied then display whole set of records from XML file
        nodes = Array.from(xmlData.documentElement.childNodes).filter(
            ({ nodeName }) => nodeName === `passenger`
        );
        
    } else {

        const params = new URLSearchParams(window.location.search);

        //retrieve filter text from URL
        const filterTextTerm = params.get(`filterText`).toLowerCase();

        //set filter text into HTML control
        const inputControl = document.getElementById(`txtFilter`);
        inputControl.value = filterTextTerm;

        //retrieve entered value of gender from URL
        let genderFilterTerm = params.get(`radioGender`);

        //set radio button checked as per the filter gender's fetched value from URL
        if (genderFilterTerm == `male`)
            document.getElementById(`male`).checked = true;
        else {
            document.getElementById(`female`).checked = true;
        }

        //retrieve entered value of food Included from URL
        let foodIncludedFilterTerm = params.get(`radioFood`);

        //set radio button checked as per the filter food included's fetched value from URL
        if (foodIncludedFilterTerm == `Y`)
            document.getElementById(`Yes`).checked = true;
        else   
            document.getElementById(`No`).checked = true;
        
        //retrieve entered value of passenger Age from URL
        //Using getAll() for retriving all selected Age groups
        const classFilterTerm = params.getAll(`passengerClass`);
        let minClass = 1, maxClass = 1;

        //set checkbox selected as per the filter Age group fetched value from URL
        if (classFilterTerm.length > 0) {
            classFilterTerm.forEach(function(classElement) {
                if (classElement == 1) {
                    document.getElementById(`chkClass1`).checked = true;
                    maxClass = 1;
                } else if (classElement == 2) {
                    document.getElementById(`chkClass2`).checked = true;
                    maxClass = 2;
                } else if (classElement == 3) {
                    document.getElementById(`chkClass3`).checked = true;
                    maxClass = 3;
                } else {
                    minClass = 1;
                    maxClass = 3;
                }

                 //push start range of class into array
                 classArray.push(classElement);
            });
            
            //retreive min and max class from the created array
            //used spread operator(...) here
            minClass = Math.min(...classArray);
            maxClass = Math.max(...classArray);
        } else {
            minClass = 1;
            maxClass = 3;
        }

        //retrieve entered value of Ticket fare from URL
        //Using getAll() for retriving all selected Fare groups
        const ticketFareFilterTerm = params.getAll(`ticketFare`);
        let minFare = 1, maxFare = 1;

        //set checkbox selected as per the filter ticket fare group fetched value from URL
        if (ticketFareFilterTerm.length > 0){

            ticketFareFilterTerm.forEach(function(fareElement) {
                if (fareElement == 30)
                    document.getElementById(`chkFare30`).checked = true;
                else if (fareElement == 60)
                    document.getElementById(`chkFare60`).checked = true;
                else if (fareElement == 90)
                    document.getElementById(`chkFare90`).checked = true;
                else 
                    maxFare = 500;
            });

            //getting max fare when multiple checkbox selected
            maxFare = Math.max(...ticketFareFilterTerm);
        } else {
            maxFare = 500;
        }

        //apply filter into xmlData
        nodes = Array.from(xmlData.documentElement.children).filter(
            ({ attributes, children }) => 
            
                //filter for name from Name node, child node 1
                (children[1].textContent.toLowerCase().includes(filterTextTerm))                       &&

                //filter for gender from Gender node, child node 2
                (children[2].textContent.toLowerCase().trim() === genderFilterTerm)                    &&

                //filter for food included attribute from Ticket node, child node 0
                (children[0].attributes[`foodIncluded`].value.trim() === foodIncludedFilterTerm)       &&

                //filter for coach type attribute from passenger node, parent child
                (
                    attributes[`passengerClass`].value.trim() >= minClass   && 
                    attributes[`passengerClass`].value.trim() <= maxClass
                )                                                                                      &&

                //filter for ticket fare attribute from Ticket node, child node 0
                (
                    children[0].attributes[`fare`].value.trim() >= minFare  && 
                    children[0].attributes[`fare`].value.trim() <= maxFare
                )
        );
                         
    }

    //if nodes is null, then display message
    if(nodes.length <= 0) {
        document.getElementById(`lblDisplayError`).style.display = 'block';
        document.getElementById(`table-main`).style.display = 'none';
    } else {
        document.getElementById(`lblDisplayError`).style.display = 'none';

        //mapping filtered records into HTML table
        const rows = nodes.map((item) => 
                table.appendChild(
                    htmlToElement(
                        `<tr>
                            <td>${item.attributes[0].textContent}</td>
                            <td>${(Array.from(item.getElementsByTagName(`name`))[0]).textContent}</td>
                            <td>${(Array.from(item.getElementsByTagName(`gender`))[0]).textContent}</td>
                            <td>${(Array.from(item.getElementsByTagName(`age`))[0]).textContent}</td>
                            <td>${item.attributes[1].textContent}</td>
                            <td>${(Array.from(item.getElementsByTagName(`ticket`))[0]).textContent}</td>
                            <td>${(Array.from(item.getElementsByTagName(`ticket`))[0]).attributes[0].textContent}</td>
                            <td>${(Array.from(item.getElementsByTagName(`ticket`))[0]).attributes[1].textContent}</td>
                        </tr>`
                                )
                        )
                );
    }
};
  
 //call loadData() 
loadData(`http://localhost:8080/project1.xml`, renderTable);

//Reset operation
const onReset = () => {
    window.location.replace(window.location.pathname);
};