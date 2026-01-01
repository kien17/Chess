function Square({ isBlack, piece }) {
  
  // Logic: Nếu isBlack là true thì gán class css "black", ngược lại là "white"
  const className = isBlack ? "square black" : "square white";

  return (
    <div className={className}>
      {/* Hiển thị tên quân cờ hoặc ký hiệu (ví dụ: "K", "P"...) */}
      {piece}
    </div>
  );
}

export default Square;