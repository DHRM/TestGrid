document.addEventListener("DOMContentLoaded", function() {
    const data = [
        { id: 1, nome: "John Doe", email: "john@example.com" },
        { id: 2, nome: "Jane Doe", email: "jane@example.com" },
        { id: 3, nome: "Bill Gates", email: "bill@example.com" },
    ];

    const tbody = document.querySelector("#data-grid tbody");

    data.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td><button class="btn-acao">Ação</button></td>
        `;

        tbody.appendChild(tr);
    });
});

function toggleFilter(columnIndex) {
    const inputs = document.querySelectorAll(".filter-input");
    const input = inputs[columnIndex];
    if (input.style.display === "none" || input.style.display === "") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}

function filterTable(columnIndex) {
    const input = document.getElementsByTagName('input')[columnIndex];
    const filter = input.value.toUpperCase();
    const table = document.getElementById("data-grid");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[columnIndex];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}