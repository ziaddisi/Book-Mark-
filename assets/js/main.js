const inputs = Array.from(document.querySelectorAll(".form-control"));
const bookMarkForm = document.querySelector(".bookMarkForm");
let sites = JSON.parse(localStorage.getItem("sites")) || [];

const displaySites = () => {
    const result = sites.map((site, index) => {
        return `<tr>
            <td>${site.siteName}</td>
            <td>${site.siteUrl}</td>
            <td>${site.userEmail}</td>
            <td>${site.userPassword}</td>
            <td>
                <a href="${site.siteUrl}" target="_blank" class="btn btn-sm btn-success">Visit</a>
                <button onclick="deleteSite(${index})" class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>`;
    });
    document.querySelector(".sites_data").innerHTML = result.join("");
};

bookMarkForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const site = {
        siteName: inputs[0].value.trim(),
        siteUrl: inputs[1].value.trim(),
        userEmail: inputs[2].value.trim(),
        userPassword: inputs[3].value.trim(),
    };

    sites.push(site);
    localStorage.setItem("sites", JSON.stringify(sites));
    bookMarkForm.reset();
    displaySites();
});

function deleteSite(index) {
    sites.splice(index, 1);
    localStorage.setItem("sites", JSON.stringify(sites));
    displaySites();
}

displaySites();
