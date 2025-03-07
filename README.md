# js-basic-calculator

Máy tính đơn giản 🧮

Hỗ trợ các phép toán cơ bản (+, -, \*, /)
Hiển thị lịch sử tính toán
🎯 Phân tích yêu cầu
Chúng ta cần xây dựng một máy tính đơn giản với các tính năng sau:

Nhập số và phép toán: Hỗ trợ các phép tính cơ bản +, -, *, /.
Hiển thị kết quả: Sau khi tính toán, kết quả sẽ hiển thị trên màn hình.
Lịch sử tính toán: Lưu lại các phép tính đã thực hiện.
Xóa lịch sử: Có nút để xóa toàn bộ lịch sử.
🏗️ Cấu trúc thư mục
bash
Sao chép
Chỉnh sửa
simple-calculator/
│── index.html # Giao diện máy tính
│── style.css # CSS để trang trí
│── script.js # Xử lý logic tính toán
🖥 Giao diện mong muốn
Một màn hình hiển thị (giống máy tính điện tử).
*Các nút số (0-9) và phép toán (+, -, , /, =)
Nút "C" để xóa toàn bộ
Khu vực hiển thị lịch sử tính toán
Ví dụ giao diện:

pgsql
Sao chép
Chỉnh sửa

---

| 12 + 5 | <-- Màn hình hiển thị

---

| 7 | 8 | 9 | / |
| 4 | 5 | 6 | \* |
| 1 | 2 | 3 | - |
| 0 | C | = | + |

---

[ Lịch sử tính toán ]
12 + 5 = 17
3 \* 4 = 12
🚀 Tính năng chính trong script.js
Bắt sự kiện khi nhấn nút số và phép toán
Tính toán kết quả khi nhấn "="
Lưu lịch sử vào localStorage
Hiển thị lịch sử tính toán
Nút xóa để reset toàn bộ
