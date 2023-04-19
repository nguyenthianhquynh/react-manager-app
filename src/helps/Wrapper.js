//xử lý lỗi, xác thực người dùng, định dạng hiển thị,...
//Đóng gói logic xử lý và tái sử dụng nó cho nhiều component khác nhau: ví dụ như xử lý dữ liệu, truy xuất API, cập nhật trạng thái,...
// Tách logic xử lý ra khỏi component để làm cho chúng dễ hiểu hơn, dễ bảo trì hơn và dễ kiểm thử hơn.
//validation
//bao bọc một component hiển thị để thêm chức năng đăng nhập trước khi hiển thị nội dung.
const Wrapper = props =>
 {return props.children}

export default Wrapper;