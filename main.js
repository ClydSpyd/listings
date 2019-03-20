var linkList = [
    {
        title: "Kottke",
        url: "http://kottke.org",
        author: "brett.suggs"
    },
    {
        title: "National Geographic",
        url: "http://www.nationalgeographic.com",
        author: "jessica"
    },
    {
        title: "American Museum of Natural History",
        url: "http://www.amnh.org",
        author: "aurora.nicole"
    }
];

//check local storage for entries
if(localStorage.getItem('newArrayItem')!==null) {
    var storage = JSON.parse(localStorage['newArrayItem']);
    linkList.push(storage);}

    //-----ELEMENT CREATOR-----//
function createLinkElement(link) {
    var linktitle = document.createElement("a");
    linktitle.href = link.url;
    linktitle.style.color = "#428bca";
    linktitle.style.textDecoration = "none";
    linktitle.style.marginRight = "5px";
    linktitle.appendChild(document.createTextNode(link.title));

    var linkUrl = document.createElement("span");
    linkUrl.appendChild(document.createTextNode(link.url));

    var titleLine = document.createElement("h4");
    titleLine.style.margin = "0px";
    titleLine.appendChild(linktitle);
    titleLine.appendChild(linkUrl);

    var detailsLine = document.createElement("span");
    detailsLine.appendChild(document.createTextNode("Added by " + link.author));

    var linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(titleLine);
    linkDiv.appendChild(detailsLine);

    return linkDiv;
}
    //-----PASS ARRAY TO FUNCTION ITEM BY ITEM-----//
var content = document.getElementById("content");
var newLinkButton = document.getElementById("newLinkButton");
newLinkButton.focus();

linkList.forEach(function (linkListItem) {
    var linkElement = createLinkElement(linkListItem);
    content.appendChild(linkElement);
});


    //-----NEW LINK FUNCTIONALITY-----//
var addedBy = document.getElementById('addedBy');
var linkTitle = document.getElementById('linkTitle');
var linkURL = document.getElementById('linkURL');
var formGo = document.getElementById('formGo');
var newLinkForm = document.getElementById('newLinkForm');

//show form
newLinkButton.addEventListener('click', function(){
    newLinkButton.classList.add('hidden');
    newLinkForm.classList.remove('hidden');
    addedBy.focus();
});

//create new Link 
function newFromInput(){
    var newLink = new Object();
        newLink.title = linkTitle.value
        newLink.url = linkURL.value;
        newLink.author = addedBy.value;
        var link =  createLinkElement(newLink);
        content.insertAdjacentElement('afterBegin',link);

        //save new entry to local storage//
        var jsonString = JSON.stringify(newLink);
        localStorage.setItem('newArrayItem',jsonString);
        
        //save multiple entries to local storage//
        /*if(localStorage.getItem('newArrayItem')===null) {
        var jsonString = JSON.stringify(newLink);
        localStorage.setItem('newArrayItem',jsonString);}
        else {
        var existingStorage=localStorage.getItem('newArrayItem',jsonString);
        var jsonString = JSON.stringify(newLink);
        existingStorage+=jsonString;
        localStorage.setItem('newArrayItem',existingStorage);
        }*/

        //add new entry to array, push array to local storage
        /*var jObj = JSON.parse(jsonString);
        linkList.push(jObj);
        var JSONreadyLinks = JSON.stringify(linkList);
        localStorage.setItem('links',JSONreadyLinks);*/
        
};

//check input, add link to list
formGo.addEventListener('click', function(){
    if (linkTitle.value===''||linkURL.value===''||addedBy===''){
        document.getElementById('formHelpSpan').innerHTML='<span style="color:red;font-size:12px;">complete all fields</span>';
        
        //clear help message
        addedBy.addEventListener('focus',function(){
            document.getElementById('formHelpSpan').innerHTML='';
        });
    } else {
    newLinkButton.classList.remove('hidden');
    newLinkForm.classList.add('hidden');
    newFromInput();
    document.getElementById("newLinkForm").reset();

}
});
