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

