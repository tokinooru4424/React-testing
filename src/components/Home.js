const Home = () => {
  return (
    <>
      <div className="Home-container">
        <div>Sử dụng API từ trang https://reqres.in/</div>
        <div>
          Sử dụng thư viện React, tạo màn hình website cơ bản với các chức năng
        </div>
        <ul>
          <li> 1. Đăng nhập</li>
          <li> 2. Thêm user</li>
          <li> 3. Sửa user</li>
          <li> 4. Xóa user</li>
          <li> 5. Hiển thị tất cả các user</li>
          <li> 6. Tìm kiếm user theo mail</li>
          <li> 7. Sắp xếp theo ID và first_name</li>
          <li> 8. Import User từ file CSV </li>
          <li> 9. Export User ra file CSV</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
