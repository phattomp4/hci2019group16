function openWeek(evt, weekName) {
    // Hide all elements with class="tabcontent"
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected week content and set the button as active
    document.getElementById(weekName).style.display = "block";
    evt.currentTarget.className += " active";

    // Populate the unique table for the selected week
    populateTable(weekName);
}

function populateTable(weekId) {
    const table = document.getElementById(`table-${weekId}`);
    table.innerHTML = `
      <tr>
        <th>STT</th>
        <th>Mã SV</th>
        <th>Họ tên</th>
        <th>Công việc được giao</th>
        <th>Kết quả</th>
        <th>Tiến độ</th>
      </tr>
    `;

    // Sample data, you can modify this to include specific data for each week
    const data = {
        week1: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Tab Home_01 / About / Thanh Menu', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Design table ở Group Diary và Requiment', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Thanh Menu / Home_02 / contact / footer', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Login / Register / Forgot Pass trên web project', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Login / Register / Forgot Pass trên web project', ketQua: 'Hoàn thành', tienDo: '100%' }


        ],
        week2: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Lên ý tưởng cho web nhóm, thảo luận, phân chia công việc', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Lên ý tưởng cho mục contact và chú ý trang thông tin,', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Lên ý tưởng cho trang thông tin của project', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Lên ý tưởng về nội dung, design phần đăng nhập, đăng kí', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Lên ý tưởng design web về giao diện, hình ảnh', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week3: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Giao diện ban đầu, góp ý chỉnh sửa, đồng nhất thiết kế giữa các phần', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Hoàn thành giao diện Contact và chú ý trang thông tin và tham khảo thông tin các CLB',  ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Tìm hiểu thông tin các CLB, chỉnh sửa và hoàn thành giao diện lần 1',  ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Hoàn thành giao diện lần 1 của đăng nhập, đăng kí, góp ý chỉnh sửa các nội dung',  ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Kiểm tra các chức năng, hoàn thành Trang giới thiệu', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],

        week4: [
            { maSV: '23130232', hoTen: 'Tô Tấn Phát', congViec: 'Hoàn chỉnh Header trang CLB/TỔ/ĐỘI/NHÓM, Slideshow và Tin tức mới nhất', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130327', hoTen: 'Nguyễn Hoài Thương', congViec: 'Hoàn chỉnh CONTACT, Mục CHÚ Ý TRANG THÔNG TIN, Bản tin trang CLB/TỔ/ĐỘI/NHÓM', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '23130355', hoTen: 'Lê Quang Trường', congViec: 'Hoàn chỉnh Header TRANG THÔNG TIN và Footer', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130105', hoTen: 'Phan Thanh Huy', congViec: 'Hoàn chỉnh Đăng nhập, Đăng ký và mục Bản tin TRANG THÔNG TIN', ketQua: 'Hoàn thành', tienDo: '100%' },
            { maSV: '22130150', hoTen: 'Võ Phước Lộc', congViec: 'Hoàn chỉnh TRANG GIỚI THIỆU', ketQua: 'Hoàn thành', tienDo: '100%' }
        ],
        // Add more sample data for weeks 3 to 10
    };

    const weekData = data[weekId] || [];
    weekData.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.maSV}</td>
        <td>${row.hoTen}</td>
        <td>${row.congViec}</td>
        <td>${row.ketQua}</td>
        <td>${row.tienDo}</td>
      `;
        table.appendChild(tr);
    });
}

// Initialize by displaying the first tab
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablink").click();
});
