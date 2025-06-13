let liste= document.getElementbyId("liste");
function ajouter() { let nom= document.getElementById("nom").value; 
    let tel= document.getElementbyId("tel").value;
    let mail= document.getElementbyId("mail").value; 
    if(!nom||!tel||!mail) return; 
 let contact= nom -{tel} - $ {mail};
let li= document.createElement("li"); li.textcontent = contact;
li.onclick = () => {li.remove(); sauvegarder();}; liste.appendChild(li);
document.querySelectorAll("input").forEach(input=> input.value=""); sauvegarder();}
function sauvegarder() { localStorage.setItem("contacts", liste.innerHTML); }
window.onload = () => {liste.innerHTML = localStorage.getItem("contacts")||""; 
    [...liste.Children].forEach(li => li.onclick = () => {li.remove(); sauvegarder();});
};