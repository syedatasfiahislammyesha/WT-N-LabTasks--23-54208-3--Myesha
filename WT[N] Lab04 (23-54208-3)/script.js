function showMemberCard(name, age, email, contact, membership) {

    let sections = ["Fiction", "Science", "History"];

    console.log("Library Sections:");

    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i]);
    }

    let category = age < 13 ? "Junior" : "Regular";

    let fee = membership === "Basic" ? 500 :
              membership === "Silver" ? 1000 : 1500;

    document.getElementById("output").innerHTML =
        "<h2>Library Membership Card</h2>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email + "<br>" +
        "Contact Number: " + contact + "<br>" +
        "Member Category: " + category + "<br>" +
        "Membership Plan: " + membership + "<br>" +
        "Application Fee: " + fee + " Tk";
}

document.getElementById("libraryForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    let selectedMembership = document.querySelector('input[name="membership"]:checked');

    if (!selectedMembership) {
        alert("Please select a membership plan.");
        return;
    }

    let membership = selectedMembership.value;

    showMemberCard(name, age, email, contact, membership);

});