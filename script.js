document.addEventListener("DOMContentLoaded", () => {
    const invoiceDate = document.getElementById("invoice-date");
    const serviceList = document.getElementById("service-list");
    const invoiceTotal = document.getElementById("invoice-total");
    const addServiceBtn = document.getElementById("add-service-btn");

    // Set current date
    invoiceDate.textContent = new Date().toLocaleDateString();

    // Initialize total amount
    let totalAmount = 0;

    // Add service functionality
    addServiceBtn.addEventListener("click", () => {
        const description = document.getElementById("service-description").value;
        const quantity = parseInt(document.getElementById("service-quantity").value, 10);
        const unitPrice = parseFloat(document.getElementById("service-unit-price").value);

        if (description && quantity > 0 && unitPrice > 0) {
            const serviceTotal = quantity * unitPrice;
            totalAmount += serviceTotal;

            // Add row to service list
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${description}</td>
                <td>${quantity}</td>
                <td>$${unitPrice.toFixed(2)}</td>
                <td>$${serviceTotal.toFixed(2)}</td>
            `;
            serviceList.appendChild(row);

            // Update total
            invoiceTotal.textContent = totalAmount.toFixed(2);

            // Clear form fields
            document.getElementById("service-description").value = "";
            document.getElementById("service-quantity").value = "";
            document.getElementById("service-unit-price").value = "";

            // Remove 'No services added yet' row if present
            const noServicesRow = serviceList.querySelector("tr td[colspan='4']");
            if (noServicesRow) {
                noServicesRow.parentElement.remove();
            }
        } else {
            alert("Please fill out all fields with valid values.");
        }
    });
});
