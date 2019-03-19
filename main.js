// List of links to show. Each link has:
// - a title
// - a URL
// - an author (the person who added it)

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
    //-----FEED ARRAY INTO FUNCTION-----//
var content = document.getElementById("content");
var newLinkButton = document.getElementById("newLinkButton");

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

//creat new Link 
newLinkButton.addEventListener('click', function(){
    newLinkButton.classList.add('hidden');
    newLinkForm.classList.remove('hidden');
});

function newFromInput(){
    var newLink = new Object();
        newLink.title = linkTitle.value
        newLink.url = linkURL.value;
        newLink.author = addedBy.value;
        //var jsonString = JSON.stringify(newLink);
        //var jObj = JSON.parse(jsonString);
        //linkList.push(jObj);
        var link =  createLinkElement(newLink);
        content.insertAdjacentElement('afterBegin',link);
}

//add link to list
formGo.addEventListener('click', function(){
    if (linkTitle.value===''||linkURL.value===''||addedBy===''){
        document.getElementById('formHelpSpan').innerHTML='<span style="color:red;font-size:12px;">complete all fields</span>';
    } else {
    newLinkButton.classList.remove('hidden');
    newLinkForm.classList.add('hidden');
    newFromInput();
    document.getElementById("newLinkForm").reset();

}
});

//check input
addedBy.addEventListener('focus',function(){
    document.getElementById('formHelpSpan').innerHTML='';
});