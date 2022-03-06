# **Project - 1**
## **Member 2:**
 - Name: Manan Shirishbhai Modi
 - Humber ID: N01494916
 - Section: XML and Java Script - ITC-5202-0IA
#
## **Contribution from my side in Project 1:**
    - I created project1.dtd and half of project1.xml file

    - In "project1.dtd" file:
        - I created a root element passengers and say inside the root element we want to have the element called passenger and notice this particular passenger tag can appear the plus means zero or more times.
        - Now let's move to passenger element well in the passenger element we have added ticket,   name, gender, age element.
        - for the attribute we used ATTLIST and now What we are going to do is to put is the tag which is passenger then the name which is id then a type data which is ID and then put #REQUIRED because it's a required attribute.
        - After That We created another ATTLIST atrribute and We include Passenger tag then the attribute name which is passengerClass then a attribute type which is (1|2|3) that means the value must be one from an enumerated list . AFter that we put default value 1.
        - After that we created ticket element with parsed character data.
        - Now We created attribute called fare which is inside the ticket and we used character data as a data type.
        - There is another attribute in ticket element which is foodIncluded we created that. In this attribute we used enumerated list (Y|N) and set "N" as a default value.
        - After that we created another element called name with parsed character data.
        - Now Inside the Name element we have nameId attribute so we created that with ATTLIST and inside this attribute we used ID as a attribute type and set #REQUIRED because this attribute hase no default value but we want this attribute to be present.
        - Now We created another attribute of Name element which is initial. We used CDATA as data type and put "default" as a default value.
        - After that we created element called gender with paesed character data.
        - Now Inside this gender element we have genderId attribute so for that we used ATTLIST and inside this attribute we used ID as data type because this attribute has a unique id and we used #REQUIRED because this attribute hase no default value but we want this attribute to be present.
        - There is another attribute inside gender element which is type so we created that.
        Inside this attribute we used enumerated list (female|male) as a data type and set "female" as a default value.
        - We created another element which is age and pass parsed character data.
        - Inside this element we have ageId attribute so we used ATTLIST for that. Inside this attribute we used ID as a data type because this attribute has a unique id and we used #REQUIRED because this attribute hase no default value but we want this attribute to be present.
        - There is another attribute inside age element which is group so we created that.
        Inside this attribute we used enumerated list (child|teenage|young|middle|senior) as a data type and set "child" as a default value.
    
    - In "project1.xml" file:
        - This file contains Ship Passenger Inventory, meaning the data of passengers travelling in the ship.
        - The root element 'passengers' contains all the passenger data.
        - There are total 45 passenger records in this file.
        - Each passenger element has 4 elements inside it : ticket, name, gender, age
                                         and 2 attributes : a unique id and passengerClass
        - ticket element has two attributes fare and foodIncluded which tells the price of ticket and whether food is included or not.
        - name element has two attributes nameId and initial which gives the unique name id and initials of name.
        - gender element has two attributes genderId and type which gives the unique gender id and type of gender.
        - age element has two attributes ageId and group which gives the unique gender id and group they belong in.

     - Please refer project1.dtd and project1.xml file in my repo