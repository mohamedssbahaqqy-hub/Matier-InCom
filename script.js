// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("الصفحة جاهزة والتطبيق يعمل بـ JavaScript!");

    // مثال: دالة للبحث وتصفية المشاريع أو المقالات في الجدول
    const searchInput = document.getElementById("searchInput");
    
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const filter = this.value.toLowerCase();
            const rows = document.querySelectorAll("tbody tr");

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(filter)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
});

// دالة لتحديث كمية مشروع معين ديناميكياً
function updateQuantity(projectIndex, newQuantity) {
    const rows = document.querySelectorAll("tbody tr");
    if (rows[projectIndex]) {
        const quantityCell = rows[projectIndex].querySelector("td:last-child");
        if (quantityCell) {
            quantityCell.textContent = newQuantity;
        }
    }
}
