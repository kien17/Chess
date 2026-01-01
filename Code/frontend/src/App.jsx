import { useState, useEffect } from 'react' // Import 2 công cụ quan trọng
import './App.css'

function App() {
  // 1. Tạo một biến 'message' để lưu dòng chữ lấy từ Python về
  const [message, setMessage] = useState("Đang kết nối...")

  // 2. useEffect giúp chạy đoạn code bên trong ngay khi trang web vừa tải xong
  useEffect(() => {
    // Gọi đến địa chỉ của Python Backend
    fetch("http://127.0.0.1:5000/")
      .then(response => response.json()) // Chuyển đổi dữ liệu nhận được thành JSON
      .then(data => {
        // Lấy phần "message" từ JSON và lưu vào biến
        setMessage(data.message) 
        console.log("Đã nhận dữ liệu:", data)
      })
      .catch(error => console.error("Lỗi rồi:", error))
  }, [])

  return (
    <div className="App">
      <h1>Chess AI Project</h1>
      {/* 3. Hiển thị biến message ra màn hình */}
      <p>Server nói: <strong>{message}</strong></p>
    </div>
  )
}

export default App