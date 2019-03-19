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

/*var content = document.getElementById("content");
linkList.forEach(function (link) {
    var linkElement = createLinkElement(link);
    content.appendChild(linkElement);
});*/

var addedBy = document.getElementById('addedBy');
var linkTitle = document.getElementById('linkTitle');
var linkURL = document.getElementById('linkURL');
var formGo = document.getElementById('formGo');

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
formGo.addEventListener('click',newFromInput);