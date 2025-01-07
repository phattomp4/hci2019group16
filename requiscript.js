document.addEventListener("DOMContentLoaded", function () {
  populateRequirementTable();
});

function populateRequirementTable() {
  const tableBody = document.querySelector("#requirement-table tbody");

  // Sample data without the "Number" field as it will be auto-generated
  const data = [
    { functional: 'Thiết kế / tab bảng tin CLB tổ đội nhóm', designer: 'Thương', performer: 'Thương', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Registration / menu Header / contact team', designer: 'Phát', performer: 'Phát', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Ý tưởng / Footer / chức năng góp ý xây dựng', designer: 'Trường', performer: 'Trường', intendTime: '3 ngày', status: 'Hoàn thành' },
    { functional: 'Home / tab Bảng tin trường', designer: 'Lộc', performer: 'Lộc', intendTime: '3 tuần', status: 'Hoàn thành' },
    { functional: 'Login / thu thập thông tin về các hoạt động / contact nhà trường ', designer: 'Huy', performer: 'Huy', intendTime: '3 tuần', status: 'Hoàn thành' },
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
