document.addEventListener("DOMContentLoaded", function () {
  populateRequirementTable();
});

function populateRequirementTable() {
  const tableBody = document.querySelector("#requirement-table tbody");

  // Sample data without the "Number" field as it will be auto-generated
  const data = [
    { functional: 'Header trang CLB / Slideshow / Tin tức mới nhất', designer: 'Phát', performer: 'Phát', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Mục CHÚ Ý TRANG THÔNG TIN / tab bảng tin CLB / CONTACT', designer: 'Thương', performer: 'Thương', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Bản thiết kế trên giấy / Header TRANG THÔNG TIN / Footer', designer: 'Trường', performer: 'Trường', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Đăng nhập, Đăng ký / Bản tin TRANG THÔNG TIN ', designer: 'Huy', performer: 'Huy', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Tìm hình ảnh, ý tưởng / TRANG GIỚI THIỆU', designer: 'Lộc', performer: 'Lộc', intendTime: '3 tuần', status: 'Hoàn thành' },
    // Add more sample rows as needed
  ];

  data.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.functional}</td>
        <td>${row.designer}</td>
        <td>${row.performer}</td>
        <td>${row.intendTime}</td>
        <td>${row.status}</td>
      `;
    tableBody.appendChild(tr);
  });
}
